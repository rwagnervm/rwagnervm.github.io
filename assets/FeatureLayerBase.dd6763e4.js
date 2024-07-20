import{aa as e,ab as o,ac as p,dW as j,ed as l,dY as d,f1 as Ce,f2 as Me,f3 as Ge,e as k,f4 as We,d6 as Re,eE as Qe,eI as fe,f5 as Ve,f6 as xe,f7 as ge,f8 as Pe,dw as W,f9 as K,fa as Ze,fb as ze,cz as He,fc as qe,c7 as we,bz as be,fd as Je,n as _e,fe as Ke}from"./index.7eb0daf2.js";import{d as Xe,a as Ye,j as et,u as tt,p as it}from"./commonProperties.a37169f8.js";import{y as ot,V as rt,Z as P,R as st,M as nt,C as pt}from"./featureLayerUtils.1828d741.js";import{p as lt}from"./LayerFloorInfo.164b006f.js";import{p as at}from"./Relationship.ee67ec43.js";import{a as dt}from"./serviceCapabilitiesUtils.21de2819.js";var X;let E=X=class extends j{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new X({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([o({type:String,json:{write:!0}})],E.prototype,"expression",void 0),e([o({type:String,json:{write:!0}})],E.prototype,"name",void 0),e([o({type:["boolean","date","number","string"],json:{write:!0}})],E.prototype,"returnType",void 0),e([o({type:String,json:{write:!0}})],E.prototype,"title",void 0),E=X=e([p("esri.form.ExpressionInfo")],E);const ut=E;let $=class extends j{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([o({type:String,json:{write:!0}})],$.prototype,"description",void 0),e([o({type:String,json:{write:!0}})],$.prototype,"label",void 0),e([o()],$.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],$.prototype,"visibilityExpression",void 0),$=e([p("esri.form.elements.Element")],$);const F=$;var Y;let L=Y=class extends j{constructor(t){super(t),this.type=null}clone(){return new Y({type:this.type})}};e([o({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],L.prototype,"type",void 0),L=Y=e([p("esri.form.elements.inputs.AttachmentInput")],L);const yt=L;var ee;let I=ee=class extends F{constructor(t){super(t),this.attachmentKeyword=null,this.editableExpression=null,this.input=null,this.type="attachment"}clone(){return new ee({attachmentKeyword:this.attachmentKeyword,description:this.description,editableExpression:this.editableExpression,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({type:String,json:{write:!0}})],I.prototype,"attachmentKeyword",void 0),e([o({type:String,json:{write:!0}})],I.prototype,"editableExpression",void 0),e([o({type:yt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],I.prototype,"input",void 0),e([o({type:["attachment"],json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=ee=e([p("esri.form.elements.AttachmentElement")],I);const je=I;let U=class extends j{constructor(t){super(t),this.type=null}};e([o()],U.prototype,"type",void 0),U=e([p("esri.form.elements.inputs.Input")],U);const S=U;let B=class extends S{constructor(t){super(t),this.maxLength=null,this.minLength=0}};e([o({type:Number,json:{write:!0}})],B.prototype,"maxLength",void 0),e([o({type:Number,json:{write:!0}})],B.prototype,"minLength",void 0),B=e([p("esri.form.elements.inputs.TextInput")],B);const ve=B;var te;let A=te=class extends ve{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new te({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["barcode-scanner"],json:{read:!1,write:!0}})],A.prototype,"type",void 0),A=te=e([p("esri.form.elements.inputs.BarcodeScannerInput")],A);const ct=A;var ie;let O=ie=class extends S{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ie({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([o({type:String,json:{write:!0}})],O.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],O.prototype,"showNoValueOption",void 0),e([o({type:["combo-box"],json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=ie=e([p("esri.form.elements.inputs.ComboBoxInput")],O);const mt=O;var oe;function Se(t){return t??null}function Ee(t){return t??null}let v=oe=class extends S{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,i){return Se(i.max)}writeMax(t,i){i.max=Ee(t)}readMin(t,i){return Se(i.min)}writeMin(t,i){i.min=Ee(t)}clone(){return new oe({max:this.max,min:this.min})}};e([o({type:String,json:{type:String,write:!0}})],v.prototype,"max",void 0),e([l("max")],v.prototype,"readMax",null),e([d("max")],v.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],v.prototype,"min",void 0),e([l("min")],v.prototype,"readMin",null),e([d("min")],v.prototype,"writeMin",null),e([o({type:["date-picker"],json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=oe=e([p("esri.form.elements.inputs.DatePickerInput")],v);const ht=v;var re;function Z(t){return t??null}function z(t){return t??null}let a=re=class extends S{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,i){return Z(i.max)}writeMax(t,i){i.max=z(t)}readMin(t,i){return Z(i.min)}writeMin(t,i){i.min=z(t)}readTimeResolution(t,i){return Z(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=z(t)}clone(){return new re({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:Boolean,json:{write:!0}})],a.prototype,"includeTimeOffset",void 0),e([o({type:String,json:{type:String,write:!0}})],a.prototype,"max",void 0),e([l("max")],a.prototype,"readMax",null),e([d("max")],a.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],a.prototype,"min",void 0),e([l("min")],a.prototype,"readMin",null),e([d("min")],a.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],a.prototype,"timeResolution",void 0),e([l("timeResolution")],a.prototype,"readTimeResolution",null),e([d("timeResolution")],a.prototype,"writeTimeResolution",null),e([o({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=re=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],a);const vt=a;var se;function $e(t){return t!=null?new Date(t):null}function Ie(t){return t?t.getTime():null}let m=se=class extends S{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,i){return $e(i.max)}writeMax(t,i){i.max=Ie(t)}readMin(t,i){return $e(i.min)}writeMin(t,i){i.min=Ie(t)}clone(){return new se({includeTime:this.includeTime,max:this.max,min:this.min})}};e([o({type:Boolean,json:{write:!0}})],m.prototype,"includeTime",void 0),e([o({type:Date,json:{type:Number,write:!0}})],m.prototype,"max",void 0),e([l("max")],m.prototype,"readMax",null),e([d("max")],m.prototype,"writeMax",null),e([o({type:Date,json:{type:Number,write:!0}})],m.prototype,"min",void 0),e([l("min")],m.prototype,"readMin",null),e([d("min")],m.prototype,"writeMin",null),e([o({type:["datetime-picker"],json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=se=e([p("esri.form.elements.inputs.DateTimePickerInput")],m);const ft=m;var ne;let M=ne=class extends S{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new ne({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([o({type:String,json:{write:!0}})],M.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],M.prototype,"showNoValueOption",void 0),e([o({type:["radio-buttons"],json:{read:!1,write:!0}})],M.prototype,"type",void 0),M=ne=e([p("esri.form.elements.inputs.RadioButtonsInput")],M);const xt=M;var pe;let R=pe=class extends S{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new pe({offValue:this.offValue,onValue:this.onValue})}};e([o({type:[String,Number],json:{write:!0}})],R.prototype,"offValue",void 0),e([o({type:[String,Number],json:{write:!0}})],R.prototype,"onValue",void 0),e([o({type:["switch"],json:{read:!1,write:!0}})],R.prototype,"type",void 0),R=pe=e([p("esri.form.elements.inputs.SwitchInput")],R);const gt=R;var le;let C=le=class extends ve{constructor(t){super(t),this.type="text-area"}clone(){return new le({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-area"],json:{read:!1,write:!0}})],C.prototype,"type",void 0),C=le=e([p("esri.form.elements.inputs.TextAreaInput")],C);const wt=C;var ae;let G=ae=class extends ve{constructor(t){super(t),this.type="text-box"}clone(){return new ae({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-box"],json:{read:!1,write:!0}})],G.prototype,"type",void 0),G=ae=e([p("esri.form.elements.inputs.TextBoxInput")],G);const bt=G;var de;function H(t){return t??null}function q(t){return t??null}let u=de=class extends S{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,i){return H(i.max)}writeMax(t,i){i.max=q(t)}readMin(t,i){return H(i.min)}writeMin(t,i){i.min=q(t)}readTimeResolution(t,i){return H(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=q(t)}clone(){return new de({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),e([l("max")],u.prototype,"readMax",null),e([d("max")],u.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),e([l("min")],u.prototype,"readMin",null),e([d("min")],u.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),e([l("timeResolution")],u.prototype,"readTimeResolution",null),e([d("timeResolution")],u.prototype,"writeTimeResolution",null),e([o({type:["time-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=de=e([p("esri.form.elements.inputs.TimePickerInput")],u);const jt=u,St={base:S,key:"type",typeMap:{"barcode-scanner":ct,"combo-box":mt,"date-picker":ht,"datetime-picker":ft,"datetimeoffset-picker":vt,"radio-buttons":xt,switch:gt,"text-area":wt,"text-box":bt,"time-picker":jt}};var ue;let c=ue=class extends F{constructor(t){super(t),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){return this._get("editable")??!0}set editable(t){this._set("editable",t)}clone(){return new ue({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([o({types:Ce,json:{read:{reader:Me},write:!0}})],c.prototype,"domain",void 0),e([o({type:Boolean,json:{write:!0}})],c.prototype,"editable",null),e([o({type:String,json:{write:!0}})],c.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),e([o({type:String,json:{write:!0}})],c.prototype,"hint",void 0),e([o({types:St,json:{read:{source:"inputType"},write:{target:"inputType"}}})],c.prototype,"input",void 0),e([o({type:String,json:{write:!0}})],c.prototype,"requiredExpression",void 0),e([o({type:String,json:{read:!1,write:!0}})],c.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),c=ue=e([p("esri.form.elements.FieldElement")],c);const Fe=c;var ye;let g=ye=class extends F{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new ye({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:k(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([o({type:Number,json:{write:!0}})],g.prototype,"displayCount",void 0),e([o({type:["list"],json:{write:!0}})],g.prototype,"displayType",void 0),e([o({type:String,json:{write:!0}})],g.prototype,"editableExpression",void 0),e([o({type:[Ge],json:{write:!0}})],g.prototype,"orderByFields",void 0),e([o({type:Number,json:{write:!0}})],g.prototype,"relationshipId",void 0),e([o({type:["relationship"],json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=ye=e([p("esri.form.elements.RelationshipElement")],g);const Te=g;var ce;let V=ce=class extends F{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new ce({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([o({type:String,json:{write:!0}})],V.prototype,"text",void 0),e([o({type:String,json:{write:!0}})],V.prototype,"textFormat",void 0),e([o({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],V.prototype,"type",void 0),V=ce=e([p("esri.form.elements.TextElement")],V);const Oe=V;function De(t){return{typesWithGroup:{base:F,key:"type",typeMap:{attachment:je,field:Fe,group:t,relationship:Te,text:Oe}},typesWithoutGroup:{base:F,key:"type",typeMap:{attachment:je,field:Fe,relationship:Te,text:Oe}}}}function ke(t,i,s=!0){if(!t)return null;const r=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(n=>r[n.type]).map(n=>r[n.type].fromJSON(n))}function Be(t,i,s=!0){if(!t)return null;const r=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(n=>r[n.type]).map(n=>n.toJSON())}function Ne(t,i,s=!0){return t?t.map(r=>We(s?i.typesWithGroup:i.typesWithoutGroup,r)):null}var me;let f=me=class extends F{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return Ne(t,J,!1)}readElements(t,i){return ke(i.formElements,J,!1)}writeElements(t,i){i.formElements=Be(t,J,!1)}clone(){return new me({description:this.description,elements:k(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({json:{write:!0}})],f.prototype,"elements",void 0),e([Re("elements")],f.prototype,"castElements",null),e([l("elements",["formElements"])],f.prototype,"readElements",null),e([d("elements")],f.prototype,"writeElements",null),e([o({type:["collapsed","expanded"],json:{write:!0}})],f.prototype,"initialState",void 0),e([o({type:String,json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=me=e([p("esri.form.elements.GroupElement")],f);const J=De(f),Et=f,$t=t=>t.type==="field",It=t=>t.type==="group",Ft=t=>t.type==="text";var he;const _=De(Et);let h=he=class extends j{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return Ne(t,_)}readElements(t,i){return ke(i.formElements,_)}writeElements(t,i){i.formElements=Be(t,_)}clone(){return new he({description:this.description,expressionInfos:k(this.expressionInfos),elements:k(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,i){const s=new Set,{description:r,elements:n,expressionInfos:y,title:T}=this;if(N(s,t,r),N(s,t,T),!n)return[];const Ae=Tt(n,y).map(Q=>Qe(s,t,Q));await Promise.all(Ae);for(const Q of n)Le(s,{fieldsIndex:t,relationships:i},Q);return Array.from(s).sort()}};function Le(t,i,s){const{fieldsIndex:r}=i;if(!r||r.fields.length!==t.size)switch(N(t,r,s.label),N(t,r,s.description),s.type){case"field":fe(t,r,s.fieldName);break;case"group":s.elements.forEach(n=>Le(t,i,n));break;case"relationship":if(i.relationships){const n=i.relationships.find(y=>y.id===s.relationshipId);n&&fe(t,r,n.keyField)}Ve(t,r,s.orderByFields?.map(n=>n.field));break;case"text":N(t,r,s.text)}}function Tt(t,i){if(!i||i.length===0)return[];const s=Ue(t),r=[];for(const n of i)s.has(n.name)&&r.push(n.expression);return r}function Ue(t){const i=new Set;for(const s of t)if(xe(i,s.visibilityExpression),!Ft(s)){if(It(s))ge(i,Ue(s.elements));else if(xe(i,s.editableExpression),$t(s)){const{requiredExpression:r,valueExpression:n}=s;ge(i,[r,n])}}return i}function N(t,i,s){Ve(t,i,Pe(s))}e([o({type:String,json:{write:!0}})],h.prototype,"description",void 0),e([o({json:{write:!0}})],h.prototype,"elements",void 0),e([Re("elements")],h.prototype,"castElements",null),e([l("elements",["formElements"])],h.prototype,"readElements",null),e([d("elements")],h.prototype,"writeElements",null),e([o({type:[ut],json:{write:!0}})],h.prototype,"expressionInfos",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],h.prototype,"preserveFieldValuesWhenHidden",void 0),e([o({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=he=e([p("esri.form.FormTemplate")],h);const Ut=h;let w=class extends W(j){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([o()],w.prototype,"creatorField",void 0),e([o()],w.prototype,"creationDateField",void 0),e([o()],w.prototype,"editorField",void 0),e([o()],w.prototype,"editDateField",void 0),e([o()],w.prototype,"realm",void 0),e([o(K("dateFieldsTimeReference",!0))],w.prototype,"timeZone",void 0),w=e([p("esri.layers.support.EditFieldsInfo")],w);const Ot=w;let x=class extends W(j){constructor(t){super(t)}};e([o({constructOnly:!0,json:{write:!0}})],x.prototype,"name",void 0),e([o({constructOnly:!0,json:{write:!0}})],x.prototype,"fields",void 0),e([o({constructOnly:!0,json:{write:!0}})],x.prototype,"isAscending",void 0),e([o({constructOnly:!0,json:{write:!0}})],x.prototype,"indexType",void 0),e([o({constructOnly:!0,json:{write:!0}})],x.prototype,"isUnique",void 0),e([o({constructOnly:!0,json:{write:!0}})],x.prototype,"description",void 0),x=e([p("esri.layers.support.FeatureIndex")],x);let D=class extends W(j){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([o({type:String,json:{read:{source:"shapeAreaFieldName"}}})],D.prototype,"shapeAreaField",void 0),e([o({type:String,json:{read:{source:"shapeLengthFieldName"}}})],D.prototype,"shapeLengthField",void 0),e([o({type:String,json:{read:t=>Ze.read(t)||ze.read(t)}})],D.prototype,"units",void 0),D=e([p("esri.layers.support.GeometryFieldsInfo")],D);const Mt=D;let b=class extends W(j){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const i={};for(const s of Object.keys(t))i[s]=Me(t[s]);return i}writeDomains(t,i){if(!t)return;const s={};for(const r of Object.keys(t))t[r]&&(s[r]=t[r]?.toJSON());i.domains=s}};e([o({type:Number,json:{write:!0}})],b.prototype,"code",void 0),e([o({type:Object,json:{write:!0}})],b.prototype,"defaultValues",void 0),e([o({json:{write:!0}})],b.prototype,"domains",void 0),e([l("domains")],b.prototype,"readDomains",null),e([d("domains")],b.prototype,"writeDomains",null),e([o({type:String,json:{write:!0}})],b.prototype,"name",void 0),b=e([p("esri.layers.support.Subtype")],b);const Rt=b,At=t=>{let i=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(we.ofType(x)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=be.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:s}=this;if(s){const{query:n,operations:y,editing:T}=s;if(!n.supportsQueryByOthers||!n.supportsQueryByAnonymous||y.supportsEditing&&!(T.supportsUpdateByOthers&&T.supportsUpdateByAnonymous&&T.supportsDeleteByOthers&&T.supportsDeleteByAnonymous))return"load"}if(this.userHasUpdateItemPrivileges){if(rt(this))return"load";if(this.hasUpdateItemRestrictions)return s.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const r=this.editFieldsInfo;return(r?.creatorField||r?.editorField)&&s?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(s,r){return dt(r,this.url)}readEditingInfo(s,r){const{editingInfo:n}=r;return n?{lastEditDate:n.lastEditDate!=null?new Date(n.lastEditDate):null}:null}get effectiveCapabilities(){const s=this.capabilities;if(!s)return null;const r=k(s),{operations:n,editing:y}=r;return P(this)?(this.userHasUpdateItemPrivileges&&(n.supportsQuery=!0),r):this.userHasUpdateItemPrivileges?(n.supportsAdd=n.supportsDelete=n.supportsEditing=n.supportsQuery=n.supportsUpdate=y.supportsDeleteByOthers=y.supportsGeometryUpdate=y.supportsUpdateByOthers=!0,r):(this.userHasFullEditingPrivileges&&n.supportsEditing&&(n.supportsAdd=n.supportsDelete=n.supportsUpdate=y.supportsGeometryUpdate=!0),r)}readGlobalIdFieldFromService(s,r){return st(r)}get hasFullEditingRestrictions(){const s=this.capabilities;if(!s||P(this))return!1;const{operations:r,editing:n}=s;return r.supportsEditing&&!(r.supportsAdd&&r.supportsDelete&&r.supportsUpdate&&n.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const s=this.capabilities;if(!s)return!1;const{operations:r,editing:n}=s;return P(this)?!r.supportsQuery:!(r.supportsAdd&&r.supportsDelete&&r.supportsEditing&&r.supportsQuery&&r.supportsUpdate&&n.supportsDeleteByOthers&&n.supportsGeometryUpdate&&n.supportsUpdateByOthers)}readIsTableFromService(s,r){return r.type==="Table"}readMaxScale(s,r){return r.effectiveMaxScale||s||0}readMinScale(s,r){return r.effectiveMinScale||s||0}readObjectIdFieldFromService(s,r){return nt(r)}readServiceDefinitionExpression(s,r){return r.definitionQuery||r.definitionExpression}set url(s){if(s==null)return void this._set("url",s);const r=Je({layer:this,url:s,nonStandardUrlAllowed:!0,logger:_e.getLogger(this)});this._set("url",r.url),r.layerId!=null&&this._set("layerId",r.layerId)}writeUrl(s,r,n,y){Ke(this,s,null,r,y)}readVersion(s,r){return pt(r)}};return e([o({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([o({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([o({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([l("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([o(K("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([o({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([o({readOnly:!0,type:Ot})],i.prototype,"editFieldsInfo",void 0),e([o({readOnly:!0})],i.prototype,"editingInfo",void 0),e([l("editingInfo")],i.prototype,"readEditingInfo",null),e([o({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([o((()=>{const s=k(Xe),r=s.json.origins;return r["web-map"]={read:!1,write:!1},r["portal-item"]={read:!1,write:!1},s})())],i.prototype,"elevationInfo",void 0),e([o({type:lt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:Ye}}}}})],i.prototype,"floorInfo",void 0),e([o({type:He,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([o()],i.prototype,"gdbVersion",void 0),e([o({readOnly:!0,type:Mt,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([o({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ot.read}}}})],i.prototype,"geometryType",void 0),e([o({type:String})],i.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([o({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([o({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([o({readOnly:!0,type:qe})],i.prototype,"heightModelInfo",void 0),e([o({type:Date})],i.prototype,"historicMoment",void 0),e([o({type:we.ofType(x),readOnly:!0})],i.prototype,"indexes",void 0),e([o({readOnly:!0})],i.prototype,"isTable",void 0),e([l("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([o({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([o(et)],i.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([o(tt)],i.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([o({type:String})],i.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([o(K("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([o({type:[at],readOnly:!0})],i.prototype,"relationships",void 0),e([o({type:Boolean})],i.prototype,"returnM",void 0),e([o({type:Boolean})],i.prototype,"returnZ",void 0),e([o({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([o({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([o({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([o()],i.prototype,"sourceJSON",void 0),e([o({type:be,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([o({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([o({type:[Rt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([o({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([o(it)],i.prototype,"url",null),e([d("url")],i.prototype,"writeUrl",null),e([o({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{At as R,Ut as V};
