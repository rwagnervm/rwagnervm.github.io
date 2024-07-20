import{$ as Ie,cd as Pe,e4 as Ge,e5 as Se,c7 as ge,cz as fe,s as ee,n as O,F as He,bp as Oe,aj as Le,cZ as Ce,aa as v,ab as A,ac as $e,dJ as Be}from"./index.7eb0daf2.js";import{o as J}from"./featureConversionUtils.c6dfa488.js";import{e as ke}from"./OptimizedFeature.32c00f5f.js";import{M as Fe,h as Ue,a as le,w as _,b as te,c as ae,D as w,I as ze}from"./KnowledgeGraphSublayer.92b05f99.js";import{R as je}from"./knowledgeGraphService.9a99595e.js";import"./OptimizedFeatureSet.6fd3bcb1.js";import"./UniqueValueRenderer.8069ab57.js";import"./ColorStop.aa8650af.js";import"./diffUtils.080c04bc.js";import"./colorRamps.272b71a1.js";import"./sizeVariableUtils.34255976.js";import"./visualVariableUtils.12ee1cdb.js";import"./jsonUtils.185b82ae.js";import"./defaults.e5a1167a.js";import"./defaultsJSON.ba72df2f.js";import"./styleUtils.7f2b22b0.js";import"./jsonUtils.93554317.js";import"./LRUCache.6f8863ed.js";import"./Version.856e86b2.js";import"./FieldsIndex.333d0734.js";import"./UnknownTimeZone.4756be49.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./utils.dbb84a38.js";import"./quantizationUtils.fe6b1e6e.js";import"./heatmapUtils.b763e953.js";import"./MultiOriginJSONSupport.b5976a45.js";import"./FeatureStore.a6527479.js";import"./BoundsStore.ae8d78e2.js";import"./PooledRBush.0bbb795a.js";import"./timeSupport.393bd0ba.js";import"./json.20588c22.js";import"./QueryEngine.b9df2d2a.js";import"./WhereClause.b007a323.js";import"./TimeOnly.5d28261e.js";import"./QueryEngineCapabilities.a12653c7.js";import"./utils.235d7b4d.js";import"./utils.26a12d83.js";import"./utils.f2d50388.js";import"./ClassBreaksDefinition.427c0bbe.js";import"./clientSideDefaults.e011af70.js";import"./GraphQueryStreaming.04edabe4.js";import"./fieldProperties.80f53b4c.js";import"./FeatureEffectLayer.11729363.js";import"./FeatureEffect.00e4e7d7.js";import"./FeatureReductionLayer.8358918b.js";import"./commonProperties.a37169f8.js";import"./FeatureReductionSelection.49649196.js";import"./featureLayerUtils.1828d741.js";import"./RelationshipQuery.a9d69ee6.js";import"./labelingInfo.41bbc735.js";import"./labelUtils.37b9d8d8.js";import"./MD5.f6d873db.js";import"./OrderedLayer.7fae9ad1.js";import"./OrderByInfo.b53e85dd.js";import"./RefreshableLayer.908b9ff1.js";import"./TemporalLayer.859e579f.js";import"./TimeInfo.d882fe8e.js";import"./FeatureSet.78257171.js";import"./popupUtils.f17e95f0.js";var ie;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"})(ie||(ie={}));let he,c=null;function Qe(){return he||(he=Ie(()=>import("./lclayout.53ca7b8d.js"),["assets/lclayout.53ca7b8d.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css"]).then(e=>e.l).then(({default:e})=>e({locateFile:a=>Pe(`esri/libs/linkchartlayout/${a}`)})).then(e=>{Ye(e)}),he)}function Ye(e){c=e}var $,ne;function Q(e,a,r,t,i,n){const o=r.length,d=i.length,m=Float64Array.BYTES_PER_ELEMENT,f=Uint32Array.BYTES_PER_ELEMENT,g=Uint8Array.BYTES_PER_ELEMENT,y=16,D=y+o*(g+2*m)+d*(2*f),x=c._malloc(D);try{const h=x+y-x%y,k=h+o*m,L=k+o*m,b=L+d*f,I=b+d*f,u=()=>[c.HEAPF64.subarray(h>>3,(h>>3)+o),c.HEAPF64.subarray(k>>3,(k>>3)+o),c.HEAPU32.subarray(L>>2,(L>>2)+d),c.HEAPU32.subarray(b>>2,(b>>2)+d),c.HEAPU8.subarray(I,I+o)],[R,U,B,z,F]=u();R.set(r),U.set(t),B.set(i),z.set(n),F.set(a);let S=e(o,I,h,k,d,L,b),M=null,P=null;if(S){const l=c.getLayoutLinksTypes(),N=c.getLayoutLinksVerticesEndIndices(),H=c.getLayoutLinksVertices(),E=c.countLayoutLinksVertices();!d||l&&N?E&&!H?S=!1:(M={types:new Uint8Array(c.HEAPU8.subarray(l,l+d)),vertexEndIndex:new Uint32Array(c.HEAPU32.subarray(N>>2,(N>>2)+d)),vertices:new Float64Array(c.HEAPF64.subarray(H>>3,(H>>3)+2*E))},P=c.getAuxiliaryGraphicElements()):S=!1}const[W,q,K,s,p]=u();return r.set(W),t.set(q),i.set(K),n.set(s),a.set(p),{success:S,links:M,graphics:P}}finally{c._free(x),c.cleanupLayout()}}(function(e){e[e.None=0]="None",e[e.IsMovable=1]="IsMovable",e[e.IsGeographic=2]="IsGeographic",e[e.IsRoot=4]="IsRoot"})($||($={})),function(e){e[e.Regular=0]="Regular",e[e.Orthogonal=1]="Orthogonal",e[e.Curved=2]="Curved",e[e.Recursive=3]="Recursive"}(ne||(ne={}));const Me=2,be=1,Ee=-1;var pe,ue,de,ce,ye,me,we,Te,De;(function(e){function a(){return c.getMinIdealEdgeLength()}function r(t,i,n,o,d,m=Me,f=be,g=Ee){return Q((y,D,x,h,k,L,b)=>c.applyForceDirectedLayout(y,D,x,h,k,L,b,m,f,g),t,i,n,o,d)}e.getMinIdealEdgeLength=a,e.apply=r})(pe||(pe={})),function(e){function a(r,t,i,n,o,d=Me,m=be,f=Ee){return Q((g,y,D,x,h,k,L)=>c.applyCommunityLayout(g,y,D,x,h,k,L,d,m,f),r,t,i,n,o)}e.apply=a}(ue||(ue={})),function(e){function a(r,t,i,n,o){return Q(c.applySimpleLayout,r,t,i,n,o)}e.apply=a}(de||(de={})),function(e){function a(r,t,i,n,o){return Q(c.applyHierarchicalLayout,r,t,i,n,o)}e.apply=a}(ce||(ce={})),function(e){function a(r,t,i,n,o){return Q(c.applyRadialTreeLayout,r,t,i,n,o)}e.apply=a}(ye||(ye={})),function(e){function a(r,t,i,n,o){return Q(c.applySmartTreeLayout,r,t,i,n,o)}e.apply=a}(me||(me={})),function(e){function a(r,t,i,n,o,d,m,f,g){return Q((y,D,x,h,k,L,b)=>{if(n.length!==y||o.length!==y||f.length!==k||g.length!==k)return!1;const I=Float64Array.BYTES_PER_ELEMENT,u=16,R=c._malloc(u+y*I),U=c._malloc(u+y*I),B=c._malloc(u+k*I),z=c._malloc(u+k*I),F=R+u-R%u,S=U+u-U%u,M=B+u-B%u,P=z+u-z%u;try{return c.HEAPF64.subarray(F>>3,(F>>3)+y).set(n),c.HEAPF64.subarray(S>>3,(S>>3)+y).set(o),c.HEAPF64.subarray(M>>3,(M>>3)+k).set(f),c.HEAPF64.subarray(P>>3,(P>>3)+k).set(g),c.applyChronologicalLayout(y,D,x,h,F,S,k,L,b,M,P)}finally{c._free(R),c._free(U),c._free(B),c._free(z)}},r,t,i,d,m)}e.apply=a}(we||(we={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(Te||(Te={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(De||(De={}));let T=class extends Ge(Se(Be)){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new ge,this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new fe({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.sublayerIdsCache=new Map,this.tables=new ge,this.type="link-chart",this._originalInclusionList=e.inclusionModeDefinition,e.dataPreloadedInLocalCache&&!e.inclusionModeDefinition)throw new ee("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it")}normalizeCtorArgs(e){return{url:e.url,title:e.title,dataPreloadedInLocalCache:e.dataPreloadedInLocalCache,defaultLinkChartConfig:e.defaultLinkChartConfig}}_initializeLayerProperties(e){if(!this.title&&this.url){const n=this.url.split("/");this.title=n[n.length-2]}const a=new Set;let r=[],t=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new ee("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.knowledgeGraph.dataModel.entityTypes?.forEach(n=>{n.name&&this._graphTypeLookup.set(n.name,n)}),e.knowledgeGraph.dataModel.relationshipTypes?.forEach(n=>{n.name&&this._graphTypeLookup.set(n.name,n)}),e.inclusionModeDefinition?.generateAllSublayers?(r=e.knowledgeGraph.dataModel.entityTypes??[],t=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach((n,o)=>{const d=this._graphTypeLookup.get(o);if(!d)return O.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(o);d.type==="relationship"?a.has(o)||(a.add(o),t.push(d)):d.type==="entity"?a.has(o)||(a.add(o),r.push(d)):(O.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(o))}):(r=e.knowledgeGraph.dataModel.entityTypes??[],t=e.knowledgeGraph.dataModel.relationshipTypes??[]);const i=new Fe({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=r,this.memberRelationshipTypes=t,this.dataManager=i}load(e){return this.addResolvingPromise(new Promise(a=>{je(this.url).then(r=>{if(this._initializeLayerProperties({knowledgeGraph:r,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(t=>{t.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(t.name,{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(t=>{t.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(t.name,{useAllData:!0})})),this.dataPreloadedInLocalCache)this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(t=>{t.useAllData=!1,t.members?.forEach(i=>{let n;n=i.linkChartLocation instanceof ke?i.linkChartLocation:i.linkChartLocation?J(i.linkChartLocation):null,n&&n.coords.length===2&&n.lengths.length===0?this.entityLinkChartDiagramLookup.set(i.id,n):this.relationshipLinkChartDiagramLookup.set(i.id,n)}),this.addResolvingPromise(this._initializeDiagram().then(async()=>{this.layers.forEach(async i=>{await i.refreshCachedQueryEngine()}),this.tables.forEach(async i=>{await i.refreshCachedQueryEngine()})}))});else{const t=this.defaultLinkChartConfig?.layoutMode==="GEOGRAPHIC";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,t,!0).then(async()=>{He(e);const i=[],n=[];this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1,this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach(o=>{o.useAllData=!1})),await this._initializeDiagram(),this.layers.forEach(o=>{n.push(o.refreshCachedQueryEngine()),i.push(new Promise(d=>{o.on("layerview-create",()=>{d(null)})}))}),this.tables.forEach(o=>{n.push(o.refreshCachedQueryEngine())}),await Promise.all(n)}))}a(null)})})),Promise.resolve(this)}async addRecords(e,a){let r=[];a?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(r=await Ue(e,this.dataManager.knowledgeGraph));const t=e.concat(r).filter(i=>!this.sublayerIdsCache.get(i.typeName)?.has(i.id));await this._handleNewRecords(t)}async removeRecords(e,{cascadeRemoveRelationships:a=!0,recalculateLayout:r=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){let t=[];for(const n of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n.typeName)?.members?.has(n.id)&&t.push(n);if(a){const n=new Set,o=[];for(const d of t)if(this.dataManager.nodeConnectionsLookup.has(d.id))for(const m of this.dataManager.nodeConnectionsLookup.get(d.id))n.add(m);for(const d of n)if(this.dataManager.memberIdTypeLookup.has(d))for(const m of this.dataManager.memberIdTypeLookup.get(d))this.dataManager.relationshipTypeNames.has(m)&&o.push({id:d,typeName:m});t=t.concat(o)}this.dataManager.removeFromLayer(t);for(const n of t)this.sublayerIdsCache.get(n.typeName)?.delete(n.id),this.dataManager.relationshipTypeNames.has(n.typeName)?this.relationshipLinkChartDiagramLookup.delete(n.id):this.entityLinkChartDiagramLookup.delete(n.id);r&&await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const i=[];return this.layers.forEach(n=>{i.push(n.refreshCachedQueryEngine())}),await Promise.all(i),this._refreshNamedTypes(),t}async expand(e,a){const r=await this.dataManager.getConnectedRecordIds(e,a),t=r.filter(i=>!this.sublayerIdsCache.get(i.typeName)?.has(i.id));return await this._handleNewRecords(r),{records:t}}loadLayerAssumingLocalCache(){this.memberRelationshipTypes.forEach(e=>{const a=new le({objectType:e,parentCompositeLayer:this,graphType:"relationship",title:e.name});a.geometryType?this.layers.push(a):this.tables.push(a),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)}),this.memberEntityTypes.forEach(e=>{const a=new le({objectType:e,parentCompositeLayer:this,graphType:"entity",title:e.name});a.geometryType?this.layers.push(a):this.tables.push(a),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e,a)=>{const r=Oe(this.sublayerIdsCache,a,()=>new Set);e.members?.forEach(t=>{if(r.add(t.id),t.linkChartLocation)if(t.linkChartLocation instanceof ke)this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(t.id,t.linkChartLocation):this.entityLinkChartDiagramLookup.set(t.id,t.linkChartLocation);else{const i=J(t.linkChartLocation);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(t.id,t.linkChartLocation?i:null):this.entityLinkChartDiagramLookup.set(t.id,t.linkChartLocation?i:null)}})})}async calculateLinkChartLayout(e="RADIAL_TREE",a){const r=[],t=[],i=[];this.dataManager.sublayerCaches.forEach((s,p)=>{this.dataManager.entityTypeNames.has(p)?s.forEach(l=>{r.push({typeName:p,feature:l})}):this.dataManager.relationshipTypeNames.has(p)&&s.forEach(l=>{t.push({typeName:p,feature:l})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const n=new Map,o=new Map,d=new Map,m=new Map,f=new Uint8Array(r.length),g=new Float64Array(r.length),y=new Float64Array(r.length),D=new Uint32Array(t.length),x=new Uint32Array(t.length),h=[],k="FORCE_DIRECTED",L=new fe({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let b,I="FORCE_DIRECTED",u=0,R=0;switch(I=e==="GEOGRAPHIC"?k:e,I){case"FORCE_DIRECTED":b=pe.apply;break;case"COMMUNITY":b=ue.apply;break;case"HIERARCHICAL":b=ce.apply;break;case"RADIAL_TREE":b=ye.apply;break;case"SMART_TREE":b=me.apply;break;default:b=de.apply}r.forEach(({typeName:s,feature:p})=>{if(a?.lockedNodeLocations?.has(p.attributes[_])){e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(s)?f[u]=$.IsGeographic:f[u]=$.None;const l=a.lockedNodeLocations.get(p.attributes[_]);g[u]=l.x,y[u]=l.y}else if(e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(s)){f[u]=$.IsGeographic;let l=null;const N=p.attributes[this.dataManager.geographicLookup.get(s).name];switch(this.dataManager.geographicLookup.get(s)?.geometryType){case"esriGeometryPoint":g[u]=N?.x,y[u]=N?.y;break;case"esriGeometryPolygon":l=N?.centroid,l?.x!=null&&l?.y!=null?(g[u]=l.x,y[u]=l.y):f[u]=$.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":l=N?.extent?.center,l?.x!=null&&l?.y!=null?(g[u]=l.x,y[u]=l.y):f[u]=$.IsMovable;break;default:f[u]=$.IsMovable}(g[u]==null||y[u]==null||Number.isNaN(g[u])||Number.isNaN(y[u]))&&(f[u]=$.IsMovable,g[u]=0,y[u]=0)}else f[u]=$.IsMovable,g[u]=0,y[u]=0;m.set(p.attributes[_],u),h[u]={feature:p,typeName:s},u++});let U=!1;const B=new Map;t.forEach(s=>{const p=s.feature.attributes[te],l=s.feature.attributes[ae],N=m.get(p),H=m.get(l);if(N!==void 0&&H!==void 0){const E=p+"-"+l,G=B.get(E);G?.has(s.typeName)||(D[R]=N,x[R]=H,G===void 0?B.set(E,new Map([[s.typeName,R]])):G.set(s.typeName,R),R++),i.push(s)}else U=!0,this.relationshipLinkChartDiagramLookup.set(p,null)}),U&&O.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const z=this._validateLayoutSettings(e,a),F=this._convertLayoutSettingsToCalculationSettings(z);await Qe();const{success:S,links:M}=b(f,g,y,D.subarray(0,R),x.subarray(0,R),F.computationBudgetTime,F.idealEdgeLengthMultiplier,F.repulsionRadiusMultiplier);if(!S)throw new ee("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let s=0;s<h.length;s++){if(y[s]>84.9999?y[s]=84.9999:y[s]<-84.9999&&(y[s]=-84.9999),g[s]>179.9999?g[s]=179.9999:g[s]<-179.9999&&(g[s]=-179.9999),h[s].feature.attributes[w]=new Le(g[s],y[s]),n.has(h[s].typeName))n.get(h[s].typeName)?.set(h[s].feature.attributes[_],h[s].feature);else{const l=new Map;l.set(h[s].feature.attributes[_],h[s].feature),n.set(h[s].typeName,l)}d.set(h[s].feature.attributes[_],h[s].feature);const p=J(h[s].feature.attributes[w]);this.entityLinkChartDiagramLookup.set(h[s].feature.attributes[_],h[s].feature.attributes[w]?p:null),h[s].feature.attributes[w].x<L.xmin&&(L.xmin=h[s].feature.attributes[w].x),h[s].feature.attributes[w].x>L.xmax&&(L.xmax=h[s].feature.attributes[w].x),h[s].feature.attributes[w].y<L.ymin&&(L.ymin=h[s].feature.attributes[w].y),h[s].feature.attributes[w].y>L.ymax&&(L.ymax=h[s].feature.attributes[w].y)}if(this.linkChartExtent.xmin=L.xmin,this.linkChartExtent.xmax=L.xmax,this.linkChartExtent.ymin=L.ymin,this.linkChartExtent.ymax=L.ymax,!M)throw new ee("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const P=new Map,W=new Map,q=new Map,K=new Set;for(let s=0;s<i.length;s++){const p=[],l=i[s],N=l.feature.attributes[te],H=l.feature.attributes[ae],E=N+"-"+H,G=B.get(E).get(l.typeName),Y=G===0?0:M?.vertexEndIndex[G-1];if(!K.has(G)){if(K.add(G),M.types[G]===ne.Recursive){const C=[M.vertices[2*Y],M.vertices[2*Y+1]],oe=[M.vertices[2*(Y+1)],M.vertices[2*(Y+1)+1]],V=[.5*(C[0]+oe[0]),.5*(C[1]+oe[1])],X=[V[0]-C[0],V[1]-C[1]],Ae=[V[0]+X[1],V[1]-X[0]],_e=[V[0]-X[1],V[1]+X[0]];p.push(C),p.push(Ae),p.push(oe),p.push(_e),p.push(C)}else{if(M.types[G]!==ne.Regular){O.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let C=Y;C<M.vertexEndIndex[G];C++)p.push([M.vertices[2*C],M.vertices[2*C+1]])}const j=h[m.get(N)]?.feature.attributes[w],Z=h[m.get(H)]?.feature.attributes[w];p[0][0]===j.x&&p[0][1]===j.y||(p[0]=[j.x,j.y]),p[p.length-1][0]===Z.x&&p[p.length-1][1]===Z.y||(p[p.length-1]=[Z.x,Z.y]);for(let C=1;C<p.length-1;C++)p[C][1]>85.5?p[C][1]=85.5:p[C][1]<-85.5&&(p[C][1]=-85.5),p[C][0]>179.9999?p[C][0]=179.9999:p[C][0]<-179.9999&&(p[C][0]=-179.9999);P.has(E)?P.get(E).push(p):P.set(E,[p])}const xe=P.get(E);W.has(E)||(W.set(E,new Map),q.set(E,new Map));const re=W.get(E),se=q.get(E);re.has(l.typeName)||(re.set(l.typeName,xe.shift()),se.set(l.typeName,0));const Ne=re.get(l.typeName);se.set(l.typeName,se.get(l.typeName)+1);const ve=new Ce({paths:Ne});if(l.feature.attributes[w]=ve,o.has(l.typeName))o.get(l.typeName)?.set(l.feature.attributes[_],l.feature);else{const j=new Map;j.set(l.feature.attributes[_],l.feature),o.set(l.typeName,j)}d.set(l.feature.attributes[_],l.feature);const Re=J(l.feature.attributes[w]);this.relationshipLinkChartDiagramLookup.set(l.feature.attributes[_],l.feature.attributes[w]?Re:null)}for(const s of i)s.feature.attributes[ze]=q.get(s.feature.attributes[te]+"-"+s.feature.attributes[ae])?.get(s.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:z},{nodes:n,links:o,idMap:d}}async applyNewLinkChartLayout(e="RADIAL_TREE",a){const r=[];await this.calculateLinkChartLayout(e,a),this.layers.forEach(t=>{r.push(t.refreshCachedQueryEngine())}),await Promise.all(r),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(a=>{a?.members?.forEach(r=>{const t=r.linkChartLocation;let i;const n=r.id;t&&(i="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]},e.set(n,new Le({x:i.x,y:i.y})))})}),e}async synchronizeInclusionListWithCache(){return new Promise(e=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((a,r)=>{if(a.useAllData=!1,a.members&&a.members.size>0){if(!this.dataManager.sublayerCaches.get(r))return;const t=new Set(Array.from(this.dataManager.sublayerCaches.get(r).keys()));Array.from(a.members.keys()).filter(i=>!t.has(i)).forEach(i=>{a.members?.delete(i)})}}),e()})}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const a=[];this.layers.forEach(r=>{a.push(r.refreshCachedQueryEngine())}),await Promise.all(a),this._refreshNamedTypes()}async connectEntities(e){let a=[];for(const t of this.dataManager.relationshipTypeNames){const i=this.sublayerIdsCache.get(t);i&&(a=a.concat(Array.from(i.keys())))}const r=await this.dataManager.getAttachedRelationships(e,a);return await this._handleNewRecords(r),{records:r}}async _handleNewRecords(e){const a=[];this.dataManager.addToLayer(e);for(const t of e)this.sublayerIdsCache.has(t.typeName)||(this.sublayerIdsCache.set(t.typeName,new Set),a.push(t.typeName)),this.sublayerIdsCache.get(t.typeName).add(t.id);for(const t of a){const i=this._graphTypeLookup.get(t);if(i){const n=new le({objectType:i,parentCompositeLayer:this,graphType:i.type,title:t});i.type==="entity"?this.dataManager.entityTypeNames.add(t):this.dataManager.relationshipTypeNames.add(t),n.geometryType?this.layers.push(n):this.tables.push(n),this.dataManager.sublayerCaches.set(t,new Map)}}await this.dataManager.refreshCacheContent(e.map(t=>t.id));const r=Object.assign({},this._currentLinkChartConfig.layoutOptions);r.lockedNodeLocations=this.getCurrentNodeLocations(),await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,r)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e,a)=>{e?.members?.forEach(r=>{const t=r.linkChartLocation;let i;const n=r.id;if(!t)return;i="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]};const o=J(i);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(n,o):this.entityLinkChartDiagramLookup.set(n,o),this.linkChartExtent.xmin>i.x&&(this.linkChartExtent.xmin=i.x),this.linkChartExtent.xmax<i.x&&(this.linkChartExtent.xmax=i.x),this.linkChartExtent.ymin>i.y&&(this.linkChartExtent.ymin=i.y),this.linkChartExtent.ymax<i.y&&(this.linkChartExtent.ymax=i.y)})}),this.memberRelationshipTypes.forEach(e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach(a=>{const r=this.relationshipLinkChartDiagramLookup.get(a.attributes[te]),t=this.relationshipLinkChartDiagramLookup.get(a.attributes[ae]);if(r&&t){const i=J(new Ce({paths:[[r.coords[0],r.coords[1]],[t.coords[0],t.coords[1]]]}));this.relationshipLinkChartDiagramLookup.set(a.attributes[_],i)}else this.relationshipLinkChartDiagramLookup.set(a.attributes[_],null)})})):await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this.calculateLinkChartLayout("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,a){const r=h=>typeof h=="number"&&!isNaN(h),t=h=>r(h)&&h>=1,i=h=>r(h)&&h>=1,n=h=>Object.values(ie).includes(h),o=h=>r(h)&&h>=0,d=new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC"]),m={};if(!d.has(e)||!a)return!d.has(e)&&a&&O.getLogger(this).warn("Layout mode options were given for a layout mode that does not utilize them, settings will be ignored"),m;const{computationBudgetTime:f,repulsionRadiusMultiplier:g,idealEdgeLength:y,idealEdgeLengthType:D}=a;i(f)?m.computationBudgetTime=f:f!==void 0&&O.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),t(g)?m.repulsionRadiusMultiplier=g:g!==void 0&&O.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");const x=y!==void 0||D!==void 0;return e!=="GEOGRAPHIC"&&x?O.getLogger(this).warn("Ideal edge length settings were specified for an incompatible layout mode, and will be ignored"):e==="GEOGRAPHIC"&&x&&(n(D)?m.idealEdgeLengthType=D:D!==void 0&&O.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),o(y)?m.idealEdgeLength=y:y!==void 0&&O.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),m}_convertLayoutSettingsToCalculationSettings(e){let a=e.idealEdgeLength;return e.idealEdgeLengthType===ie.ABSOLUTE&&(a===void 0?a=-1:a*=-1),{computationBudgetTime:e.computationBudgetTime,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:a}}};v([A()],T.prototype,"dataPreloadedInLocalCache",void 0),v([A()],T.prototype,"defaultLinkChartConfig",void 0),v([A()],T.prototype,"dataManager",void 0),v([A()],T.prototype,"knowledgeGraph",void 0),v([A()],T.prototype,"layers",void 0),v([A()],T.prototype,"entityLinkChartDiagramLookup",void 0),v([A()],T.prototype,"relationshipLinkChartDiagramLookup",void 0),v([A()],T.prototype,"linkChartExtent",void 0),v([A()],T.prototype,"memberEntityTypes",void 0),v([A()],T.prototype,"memberRelationshipTypes",void 0),v([A()],T.prototype,"sublayerIdsCache",void 0),v([A()],T.prototype,"tables",void 0),v([A({json:{read:!1}})],T.prototype,"type",void 0),T=v([$e("esri.layers.LinkChartLayer")],T);const ta=T;export{ta as default};