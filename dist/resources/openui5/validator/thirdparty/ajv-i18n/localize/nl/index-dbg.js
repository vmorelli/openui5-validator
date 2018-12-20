'use strict';
module.exports = function localize_nl(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'referentie ' + (e.params.ref) + ' niet gevonden';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'mag niet meer dan ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        out += ' hebben';
        break;
      case 'additionalProperties':
        out = 'mag geen extra eigenschappen hebben';
        break;
      case 'anyOf':
        out = 'moet overeenkomen met een schema in "anyOf"';
        break;
      case 'const':
        out = 'moet gelijk zijn aan constante';
        break;
      case 'contains':
        out = 'moet een geldig item bevatten';
        break;
      case 'custom':
        out = 'moet sleutelwoord validatie "' + (e.keyword) + '" doorstaan';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'moet eigenschap';
        if (n != 1) {
          out += 'pen';
        }
        out += ' ' + (e.params.deps) + ' hebben als eigenschap ' + (e.params.property) + ' aanwezig is';
        break;
      case 'enum':
        out = 'moet gelijk zijn aan één van de voorgedefinieerde waardes';
        break;
      case 'exclusiveMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'moet ' + (cond) + ' zijn';
        break;
      case 'exclusiveMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'moet ' + (cond) + ' zijn';
        break;
      case 'false schema':
        out = 'boolean schema is fout';
        break;
      case 'format':
        out = 'moet overeenkomen met dit formaat: "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum moet een boolean zijn';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum moet een boolean zijn';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'moet ' + (cond) + ' zijn';
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'moet ' + (cond) + ' zijn';
        break;
      case 'if':
        out = 'moet overeenkomen met "' + (e.params.failingKeyword) + '" schema';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'moet ' + (cond) + ' zijn';
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'mag niet meer dan ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        out += ' hebben';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'mag niet langer dan ' + (n) + ' karakter';
        if (n != 1) {
          out += 's';
        }
        out += ' zijn';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'mag niet meer dan ' + (n) + ' eigenschap';
        if (n != 1) {
          out += 'pen';
        }
        out += ' hebben';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'moet ' + (cond) + ' zijn';
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'mag niet minder dan ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        out += ' hebben';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'mag niet korter dan ' + (n) + ' karakter';
        if (n != 1) {
          out += 's';
        }
        out += ' zijn';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'mag niet minder dan ' + (n) + ' eigenschap';
        if (n != 1) {
          out += 'pen';
        }
        out += ' hebben';
        break;
      case 'multipleOf':
        out = 'moet een veelvoud van ' + (e.params.multipleOf) + ' zijn';
        break;
      case 'not':
        out = 'mag niet overeenkomen met een schema in "not"';
        break;
      case 'oneOf':
        out = 'mag maar met één schema in "oneOf" overeenkomen';
        break;
      case 'pattern':
        out = 'moet aan dit patroon voldoen "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'moet een eigenschap hebben met het volgende patroon "' + (e.params.missingPattern) + '"';
        break;
      case 'propertyNames':
        out = 'eigenschapnaam \'' + (e.params.propertyName) + '\' is ongeldig';
        break;
      case 'required':
        out = 'moet de verplichte eigenschap ' + (e.params.missingProperty) + ' hebben';
        break;
      case 'switch':
        out = 'moet "switch" sleutelwoord validatie doorstaan, geval ' + (e.params.caseIndex) + ' gaat verkeerd';
        break;
      case 'type':
        out = '';
        var t = e.params.type;
        out += 'moet een ';
        if (t == "number") {
          out += 'nummer';
        } else if (t == "integer") {
          out += 'geheel getal';
        } else if (t == "string") {
          out += 'tekenreeks';
        } else if (t == "boolean") {
          out += 'ja of nee waarde';
        }
        out += ' ({' + (t) + ') zijn';
        break;
      case 'uniqueItems':
        out = 'mag geen dubbele items bevatten (items ## ' + (e.params.j) + ' en ' + (e.params.i) + ' zijn gelijk)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};
