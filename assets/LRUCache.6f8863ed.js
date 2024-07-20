import{el as z}from"./index.7eb0daf2.js";const c=-3,g=c-1;var n;(function(_){_[_.ALL=0]="ALL",_[_.SOME=1]="SOME"})(n||(n={}));class y{constructor(s,t,e){this.name=s,this._storage=t,this.id=S+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),e&&(this._storage.registerRemoveFunc(this.id,e),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(s){return this._storage.getSize(this,s)}resetHitRate(){this._hit=this._miss=0}put(s,t,e,r=0){this._storage.put(this,s,t,e,r)}pop(s){const t=this._storage.pop(this,s);return t===void 0?++this._miss:++this._hit,t}get(s){const t=this._storage.get(this,s);return t===void 0?++this._miss:++this._hit,t}peek(s){return this._storage.peek(this,s)}updateSize(s,t,e){this._storage.updateSize(this,s,t,e)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class f{get size(){return this._size}constructor(s=10485760){this._maxSize=s,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new z,this._users=new z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(s){this._users.push(s)}deregister(s){this._users.removeUnordered(s)}registerRemoveFunc(s,t){this._removeFuncs.push([s,t])}deregisterRemoveFunc(s){this._removeFuncs.filterInPlace(t=>t[0]!==s)}get maxSize(){return this._maxSize}set maxSize(s){this._maxSize=Math.max(s,-1),this._checkSize()}getSize(s,t){return this._db.get(s.id+t)?.size??0}put(s,t,e,r,h){t=s.id+t;const i=this._db.get(t);if(i&&(this._size-=i.size,s.size-=i.size,this._db.delete(t),i.entry!==e&&this._notifyRemove(t,i.entry,i.size,n.ALL)),r>this._maxSize)return void this._notifyRemove(t,e,r,n.ALL);if(e===void 0)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return console.warn(`Refusing to cache entry with size ${r} for key ${t}`),void this._notifyRemove(t,e,0,n.ALL);const o=1+Math.max(h,g)-c;this._db.set(t,new v(e,r,o)),this._size+=r,s.size+=r,this._checkSize()}updateSize(s,t,e,r){t=s.id+t;const h=this._db.get(t);if(h&&h.entry===e){for(this._size-=h.size,s.size-=h.size;r>this._maxSize;){const i=this._notifyRemove(t,e,r,n.SOME);if(!(i!=null&&i>0))return void this._db.delete(t);r=i}h.size=r,this._size+=r,s.size+=r,this._checkSize()}}pop(s,t){t=s.id+t;const e=this._db.get(t);if(e)return this._size-=e.size,s.size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(s,t){t=s.id+t;const e=this._db.get(t);if(e!==void 0)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}peek(s,t){const e=this._db.get(s.id+t);return e?++this._hit:++this._miss,e?.entry}get performanceInfo(){const s={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},e=new Array;this._db.forEach((i,o)=>{const a=i.lifetime;e[a]=(e[a]||0)+i.size,this._users.forAll(d=>{const{id:m,name:u}=d;if(o.startsWith(m)){const l=t[u]||0;t[u]=l+i.size}})});const r={};this._users.forAll(i=>{const o=i.name;if("hitRate"in i&&typeof i.hitRate=="number"&&!isNaN(i.hitRate)&&i.hitRate>0){const a=t[o]||0;t[o]=a,r[o]=Math.round(100*i.hitRate)+"%"}else r[o]="0%"});const h=Object.keys(t);h.sort((i,o)=>t[o]-t[i]),h.forEach(i=>s[i]=Math.round(t[i]/2**20)+"MB / "+r[i]);for(let i=e.length-1;i>=0;--i){const o=e[i];o&&(s["Priority "+(i+c-1)]=Math.round(o/this._size*100)+"%")}return s}resetStats(){this._hit=this._miss=0,this._users.forAll(s=>s.resetHitRate())}clear(s){const t=s.id;this._db.forEach((e,r)=>{r.startsWith(t)&&(this._size-=e.size,this._db.delete(r),this._notifyRemove(r,e.entry,e.size,n.ALL))}),s.size=0}clearAll(){this._db.forEach((s,t)=>this._notifyRemove(t,s.entry,s.size,n.ALL)),this._users.forAll(s=>s.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(s,t,e,r){let h;return this._removeFuncs.some(i=>{if(s.startsWith(i[0])){const o=i[1](t,r,e);return typeof o=="number"&&(h=o),!0}return!1}),h}_checkSize(){this._users.forAll(s=>this._checkSizeLimits(s)),this._checkSizeLimits()}_checkSizeLimits(s){const t=s??this;if(t.maxSize<0||t.size<=t.maxSize)return;const e=s?.id;let r=!0;for(;r;){r=!1;for(const[h,i]of this._db)if(i.lifetime===0&&(!e||h.startsWith(e))){if(this._purgeItem(h,i,s),t.size<=.9*t.maxSize)return;r||=this._db.has(h)}}for(const[h,i]of this._db)if((!e||h.startsWith(e))&&(this._purgeItem(h,i,s),t.size<=.9*t.maxSize))return}_purgeItem(s,t,e=this._users.find(r=>s.startsWith(r.id))){if(this._db.delete(s),t.lives<=1){this._size-=t.size,e&&(e.size-=t.size);const r=this._notifyRemove(s,t.entry,t.size,n.SOME);r!=null&&r>0&&(this._size+=r,e&&(e.size+=r),t.lives=t.lifetime,t.size=r,this._db.set(s,t))}else--t.lives,this._db.set(s,t)}}let S=0;class v{constructor(s,t,e){this.entry=s,this.size=t,this.lifetime=e,this.lives=e}}class b{constructor(s,t){this._storage=new f,this.id="",this.name="",this.size=0,this._storage.maxSize=s,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(s,t,e=1){this._storage.put(this,s,t,e,1)}pop(s){return this._storage.pop(this,s)}get(s){return this._storage.get(this,s)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(s){this._storage.maxSize=s}resetHitRate(){}}export{b as e,f as h,y as r};