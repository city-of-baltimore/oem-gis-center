"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5670],{67766:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(36663),r=s(53280),o=s(81977),n=(s(7283),s(7753),s(39994),s(40266));let a=class extends r.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,i._)([(0,o.Cb)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,i._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"service",void 0),(0,i._)([(0,o.Cb)()],a.prototype,"spatialReference",null),(0,i._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,i._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,i._)([(0,n.j)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const l=a},5670:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var i=s(36663),r=(s(39994),s(61681)),o=(s(13802),s(7283),s(7753),s(70375),s(40266)),n=s(27281),a=s(94672),l=s(14266),d=s(67766),c=s(6413);class p{constructor(e,t){this.offset=e,this.extent=t}}function h(e){const t=e.key,s=new Map,i=256,r=l.I_,o=e.tileInfoView.tileInfo.isWrappable;return s.set((0,c.M)(t,-1,-1,o).id,new p([-r,-r],[r-i,r-i,r,r])),s.set((0,c.M)(t,0,-1,o).id,new p([0,-r],[0,r-i,r,r])),s.set((0,c.M)(t,1,-1,o).id,new p([r,-r],[0,r-i,i,r])),s.set((0,c.M)(t,-1,0,o).id,new p([-r,0],[r-i,0,r,r])),s.set((0,c.M)(t,1,0,o).id,new p([r,0],[0,0,i,r])),s.set((0,c.M)(t,-1,1,o).id,new p([-r,r],[r-i,0,r,i])),s.set((0,c.M)(t,0,1,o).id,new p([0,r],[0,0,r,i])),s.set((0,c.M)(t,1,1,o).id,new p([r,r],[0,0,i,i])),s}let u=class extends d.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];"heatmap"===s.type&&(0,n.Hg)(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const i=this._tileKeyToFeatureSets.get(e.key.id);if(i&&null!=t.addOrUpdate&&t.addOrUpdate.hasFeatures&&i.set(t.addOrUpdate.instance,t),t.end){const t=[],i=h(e);this._tileKeyToFeatureSets.forEach(((s,o)=>{if(o===e.key.id)s.forEach((e=>(0,r.yw)(e.addOrUpdate,(e=>t.push(e)))));else if(i.has(o)){const e=i.get(o),[n,a]=e.offset;s.forEach((e=>(0,r.yw)(e.addOrUpdate,(e=>{const s=e.transform(n,a,1,1);t.push(s)}))))}}));const o=(0,a.QM)(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:o},l=[o.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...s,transferList:l})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};u=(0,i._)([(0,o.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],u);const y=u},6413:(e,t,s)=>{function i(e,t,s,i){const r=e.clone(),o=1<<r.level,n=r.col+t,a=r.row+s;return i&&n<0?(r.col=n+o,r.world-=1):n>=o?(r.col=n-o,r.world+=1):r.col=n,r.row=a,r}s.d(t,{M:()=>i})}}]);