import mapping, { Mapping } from '../mapping';
import { trim, map, toNumber, isNaN } from 'lodash';
import { getExpandedRange, selectedTextExpanded, updateSelection } from '../editor';
import { handleError, replaceText } from '../code-actions';

function getCSSKey(jsKey: string): string {
  const value = (mapping as Mapping).jsToCss[jsKey];
  if (!value) {
    throw new Error(`We could not parse "${jsKey}"`);
  }
  return value;
}

function getCSSValue(value: string): string {
  const isString = ['`', `'`, '"'].includes(value[0])
  let nextValue = value.replace(/["'`]/g, '');
  const isNumberValue = !isNaN(toNumber(nextValue));

  if (!isString && !isNumberValue) {
    return '${' + nextValue + '}'
  }

  return nextValue;
}

function convertJSToCSS(text: string): string {
  let cssOutput = ``;
  let textToParse = text
  const splitText = text.split('css({')
  const hasDeclaration = splitText.length > 1

  if (hasDeclaration) {
    cssOutput += `${splitText[0]}css` + '`\n'
    textToParse = splitText[1]
    const closingIndex = textToParse.lastIndexOf(')')
    if (closingIndex > 0 && textToParse[closingIndex - 1] === '}') {
      textToParse = textToParse.slice(0, closingIndex - 1) + textToParse.slice(closingIndex + 1);
    }
  }

  const text1 = trim(textToParse)
    .slice(0, -1)
    .split(',');
  const pairs = map(text1, trim);

  pairs.forEach(t => {
    const split = map(t.split(':'), trim);
    const key = getCSSKey(split[0]);
    const value = getCSSValue(split[1]);

    cssOutput += `${key}: ${value};\n`;
  });


  if (hasDeclaration) {
    cssOutput += '`\n'
  }

  return cssOutput;
}

export async function objToCss() {
  try {
    const expandedRange = getExpandedRange();
    const result = convertJSToCSS(selectedTextExpanded());
    await replaceText(expandedRange, result);
    updateSelection(expandedRange);
    // Comment: below is the old code inspired from vscode-glean extension:
    // const selectionProccessingResult = convertJSToCSS(selectedText());
    // await persistFileSystemChanges(replaceSelectionWith(selectionProccessingResult));
  } catch (e) {
    handleError(e);
  }
}
