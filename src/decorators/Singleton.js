export function Singleton(factory) {
    return function (TargetClass) {
        const INSTANCE = Symbol('__instance__');

        TargetClass.getInstance = function ({force = false} = {}) {
            if (!TargetClass[INSTANCE] || force) {
                TargetClass[INSTANCE] = factory ? factory() : new TargetClass();
            }

            return TargetClass[INSTANCE];
        };

        return TargetClass;
    };
}
