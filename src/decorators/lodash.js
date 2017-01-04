import lodash from 'lodash';

import {decorateFunction, capitalizeFirstLetter} from '../libs/utils';

const FUNCTION_LIST = [
    'after', 'ary', 'before', 'bind', 'bindAll', 'bindKey', 'curry',
    'curryRight', 'debounce', 'defer', 'delay', 'flow', 'flowRight',
    'memoize', 'modArgs', 'negate', 'once', 'partial', 'partialRight',
    'rearg', 'restParam', 'spread', 'throttle', 'wrap'
];

module.exports = FUNCTION_LIST.reduce((decorators, name) => {
    const func = lodash[name];

    if (func) {
        const decorator = capitalizeFirstLetter(name);
        decorators[decorator] = decorateFunction(func);
    }

    return decorators;
}, {});
