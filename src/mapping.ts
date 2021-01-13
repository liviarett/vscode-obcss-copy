export interface JsToCSS {
  [key: string]: string;
}

export interface CSSToJS {
  [key: string]: string;
}

export interface Mapping {
  jsToCss: JsToCSS;
  cssToJs: CSSToJS;
}

const mapping = {
  jsToCss: {
    alignContent: 'align-content',
    alignItems: 'align-items',
    alignSelf: 'align-self',
    alignmentBaseline: 'alignment-baseline',
    all: 'all',
    animation: 'animation',
    animationDelay: 'animation-delay',
    animationDirection: 'animation-direction',
    animationDuration: 'animation-duration',
    animationFillMode: 'animation-fill-mode',
    animationIterationCount: 'animation-iteration-count',
    animationName: 'animation-name',
    animationPlayState: 'animation-play-state',
    animationTimingFunction: 'animation-timing-function',
    appearance: 'appearance',
    azimuth: 'azimuth',
    backfaceVisibility: 'backface-visibility',
    background: 'background',
    backgroundAttachment: 'background-attachment',
    backgroundBlendMode: 'background-blend-mode',
    backgroundClip: 'background-clip',
    backgroundColor: 'background-color',
    backgroundImage: 'background-image',
    backgroundOrigin: 'background-origin',
    backgroundPosition: 'background-position',
    backgroundRepeat: 'background-repeat',
    backgroundSize: 'background-size',
    baselineShift: 'baseline-shift',
    binding: 'binding',
    bleed: 'bleed',
    bookmarkLabel: 'bookmark-label',
    bookmarkLevel: 'bookmark-level',
    bookmarkState: 'bookmark-state',
    border: 'border',
    borderBottom: 'border-bottom',
    borderBottomColor: 'border-bottom-color',
    borderBottomLeftRadius: 'border-bottom-left-radius',
    borderBottomRightRadius: 'border-bottom-right-radius',
    borderBottomStyle: 'border-bottom-style',
    borderBottomWidth: 'border-bottom-width',
    borderBoundary: 'border-boundary',
    borderCollapse: 'border-collapse',
    borderColor: 'border-color',
    borderImage: 'border-image',
    borderImageOutset: 'border-image-outset',
    borderImageRepeat: 'border-image-repeat',
    borderImageSlice: 'border-image-slice',
    borderImageSource: 'border-image-source',
    borderImageWidth: 'border-image-width',
    borderLeft: 'border-left',
    borderLeftColor: 'border-left-color',
    borderLeftStyle: 'border-left-style',
    borderLeftWidth: 'border-left-width',
    borderRadius: 'border-radius',
    borderRight: 'border-right',
    borderRightColor: 'border-right-color',
    borderRightStyle: 'border-right-style',
    borderRightWidth: 'border-right-width',
    borderSpacing: 'border-spacing',
    borderStyle: 'border-style',
    borderTop: 'border-top',
    borderTopColor: 'border-top-color',
    borderTopLeftRadius: 'border-top-left-radius',
    borderTopRightRadius: 'border-top-right-radius',
    borderTopStyle: 'border-top-style',
    borderTopWidth: 'border-top-width',
    borderWidth: 'border-width',
    bottom: 'bottom',
    boxDecorationBreak: 'box-decoration-break',
    boxShadow: 'box-shadow',
    boxSizing: 'box-sizing',
    boxSnap: 'box-snap',
    boxSuppress: 'box-suppress',
    breakAfter: 'break-after',
    breakBefore: 'break-before',
    breakInside: 'break-inside',
    captionSide: 'caption-side',
    caret: 'caret',
    caretColor: 'caret-color',
    caretShape: 'caret-shape',
    chains: 'chains',
    clear: 'clear',
    clip: 'clip',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    color: 'color',
    colorAdjust: 'color-adjust',
    colorInterpolationFilters: 'color-interpolation-filters',
    columnCount: 'column-count',
    columnFill: 'column-fill',
    columnGap: 'column-gap',
    columnRule: 'column-rule',
    columnRuleColor: 'column-rule-color',
    columnRuleStyle: 'column-rule-style',
    columnRuleWidth: 'column-rule-width',
    columnSpan: 'column-span',
    columnWidth: 'column-width',
    columns: 'columns',
    contain: 'contain',
    content: 'content',
    counterIncrement: 'counter-increment',
    counterReset: 'counter-reset',
    counterSet: 'counter-set',
    crop: 'crop',
    cue: 'cue',
    cueAfter: 'cue-after',
    cueBefore: 'cue-before',
    cursor: 'cursor',
    direction: 'direction',
    display: 'display',
    displayInside: 'display-inside',
    displayList: 'display-list',
    displayOutside: 'display-outside',
    dominantBaseline: 'dominant-baseline',
    elevation: 'elevation',
    emptyCells: 'empty-cells',
    filter: 'filter',
    flex: 'flex',
    flexBasis: 'flex-basis',
    flexDirection: 'flex-direction',
    flexFlow: 'flex-flow',
    flexGrow: 'flex-grow',
    flexShrink: 'flex-shrink',
    flexWrap: 'flex-wrap',
    float: 'float',
    floatOffset: 'float-offset',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    flowFrom: 'flow-from',
    flowInto: 'flow-into',
    font: 'font',
    fontFamily: 'font-family',
    fontFeatureSettings: 'font-feature-settings',
    fontKerning: 'font-kerning',
    fontLanguageOverride: 'font-language-override',
    fontMaxSize: 'font-max-size',
    fontMinSize: 'font-min-size',
    fontOpticalSizing: 'font-optical-sizing',
    fontPalette: 'font-palette',
    fontPresentation: 'font-presentation',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontSynthesis: 'font-synthesis',
    fontVariant: 'font-variant',
    fontVariantAlternates: 'font-variant-alternates',
    fontVariantCaps: 'font-variant-caps',
    fontVariantEastAsian: 'font-variant-east-asian',
    fontVariantLigatures: 'font-variant-ligatures',
    fontVariantNumeric: 'font-variant-numeric',
    fontVariantPosition: 'font-variant-position',
    fontVariationSettings: 'font-variation-settings',
    fontWeight: 'font-weight',
    grid: 'grid',
    gridArea: 'grid-area',
    gridAutoColumns: 'grid-auto-columns',
    gridAutoFlow: 'grid-auto-flow',
    gridAutoRows: 'grid-auto-rows',
    gridColumn: 'grid-column',
    gridColumnEnd: 'grid-column-end',
    gridColumnStart: 'grid-column-start',
    gridGap: 'grid-gap',
    gridRow: 'grid-row',
    gridRowEnd: 'grid-row-end',
    gridRowStart: 'grid-row-start',
    gridTemplate: 'grid-template',
    gridTemplateAreas: 'grid-template-areas',
    gridTemplateColumns: 'grid-template-columns',
    gridTemplateRows: 'grid-template-rows',
    hangingPunctuation: 'hanging-punctuation',
    height: 'height',
    hyphens: 'hyphens',
    icon: 'icon',
    imageOrientation: 'image-orientation',
    imageRendering: 'image-rendering',
    imageResolution: 'image-resolution',
    imeMode: 'ime-mode',
    initialLetters: 'initial-letters',
    initialLettersAlign: 'initial-letters-align',
    initialLettersWrap: 'initial-letters-wrap',
    inlineSizing: 'inline-sizing',
    isolation: 'isolation',
    justifyContent: 'justify-content',
    justifyItems: 'justify-items',
    justifySelf: 'justify-self',
    left: 'left',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    lineBreak: 'line-break',
    lineGrid: 'line-grid',
    lineHeight: 'line-height',
    lineSnap: 'line-snap',
    listStyle: 'list-style',
    listStyleImage: 'list-style-image',
    listStylePosition: 'list-style-position',
    listStyleType: 'list-style-type',
    margin: 'margin',
    marginBottom: 'margin-bottom',
    marginLeft: 'margin-left',
    marginRight: 'margin-right',
    marginTop: 'margin-top',
    markerOffset: 'marker-offset',
    markerSide: 'marker-side',
    marks: 'marks',
    mask: 'mask',
    maskBox: 'mask-box',
    maskBoxOutset: 'mask-box-outset',
    maskBoxRepeat: 'mask-box-repeat',
    maskBoxSlice: 'mask-box-slice',
    maskBoxSource: 'mask-box-source',
    maskBoxWidth: 'mask-box-width',
    maskClip: 'mask-clip',
    maskImage: 'mask-image',
    maskOrigin: 'mask-origin',
    maskPosition: 'mask-position',
    maskRepeat: 'mask-repeat',
    maskSize: 'mask-size',
    maskSourceType: 'mask-source-type',
    maskType: 'mask-type',
    maxHeight: 'max-height',
    maxLines: 'max-lines',
    maxWidth: 'max-width',
    minHeight: 'min-height',
    minWidth: 'min-width',
    mixBlendMode: 'mix-blend-mode',
    moveTo: 'move-to',
    navDown: 'nav-down',
    navIndex: 'nav-index',
    navLeft: 'nav-left',
    navRight: 'nav-right',
    navUp: 'nav-up',
    objectFit: 'object-fit',
    objectPosition: 'object-position',
    opacity: 'opacity',
    order: 'order',
    orphans: 'orphans',
    outline: 'outline',
    outlineColor: 'outline-color',
    outlineOffset: 'outline-offset',
    outlineStyle: 'outline-style',
    outlineWidth: 'outline-width',
    overflow: 'overflow',
    overflowWrap: 'overflow-wrap',
    overflowX: 'overflow-x',
    overflowY: 'overflow-y',
    padding: 'padding',
    paddingBottom: 'padding-bottom',
    paddingLeft: 'padding-left',
    paddingRight: 'padding-right',
    paddingTop: 'padding-top',
    page: 'page',
    pageBreakAfter: 'page-break-after',
    pageBreakBefore: 'page-break-before',
    pageBreakInside: 'page-break-inside',
    pagePolicy: 'page-policy',
    pause: 'pause',
    pauseAfter: 'pause-after',
    pauseBefore: 'pause-before',
    perspective: 'perspective',
    perspectiveOrigin: 'perspective-origin',
    pitch: 'pitch',
    pitchRange: 'pitch-range',
    playDuring: 'play-during',
    polarAnchor: 'polar-anchor',
    polarAngle: 'polar-angle',
    polarDistance: 'polar-distance',
    polarOrigin: 'polar-origin',
    position: 'position',
    presentationLevel: 'presentation-level',
    quotes: 'quotes',
    regionFragment: 'region-fragment',
    resize: 'resize',
    rest: 'rest',
    restAfter: 'rest-after',
    restBefore: 'rest-before',
    richness: 'richness',
    right: 'right',
    rowGap: 'row-gap',
    rubyAlign: 'ruby-align',
    rubyMerge: 'ruby-merge',
    rubyPosition: 'ruby-position',
    scrollPadding: 'scroll-padding',
    scrollPaddingBlock: 'scroll-padding-block',
    scrollPaddingBlockEnd: 'scroll-padding-block-end',
    scrollPaddingBlockStart: 'scroll-padding-block-start',
    scrollPaddingBottom: 'scroll-padding-bottom',
    scrollPaddingInline: 'scroll-padding-inline',
    scrollPaddingInlineEnd: 'scroll-padding-inline-end',
    scrollPaddingInlineStart: 'scroll-padding-inline-start',
    scrollPaddingLeft: 'scroll-padding-left',
    scrollPaddingRight: 'scroll-padding-right',
    scrollPaddingTop: 'scroll-padding-top',
    scrollSnapAlign: 'scroll-snap-align',
    scrollSnapMargin: 'scroll-snap-margin',
    scrollSnapMarginBlock: 'scroll-snap-margin-block',
    scrollSnapMarginBlockEnd: 'scroll-snap-margin-block-end',
    scrollSnapMarginBlockStart: 'scroll-snap-margin-block-start',
    scrollSnapMarginBottom: 'scroll-snap-margin-bottom',
    scrollSnapMarginInline: 'scroll-snap-margin-inline',
    scrollSnapMarginInlineEnd: 'scroll-snap-margin-inline-end',
    scrollSnapMarginInlineStart: 'scroll-snap-margin-inline-start',
    scrollSnapMarginLeft: 'scroll-snap-margin-left',
    scrollSnapMarginRight: 'scroll-snap-margin-right',
    scrollSnapMarginTop: 'scroll-snap-margin-top',
    scrollSnapStop: 'scroll-snap-stop',
    scrollSnapType: 'scroll-snap-type',
    shapeImageThreshold: 'shape-image-threshold',
    shapeInside: 'shape-inside',
    shapeOutside: 'shape-outside',
    shapeMargin: 'shape-margin',
    size: 'size',
    speak: 'speak',
    speakAs: 'speak-as',
    speakHeader: 'speak-header',
    speakNumeral: 'speak-numeral',
    speakPunctuation: 'speak-punctuation',
    speechRate: 'speech-rate',
    stress: 'stress',
    stringSet: 'string-set',
    tabSize: 'tab-size',
    tableLayout: 'table-layout',
    textAlign: 'text-align',
    textAlignLast: 'text-align-last',
    textCombineUpright: 'text-combine-upright',
    textDecoration: 'text-decoration',
    textDecorationColor: 'text-decoration-color',
    textDecorationLine: 'text-decoration-line',
    textDecorationSkip: 'text-decoration-skip',
    textDecorationStyle: 'text-decoration-style',
    textEmphasis: 'text-emphasis',
    textEmphasisColor: 'text-emphasis-color',
    textEmphasisPosition: 'text-emphasis-position',
    textEmphasisStyle: 'text-emphasis-style',
    textIndent: 'text-indent',
    textJustify: 'text-justify',
    textOrientation: 'text-orientation',
    textOverflow: 'text-overflow',
    textShadow: 'text-shadow',
    textSpaceCollapse: 'text-space-collapse',
    textTransform: 'text-transform',
    textUnderlinePosition: 'text-underline-position',
    textWrap: 'text-wrap',
    touchAction: 'touch-action',
    top: 'top',
    transform: 'transform',
    transformOrigin: 'transform-origin',
    transformStyle: 'transform-style',
    transition: 'transition',
    transitionDelay: 'transition-delay',
    transitionDuration: 'transition-duration',
    transitionProperty: 'transition-property',
    transitionTimingFunction: 'transition-timing-function',
    unicodeBidi: 'unicode-bidi',
    userSelect: 'user-select',
    verticalAlign: 'vertical-align',
    visibility: 'visibility',
    voiceBalance: 'voice-balance',
    voiceDuration: 'voice-duration',
    voiceFamily: 'voice-family',
    voicePitch: 'voice-pitch',
    voiceRange: 'voice-range',
    voiceRate: 'voice-rate',
    voiceStress: 'voice-stress',
    voiceVolume: 'voice-volume',
    volume: 'volume',
    whiteSpace: 'white-space',
    widows: 'widows',
    width: 'width',
    willChange: 'will-change',
    wordBreak: 'word-break',
    wordSpacing: 'word-spacing',
    wordWrap: 'word-wrap',
    wrapFlow: 'wrap-flow',
    wrapThrough: 'wrap-through',
    writingMode: 'writing-mode',
    zIndex: 'z-index'
  },
  cssToJs: {
    'align-content': 'alignContent',
    'align-items': 'alignItems',
    'align-self': 'alignSelf',
    'alignment-baseline': 'alignmentBaseline',
    all: 'all',
    animation: 'animation',
    'animation-delay': 'animationDelay',
    'animation-direction': 'animationDirection',
    'animation-duration': 'animationDuration',
    'animation-fill-mode': 'animationFillMode',
    'animation-iteration-count': 'animationIterationCount',
    'animation-name': 'animationName',
    'animation-play-state': 'animationPlayState',
    'animation-timing-function': 'animationTimingFunction',
    appearance: 'appearance',
    azimuth: 'azimuth',
    'backface-visibility': 'backfaceVisibility',
    background: 'background',
    'background-attachment': 'backgroundAttachment',
    'background-blend-mode': 'backgroundBlendMode',
    'background-clip': 'backgroundClip',
    'background-color': 'backgroundColor',
    'background-image': 'backgroundImage',
    'background-origin': 'backgroundOrigin',
    'background-position': 'backgroundPosition',
    'background-repeat': 'backgroundRepeat',
    'background-size': 'backgroundSize',
    'baseline-shift': 'baselineShift',
    binding: 'binding',
    bleed: 'bleed',
    'bookmark-label': 'bookmarkLabel',
    'bookmark-level': 'bookmarkLevel',
    'bookmark-state': 'bookmarkState',
    border: 'border',
    'border-bottom': 'borderBottom',
    'border-bottom-color': 'borderBottomColor',
    'border-bottom-left-radius': 'borderBottomLeftRadius',
    'border-bottom-right-radius': 'borderBottomRightRadius',
    'border-bottom-style': 'borderBottomStyle',
    'border-bottom-width': 'borderBottomWidth',
    'border-boundary': 'borderBoundary',
    'border-collapse': 'borderCollapse',
    'border-color': 'borderColor',
    'border-image': 'borderImage',
    'border-image-outset': 'borderImageOutset',
    'border-image-repeat': 'borderImageRepeat',
    'border-image-slice': 'borderImageSlice',
    'border-image-source': 'borderImageSource',
    'border-image-width': 'borderImageWidth',
    'border-left': 'borderLeft',
    'border-left-color': 'borderLeftColor',
    'border-left-style': 'borderLeftStyle',
    'border-left-width': 'borderLeftWidth',
    'border-radius': 'borderRadius',
    'border-right': 'borderRight',
    'border-right-color': 'borderRightColor',
    'border-right-style': 'borderRightStyle',
    'border-right-width': 'borderRightWidth',
    'border-spacing': 'borderSpacing',
    'border-style': 'borderStyle',
    'border-top': 'borderTop',
    'border-top-color': 'borderTopColor',
    'border-top-left-radius': 'borderTopLeftRadius',
    'border-top-right-radius': 'borderTopRightRadius',
    'border-top-style': 'borderTopStyle',
    'border-top-width': 'borderTopWidth',
    'border-width': 'borderWidth',
    bottom: 'bottom',
    'box-decoration-break': 'boxDecorationBreak',
    'box-shadow': 'boxShadow',
    'box-sizing': 'boxSizing',
    'box-snap': 'boxSnap',
    'box-suppress': 'boxSuppress',
    'break-after': 'breakAfter',
    'break-before': 'breakBefore',
    'break-inside': 'breakInside',
    'caption-side': 'captionSide',
    caret: 'caret',
    'caret-color': 'caretColor',
    'caret-shape': 'caretShape',
    chains: 'chains',
    clear: 'clear',
    clip: 'clip',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    color: 'color',
    'color-adjust': 'colorAdjust',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'column-count': 'columnCount',
    'column-fill': 'columnFill',
    'column-gap': 'columnGap',
    'column-rule': 'columnRule',
    'column-rule-color': 'columnRuleColor',
    'column-rule-style': 'columnRuleStyle',
    'column-rule-width': 'columnRuleWidth',
    'column-span': 'columnSpan',
    'column-width': 'columnWidth',
    columns: 'columns',
    contain: 'contain',
    content: 'content',
    'counter-increment': 'counterIncrement',
    'counter-reset': 'counterReset',
    'counter-set': 'counterSet',
    crop: 'crop',
    cue: 'cue',
    'cue-after': 'cueAfter',
    'cue-before': 'cueBefore',
    cursor: 'cursor',
    direction: 'direction',
    display: 'display',
    'display-inside': 'displayInside',
    'display-list': 'displayList',
    'display-outside': 'displayOutside',
    'dominant-baseline': 'dominantBaseline',
    elevation: 'elevation',
    'empty-cells': 'emptyCells',
    filter: 'filter',
    flex: 'flex',
    'flex-basis': 'flexBasis',
    'flex-direction': 'flexDirection',
    'flex-flow': 'flexFlow',
    'flex-grow': 'flexGrow',
    'flex-shrink': 'flexShrink',
    'flex-wrap': 'flexWrap',
    float: 'float',
    'float-offset': 'floatOffset',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'flow-from': 'flowFrom',
    'flow-into': 'flowInto',
    font: 'font',
    'font-family': 'fontFamily',
    'font-feature-settings': 'fontFeatureSettings',
    'font-kerning': 'fontKerning',
    'font-language-override': 'fontLanguageOverride',
    'font-max-size': 'fontMaxSize',
    'font-min-size': 'fontMinSize',
    'font-optical-sizing': 'fontOpticalSizing',
    'font-palette': 'fontPalette',
    'font-presentation': 'fontPresentation',
    'font-size': 'fontSize',
    'font-size-adjust': 'fontSizeAdjust',
    'font-stretch': 'fontStretch',
    'font-style': 'fontStyle',
    'font-synthesis': 'fontSynthesis',
    'font-variant': 'fontVariant',
    'font-variant-alternates': 'fontVariantAlternates',
    'font-variant-caps': 'fontVariantCaps',
    'font-variant-east-asian': 'fontVariantEastAsian',
    'font-variant-ligatures': 'fontVariantLigatures',
    'font-variant-numeric': 'fontVariantNumeric',
    'font-variant-position': 'fontVariantPosition',
    'font-variation-settings': 'fontVariationSettings',
    'font-weight': 'fontWeight',
    grid: 'grid',
    'grid-area': 'gridArea',
    'grid-auto-columns': 'gridAutoColumns',
    'grid-auto-flow': 'gridAutoFlow',
    'grid-auto-rows': 'gridAutoRows',
    'grid-column': 'gridColumn',
    'grid-column-end': 'gridColumnEnd',
    'grid-column-start': 'gridColumnStart',
    'grid-gap': 'gridGap',
    'grid-row': 'gridRow',
    'grid-row-end': 'gridRowEnd',
    'grid-row-start': 'gridRowStart',
    'grid-template': 'gridTemplate',
    'grid-template-areas': 'gridTemplateAreas',
    'grid-template-columns': 'gridTemplateColumns',
    'grid-template-rows': 'gridTemplateRows',
    'hanging-punctuation': 'hangingPunctuation',
    height: 'height',
    hyphens: 'hyphens',
    icon: 'icon',
    'image-orientation': 'imageOrientation',
    'image-rendering': 'imageRendering',
    'image-resolution': 'imageResolution',
    'ime-mode': 'imeMode',
    'initial-letters': 'initialLetters',
    'initial-letters-align': 'initialLettersAlign',
    'initial-letters-wrap': 'initialLettersWrap',
    'inline-sizing': 'inlineSizing',
    isolation: 'isolation',
    'justify-content': 'justifyContent',
    'justify-items': 'justifyItems',
    'justify-self': 'justifySelf',
    left: 'left',
    'letter-spacing': 'letterSpacing',
    'lighting-color': 'lightingColor',
    'line-break': 'lineBreak',
    'line-grid': 'lineGrid',
    'line-height': 'lineHeight',
    'line-snap': 'lineSnap',
    'list-style': 'listStyle',
    'list-style-image': 'listStyleImage',
    'list-style-position': 'listStylePosition',
    'list-style-type': 'listStyleType',
    margin: 'margin',
    'margin-bottom': 'marginBottom',
    'margin-left': 'marginLeft',
    'margin-right': 'marginRight',
    'margin-top': 'marginTop',
    'marker-offset': 'markerOffset',
    'marker-side': 'markerSide',
    marks: 'marks',
    mask: 'mask',
    'mask-box': 'maskBox',
    'mask-box-outset': 'maskBoxOutset',
    'mask-box-repeat': 'maskBoxRepeat',
    'mask-box-slice': 'maskBoxSlice',
    'mask-box-source': 'maskBoxSource',
    'mask-box-width': 'maskBoxWidth',
    'mask-clip': 'maskClip',
    'mask-image': 'maskImage',
    'mask-origin': 'maskOrigin',
    'mask-position': 'maskPosition',
    'mask-repeat': 'maskRepeat',
    'mask-size': 'maskSize',
    'mask-source-type': 'maskSourceType',
    'mask-type': 'maskType',
    'max-height': 'maxHeight',
    'max-lines': 'maxLines',
    'max-width': 'maxWidth',
    'min-height': 'minHeight',
    'min-width': 'minWidth',
    'mix-blend-mode': 'mixBlendMode',
    'move-to': 'moveTo',
    'nav-down': 'navDown',
    'nav-index': 'navIndex',
    'nav-left': 'navLeft',
    'nav-right': 'navRight',
    'nav-up': 'navUp',
    'object-fit': 'objectFit',
    'object-position': 'objectPosition',
    opacity: 'opacity',
    order: 'order',
    orphans: 'orphans',
    outline: 'outline',
    'outline-color': 'outlineColor',
    'outline-offset': 'outlineOffset',
    'outline-style': 'outlineStyle',
    'outline-width': 'outlineWidth',
    overflow: 'overflow',
    'overflow-wrap': 'overflowWrap',
    'overflow-x': 'overflowX',
    'overflow-y': 'overflowY',
    padding: 'padding',
    'padding-bottom': 'paddingBottom',
    'padding-left': 'paddingLeft',
    'padding-right': 'paddingRight',
    'padding-top': 'paddingTop',
    page: 'page',
    'page-break-after': 'pageBreakAfter',
    'page-break-before': 'pageBreakBefore',
    'page-break-inside': 'pageBreakInside',
    'page-policy': 'pagePolicy',
    pause: 'pause',
    'pause-after': 'pauseAfter',
    'pause-before': 'pauseBefore',
    perspective: 'perspective',
    'perspective-origin': 'perspectiveOrigin',
    pitch: 'pitch',
    'pitch-range': 'pitchRange',
    'play-during': 'playDuring',
    'polar-anchor': 'polarAnchor',
    'polar-angle': 'polarAngle',
    'polar-distance': 'polarDistance',
    'polar-origin': 'polarOrigin',
    position: 'position',
    'presentation-level': 'presentationLevel',
    quotes: 'quotes',
    'region-fragment': 'regionFragment',
    resize: 'resize',
    rest: 'rest',
    'rest-after': 'restAfter',
    'rest-before': 'restBefore',
    richness: 'richness',
    right: 'right',
    'row-gap': 'rowGap',
    'ruby-align': 'rubyAlign',
    'ruby-merge': 'rubyMerge',
    'ruby-position': 'rubyPosition',
    'scroll-padding': 'scrollPadding',
    'scroll-padding-block': 'scrollPaddingBlock',
    'scroll-padding-block-end': 'scrollPaddingBlockEnd',
    'scroll-padding-block-start': 'scrollPaddingBlockStart',
    'scroll-padding-bottom': 'scrollPaddingBottom',
    'scroll-padding-inline': 'scrollPaddingInline',
    'scroll-padding-inline-end': 'scrollPaddingInlineEnd',
    'scroll-padding-inline-start': 'scrollPaddingInlineStart',
    'scroll-padding-left': 'scrollPaddingLeft',
    'scroll-padding-right': 'scrollPaddingRight',
    'scroll-padding-top': 'scrollPaddingTop',
    'scroll-snap-align': 'scrollSnapAlign',
    'scroll-snap-margin': 'scrollSnapMargin',
    'scroll-snap-margin-block': 'scrollSnapMarginBlock',
    'scroll-snap-margin-block-end': 'scrollSnapMarginBlockEnd',
    'scroll-snap-margin-block-start': 'scrollSnapMarginBlockStart',
    'scroll-snap-margin-bottom': 'scrollSnapMarginBottom',
    'scroll-snap-margin-inline': 'scrollSnapMarginInline',
    'scroll-snap-margin-inline-end': 'scrollSnapMarginInlineEnd',
    'scroll-snap-margin-inline-start': 'scrollSnapMarginInlineStart',
    'scroll-snap-margin-left': 'scrollSnapMarginLeft',
    'scroll-snap-margin-right': 'scrollSnapMarginRight',
    'scroll-snap-margin-top': 'scrollSnapMarginTop',
    'scroll-snap-stop': 'scrollSnapStop',
    'scroll-snap-type': 'scrollSnapType',
    'shape-image-threshold': 'shapeImageThreshold',
    'shape-inside': 'shapeInside',
    'shape-outside': 'shapeOutside',
    'shape-margin': 'shapeMargin',
    size: 'size',
    speak: 'speak',
    'speak-as': 'speakAs',
    'speak-header': 'speakHeader',
    'speak-numeral': 'speakNumeral',
    'speak-punctuation': 'speakPunctuation',
    'speech-rate': 'speechRate',
    stress: 'stress',
    'string-set': 'stringSet',
    'tab-size': 'tabSize',
    'table-layout': 'tableLayout',
    'text-align': 'textAlign',
    'text-align-last': 'textAlignLast',
    'text-combine-upright': 'textCombineUpright',
    'text-decoration': 'textDecoration',
    'text-decoration-color': 'textDecorationColor',
    'text-decoration-line': 'textDecorationLine',
    'text-decoration-skip': 'textDecorationSkip',
    'text-decoration-style': 'textDecorationStyle',
    'text-emphasis': 'textEmphasis',
    'text-emphasis-color': 'textEmphasisColor',
    'text-emphasis-position': 'textEmphasisPosition',
    'text-emphasis-style': 'textEmphasisStyle',
    'text-indent': 'textIndent',
    'text-justify': 'textJustify',
    'text-orientation': 'textOrientation',
    'text-overflow': 'textOverflow',
    'text-shadow': 'textShadow',
    'text-space-collapse': 'textSpaceCollapse',
    'text-transform': 'textTransform',
    'text-underline-position': 'textUnderlinePosition',
    'text-wrap': 'textWrap',
    'touch-action': 'touchAction',
    top: 'top',
    transform: 'transform',
    'transform-origin': 'transformOrigin',
    'transform-style': 'transformStyle',
    transition: 'transition',
    'transition-delay': 'transitionDelay',
    'transition-duration': 'transitionDuration',
    'transition-property': 'transitionProperty',
    'transition-timing-function': 'transitionTimingFunction',
    'unicode-bidi': 'unicodeBidi',
    'user-select': 'userSelect',
    'vertical-align': 'verticalAlign',
    visibility: 'visibility',
    'voice-balance': 'voiceBalance',
    'voice-duration': 'voiceDuration',
    'voice-family': 'voiceFamily',
    'voice-pitch': 'voicePitch',
    'voice-range': 'voiceRange',
    'voice-rate': 'voiceRate',
    'voice-stress': 'voiceStress',
    'voice-volume': 'voiceVolume',
    volume: 'volume',
    'white-space': 'whiteSpace',
    widows: 'widows',
    width: 'width',
    'will-change': 'willChange',
    'word-break': 'wordBreak',
    'word-spacing': 'wordSpacing',
    'word-wrap': 'wordWrap',
    'wrap-flow': 'wrapFlow',
    'wrap-through': 'wrapThrough',
    'writing-mode': 'writingMode',
    'z-index': 'zIndex'
  }
};

export default mapping;