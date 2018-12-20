"use strict";module.exports=function a(e){if(!(e&&e.length))return;for(var s=0;s<e.length;s++){var r=e[s];var i;switch(r.keyword){case"$ref":i="can\\'t resolve reference "+r.params.ref;break;case"additionalItems":i="";var m=r.params.limit;i+="should not have more than "+m+" item";if(m!=1){i+="s"}break;case"additionalProperties":i="should not have additional properties";break;case"anyOf":i='should match some schema in "anyOf"';break;case"const":i="should be equal to constant";break;case"contains":i="should contain a valid item";break;case"custom":i='should pass "'+r.keyword+'" keyword validation';break;case"dependencies":i="";var m=r.params.depsCount;i+="should have propert";if(m==1){i+="y"}else{i+="ies"}i+=" "+r.params.deps+" when property "+r.params.property+" is present";break;case"enum":i="should be equal to one of predefined values";break;case"exclusiveMaximum":i="";var t=r.params.comparison+" "+r.params.limit;i+="should be "+t;break;case"exclusiveMinimum":i="";var t=r.params.comparison+" "+r.params.limit;i+="should be "+t;break;case"false schema":i="boolean schema is false";break;case"format":i='should match format "'+r.params.format+'"';break;case"formatExclusiveMaximum":i="formatExclusiveMaximum should be boolean";break;case"formatExclusiveMinimum":i="formatExclusiveMinimum should be boolean";break;case"formatMaximum":i="";var t=r.params.comparison+" "+r.params.limit;i+="should be "+t;break;case"formatMinimum":i="";var t=r.params.comparison+" "+r.params.limit;i+="should be "+t;break;case"if":i='should match "'+r.params.failingKeyword+'" schema';break;case"maximum":i="";var t=r.params.comparison+" "+r.params.limit;i+="should be "+t;break;case"maxItems":i="";var m=r.params.limit;i+="should not have more than "+m+" item";if(m!=1){i+="s"}break;case"maxLength":i="";var m=r.params.limit;i+="should not be longer than "+m+" character";if(m!=1){i+="s"}break;case"maxProperties":i="";var m=r.params.limit;i+="should not have more than "+m+" propert";if(m==1){i+="y"}else{i+="ies"}break;case"minimum":i="";var t=r.params.comparison+" "+r.params.limit;i+="should be "+t;break;case"minItems":i="";var m=r.params.limit;i+="should not have less than "+m+" item";if(m!=1){i+="s"}break;case"minLength":i="";var m=r.params.limit;i+="should not be shorter than "+m+" character";if(m!=1){i+="s"}break;case"minProperties":i="";var m=r.params.limit;i+="should not have less than "+m+" propert";if(m==1){i+="y"}else{i+="ies"}break;case"multipleOf":i="should be a multiple of "+r.params.multipleOf;break;case"not":i='should not be valid according to schema in "not"';break;case"oneOf":i='should match exactly one schema in "oneOf"';break;case"pattern":i='should match pattern "'+r.params.pattern+'"';break;case"patternRequired":i='should have property matching pattern "'+r.params.missingPattern+'"';break;case"propertyNames":i="property name '"+r.params.propertyName+"' is invalid";break;case"required":i="should have required property "+r.params.missingProperty;break;case"switch":i='should pass "switch" keyword validation, case '+r.params.caseIndex+" fails";break;case"type":i="should be "+r.params.type;break;case"uniqueItems":i="should not have duplicate items (items ## "+r.params.j+" and "+r.params.i+" are identical)";break;default:continue}r.message=i}};