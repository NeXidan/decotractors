const decoratorsRequire = require.context('./decorators/', true, /.js$/);

module.exports = decoratorsRequire
    .keys()
    .map(decoratorsRequire)
    .reduce((decorators, module) => {
        const {__esModule, ...decorator} = module;
        return {...decorators, ...decorator};
    }, {});
