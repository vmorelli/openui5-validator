sap.ui.define(["./es/index"],function(e){"use strict";var a={};a.localize_es=function(e){if(!(e&&e.length))return;for(var a=0;a<e.length;a++){var r=e[a];var s;switch(r.keyword){case"$ref":s="no se puede resolver la referencia "+r.params.ref;break;case"additionalItems":s="";var i=r.params.limit;s+="no debe tener más de "+i+" elemento";if(i!=1){s+="s"}break;case"additionalProperties":s="no debe tener propiedades adicionales";break;case"anyOf":s='debe coincidir con algún esquema en "anyOf"';break;case"const":s="debe ser igual a la constante";break;case"contains":s="should contain a valid item";break;case"custom":s='debe pasar la validación de palabra clave "'+r.keyword+'"';break;case"dependencies":s="";var i=r.params.depsCount;s+="debe contener la";if(i!=1){s+="s"}s+=" propiedad";if(i!=1){s+="es"}s+=" "+r.params.deps+" cuando la propiedad "+r.params.property+" se encuentra presente";break;case"enum":s="deber ser igual a uno de los valores predefinidos";break;case"exclusiveMaximum":s="";var n=r.params.comparison+" "+r.params.limit;s+="debe ser "+n;break;case"exclusiveMinimum":s="";var n=r.params.comparison+" "+r.params.limit;s+="debe ser "+n;break;case"false schema":s="boolean schema is false";break;case"format":s='debe coincidir con el formato "'+r.params.format+'"';break;case"formatExclusiveMaximum":s="formatExclusiveMaximum debe ser booleano";break;case"formatExclusiveMinimum":s="formatExclusiveMinimum debe ser booleano";break;case"formatMaximum":s="";var n=r.params.comparison+" "+r.params.limit;s+="debe ser "+n;break;case"formatMinimum":s="";var n=r.params.comparison+" "+r.params.limit;s+="debe ser "+n;break;case"if":s='should match "'+r.params.failingKeyword+'" schema';break;case"maximum":s="";var n=r.params.comparison+" "+r.params.limit;s+="debe ser "+n;break;case"maxItems":s="";var i=r.params.limit;s+="no debe contener más de "+i+" elemento";if(i!=1){s+="s"}break;case"maxLength":s="";var i=r.params.limit;s+="no debe contener más de "+i+" caracter";if(i!=1){s+="es"}break;case"maxProperties":s="";var i=r.params.limit;s+="no debe contener más de "+i+" propiedad";if(i!=1){s+="es"}break;case"minimum":s="";var n=r.params.comparison+" "+r.params.limit;s+="debe ser "+n;break;case"minItems":s="";var i=r.params.limit;s+="no debe contener menos de "+i+" elemento";if(i!=1){s+="s"}break;case"minLength":s="";var i=r.params.limit;s+="no debe contener menos de "+i+" caracter";if(i!=1){s+="es"}break;case"minProperties":s="";var i=r.params.limit;s+="no debe contener menos de "+i+" propiedad";if(i!=1){s+="es"}break;case"multipleOf":s="debe ser múltiplo de "+r.params.multipleOf;break;case"not":s='no debe ser válido según el esquema en "not"';break;case"oneOf":s='debe coincidir con un solo esquema en "oneOf"';break;case"pattern":s='debe coincidir con el patron "'+r.params.pattern+'"';break;case"patternRequired":s='la propiedad debe coincidir con el patrón "'+r.params.missingPattern+'"';break;case"propertyNames":s="property name '"+r.params.propertyName+"' is invalid";break;case"required":s="debe tener la propiedad requerida "+r.params.missingProperty;break;case"switch":s='debe pasar la validación "switch" de palabra clave, el caso '+r.params.caseIndex+" falló";break;case"type":s="debe ser "+r.params.type;break;case"uniqueItems":s="no debe contener elementos duplicados, (los elementos ## "+r.params.j+" y "+r.params.i+" son idénticos)";break;default:continue}r.message=s}};return a},true);