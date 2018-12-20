"use strict";module.exports=function a(e){if(!(e&&e.length))return;for(var r=0;r<e.length;r++){var s=e[r];var m;switch(s.keyword){case"$ref":m="не найдена схема "+s.params.ref;break;case"additionalItems":m="";var i=s.params.limit;m+="должно иметь не более, чем "+i+" элемент";if(i>=2&&i<=4){m+="а"}else if(i!=1){m+="ов"}break;case"additionalProperties":m="не должно иметь дополнительные поля";break;case"anyOf":m='должно соответствовать одной их схем в "anyOf"';break;case"const":m="должно быть равно заданному значению";break;case"contains":m="должно содержать значение соответствующее схеме";break;case"custom":m='должно соответствовать правилу "'+s.keyword+'"';break;case"dependencies":m="";var i=s.params.depsCount;m+="должно иметь пол";if(i==1){m+="е"}else{m+="я"}m+=" "+s.params.deps+", когда присутствует поле "+s.params.property;break;case"enum":m='должно быть равен одному из значений в "enum"';break;case"exclusiveMaximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="должно быть "+t;break;case"exclusiveMinimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="должно быть "+t;break;case"false schema":m="схема равна false";break;case"format":m='должно соответствовать формату "'+s.params.format+'"';break;case"formatExclusiveMaximum":m="formatExclusiveMaximum должно быть boolean";break;case"formatExclusiveMinimum":m="formatExclusiveMinimum должно быть boolean";break;case"formatMaximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="должно быть "+t;break;case"formatMinimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="должно быть "+t;break;case"if":m='должно соответствовать схемe "'+s.params.failingKeyword+'"';break;case"maximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="должно быть "+t;break;case"maxItems":m="";var i=s.params.limit;m+="должно иметь не более, чем "+i+" элемент";if(i>=2&&i<=4){m+="а"}else if(i!=1){m+="ов"}break;case"maxLength":m="";var i=s.params.limit;m+="должно быть не длиннее, чем "+i+" символ";if(i>=2&&i<=4){m+="а"}else if(i!=1){m+="ов"}break;case"maxProperties":m="";var i=s.params.limit;m+="должно иметь не более, чем "+i+" пол";if(i==1){m+="е"}else if(i>=2&&i<=4){m+="я"}else{m+="ей"}break;case"minimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="должно быть "+t;break;case"minItems":m="";var i=s.params.limit;m+="должно иметь не менее, чем "+i+" элемент";if(i>=2&&i<=4){m+="а"}else if(i!=1){m+="ов"}break;case"minLength":m="";var i=s.params.limit;m+="должно быть не короче, чем "+i+" символ";if(i>=2&&i<=4){m+="а"}else if(i!=1){m+="ов"}break;case"minProperties":m="";var i=s.params.limit;m+="должно иметь не менее, чем "+i+" пол";if(i==1){m+="е"}else if(i>=2&&i<=4){m+="я"}else{m+="ей"}break;case"multipleOf":m="должно быть кратным "+s.params.multipleOf;break;case"not":m='должно не соответствовать схеме в "not"';break;case"oneOf":m='должно соответствовать в точности одной схемe в "oneOf"';break;case"pattern":m='должно соответствовать образцу "'+s.params.pattern+'"';break;case"patternRequired":m='должно иметь поле, соответствующее образцу "'+s.params.missingPattern+'"';break;case"propertyNames":m="имя поля '"+s.params.propertyName+"' не соответствует схеме";break;case"required":m="должно иметь обязательное поле "+s.params.missingProperty;break;case"switch":m="должно соответствовать правилу "+s.params.caseIndex+' в "switch"';break;case"type":m="должно быть "+s.params.type;break;case"uniqueItems":m="не должно иметь повторяющихся элементов (элементы "+s.params.j+" и "+s.params.i+" идентичны)";break;default:continue}s.message=m}};