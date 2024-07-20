import{cX as j,e4 as M,e5 as x,g4 as b,bz as c,cz as B,aB as U,U as h,s as u,aa as r,ab as i,ac as T,dJ as P,aT as R,aj as k,iY as a}from"./index.7eb0daf2.js";import{S as _}from"./MultiOriginJSONSupport.b5976a45.js";import{f as z}from"./RefreshableLayer.908b9ff1.js";import{o as f}from"./imageBitmapUtils.630b294f.js";import{b as I}from"./OperationalLayer.33897364.js";import"./commonProperties.a37169f8.js";var v;const y=new j("0/0/0",0,0,0,void 0);let g=v=class extends M(x(z(P))){constructor(){super(...arguments),this.tileInfo=b.create({spatialReference:c.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new B(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,c.WebMercator),this.spatialReference=c.WebMercator}getTileBounds(e,t,s,l){const n=l||U();return y.level=e,y.row=t,y.col=s,y.extent=n,this.tileInfo.updateTileInfo(y),y.extent=void 0,n}fetchTile(e,t,s,l={}){const{signal:n}=l,p=this.getTileUrl(e,t,s),d={responseType:"image",signal:n,query:{...this.refreshParameters}};return h(p??"",d).then(m=>m.data)}async fetchImageBitmapTile(e,t,s,l={}){const{signal:n}=l;if(this.fetchTile!==v.prototype.fetchTile){const S=await this.fetchTile(e,t,s,l);return f(S,e,t,s,n)}const p=this.getTileUrl(e,t,s)??"",d={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:m}=await h(p,d);return f(m,e,t,s,n)}getTileUrl(){throw new u("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};r([i({type:b})],g.prototype,"tileInfo",void 0),r([i({type:["show","hide"]})],g.prototype,"listMode",void 0),r([i({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),r([i({nonNullable:!0})],g.prototype,"fullExtent",void 0),r([i()],g.prototype,"spatialReference",void 0),g=v=r([T("esri.layers.BaseTileLayer")],g);const L=g,w=new R({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),A="https://dev.virtualearth.net";let o=class extends M(I(_(L))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new b({size:[256,256],dpi:96,origin:new k({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:c.WebMercator}),spatialReference:c.WebMercator,lods:[new a({level:1,resolution:78271.5169639999,scale:295828763795777e-6}),new a({level:2,resolution:39135.7584820001,scale:147914381897889e-6}),new a({level:3,resolution:19567.8792409999,scale:73957190948944e-6}),new a({level:4,resolution:9783.93962049996,scale:36978595474472e-6}),new a({level:5,resolution:4891.96981024998,scale:18489297737236e-6}),new a({level:6,resolution:2445.98490512499,scale:9244648868618e-6}),new a({level:7,resolution:1222.99245256249,scale:4622324434309e-6}),new a({level:8,resolution:611.49622628138,scale:2311162217155e-6}),new a({level:9,resolution:305.748113140558,scale:1155581108577e-6}),new a({level:10,resolution:152.874056570411,scale:577790.554289}),new a({level:11,resolution:76.4370282850732,scale:288895.277144}),new a({level:12,resolution:38.2185141425366,scale:144447.638572}),new a({level:13,resolution:19.1092570712683,scale:72223.819286}),new a({level:14,resolution:9.55462853563415,scale:36111.909643}),new a({level:15,resolution:4.77731426794937,scale:18055.954822}),new a({level:16,resolution:2.38865713397468,scale:9027.977411}),new a({level:17,resolution:1.19432856685505,scale:4513.988705}),new a({level:18,resolution:.597164283559817,scale:2256.994353}),new a({level:19,resolution:.298582141647617,scale:1128.497176}),new a({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return this.bingMetadata!=null?this.bingMetadata.copyright:null}get operationalLayerType(){return w.toJSON(this.style)}get bingLogo(){return this.bingMetadata!=null?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new u("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,s){if(!this.loaded||this.bingMetadata==null)return null;const l=this.bingMetadata.resourceSets[0].resources[0],n=l.imageUrlSubdomains[t%l.imageUrlSubdomains.length],p=this._getQuadKey(e,t,s);return l.imageUrl.replace("{subdomain}",n).replace("{quadkey}",p)}async fetchAttributionData(){return this.load().then(()=>this.bingMetadata==null?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(t=>({zoomMin:t.zoomMin,zoomMax:t.zoomMax,score:1,bbox:[t.bbox[0],t.bbox[1],t.bbox[2],t.bbox[3]]}))}))})}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return h(`${A}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(t=>{const s=t.data;if(s.statusCode!==200)throw new u("bingmapslayer:getmetadata",s.statusDescription);if(this.bingMetadata=s,this.bingMetadata.resourceSets.length===0)throw new u("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new u("bingmapslayer:getmetadata","no bing resources")}).catch(t=>{throw new u("bingmapslayer:getmetadata",t.message)})}_getPortalBingKey(){return h(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new u("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new u("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,s){let l="";for(let n=e;n>0;n--){let p=0;const d=1<<n-1;s&d&&(p+=1),t&d&&(p+=2),l+=p.toString()}return l}};r([i({json:{read:!1,write:!1},value:null})],o.prototype,"bingMetadata",null),r([i({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],o.prototype,"type",void 0),r([i({type:b})],o.prototype,"tileInfo",void 0),r([i({type:String,readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"copyright",null),r([i({type:String,json:{write:!1,read:!1}})],o.prototype,"key",void 0),r([i({type:w.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:w.read}}})],o.prototype,"style",void 0),r([i({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],o.prototype,"operationalLayerType",null),r([i({type:String,json:{write:!1,read:!1}})],o.prototype,"culture",void 0),r([i({type:String,json:{write:!1,read:!1}})],o.prototype,"region",void 0),r([i({type:String,json:{write:!0,read:!0}})],o.prototype,"portalUrl",void 0),r([i({type:Boolean,json:{write:!1,read:!1}})],o.prototype,"hasAttributionData",void 0),r([i({type:String,readOnly:!0})],o.prototype,"bingLogo",null),o=r([T("esri.layers.BingMapsLayer")],o);const E=o;export{E as default};
