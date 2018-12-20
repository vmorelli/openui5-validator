"use strict";module.exports=function a(e){if(!(e&&e.length))return;for(var r=0;r<e.length;r++){var s=e[r];var m;switch(s.keyword){case"$ref":m=""+s.params.ref+"のスキーマを見つけることができない";break;case"additionalItems":m="";var i=s.params.limit;m+="は"+i+"以上あってはいけない";break;case"additionalProperties":m="追加してはいけない";break;case"anyOf":m='"anyOf"のスキーマとマッチしなくてはいけない';break;case"const":m="should be equal to constant";break;case"contains":m="should contain a valid item";break;case"custom":m='should pass "'+s.keyword+'" keyword validation';break;case"dependencies":m=""+s.params.property+"がある場合、";var i=s.params.depsCount;m+="は"+s.params.deps+"をつけなければいけない";break;case"enum":m="事前に定義された値のいずれかに等しくなければいけない";break;case"exclusiveMaximum":m="";var t=s.params.comparison+" "+s.params.limit;m+=t+"でなければいけない";break;case"exclusiveMinimum":m="";var t=s.params.comparison+" "+s.params.limit;m+=t+"でなければいけない";break;case"false schema":m="boolean schema is false";break;case"format":m='"'+s.params.format+'"形式に揃えなければいけない';break;case"formatExclusiveMaximum":m="formatExclusiveMaximum should be boolean";break;case"formatExclusiveMinimum":m="formatExclusiveMinimum should be boolean";break;case"formatMaximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="should be "+t;break;case"formatMinimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="should be "+t;break;case"if":m='should match "'+s.params.failingKeyword+'" schema';break;case"maximum":m="";var t=s.params.comparison+" "+s.params.limit;m+=t+"でなければいけない";break;case"maxItems":m="";var i=s.params.limit;m+="は"+i+"個以上であってはいけない";break;case"maxLength":m="";var i=s.params.limit;m+="は"+i+"文字以上であってはいけない";break;case"maxProperties":m="";var i=s.params.limit;m+="は"+i+"個以上のプロパティを有してはいけない";break;case"minimum":m="";var t=s.params.comparison+" "+s.params.limit;m+=t+"でなければいけない";break;case"minItems":m="";var i=s.params.limit;m+="は"+i+"個以下であってはいけない";break;case"minLength":m="";var i=s.params.limit;m+="は"+i+"文字以下であってはいけない";break;case"minProperties":m="";var i=s.params.limit;m+="は"+i+"個以下のプロパティを有してはいけない";break;case"multipleOf":m=""+s.params.multipleOf+"の倍数でなければいけない";break;case"not":m='"not"のスキーマに従って有効としてはいけない';break;case"oneOf":m='"oneOf"のスキーマと完全に一致しなくてはいけない';break;case"pattern":m='"'+s.params.pattern+'"のパターンと一致しなければいけない';break;case"patternRequired":m='should have property matching pattern "'+s.params.missingPattern+'"';break;case"propertyNames":m="property name '"+s.params.propertyName+"' is invalid";break;case"required":m="必要なプロパティ"+s.params.missingProperty+"がなければいけない";break;case"switch":m='should pass "switch" keyword validation, case '+s.params.caseIndex+" fails";break;case"type":m=""+s.params.type+"でなければいけない";break;case"uniqueItems":m="重複するアイテムがあってはいけない（"+s.params.j+"と"+s.params.i+"は同じである）";break;default:continue}s.message=m}};