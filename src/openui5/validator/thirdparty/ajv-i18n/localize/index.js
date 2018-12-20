;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.ajvI18n = factory()
}(this, (function () {

'use strict';

var ajvI18n = {
    en: require('./en'),
    ar: require('./ar'),
    cz: require('./cz'),
    de: require('./de'),
    es: require('./es'),
    fr: require('./fr'),
    hu: require('./hu'),
    it: require('./it'),
    ja: require('./ja'),
    nb: require('./nb'),
    pl: require('./pl'),
    'pt-BR': require('./pt-BR'),
    ru: require('./ru'),
    sk: require('./sk'),
    sv: require('./sv'),
    th: require('./th'),
    zh: require('./zh'),
    'zh-TW': require('./zh-TW'),
};

return ajvI18n;

})));
