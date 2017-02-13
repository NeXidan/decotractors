import {merge as lodashMerge} from 'lodash';

export function Defaults(prototype = {}, {merge, ...options} = {}) {
    return function (TargetComponent) {
        for (let key in prototype) {
            let value = prototype[key];

            if (merge) {
                lodashMerge(value, TargetComponent.prototype[key]);
            }

            Object.defineProperty(TargetComponent.prototype, key, {
                configurable: true,
                enumerable: false,
                writable: true,
                value
            });
        }
    };
}
