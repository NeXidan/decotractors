export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function decorateFunction(func) {
    return function (...args) {
        return function (target, key, descriptor) {
            return {
                configurable: true,
                enumerable: descriptor.enumerable,
                get: function getter() {
                    // attach this function to the instance (not the class)
                    Object.defineProperty(this, key, {
                        configurable: true,
                        writable: true,
                        enumerable: descriptor.enumerable,
                        value: func(descriptor.value, ...args)
                    });
                    return this[key];
                }
            };
        };
    };
}
