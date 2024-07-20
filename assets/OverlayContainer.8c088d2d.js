import{M as j,aE as z,c4 as E,aW as G,R as A,b2 as B,P as C,Q as D,aH as H,gf as L}from"./index.7eb0daf2.js";import{r as Q}from"./vec3f32.788be850.js";import{c as k,a as q}from"./WGLContainer.a2728de7.js";import{E as F}from"./Container.461c0161.js";class V extends k{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=j()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const s of this.children)s.beforeRender(e)}prepareRenderPasses(e){const s=e.registerRenderPass({name:"overlay",brushes:[q.overlay],target:()=>this.children,drawPhase:F.MAP});return[...super.prepareRenderPasses(e),s]}_updateMatrices(e){const{state:s}=e,{id:a,size:d,pixelRatio:r,resolution:c,rotation:l,viewpoint:u,displayMat3:_}=s;if(this._viewStateId===a)return;const p=Math.PI/180*l,i=r*d[0],n=r*d[1];this._localOrigin=u.targetGeometry.clone();const{x:h,y:v}=this._localOrigin,M=z(h,s.spatialReference);this._localOrigin.x=M,this._localOrigin.y=v;const m=c*i,g=c*n,t=E(this._dvsMat3);G(t,t,_),A(t,t,B(i/2,n/2)),C(t,t,Q(i/m,-n/g,1)),D(t,t,-p),this._viewStateId=a}_updateOverlays(e,s){const{state:a}=e,{rotation:d,spatialReference:r,worldScreenWidth:c,size:l,viewpoint:u}=a,_=this._localOrigin;let p,i=0;const n=H(r);if(n&&r.isWrappable){const h=l[0],v=l[1],M=180/Math.PI*d,m=Math.abs(Math.cos(M)),g=Math.abs(Math.sin(M)),t=Math.round(h*m+v*g),[b,x]=n.valid,o=L(r),{x:P,y:I}=u.targetGeometry,S=[P,I],w=[0,0];a.toScreen(w,S);const f=[0,0];let y;y=t>c?.5*c:.5*t;const O=Math.floor((P+.5*o)/o),W=b+O*o,$=x+O*o,R=[w[0]+y,0];a.toMap(f,R),f[0]>$&&(i=o),R[0]=w[0]-y,a.toMap(f,R),f[0]<W&&(i=-o),p={worldWidth:o,xBounds:[b,x]}}for(const h of s)h.updateDrawCoords(_,i,r,p)}}export{V as f};