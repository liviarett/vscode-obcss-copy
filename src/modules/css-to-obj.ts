import mapping, { Mapping } from '../mapping';
import { trim, map, toNumber, startsWith, endsWith, countBy } from 'lodash';
import { selectedTextExpanded, getExpandedRange, updateSelection } from '../editor';
import { handleError, replaceText } from '../code-actions';

function getJSKey(cssKey: string): string {
  const value = (mapping as Mapping).cssToJs[cssKey];
  if (!value) {
    throw new Error(`We could not parse "${cssKey}"`);
  }
  return value;
}

function countJSObject(value: string): number {
  var count = 0
	for (let i = 0; i < value.length; i++) {
   if (value[i] === '$' && value[i + 1] === '{') {
      count++
    }
  }
  return count
}

function getJSValue(value: string): string | number {
  const isNumberValue = !isNaN(toNumber(value));
  if (isNumberValue) {
    return value
  }

  const jsObjectCount = countJSObject(value)
  const isSingleJsObject = value[0] === '$' && value[1] === '{' && value[value.length - 1] === '}' && jsObjectCount === 1
  if (isSingleJsObject) {
    return value.replace('${', '').replace('}', '')
  }
  if (jsObjectCount > 0) {
    return '`' + value + '`'
  }
  return `'${value}'`
}

function convertCSSToJS(text: string): string {
  let jsOutput = '';
  let textToParse = text
  const splitText = text.split('css`')
  const hasDeclaration = splitText.length > 1
  if (hasDeclaration) {
    jsOutput += `${splitText[0]}css({\n`
    textToParse = splitText[1]
    const closingTickIndex = textToParse.lastIndexOf('`')
    if (closingTickIndex > 0) {
      textToParse = textToParse.slice(0, closingTickIndex) + textToParse.slice(closingTickIndex + 1);
    }
  }

  const text1 = trim(textToParse)
    .slice(0, -1)
    .split(';');
  const pairs = map(text1, trim);

  pairs.forEach((t: string) => {
    const split = map(t.split(':'), trim);
    const key = getJSKey(split[0])
    const value = getJSValue(split[1])
    jsOutput += `${key}: ${value},\n`;
  });

  if (hasDeclaration) {
    jsOutput += '})\n'
  }

  return jsOutput;
}

export async function cssToObj() {
  try {
    const expandedRange = getExpandedRange();
    const result = convertCSSToJS(selectedTextExpanded());
    await replaceText(expandedRange, result);
    updateSelection(expandedRange);
    // Comment: below is the old code inspired from vscode-glean extension:
    // const selectionProccessingResult = convertCSSToJS(selectedText());
    // await persistFileSystemChanges(replaceSelectionWith(selectionProccessingResult));
  } catch (e) {
    handleError(e);
  }
}
