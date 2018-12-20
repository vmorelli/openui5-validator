"use strict";module.exports=function a(e){if(!(e&&e.length))return;for(var r=0;r<e.length;r++){var s=e[r];var m;switch(s.keyword){case"$ref":m="無法找到引用"+s.params.ref;break;case"additionalItems":m="";var i=s.params.limit;m+="不可以超過"+i+"個元素";break;case"additionalProperties":m="不可以有額外的屬性";break;case"anyOf":m="不符合 anyOf 指定的模式";break;case"const":m="應該等於常數";break;case"contains":m="應該包含一個有效元素";break;case"custom":m='應該通過 "'+s.keyword+' 關鍵詞檢驗"';break;case"dependencies":m="";var i=s.params.depsCount;m+="應該要有屬性"+s.params.property+"的依賴屬性"+s.params.deps;break;case"enum":m="應該要在預設的值之中";break;case"exclusiveMaximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="應該要 "+t;break;case"exclusiveMinimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="應該要 "+t;break;case"false schema":m="布林模式不正確";break;case"format":m="應該要符合"+s.params.format+"格式";break;case"formatExclusiveMaximum":m="formatExclusiveMaximum 應該是布林值";break;case"formatExclusiveMinimum":m="formatExclusiveMinimum 應該是布林值";break;case"formatMaximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="應該是 "+t;break;case"formatMinimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="應該是 "+t;break;case"if":m='應該符合 "'+s.params.failingKeyword+'" schema';break;case"maximum":m="";var t=s.params.comparison+" "+s.params.limit;m+="應該要 "+t;break;case"maxItems":m="";var i=s.params.limit;m+="不應該多於 "+i+" 個";break;case"maxLength":m="";var i=s.params.limit;m+="不應該多於 "+i+" 個字元";break;case"maxProperties":m="";var i=s.params.limit;m+="不應該多於 "+i+" 個屬性";break;case"minimum":m="";var t=s.params.comparison+" "+s.params.limit;m+="應該要 "+t;break;case"minItems":m="";var i=s.params.limit;m+="不應該少於 "+i+" 個";break;case"minLength":m="";var i=s.params.limit;m+="不應該少於 "+i+" 個字元";break;case"minProperties":m="";var i=s.params.limit;m+="不應該少於 "+i+" 個屬性";break;case"multipleOf":m="應該是 "+s.params.multipleOf+" 的整數倍";break;case"not":m='不應該符合 "not" schema';break;case"oneOf":m='只能符合一個 "oneOf" 中的 schema';break;case"pattern":m='應該符合模式 "'+s.params.pattern+'"';break;case"patternRequired":m="應該有屬性對應模式 "+s.params.missingPattern;break;case"propertyNames":m="属性名 '"+s.params.propertyName+"' 無效";break;case"required":m="應該有必須屬性 "+s.params.missingProperty;break;case"switch":m="因為 "+s.params.caseIndex+' 失败，沒有通過 "switch" 檢驗, ';break;case"type":m="應該是 "+s.params.type+" 類型";break;case"uniqueItems":m="不應該有重複項目 (第 "+s.params.j+" 項和第 "+s.params.i+" 項是重複的)";break;default:continue}s.message=m}};