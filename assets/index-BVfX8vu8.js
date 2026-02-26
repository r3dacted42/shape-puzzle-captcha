(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Co=globalThis,yl=Co.ShadowRoot&&(Co.ShadyCSS===void 0||Co.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Sl=Symbol(),ou=new WeakMap;let bf=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Sl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yl&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=ou.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ou.set(e,t))}return t}toString(){return this.cssText}};const kd=i=>new bf(typeof i=="string"?i:i+"",void 0,Sl),Wd=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new bf(e,i,Sl)},Xd=(i,t)=>{if(yl)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),r=Co.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)}},au=yl?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return kd(e)})(i):i;const{is:$d,defineProperty:qd,getOwnPropertyDescriptor:Yd,getOwnPropertyNames:Zd,getOwnPropertySymbols:Jd,getPrototypeOf:Kd}=Object,Ko=globalThis,cu=Ko.trustedTypes,jd=cu?cu.emptyScript:"",Qd=Ko.reactiveElementPolyfillSupport,rs=(i,t)=>i,Ho={toAttribute(i,t){switch(t){case Boolean:i=i?jd:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ml=(i,t)=>!$d(i,t),lu={attribute:!0,type:String,converter:Ho,reflect:!1,useDefault:!1,hasChanged:Ml};Symbol.metadata??=Symbol("metadata"),Ko.litPropertyMetadata??=new WeakMap;let vr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lu){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,e);r!==void 0&&qd(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){const{get:r,set:s}=Yd(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const a=r?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lu}static _$Ei(){if(this.hasOwnProperty(rs("elementProperties")))return;const t=Kd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rs("properties"))){const e=this.properties,n=[...Zd(e),...Jd(e)];for(const r of n)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,r]of e)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const r=this._$Eu(e,n);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const r of n)e.unshift(au(r))}else t!==void 0&&e.push(au(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Ho).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ho;this._$Em=r;const a=o.fromAttribute(e,s.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,n,r=!1,s){if(t!==void 0){const o=this.constructor;if(r===!1&&(s=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??Ml)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:r,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,s]of n){const{wrapped:o}=s,a=this[r];o!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,s,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};vr.elementStyles=[],vr.shadowRootOptions={mode:"open"},vr[rs("elementProperties")]=new Map,vr[rs("finalized")]=new Map,Qd?.({ReactiveElement:vr}),(Ko.reactiveElementVersions??=[]).push("2.1.2");const El=globalThis,uu=i=>i,Go=El.trustedTypes,hu=Go?Go.createPolicy("lit-html",{createHTML:i=>i}):void 0,Tf="$lit$",ui=`lit$${Math.random().toFixed(9).slice(2)}$`,Af="?"+ui,tp=`<${Af}>`,zi=document,fs=()=>zi.createComment(""),ds=i=>i===null||typeof i!="object"&&typeof i!="function",bl=Array.isArray,ep=i=>bl(i)||typeof i?.[Symbol.iterator]=="function",ca=`[ 	
\f\r]`,zr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fu=/-->/g,du=/>/g,xi=RegExp(`>|${ca}(?:([^\\s"'>=/]+)(${ca}*=${ca}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pu=/'/g,gu=/"/g,wf=/^(?:script|style|textarea|title)$/i,np=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ip=np(1),Cr=Symbol.for("lit-noChange"),Ee=Symbol.for("lit-nothing"),mu=new WeakMap,Ui=zi.createTreeWalker(zi,129);function Cf(i,t){if(!bl(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return hu!==void 0?hu.createHTML(t):t}const rp=(i,t)=>{const e=i.length-1,n=[];let r,s=t===2?"<svg>":t===3?"<math>":"",o=zr;for(let a=0;a<e;a++){const l=i[a];let h,f,g=-1,p=0;for(;p<l.length&&(o.lastIndex=p,f=o.exec(l),f!==null);)p=o.lastIndex,o===zr?f[1]==="!--"?o=fu:f[1]!==void 0?o=du:f[2]!==void 0?(wf.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=xi):f[3]!==void 0&&(o=xi):o===xi?f[0]===">"?(o=r??zr,g=-1):f[1]===void 0?g=-2:(g=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?xi:f[3]==='"'?gu:pu):o===gu||o===pu?o=xi:o===fu||o===du?o=zr:(o=xi,r=void 0);const m=o===xi&&i[a+1].startsWith("/>")?" ":"";s+=o===zr?l+tp:g>=0?(n.push(h),l.slice(0,g)+Tf+l.slice(g)+ui+m):l+ui+(g===-2?a:m)}return[Cf(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class ps{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[h,f]=rp(t,e);if(this.el=ps.createElement(h,n),Ui.currentNode=this.el.content,e===2||e===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(r=Ui.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const g of r.getAttributeNames())if(g.endsWith(Tf)){const p=f[o++],m=r.getAttribute(g).split(ui),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:x[2],strings:m,ctor:x[1]==="."?op:x[1]==="?"?ap:x[1]==="@"?cp:jo}),r.removeAttribute(g)}else g.startsWith(ui)&&(l.push({type:6,index:s}),r.removeAttribute(g));if(wf.test(r.tagName)){const g=r.textContent.split(ui),p=g.length-1;if(p>0){r.textContent=Go?Go.emptyScript:"";for(let m=0;m<p;m++)r.append(g[m],fs()),Ui.nextNode(),l.push({type:2,index:++s});r.append(g[p],fs())}}}else if(r.nodeType===8)if(r.data===Af)l.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(ui,g+1))!==-1;)l.push({type:7,index:s}),g+=ui.length-1}s++}}static createElement(t,e){const n=zi.createElement("template");return n.innerHTML=t,n}}function Rr(i,t,e=i,n){if(t===Cr)return t;let r=n!==void 0?e._$Co?.[n]:e._$Cl;const s=ds(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=r:e._$Cl=r),r!==void 0&&(t=Rr(i,r._$AS(i,t.values),r,n)),t}class sp{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??zi).importNode(e,!0);Ui.currentNode=r;let s=Ui.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new bs(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new lp(s,this,t)),this._$AV.push(h),l=n[++a]}o!==l?.index&&(s=Ui.nextNode(),o++)}return Ui.currentNode=zi,r}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class bs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=Ee,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Rr(this,t,e),ds(t)?t===Ee||t==null||t===""?(this._$AH!==Ee&&this._$AR(),this._$AH=Ee):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ep(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ee&&ds(this._$AH)?this._$AA.nextSibling.data=t:this.T(zi.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ps.createElement(Cf(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{const s=new sp(r,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=mu.get(t.strings);return e===void 0&&mu.set(t.strings,e=new ps(t)),e}k(t){bl(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const s of t)r===e.length?e.push(n=new bs(this.O(fs()),this.O(fs()),this,this.options)):n=e[r],n._$AI(s),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const n=uu(t).nextSibling;uu(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class jo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,s){this.type=1,this._$AH=Ee,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ee}_$AI(t,e=this,n,r){const s=this.strings;let o=!1;if(s===void 0)t=Rr(this,t,e,0),o=!ds(t)||t!==this._$AH&&t!==Cr,o&&(this._$AH=t);else{const a=t;let l,h;for(t=s[0],l=0;l<s.length-1;l++)h=Rr(this,a[n+l],e,l),h===Cr&&(h=this._$AH[l]),o||=!ds(h)||h!==this._$AH[l],h===Ee?t=Ee:t!==Ee&&(t+=(h??"")+s[l+1]),this._$AH[l]=h}o&&!r&&this.j(t)}j(t){t===Ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class op extends jo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ee?void 0:t}}class ap extends jo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ee)}}class cp extends jo{constructor(t,e,n,r,s){super(t,e,n,r,s),this.type=5}_$AI(t,e=this){if((t=Rr(this,t,e,0)??Ee)===Cr)return;const n=this._$AH,r=t===Ee&&n!==Ee||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==Ee&&(n===Ee||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lp{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Rr(this,t)}}const up=El.litHtmlPolyfillSupport;up?.(ps,bs),(El.litHtmlVersions??=[]).push("3.3.2");const hp=(i,t,e)=>{const n=e?.renderBefore??t;let r=n._$litPart$;if(r===void 0){const s=e?.renderBefore??null;n._$litPart$=r=new bs(t.insertBefore(fs(),s),s,void 0,e??{})}return r._$AI(i),r};const Tl=globalThis;class ss extends vr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hp(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cr}}ss._$litElement$=!0,ss.finalized=!0,Tl.litElementHydrateSupport?.({LitElement:ss});const fp=Tl.litElementPolyfillSupport;fp?.({LitElement:ss});(Tl.litElementVersions??=[]).push("4.2.2");const dp=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const pp={attribute:!0,type:String,converter:Ho,reflect:!1,hasChanged:Ml},gp=(i=pp,t,e)=>{const{kind:n,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,i,a),a}}}if(n==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function Rf(i){return(t,e)=>typeof e=="object"?gp(i,t,e):((n,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(r,s):void 0})(i,t,e)}const Ts="183",mp=0,_u=1,_p=2,Ro=1,xp=2,es=3,Rn=0,ze=1,mn=2,Xn=0,Ar=1,xu=2,vu=3,yu=4,vp=5,Di=100,yp=101,Sp=102,Mp=103,Ep=104,bp=200,Tp=201,Ap=202,wp=203,gc=204,mc=205,Cp=206,Rp=207,Pp=208,Ip=209,Dp=210,Lp=211,Up=212,Np=213,Fp=214,_c=0,xc=1,vc=2,Pr=3,yc=4,Sc=5,Mc=6,Ec=7,Pf=0,Op=1,Bp=2,wn=0,If=1,Df=2,Lf=3,Uf=4,Nf=5,Ff=6,Of=7,Bf=300,Vi=301,Ir=302,la=303,ua=304,Qo=306,bc=1e3,Wn=1001,Tc=1002,Ce=1003,zp=1004,Ps=1005,De=1006,ha=1007,Ni=1008,je=1009,zf=1010,Vf=1011,gs=1012,Al=1013,Pn=1014,bn=1015,Zn=1016,wl=1017,Cl=1018,ms=1020,Hf=35902,Gf=35899,kf=1021,Wf=1022,_n=1023,Jn=1026,Fi=1027,Xf=1028,Rl=1029,Dr=1030,Pl=1031,Il=1033,Po=33776,Io=33777,Do=33778,Lo=33779,Ac=35840,wc=35841,Cc=35842,Rc=35843,Pc=36196,Ic=37492,Dc=37496,Lc=37488,Uc=37489,Nc=37490,Fc=37491,Oc=37808,Bc=37809,zc=37810,Vc=37811,Hc=37812,Gc=37813,kc=37814,Wc=37815,Xc=37816,$c=37817,qc=37818,Yc=37819,Zc=37820,Jc=37821,Kc=36492,jc=36494,Qc=36495,tl=36283,el=36284,nl=36285,il=36286,Vp=3200,$f=0,Hp=1,hi="",rn="srgb",Lr="srgb-linear",ko="linear",ne="srgb",$i=7680,Su=519,Gp=512,kp=513,Wp=514,Dl=515,Xp=516,$p=517,Ll=518,qp=519,Mu=35044,Eu="300 es",Tn=2e3,_s=2001;function Yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){const i=Wo("canvas");return i.style.display="block",i}const bu={};function Tu(...i){const t="THREE."+i.shift();console.log(t,...i)}function qf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=qf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=qf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xo(...i){const t=i.join(" ");t in bu||(bu[t]=!0,Ht(...i))}function Jp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Kp={[_c]:xc,[vc]:Mc,[yc]:Ec,[Pr]:Sc,[xc]:_c,[Mc]:vc,[Ec]:yc,[Sc]:Pr};class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Au=1234567;const os=Math.PI/180,xs=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Ul(i,t){return(i%t+t)%t}function jp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Qp(i,t,e){return i!==t?(e-i)/(t-i):0}function as(i,t,e){return(1-e)*i+e*t}function tg(i,t,e,n){return as(i,t,1-Math.exp(-e*n))}function eg(i,t=1){return t-Math.abs(Ul(i,t*2)-t)}function ng(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ig(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sg(i,t){return i+Math.random()*(t-i)}function og(i){return i*(.5-Math.random())}function ag(i){i!==void 0&&(Au=i);let t=Au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cg(i){return i*os}function lg(i){return i*xs}function ug(i){return(i&i-1)===0&&i!==0}function hg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dg(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),h=s((t+n)/2),f=o((t+n)/2),g=s((t-n)/2),p=o((t-n)/2),m=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*f,l*g,l*p,a*h);break;case"YZY":i.set(l*p,a*f,l*g,a*h);break;case"ZXZ":i.set(l*g,l*p,a*f,a*h);break;case"XZX":i.set(a*f,l*x,l*m,a*h);break;case"YXY":i.set(l*m,a*f,l*x,a*h);break;case"ZYZ":i.set(l*x,l*m,a*f,a*h);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pg={DEG2RAD:os,RAD2DEG:xs,generateUUID:ki,clamp:Wt,euclideanModulo:Ul,mapLinear:jp,inverseLerp:Qp,lerp:as,damp:tg,pingpong:eg,smoothstep:ng,smootherstep:ig,randInt:rg,randFloat:sg,randFloatSpread:og,seededRandom:ag,degToRad:cg,radToDeg:lg,isPowerOfTwo:ug,ceilPowerOfTwo:hg,floorPowerOfTwo:fg,setQuaternionFromProperEuler:dg,normalize:Fe,denormalize:yr};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],h=n[r+1],f=n[r+2],g=n[r+3],p=s[o+0],m=s[o+1],x=s[o+2],b=s[o+3];if(g!==b||l!==p||h!==m||f!==x){let _=l*p+h*m+f*x+g*b;_<0&&(p=-p,m=-m,x=-x,b=-b,_=-_);let v=1-a;if(_<.9995){const E=Math.acos(_),d=Math.sin(E);v=Math.sin(v*E)/d,a=Math.sin(a*E)/d,l=l*v+p*a,h=h*v+m*a,f=f*v+x*a,g=g*v+b*a}else{l=l*v+p*a,h=h*v+m*a,f=f*v+x*a,g=g*v+b*a;const E=1/Math.sqrt(l*l+h*h+f*f+g*g);l*=E,h*=E,f*=E,g*=E}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],h=n[r+2],f=n[r+3],g=s[o],p=s[o+1],m=s[o+2],x=s[o+3];return t[e]=a*x+f*g+l*m-h*p,t[e+1]=l*x+f*p+h*g-a*m,t[e+2]=h*x+f*m+a*p-l*g,t[e+3]=f*x-a*g-l*p-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),f=a(r/2),g=a(s/2),p=l(n/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*f*g+h*m*x,this._y=h*m*g-p*f*x,this._z=h*f*x+p*m*g,this._w=h*f*g-p*m*x;break;case"YXZ":this._x=p*f*g+h*m*x,this._y=h*m*g-p*f*x,this._z=h*f*x-p*m*g,this._w=h*f*g+p*m*x;break;case"ZXY":this._x=p*f*g-h*m*x,this._y=h*m*g+p*f*x,this._z=h*f*x+p*m*g,this._w=h*f*g-p*m*x;break;case"ZYX":this._x=p*f*g-h*m*x,this._y=h*m*g+p*f*x,this._z=h*f*x-p*m*g,this._w=h*f*g+p*m*x;break;case"YZX":this._x=p*f*g+h*m*x,this._y=h*m*g+p*f*x,this._z=h*f*x-p*m*g,this._w=h*f*g-p*m*x;break;case"XZY":this._x=p*f*g-h*m*x,this._y=h*m*g-p*f*x,this._z=h*f*x+p*m*g,this._w=h*f*g+p*m*x;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],f=e[6],g=e[10],p=n+a+g;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-h)*m,this._z=(o-r)*m}else if(n>a&&n>g){const m=2*Math.sqrt(1+n-a-g);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+h)/m}else if(a>g){const m=2*Math.sqrt(1+a-n-g);this._w=(s-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+g-n-a);this._w=(o-r)/m,this._x=(s+h)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,f=e._w;return this._x=n*f+o*a+r*h-s*l,this._y=r*f+o*l+s*a-n*h,this._z=s*f+o*h+n*l-r*a,this._w=o*f-n*a-r*l-s*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const h=Math.acos(a),f=Math.sin(h);l=Math.sin(l*h)/f,e=Math.sin(e*h)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*r-a*n),f=2*(a*e-s*r),g=2*(s*n-o*e);return this.x=e+l*h+o*g-a*f,this.y=n+l*f+a*h-s*g,this.z=r+l*g+s*f-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new L,wu=new $n;class $t{constructor(t,e,n,r,s,o,a,l,h){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,h)}set(t,e,n,r,s,o,a,l,h){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],f=n[4],g=n[7],p=n[2],m=n[5],x=n[8],b=r[0],_=r[3],v=r[6],E=r[1],d=r[4],c=r[7],S=r[2],u=r[5],R=r[8];return s[0]=o*b+a*E+l*S,s[3]=o*_+a*d+l*u,s[6]=o*v+a*c+l*R,s[1]=h*b+f*E+g*S,s[4]=h*_+f*d+g*u,s[7]=h*v+f*c+g*R,s[2]=p*b+m*E+x*S,s[5]=p*_+m*d+x*u,s[8]=p*v+m*c+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8];return e*o*f-e*a*h-n*s*f+n*a*l+r*s*h-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],g=f*o-a*h,p=a*l-f*s,m=h*s-o*l,x=e*g+n*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return t[0]=g*b,t[1]=(r*h-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=p*b,t[4]=(f*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=m*b,t[7]=(n*l-h*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-r*h,r*l,-r*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new $t,Cu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ne&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?ko:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:t,whitePoint:n,transfer:ko,toXYZ:Cu,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Cu,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const Qt=gg();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class mg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=Wo("canvas")),qi.width=t.width,qi.height=t.height;const r=qi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _g=0;class Nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pa(r[o].image)):s.push(pa(r[o]))}else s=pa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let xg=0;const ga=new L;class Ve extends Fr{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Wn,r=Wn,s=De,o=Ni,a=_n,l=je,h=Ve.DEFAULT_ANISOTROPY,f=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ki(),this.name="",this.source=new Nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bc:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bc:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Bf;Ve.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,h=l[0],f=l[4],g=l[8],p=l[1],m=l[5],x=l[9],b=l[2],_=l[6],v=l[10];if(Math.abs(f-p)<.01&&Math.abs(g-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+p)<.1&&Math.abs(g+b)<.1&&Math.abs(x+_)<.1&&Math.abs(h+m+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const d=(h+1)/2,c=(m+1)/2,S=(v+1)/2,u=(f+p)/4,R=(g+b)/4,y=(x+_)/4;return d>c&&d>S?d<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(d),r=u/n,s=R/n):c>S?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=u/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=R/s,r=y/s),this.set(n,r,s,e),this}let E=Math.sqrt((_-x)*(_-x)+(g-b)*(g-b)+(p-f)*(p-f));return Math.abs(E)<.001&&(E=1),this.x=(_-x)/E,this.y=(g-b)/E,this.z=(p-f)/E,this.w=Math.acos((h+m+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends Fr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Ve(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Nl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends vg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yf extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yg extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(t,e,n,r,s,o,a,l,h,f,g,p,m,x,b,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,h,f,g,p,m,x,b,_)}set(t,e,n,r,s,o,a,l,h,f,g,p,m,x,b,_){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=h,v[6]=f,v[10]=g,v[14]=p,v[3]=m,v[7]=x,v[11]=b,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Yi.setFromMatrixColumn(t,0).length(),s=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),h=Math.sin(r),f=Math.cos(s),g=Math.sin(s);if(t.order==="XYZ"){const p=o*f,m=o*g,x=a*f,b=a*g;e[0]=l*f,e[4]=-l*g,e[8]=h,e[1]=m+x*h,e[5]=p-b*h,e[9]=-a*l,e[2]=b-p*h,e[6]=x+m*h,e[10]=o*l}else if(t.order==="YXZ"){const p=l*f,m=l*g,x=h*f,b=h*g;e[0]=p+b*a,e[4]=x*a-m,e[8]=o*h,e[1]=o*g,e[5]=o*f,e[9]=-a,e[2]=m*a-x,e[6]=b+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*f,m=l*g,x=h*f,b=h*g;e[0]=p-b*a,e[4]=-o*g,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*f,e[9]=b-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*f,m=o*g,x=a*f,b=a*g;e[0]=l*f,e[4]=x*h-m,e[8]=p*h+b,e[1]=l*g,e[5]=b*h+p,e[9]=m*h-x,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*h,x=a*l,b=a*h;e[0]=l*f,e[4]=b-p*g,e[8]=x*g+m,e[1]=g,e[5]=o*f,e[9]=-a*f,e[2]=-h*f,e[6]=m*g+x,e[10]=p-b*g}else if(t.order==="XZY"){const p=o*l,m=o*h,x=a*l,b=a*h;e[0]=l*f,e[4]=-g,e[8]=h*f,e[1]=p*g+b,e[5]=o*f,e[9]=m*g-x,e[2]=x*g-m,e[6]=a*f,e[10]=b*g+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sg,t,Mg)}lookAt(t,e,n){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ti.crossVectors(n,Ze),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ti.crossVectors(n,Ze)),ti.normalize(),Is.crossVectors(Ze,ti),r[0]=ti.x,r[4]=Is.x,r[8]=Ze.x,r[1]=ti.y,r[5]=Is.y,r[9]=Ze.y,r[2]=ti.z,r[6]=Is.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],f=n[1],g=n[5],p=n[9],m=n[13],x=n[2],b=n[6],_=n[10],v=n[14],E=n[3],d=n[7],c=n[11],S=n[15],u=r[0],R=r[4],y=r[8],M=r[12],A=r[1],T=r[5],w=r[9],C=r[13],U=r[2],F=r[6],B=r[10],O=r[14],k=r[3],G=r[7],at=r[11],et=r[15];return s[0]=o*u+a*A+l*U+h*k,s[4]=o*R+a*T+l*F+h*G,s[8]=o*y+a*w+l*B+h*at,s[12]=o*M+a*C+l*O+h*et,s[1]=f*u+g*A+p*U+m*k,s[5]=f*R+g*T+p*F+m*G,s[9]=f*y+g*w+p*B+m*at,s[13]=f*M+g*C+p*O+m*et,s[2]=x*u+b*A+_*U+v*k,s[6]=x*R+b*T+_*F+v*G,s[10]=x*y+b*w+_*B+v*at,s[14]=x*M+b*C+_*O+v*et,s[3]=E*u+d*A+c*U+S*k,s[7]=E*R+d*T+c*F+S*G,s[11]=E*y+d*w+c*B+S*at,s[15]=E*M+d*C+c*O+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],f=t[2],g=t[6],p=t[10],m=t[14],x=t[3],b=t[7],_=t[11],v=t[15],E=l*m-h*p,d=a*m-h*g,c=a*p-l*g,S=o*m-h*f,u=o*p-l*f,R=o*g-a*f;return e*(b*E-_*d+v*c)-n*(x*E-_*S+v*u)+r*(x*d-b*S+v*R)-s*(x*c-b*u+_*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],g=t[9],p=t[10],m=t[11],x=t[12],b=t[13],_=t[14],v=t[15],E=e*a-n*o,d=e*l-r*o,c=e*h-s*o,S=n*l-r*a,u=n*h-s*a,R=r*h-s*l,y=f*b-g*x,M=f*_-p*x,A=f*v-m*x,T=g*_-p*b,w=g*v-m*b,C=p*v-m*_,U=E*C-d*w+c*T+S*A-u*M+R*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return t[0]=(a*C-l*w+h*T)*F,t[1]=(r*w-n*C-s*T)*F,t[2]=(b*R-_*u+v*S)*F,t[3]=(p*u-g*R-m*S)*F,t[4]=(l*A-o*C-h*M)*F,t[5]=(e*C-r*A+s*M)*F,t[6]=(_*c-x*R-v*d)*F,t[7]=(f*R-p*c+m*d)*F,t[8]=(o*w-a*A+h*y)*F,t[9]=(n*A-e*w-s*y)*F,t[10]=(x*u-b*c+v*E)*F,t[11]=(g*c-f*u-m*E)*F,t[12]=(a*M-o*T-l*y)*F,t[13]=(e*T-n*M+r*y)*F,t[14]=(b*d-x*S-_*E)*F,t[15]=(f*S-g*d+p*E)*F,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,h=s*o,f=s*a;return this.set(h*o+n,h*a-r*l,h*l+r*a,0,h*a+r*l,f*a+n,f*l-r*o,0,h*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,f=o+o,g=a+a,p=s*h,m=s*f,x=s*g,b=o*f,_=o*g,v=a*g,E=l*h,d=l*f,c=l*g,S=n.x,u=n.y,R=n.z;return r[0]=(1-(b+v))*S,r[1]=(m+c)*S,r[2]=(x-d)*S,r[3]=0,r[4]=(m-c)*u,r[5]=(1-(p+v))*u,r[6]=(_+E)*u,r[7]=0,r[8]=(x+d)*R,r[9]=(_-E)*R,r[10]=(1-(p+b))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Yi.set(r[0],r[1],r[2]).length();const a=Yi.set(r[4],r[5],r[6]).length(),l=Yi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),cn.copy(this);const h=1/o,f=1/a,g=1/l;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=f,cn.elements[5]*=f,cn.elements[6]*=f,cn.elements[8]*=g,cn.elements[9]*=g,cn.elements[10]*=g,e.setFromRotationMatrix(cn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Tn,l=!1){const h=this.elements,f=2*s/(e-t),g=2*s/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let x,b;if(l)x=s/(o-s),b=o*s/(o-s);else if(a===Tn)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===_s)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=g,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Tn,l=!1){const h=this.elements,f=2/(e-t),g=2/(n-r),p=-(e+t)/(e-t),m=-(n+r)/(n-r);let x,b;if(l)x=1/(o-s),b=o/(o-s);else if(a===Tn)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===_s)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=g,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=x,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new L,cn=new Jt,Sg=new L(0,0,0),Mg=new L(1,1,1),ti=new L,Is=new L,Ze=new L,Pu=new Jt,Iu=new $n;class xn{constructor(t=0,e=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],h=r[5],f=r[9],g=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eg=0;const Du=new L,Zi=new $n,Nn=new Jt,Ds=new L,Vr=new L,bg=new L,Tg=new $n,Lu=new L(1,0,0),Uu=new L(0,1,0),Nu=new L(0,0,1),Fu={type:"added"},Ag={type:"removed"},Ji={type:"childadded",child:null},ma={type:"childremoved",child:null};class Ne extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new L,e=new xn,n=new $n,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new $t}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Uu,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Du.copy(t).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Uu,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Vr,Ds,this.up):Nn.lookAt(Ds,Vr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fu),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fu),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Tg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){const g=l[h];s(t.shapes,g)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),f=o(t.images),g=o(t.shapes),p=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const h in a){const f=a[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ls extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const b of t.hand.values()){const _=e.getJointPose(b,n),v=this._getHandJoint(h,b);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],p=f.position.distanceTo(g.position),m=.02,x=.005;h.inputState.pinching&&p>m+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=m-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Us={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Ul(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xa(o,s,t+1/3),this.g=xa(o,s,t),this.b=xa(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=rn){function n(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Zf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Qt.workingToColorSpace(Ie.copy(this),t),Math.round(Wt(Ie.r*255,0,255))*65536+Math.round(Wt(Ie.g*255,0,255))*256+Math.round(Wt(Ie.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,h;const f=(a+o)/2;if(a===o)l=0,h=0;else{const g=o-a;switch(h=f<=.5?g/(o+a):g/(2-o-a),o){case n:l=(r-s)/g+(r<s?6:0);break;case r:l=(s-n)/g+2;break;case s:l=(n-r)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=rn){Qt.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Us);const n=as(ei.h,Us.h,e),r=as(ei.s,Us.s,e),s=as(ei.l,Us.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Kt;Kt.NAMES=Zf;class Cg extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new L,Fn=new L,va=new L,On=new L,Ki=new L,ji=new L,Ou=new L,ya=new L,Sa=new L,Ma=new L,Ea=new oe,ba=new oe,Ta=new oe;class ce{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ln.subVectors(r,e),Fn.subVectors(n,e),va.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Fn),l=ln.dot(va),h=Fn.dot(Fn),f=Fn.dot(va),g=o*h-a*a;if(g===0)return s.set(0,0,0),null;const p=1/g,m=(h*l-a*f)*p,x=(o*f-a*l)*p;return s.set(1-m-x,x,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ea.setScalar(0),ba.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ea,s.x),o.addScaledVector(ba,s.y),o.addScaledVector(Ta,s.z),o}static isFrontFacing(t,e,n,r){return ln.subVectors(n,e),Fn.subVectors(t,e),ln.cross(Fn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),ln.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ce.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ce.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ki.subVectors(r,n),ji.subVectors(s,n),ya.subVectors(t,n);const l=Ki.dot(ya),h=ji.dot(ya);if(l<=0&&h<=0)return e.copy(n);Sa.subVectors(t,r);const f=Ki.dot(Sa),g=ji.dot(Sa);if(f>=0&&g<=f)return e.copy(r);const p=l*g-f*h;if(p<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Ki,o);Ma.subVectors(t,s);const m=Ki.dot(Ma),x=ji.dot(Ma);if(x>=0&&m<=x)return e.copy(s);const b=m*h-l*x;if(b<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(ji,a);const _=f*x-m*g;if(_<=0&&g-f>=0&&m-x>=0)return Ou.subVectors(s,r),a=(g-f)/(g-f+(m-x)),e.copy(r).addScaledVector(Ou,a);const v=1/(_+b+p);return o=b*v,a=p*v,e.copy(n).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ge{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Fs.subVectors(this.max,Hr),Qi.subVectors(t.a,Hr),tr.subVectors(t.b,Hr),er.subVectors(t.c,Hr),ni.subVectors(tr,Qi),ii.subVectors(er,tr),vi.subVectors(Qi,er);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!Aa(e,Qi,tr,er,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Qi,tr,er,Fs))?!1:(Os.crossVectors(ni,ii),e=[Os.x,Os.y,Os.z],Aa(e,Qi,tr,er,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new L,new L,new L,new L,new L,new L,new L,new L],un=new L,Ns=new Ge,Qi=new L,tr=new L,er=new L,ni=new L,ii=new L,vi=new L,Hr=new L,Fs=new L,Os=new L,yi=new L;function Aa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yi.fromArray(i,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=t.dot(yi),h=e.dot(yi),f=n.dot(yi);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>a)return!1}return!0}const ge=new L,Bs=new gt;let Rg=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),r=Fe(r,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mu&&(t.usage=this.usage),t}}class Jf extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kf extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $e extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Pg=new Ge,Gr=new L,wa=new L;class Ol{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(wa)),this.expandByPoint(Gr.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ig=0;const en=new Jt,Ca=new Ne,nr=new L,Je=new Ge,kr=new Ge,Me=new L;class on extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yp(t)?Kf:Jf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ge);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Je.min,kr.min),Je.expandByPoint(Me),Me.addVectors(Je.max,kr.max),Je.expandByPoint(Me)):(Je.expandByPoint(kr.min),Je.expandByPoint(kr.max))}Je.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)Me.fromBufferAttribute(a,h),l&&(nr.fromBufferAttribute(t,h),Me.add(nr)),r=Math.max(r,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new L,l[y]=new L;const h=new L,f=new L,g=new L,p=new gt,m=new gt,x=new gt,b=new L,_=new L;function v(y,M,A){h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),g.fromBufferAttribute(n,A),p.fromBufferAttribute(s,y),m.fromBufferAttribute(s,M),x.fromBufferAttribute(s,A),f.sub(h),g.sub(h),m.sub(p),x.sub(p);const T=1/(m.x*x.y-x.x*m.y);isFinite(T)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(g,-m.y).multiplyScalar(T),_.copy(g).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(T),a[y].add(b),a[M].add(b),a[A].add(b),l[y].add(_),l[M].add(_),l[A].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let y=0,M=E.length;y<M;++y){const A=E[y],T=A.start,w=A.count;for(let C=T,U=T+w;C<U;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const d=new L,c=new L,S=new L,u=new L;function R(y){S.fromBufferAttribute(r,y),u.copy(S);const M=a[y];d.copy(M),d.sub(S.multiplyScalar(S.dot(M))).normalize(),c.crossVectors(u,M);const T=c.dot(l[y])<0?-1:1;o.setXYZW(y,d.x,d.y,d.z,T)}for(let y=0,M=E.length;y<M;++y){const A=E[y],T=A.start,w=A.count;for(let C=T,U=T+w;C<U;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,h=new L,f=new L,g=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){const x=t.getX(p+0),b=t.getX(p+1),_=t.getX(p+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,_),f.subVectors(o,s),g.subVectors(r,s),f.cross(g),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,_),a.add(f),l.add(f),h.add(f),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),f.subVectors(o,s),g.subVectors(r,s),f.cross(g),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const h=a.array,f=a.itemSize,g=a.normalized,p=new h.constructor(l.length*f);let m=0,x=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*f;for(let v=0;v<f;v++)p[x++]=h[m++]}return new He(p,f,g)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],h=t(l,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let f=0,g=h.length;f<g;f++){const p=h[f],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],f=[];for(let g=0,p=h.length;g<p;g++){const m=h[g];f.push(m.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(e))}const s=t.morphAttributes;for(const h in s){const f=[],g=s[h];for(let p=0,m=g.length;p<m;p++)f.push(g[p].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,f=o.length;h<f;h++){const g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Dg=0;class As extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ar,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=mc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const zn=new L,Ra=new L,zs=new L,ri=new L,Pa=new L,Vs=new L,Ia=new L;class ws{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ra.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ra);const s=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=ri.dot(this.direction),l=-ri.dot(zs),h=ri.lengthSq(),f=Math.abs(1-o*o);let g,p,m,x;if(f>0)if(g=o*l-a,p=o*a-l,x=s*f,g>=0)if(p>=-x)if(p<=x){const b=1/f;g*=b,p*=b,m=g*(g+o*p+2*a)+p*(o*g+p+2*l)+h}else p=s,g=Math.max(0,-(o*p+a)),m=-g*g+p*(p+2*l)+h;else p=-s,g=Math.max(0,-(o*p+a)),m=-g*g+p*(p+2*l)+h;else p<=-x?(g=Math.max(0,-(-o*s+a)),p=g>0?-s:Math.min(Math.max(-s,-l),s),m=-g*g+p*(p+2*l)+h):p<=x?(g=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+h):(g=Math.max(0,-(o*s+a)),p=g>0?s:Math.min(Math.max(-s,-l),s),m=-g*g+p*(p+2*l)+h);else p=o>0?-s:s,g=Math.max(0,-(o*p+a)),m=-g*g+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ra).addScaledVector(zs,p),m}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,r=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,r=(t.min.x-p.x)*h),f>=0?(s=(t.min.y-p.y)*f,o=(t.max.y-p.y)*f):(s=(t.max.y-p.y)*f,o=(t.min.y-p.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),g>=0?(a=(t.min.z-p.z)*g,l=(t.max.z-p.z)*g):(a=(t.max.z-p.z)*g,l=(t.min.z-p.z)*g),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,r,s){Pa.subVectors(e,t),Vs.subVectors(n,t),Ia.crossVectors(Pa,Vs);let o=this.direction.dot(Ia),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const l=a*this.direction.dot(Vs.crossVectors(ri,Vs));if(l<0)return null;const h=a*this.direction.dot(Pa.cross(ri));if(h<0||l+h>o)return null;const f=-a*ri.dot(Ia);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jf extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bu=new Jt,Si=new ws,Hs=new Ol,zu=new L,Gs=new L,ks=new L,Ws=new L,Da=new L,Xs=new L,Vu=new L,$s=new L;class Qe extends Ne{constructor(t=new on,e=new jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const f=a[l],g=s[l];f!==0&&(Da.fromBufferAttribute(g,t),o?Xs.addScaledVector(Da,f):Xs.addScaledVector(Da.sub(e),f))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(Hs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Hs,zu)===null||Si.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Bu.copy(s).invert(),Si.copy(t.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,g=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=p.length;x<b;x++){const _=p[x],v=o[_.materialIndex],E=Math.max(_.start,m.start),d=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let c=E,S=d;c<S;c+=3){const u=a.getX(c),R=a.getX(c+1),y=a.getX(c+2);r=qs(this,v,t,n,h,f,g,u,R,y),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let _=x,v=b;_<v;_+=3){const E=a.getX(_),d=a.getX(_+1),c=a.getX(_+2);r=qs(this,o,t,n,h,f,g,E,d,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=p.length;x<b;x++){const _=p[x],v=o[_.materialIndex],E=Math.max(_.start,m.start),d=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let c=E,S=d;c<S;c+=3){const u=c,R=c+1,y=c+2;r=qs(this,v,t,n,h,f,g,u,R,y),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let _=x,v=b;_<v;_+=3){const E=_,d=_+1,c=_+2;r=qs(this,o,t,n,h,f,g,E,d,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function Lg(i,t,e,n,r,s,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Rn,a),l===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo($s);return h<e.near||h>e.far?null:{distance:h,point:$s.clone(),object:i}}function qs(i,t,e,n,r,s,o,a,l,h){i.getVertexPosition(a,Gs),i.getVertexPosition(l,ks),i.getVertexPosition(h,Ws);const f=Lg(i,t,e,n,Gs,ks,Ws,Vu);if(f){const g=new L;ce.getBarycoord(Vu,Gs,ks,Ws,g),r&&(f.uv=ce.getInterpolatedAttribute(r,a,l,h,g,new gt)),s&&(f.uv1=ce.getInterpolatedAttribute(s,a,l,h,g,new gt)),o&&(f.normal=ce.getInterpolatedAttribute(o,a,l,h,g,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new L,materialIndex:0};ce.getNormal(Gs,ks,Ws,p.normal),f.face=p,f.barycoord=g}return f}class Ug extends Ve{constructor(t=null,e=1,n=1,r,s,o,a,l,h=Ce,f=Ce,g,p){super(null,o,a,l,h,f,r,s,g,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const La=new L,Ng=new L,Fg=new $t;class pn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=La.subVectors(n,e).cross(Ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fg.getNormalMatrix(t),r=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Ol,Og=new gt(.5,.5),Ys=new L;class Bl{constructor(t=new pn,e=new pn,n=new pn,r=new pn,s=new pn,o=new pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],h=s[3],f=s[4],g=s[5],p=s[6],m=s[7],x=s[8],b=s[9],_=s[10],v=s[11],E=s[12],d=s[13],c=s[14],S=s[15];if(r[0].setComponents(h-o,m-f,v-x,S-E).normalize(),r[1].setComponents(h+o,m+f,v+x,S+E).normalize(),r[2].setComponents(h+a,m+g,v+b,S+d).normalize(),r[3].setComponents(h-a,m-g,v-b,S-d).normalize(),n)r[4].setComponents(l,p,_,c).normalize(),r[5].setComponents(h-l,m-p,v-_,S-c).normalize();else if(r[4].setComponents(h-l,m-p,v-_,S-c).normalize(),e===Tn)r[5].setComponents(h+l,m+p,v+_,S+c).normalize();else if(e===_s)r[5].setComponents(l,p,_,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=Og.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ys.x=r.normal.x>0?t.max.x:t.min.x,Ys.y=r.normal.y>0?t.max.y:t.min.y,Ys.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qf extends Ve{constructor(t=[],e=Vi,n,r,s,o,a,l,h,f){super(t,e,n,r,s,o,a,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vs extends Ve{constructor(t,e,n=Pn,r,s,o,a=Ce,l=Ce,h,f=Jn,g=1){if(f!==Jn&&f!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:g};super(p,r,s,o,a,l,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bg extends vs{constructor(t,e=Pn,n=Vi,r,s,o=Ce,a=Ce,l,h=Jn){const f={width:t,height:t,depth:1},g=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,l,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class td extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yn extends on{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],f=[],g=[];let p=0,m=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(g,2));function x(b,_,v,E,d,c,S,u,R,y,M){const A=c/R,T=S/y,w=c/2,C=S/2,U=u/2,F=R+1,B=y+1;let O=0,k=0;const G=new L;for(let at=0;at<B;at++){const et=at*T-C;for(let it=0;it<F;it++){const ht=it*A-w;G[b]=ht*E,G[_]=et*d,G[v]=U,h.push(G.x,G.y,G.z),G[b]=0,G[_]=0,G[v]=u>0?1:-1,f.push(G.x,G.y,G.z),g.push(it/R),g.push(1-at/y),O+=1}}for(let at=0;at<y;at++)for(let et=0;et<R;et++){const it=p+et+F*at,ht=p+et+F*(at+1),Et=p+(et+1)+F*(at+1),Tt=p+(et+1)+F*at;l.push(it,ht,Tt),l.push(ht,Et,Tt),k+=6}a.addGroup(m,k,M),m+=k,p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $o extends on{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const h=this;r=Math.floor(r),s=Math.floor(s);const f=[],g=[],p=[],m=[];let x=0;const b=[],_=n/2;let v=0;E(),o===!1&&(t>0&&d(!0),e>0&&d(!1)),this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(m,2));function E(){const c=new L,S=new L;let u=0;const R=(e-t)/n;for(let y=0;y<=s;y++){const M=[],A=y/s,T=A*(e-t)+t;for(let w=0;w<=r;w++){const C=w/r,U=C*l+a,F=Math.sin(U),B=Math.cos(U);S.x=T*F,S.y=-A*n+_,S.z=T*B,g.push(S.x,S.y,S.z),c.set(F,R,B).normalize(),p.push(c.x,c.y,c.z),m.push(C,1-A),M.push(x++)}b.push(M)}for(let y=0;y<r;y++)for(let M=0;M<s;M++){const A=b[M][y],T=b[M+1][y],w=b[M+1][y+1],C=b[M][y+1];(t>0||M!==0)&&(f.push(A,T,C),u+=3),(e>0||M!==s-1)&&(f.push(T,w,C),u+=3)}h.addGroup(v,u,0),v+=u}function d(c){const S=x,u=new gt,R=new L;let y=0;const M=c===!0?t:e,A=c===!0?1:-1;for(let w=1;w<=r;w++)g.push(0,_*A,0),p.push(0,A,0),m.push(.5,.5),x++;const T=x;for(let w=0;w<=r;w++){const U=w/r*l+a,F=Math.cos(U),B=Math.sin(U);R.x=M*B,R.y=_*A,R.z=M*F,g.push(R.x,R.y,R.z),p.push(0,A,0),u.x=F*.5+.5,u.y=B*.5*A+.5,m.push(u.x,u.y),x++}for(let w=0;w<r;w++){const C=S+w,U=T+w;c===!0?f.push(U,U+1,C):f.push(U+1,U,C),y+=3}h.addGroup(v,y,c===!0?1:2),v+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,h;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),h=n[r]-o,h<0)a=r+1;else if(h>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const f=n[r],p=n[r+1]-f,m=(o-f)/p;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new gt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,r=[],s=[],o=[],a=new L,l=new Jt;for(let m=0;m<=t;m++){const x=m/t;r[m]=this.getTangentAt(x,new L)}s[0]=new L,o[0]=new L;let h=Number.MAX_VALUE;const f=Math.abs(r[0].x),g=Math.abs(r[0].y),p=Math.abs(r[0].z);f<=h&&(h=f,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Wt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Wt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zl extends Dn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),g=Math.sin(this.aRotation),p=l-this.aX,m=h-this.aY;l=p*f-m*g+this.aX,h=p*g+m*f+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zg extends zl{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vl(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){r(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,f,g){let p=(o-s)/h-(a-s)/(h+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+g)+(l-a)/g;p*=f,m*=f,r(o,a,p,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Zs=new L,Ua=new Vl,Na=new Vl,Fa=new Vl;class Vg extends Dn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,f;this.closed||a>0?h=r[(a-1)%s]:(Zs.subVectors(r[0],r[1]).add(r[0]),h=Zs);const g=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Zs.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(g),m),b=Math.pow(g.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(f),m);b<1e-4&&(b=1),x<1e-4&&(x=b),_<1e-4&&(_=b),Ua.initNonuniformCatmullRom(h.x,g.x,p.x,f.x,x,b,_),Na.initNonuniformCatmullRom(h.y,g.y,p.y,f.y,x,b,_),Fa.initNonuniformCatmullRom(h.z,g.z,p.z,f.z,x,b,_)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(h.x,g.x,p.x,f.x,this.tension),Na.initCatmullRom(h.y,g.y,p.y,f.y,this.tension),Fa.initCatmullRom(h.z,g.z,p.z,f.z,this.tension));return n.set(Ua.calc(l),Na.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hu(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Hg(i,t){const e=1-i;return e*e*t}function Gg(i,t){return 2*(1-i)*i*t}function kg(i,t){return i*i*t}function cs(i,t,e,n){return Hg(i,t)+Gg(i,e)+kg(i,n)}function Wg(i,t){const e=1-i;return e*e*e*t}function Xg(i,t){const e=1-i;return 3*e*e*i*t}function $g(i,t){return 3*(1-i)*i*i*t}function qg(i,t){return i*i*i*t}function ls(i,t,e,n,r){return Wg(i,t)+Xg(i,e)+$g(i,n)+qg(i,r)}class ed extends Dn{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ls(t,r.x,s.x,o.x,a.x),ls(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yg extends Dn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ls(t,r.x,s.x,o.x,a.x),ls(t,r.y,s.y,o.y,a.y),ls(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nd extends Dn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zg extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends Dn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(cs(t,r.x,s.x,o.x),cs(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jg extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(cs(t,r.x,s.x,o.x),cs(t,r.y,s.y,o.y),cs(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],h=r[o],f=r[o>r.length-2?r.length-1:o+1],g=r[o>r.length-3?r.length-1:o+2];return n.set(Hu(a,l.x,h.x,f.x,g.x),Hu(a,l.y,h.y,f.y,g.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var rl=Object.freeze({__proto__:null,ArcCurve:zg,CatmullRomCurve3:Vg,CubicBezierCurve:ed,CubicBezierCurve3:Yg,EllipseCurve:zl,LineCurve:nd,LineCurve3:Zg,QuadraticBezierCurve:id,QuadraticBezierCurve3:Jg,SplineCurve:rd});class Kg extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const f=l[h];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new rl[r.type]().fromJSON(r))}return this}}class Gu extends Kg{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nd(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new id(this.currentPoint.clone(),new gt(t,e),new gt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new ed(this.currentPoint.clone(),new gt(t,e),new gt(n,r),new gt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const h=new zl(t,e,n,r,s,o,a,l);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sd extends Gu{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Gu().fromJSON(r))}return this}}function jg(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=od(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,h;if(n&&(s=im(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let f=a,g=l;for(let p=e;p<r;p+=e){const m=i[p],x=i[p+1];m<a&&(a=m),x<l&&(l=x),m>f&&(f=m),x>g&&(g=x)}h=Math.max(f-a,g-l),h=h!==0?32767/h:0}return ys(s,o,e,a,l,h,0),o}function od(i,t,e,n,r){let s;if(r===pm(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=ku(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=ku(o/n|0,i[o],i[o+1],s);return s&&Ur(s,s.next)&&(Ms(s),s=s.next),s}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||ue(e.prev,e,e.next)===0)){if(Ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,r,s,o){if(!i)return;!o&&s&&cm(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,h=i.next;if(s?tm(i,n,r,s):Qg(i)){t.push(l.i,i.i,h.i),Ms(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=em(Hi(i),t),ys(i,t,e,n,r,s,2)):o===2&&nm(i,t,e,n,r,s):ys(Hi(i),t,e,n,r,s,1);break}}}function Qg(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,h=n.y,f=Math.min(r,s,o),g=Math.min(a,l,h),p=Math.max(r,s,o),m=Math.max(a,l,h);let x=n.next;for(;x!==t;){if(x.x>=f&&x.x<=p&&x.y>=g&&x.y<=m&&ns(r,a,s,l,o,h,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function tm(i,t,e,n){const r=i.prev,s=i,o=i.next;if(ue(r,s,o)>=0)return!1;const a=r.x,l=s.x,h=o.x,f=r.y,g=s.y,p=o.y,m=Math.min(a,l,h),x=Math.min(f,g,p),b=Math.max(a,l,h),_=Math.max(f,g,p),v=sl(m,x,t,e,n),E=sl(b,_,t,e,n);let d=i.prevZ,c=i.nextZ;for(;d&&d.z>=v&&c&&c.z<=E;){if(d.x>=m&&d.x<=b&&d.y>=x&&d.y<=_&&d!==r&&d!==o&&ns(a,f,l,g,h,p,d.x,d.y)&&ue(d.prev,d,d.next)>=0||(d=d.prevZ,c.x>=m&&c.x<=b&&c.y>=x&&c.y<=_&&c!==r&&c!==o&&ns(a,f,l,g,h,p,c.x,c.y)&&ue(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;d&&d.z>=v;){if(d.x>=m&&d.x<=b&&d.y>=x&&d.y<=_&&d!==r&&d!==o&&ns(a,f,l,g,h,p,d.x,d.y)&&ue(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;c&&c.z<=E;){if(c.x>=m&&c.x<=b&&c.y>=x&&c.y<=_&&c!==r&&c!==o&&ns(a,f,l,g,h,p,c.x,c.y)&&ue(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function em(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Ur(n,r)&&cd(n,e,e.next,r)&&Ss(n,r)&&Ss(r,n)&&(t.push(n.i,e.i,r.i),Ms(e),Ms(e.next),e=i=r),e=e.next}while(e!==i);return Hi(e)}function nm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let l=ld(o,a);o=Hi(o,o.next),l=Hi(l,l.next),ys(o,t,e,n,r,s,0),ys(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function im(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,h=od(i,a,l,n,!1);h===h.next&&(h.steiner=!0),r.push(um(h))}r.sort(rm);for(let s=0;s<r.length;s++)e=sm(r[s],e);return e}function rm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function sm(i,t){const e=om(i,t);if(!e)return t;const n=ld(e,i);return Hi(n,n.next),Hi(e,e.next)}function om(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const g=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=n&&g>s&&(s=g,o=e.x<e.next.x?e:e.next,g===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ad(r<h?n:s,r,l,h,r<h?s:n,r,e.x,e.y)){const g=Math.abs(r-e.y)/(n-e.x);Ss(e,i)&&(g<f||g===f&&(e.x>o.x||e.x===o.x&&am(o,e)))&&(o=e,f=g)}e=e.next}while(e!==a);return o}function am(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function cm(i,t,e,n){let r=i;do r.z===0&&(r.z=sl(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,lm(r)}function lm(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function sl(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function um(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ad(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function ns(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&ad(i,t,e,n,r,s,o,a)}function hm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fm(i,t)&&(Ss(i,t)&&Ss(t,i)&&dm(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Ur(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function cd(i,t,e,n){const r=Ks(ue(i,t,e)),s=Ks(ue(i,t,n)),o=Ks(ue(e,n,i)),a=Ks(ue(e,n,t));return!!(r!==s&&o!==a||r===0&&Js(i,e,t)||s===0&&Js(i,n,t)||o===0&&Js(e,i,n)||a===0&&Js(e,t,n))}function Js(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ks(i){return i>0?1:i<0?-1:0}function fm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ss(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function dm(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ld(i,t){const e=ol(i.i,i.x,i.y),n=ol(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ku(i,t,e,n){const r=ol(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pm(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class gm{static triangulate(t,e,n=2){return jg(t,e,n)}}class Er{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Er.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Wu(t),Xu(n,t);let o=t.length;e.forEach(Wu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Xu(n,e[l]);const a=gm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Wu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Hl extends on{constructor(t=new sd([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(s,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const v=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:mm;let d,c=!1,S,u,R,y;if(v){d=v.getSpacedPoints(f),c=!0,p=!1;const J=v.isCatmullRomCurve3?v.closed:!1;S=v.computeFrenetFrames(f,J),u=new L,R=new L,y=new L}p||(_=0,m=0,x=0,b=0);const M=a.extractPoints(h);let A=M.shape;const T=M.holes;if(!Er.isClockWise(A)){A=A.reverse();for(let J=0,tt=T.length;J<tt;J++){const K=T[J];Er.isClockWise(K)&&(T[J]=K.reverse())}}function C(J){const K=10000000000000001e-36;let ot=J[0];for(let N=1;N<=J.length;N++){const St=N%J.length,ct=J[St],Mt=ct.x-ot.x,st=ct.y-ot.y,D=Mt*Mt+st*st,P=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(ot.x),Math.abs(ot.y)),z=K*P*P;if(D<=z){J.splice(St,1),N--;continue}ot=ct}}C(A),T.forEach(C);const U=T.length,F=A;for(let J=0;J<U;J++){const tt=T[J];A=A.concat(tt)}function B(J,tt,K){return tt||jt("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(tt,K)}const O=A.length;function k(J,tt,K){let ot,N,St;const ct=J.x-tt.x,Mt=J.y-tt.y,st=K.x-J.x,D=K.y-J.y,P=ct*ct+Mt*Mt,z=ct*D-Mt*st;if(Math.abs(z)>Number.EPSILON){const W=Math.sqrt(P),j=Math.sqrt(st*st+D*D),$=tt.x-Mt/W,pt=tt.y+ct/W,mt=K.x-D/j,Ot=K.y+st/j,Vt=((mt-$)*D-(Ot-pt)*st)/(ct*D-Mt*st);ot=$+ct*Vt-J.x,N=pt+Mt*Vt-J.y;const lt=ot*ot+N*N;if(lt<=2)return new gt(ot,N);St=Math.sqrt(lt/2)}else{let W=!1;ct>Number.EPSILON?st>Number.EPSILON&&(W=!0):ct<-Number.EPSILON?st<-Number.EPSILON&&(W=!0):Math.sign(Mt)===Math.sign(D)&&(W=!0),W?(ot=-Mt,N=ct,St=Math.sqrt(P)):(ot=ct,N=Mt,St=Math.sqrt(P/2))}return new gt(ot/St,N/St)}const G=[];for(let J=0,tt=F.length,K=tt-1,ot=J+1;J<tt;J++,K++,ot++)K===tt&&(K=0),ot===tt&&(ot=0),G[J]=k(F[J],F[K],F[ot]);const at=[];let et,it=G.concat();for(let J=0,tt=U;J<tt;J++){const K=T[J];et=[];for(let ot=0,N=K.length,St=N-1,ct=ot+1;ot<N;ot++,St++,ct++)St===N&&(St=0),ct===N&&(ct=0),et[ot]=k(K[ot],K[St],K[ct]);at.push(et),it=it.concat(et)}let ht;if(_===0)ht=Er.triangulateShape(F,T);else{const J=[],tt=[];for(let K=0;K<_;K++){const ot=K/_,N=m*Math.cos(ot*Math.PI/2),St=x*Math.sin(ot*Math.PI/2)+b;for(let ct=0,Mt=F.length;ct<Mt;ct++){const st=B(F[ct],G[ct],St);ut(st.x,st.y,-N),ot===0&&J.push(st)}for(let ct=0,Mt=U;ct<Mt;ct++){const st=T[ct];et=at[ct];const D=[];for(let P=0,z=st.length;P<z;P++){const W=B(st[P],et[P],St);ut(W.x,W.y,-N),ot===0&&D.push(W)}ot===0&&tt.push(D)}}ht=Er.triangulateShape(J,tt)}const Et=ht.length,Tt=x+b;for(let J=0;J<O;J++){const tt=p?B(A[J],it[J],Tt):A[J];c?(R.copy(S.normals[0]).multiplyScalar(tt.x),u.copy(S.binormals[0]).multiplyScalar(tt.y),y.copy(d[0]).add(R).add(u),ut(y.x,y.y,y.z)):ut(tt.x,tt.y,0)}for(let J=1;J<=f;J++)for(let tt=0;tt<O;tt++){const K=p?B(A[tt],it[tt],Tt):A[tt];c?(R.copy(S.normals[J]).multiplyScalar(K.x),u.copy(S.binormals[J]).multiplyScalar(K.y),y.copy(d[J]).add(R).add(u),ut(y.x,y.y,y.z)):ut(K.x,K.y,g/f*J)}for(let J=_-1;J>=0;J--){const tt=J/_,K=m*Math.cos(tt*Math.PI/2),ot=x*Math.sin(tt*Math.PI/2)+b;for(let N=0,St=F.length;N<St;N++){const ct=B(F[N],G[N],ot);ut(ct.x,ct.y,g+K)}for(let N=0,St=T.length;N<St;N++){const ct=T[N];et=at[N];for(let Mt=0,st=ct.length;Mt<st;Mt++){const D=B(ct[Mt],et[Mt],ot);c?ut(D.x,D.y+d[f-1].y,d[f-1].x+K):ut(D.x,D.y,g+K)}}}Y(),nt();function Y(){const J=r.length/3;if(p){let tt=0,K=O*tt;for(let ot=0;ot<Et;ot++){const N=ht[ot];ft(N[2]+K,N[1]+K,N[0]+K)}tt=f+_*2,K=O*tt;for(let ot=0;ot<Et;ot++){const N=ht[ot];ft(N[0]+K,N[1]+K,N[2]+K)}}else{for(let tt=0;tt<Et;tt++){const K=ht[tt];ft(K[2],K[1],K[0])}for(let tt=0;tt<Et;tt++){const K=ht[tt];ft(K[0]+O*f,K[1]+O*f,K[2]+O*f)}}n.addGroup(J,r.length/3-J,0)}function nt(){const J=r.length/3;let tt=0;rt(F,tt),tt+=F.length;for(let K=0,ot=T.length;K<ot;K++){const N=T[K];rt(N,tt),tt+=N.length}n.addGroup(J,r.length/3-J,1)}function rt(J,tt){let K=J.length;for(;--K>=0;){const ot=K;let N=K-1;N<0&&(N=J.length-1);for(let St=0,ct=f+_*2;St<ct;St++){const Mt=O*St,st=O*(St+1),D=tt+ot+Mt,P=tt+N+Mt,z=tt+N+st,W=tt+ot+st;vt(D,P,z,W)}}}function ut(J,tt,K){l.push(J),l.push(tt),l.push(K)}function ft(J,tt,K){Gt(J),Gt(tt),Gt(K);const ot=r.length/3,N=E.generateTopUV(n,r,ot-3,ot-2,ot-1);At(N[0]),At(N[1]),At(N[2])}function vt(J,tt,K,ot){Gt(J),Gt(tt),Gt(ot),Gt(tt),Gt(K),Gt(ot);const N=r.length/3,St=E.generateSideWallUV(n,r,N-6,N-3,N-2,N-1);At(St[0]),At(St[1]),At(St[3]),At(St[1]),At(St[2]),At(St[3])}function Gt(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function At(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _m(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new rl[r.type]().fromJSON(r)),new Hl(n,t.options)}}const mm={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[r*3],f=t[r*3+1];return[new gt(s,o),new gt(a,l),new gt(h,f)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],f=t[n*3+1],g=t[n*3+2],p=t[r*3],m=t[r*3+1],x=t[r*3+2],b=t[s*3],_=t[s*3+1],v=t[s*3+2];return Math.abs(a-f)<Math.abs(o-h)?[new gt(o,1-l),new gt(h,1-g),new gt(p,1-x),new gt(b,1-v)]:[new gt(a,1-l),new gt(f,1-g),new gt(m,1-x),new gt(_,1-v)]}};function _m(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Or extends on{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),h=a+1,f=l+1,g=t/a,p=e/l,m=[],x=[],b=[],_=[];for(let v=0;v<f;v++){const E=v*p-o;for(let d=0;d<h;d++){const c=d*g-s;x.push(c,-E,0),b.push(0,0,1),_.push(d/a),_.push(1-v/l)}}for(let v=0;v<l;v++)for(let E=0;E<a;E++){const d=E+h*v,c=E+h*(v+1),S=E+1+h*(v+1),u=E+1+h*v;m.push(d,c,u),m.push(c,S,u)}this.setIndex(m),this.setAttribute("position",new $e(x,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.width,t.height,t.widthSegments,t.heightSegments)}}function Nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Nr(i[e]);for(const r in n)t[r]=n[r]}return t}function xm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ud(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const vm={clone:Nr,merge:Oe};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mm extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class js extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Em extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hd extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Oa=new Jt,$u=new L,qu=new L;class Tm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$u.setFromMatrixPosition(t.matrixWorld),e.position.copy($u),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===_s||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qs=new L,to=new $n,yn=new L;class fd extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qs,to,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,to,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Qs,to,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,to,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new L,Yu=new gt,Zu=new gt;class gn extends fd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Yu,Zu),e.subVectors(Zu,Yu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/h,r*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ta extends fd{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Am extends Tm{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ju extends hd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Am}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wm extends hd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ir=-90,rr=1;class Cm extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(ir,rr,t,e);r.layers=this.layers,this.add(r);const s=new gn(ir,rr,t,e);s.layers=this.layers,this.add(s);const o=new gn(ir,rr,t,e);o.layers=this.layers,this.add(o);const a=new gn(ir,rr,t,e);a.layers=this.layers,this.add(a);const l=new gn(ir,rr,t,e);l.layers=this.layers,this.add(l);const h=new gn(ir,rr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const h of e)this.remove(h);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,f]=this.children,g=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(g,p,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Rm extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ku=new Jt;class Pm{constructor(t,e,n=0,r=1/0){this.ray=new ws(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(ju),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)al(t[r],this,n,e);return n.sort(ju),n}}function ju(i,t){return i.distance-t.distance}function al(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)al(s[o],t,e,!0)}}const Qu=new L,eo=new L,sr=new L,or=new L,Ba=new L,Im=new L,Dm=new L;class Ae{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qu.subVectors(t,this.start),eo.subVectors(this.end,this.start);const n=eo.dot(eo);let s=eo.dot(Qu)/n;return e&&(s=Wt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Im,n=Dm){const r=10000000000000001e-32;let s,o;const a=this.start,l=t.start,h=this.end,f=t.end;sr.subVectors(h,a),or.subVectors(f,l),Ba.subVectors(a,l);const g=sr.dot(sr),p=or.dot(or),m=or.dot(Ba);if(g<=r&&p<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(g<=r)s=0,o=m/p,o=Wt(o,0,1);else{const x=sr.dot(Ba);if(p<=r)o=0,s=Wt(-x/g,0,1);else{const b=sr.dot(or),_=g*p-b*b;_!==0?s=Wt((b*m-x*p)/_,0,1):s=0,o=(b*s+m)/p,o<0?(o=0,s=Wt(-x/g,0,1)):o>1&&(o=1,s=Wt((b-x)/g,0,1))}}return e.copy(a).addScaledVector(sr,s),n.copy(l).addScaledVector(or,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function th(i,t,e,n){const r=Lm(n);switch(e){case kf:return i*t;case Xf:return i*t/r.components*r.byteLength;case Rl:return i*t/r.components*r.byteLength;case Dr:return i*t*2/r.components*r.byteLength;case Pl:return i*t*2/r.components*r.byteLength;case Wf:return i*t*3/r.components*r.byteLength;case _n:return i*t*4/r.components*r.byteLength;case Il:return i*t*4/r.components*r.byteLength;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:case Rc:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case Cc:return Math.max(i,8)*Math.max(t,8)/2;case Pc:case Ic:case Lc:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dc:case Nc:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kc:case jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(i){switch(i){case je:case zf:return{byteLength:1,components:1};case gs:case Vf:case Zn:return{byteLength:2,components:1};case wl:case Cl:return{byteLength:2,components:4};case Pn:case Al:case bn:return{byteLength:4,components:1};case Hf:case Gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ts}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ts);function dd(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Um(i){const t=new WeakMap;function e(a,l){const h=a.array,f=a.usage,g=h.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,h,f),a.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,l,h){const f=l.array,g=l.updateRanges;if(i.bindBuffer(h,a),g.length===0)i.bufferSubData(h,0,f);else{g.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<g.length;m++){const x=g[p],b=g[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++p,g[p]=b)}g.length=p+1;for(let m=0,x=g.length;m<x;m++){const b=g[m];i.bufferSubData(h,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:r,remove:s,update:o}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,w0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ex=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Nm,alphahash_pars_fragment:Fm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Vm,aomap_fragment:Hm,aomap_pars_fragment:Gm,batching_pars_vertex:km,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:$m,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:r0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:c0,emissivemap_fragment:l0,emissivemap_pars_fragment:u0,colorspace_fragment:h0,colorspace_pars_fragment:f0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:g0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:w0,envmap_vertex:_0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:S0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:E0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:R0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:L0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:k0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:$0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:j0,normal_fragment_maps:Q0,normal_pars_fragment:t_,normal_pars_vertex:e_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:c_,packing:l_,premultiplied_alpha_fragment:u_,project_vertex:h_,dithering_fragment:f_,dithering_pars_fragment:d_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:__,shadowmap_vertex:x_,shadowmask_pars_fragment:v_,skinbase_vertex:y_,skinning_pars_vertex:S_,skinning_vertex:M_,skinnormal_vertex:E_,specularmap_fragment:b_,specularmap_pars_fragment:T_,tonemapping_fragment:A_,tonemapping_pars_fragment:w_,transmission_fragment:C_,transmission_pars_fragment:R_,uv_pars_fragment:P_,uv_pars_vertex:I_,uv_vertex:D_,worldpos_vertex:L_,background_vert:U_,background_frag:N_,backgroundCube_vert:F_,backgroundCube_frag:O_,cube_vert:B_,cube_frag:z_,depth_vert:V_,depth_frag:H_,distance_vert:G_,distance_frag:k_,equirect_vert:W_,equirect_frag:X_,linedashed_vert:$_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:Z_,meshlambert_vert:J_,meshlambert_frag:K_,meshmatcap_vert:j_,meshmatcap_frag:Q_,meshnormal_vert:tx,meshnormal_frag:ex,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:sx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:cx,points_frag:lx,shadow_vert:ux,shadow_frag:hx,sprite_vert:fx,sprite_frag:dx},bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Mn={basic:{uniforms:Oe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Oe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Oe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Oe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Oe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Oe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Oe([bt.points,bt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Oe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Oe([bt.common,bt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Oe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Oe([bt.sprite,bt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Oe([bt.common,bt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Oe([bt.lights,bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Mn.physical={uniforms:Oe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const no={r:0,b:0,g:0},Ei=new xn,px=new Jt;function gx(i,t,e,n,r,s){const o=new Kt(0);let a=r===!0?0:1,l,h,f=null,g=0,p=null;function m(E){let d=E.isScene===!0?E.background:null;if(d&&d.isTexture){const c=E.backgroundBlurriness>0;d=t.get(d,c)}return d}function x(E){let d=!1;const c=m(E);c===null?_(o,a):c&&c.isColor&&(_(c,1),d=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||d)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(E,d){const c=m(d);c&&(c.isCubeTexture||c.mapping===Qo)?(h===void 0&&(h=new Qe(new Yn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Nr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,u,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ei.copy(d.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,c.isCubeTexture&&c.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=c,h.material.uniforms.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ei)),h.material.toneMapped=Qt.getTransfer(c.colorSpace)!==ne,(f!==c||g!==c.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=c,g=c.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):c&&c.isTexture&&(l===void 0&&(l=new Qe(new Or(2,2),new In({name:"BackgroundMaterial",uniforms:Nr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=c,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(c.colorSpace)!==ne,c.matrixAutoUpdate===!0&&c.updateMatrix(),l.material.uniforms.uvTransform.value.copy(c.matrix),(f!==c||g!==c.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=c,g=c.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function _(E,d){E.getRGB(no,ud(i)),e.buffers.color.setClear(no.r,no.g,no.b,d,s)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,d=1){o.set(E),a=d,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,_(o,a)},render:x,addToRenderList:b,dispose:v}}function mx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(T,w,C,U,F){let B=!1;const O=g(T,U,C,w);s!==O&&(s=O,h(s.object)),B=m(T,U,C,F),B&&x(T,U,C,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,c(T,w,C,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function h(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function g(T,w,C,U){const F=U.wireframe===!0;let B=n[w.id];B===void 0&&(B={},n[w.id]=B);const O=T.isInstancedMesh===!0?T.id:0;let k=B[O];k===void 0&&(k={},B[O]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let at=G[F];return at===void 0&&(at=p(l()),G[F]=at),at}function p(T){const w=[],C=[],U=[];for(let F=0;F<e;F++)w[F]=0,C[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:U,object:T,attributes:{},index:null}}function m(T,w,C,U){const F=s.attributes,B=w.attributes;let O=0;const k=C.getAttributes();for(const G in k)if(k[G].location>=0){const et=F[G];let it=B[G];if(it===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(it=T.instanceColor)),et===void 0||et.attribute!==it||it&&et.data!==it.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function x(T,w,C,U){const F={},B=w.attributes;let O=0;const k=C.getAttributes();for(const G in k)if(k[G].location>=0){let et=B[G];et===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(et=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(et=T.instanceColor));const it={};it.attribute=et,et&&et.data&&(it.data=et.data),F[G]=it,O++}s.attributes=F,s.attributesNum=O,s.index=U}function b(){const T=s.newAttributes;for(let w=0,C=T.length;w<C;w++)T[w]=0}function _(T){v(T,0)}function v(T,w){const C=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;C[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),F[T]!==w&&(i.vertexAttribDivisor(T,w),F[T]=w)}function E(){const T=s.newAttributes,w=s.enabledAttributes;for(let C=0,U=w.length;C<U;C++)w[C]!==T[C]&&(i.disableVertexAttribArray(C),w[C]=0)}function d(T,w,C,U,F,B,O){O===!0?i.vertexAttribIPointer(T,w,C,F,B):i.vertexAttribPointer(T,w,C,U,F,B)}function c(T,w,C,U){b();const F=U.attributes,B=C.getAttributes(),O=w.defaultAttributeValues;for(const k in B){const G=B[k];if(G.location>=0){let at=F[k];if(at===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(at=T.instanceColor)),at!==void 0){const et=at.normalized,it=at.itemSize,ht=t.get(at);if(ht===void 0)continue;const Et=ht.buffer,Tt=ht.type,Y=ht.bytesPerElement,nt=Tt===i.INT||Tt===i.UNSIGNED_INT||at.gpuType===Al;if(at.isInterleavedBufferAttribute){const rt=at.data,ut=rt.stride,ft=at.offset;if(rt.isInstancedInterleavedBuffer){for(let vt=0;vt<G.locationSize;vt++)v(G.location+vt,rt.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let vt=0;vt<G.locationSize;vt++)_(G.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let vt=0;vt<G.locationSize;vt++)d(G.location+vt,it/G.locationSize,Tt,et,ut*Y,(ft+it/G.locationSize*vt)*Y,nt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)v(G.location+rt,at.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<G.locationSize;rt++)_(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,it/G.locationSize,Tt,et,it*Y,it/G.locationSize*rt*Y,nt)}}else if(O!==void 0){const et=O[k];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(G.location,et);break;case 3:i.vertexAttrib3fv(G.location,et);break;case 4:i.vertexAttrib4fv(G.location,et);break;default:i.vertexAttrib1fv(G.location,et)}}}}E()}function S(){M();for(const T in n){const w=n[T];for(const C in w){const U=w[C];for(const F in U){const B=U[F];for(const O in B)f(B[O].object),delete B[O];delete U[F]}}delete n[T]}}function u(T){if(n[T.id]===void 0)return;const w=n[T.id];for(const C in w){const U=w[C];for(const F in U){const B=U[F];for(const O in B)f(B[O].object),delete B[O];delete U[F]}}delete n[T.id]}function R(T){for(const w in n){const C=n[w];for(const U in C){const F=C[U];if(F[T.id]===void 0)continue;const B=F[T.id];for(const O in B)f(B[O].object),delete B[O];delete F[T.id]}}}function y(T){for(const w in n){const C=n[w],U=T.isInstancedMesh===!0?T.id:0,F=C[U];if(F!==void 0){for(const B in F){const O=F[B];for(const k in O)f(O[k].object),delete O[k];delete F[B]}delete C[U],Object.keys(C).length===0&&delete n[w]}}}function M(){A(),o=!0,s!==r&&(s=r,h(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:u,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:_,disableUnusedAttributes:E}}function _x(i,t,e){let n;function r(h){n=h}function s(h,f){i.drawArrays(n,h,f),e.update(f,n,1)}function o(h,f,g){g!==0&&(i.drawArraysInstanced(n,h,f,g),e.update(f,n,g))}function a(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];e.update(m,n,1)}function l(h,f,g,p){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h.length;x++)o(h[x],f[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,f,0,p,0,g);let x=0;for(let b=0;b<g;b++)x+=f[b]*p[b];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!y)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=l(h);f!==h&&(Ht("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const g=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),u=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:E,maxVaryings:d,maxFragmentUniforms:c,maxSamples:S,samples:u}}function vx(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const m=g.length!==0||p||n!==0||r;return r=p,n=g.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,p){e=f(g,p,0)},this.setState=function(g,p,m){const x=g.clippingPlanes,b=g.clipIntersection,_=g.clipShadows,v=i.get(g);if(!r||x===null||x.length===0||s&&!_)s?f(null):h();else{const E=s?0:n,d=E*4;let c=v.clippingState||null;l.value=c,c=f(x,p,d,m);for(let S=0;S!==d;++S)c[S]=e[S];v.clippingState=c,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(g,p,m,x){const b=g!==null?g.length:0;let _=null;if(b!==0){if(_=l.value,x!==!0||_===null){const v=m+b*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<v)&&(_=new Float32Array(v));for(let d=0,c=m;d!==b;++d,c+=4)o.copy(g[d]).applyMatrix4(E,a),o.normal.toArray(_,c),_[c+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}const di=4,eh=[.125,.215,.35,.446,.526,.582],Li=20,yx=256,Wr=new ta,nh=new Kt;let za=null,Va=0,Ha=0,Ga=!1;const Sx=new L;class ih{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Sx}=s;za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Va,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Zn,format:_n,colorSpace:Lr,depthBuffer:!1},r=rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mx(s)),this._blurMaterial=bx(s,t,e),this._ggxMaterial=Ex(s,t,e)}return r}_compileMaterial(t){const e=new Qe(new on,t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,r,s){const l=new gn(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,m=g.toneMapping;g.getClearColor(nh),g.toneMapping=wn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new Yn,new jf({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let v=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,v=!0):(_.color.copy(nh),v=!0);for(let d=0;d<6;d++){const c=d%3;c===0?(l.up.set(0,h[d],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[d],s.y,s.z)):c===1?(l.up.set(0,0,h[d]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[d],s.z)):(l.up.set(0,h[d],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[d]));const S=this._cubeSize;ar(r,c*S,d>2?S:0,S,S),g.setRenderTarget(r),v&&g.render(b,l),g.render(t,l)}g.toneMapping=m,g.autoClear=p,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Vi||t.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,h=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-f*f),p=0+h*1.25,m=g*p,{_lodMax:x}=this,b=this._sizeLods[n],_=3*b*(n>x-di?n-x+di:0),v=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,ar(s,_,v,3*b,2*b),r.setRenderTarget(s),r.render(a,Wr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,ar(t,_,v,3*b,2*b),r.setRenderTarget(t),r.render(a,Wr)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const f=3,g=this._lodMeshes[r];g.material=h;const p=h.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),b=s/x,_=isFinite(s)?1+Math.floor(f*b):Li;_>Li&&Ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Li}`);const v=[];let E=0;for(let R=0;R<Li;++R){const y=R/b,M=Math.exp(-y*y/2);v.push(M),R===0?E+=M:R<_&&(E+=2*M)}for(let R=0;R<v.length;R++)v[R]=v[R]/E;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=v,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:d}=this;p.dTheta.value=x,p.mipInt.value=d-n;const c=this._sizeLods[r],S=3*c*(r>d-di?r-d+di:0),u=4*(this._cubeSize-c);ar(e,S,u,3*c,2*c),l.setRenderTarget(e),l.render(g,Wr)}}function Mx(i){const t=[],e=[],n=[];let r=i;const s=i-di+1+eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-di?l=eh[o-i+di-1]:o===0&&(l=0),e.push(l);const h=1/(a-2),f=-h,g=1+h,p=[f,f,g,f,g,g,f,f,g,g,f,g],m=6,x=6,b=3,_=2,v=1,E=new Float32Array(b*x*m),d=new Float32Array(_*x*m),c=new Float32Array(v*x*m);for(let u=0;u<m;u++){const R=u%3*2/3-1,y=u>2?0:-1,M=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];E.set(M,b*x*u),d.set(p,_*x*u);const A=[u,u,u,u,u,u];c.set(A,v*x*u)}const S=new on;S.setAttribute("position",new He(E,b)),S.setAttribute("uv",new He(d,_)),S.setAttribute("faceIndex",new He(c,v)),n.push(new Qe(S,null)),r>di&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function rh(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ex(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bx(i,t,e){const n=new Float32Array(Li),r=new L(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function sh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function oh(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class pd extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Qf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yn(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Xn});s.uniforms.tEquirect.value=e;const o=new Qe(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=De),new Cm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}function Tx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(p,m=!1){return p==null?null:m?o(p):s(p)}function s(p){if(p&&p.isTexture){const m=p.mapping;if(m===la||m===ua)if(t.has(p)){const x=t.get(p).texture;return a(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const b=new pd(x.height);return b.fromEquirectangularTexture(i,p),t.set(p,b),p.addEventListener("dispose",h),a(b.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){const m=p.mapping,x=m===la||m===ua,b=m===Vi||m===Ir;if(x||b){let _=e.get(p);const v=_!==void 0?_.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==v)return n===null&&(n=new ih(i)),_=x?n.fromEquirectangular(p,_):n.fromCubemap(p,_),_.texture.pmremVersion=p.pmremVersion,e.set(p,_),_.texture;if(_!==void 0)return _.texture;{const E=p.image;return x&&E&&E.height>0||b&&E&&l(E)?(n===null&&(n=new ih(i)),_=x?n.fromEquirectangular(p):n.fromCubemap(p),_.texture.pmremVersion=p.pmremVersion,e.set(p,_),p.addEventListener("dispose",f),_.texture):null}}}return p}function a(p,m){return m===la?p.mapping=Vi:m===ua&&(p.mapping=Ir),p}function l(p){let m=0;const x=6;for(let b=0;b<x;b++)p[b]!==void 0&&m++;return m===x}function h(p){const m=p.target;m.removeEventListener("dispose",h);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(p){const m=p.target;m.removeEventListener("dispose",f);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Ax(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Xo("WebGLRenderer: "+n+" extension not supported."),r}}}function wx(i,t,e,n){const r={},s=new WeakMap;function o(g){const p=g.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(g,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(g){const p=g.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function h(g){const p=[],m=g.index,x=g.attributes.position;let b=0;if(x===void 0)return;if(m!==null){const E=m.array;b=m.version;for(let d=0,c=E.length;d<c;d+=3){const S=E[d+0],u=E[d+1],R=E[d+2];p.push(S,u,u,R,R,S)}}else{const E=x.array;b=x.version;for(let d=0,c=E.length/3-1;d<c;d+=3){const S=d+0,u=d+1,R=d+2;p.push(S,u,u,R,R,S)}}const _=new(x.count>=65535?Kf:Jf)(p,1);_.version=b;const v=s.get(g);v&&t.remove(v),s.set(g,_)}function f(g){const p=s.get(g);if(p){const m=g.index;m!==null&&p.version<m.version&&h(g)}else h(g);return s.get(g)}return{get:a,update:l,getWireframeAttribute:f}}function Cx(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,s,p*o),e.update(m,n,1)}function h(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,s,p*o,x),e.update(m,n,x))}function f(p,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,x);let _=0;for(let v=0;v<x;v++)_+=m[v];e.update(_,n,1)}function g(p,m,x,b){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<p.length;v++)h(p[v]/o,m[v],b[v]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,b,0,x);let v=0;for(let E=0;E<x;E++)v+=m[E]*b[E];e.update(v,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=g}function Rx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Px(i,t,e){const n=new WeakMap,r=new oe;function s(o,a,l){const h=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=f!==void 0?f.length:0;let p=n.get(a);if(p===void 0||p.count!==g){let A=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var m=A;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],d=a.morphAttributes.color||[];let c=0;x===!0&&(c=1),b===!0&&(c=2),_===!0&&(c=3);let S=a.attributes.position.count*c,u=1;S>t.maxTextureSize&&(u=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*u*4*g),y=new Yf(R,S,u,g);y.type=bn,y.needsUpdate=!0;const M=c*4;for(let T=0;T<g;T++){const w=v[T],C=E[T],U=d[T],F=S*u*4*T;for(let B=0;B<w.count;B++){const O=B*M;x===!0&&(r.fromBufferAttribute(w,B),R[F+O+0]=r.x,R[F+O+1]=r.y,R[F+O+2]=r.z,R[F+O+3]=0),b===!0&&(r.fromBufferAttribute(C,B),R[F+O+4]=r.x,R[F+O+5]=r.y,R[F+O+6]=r.z,R[F+O+7]=0),_===!0&&(r.fromBufferAttribute(U,B),R[F+O+8]=r.x,R[F+O+9]=r.y,R[F+O+10]=r.z,R[F+O+11]=U.itemSize===4?r.w:1)}}p={count:g,texture:y,size:new gt(S,u)},n.set(a,p),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let _=0;_<h.length;_++)x+=h[_];const b=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Ix(i,t,e,n,r){let s=new WeakMap;function o(h){const f=r.render.frame,g=h.geometry,p=t.get(h,g);if(s.get(p)!==f&&(t.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==f&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return p}function a(){s=new WeakMap}function l(h){const f=h.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}const Dx={[If]:"LINEAR_TONE_MAPPING",[Df]:"REINHARD_TONE_MAPPING",[Lf]:"CINEON_TONE_MAPPING",[Uf]:"ACES_FILMIC_TONE_MAPPING",[Ff]:"AGX_TONE_MAPPING",[Of]:"NEUTRAL_TONE_MAPPING",[Nf]:"CUSTOM_TONE_MAPPING"};function Lx(i,t,e,n,r){const s=new Cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Cn(t,e,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),a=new on;a.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new $e([0,2,0,0,2,0],2));const l=new Mm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Qe(a,l),f=new ta(-1,1,1,-1,0,1);let g=null,p=null,m=!1,x,b=null,_=[],v=!1;this.setSize=function(E,d){s.setSize(E,d),o.setSize(E,d);for(let c=0;c<_.length;c++){const S=_[c];S.setSize&&S.setSize(E,d)}},this.setEffects=function(E){_=E,v=_.length>0&&_[0].isRenderPass===!0;const d=s.width,c=s.height;for(let S=0;S<_.length;S++){const u=_[S];u.setSize&&u.setSize(d,c)}},this.begin=function(E,d){if(m||E.toneMapping===wn&&_.length===0)return!1;if(b=d,d!==null){const c=d.width,S=d.height;(s.width!==c||s.height!==S)&&this.setSize(c,S)}return v===!1&&E.setRenderTarget(s),x=E.toneMapping,E.toneMapping=wn,!0},this.hasRenderPass=function(){return v},this.end=function(E,d){E.toneMapping=x,m=!0;let c=s,S=o;for(let u=0;u<_.length;u++){const R=_[u];if(R.enabled!==!1&&(R.render(E,S,c,d),R.needsSwap!==!1)){const y=c;c=S,S=y}}if(g!==E.outputColorSpace||p!==E.toneMapping){g=E.outputColorSpace,p=E.toneMapping,l.defines={},Qt.getTransfer(g)===ne&&(l.defines.SRGB_TRANSFER="");const u=Dx[p];u&&(l.defines[u]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=c.texture,E.setRenderTarget(b),E.render(h,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const gd=new Ve,cl=new vs(1,1),md=new Yf,_d=new yg,xd=new Qf,ah=[],ch=[],lh=new Float32Array(16),uh=new Float32Array(9),hh=new Float32Array(4);function Br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ah[r];if(s===void 0&&(s=new Float32Array(r),ah[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ux(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Bx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),ye(e,n)}}function zx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),ye(e,n)}}function Vx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),ye(e,n)}}function Hx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function kx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Xx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Zx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=e.isReversedDepthBuffer()?Ll:Dl,s=cl):s=gd,e.setTexture2D(t||s,r)}function Jx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||_d,r)}function Kx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||xd,r)}function jx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||md,r)}function Qx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return Vx;case 5124:case 35670:return Hx;case 35667:case 35671:return Gx;case 35668:case 35672:return kx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return $x;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}function tv(i,t){i.uniform1fv(this.addr,t)}function ev(i,t){const e=Br(t,this.size,2);i.uniform2fv(this.addr,e)}function nv(i,t){const e=Br(t,this.size,3);i.uniform3fv(this.addr,e)}function iv(i,t){const e=Br(t,this.size,4);i.uniform4fv(this.addr,e)}function rv(i,t){const e=Br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sv(i,t){const e=Br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ov(i,t){const e=Br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function av(i,t){i.uniform1iv(this.addr,t)}function cv(i,t){i.uniform2iv(this.addr,t)}function lv(i,t){i.uniform3iv(this.addr,t)}function uv(i,t){i.uniform4iv(this.addr,t)}function hv(i,t){i.uniform1uiv(this.addr,t)}function fv(i,t){i.uniform2uiv(this.addr,t)}function dv(i,t){i.uniform3uiv(this.addr,t)}function pv(i,t){i.uniform4uiv(this.addr,t)}function gv(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=cl:o=gd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function mv(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||_d,s[o])}function _v(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||xd,s[o])}function xv(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||md,s[o])}function vv(i){switch(i){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return rv;case 35675:return sv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return cv;case 35668:case 35672:return lv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}class yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qx(e.type)}}class Sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vv(e.type)}}class Mv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function Ev(i,t,e){const n=i.name,r=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),o=ka.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===r){fh(e,h===void 0?new yv(a,i,t):new Sv(a,i,t));break}else{let g=e.map[a];g===void 0&&(g=new Mv(a),fh(e,g)),e=g}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ev(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function dh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bv=37297;let Tv=0;function Av(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ph=new $t;function wv(i){Qt._getMatrix(ph,Qt.workingColorSpace,i);const t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ko:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Av(i.getShaderSource(t),a)}else return s}function Cv(i,t){const e=wv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rv={[If]:"Linear",[Df]:"Reinhard",[Lf]:"Cineon",[Uf]:"ACESFilmic",[Ff]:"AgX",[Of]:"Neutral",[Nf]:"Custom"};function Pv(i,t){const e=Rv[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const io=new L;function Iv(){Qt.getLuminanceCoefficients(io);const i=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function Lv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function is(i){return i!==""}function mh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(Nv,Ov)}const Fv=new Map;function Ov(i,t){let e=qt[t];if(e===void 0){const n=Fv.get(t);if(n!==void 0)e=qt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(Bv,zv)}function zv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Vv={[Ro]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function Hv(i){return Vv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gv={[Vi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function kv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wv={[Ir]:"ENVMAP_MODE_REFRACTION"};function Xv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $v={[Pf]:"ENVMAP_BLENDING_MULTIPLY",[Op]:"ENVMAP_BLENDING_MIX",[Bp]:"ENVMAP_BLENDING_ADD"};function qv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$v[i.combine]||"ENVMAP_BLENDING_NONE"}function Yv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zv(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Hv(e),h=kv(e),f=Xv(e),g=qv(e),p=Yv(e),m=Dv(e),x=Lv(s),b=r.createProgram();let _,v,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(is).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(is).join(`
`),v.length>0&&(v+=`
`)):(_=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),v=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?qt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),o=ll(o),o=mh(o,e),o=_h(o,e),a=ll(a),a=mh(a,e),a=_h(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const d=E+_+o,c=E+v+a,S=dh(r,r.VERTEX_SHADER,d),u=dh(r,r.FRAGMENT_SHADER,c);r.attachShader(b,S),r.attachShader(b,u),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(T){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(b)||"",C=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(u)||"",F=w.trim(),B=C.trim(),O=U.trim();let k=!0,G=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,S,u);else{const at=gh(r,S,"vertex"),et=gh(r,u,"fragment");jt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+at+`
`+et)}else F!==""?Ht("WebGLProgram: Program Info Log:",F):(B===""||O==="")&&(G=!1);G&&(T.diagnostics={runnable:k,programLog:F,vertexShader:{log:B,prefix:_},fragmentShader:{log:O,prefix:v}})}r.deleteShader(S),r.deleteShader(u),y=new Uo(r,b),M=Uv(r,b)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(b,bv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=u,this}let Jv=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jv(t),e.set(t,n)),n}}class jv{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}}function Qv(i,t,e,n,r,s){const o=new Fl,a=new Kv,l=new Set,h=[],f=new Map,g=n.logarithmicDepthBuffer;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,M,A,T,w){const C=T.fog,U=w.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||F,B),k=O&&O.mapping===Qo?O.image.height:null,G=m[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&Ht("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=at!==void 0?at.length:0;let it=0;U.morphAttributes.position!==void 0&&(it=1),U.morphAttributes.normal!==void 0&&(it=2),U.morphAttributes.color!==void 0&&(it=3);let ht,Et,Tt,Y;if(G){const ee=Mn[G];ht=ee.vertexShader,Et=ee.fragmentShader}else ht=y.vertexShader,Et=y.fragmentShader,a.update(y),Tt=a.getVertexShaderID(y),Y=a.getFragmentShaderID(y);const nt=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ut=w.isInstancedMesh===!0,ft=w.isBatchedMesh===!0,vt=!!y.map,Gt=!!y.matcap,At=!!O,J=!!y.aoMap,tt=!!y.lightMap,K=!!y.bumpMap,ot=!!y.normalMap,N=!!y.displacementMap,St=!!y.emissiveMap,ct=!!y.metalnessMap,Mt=!!y.roughnessMap,st=y.anisotropy>0,D=y.clearcoat>0,P=y.dispersion>0,z=y.iridescence>0,W=y.sheen>0,j=y.transmission>0,$=st&&!!y.anisotropyMap,pt=D&&!!y.clearcoatMap,mt=D&&!!y.clearcoatNormalMap,Ot=D&&!!y.clearcoatRoughnessMap,Vt=z&&!!y.iridescenceMap,lt=z&&!!y.iridescenceThicknessMap,_t=W&&!!y.sheenColorMap,Dt=W&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,Rt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,V=j&&!!y.transmissionMap,yt=j&&!!y.thicknessMap,xt=!!y.gradientMap,It=!!y.alphaMap,dt=y.alphaTest>0,Q=!!y.alphaHash,Lt=!!y.extensions;let kt=wn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=i.toneMapping);const ae={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:ht,fragmentShader:Et,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ft,batchingColor:ft&&w._colorsTexture!==null,instancing:ut,instancingColor:ut&&w.instanceColor!==null,instancingMorph:ut&&w.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Lr,alphaToCoverage:!!y.alphaToCoverage,map:vt,matcap:Gt,envMap:At,envMapMode:At&&O.mapping,envMapCubeUVHeight:k,aoMap:J,lightMap:tt,bumpMap:K,normalMap:ot,displacementMap:N,emissiveMap:St,normalMapObjectSpace:ot&&y.normalMapType===Hp,normalMapTangentSpace:ot&&y.normalMapType===$f,metalnessMap:ct,roughnessMap:Mt,anisotropy:st,anisotropyMap:$,clearcoat:D,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ot,dispersion:P,iridescence:z,iridescenceMap:Vt,iridescenceThicknessMap:lt,sheen:W,sheenColorMap:_t,sheenRoughnessMap:Dt,specularMap:Ut,specularColorMap:Rt,specularIntensityMap:Yt,transmission:j,transmissionMap:V,thicknessMap:yt,gradientMap:xt,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:It,alphaTest:dt,alphaHash:Q,combine:y.combine,mapUv:vt&&x(y.map.channel),aoMapUv:J&&x(y.aoMap.channel),lightMapUv:tt&&x(y.lightMap.channel),bumpMapUv:K&&x(y.bumpMap.channel),normalMapUv:ot&&x(y.normalMap.channel),displacementMapUv:N&&x(y.displacementMap.channel),emissiveMapUv:St&&x(y.emissiveMap.channel),metalnessMapUv:ct&&x(y.metalnessMap.channel),roughnessMapUv:Mt&&x(y.roughnessMap.channel),anisotropyMapUv:$&&x(y.anisotropyMap.channel),clearcoatMapUv:pt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(y.sheenRoughnessMap.channel),specularMapUv:Ut&&x(y.specularMap.channel),specularColorMapUv:Rt&&x(y.specularColorMap.channel),specularIntensityMapUv:Yt&&x(y.specularIntensityMap.channel),transmissionMapUv:V&&x(y.transmissionMap.channel),thicknessMapUv:yt&&x(y.thicknessMap.channel),alphaMapUv:It&&x(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ot||st),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!U.attributes.uv&&(vt||It),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ot===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:rt,skinning:w.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:it,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:St&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(v(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function d(y){const M=m[y.type];let A;if(M){const T=Mn[M];A=vm.clone(T.uniforms)}else A=y.uniforms;return A}function c(y,M){let A=f.get(M);return A!==void 0?++A.usedTimes:(A=new Zv(i,M,y,r),h.push(A),f.set(M,A)),A}function S(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),f.delete(y.cacheKey),y.destroy()}}function u(y){a.remove(y)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:d,acquireProgram:c,releaseProgram:S,releaseShaderCache:u,programs:h,dispose:R}}function ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ey(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,x,b,_,v){let E=i[t];return E===void 0?(E={id:p.id,object:p,geometry:m,material:x,materialVariant:o(p),groupOrder:b,renderOrder:p.renderOrder,z:_,group:v},i[t]=E):(E.id=p.id,E.object=p,E.geometry=m,E.material=x,E.materialVariant=o(p),E.groupOrder=b,E.renderOrder=p.renderOrder,E.z=_,E.group=v),t++,E}function l(p,m,x,b,_,v){const E=a(p,m,x,b,_,v);x.transmission>0?n.push(E):x.transparent===!0?r.push(E):e.push(E)}function h(p,m,x,b,_,v){const E=a(p,m,x,b,_,v);x.transmission>0?n.unshift(E):x.transparent===!0?r.unshift(E):e.unshift(E)}function f(p,m){e.length>1&&e.sort(p||ey),n.length>1&&n.sort(m||yh),r.length>1&&r.sort(m||yh)}function g(){for(let p=t,m=i.length;p<m;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:g,sort:f}}function ny(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Sh,i.set(n,[o])):r>=s.length?(o=new Sh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Kt};break;case"SpotLight":e={position:new L,direction:new L,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function ry(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sy=0;function oy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ay(i){const t=new iy,e=ry(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const r=new L,s=new Jt,o=new Jt;function a(h){let f=0,g=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,x=0,b=0,_=0,v=0,E=0,d=0,c=0,S=0,u=0,R=0;h.sort(oy);for(let M=0,A=h.length;M<A;M++){const T=h[M],w=T.color,C=T.intensity,U=T.distance;let F=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Dr?F=T.shadow.map.texture:F=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=w.r*C,g+=w.g*C,p+=w.b*C;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],C);R++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,k=e.get(T);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=T.shadow.matrix,E++}n.directional[m]=B,m++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(w).multiplyScalar(C),B.distance=U,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[b]=B;const O=T.shadow;if(T.map&&(n.spotLightMap[S]=T.map,S++,O.updateMatrices(T),T.castShadow&&u++),n.spotLightMatrix[b]=O.matrix,T.castShadow){const k=e.get(T);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[b]=k,n.spotShadowMap[b]=F,c++}b++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(w).multiplyScalar(C),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=B,_++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const O=T.shadow,k=e.get(T);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=F,n.pointShadowMatrix[x]=T.shadow.matrix,d++}n.point[x]=B,x++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(C),B.groundColor.copy(T.groundColor).multiplyScalar(C),n.hemi[v]=B,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=p;const y=n.hash;(y.directionalLength!==m||y.pointLength!==x||y.spotLength!==b||y.rectAreaLength!==_||y.hemiLength!==v||y.numDirectionalShadows!==E||y.numPointShadows!==d||y.numSpotShadows!==c||y.numSpotMaps!==S||y.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=_,n.point.length=x,n.hemi.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=d,n.pointShadowMap.length=d,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=d,n.spotLightMatrix.length=c+S-u,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=R,y.directionalLength=m,y.pointLength=x,y.spotLength=b,y.rectAreaLength=_,y.hemiLength=v,y.numDirectionalShadows=E,y.numPointShadows=d,y.numSpotShadows=c,y.numSpotMaps=S,y.numLightProbes=R,n.version=sy++)}function l(h,f){let g=0,p=0,m=0,x=0,b=0;const _=f.matrixWorldInverse;for(let v=0,E=h.length;v<E;v++){const d=h[v];if(d.isDirectionalLight){const c=n.directional[g];c.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(_),g++}else if(d.isSpotLight){const c=n.spot[m];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(_),c.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(_),m++}else if(d.isRectAreaLight){const c=n.rectArea[x];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(_),o.identity(),s.copy(d.matrixWorld),s.premultiply(_),o.extractRotation(s),c.halfWidth.set(d.width*.5,0,0),c.halfHeight.set(0,d.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),x++}else if(d.isPointLight){const c=n.point[p];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(_),p++}else if(d.isHemisphereLight){const c=n.hemi[b];c.direction.setFromMatrixPosition(d.matrixWorld),c.direction.transformDirection(_),b++}}}return{setup:a,setupView:l,state:n}}function Mh(i){const t=new ay(i),e=[],n=[];function r(f){h.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cy(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Mh(i),t.set(r,[a])):s>=o.length?(a=new Mh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],fy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Eh=new Jt,Xr=new L,Wa=new L;function dy(i,t,e){let n=new Bl;const r=new gt,s=new gt,o=new oe,a=new Em,l=new bm,h={},f=e.maxTextureSize,g={[Rn]:ze,[ze]:Rn,[mn]:mn},p=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ly,fragmentShader:uy}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new on;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Qe(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let v=this.type;this.render=function(u,R,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||u.length===0)return;this.type===xp&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ro);const M=i.getRenderTarget(),A=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Xn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const C=v!==this.type;C&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=u.length;U<F;U++){const B=u[U],O=B.shadow;if(O===void 0){Ht("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const k=O.getFrameExtents();r.multiply(k),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,O.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===es){if(B.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Cn(r.x,r.y,{format:Dr,type:Zn,minFilter:De,magFilter:De,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new vs(r.x,r.y,bn),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Jn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ce,O.map.depthTexture.magFilter=Ce}else B.isPointLight?(O.map=new pd(r.x),O.map.depthTexture=new Bg(r.x,Pn)):(O.map=new Cn(r.x,r.y),O.map.depthTexture=new vs(r.x,r.y,Pn)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Jn,this.type===Ro?(O.map.depthTexture.compareFunction=G?Ll:Dl,O.map.depthTexture.minFilter=De,O.map.depthTexture.magFilter=De):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ce,O.map.depthTexture.magFilter=Ce);O.camera.updateProjectionMatrix()}const at=O.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<at;et++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,et),i.clear();else{et===0&&(i.setRenderTarget(O.map),i.clear());const it=O.getViewport(et);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),w.viewport(o)}if(B.isPointLight){const it=O.camera,ht=O.matrix,Et=B.distance||it.far;Et!==it.far&&(it.far=Et,it.updateProjectionMatrix()),Xr.setFromMatrixPosition(B.matrixWorld),it.position.copy(Xr),Wa.copy(it.position),Wa.add(hy[et]),it.up.copy(fy[et]),it.lookAt(Wa),it.updateMatrixWorld(),ht.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Eh.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Eh,it.coordinateSystem,it.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),c(R,y,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===es&&E(O,y),O.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(M,A,T)};function E(u,R){const y=t.update(b);p.defines.VSM_SAMPLES!==u.blurSamples&&(p.defines.VSM_SAMPLES=u.blurSamples,m.defines.VSM_SAMPLES=u.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),u.mapPass===null&&(u.mapPass=new Cn(r.x,r.y,{format:Dr,type:Zn})),p.uniforms.shadow_pass.value=u.map.depthTexture,p.uniforms.resolution.value=u.mapSize,p.uniforms.radius.value=u.radius,i.setRenderTarget(u.mapPass),i.clear(),i.renderBufferDirect(R,null,y,p,b,null),m.uniforms.shadow_pass.value=u.mapPass.texture,m.uniforms.resolution.value=u.mapSize,m.uniforms.radius.value=u.radius,i.setRenderTarget(u.map),i.clear(),i.renderBufferDirect(R,null,y,m,b,null)}function d(u,R,y,M){let A=null;const T=y.isPointLight===!0?u.customDistanceMaterial:u.customDepthMaterial;if(T!==void 0)A=T;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const w=A.uuid,C=R.uuid;let U=h[w];U===void 0&&(U={},h[w]=U);let F=U[C];F===void 0&&(F=A.clone(),U[C]=F,R.addEventListener("dispose",S)),A=F}if(A.visible=R.visible,A.wireframe=R.wireframe,M===es?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:g[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const w=i.properties.get(A);w.light=y}return A}function c(u,R,y,M,A){if(u.visible===!1)return;if(u.layers.test(R.layers)&&(u.isMesh||u.isLine||u.isPoints)&&(u.castShadow||u.receiveShadow&&A===es)&&(!u.frustumCulled||n.intersectsObject(u))){u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld);const C=t.update(u),U=u.material;if(Array.isArray(U)){const F=C.groups;for(let B=0,O=F.length;B<O;B++){const k=F[B],G=U[k.materialIndex];if(G&&G.visible){const at=d(u,G,M,A);u.onBeforeShadow(i,u,R,y,C,at,k),i.renderBufferDirect(y,null,C,at,u,k),u.onAfterShadow(i,u,R,y,C,at,k)}}}else if(U.visible){const F=d(u,U,M,A);u.onBeforeShadow(i,u,R,y,C,F,null),i.renderBufferDirect(y,null,C,F,u,null),u.onAfterShadow(i,u,R,y,C,F,null)}}const w=u.children;for(let C=0,U=w.length;C<U;C++)c(w[C],R,y,M,A)}function S(u){u.target.removeEventListener("dispose",S);for(const y in h){const M=h[y],A=u.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function py(i,t){function e(){let V=!1;const yt=new oe;let xt=null;const It=new oe(0,0,0,0);return{setMask:function(dt){xt!==dt&&!V&&(i.colorMask(dt,dt,dt,dt),xt=dt)},setLocked:function(dt){V=dt},setClear:function(dt,Q,Lt,kt,ae){ae===!0&&(dt*=kt,Q*=kt,Lt*=kt),yt.set(dt,Q,Lt,kt),It.equals(yt)===!1&&(i.clearColor(dt,Q,Lt,kt),It.copy(yt))},reset:function(){V=!1,xt=null,It.set(-1,0,0,0)}}}function n(){let V=!1,yt=!1,xt=null,It=null,dt=null;return{setReversed:function(Q){if(yt!==Q){const Lt=t.get("EXT_clip_control");Q?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),yt=Q;const kt=dt;dt=null,this.setClear(kt)}},getReversed:function(){return yt},setTest:function(Q){Q?nt(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(Q){xt!==Q&&!V&&(i.depthMask(Q),xt=Q)},setFunc:function(Q){if(yt&&(Q=Kp[Q]),It!==Q){switch(Q){case _c:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case vc:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case yc:i.depthFunc(i.EQUAL);break;case Sc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=Q}},setLocked:function(Q){V=Q},setClear:function(Q){dt!==Q&&(dt=Q,yt&&(Q=1-Q),i.clearDepth(Q))},reset:function(){V=!1,xt=null,It=null,dt=null,yt=!1}}}function r(){let V=!1,yt=null,xt=null,It=null,dt=null,Q=null,Lt=null,kt=null,ae=null;return{setTest:function(ee){V||(ee?nt(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(ee){yt!==ee&&!V&&(i.stencilMask(ee),yt=ee)},setFunc:function(ee,Ln,Un){(xt!==ee||It!==Ln||dt!==Un)&&(i.stencilFunc(ee,Ln,Un),xt=ee,It=Ln,dt=Un)},setOp:function(ee,Ln,Un){(Q!==ee||Lt!==Ln||kt!==Un)&&(i.stencilOp(ee,Ln,Un),Q=ee,Lt=Ln,kt=Un)},setLocked:function(ee){V=ee},setClear:function(ee){ae!==ee&&(i.clearStencil(ee),ae=ee)},reset:function(){V=!1,yt=null,xt=null,It=null,dt=null,Q=null,Lt=null,kt=null,ae=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,h=new WeakMap;let f={},g={},p=new WeakMap,m=[],x=null,b=!1,_=null,v=null,E=null,d=null,c=null,S=null,u=null,R=new Kt(0,0,0),y=0,M=!1,A=null,T=null,w=null,C=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=O>=2);let G=null,at={};const et=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),ht=new oe().fromArray(et),Et=new oe().fromArray(it);function Tt(V,yt,xt,It){const dt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(V,Q),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<xt;Lt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(yt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return Q}const Y={};Y[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Pr),K(!1),ot(_u),nt(i.CULL_FACE),J(Xn);function nt(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function rt(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function ut(V,yt){return g[V]!==yt?(i.bindFramebuffer(V,yt),g[V]=yt,V===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=yt),V===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ft(V,yt){let xt=m,It=!1;if(V){xt=p.get(yt),xt===void 0&&(xt=[],p.set(yt,xt));const dt=V.textures;if(xt.length!==dt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Lt=dt.length;Q<Lt;Q++)xt[Q]=i.COLOR_ATTACHMENT0+Q;xt.length=dt.length,It=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,It=!0);It&&i.drawBuffers(xt)}function vt(V){return x!==V?(i.useProgram(V),x=V,!0):!1}const Gt={[Di]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};Gt[Mp]=i.MIN,Gt[Ep]=i.MAX;const At={[bp]:i.ZERO,[Tp]:i.ONE,[Ap]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Dp]:i.SRC_ALPHA_SATURATE,[Pp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[Ip]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Up]:i.ONE_MINUS_CONSTANT_COLOR,[Np]:i.CONSTANT_ALPHA,[Fp]:i.ONE_MINUS_CONSTANT_ALPHA};function J(V,yt,xt,It,dt,Q,Lt,kt,ae,ee){if(V===Xn){b===!0&&(rt(i.BLEND),b=!1);return}if(b===!1&&(nt(i.BLEND),b=!0),V!==vp){if(V!==_||ee!==M){if((v!==Di||c!==Di)&&(i.blendEquation(i.FUNC_ADD),v=Di,c=Di),ee)switch(V){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFunc(i.ONE,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vu:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",V);break}E=null,d=null,S=null,u=null,R.set(0,0,0),y=0,_=V,M=ee}return}dt=dt||yt,Q=Q||xt,Lt=Lt||It,(yt!==v||dt!==c)&&(i.blendEquationSeparate(Gt[yt],Gt[dt]),v=yt,c=dt),(xt!==E||It!==d||Q!==S||Lt!==u)&&(i.blendFuncSeparate(At[xt],At[It],At[Q],At[Lt]),E=xt,d=It,S=Q,u=Lt),(kt.equals(R)===!1||ae!==y)&&(i.blendColor(kt.r,kt.g,kt.b,ae),R.copy(kt),y=ae),_=V,M=!1}function tt(V,yt){V.side===mn?rt(i.CULL_FACE):nt(i.CULL_FACE);let xt=V.side===ze;yt&&(xt=!xt),K(xt),V.blending===Ar&&V.transparent===!1?J(Xn):J(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const It=V.stencilWrite;a.setTest(It),It&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),St(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(V){A!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),A=V)}function ot(V){V!==mp?(nt(i.CULL_FACE),V!==T&&(V===_u?i.cullFace(i.BACK):V===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),T=V}function N(V){V!==w&&(B&&i.lineWidth(V),w=V)}function St(V,yt,xt){V?(nt(i.POLYGON_OFFSET_FILL),(C!==yt||U!==xt)&&(C=yt,U=xt,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,xt))):rt(i.POLYGON_OFFSET_FILL)}function ct(V){V?nt(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Mt(V){V===void 0&&(V=i.TEXTURE0+F-1),G!==V&&(i.activeTexture(V),G=V)}function st(V,yt,xt){xt===void 0&&(G===null?xt=i.TEXTURE0+F-1:xt=G);let It=at[xt];It===void 0&&(It={type:void 0,texture:void 0},at[xt]=It),(It.type!==V||It.texture!==yt)&&(G!==xt&&(i.activeTexture(xt),G=xt),i.bindTexture(V,yt||Y[V]),It.type=V,It.texture=yt)}function D(){const V=at[G];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(V){jt("WebGLState:",V)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(V){jt("WebGLState:",V)}}function W(){try{i.texSubImage2D(...arguments)}catch(V){jt("WebGLState:",V)}}function j(){try{i.texSubImage3D(...arguments)}catch(V){jt("WebGLState:",V)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(V){jt("WebGLState:",V)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){jt("WebGLState:",V)}}function mt(){try{i.texStorage2D(...arguments)}catch(V){jt("WebGLState:",V)}}function Ot(){try{i.texStorage3D(...arguments)}catch(V){jt("WebGLState:",V)}}function Vt(){try{i.texImage2D(...arguments)}catch(V){jt("WebGLState:",V)}}function lt(){try{i.texImage3D(...arguments)}catch(V){jt("WebGLState:",V)}}function _t(V){ht.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function Dt(V){Et.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Et.copy(V))}function Ut(V,yt){let xt=h.get(yt);xt===void 0&&(xt=new WeakMap,h.set(yt,xt));let It=xt.get(V);It===void 0&&(It=i.getUniformBlockIndex(yt,V.name),xt.set(V,It))}function Rt(V,yt){const It=h.get(yt).get(V);l.get(yt)!==It&&(i.uniformBlockBinding(yt,It,V.__bindingPointIndex),l.set(yt,It))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},G=null,at={},g={},p=new WeakMap,m=[],x=null,b=!1,_=null,v=null,E=null,d=null,c=null,S=null,u=null,R=new Kt(0,0,0),y=0,M=!1,A=null,T=null,w=null,C=null,U=null,ht.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:rt,bindFramebuffer:ut,drawBuffers:ft,useProgram:vt,setBlending:J,setMaterial:tt,setFlipSided:K,setCullFace:ot,setLineWidth:N,setPolygonOffset:St,setScissorTest:ct,activeTexture:Mt,bindTexture:st,unbindTexture:D,compressedTexImage2D:P,compressedTexImage3D:z,texImage2D:Vt,texImage3D:lt,updateUBOMapping:Ut,uniformBlockBinding:Rt,texStorage2D:mt,texStorage3D:Ot,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:pt,scissor:_t,viewport:Dt,reset:Yt}}function gy(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,f=new WeakMap;let g;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,P){return m?new OffscreenCanvas(D,P):Wo("canvas")}function b(D,P,z){let W=1;const j=st(D);if((j.width>z||j.height>z)&&(W=z/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(W*j.width),pt=Math.floor(W*j.height);g===void 0&&(g=x($,pt));const mt=P?x($,pt):g;return mt.width=$,mt.height=pt,mt.getContext("2d").drawImage(D,0,0,$,pt),Ht("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+pt+")."),mt}else return"data"in D&&Ht("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function _(D){return D.generateMipmaps}function v(D){i.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function d(D,P,z,W,j=!1){if(D!==null){if(i[D]!==void 0)return i[D];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=P;if(P===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),P===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),P===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),P===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),P===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),P===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),P===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),P===i.RGBA){const pt=j?ko:Qt.getTransfer(W);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=pt===ne?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function c(D,P){let z;return D?P===null||P===Pn||P===ms?z=i.DEPTH24_STENCIL8:P===bn?z=i.DEPTH32F_STENCIL8:P===gs&&(z=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Pn||P===ms?z=i.DEPTH_COMPONENT24:P===bn?z=i.DEPTH_COMPONENT32F:P===gs&&(z=i.DEPTH_COMPONENT16),z}function S(D,P){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ce&&D.minFilter!==De?Math.log2(Math.max(P.width,P.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?P.mipmaps.length:1}function u(D){const P=D.target;P.removeEventListener("dispose",u),y(P),P.isVideoTexture&&f.delete(P)}function R(D){const P=D.target;P.removeEventListener("dispose",R),A(P)}function y(D){const P=n.get(D);if(P.__webglInit===void 0)return;const z=D.source,W=p.get(z);if(W){const j=W[P.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(D),Object.keys(W).length===0&&p.delete(z)}n.remove(D)}function M(D){const P=n.get(D);i.deleteTexture(P.__webglTexture);const z=D.source,W=p.get(z);delete W[P.__cacheKey],o.memory.textures--}function A(D){const P=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(P.__webglFramebuffer[W]))for(let j=0;j<P.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(P.__webglFramebuffer[W][j]);else i.deleteFramebuffer(P.__webglFramebuffer[W]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[W])}else{if(Array.isArray(P.__webglFramebuffer))for(let W=0;W<P.__webglFramebuffer.length;W++)i.deleteFramebuffer(P.__webglFramebuffer[W]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let W=0;W<P.__webglColorRenderbuffer.length;W++)P.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[W]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const z=D.textures;for(let W=0,j=z.length;W<j;W++){const $=n.get(z[W]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[W])}n.remove(D)}let T=0;function w(){T=0}function C(){const D=T;return D>=r.maxTextures&&Ht("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),T+=1,D}function U(D){const P=[];return P.push(D.wrapS),P.push(D.wrapT),P.push(D.wrapR||0),P.push(D.magFilter),P.push(D.minFilter),P.push(D.anisotropy),P.push(D.internalFormat),P.push(D.format),P.push(D.type),P.push(D.generateMipmaps),P.push(D.premultiplyAlpha),P.push(D.flipY),P.push(D.unpackAlignment),P.push(D.colorSpace),P.join()}function F(D,P){const z=n.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){const W=D.image;if(W===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,D,P);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+P)}function B(D,P){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Y(z,D,P);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+P)}function O(D,P){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Y(z,D,P);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+P)}function k(D,P){const z=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){nt(z,D,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+P)}const G={[bc]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},at={[Ce]:i.NEAREST,[zp]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},et={[Gp]:i.NEVER,[qp]:i.ALWAYS,[kp]:i.LESS,[Dl]:i.LEQUAL,[Wp]:i.EQUAL,[Ll]:i.GEQUAL,[Xp]:i.GREATER,[$p]:i.NOTEQUAL};function it(D,P){if(P.type===bn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===De||P.magFilter===ha||P.magFilter===Ps||P.magFilter===Ni||P.minFilter===De||P.minFilter===ha||P.minFilter===Ps||P.minFilter===Ni)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,G[P.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,G[P.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,G[P.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,at[P.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,at[P.minFilter]),P.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,et[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Ce||P.minFilter!==Ps&&P.minFilter!==Ni||P.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ht(D,P){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,P.addEventListener("dispose",u));const W=P.source;let j=p.get(W);j===void 0&&(j={},p.set(W,j));const $=U(P);if($!==D.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[$].usedTimes++;const pt=j[D.__cacheKey];pt!==void 0&&(j[D.__cacheKey].usedTimes--,pt.usedTimes===0&&M(P)),D.__cacheKey=$,D.__webglTexture=j[$].texture}return z}function Et(D,P,z){return Math.floor(Math.floor(D/z)/P)}function Tt(D,P,z,W){const $=D.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,z,W,P.data);else{$.sort((lt,_t)=>lt.start-_t.start);let pt=0;for(let lt=1;lt<$.length;lt++){const _t=$[pt],Dt=$[lt],Ut=_t.start+_t.count,Rt=Et(Dt.start,P.width,4),Yt=Et(_t.start,P.width,4);Dt.start<=Ut+1&&Rt===Yt&&Et(Dt.start+Dt.count-1,P.width,4)===Rt?_t.count=Math.max(_t.count,Dt.start+Dt.count-_t.start):(++pt,$[pt]=Dt)}$.length=pt+1;const mt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),Vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let lt=0,_t=$.length;lt<_t;lt++){const Dt=$[lt],Ut=Math.floor(Dt.start/4),Rt=Math.ceil(Dt.count/4),Yt=Ut%P.width,V=Math.floor(Ut/P.width),yt=Rt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Yt,V,yt,xt,z,W,P.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,Vt)}}function Y(D,P,z){let W=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(W=i.TEXTURE_3D);const j=ht(D,P),$=P.source;e.bindTexture(W,D.__webglTexture,i.TEXTURE0+z);const pt=n.get($);if($.version!==pt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const mt=Qt.getPrimaries(Qt.workingColorSpace),Ot=P.colorSpace===hi?null:Qt.getPrimaries(P.colorSpace),Vt=P.colorSpace===hi||mt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let lt=b(P.image,!1,r.maxTextureSize);lt=Mt(P,lt);const _t=s.convert(P.format,P.colorSpace),Dt=s.convert(P.type);let Ut=d(P.internalFormat,_t,Dt,P.colorSpace,P.isVideoTexture);it(W,P);let Rt;const Yt=P.mipmaps,V=P.isVideoTexture!==!0,yt=pt.__version===void 0||j===!0,xt=$.dataReady,It=S(P,lt);if(P.isDepthTexture)Ut=c(P.format===Fi,P.type),yt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Ut,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,lt.width,lt.height,0,_t,Dt,null));else if(P.isDataTexture)if(Yt.length>0){V&&yt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,Yt[0].width,Yt[0].height);for(let dt=0,Q=Yt.length;dt<Q;dt++)Rt=Yt[dt],V?xt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,_t,Dt,Rt.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,_t,Dt,Rt.data);P.generateMipmaps=!1}else V?(yt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,lt.width,lt.height),xt&&Tt(P,lt,_t,Dt)):e.texImage2D(i.TEXTURE_2D,0,Ut,lt.width,lt.height,0,_t,Dt,lt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,Yt[0].width,Yt[0].height,lt.depth);for(let dt=0,Q=Yt.length;dt<Q;dt++)if(Rt=Yt[dt],P.format!==_n)if(_t!==null)if(V){if(xt)if(P.layerUpdates.size>0){const Lt=th(Rt.width,Rt.height,P.format,P.type);for(const kt of P.layerUpdates){const ae=Rt.data.subarray(kt*Lt/Rt.data.BYTES_PER_ELEMENT,(kt+1)*Lt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,kt,Rt.width,Rt.height,1,_t,ae)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,lt.depth,_t,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Rt.width,Rt.height,lt.depth,0,Rt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,lt.depth,_t,Dt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Rt.width,Rt.height,lt.depth,0,_t,Dt,Rt.data)}else{V&&yt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,Yt[0].width,Yt[0].height);for(let dt=0,Q=Yt.length;dt<Q;dt++)Rt=Yt[dt],P.format!==_n?_t!==null?V?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,_t,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,Rt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,_t,Dt,Rt.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,_t,Dt,Rt.data)}else if(P.isDataArrayTexture)if(V){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,lt.width,lt.height,lt.depth),xt)if(P.layerUpdates.size>0){const dt=th(lt.width,lt.height,P.format,P.type);for(const Q of P.layerUpdates){const Lt=lt.data.subarray(Q*dt/lt.data.BYTES_PER_ELEMENT,(Q+1)*dt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,lt.width,lt.height,1,_t,Dt,Lt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,_t,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,lt.width,lt.height,lt.depth,0,_t,Dt,lt.data);else if(P.isData3DTexture)V?(yt&&e.texStorage3D(i.TEXTURE_3D,It,Ut,lt.width,lt.height,lt.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,_t,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,lt.width,lt.height,lt.depth,0,_t,Dt,lt.data);else if(P.isFramebufferTexture){if(yt)if(V)e.texStorage2D(i.TEXTURE_2D,It,Ut,lt.width,lt.height);else{let dt=lt.width,Q=lt.height;for(let Lt=0;Lt<It;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Ut,dt,Q,0,_t,Dt,null),dt>>=1,Q>>=1}}else if(Yt.length>0){if(V&&yt){const dt=st(Yt[0]);e.texStorage2D(i.TEXTURE_2D,It,Ut,dt.width,dt.height)}for(let dt=0,Q=Yt.length;dt<Q;dt++)Rt=Yt[dt],V?xt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,_t,Dt,Rt):e.texImage2D(i.TEXTURE_2D,dt,Ut,_t,Dt,Rt);P.generateMipmaps=!1}else if(V){if(yt){const dt=st(lt);e.texStorage2D(i.TEXTURE_2D,It,Ut,dt.width,dt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,_t,Dt,lt);_(P)&&v(W),pt.__version=$.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function nt(D,P,z){if(P.image.length!==6)return;const W=ht(D,P),j=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const $=n.get(j);if(j.version!==$.__version||W===!0){e.activeTexture(i.TEXTURE0+z);const pt=Qt.getPrimaries(Qt.workingColorSpace),mt=P.colorSpace===hi?null:Qt.getPrimaries(P.colorSpace),Ot=P.colorSpace===hi||pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Vt=P.isCompressedTexture||P.image[0].isCompressedTexture,lt=P.image[0]&&P.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!Vt&&!lt?_t[Q]=b(P.image[Q],!0,r.maxCubemapSize):_t[Q]=lt?P.image[Q].image:P.image[Q],_t[Q]=Mt(P,_t[Q]);const Dt=_t[0],Ut=s.convert(P.format,P.colorSpace),Rt=s.convert(P.type),Yt=d(P.internalFormat,Ut,Rt,P.colorSpace),V=P.isVideoTexture!==!0,yt=$.__version===void 0||W===!0,xt=j.dataReady;let It=S(P,Dt);it(i.TEXTURE_CUBE_MAP,P);let dt;if(Vt){V&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Yt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){dt=_t[Q].mipmaps;for(let Lt=0;Lt<dt.length;Lt++){const kt=dt[Lt];P.format!==_n?Ut!==null?V?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,0,0,kt.width,kt.height,Ut,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,Yt,kt.width,kt.height,0,kt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,0,0,kt.width,kt.height,Ut,Rt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,Yt,kt.width,kt.height,0,Ut,Rt,kt.data)}}}else{if(dt=P.mipmaps,V&&yt){dt.length>0&&It++;const Q=st(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(lt){V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Ut,Rt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,_t[Q].width,_t[Q].height,0,Ut,Rt,_t[Q].data);for(let Lt=0;Lt<dt.length;Lt++){const ae=dt[Lt].image[Q].image;V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,0,0,ae.width,ae.height,Ut,Rt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,Yt,ae.width,ae.height,0,Ut,Rt,ae.data)}}else{V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,Rt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Ut,Rt,_t[Q]);for(let Lt=0;Lt<dt.length;Lt++){const kt=dt[Lt];V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,0,0,Ut,Rt,kt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,Yt,Ut,Rt,kt.image[Q])}}}_(P)&&v(i.TEXTURE_CUBE_MAP),$.__version=j.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function rt(D,P,z,W,j,$){const pt=s.convert(z.format,z.colorSpace),mt=s.convert(z.type),Ot=d(z.internalFormat,pt,mt,z.colorSpace),Vt=n.get(P),lt=n.get(z);if(lt.__renderTarget=P,!Vt.__hasExternalTextures){const _t=Math.max(1,P.width>>$),Dt=Math.max(1,P.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,Ot,_t,Dt,P.depth,0,pt,mt,null):e.texImage2D(j,$,Ot,_t,Dt,0,pt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),St(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,lt.__webglTexture,0,N(P)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,lt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(D,P,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),P.depthBuffer){const W=P.depthTexture,j=W&&W.isDepthTexture?W.type:null,$=c(P.stencilBuffer,j),pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(P),$,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(P),$,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,$,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,D)}else{const W=P.textures;for(let j=0;j<W.length;j++){const $=W[j],pt=s.convert($.format,$.colorSpace),mt=s.convert($.type),Ot=d($.internalFormat,pt,mt,$.colorSpace);St(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(P),Ot,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(P),Ot,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(D,P,z){const W=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(P.depthTexture);if(j.__renderTarget=P,(!j.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,P.depthTexture.addEventListener("dispose",u)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),it(i.TEXTURE_CUBE_MAP,P.depthTexture);const Vt=s.convert(P.depthTexture.format),lt=s.convert(P.depthTexture.type);let _t;P.depthTexture.format===Jn?_t=i.DEPTH_COMPONENT24:P.depthTexture.format===Fi&&(_t=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,_t,P.width,P.height,0,Vt,lt,null)}}else F(P.depthTexture,0);const $=j.__webglTexture,pt=N(P),mt=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ot=P.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===Jn)St(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ot,mt,$,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,Ot,mt,$,0);else if(P.depthTexture.format===Fi)St(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ot,mt,$,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,Ot,mt,$,0);else throw new Error("Unknown depthTexture format")}function vt(D){const P=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==D.depthTexture){const W=D.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),W){const j=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),P.__depthDisposeCallback=j}P.__boundDepthTexture=W}if(D.depthTexture&&!P.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)ft(P.__webglFramebuffer[W],D,W);else{const W=D.texture.mipmaps;W&&W.length>0?ft(P.__webglFramebuffer[0],D,0):ft(P.__webglFramebuffer,D,0)}else if(z){P.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[W]),P.__webglDepthbuffer[W]===void 0)P.__webglDepthbuffer[W]=i.createRenderbuffer(),ut(P.__webglDepthbuffer[W],D,!1);else{const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=P.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else{const W=D.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ut(P.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(D,P,z){const W=n.get(D);P!==void 0&&rt(W.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&vt(D)}function At(D){const P=D.texture,z=n.get(D),W=n.get(P);D.addEventListener("dispose",R);const j=D.textures,$=D.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=P.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let Ot=0;Ot<P.mipmaps.length;Ot++)z.__webglFramebuffer[mt][Ot]=i.createFramebuffer()}else z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<P.mipmaps.length;mt++)z.__webglFramebuffer[mt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let mt=0,Ot=j.length;mt<Ot;mt++){const Vt=n.get(j[mt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&St(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<j.length;mt++){const Ot=j[mt];z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);const Vt=s.convert(Ot.format,Ot.colorSpace),lt=s.convert(Ot.type),_t=d(Ot.internalFormat,Vt,lt,Ot.colorSpace,D.isXRRenderTarget===!0),Dt=N(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),it(i.TEXTURE_CUBE_MAP,P);for(let mt=0;mt<6;mt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ot=0;Ot<P.mipmaps.length;Ot++)rt(z.__webglFramebuffer[mt][Ot],D,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot);else rt(z.__webglFramebuffer[mt],D,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);_(P)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let mt=0,Ot=j.length;mt<Ot;mt++){const Vt=j[mt],lt=n.get(Vt);let _t=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_t=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,lt.__webglTexture),it(_t,Vt),rt(z.__webglFramebuffer,D,Vt,i.COLOR_ATTACHMENT0+mt,_t,0),_(Vt)&&v(_t)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,W.__webglTexture),it(mt,P),P.mipmaps&&P.mipmaps.length>0)for(let Ot=0;Ot<P.mipmaps.length;Ot++)rt(z.__webglFramebuffer[Ot],D,P,i.COLOR_ATTACHMENT0,mt,Ot);else rt(z.__webglFramebuffer,D,P,i.COLOR_ATTACHMENT0,mt,0);_(P)&&v(mt),e.unbindTexture()}D.depthBuffer&&vt(D)}function J(D){const P=D.textures;for(let z=0,W=P.length;z<W;z++){const j=P[z];if(_(j)){const $=E(D),pt=n.get(j).__webglTexture;e.bindTexture($,pt),v($),e.unbindTexture()}}}const tt=[],K=[];function ot(D){if(D.samples>0){if(St(D)===!1){const P=D.textures,z=D.width,W=D.height;let j=i.COLOR_BUFFER_BIT;const $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(D),mt=P.length>1;if(mt)for(let Vt=0;Vt<P.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const Ot=D.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Vt=0;Vt<P.length;Vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Vt]);const lt=n.get(P[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,j,i.NEAREST),l===!0&&(tt.length=0,K.length=0,tt.push(i.COLOR_ATTACHMENT0+Vt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tt.push($),K.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Vt=0;Vt<P.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Vt]);const lt=n.get(P[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const P=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function N(D){return Math.min(r.maxSamples,D.samples)}function St(D){const P=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ct(D){const P=o.render.frame;f.get(D)!==P&&(f.set(D,P),D.update())}function Mt(D,P){const z=D.colorSpace,W=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Lr&&z!==hi&&(Qt.getTransfer(z)===ne?(W!==_n||j!==je)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",z)),P}function st(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=w,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=Gt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function my(i,t){function e(n,r=hi){let s;const o=Qt.getTransfer(r);if(n===je)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zf)return i.BYTE;if(n===Vf)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===kf)return i.ALPHA;if(n===Wf)return i.RGB;if(n===_n)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Xf)return i.RED;if(n===Rl)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Il)return i.RGBA_INTEGER;if(n===Po||n===Io||n===Do||n===Lo)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===wc||n===Cc||n===Rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Fc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pc||n===Ic)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return s.COMPRESSED_R11_EAC;if(n===Uc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nc)return s.COMPRESSED_RG11_EAC;if(n===Fc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oc||n===Bc||n===zc||n===Vc||n===Hc||n===Gc||n===kc||n===Wc||n===Xc||n===$c||n===qc||n===Yc||n===Zc||n===Jc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===jc||n===Qc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Kc)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new td(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:_y,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yy extends Fr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,h=null,f=null,g=null,p=null,m=null,x=null;const b=typeof XRWebGLBinding<"u",_=new vy,v={},E=e.getContextAttributes();let d=null,c=null;const S=[],u=[],R=new gt;let y=null;const M=new gn;M.viewport=new oe;const A=new gn;A.viewport=new oe;const T=[M,A],w=new Rm;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=S[Y];return nt===void 0&&(nt=new _a,S[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=S[Y];return nt===void 0&&(nt=new _a,S[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=S[Y];return nt===void 0&&(nt=new _a,S[Y]=nt),nt.getHandSpace()};function F(Y){const nt=u.indexOf(Y.inputSource);if(nt===-1)return;const rt=S[nt];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,h||o),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let Y=0;Y<S.length;Y++){const nt=u[Y];nt!==null&&(u[Y]=null,S[Y].disconnect(nt))}C=null,U=null,_.reset();for(const Y in v)delete v[Y];t.setRenderTarget(d),m=null,p=null,g=null,r=null,c=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ut=null,ft=null;E.depth&&(ft=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?Fi:Jn,ut=E.stencil?ms:Pn);const vt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};g=this.getBinding(),p=g.createProjectionLayer(vt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),c=new Cn(p.textureWidth,p.textureHeight,{format:_n,type:je,depthTexture:new vs(p.textureWidth,p.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Cn(m.framebufferWidth,m.framebufferHeight,{format:_n,type:je,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(Y){for(let nt=0;nt<Y.removed.length;nt++){const rt=Y.removed[nt],ut=u.indexOf(rt);ut>=0&&(u[ut]=null,S[ut].disconnect(rt))}for(let nt=0;nt<Y.added.length;nt++){const rt=Y.added[nt];let ut=u.indexOf(rt);if(ut===-1){for(let vt=0;vt<S.length;vt++)if(vt>=u.length){u.push(rt),ut=vt;break}else if(u[vt]===null){u[vt]=rt,ut=vt;break}if(ut===-1)break}const ft=S[ut];ft&&ft.connect(rt)}}const k=new L,G=new L;function at(Y,nt,rt){k.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(rt.matrixWorld);const ut=k.distanceTo(G),ft=nt.projectionMatrix.elements,vt=rt.projectionMatrix.elements,Gt=ft[14]/(ft[10]-1),At=ft[14]/(ft[10]+1),J=(ft[9]+1)/ft[5],tt=(ft[9]-1)/ft[5],K=(ft[8]-1)/ft[0],ot=(vt[8]+1)/vt[0],N=Gt*K,St=Gt*ot,ct=ut/(-K+ot),Mt=ct*-K;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ft[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const st=Gt+ct,D=At+ct,P=N-Mt,z=St+(ut-Mt),W=J*At/D*st,j=tt*At/D*st;Y.projectionMatrix.makePerspective(P,z,W,j,st,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let nt=Y.near,rt=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),w.near=A.near=M.near=nt,w.far=A.far=M.far=rt,(C!==w.near||U!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,U=w.far),w.layers.mask=Y.layers.mask|6,M.layers.mask=w.layers.mask&-5,A.layers.mask=w.layers.mask&-3;const ut=Y.parent,ft=w.cameras;et(w,ut);for(let vt=0;vt<ft.length;vt++)et(ft[vt],ut);ft.length===2?at(w,M,A):w.projectionMatrix.copy(M.projectionMatrix),it(Y,w,ut)};function it(Y,nt,rt){rt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)},this.getCameraTexture=function(Y){return v[Y]};let ht=null;function Et(Y,nt){if(f=nt.getViewerPose(h||o),x=nt,f!==null){const rt=f.views;m!==null&&(t.setRenderTargetFramebuffer(c,m.framebuffer),t.setRenderTarget(c));let ut=!1;rt.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let At=0;At<rt.length;At++){const J=rt[At];let tt=null;if(m!==null)tt=m.getViewport(J);else{const ot=g.getViewSubImage(p,J);tt=ot.viewport,At===0&&(t.setRenderTargetTextures(c,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(c))}let K=T[At];K===void 0&&(K=new gn,K.layers.enable(At),K.viewport=new oe,T[At]=K),K.matrix.fromArray(J.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(J.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(tt.x,tt.y,tt.width,tt.height),At===0&&(w.matrix.copy(K.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(K)}const ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){g=n.getBinding();const At=g.getDepthInformation(rt[0]);At&&At.isValid&&At.texture&&_.init(At,r.renderState)}if(ft&&ft.includes("camera-access")&&b){t.state.unbindTexture(),g=n.getBinding();for(let At=0;At<rt.length;At++){const J=rt[At].camera;if(J){let tt=v[J];tt||(tt=new td,v[J]=tt);const K=g.getCameraImage(J);tt.sourceTexture=K}}}}for(let rt=0;rt<S.length;rt++){const ut=u[rt],ft=S[rt];ut!==null&&ft!==void 0&&ft.update(ut,nt,h||o)}ht&&ht(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),x=null}const Tt=new dd;Tt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const bi=new xn,Sy=new Jt;function My(i,t){function e(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,ud(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,E,d,c){v.isMeshBasicMaterial?s(_,v):v.isMeshLambertMaterial?(s(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(s(_,v),g(_,v)):v.isMeshPhongMaterial?(s(_,v),f(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(s(_,v),p(_,v),v.isMeshPhysicalMaterial&&m(_,v,c)):v.isMeshMatcapMaterial?(s(_,v),x(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),b(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(o(_,v),v.isLineDashedMaterial&&a(_,v)):v.isPointsMaterial?l(_,v,E,d):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,e(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,e(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===ze&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,e(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===ze&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,e(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,e(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const E=t.get(v),d=E.envMap,c=E.envMapRotation;d&&(_.envMap.value=d,bi.copy(c),bi.x*=-1,bi.y*=-1,bi.z*=-1,d.isCubeTexture&&d.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),_.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(bi)),_.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,_.aoMapTransform))}function o(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,e(v.map,_.mapTransform))}function a(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function l(_,v,E,d){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*E,_.scale.value=d*.5,v.map&&(_.map.value=v.map,e(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,e(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function f(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function g(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function p(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function m(_,v,E){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ze&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,v){v.matcap&&(_.matcap.value=v.matcap)}function b(_,v){const E=t.get(v).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ey(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,d){const c=d.program;n.uniformBlockBinding(E,c)}function h(E,d){let c=r[E.id];c===void 0&&(x(E),c=f(E),r[E.id]=c,E.addEventListener("dispose",_));const S=d.program;n.updateUBOMapping(E,S);const u=t.render.frame;s[E.id]!==u&&(p(E),s[E.id]=u)}function f(E){const d=g();E.__bindingPointIndex=d;const c=i.createBuffer(),S=E.__size,u=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,S,u),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,d,c),c}function g(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const d=r[E.id],c=E.uniforms,S=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,d);for(let u=0,R=c.length;u<R;u++){const y=Array.isArray(c[u])?c[u]:[c[u]];for(let M=0,A=y.length;M<A;M++){const T=y[M];if(m(T,u,M,S)===!0){const w=T.__offset,C=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let F=0;F<C.length;F++){const B=C[F],O=b(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,w+U,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,d,c,S){const u=E.value,R=d+"_"+c;if(S[R]===void 0)return typeof u=="number"||typeof u=="boolean"?S[R]=u:S[R]=u.clone(),!0;{const y=S[R];if(typeof u=="number"||typeof u=="boolean"){if(y!==u)return S[R]=u,!0}else if(y.equals(u)===!1)return y.copy(u),!0}return!1}function x(E){const d=E.uniforms;let c=0;const S=16;for(let R=0,y=d.length;R<y;R++){const M=Array.isArray(d[R])?d[R]:[d[R]];for(let A=0,T=M.length;A<T;A++){const w=M[A],C=Array.isArray(w.value)?w.value:[w.value];for(let U=0,F=C.length;U<F;U++){const B=C[U],O=b(B),k=c%S,G=k%O.boundary,at=k+G;c+=G,at!==0&&S-at<O.storage&&(c+=S-at),w.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=c,c+=O.storage}}}const u=c%S;return u>0&&(c+=S-u),E.__size=c,E.__cache={},this}function b(E){const d={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(d.boundary=4,d.storage=4):E.isVector2?(d.boundary=8,d.storage=8):E.isVector3||E.isColor?(d.boundary=16,d.storage=12):E.isVector4?(d.boundary=16,d.storage=16):E.isMatrix3?(d.boundary=48,d.storage=48):E.isMatrix4?(d.boundary=64,d.storage=64):E.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",E),d}function _(E){const d=E.target;d.removeEventListener("dispose",_);const c=o.indexOf(d.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}function v(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:h,dispose:v}}const by=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function Ty(){return Sn===null&&(Sn=new Ug(by,16,16,Dr,Zn),Sn.name="DFG_LUT",Sn.minFilter=De,Sn.magFilter=De,Sn.wrapS=Wn,Sn.wrapT=Wn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class Ay{constructor(t={}){const{canvas:e=Zp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:m=je}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const b=m,_=new Set([Il,Pl,Rl]),v=new Set([je,Pn,gs,ms,wl,Cl]),E=new Uint32Array(4),d=new Int32Array(4);let c=null,S=null;const u=[],R=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=rn;let T=0,w=0,C=null,U=-1,F=null;const B=new oe,O=new oe;let k=null;const G=new Kt(0);let at=0,et=e.width,it=e.height,ht=1,Et=null,Tt=null;const Y=new oe(0,0,et,it),nt=new oe(0,0,et,it);let rt=!1;const ut=new Bl;let ft=!1,vt=!1;const Gt=new Jt,At=new L,J=new oe,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function ot(){return C===null?ht:1}let N=n;function St(I,H){return e.getContext(I,H)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ts}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",ae,!1),N===null){const H="webgl2";if(N=St(H,I),N===null)throw St(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw jt("WebGLRenderer: "+I.message),I}let ct,Mt,st,D,P,z,W,j,$,pt,mt,Ot,Vt,lt,_t,Dt,Ut,Rt,Yt,V,yt,xt,It;function dt(){ct=new Ax(N),ct.init(),yt=new my(N,ct),Mt=new xx(N,ct,t,yt),st=new py(N,ct),Mt.reversedDepthBuffer&&p&&st.buffers.depth.setReversed(!0),D=new Rx(N),P=new ty,z=new gy(N,ct,st,P,Mt,yt,D),W=new Tx(M),j=new Um(N),xt=new mx(N,j),$=new wx(N,j,D,xt),pt=new Ix(N,$,j,xt,D),Rt=new Px(N,Mt,z),_t=new vx(P),mt=new Qv(M,W,ct,Mt,xt,_t),Ot=new My(M,P),Vt=new ny,lt=new cy(ct),Ut=new gx(M,W,st,pt,x,l),Dt=new dy(M,pt,Mt),It=new Ey(N,D,Mt,st),Yt=new _x(N,ct,D),V=new Cx(N,ct,D),D.programs=mt.programs,M.capabilities=Mt,M.extensions=ct,M.properties=P,M.renderLists=Vt,M.shadowMap=Dt,M.state=st,M.info=D}dt(),b!==je&&(y=new Lx(b,e.width,e.height,r,s));const Q=new yy(M,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=ct.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ct.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(I){I!==void 0&&(ht=I,this.setSize(et,it,!1))},this.getSize=function(I){return I.set(et,it)},this.setSize=function(I,H,Z=!0){if(Q.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}et=I,it=H,e.width=Math.floor(I*ht),e.height=Math.floor(H*ht),Z===!0&&(e.style.width=I+"px",e.style.height=H+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(et*ht,it*ht).floor()},this.setDrawingBufferSize=function(I,H,Z){et=I,it=H,ht=Z,e.width=Math.floor(I*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,I,H)},this.setEffects=function(I){if(b===je){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let H=0;H<I.length;H++)if(I[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(B)},this.getViewport=function(I){return I.copy(Y)},this.setViewport=function(I,H,Z,q){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,H,Z,q),st.viewport(B.copy(Y).multiplyScalar(ht).round())},this.getScissor=function(I){return I.copy(nt)},this.setScissor=function(I,H,Z,q){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,H,Z,q),st.scissor(O.copy(nt).multiplyScalar(ht).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){st.setScissorTest(rt=I)},this.setOpaqueSort=function(I){Et=I},this.setTransparentSort=function(I){Tt=I},this.getClearColor=function(I){return I.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(I=!0,H=!0,Z=!0){let q=0;if(I){let X=!1;if(C!==null){const wt=C.texture.format;X=_.has(wt)}if(X){const wt=C.texture.type,Pt=v.has(wt),Ct=Ut.getClearColor(),Nt=Ut.getClearAlpha(),Bt=Ct.r,Xt=Ct.g,Zt=Ct.b;Pt?(E[0]=Bt,E[1]=Xt,E[2]=Zt,E[3]=Nt,N.clearBufferuiv(N.COLOR,0,E)):(d[0]=Bt,d[1]=Xt,d[2]=Zt,d[3]=Nt,N.clearBufferiv(N.COLOR,0,d))}else q|=N.COLOR_BUFFER_BIT}H&&(q|=N.DEPTH_BUFFER_BIT),Z&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),Ut.dispose(),Vt.dispose(),lt.dispose(),P.dispose(),W.dispose(),pt.dispose(),xt.dispose(),It.dispose(),mt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",jl),Q.removeEventListener("sessionend",Ql),mi.stop()};function Lt(I){I.preventDefault(),Tu("WebGLRenderer: Context Lost."),A=!0}function kt(){Tu("WebGLRenderer: Context Restored."),A=!1;const I=D.autoReset,H=Dt.enabled,Z=Dt.autoUpdate,q=Dt.needsUpdate,X=Dt.type;dt(),D.autoReset=I,Dt.enabled=H,Dt.autoUpdate=Z,Dt.needsUpdate=q,Dt.type=X}function ae(I){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ee(I){const H=I.target;H.removeEventListener("dispose",ee),Ln(H)}function Ln(I){Un(I),P.remove(I)}function Un(I){const H=P.get(I).programs;H!==void 0&&(H.forEach(function(Z){mt.releaseProgram(Z)}),I.isShaderMaterial&&mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,Z,q,X,wt){H===null&&(H=tt);const Pt=X.isMesh&&X.matrixWorld.determinant()<0,Ct=Od(I,H,Z,q,X);st.setMaterial(q,Pt);let Nt=Z.index,Bt=1;if(q.wireframe===!0){if(Nt=$.getWireframeAttribute(Z),Nt===void 0)return;Bt=2}const Xt=Z.drawRange,Zt=Z.attributes.position;let zt=Xt.start*Bt,ie=(Xt.start+Xt.count)*Bt;wt!==null&&(zt=Math.max(zt,wt.start*Bt),ie=Math.min(ie,(wt.start+wt.count)*Bt)),Nt!==null?(zt=Math.max(zt,0),ie=Math.min(ie,Nt.count)):Zt!=null&&(zt=Math.max(zt,0),ie=Math.min(ie,Zt.count));const de=ie-zt;if(de<0||de===1/0)return;xt.setup(X,q,Ct,Z,Nt);let he,re=Yt;if(Nt!==null&&(he=j.get(Nt),re=V,re.setIndex(he)),X.isMesh)q.wireframe===!0?(st.setLineWidth(q.wireframeLinewidth*ot()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(X.isLine){let Re=q.linewidth;Re===void 0&&(Re=1),st.setLineWidth(Re*ot()),X.isLineSegments?re.setMode(N.LINES):X.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else X.isPoints?re.setMode(N.POINTS):X.isSprite&&re.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Xo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))re.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Re=X._multiDrawStarts,Ft=X._multiDrawCounts,Ye=X._multiDrawCount,te=Nt?j.get(Nt).bytesPerElement:1,an=P.get(q).currentProgram.getUniforms();for(let vn=0;vn<Ye;vn++)an.setValue(N,"_gl_DrawID",vn),re.render(Re[vn]/te,Ft[vn])}else if(X.isInstancedMesh)re.renderInstances(zt,de,X.count);else if(Z.isInstancedBufferGeometry){const Re=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ft=Math.min(Z.instanceCount,Re);re.renderInstances(zt,de,Ft)}else re.render(zt,de)};function Kl(I,H,Z){I.transparent===!0&&I.side===mn&&I.forceSinglePass===!1?(I.side=ze,I.needsUpdate=!0,Rs(I,H,Z),I.side=Rn,I.needsUpdate=!0,Rs(I,H,Z),I.side=mn):Rs(I,H,Z)}this.compile=function(I,H,Z=null){Z===null&&(Z=I),S=lt.get(Z),S.init(H),R.push(S),Z.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),I!==Z&&I.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights();const q=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const wt=X.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const Ct=wt[Pt];Kl(Ct,Z,X),q.add(Ct)}else Kl(wt,Z,X),q.add(wt)}),S=R.pop(),q},this.compileAsync=function(I,H,Z=null){const q=this.compile(I,H,Z);return new Promise(X=>{function wt(){if(q.forEach(function(Pt){P.get(Pt).currentProgram.isReady()&&q.delete(Pt)}),q.size===0){X(I);return}setTimeout(wt,10)}ct.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let oa=null;function Fd(I){oa&&oa(I)}function jl(){mi.stop()}function Ql(){mi.start()}const mi=new dd;mi.setAnimationLoop(Fd),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(I){oa=I,Q.setAnimationLoop(I),I===null?mi.stop():mi.start()},Q.addEventListener("sessionstart",jl),Q.addEventListener("sessionend",Ql),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const Z=Q.enabled===!0&&Q.isPresenting===!0,q=y!==null&&(C===null||Z)&&y.begin(M,C);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,H,C),S=lt.get(I,R.length),S.init(H),R.push(S),Gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ut.setFromProjectionMatrix(Gt,Tn,H.reversedDepth),vt=this.localClippingEnabled,ft=_t.init(this.clippingPlanes,vt),c=Vt.get(I,u.length),c.init(),u.push(c),Q.enabled===!0&&Q.isPresenting===!0){const Pt=M.xr.getDepthSensingMesh();Pt!==null&&aa(Pt,H,-1/0,M.sortObjects)}aa(I,H,0,M.sortObjects),c.finish(),M.sortObjects===!0&&c.sort(Et,Tt),K=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,K&&Ut.addToRenderList(c,I),this.info.render.frame++,ft===!0&&_t.beginShadows();const X=S.state.shadowsArray;if(Dt.render(X,I,H),ft===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&y.hasRenderPass())===!1){const Pt=c.opaque,Ct=c.transmissive;if(S.setupLights(),H.isArrayCamera){const Nt=H.cameras;if(Ct.length>0)for(let Bt=0,Xt=Nt.length;Bt<Xt;Bt++){const Zt=Nt[Bt];eu(Pt,Ct,I,Zt)}K&&Ut.render(I);for(let Bt=0,Xt=Nt.length;Bt<Xt;Bt++){const Zt=Nt[Bt];tu(c,I,Zt,Zt.viewport)}}else Ct.length>0&&eu(Pt,Ct,I,H),K&&Ut.render(I),tu(c,I,H)}C!==null&&w===0&&(z.updateMultisampleRenderTarget(C),z.updateRenderTargetMipmap(C)),q&&y.end(M),I.isScene===!0&&I.onAfterRender(M,I,H),xt.resetDefaultState(),U=-1,F=null,R.pop(),R.length>0?(S=R[R.length-1],ft===!0&&_t.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,u.pop(),u.length>0?c=u[u.length-1]:c=null};function aa(I,H,Z,q){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ut.intersectsSprite(I)){q&&J.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Gt);const Pt=pt.update(I),Ct=I.material;Ct.visible&&c.push(I,Pt,Ct,Z,J.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ut.intersectsObject(I))){const Pt=pt.update(I),Ct=I.material;if(q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),J.copy(I.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),J.copy(Pt.boundingSphere.center)),J.applyMatrix4(I.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ct)){const Nt=Pt.groups;for(let Bt=0,Xt=Nt.length;Bt<Xt;Bt++){const Zt=Nt[Bt],zt=Ct[Zt.materialIndex];zt&&zt.visible&&c.push(I,Pt,zt,Z,J.z,Zt)}}else Ct.visible&&c.push(I,Pt,Ct,Z,J.z,null)}}const wt=I.children;for(let Pt=0,Ct=wt.length;Pt<Ct;Pt++)aa(wt[Pt],H,Z,q)}function tu(I,H,Z,q){const{opaque:X,transmissive:wt,transparent:Pt}=I;S.setupLightsView(Z),ft===!0&&_t.setGlobalState(M.clippingPlanes,Z),q&&st.viewport(B.copy(q)),X.length>0&&Cs(X,H,Z),wt.length>0&&Cs(wt,H,Z),Pt.length>0&&Cs(Pt,H,Z),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function eu(I,H,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const zt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Cn(1,1,{generateMipmaps:!0,type:zt?Zn:je,minFilter:Ni,samples:Mt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const wt=S.state.transmissionRenderTarget[q.id],Pt=q.viewport||B;wt.setSize(Pt.z*M.transmissionResolutionScale,Pt.w*M.transmissionResolutionScale);const Ct=M.getRenderTarget(),Nt=M.getActiveCubeFace(),Bt=M.getActiveMipmapLevel();M.setRenderTarget(wt),M.getClearColor(G),at=M.getClearAlpha(),at<1&&M.setClearColor(16777215,.5),M.clear(),K&&Ut.render(Z);const Xt=M.toneMapping;M.toneMapping=wn;const Zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ft===!0&&_t.setGlobalState(M.clippingPlanes,q),Cs(I,Z,q),z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ie=0,de=H.length;ie<de;ie++){const he=H[ie],{object:re,geometry:Re,material:Ft,group:Ye}=he;if(Ft.side===mn&&re.layers.test(q.layers)){const te=Ft.side;Ft.side=ze,Ft.needsUpdate=!0,nu(re,Z,q,Re,Ft,Ye),Ft.side=te,Ft.needsUpdate=!0,zt=!0}}zt===!0&&(z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt))}M.setRenderTarget(Ct,Nt,Bt),M.setClearColor(G,at),Zt!==void 0&&(q.viewport=Zt),M.toneMapping=Xt}function Cs(I,H,Z){const q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,wt=I.length;X<wt;X++){const Pt=I[X],{object:Ct,geometry:Nt,group:Bt}=Pt;let Xt=Pt.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),Ct.layers.test(Z.layers)&&nu(Ct,H,Z,Nt,Xt,Bt)}}function nu(I,H,Z,q,X,wt){I.onBeforeRender(M,H,Z,q,X,wt),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(M,H,Z,q,I,wt),X.transparent===!0&&X.side===mn&&X.forceSinglePass===!1?(X.side=ze,X.needsUpdate=!0,M.renderBufferDirect(Z,H,q,X,I,wt),X.side=Rn,X.needsUpdate=!0,M.renderBufferDirect(Z,H,q,X,I,wt),X.side=mn):M.renderBufferDirect(Z,H,q,X,I,wt),I.onAfterRender(M,H,Z,q,X,wt)}function Rs(I,H,Z){H.isScene!==!0&&(H=tt);const q=P.get(I),X=S.state.lights,wt=S.state.shadowsArray,Pt=X.state.version,Ct=mt.getParameters(I,X.state,wt,H,Z),Nt=mt.getProgramCacheKey(Ct);let Bt=q.programs;q.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const Xt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;q.envMap=W.get(I.envMap||q.environment,Xt),q.envMapRotation=q.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,Bt===void 0&&(I.addEventListener("dispose",ee),Bt=new Map,q.programs=Bt);let Zt=Bt.get(Nt);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===Pt)return ru(I,Ct),Zt}else Ct.uniforms=mt.getUniforms(I),I.onBeforeCompile(Ct,M),Zt=mt.acquireProgram(Ct,Nt),Bt.set(Nt,Zt),q.uniforms=Ct.uniforms;const zt=q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(zt.clippingPlanes=_t.uniform),ru(I,Ct),q.needsLights=zd(I),q.lightsStateVersion=Pt,q.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function iu(I){if(I.uniformsList===null){const H=I.currentProgram.getUniforms();I.uniformsList=Uo.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function ru(I,H){const Z=P.get(I);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Od(I,H,Z,q,X){H.isScene!==!0&&(H=tt),z.resetTextureUnits();const wt=H.fog,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Ct=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Lr,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Bt=W.get(q.envMap||Pt,Nt),Xt=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Zt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!Z.morphAttributes.position,ie=!!Z.morphAttributes.normal,de=!!Z.morphAttributes.color;let he=wn;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=M.toneMapping);const re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=re!==void 0?re.length:0,Ft=P.get(q),Ye=S.state.lights;if(ft===!0&&(vt===!0||I!==F)){const Se=I===F&&q.id===U;_t.setState(q,I,Se)}let te=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ye.state.version||Ft.outputColorSpace!==Ct||X.isBatchedMesh&&Ft.batching===!1||!X.isBatchedMesh&&Ft.batching===!0||X.isBatchedMesh&&Ft.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ft.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ft.instancing===!1||!X.isInstancedMesh&&Ft.instancing===!0||X.isSkinnedMesh&&Ft.skinning===!1||!X.isSkinnedMesh&&Ft.skinning===!0||X.isInstancedMesh&&Ft.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ft.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ft.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ft.instancingMorph===!1&&X.morphTexture!==null||Ft.envMap!==Bt||q.fog===!0&&Ft.fog!==wt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==_t.numPlanes||Ft.numIntersection!==_t.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==Zt||Ft.morphTargets!==zt||Ft.morphNormals!==ie||Ft.morphColors!==de||Ft.toneMapping!==he||Ft.morphTargetsCount!==Re)&&(te=!0):(te=!0,Ft.__version=q.version);let an=Ft.currentProgram;te===!0&&(an=Rs(q,H,X));let vn=!1,_i=!1,Wi=!1;const se=an.getUniforms(),we=Ft.uniforms;if(st.useProgram(an.program)&&(vn=!0,_i=!0,Wi=!0),q.id!==U&&(U=q.id,_i=!0),vn||F!==I){st.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),se.setValue(N,"projectionMatrix",I.projectionMatrix),se.setValue(N,"viewMatrix",I.matrixWorldInverse);const Qn=se.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,At.setFromMatrixPosition(I.matrixWorld)),Mt.logarithmicDepthBuffer&&se.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&se.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),F!==I&&(F=I,_i=!0,Wi=!0)}if(Ft.needsLights&&(Ye.state.directionalShadowMap.length>0&&se.setValue(N,"directionalShadowMap",Ye.state.directionalShadowMap,z),Ye.state.spotShadowMap.length>0&&se.setValue(N,"spotShadowMap",Ye.state.spotShadowMap,z),Ye.state.pointShadowMap.length>0&&se.setValue(N,"pointShadowMap",Ye.state.pointShadowMap,z)),X.isSkinnedMesh){se.setOptional(N,X,"bindMatrix"),se.setOptional(N,X,"bindMatrixInverse");const Se=X.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),se.setValue(N,"boneTexture",Se.boneTexture,z))}X.isBatchedMesh&&(se.setOptional(N,X,"batchingTexture"),se.setValue(N,"batchingTexture",X._matricesTexture,z),se.setOptional(N,X,"batchingIdTexture"),se.setValue(N,"batchingIdTexture",X._indirectTexture,z),se.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&se.setValue(N,"batchingColorTexture",X._colorsTexture,z));const jn=Z.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Rt.update(X,Z,an),(_i||Ft.receiveShadow!==X.receiveShadow)&&(Ft.receiveShadow=X.receiveShadow,se.setValue(N,"receiveShadow",X.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(we.envMapIntensity.value=H.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Ty()),_i&&(se.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&Bd(we,Wi),wt&&q.fog===!0&&Ot.refreshFogUniforms(we,wt),Ot.refreshMaterialUniforms(we,q,ht,it,S.state.transmissionRenderTarget[I.id]),Uo.upload(N,iu(Ft),we,z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Uo.upload(N,iu(Ft),we,z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&se.setValue(N,"center",X.center),se.setValue(N,"modelViewMatrix",X.modelViewMatrix),se.setValue(N,"normalMatrix",X.normalMatrix),se.setValue(N,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Se=q.uniformsGroups;for(let Qn=0,Xi=Se.length;Qn<Xi;Qn++){const su=Se[Qn];It.update(su,an),It.bind(su,an)}}return an}function Bd(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function zd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,H,Z){const q=P.get(I);q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),P.get(I.texture).__webglTexture=H,P.get(I.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,H){const Z=P.get(I);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Vd=N.createFramebuffer();this.setRenderTarget=function(I,H=0,Z=0){C=I,T=H,w=Z;let q=null,X=!1,wt=!1;if(I){const Ct=P.get(I);if(Ct.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(N.FRAMEBUFFER,Ct.__webglFramebuffer),B.copy(I.viewport),O.copy(I.scissor),k=I.scissorTest,st.viewport(B),st.scissor(O),st.setScissorTest(k),U=-1;return}else if(Ct.__webglFramebuffer===void 0)z.setupRenderTarget(I);else if(Ct.__hasExternalTextures)z.rebindTextures(I,P.get(I.texture).__webglTexture,P.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Xt=I.depthTexture;if(Ct.__boundDepthTexture!==Xt){if(Xt!==null&&P.has(Xt)&&(I.width!==Xt.image.width||I.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(I)}}const Nt=I.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(wt=!0);const Bt=P.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?q=Bt[H][Z]:q=Bt[H],X=!0):I.samples>0&&z.useMultisampledRTT(I)===!1?q=P.get(I).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[Z]:q=Bt,B.copy(I.viewport),O.copy(I.scissor),k=I.scissorTest}else B.copy(Y).multiplyScalar(ht).floor(),O.copy(nt).multiplyScalar(ht).floor(),k=rt;if(Z!==0&&(q=Vd),st.bindFramebuffer(N.FRAMEBUFFER,q)&&st.drawBuffers(I,q),st.viewport(B),st.scissor(O),st.setScissorTest(k),X){const Ct=P.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ct.__webglTexture,Z)}else if(wt){const Ct=H;for(let Nt=0;Nt<I.textures.length;Nt++){const Bt=P.get(I.textures[Nt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,Z,Ct)}}else if(I!==null&&Z!==0){const Ct=P.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,Z)}U=-1},this.readRenderTargetPixels=function(I,H,Z,q,X,wt,Pt,Ct=0){if(!(I&&I.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=P.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){st.bindFramebuffer(N.FRAMEBUFFER,Nt);try{const Bt=I.textures[Ct],Xt=Bt.format,Zt=Bt.type;if(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct),!Mt.textureFormatReadable(Xt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Zt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-q&&Z>=0&&Z<=I.height-X&&N.readPixels(H,Z,q,X,yt.convert(Xt),yt.convert(Zt),wt)}finally{const Bt=C!==null?P.get(C).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(I,H,Z,q,X,wt,Pt,Ct=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=P.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt)if(H>=0&&H<=I.width-q&&Z>=0&&Z<=I.height-X){st.bindFramebuffer(N.FRAMEBUFFER,Nt);const Bt=I.textures[Ct],Xt=Bt.format,Zt=Bt.type;if(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct),!Mt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.bufferData(N.PIXEL_PACK_BUFFER,wt.byteLength,N.STREAM_READ),N.readPixels(H,Z,q,X,yt.convert(Xt),yt.convert(Zt),0);const ie=C!==null?P.get(C).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,ie);const de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Jp(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,wt),N.deleteBuffer(zt),N.deleteSync(de),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,H=null,Z=0){const q=Math.pow(2,-Z),X=Math.floor(I.image.width*q),wt=Math.floor(I.image.height*q),Pt=H!==null?H.x:0,Ct=H!==null?H.y:0;z.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Pt,Ct,X,wt),st.unbindTexture()};const Hd=N.createFramebuffer(),Gd=N.createFramebuffer();this.copyTextureToTexture=function(I,H,Z=null,q=null,X=0,wt=0){let Pt,Ct,Nt,Bt,Xt,Zt,zt,ie,de;const he=I.isCompressedTexture?I.mipmaps[wt]:I.image;if(Z!==null)Pt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,Xt=Z.min.y,Zt=Z.isBox3?Z.min.z:0;else{const we=Math.pow(2,-X);Pt=Math.floor(he.width*we),Ct=Math.floor(he.height*we),I.isDataArrayTexture?Nt=he.depth:I.isData3DTexture?Nt=Math.floor(he.depth*we):Nt=1,Bt=0,Xt=0,Zt=0}q!==null?(zt=q.x,ie=q.y,de=q.z):(zt=0,ie=0,de=0);const re=yt.convert(H.format),Re=yt.convert(H.type);let Ft;H.isData3DTexture?(z.setTexture3D(H,0),Ft=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(z.setTexture2DArray(H,0),Ft=N.TEXTURE_2D_ARRAY):(z.setTexture2D(H,0),Ft=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Ye=N.getParameter(N.UNPACK_ROW_LENGTH),te=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),vn=N.getParameter(N.UNPACK_SKIP_ROWS),_i=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt);const Wi=I.isDataArrayTexture||I.isData3DTexture,se=H.isDataArrayTexture||H.isData3DTexture;if(I.isDepthTexture){const we=P.get(I),jn=P.get(H),Se=P.get(we.__renderTarget),Qn=P.get(jn.__renderTarget);st.bindFramebuffer(N.READ_FRAMEBUFFER,Se.__webglFramebuffer),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Xi=0;Xi<Nt;Xi++)Wi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(I).__webglTexture,X,Zt+Xi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(H).__webglTexture,wt,de+Xi)),N.blitFramebuffer(Bt,Xt,Pt,Ct,zt,ie,Pt,Ct,N.DEPTH_BUFFER_BIT,N.NEAREST);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||I.isRenderTargetTexture||P.has(I)){const we=P.get(I),jn=P.get(H);st.bindFramebuffer(N.READ_FRAMEBUFFER,Hd),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gd);for(let Se=0;Se<Nt;Se++)Wi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,X,Zt+Se):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,X),se?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jn.__webglTexture,wt,de+Se):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jn.__webglTexture,wt),X!==0?N.blitFramebuffer(Bt,Xt,Pt,Ct,zt,ie,Pt,Ct,N.COLOR_BUFFER_BIT,N.NEAREST):se?N.copyTexSubImage3D(Ft,wt,zt,ie,de+Se,Bt,Xt,Pt,Ct):N.copyTexSubImage2D(Ft,wt,zt,ie,Bt,Xt,Pt,Ct);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else se?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Ft,wt,zt,ie,de,Pt,Ct,Nt,re,Re,he.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ft,wt,zt,ie,de,Pt,Ct,Nt,re,he.data):N.texSubImage3D(Ft,wt,zt,ie,de,Pt,Ct,Nt,re,Re,he):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,wt,zt,ie,Pt,Ct,re,Re,he.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,wt,zt,ie,he.width,he.height,re,he.data):N.texSubImage2D(N.TEXTURE_2D,wt,zt,ie,Pt,Ct,re,Re,he);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ye),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,te),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,vn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_i),wt===0&&H.generateMipmaps&&N.generateMipmap(Ft),st.unbindTexture()},this.initRenderTarget=function(I){P.get(I).__webglFramebuffer===void 0&&z.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?z.setTextureCube(I,0):I.isData3DTexture?z.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?z.setTexture2DArray(I,0):z.setTexture2D(I,0),st.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,st.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function bh(i){for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}function wy(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new on;let h=0;for(let f=0;f<i.length;++f){const g=i[f];let p=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in g.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(g.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in g.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(g.morphAttributes[m])}if(t){let m;if(e)m=g.index.count;else if(g.attributes.position!==void 0)m=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,m,f),h+=m}}if(e){let f=0;const g=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let x=0;x<m.count;++x)g.push(m.getX(x)+f);f+=i[p].attributes.position.count}l.setIndex(g)}for(const f in s){const g=Th(s[f]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,g)}for(const f in o){const g=o[f][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let p=0;p<g;++p){const m=[];for(let b=0;b<o[f].length;++b)m.push(o[f][b][p]);const x=Th(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(x)}}return l}function Th(i){let t,e,n,r=-1,s=0;for(let h=0;h<i.length;++h){const f=i[h];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*e}const o=new t(s),a=new He(o,e,n);let l=0;for(let h=0;h<i.length;++h){const f=i[h];if(f.isInterleavedBufferAttribute){const g=l/e;for(let p=0,m=f.count;p<m;p++)for(let x=0;x<e;x++){const b=f.getComponent(p,x);a.setComponent(p+g,x,b)}}else o.set(f.array,l);l+=f.count*e}return r!==void 0&&(a.gpuType=r),a}const ro=120,cr=0,No=-150,Ii=-30,Cy=[{x:cr-ro,y:0,z:Ii+No},{x:cr-ro,y:0,z:Ii},{x:cr+0,y:0,z:Ii+No},{x:cr+0,y:0,z:Ii},{x:cr+ro,y:0,z:Ii+No},{x:cr+ro,y:0,z:Ii}],$r=[{type:"cube",geometry:new Yn(50,50,50),offset:{x:0,y:0,z:0},rotation:{x:0,y:Math.PI/6,z:0},compatibleHoles:["cube"],hole:{render:!0,compatibleShapes:["all"],shapeOffset:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}}},{type:"small cuboid",geometry:new Yn(30,30,50),offset:{x:0,y:0,z:0},rotation:{x:0,y:Math.PI/6,z:0},compatibleHoles:["small cuboid","cube"],hole:{render:!0,shapeOffset:{x:0,y:-10,z:0},rotation:{x:0,y:0,z:0}}},{type:"big cuboid",geometry:new Yn(50,50,80),offset:{x:0,y:0,z:0},rotation:{x:0,y:Math.PI/-3,z:0},compatibleHoles:["cube"],hole:{render:!1,shapeOffset:{x:0,y:15,z:0},rotation:{x:Math.PI/2,y:0,z:0}}},{type:"cylinder",geometry:new $o(25,25,50,32),offset:{x:0,y:0,z:0},rotation:{x:0,y:Math.PI/-3,z:Math.PI/2},compatibleHoles:["cylinder","cube"],hole:{render:!0,shapeOffset:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}}},{type:"half-cylinder",geometry:wy([new $o(25,25,60,32,1,!1,0,Math.PI),new Or(50,60).rotateY(Math.PI/-2)]).translate(-25/2,0,0),offset:{x:0,y:0,z:0},rotation:{x:0,y:Math.PI/6,z:Math.PI/2},compatibleHoles:["half-cylinder","cube","cylinder"],hole:{render:!0,shapeOffset:{x:0,y:5,z:0},rotation:{x:0,y:Math.PI/2,z:0}}},{type:"triangular prism",geometry:new Hl(new sd([new gt(0,0),new gt(50,0),new gt(25,50)]),{depth:50,bevelEnabled:!1}).translate(-25,-25,-25),offset:{x:0,y:0,z:-5},rotation:{x:0,y:Math.PI/6,z:0},compatibleHoles:["triangular prism","cube"],hole:{render:!0,shapeOffset:{x:0,y:0,z:0},rotation:{x:Math.PI/2,y:0,z:Math.PI}}}],vd=0,Ry=1,Py=2,Ah=2,Xa=1.25,wh=1,Le=32,_e=Le/4,yd=65535,Fo=Math.pow(2,-24),Gl=Symbol("SKIP_GENERATION"),Sd={strategy:vd,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Gl]:!1};function fe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Ch(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Rh(i,t){t.set(i)}function Ph(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function so(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function qr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function xe(i,t){return t[i+15]===yd}function Ue(i,t){return t[i+6]}function Be(i,t){return t[i+14]}function be(i){return i+_e}function Te(i,t){const e=t[i+6];return i+e*_e}function kl(i,t){return t[i+7]}function $a(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,h=-1/0,f=-1/0,g=1/0,p=1/0,m=1/0,x=-1/0,b=-1/0,_=-1/0;const v=i.offset||0;for(let E=(t-v)*6,d=(t+e-v)*6;E<d;E+=6){const c=i[E+0],S=i[E+1],u=c-S,R=c+S;u<s&&(s=u),R>l&&(l=R),c<g&&(g=c),c>x&&(x=c);const y=i[E+2],M=i[E+3],A=y-M,T=y+M;A<o&&(o=A),T>h&&(h=T),y<p&&(p=y),y>b&&(b=y);const w=i[E+4],C=i[E+5],U=w-C,F=w+C;U<a&&(a=U),F>f&&(f=F),w<m&&(m=w),w>_&&(_=w)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=h,n[5]=f,r[0]=g,r[1]=p,r[2]=m,r[3]=x,r[4]=b,r[5]=_}const Gn=32,Iy=(i,t)=>i.candidate-t.candidate,oi=new Array(Gn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),oo=new Float32Array(6);function Dy(i,t,e,n,r,s){let o=-1,a=0;if(s===vd)o=Ch(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Ry)o=Ch(i),o!==-1&&(a=Ly(e,n,r,o));else if(s===Py){const l=qr(i);let h=Xa*r;const f=e.offset||0,g=(n-f)*6,p=(n+r-f)*6;for(let m=0;m<3;m++){const x=t[m],v=(t[m+3]-x)/Gn;if(r<Gn/4){const E=[...oi];E.length=r;let d=0;for(let S=g;S<p;S+=6,d++){const u=E[d];u.candidate=e[S+2*m],u.count=0;const{bounds:R,leftCacheBounds:y,rightCacheBounds:M}=u;for(let A=0;A<3;A++)M[A]=1/0,M[A+3]=-1/0,y[A]=1/0,y[A+3]=-1/0,R[A]=1/0,R[A+3]=-1/0;so(S,e,R)}E.sort(Iy);let c=r;for(let S=0;S<c;S++){const u=E[S];for(;S+1<c&&E[S+1].candidate===u.candidate;)E.splice(S+1,1),c--}for(let S=g;S<p;S+=6){const u=e[S+2*m];for(let R=0;R<c;R++){const y=E[R];u>=y.candidate?so(S,e,y.rightCacheBounds):(so(S,e,y.leftCacheBounds),y.count++)}}for(let S=0;S<c;S++){const u=E[S],R=u.count,y=r-u.count,M=u.leftCacheBounds,A=u.rightCacheBounds;let T=0;R!==0&&(T=qr(M)/l);let w=0;y!==0&&(w=qr(A)/l);const C=wh+Xa*(T*R+w*y);C<h&&(o=m,h=C,a=u.candidate)}}else{for(let c=0;c<Gn;c++){const S=oi[c];S.count=0,S.candidate=x+v+c*v;const u=S.bounds;for(let R=0;R<3;R++)u[R]=1/0,u[R+3]=-1/0}for(let c=g;c<p;c+=6){let R=~~((e[c+2*m]-x)/v);R>=Gn&&(R=Gn-1);const y=oi[R];y.count++,so(c,e,y.bounds)}const E=oi[Gn-1];Rh(E.bounds,E.rightCacheBounds);for(let c=Gn-2;c>=0;c--){const S=oi[c],u=oi[c+1];Ph(S.bounds,u.rightCacheBounds,S.rightCacheBounds)}let d=0;for(let c=0;c<Gn-1;c++){const S=oi[c],u=S.count,R=S.bounds,M=oi[c+1].rightCacheBounds;u!==0&&(d===0?Rh(R,oo):Ph(R,oo,oo)),d+=u;let A=0,T=0;d!==0&&(A=qr(oo)/l);const w=r-d;w!==0&&(T=qr(M)/l);const C=wh+Xa*(A*d+T*w);C<h&&(o=m,h=C,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Ly(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}class qa{constructor(){this.boundingData=new Float32Array(6)}}function Uy(i,t,e,n,r,s){let o=n,a=n+r-1;const l=s.pos,h=s.axis*2,f=e.offset||0;for(;;){for(;o<=a&&e[(o-f)*6+h]<l;)o++;for(;o<=a&&e[(a-f)*6+h]>=l;)a--;if(o<a){for(let g=0;g<t;g++){let p=i[o*t+g];i[o*t+g]=i[a*t+g],i[a*t+g]=p}for(let g=0;g<6;g++){const p=o-f,m=a-f,x=e[p*6+g];e[p*6+g]=e[m*6+g],e[m*6+g]=x}o++,a--}else return o}}let Md,Oo,ul,Ed;const Ny=Math.pow(2,32);function hl(i){return"count"in i?1:1+hl(i.left)+hl(i.right)}function Fy(i,t,e){return Md=new Float32Array(e),Oo=new Uint32Array(e),ul=new Uint16Array(e),Ed=new Uint8Array(e),fl(i,t)}function fl(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Md[e+o]=s[o];if(r)return t.buffer?(Ed.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Oo[e+6]=t.offset,ul[n+14]=t.count,ul[n+15]=yd,i+Le);{const{left:o,right:a,splitAxis:l}=t,h=i+Le;let f=fl(h,o);const g=i/Le,m=f/Le-g;if(m>Ny)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Oo[e+6]=m,Oo[e+7]=l,fl(f,a)}}function Oy(i,t,e,n,r,s){const{maxDepth:o,verbose:a,maxLeafSize:l,strategy:h,onProgress:f}=r,g=i.primitiveBuffer,p=i.primitiveBufferStride,m=new Float32Array(6);let x=!1;const b=new qa;return $a(t,e,n,b.boundingData,m),v(b,e,n,m),b;function _(E){f&&f((E-s.offset)/s.count)}function v(E,d,c,S=null,u=0){if(!x&&u>=o&&(x=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),c<=l||u>=o)return _(d+c),E.offset=d,E.count=c,E;const R=Dy(E.boundingData,S,t,d,c,h);if(R.axis===-1)return _(d+c),E.offset=d,E.count=c,E;const y=Uy(g,p,t,d,c,R);if(y===d||y===d+c)_(d+c),E.offset=d,E.count=c;else{E.splitAxis=R.axis;const M=new qa,A=d,T=y-d;E.left=M,$a(t,A,T,M.boundingData,m),v(M,A,T,m,u+1);const w=new qa,C=y,U=c-T;E.right=w,$a(t,C,U,w.boundingData,m),v(w,C,U,m,u+1)}return E}}function By(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{const h=Oy(i,a,l.offset,l.count,t,o),f=hl(h),g=new e(Le*f);return Fy(0,h,g),g})}class Wl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class zy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const le=new zy;let pi,br;const lr=[],ao=new Wl(()=>new Ge);function Vy(i,t,e,n,r,s){pi=ao.getPrimitive(),br=ao.getPrimitive(),lr.push(pi,br),le.setBuffer(i._roots[t]);const o=dl(0,i.geometry,e,n,r,s);le.clearBuffer(),ao.releasePrimitive(pi),ao.releasePrimitive(br),lr.pop(),lr.pop();const a=lr.length;return a>0&&(br=lr[a-1],pi=lr[a-2]),o}function dl(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:h}=le;let f=i*2;if(xe(f,l)){const x=Ue(i,h),b=Be(f,l);return fe(i,a,pi),n(x,b,!1,o,s+i/_e,pi)}else{let w=function(U){const{uint16Array:F,uint32Array:B}=le;let O=U*2;for(;!xe(O,F);)U=be(U),O=U*2;return Ue(U,B)},C=function(U){const{uint16Array:F,uint32Array:B}=le;let O=U*2;for(;!xe(O,F);)U=Te(U,B),O=U*2;return Ue(U,B)+Be(O,F)};var p=w,m=C;const x=be(i),b=Te(i,h);let _=x,v=b,E,d,c,S;if(r&&(c=pi,S=br,fe(_,a,c),fe(v,a,S),E=r(c),d=r(S),d<E)){_=b,v=x;const U=E;E=d,d=U,c=S}c||(c=pi,fe(_,a,c));const u=xe(_*2,l),R=e(c,u,E,o+1,s+_/_e);let y;if(R===Ah){const U=w(_),B=C(_)-U;y=n(U,B,!0,o+1,s+_/_e,c)}else y=R&&dl(_,t,e,n,r,s,o+1);if(y)return!0;S=br,fe(v,a,S);const M=xe(v*2,l),A=e(S,M,d,o+1,s+v/_e);let T;if(A===Ah){const U=w(v),B=C(v)-U;T=n(U,B,!0,o+1,s+v/_e,S)}else T=A&&dl(v,t,e,n,r,s,o+1);return!!T}}const us=new le.constructor,qo=new le.constructor,ci=new Wl(()=>new Ge),ur=new Ge,hr=new Ge,Ya=new Ge,Za=new Ge;let Ja=!1;function Hy(i,t,e,n){if(Ja)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ja=!0;const r=i._roots,s=t._roots;let o,a=0,l=0;const h=new Jt().copy(e).invert();for(let f=0,g=r.length;f<g;f++){us.setBuffer(r[f]),l=0;const p=ci.getPrimitive();fe(0,us.float32Array,p),p.applyMatrix4(h);for(let m=0,x=s.length;m<x&&(qo.setBuffer(s[m]),o=dn(0,0,e,h,n,a,l,0,0,p),qo.clearBuffer(),l+=s[m].byteLength/Le,!o);m++);if(ci.releasePrimitive(p),us.clearBuffer(),a+=r[f].byteLength/Le,o)break}return Ja=!1,o}function dn(i,t,e,n,r,s=0,o=0,a=0,l=0,h=null,f=!1){let g,p;f?(g=qo,p=us):(g=us,p=qo);const m=g.float32Array,x=g.uint32Array,b=g.uint16Array,_=p.float32Array,v=p.uint32Array,E=p.uint16Array,d=i*2,c=t*2,S=xe(d,b),u=xe(c,E);let R=!1;if(u&&S)f?R=r(Ue(t,v),Be(t*2,E),Ue(i,x),Be(i*2,b),l,o+t/_e,a,s+i/_e):R=r(Ue(i,x),Be(i*2,b),Ue(t,v),Be(t*2,E),a,s+i/_e,l,o+t/_e);else if(u){const y=ci.getPrimitive();fe(t,_,y),y.applyMatrix4(e);const M=be(i),A=Te(i,x);fe(M,m,ur),fe(A,m,hr);const T=y.intersectsBox(ur),w=y.intersectsBox(hr);R=T&&dn(t,M,n,e,r,o,s,l,a+1,y,!f)||w&&dn(t,A,n,e,r,o,s,l,a+1,y,!f),ci.releasePrimitive(y)}else{const y=be(t),M=Te(t,v);fe(y,_,Ya),fe(M,_,Za);const A=h.intersectsBox(Ya),T=h.intersectsBox(Za);if(A&&T)R=dn(i,y,e,n,r,s,o,a,l+1,h,f)||dn(i,M,e,n,r,s,o,a,l+1,h,f);else if(A)if(S)R=dn(i,y,e,n,r,s,o,a,l+1,h,f);else{const w=ci.getPrimitive();w.copy(Ya).applyMatrix4(e);const C=be(i),U=Te(i,x);fe(C,m,ur),fe(U,m,hr);const F=w.intersectsBox(ur),B=w.intersectsBox(hr);R=F&&dn(y,C,n,e,r,o,s,l,a+1,w,!f)||B&&dn(y,U,n,e,r,o,s,l,a+1,w,!f),ci.releasePrimitive(w)}else if(T)if(S)R=dn(i,M,e,n,r,s,o,a,l+1,h,f);else{const w=ci.getPrimitive();w.copy(Za).applyMatrix4(e);const C=be(i),U=Te(i,x);fe(C,m,ur),fe(U,m,hr);const F=w.intersectsBox(ur),B=w.intersectsBox(hr);R=F&&dn(M,C,n,e,r,o,s,l,a+1,w,!f)||B&&dn(M,U,n,e,r,o,s,l,a+1,w,!f),ci.releasePrimitive(w)}}return R}const Ih=new Ge,fr=new Float32Array(6);class Gy{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Sd,...t},By(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,h=-1/0,f=-1/0;for(let g=t,p=t+e;g<p;g++){this.writePrimitiveBounds(g,fr,0);const[m,x,b,_,v,E]=fr;m<s&&(s=m),_>l&&(l=_),x<o&&(o=x),v>h&&(h=v),b<a&&(a=b),E>f&&(f=E)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=h,n[r+5]=f,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,fr,0);const[a,l,h,f,g,p]=fr,m=(a+f)/2,x=(l+g)/2,b=(h+p)/2,_=(f-a)/2,v=(g-l)/2,E=(p-h)/2,d=(s-r)*6;n[d+0]=m,n[d+1]=_+(Math.abs(m)+_)*Fo,n[d+2]=x,n[d+3]=v+(Math.abs(x)+v)*Fo,n[d+4]=b,n[d+5]=E+(Math.abs(b)+E)*Fo}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/Le;for(let h=0;h<l;h++){const f=_e*h,g=2*f;xe(g,a)&&(o[f+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const h=a*2,f=xe(h,s);if(f){const g=r[a+6],p=s[h+14];t(l,f,new Float32Array(n,a*4,6),g,p)}else{const g=be(a),p=Te(a,r),m=kl(a,r);t(l,f,new Float32Array(n,a*4,6),m)||(o(g,l+1),o(p,l+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/Le;for(let h=l-1;h>=0;h--){const f=h*_e,g=f*2;if(xe(g,o)){const m=Ue(f,s),x=Be(g,o);this.writePrimitiveRangeBounds(m,x,fr,0),a.set(fr,f)}else{const m=be(f),x=Te(f,s);for(let b=0;b<3;b++){const _=a[m+b],v=a[m+b+3],E=a[x+b],d=a[x+b+3];a[f+b]=_<E?_:E,a[f+b+3]=v>d?v:d}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{fe(0,new Float32Array(n),Ih),t.union(Ih)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const g=r;r=(p,m,x,b,_)=>g(p,m,x,b,_)?!0:a(p,m,this,s,x,b,o)}else r||(s?r=(g,p,m,x)=>a(g,p,this,s,m,x,o):r=(g,p,m)=>m);let l=!1,h=0;const f=this._roots;for(let g=0,p=f.length;g<p;g++){const m=f[g];if(l=Vy(this,g,n,r,e,h),l)break;h+=m.byteLength/Le}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Hy(this,t,e,r)}}function ky(){return typeof SharedArrayBuffer<"u"}function Xl(i){return i.index?i.index.count:i.attributes.position.count}function ia(i){return Xl(i)/3}function Wy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Xy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Wy(e,n);i.setIndex(new He(r,1));for(let s=0;s<e;s++)r[s]=s}}function $y(i,t,e){const n=Xl(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function qy(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Dh(i,t,e){const n=$y(i,t,e),r=qy(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,l=Xl(i)/e,h=[];for(const p of r){const{offset:m,count:x}=p,b=m,_=isFinite(x)?x:l-m,v=m+_;b<a&&v>o&&(h.push({pos:Math.max(o,b),isStart:!0}),h.push({pos:Math.min(a,v),isStart:!1}))}h.sort((p,m)=>p.pos!==m.pos?p.pos-m.pos:p.type==="end"?-1:1);let f=0,g=null;for(const p of h){const m=p.pos;f!==0&&m!==g&&s.push({offset:g,count:m-g}),f+=p.isStart?1:-1,g=m}return s}function Yy(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((h,f)=>h+f.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let l=0;for(let h=0;h<i.length;h++){const{offset:f,count:g}=i[h];for(let p=0;p<g;p++)a[l+p]=f+p;l+=g}return a}class Zy extends Gy{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!ky())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Sd,...e},e[Gl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=Dh(e,t.range,n),s=Yy(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Xy(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ge))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Dh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Kn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Kn.prototype.setFromBox=(function(){const i=new L;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){i.x=r.x*l+s.x*(1-l),i.y=r.y*h+s.y*(1-h),i.z=r.z*f+s.z*(1-f);const g=e.dot(i);o=Math.min(g,o),a=Math.max(g,a)}this.min=o,this.max=a}})();const Jy=(function(){const i=new L,t=new L,e=new L;return function(r,s,o){const a=r.start,l=i,h=s.start,f=t;e.subVectors(a,h),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const g=e.dot(f),p=f.dot(l),m=f.dot(f),x=e.dot(l),_=l.dot(l)*m-p*p;let v,E;_!==0?v=(g*p-x*m)/_:v=0,E=(g+v*p)/m,o.x=v,o.y=E}})(),$l=(function(){const i=new gt,t=new L,e=new L;return function(r,s,o,a){Jy(r,s,i);let l=i.x,h=i.y;if(l>=0&&l<=1&&h>=0&&h<=1){r.at(l,o),s.at(h,a);return}else if(l>=0&&l<=1){h<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;l<0?f=r.start:f=r.end;let g;h<0?g=s.start:g=s.end;const p=t,m=e;if(r.closestPointToPoint(g,!0,t),s.closestPointToPoint(f,!0,e),p.distanceToSquared(g)<=m.distanceToSquared(f)){o.copy(p),a.copy(g);return}else{o.copy(f),a.copy(m);return}}}})(),Ky=(function(){const i=new L,t=new L,e=new pn,n=new Ae;return function(s,o){const{radius:a,center:l}=s,{a:h,b:f,c:g}=o;if(n.start=h,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=h,n.end=g,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=f,n.end=g,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const b=o.getPlane(e);if(Math.abs(b.distanceToPoint(l))<=a){const v=b.projectPoint(l,t);if(o.containsPoint(v))return!0}return!1}})(),jy=["x","y","z"],kn=1e-15,Lh=kn*kn;function nn(i){return Math.abs(i)<kn}class qe extends ce{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Kn),this.points=[this.a,this.b,this.c],this.plane=new pn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ae,this.needsUpdate=!0}intersectsSphere(t){return Ky(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const h=s[1],f=o[1];h.subVectors(t,e),f.setFromPoints(h,r);const g=s[2],p=o[2];g.subVectors(e,n),p.setFromPoints(g,r);const m=s[3],x=o[3];m.subVectors(n,t),x.setFromPoints(m,r);const b=h.length(),_=g.length(),v=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<kn?_<kn||v<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):_<kn?v<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):v<kn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}qe.prototype.closestPointToSegment=(function(){const i=new L,t=new L,e=new Ae;return function(r,s=null,o=null){const{start:a,end:l}=r,h=this.points;let f,g=1/0;for(let p=0;p<3;p++){const m=(p+1)%3;e.start.copy(h[p]),e.end.copy(h[m]),$l(e,r,i,t),f=i.distanceToSquared(t),f<g&&(g=f,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<g&&(g=f,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),f=l.distanceToSquared(i),f<g&&(g=f,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(g)}})();qe.prototype.intersectsTriangle=(function(){const i=new qe,t=new Kn,e=new Kn,n=new L,r=new L,s=new L,o=new L,a=new Ae,l=new Ae,h=new L,f=new gt,g=new gt;function p(d,c,S,u){const R=n;!d.isDegenerateIntoPoint&&!d.isDegenerateIntoSegment?R.copy(d.plane.normal):R.copy(c.plane.normal);const y=d.satBounds,M=d.satAxes;for(let w=1;w<4;w++){const C=y[w],U=M[w];if(t.setFromPoints(U,c.points),C.isSeparated(t)||(o.copy(R).cross(U),t.setFromPoints(o,d.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}const A=c.satBounds,T=c.satAxes;for(let w=1;w<4;w++){const C=A[w],U=T[w];if(t.setFromPoints(U,d.points),C.isSeparated(t)||(o.crossVectors(R,U),t.setFromPoints(o,d.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return S&&(u||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function m(d,c,S,u,R,y,M,A,T,w,C){let U=M/(M-A);w.x=u+(R-u)*U,C.start.subVectors(c,d).multiplyScalar(U).add(d),U=M/(M-T),w.y=u+(y-u)*U,C.end.subVectors(S,d).multiplyScalar(U).add(d)}function x(d,c,S,u,R,y,M,A,T,w,C){if(R>0)m(d.c,d.a,d.b,u,c,S,T,M,A,w,C);else if(y>0)m(d.b,d.a,d.c,S,c,u,A,M,T,w,C);else if(A*T>0||M!=0)m(d.a,d.b,d.c,c,S,u,M,A,T,w,C);else if(A!=0)m(d.b,d.a,d.c,S,c,u,A,M,T,w,C);else if(T!=0)m(d.c,d.a,d.b,u,c,S,T,M,A,w,C);else return!0;return!1}function b(d,c,S,u){const R=c.degenerateSegment,y=d.plane.distanceToPoint(R.start),M=d.plane.distanceToPoint(R.end);return nn(y)?nn(M)?p(d,c,S,u):(S&&(S.start.copy(R.start),S.end.copy(R.start)),d.containsPoint(R.start)):nn(M)?(S&&(S.start.copy(R.end),S.end.copy(R.end)),d.containsPoint(R.end)):d.plane.intersectLine(R,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),d.containsPoint(n)):!1}function _(d,c,S){const u=c.a;return nn(d.plane.distanceToPoint(u))&&d.containsPoint(u)?(S&&(S.start.copy(u),S.end.copy(u)),!0):!1}function v(d,c,S){const u=d.degenerateSegment,R=c.a;return u.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<Lh?(S&&(S.start.copy(R),S.end.copy(R)),!0):!1}function E(d,c,S,u){if(d.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){const R=d.degenerateSegment,y=c.degenerateSegment,M=r,A=s;R.delta(M),y.delta(A);const T=n.subVectors(y.start,R.start),w=M.x*A.y-M.y*A.x;if(nn(w))return!1;const C=(T.x*A.y-T.y*A.x)/w,U=-(M.x*T.y-M.y*T.x)/w;if(C<0||C>1||U<0||U>1)return!1;const F=R.start.z+M.z*C,B=y.start.z+A.z*U;return nn(F-B)?(S&&(S.start.copy(R.start).addScaledVector(M,C),S.end.copy(R.start).addScaledVector(M,C)),!0):!1}else return c.isDegenerateIntoPoint?v(d,c,S):b(c,d,S,u);else{if(d.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(d.a)<Lh?(S&&(S.start.copy(d.a),S.end.copy(d.a)),!0):!1:c.isDegenerateIntoSegment?v(c,d,S):_(c,d,S);if(c.isDegenerateIntoPoint)return _(d,c,S);if(c.isDegenerateIntoSegment)return b(d,c,S,u)}}return function(c,S=null,u=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);const R=E(this,c,S,u);if(R!==void 0)return R;const y=this.plane,M=c.plane;let A=M.distanceToPoint(this.a),T=M.distanceToPoint(this.b),w=M.distanceToPoint(this.c);nn(A)&&(A=0),nn(T)&&(T=0),nn(w)&&(w=0);const C=A*T,U=A*w;if(C>0&&U>0)return!1;let F=y.distanceToPoint(c.a),B=y.distanceToPoint(c.b),O=y.distanceToPoint(c.c);nn(F)&&(F=0),nn(B)&&(B=0),nn(O)&&(O=0);const k=F*B,G=F*O;if(k>0&&G>0)return!1;r.copy(y.normal),s.copy(M.normal);const at=r.cross(s);let et=0,it=Math.abs(at.x);const ht=Math.abs(at.y);ht>it&&(it=ht,et=1),Math.abs(at.z)>it&&(et=2);const Tt=jy[et],Y=this.a[Tt],nt=this.b[Tt],rt=this.c[Tt],ut=c.a[Tt],ft=c.b[Tt],vt=c.c[Tt];if(x(this,Y,nt,rt,C,U,A,T,w,f,a))return p(this,c,S,u);if(x(c,ut,ft,vt,k,G,F,B,O,g,l))return p(this,c,S,u);if(f.y<f.x){const Gt=f.y;f.y=f.x,f.x=Gt,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(g.y<g.x){const Gt=g.y;g.y=g.x,g.x=Gt,h.copy(l.start),l.start.copy(l.end),l.end.copy(h)}return f.y<g.x||g.y<f.x?!1:(S&&(g.x>f.x?S.start.copy(l.start):S.start.copy(a.start),g.y<f.y?S.end.copy(l.end):S.end.copy(a.end)),!0)}})();qe.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();qe.prototype.distanceToTriangle=(function(){const i=new L,t=new L,e=["a","b","c"],n=new Ae,r=new Ae;return function(o,a=null,l=null){const h=a||l?n:null;if(this.intersectsTriangle(o,h))return(a||l)&&(a&&h.getCenter(a),l&&h.getCenter(l)),0;let f=1/0;for(let g=0;g<3;g++){let p;const m=e[g],x=o[m];this.closestPointToPoint(x,i),p=x.distanceToSquared(i),p<f&&(f=p,a&&a.copy(i),l&&l.copy(x));const b=this[m];o.closestPointToPoint(b,i),p=b.distanceToSquared(i),p<f&&(f=p,a&&a.copy(b),l&&l.copy(i))}for(let g=0;g<3;g++){const p=e[g],m=e[(g+1)%3];n.set(this[p],this[m]);for(let x=0;x<3;x++){const b=e[x],_=e[(x+1)%3];r.set(o[b],o[_]),$l(n,r,i,t);const v=i.distanceToSquared(t);v<f&&(f=v,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(f)}})();class ke{constructor(t,e,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Jt,this.invMatrix=new Jt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Kn),this.alignedSatBounds=new Array(3).fill().map(()=>new Kn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}ke.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let h=0;h<=1;h++)for(let f=0;f<=1;f++)for(let g=0;g<=1;g++){const p=1*h|2*f|4*g,m=r[p];m.x=h?n.x:e.x,m.y=f?n.y:e.y,m.z=g?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let h=0;h<3;h++){const f=o[h],g=s[h],p=1<<h,m=r[p];f.subVectors(a,m),g.setFromPoints(f,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();ke.prototype.intersectsBox=(function(){const i=new Kn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const h=o[l],f=s[l];if(i.setFromBox(h,e),f.isSeparated(i))return!1}return!0}})();ke.prototype.intersectsTriangle=(function(){const i=new qe,t=new Array(3),e=new Kn,n=new Kn,r=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let p=0;p<3;p++){const m=a[p],x=l[p];if(e.setFromPoints(x,t),m.isSeparated(e))return!1}const h=o.satBounds,f=o.satAxes,g=this.points;for(let p=0;p<3;p++){const m=h[p],x=f[p];if(e.setFromPoints(x,g),m.isSeparated(e))return!1}for(let p=0;p<3;p++){const m=l[p];for(let x=0;x<4;x++){const b=f[x];if(r.crossVectors(m,b),e.setFromPoints(r,t),n.setFromPoints(r,g),e.isSeparated(n))return!1}}return!0}})();ke.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();ke.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();ke.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Ae),e=new Array(12).fill().map(()=>new Ae),n=new L,r=new L;return function(o,a=0,l=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||h)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),h&&h.copy(r)),0;const f=a*a,g=o.min,p=o.max,m=this.points;let x=1/0;for(let _=0;_<8;_++){const v=m[_];r.copy(v).clamp(g,p);const E=v.distanceToSquared(r);if(E<x&&(x=E,l&&l.copy(v),h&&h.copy(r),E<f))return Math.sqrt(E)}let b=0;for(let _=0;_<3;_++)for(let v=0;v<=1;v++)for(let E=0;E<=1;E++){const d=(_+1)%3,c=(_+2)%3,S=v<<d|E<<c,u=1<<_|v<<d|E<<c,R=m[S],y=m[u];t[b].set(R,y);const A=i[_],T=i[d],w=i[c],C=e[b],U=C.start,F=C.end;U[A]=g[A],U[T]=v?g[T]:p[T],U[w]=E?g[w]:p[T],F[A]=p[A],F[T]=v?g[T]:p[T],F[w]=E?g[w]:p[T],b++}for(let _=0;_<=1;_++)for(let v=0;v<=1;v++)for(let E=0;E<=1;E++){r.x=_?p.x:g.x,r.y=v?p.y:g.y,r.z=E?p.z:g.z,this.closestPointToPoint(r,n);const d=r.distanceToSquared(n);if(d<x&&(x=d,l&&l.copy(n),h&&h.copy(r),d<f))return Math.sqrt(d)}for(let _=0;_<12;_++){const v=t[_];for(let E=0;E<12;E++){const d=e[E];$l(v,d,n,r);const c=n.distanceToSquared(r);if(c<x&&(x=c,l&&l.copy(n),h&&h.copy(r),c<f))return Math.sqrt(c)}}return Math.sqrt(x)}})();class Qy extends Wl{constructor(){super(()=>new qe)}}const sn=new Qy,Yr=new L,Ka=new L;function tS(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:f=>(Yr.copy(t).clamp(f.min,f.max),Yr.distanceToSquared(t)),intersectsBounds:(f,g,p)=>p<a&&p<o,intersectsTriangle:(f,g)=>{f.closestPointToPoint(t,Yr);const p=t.distanceToSquared(Yr);return p<a&&(Ka.copy(Yr),a=p,l=g),p<s}}),a===1/0)return null;const h=Math.sqrt(a);return e.point?e.point.copy(Ka):e.point=Ka.clone(),e.distance=h,e.faceIndex=l,e}const co=parseInt(Ts)>=169,eS=parseInt(Ts)<=161,Ti=new L,Ai=new L,wi=new L,lo=new gt,uo=new gt,ho=new gt,Uh=new L,Nh=new L,Fh=new L,Zr=new L;function nS(i,t,e,n,r,s,o,a){let l;if(s===ze?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==mn,r),l===null)return null;const h=i.origin.distanceTo(r);return h<o||h>a?null:{distance:h,point:r.clone()}}function Oh(i,t,e,n,r,s,o,a,l,h,f){Ti.fromBufferAttribute(t,s),Ai.fromBufferAttribute(t,o),wi.fromBufferAttribute(t,a);const g=nS(i,Ti,Ai,wi,Zr,l,h,f);if(g){if(n){lo.fromBufferAttribute(n,s),uo.fromBufferAttribute(n,o),ho.fromBufferAttribute(n,a),g.uv=new gt;const m=ce.getInterpolation(Zr,Ti,Ai,wi,lo,uo,ho,g.uv);co||(g.uv=m)}if(r){lo.fromBufferAttribute(r,s),uo.fromBufferAttribute(r,o),ho.fromBufferAttribute(r,a),g.uv1=new gt;const m=ce.getInterpolation(Zr,Ti,Ai,wi,lo,uo,ho,g.uv1);co||(g.uv1=m),eS&&(g.uv2=g.uv1)}if(e){Uh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,o),Fh.fromBufferAttribute(e,a),g.normal=new L;const m=ce.getInterpolation(Zr,Ti,Ai,wi,Uh,Nh,Fh,g.normal);g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1),co||(g.normal=m)}const p={a:s,b:o,c:a,normal:new L,materialIndex:0};if(ce.getNormal(Ti,Ai,wi,p.normal),g.face=p,g.faceIndex=s,co){const m=new L;ce.getBarycoord(Zr,Ti,Ai,wi,m),g.barycoord=m}}return g}function Bh(i){return i&&i.isMaterial?i.side:i}function ra(i,t,e,n,r,s,o){const a=n*3;let l=a+0,h=a+1,f=a+2;const{index:g,groups:p}=i;i.index&&(l=g.getX(l),h=g.getX(h),f=g.getX(f));const{position:m,normal:x,uv:b,uv1:_}=i.attributes;if(Array.isArray(t)){const v=n*3;for(let E=0,d=p.length;E<d;E++){const{start:c,count:S,materialIndex:u}=p[E];if(v>=c&&v<c+S){const R=Bh(t[u]),y=Oh(e,m,x,b,_,l,h,f,R,s,o);if(y)if(y.faceIndex=n,y.face.materialIndex=u,r)r.push(y);else return y}}}else{const v=Bh(t),E=Oh(e,m,x,b,_,l,h,f,v,s,o);if(E)if(E.faceIndex=n,E.face.materialIndex=0,r)r.push(E);else return E}return null}function me(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,l=t+1,h=t+2;e&&(a=e.getX(a),l=e.getX(l),h=e.getX(h)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h)}function iS(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:h}=i;for(let f=n,g=n+r;f<g;f++)ra(l,t,e,f,s,o,a)}function rS(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let h=1/0,f=null;for(let g=n,p=n+r;g<p;g++){let m;m=ra(a,t,e,g,null,s,o),m&&m.distance<h&&(f=m,h=m.distance)}return f}function sS(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,h=a.attributes.position;for(let f=i,g=t+i;f<g;f++){let p;if(p=f,me(o,p*3,l,h),o.needsUpdate=!0,n(o,p,r,s))return!0}return!1}function oS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,h=0;const f=i._roots;for(let p=0,m=f.length;p<m;p++)s=f[p],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),g(0,h),h+=s.byteLength;function g(p,m,x=!1){const b=p*2;if(xe(b,a)){const _=Ue(p,o),v=Be(b,a);let E=1/0,d=1/0,c=1/0,S=-1/0,u=-1/0,R=-1/0;for(let y=3*_,M=3*(_+v);y<M;y++){let A=n[y];const T=r.getX(A),w=r.getY(A),C=r.getZ(A);T<E&&(E=T),T>S&&(S=T),w<d&&(d=w),w>u&&(u=w),C<c&&(c=C),C>R&&(R=C)}return l[p+0]!==E||l[p+1]!==d||l[p+2]!==c||l[p+3]!==S||l[p+4]!==u||l[p+5]!==R?(l[p+0]=E,l[p+1]=d,l[p+2]=c,l[p+3]=S,l[p+4]=u,l[p+5]=R,!0):!1}else{const _=be(p),v=Te(p,o);let E=x,d=!1,c=!1;if(t){if(!E){const A=_/_e+m/Le,T=v/_e+m/Le;d=t.has(A),c=t.has(T),E=!d&&!c}}else d=!0,c=!0;const S=E||d,u=E||c;let R=!1;S&&(R=g(_,m,E));let y=!1;u&&(y=g(v,m,E));const M=R||y;if(M)for(let A=0;A<3;A++){const T=_+A,w=v+A,C=l[T],U=l[T+3],F=l[w],B=l[w+3];l[p+A]=C<F?C:F,l[p+A+3]=U>B?U:B}return M}}}function gi(i,t,e,n,r){let s,o,a,l,h,f;const g=1/e.direction.x,p=1/e.direction.y,m=1/e.direction.z,x=e.origin.x,b=e.origin.y,_=e.origin.z;let v=t[i],E=t[i+3],d=t[i+1],c=t[i+3+1],S=t[i+2],u=t[i+3+2];return g>=0?(s=(v-x)*g,o=(E-x)*g):(s=(E-x)*g,o=(v-x)*g),p>=0?(a=(d-b)*p,l=(c-b)*p):(a=(c-b)*p,l=(d-b)*p),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),m>=0?(h=(S-_)*m,f=(u-_)*m):(h=(u-_)*m,f=(S-_)*m),s>f||h>o)?!1:((h>s||s!==s)&&(s=h),(f<o||o!==o)&&(o=f),s<=r&&o>=n)}function aS(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:h}=i;for(let f=n,g=n+r;f<g;f++){let p=h?h[f]:f;ra(l,t,e,p,s,o,a)}}function cS(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let h=1/0,f=null;for(let g=n,p=n+r;g<p;g++){let m;m=ra(a,t,e,l?l[g]:g,null,s,o),m&&m.distance<h&&(f=m,h=m.distance)}return f}function lS(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,h=a.attributes.position;for(let f=i,g=t+i;f<g;f++){let p;if(p=e.resolveTriangleIndex(f),me(o,p*3,l,h),o.needsUpdate=!0,n(o,p,r,s))return!0}return!1}function uS(i,t,e,n,r,s,o){le.setBuffer(i._roots[t]),pl(0,i,e,n,r,s,o),le.clearBuffer()}function pl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:h}=le,f=i*2;if(xe(f,l)){const p=Ue(i,h),m=Be(f,l);iS(t,e,n,p,m,r,s,o)}else{const p=be(i);gi(p,a,n,s,o)&&pl(p,t,e,n,r,s,o);const m=Te(i,h);gi(m,a,n,s,o)&&pl(m,t,e,n,r,s,o)}}const hS=["x","y","z"];function fS(i,t,e,n,r,s){le.setBuffer(i._roots[t]);const o=gl(0,i,e,n,r,s);return le.clearBuffer(),o}function gl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=le;let h=i*2;if(xe(h,a)){const g=Ue(i,l),p=Be(h,a);return rS(t,e,n,g,p,r,s)}else{const g=kl(i,l),p=hS[g],x=n.direction[p]>=0;let b,_;x?(b=be(i),_=Te(i,l)):(b=Te(i,l),_=be(i));const E=gi(b,o,n,r,s)?gl(b,t,e,n,r,s):null;if(E){const S=E.point[p];if(x?S<=o[_+g]:S>=o[_+g+3])return E}const c=gi(_,o,n,r,s)?gl(_,t,e,n,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const fo=new Ge,dr=new qe,pr=new qe,Jr=new Jt,zh=new ke,po=new ke;function dS(i,t,e,n){le.setBuffer(i._roots[t]);const r=ml(0,i,e,n);return le.clearBuffer(),r}function ml(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=le;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),zh.set(e.boundingBox.min,e.boundingBox.max,n),r=zh),xe(l,o)){const f=t.geometry,g=f.index,p=f.attributes.position,m=e.index,x=e.attributes.position,b=Ue(i,a),_=Be(l,o);if(Jr.copy(n).invert(),e.boundsTree)return fe(i,s,po),po.matrix.copy(Jr),po.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>po.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let d=b*3,c=(_+b)*3;d<c;d+=3)if(me(pr,d,g,p),pr.needsUpdate=!0,E.intersectsTriangle(pr))return!0;return!1}});{const v=ia(e);for(let E=b*3,d=(_+b)*3;E<d;E+=3){me(dr,E,g,p),dr.a.applyMatrix4(Jr),dr.b.applyMatrix4(Jr),dr.c.applyMatrix4(Jr),dr.needsUpdate=!0;for(let c=0,S=v*3;c<S;c+=3)if(me(pr,c,m,x),pr.needsUpdate=!0,dr.intersectsTriangle(pr))return!0}}}else{const f=be(i),g=Te(i,a);return fe(f,s,fo),!!(r.intersectsBox(fo)&&ml(f,t,e,n,r)||(fe(g,s,fo),r.intersectsBox(fo)&&ml(g,t,e,n,r)))}}const go=new Jt,ja=new ke,Kr=new ke,pS=new L,gS=new L,mS=new L,_S=new L;function xS(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ja.set(t.boundingBox.min,t.boundingBox.max,e),ja.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,h=a.index,f=t.attributes.position,g=t.index,p=sn.getPrimitive(),m=sn.getPrimitive();let x=pS,b=gS,_=null,v=null;r&&(_=mS,v=_S);let E=1/0,d=null,c=null;return go.copy(e).invert(),Kr.matrix.copy(go),i.shapecast({boundsTraverseOrder:S=>ja.distanceToBox(S),intersectsBounds:(S,u,R)=>R<E&&R<o?(u&&(Kr.min.copy(S.min),Kr.max.copy(S.max),Kr.needsUpdate=!0),!0):!1,intersectsRange:(S,u)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:y=>Kr.distanceToBox(y),intersectsBounds:(y,M,A)=>A<E&&A<o,intersectsRange:(y,M)=>{for(let A=y,T=y+M;A<T;A++){me(m,3*A,g,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=S,C=S+u;w<C;w++){me(p,3*w,h,l),p.needsUpdate=!0;const U=p.distanceToTriangle(m,x,_);if(U<E&&(b.copy(x),v&&v.copy(_),E=U,d=w,c=A),U<s)return!0}}}});{const R=ia(t);for(let y=0,M=R;y<M;y++){me(m,3*y,g,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=S,T=S+u;A<T;A++){me(p,3*A,h,l),p.needsUpdate=!0;const w=p.distanceToTriangle(m,x,_);if(w<E&&(b.copy(x),v&&v.copy(_),E=w,d=A,c=y),w<s)return!0}}}}}),sn.releasePrimitive(p),sn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=E,n.faceIndex=d,r&&(r.point?r.point.copy(v):r.point=v.clone(),r.point.applyMatrix4(go),b.applyMatrix4(go),r.distance=b.sub(r.point).length(),r.faceIndex=c),n)}function vS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,h=0;const f=i._roots;for(let p=0,m=f.length;p<m;p++)s=f[p],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),g(0,h),h+=s.byteLength;function g(p,m,x=!1){const b=p*2;if(xe(b,a)){const _=Ue(p,o),v=Be(b,a);let E=1/0,d=1/0,c=1/0,S=-1/0,u=-1/0,R=-1/0;for(let y=_,M=_+v;y<M;y++){const A=3*i.resolveTriangleIndex(y);for(let T=0;T<3;T++){let w=A+T;w=n?n[w]:w;const C=r.getX(w),U=r.getY(w),F=r.getZ(w);C<E&&(E=C),C>S&&(S=C),U<d&&(d=U),U>u&&(u=U),F<c&&(c=F),F>R&&(R=F)}}return l[p+0]!==E||l[p+1]!==d||l[p+2]!==c||l[p+3]!==S||l[p+4]!==u||l[p+5]!==R?(l[p+0]=E,l[p+1]=d,l[p+2]=c,l[p+3]=S,l[p+4]=u,l[p+5]=R,!0):!1}else{const _=be(p),v=Te(p,o);let E=x,d=!1,c=!1;if(t){if(!E){const A=_/_e+m/Le,T=v/_e+m/Le;d=t.has(A),c=t.has(T),E=!d&&!c}}else d=!0,c=!0;const S=E||d,u=E||c;let R=!1;S&&(R=g(_,m,E));let y=!1;u&&(y=g(v,m,E));const M=R||y;if(M)for(let A=0;A<3;A++){const T=_+A,w=v+A,C=l[T],U=l[T+3],F=l[w],B=l[w+3];l[p+A]=C<F?C:F,l[p+A+3]=U>B?U:B}return M}}}function yS(i,t,e,n,r,s,o){le.setBuffer(i._roots[t]),_l(0,i,e,n,r,s,o),le.clearBuffer()}function _l(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:h}=le,f=i*2;if(xe(f,l)){const p=Ue(i,h),m=Be(f,l);aS(t,e,n,p,m,r,s,o)}else{const p=be(i);gi(p,a,n,s,o)&&_l(p,t,e,n,r,s,o);const m=Te(i,h);gi(m,a,n,s,o)&&_l(m,t,e,n,r,s,o)}}const SS=["x","y","z"];function MS(i,t,e,n,r,s){le.setBuffer(i._roots[t]);const o=xl(0,i,e,n,r,s);return le.clearBuffer(),o}function xl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=le;let h=i*2;if(xe(h,a)){const g=Ue(i,l),p=Be(h,a);return cS(t,e,n,g,p,r,s)}else{const g=kl(i,l),p=SS[g],x=n.direction[p]>=0;let b,_;x?(b=be(i),_=Te(i,l)):(b=Te(i,l),_=be(i));const E=gi(b,o,n,r,s)?xl(b,t,e,n,r,s):null;if(E){const S=E.point[p];if(x?S<=o[_+g]:S>=o[_+g+3])return E}const c=gi(_,o,n,r,s)?xl(_,t,e,n,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const mo=new Ge,gr=new qe,mr=new qe,jr=new Jt,Vh=new ke,_o=new ke;function ES(i,t,e,n){le.setBuffer(i._roots[t]);const r=vl(0,i,e,n);return le.clearBuffer(),r}function vl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=le;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Vh.set(e.boundingBox.min,e.boundingBox.max,n),r=Vh),xe(l,o)){const f=t.geometry,g=f.index,p=f.attributes.position,m=e.index,x=e.attributes.position,b=Ue(i,a),_=Be(l,o);if(jr.copy(n).invert(),e.boundsTree)return fe(i,s,_o),_o.matrix.copy(jr),_o.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>_o.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let d=b,c=_+b;d<c;d++)if(me(mr,3*t.resolveTriangleIndex(d),g,p),mr.needsUpdate=!0,E.intersectsTriangle(mr))return!0;return!1}});{const v=ia(e);for(let E=b,d=_+b;E<d;E++){const c=t.resolveTriangleIndex(E);me(gr,3*c,g,p),gr.a.applyMatrix4(jr),gr.b.applyMatrix4(jr),gr.c.applyMatrix4(jr),gr.needsUpdate=!0;for(let S=0,u=v*3;S<u;S+=3)if(me(mr,S,m,x),mr.needsUpdate=!0,gr.intersectsTriangle(mr))return!0}}}else{const f=be(i),g=Te(i,a);return fe(f,s,mo),!!(r.intersectsBox(mo)&&vl(f,t,e,n,r)||(fe(g,s,mo),r.intersectsBox(mo)&&vl(g,t,e,n,r)))}}const xo=new Jt,Qa=new ke,Qr=new ke,bS=new L,TS=new L,AS=new L,wS=new L;function CS(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Qa.set(t.boundingBox.min,t.boundingBox.max,e),Qa.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,h=a.index,f=t.attributes.position,g=t.index,p=sn.getPrimitive(),m=sn.getPrimitive();let x=bS,b=TS,_=null,v=null;r&&(_=AS,v=wS);let E=1/0,d=null,c=null;return xo.copy(e).invert(),Qr.matrix.copy(xo),i.shapecast({boundsTraverseOrder:S=>Qa.distanceToBox(S),intersectsBounds:(S,u,R)=>R<E&&R<o?(u&&(Qr.min.copy(S.min),Qr.max.copy(S.max),Qr.needsUpdate=!0),!0):!1,intersectsRange:(S,u)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:y=>Qr.distanceToBox(y),intersectsBounds:(y,M,A)=>A<E&&A<o,intersectsRange:(y,M)=>{for(let A=y,T=y+M;A<T;A++){const w=R.resolveTriangleIndex(A);me(m,3*w,g,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let C=S,U=S+u;C<U;C++){const F=i.resolveTriangleIndex(C);me(p,3*F,h,l),p.needsUpdate=!0;const B=p.distanceToTriangle(m,x,_);if(B<E&&(b.copy(x),v&&v.copy(_),E=B,d=C,c=A),B<s)return!0}}}})}else{const R=ia(t);for(let y=0,M=R;y<M;y++){me(m,3*y,g,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=S,T=S+u;A<T;A++){const w=i.resolveTriangleIndex(A);me(p,3*w,h,l),p.needsUpdate=!0;const C=p.distanceToTriangle(m,x,_);if(C<E&&(b.copy(x),v&&v.copy(_),E=C,d=A,c=y),C<s)return!0}}}}}),sn.releasePrimitive(p),sn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=E,n.faceIndex=d,r&&(r.point?r.point.copy(v):r.point=v.clone(),r.point.applyMatrix4(xo),b.applyMatrix4(xo),r.distance=b.sub(r.point).length(),r.faceIndex=c),n)}function Hh(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const vo=new ke,yo=new ws,Gh=new L,kh=new Jt,Wh=new L,tc=["getX","getY","getZ"];class Yo extends Zy{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));const a=new Yo(e,{...n,[Gl]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const h=e.getIndex();if(h===null){const f=new He(t.index,1,!1);e.setIndex(f)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return a;function l(h){for(let f=0;f<h.length;f++){const g=h[f],p=new Uint32Array(g),m=new Uint16Array(g);for(let x=0,b=g.byteLength/Le;x<b;x++){const _=_e*x,v=2*_;xe(v,m)||(p[_+6]=p[_+6]/_e-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=(s?s[t]:t)*3;let f=h+0,g=h+1,p=h+2;a&&(f=a[f],g=a[g],p=a[p]);for(let m=0;m<3;m++){const x=o[tc[m]](f),b=o[tc[m]](g),_=o[tc[m]](p);let v=x;b<v&&(v=b),_<v&&(v=_);let E=x;b>E&&(E=b),_>E&&(E=_),e[n+m]=v,e[n+m+3]=E}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=o.array,f=o.offset||0;let g=3;o.isInterleavedBufferAttribute&&(g=o.data.stride);const p=["getX","getY","getZ"],m=n.offset;for(let x=t,b=t+e;x<b;x++){const v=(s?s[x]:x)*3,E=(x-m)*6;let d=v+0,c=v+1,S=v+2;a&&(d=a[d],c=a[c],S=a[S]),l||(d=d*g+f,c=c*g+f,S=S*g+f);for(let u=0;u<3;u++){let R,y,M;l?(R=o[p[u]](d),y=o[p[u]](c),M=o[p[u]](S)):(R=h[d+u],y=h[c+u],M=h[S+u]);let A=R;y<A&&(A=y),M<A&&(A=M);let T=R;y>T&&(T=y),M>T&&(T=M);const w=(T-A)/2,C=u*2;n[E+C+0]=A+w,n[E+C+1]=w+(Math.abs(A)+w)*Fo}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;kh.copy(t.matrixWorld).invert(),yo.copy(e.ray).applyMatrix4(kh),Wh.setFromMatrixScale(t.matrixWorld),Gh.copy(yo.direction).multiply(Wh);const s=Gh.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(yo,r,o,a);l=Hh(l,t,e),l&&n.push(l)}else{const l=this.raycast(yo,r,o,a);for(let h=0,f=l.length;h<f;h++){const g=Hh(l[h],t,e);g&&n.push(g)}}return n}refit(t=null){return(this.indirect?vS:oS)(this,t)}raycast(t,e=Rn,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?yS:uS;for(let l=0,h=s.length;l<h;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=Rn,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?MS:fS;for(let l=0,h=s.length;l<h;l++){const f=a(this,l,e,t,n,r);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?ES:dS;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=sn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?lS:sS});return sn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=sn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,h=this.indirect?x=>{const b=this.resolveTriangleIndex(x);me(o,b*3,a,l)}:x=>{me(o,x*3,a,l)},f=sn.getPrimitive(),g=t.geometry.index,p=t.geometry.attributes.position,m=t.indirect?x=>{const b=t.resolveTriangleIndex(x);me(f,b*3,g,p)}:x=>{me(f,x*3,g,p)};if(s){if(!(t instanceof Yo))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const x=(b,_,v,E,d,c,S,u)=>{for(let R=v,y=v+E;R<y;R++){m(R),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,A=b+_;M<A;M++)if(h(M),o.needsUpdate=!0,s(o,f,M,R,d,c,S,u))return!0}return!1};if(r){const b=r;r=function(_,v,E,d,c,S,u,R){return b(_,v,E,d,c,S,u,R)?!0:x(_,v,E,d,c,S,u,R)}}else r=x}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return vo.set(t.min,t.max,e),vo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>vo.intersectsBox(n),intersectsTriangle:n=>vo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?CS:xS)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return tS(this,t,e,n,r)}}const bd=1e-6,RS=bd*.5,Td=Math.pow(10,-Math.log10(bd)),PS=RS*Td;function An(i){return~~(i*Td+PS)}function IS(i){return`${An(i.x)},${An(i.y)}`}function Xh(i){return`${An(i.x)},${An(i.y)},${An(i.z)}`}function DS(i){return`${An(i.x)},${An(i.y)},${An(i.z)},${An(i.w)}`}function LS(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Ad(){return typeof SharedArrayBuffer<"u"}function US(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function NS(i){return i.index?i.index.count:i.attributes.position.count}function ql(i){return NS(i)/3}const FS=1e-8,OS=new L;function BS(i){return~~(i/3)}function zS(i){return i%3}function $h(i,t){return i.start-t.start}function qh(i,t){return OS.subVectors(t,i.origin).dot(i.direction)}function VS(i,t,e,n=FS){i.sort($h),t.sort($h);for(let a=0;a<i.length;a++){const l=i[a];for(let h=0;h<t.length;h++){const f=t[h];if(!(f.start>l.end)){if(l.end<f.start||f.end<l.start)continue;if(l.start<=f.start&&l.end>=f.end)s(f.end,l.end)||i.splice(a+1,0,{start:f.end,end:l.end,index:l.index}),l.end=f.start,f.start=0,f.end=0;else if(l.start>=f.start&&l.end<=f.end)s(l.end,f.end)||t.splice(h+1,0,{start:l.end,end:f.end,index:f.index}),f.end=l.start,l.start=0,l.end=0;else if(l.start<=f.start&&l.end<=f.end){const g=l.end;l.end=f.start,f.start=g}else if(l.start>=f.start&&l.end>=f.end){const g=f.end;f.end=l.start,l.start=g}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(l.index).push(f.index),e.get(f.index).push(l.index),o(f)&&(t.splice(h,1),h--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const Yh=1e-5,Zh=1e-4;class HS{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,h=e.length;l<h;l++){const f=e[l];if(o(f,t)&&o(f,n))continue;const g=a(f,t),p=a(f,n),m=Math.min(g,p);m<r&&(r=m,s=f)}return s;function o(l,h){const f=l.origin.distanceTo(h.origin)>Yh;return l.direction.angleTo(h.direction)>Zh||f}function a(l,h){const f=l.origin.distanceTo(h.origin),g=l.direction.angleTo(h.direction);return f/Yh+g/Zh}}}const ec=new L,nc=new L,So=new ws;function GS(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),h=new HS;for(let f=0,g=l.length;f<g;f++){const p=l[f],m=BS(p),x=zS(p);let b=3*m+x,_=3*m+(x+1)%3;r&&(b=r.getX(b),_=r.getX(_)),ec.fromBufferAttribute(s,b),nc.fromBufferAttribute(s,_),LS(ec,nc,So);let v,E=h.findClosestRay(So);E===null&&(E=So.clone(),h.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),v=a.get(E);let d=qh(E,ec),c=qh(E,nc);d>c&&([d,c]=[c,d]),So.direction.dot(E.direction)<0?v.reverse.push({start:d,end:c,index:p}):v.forward.push({start:d,end:c,index:p})}return a.forEach(({forward:f,reverse:g},p)=>{VS(f,g,o,e),f.length===0&&g.length===0&&a.delete(p)}),{disjointConnectivityMap:o,fragmentMap:a}}const kS=new gt,ic=new L,WS=new oe,rc=["","",""];class XS{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?d:E,a=new Map,{attributes:l}=t,h=e?Object.keys(l):null,f=t.index,g=l.position;let p=ql(t);const m=p;let x=0;n&&(x=t.drawRange.start,t.drawRange.count!==1/0&&(p=~~(t.drawRange.count/3)));let b=this.data;(!b||b.length<3*m)&&(b=new Int32Array(3*m)),b.fill(-1);let _=0,v=new Set;for(let c=x,S=p*3+x;c<S;c+=3){const u=c;for(let R=0;R<3;R++){let y=u+R;f&&(y=f.getX(y)),rc[R]=o(y)}for(let R=0;R<3;R++){const y=(R+1)%3,M=rc[R],A=rc[y],T=`${A}_${M}`;if(a.has(T)){const w=u+R,C=a.get(T);b[w]=C,b[C]=w,a.delete(T),_+=2,v.delete(C)}else{const w=`${M}_${A}`,C=u+R;a.set(w,C),v.add(C)}}}if(r){const{fragmentMap:c,disjointConnectivityMap:S}=GS(t,v,s);v.clear(),c.forEach(({forward:u,reverse:R})=>{u.forEach(({index:y})=>v.add(y)),R.forEach(({index:y})=>v.add(y))}),this.unmatchedDisjointEdges=c,this.disjointConnections=S,_=p*3-v.size}this.matchedEdges=_,this.unmatchedEdges=v.size,this.data=b;function E(c){return ic.fromBufferAttribute(g,c),Xh(ic)}function d(c){let S="";for(let u=0,R=h.length;u<R;u++){const y=l[h[u]];let M;switch(y.itemSize){case 1:M=An(y.getX(c));break;case 2:M=IS(kS.fromBufferAttribute(y,c));break;case 3:M=Xh(ic.fromBufferAttribute(y,c));break;case 4:M=DS(WS.fromBufferAttribute(y,c));break}S!==""&&(S+="|"),S+=M}return S}}}class Zo extends Qe{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Jt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Ad(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,l=`${t.uuid}_${o}_${a}`;if(this._hash===l)return;if(this._hash=l,n)for(const p in e){const m=e[p];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=US(m.array)}t.boundsTree=new Yo(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new XS),t.halfEdges.updateFrom(t);const h=ql(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));const f=t.groupIndices,g=t.groups;for(let p=0,m=g.length;p<m;p++){const{start:x,count:b}=g[p];for(let _=x/3,v=(x+b)/3;_<v;_++)f[_]=p}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var $S=Object.getOwnPropertyNames,tn=(i,t)=>function(){return t||(0,i[$S(i)[0]])((t={exports:{}}).exports,t),t.exports},sa=tn({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(l,h,f,g,p){for(var m=p+1;g<=p;){var x=g+p>>>1,b=l[x],_=f!==void 0?f(b,h):b-h;_>=0?(m=x,p=x-1):g=x+1}return m}function n(l,h,f,g,p){for(var m=p+1;g<=p;){var x=g+p>>>1,b=l[x],_=f!==void 0?f(b,h):b-h;_>0?(m=x,p=x-1):g=x+1}return m}function r(l,h,f,g,p){for(var m=g-1;g<=p;){var x=g+p>>>1,b=l[x],_=f!==void 0?f(b,h):b-h;_<0?(m=x,g=x+1):p=x-1}return m}function s(l,h,f,g,p){for(var m=g-1;g<=p;){var x=g+p>>>1,b=l[x],_=f!==void 0?f(b,h):b-h;_<=0?(m=x,g=x+1):p=x-1}return m}function o(l,h,f,g,p){for(;g<=p;){var m=g+p>>>1,x=l[m],b=f!==void 0?f(x,h):x-h;if(b===0)return m;b<=0?g=m+1:p=m-1}return-1}function a(l,h,f,g,p,m){return typeof f=="function"?m(l,h,f,g===void 0?0:g|0,p===void 0?l.length-1:p|0):m(l,h,void 0,f===void 0?0:f|0,g===void 0?l.length-1:g|0)}t.exports={ge:function(l,h,f,g,p){return a(l,h,f,g,p,e)},gt:function(l,h,f,g,p){return a(l,h,f,g,p,n)},lt:function(l,h,f,g,p){return a(l,h,f,g,p,r)},le:function(l,h,f,g,p){return a(l,h,f,g,p,s)},eq:function(l,h,f,g,p){return a(l,h,f,g,p,o)}}}}),Yl=tn({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,l=e*r,h=l-r,f=l-h,g=r-f,p=e*s,m=p-s,x=p-m,b=s-x,_=a-f*x,v=_-g*x,E=v-f*b,d=g*b-E;return o?(o[0]=d,o[1]=a,o):[d,a]}}}),wd=tn({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,h=s-a,f=r-l,g=f+h;return g?[g,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var l=o+a,h=new Array(l),f=0,g=0,p=0,m=Math.abs,x=r[g],b=m(x),_=s[p],v=m(_),E,d;b<v?(d=x,g+=1,g<o&&(x=r[g],b=m(x))):(d=_,p+=1,p<a&&(_=s[p],v=m(_))),g<o&&b<v||p>=a?(E=x,g+=1,g<o&&(x=r[g],b=m(x))):(E=_,p+=1,p<a&&(_=s[p],v=m(_)));for(var c=E+d,S=c-E,u=d-S,R=u,y=c,M,A,T,w,C;g<o&&p<a;)b<v?(E=x,g+=1,g<o&&(x=r[g],b=m(x))):(E=_,p+=1,p<a&&(_=s[p],v=m(_))),d=R,c=E+d,S=c-E,u=d-S,u&&(h[f++]=u),M=y+c,A=M-y,T=M-A,w=c-A,C=y-T,R=C+w,y=M;for(;g<o;)E=x,d=R,c=E+d,S=c-E,u=d-S,u&&(h[f++]=u),M=y+c,A=M-y,T=M-A,w=c-A,C=y-T,R=C+w,y=M,g+=1,g<o&&(x=r[g]);for(;p<a;)E=_,d=R,c=E+d,S=c-E,u=d-S,u&&(h[f++]=u),M=y+c,A=M-y,T=M-A,w=c-A,C=y-T,R=C+w,y=M,p+=1,p<a&&(_=s[p]);return R&&(h[f++]=R),y&&(h[f++]=y),f||(h[f++]=0),h.length=f,h}}}),qS=tn({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,l=o-a,h=r-a,f=n-l;return s?(s[0]=f+h,s[1]=o,s):[f+h,o]}}}),Cd=tn({"node_modules/robust-scale/robust-scale.js"(i,t){var e=Yl(),n=qS();t.exports=r;function r(s,o){var a=s.length;if(a===1){var l=e(s[0],o);return l[0]?l:[l[1]]}var h=new Array(2*a),f=[.1,.1],g=[.1,.1],p=0;e(s[0],o,f),f[0]&&(h[p++]=f[0]);for(var m=1;m<a;++m){e(s[m],o,g);var x=f[1];n(x,g[0],f),f[0]&&(h[p++]=f[0]);var b=g[1],_=f[1],v=b+_,E=v-b,d=_-E;f[1]=v,d&&(h[p++]=d)}return f[1]&&(h[p++]=f[1]),p===0&&(h[p++]=0),h.length=p,h}}}),Rd=tn({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,h=s-a,f=r-l,g=f+h;return g?[g,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var l=o+a,h=new Array(l),f=0,g=0,p=0,m=Math.abs,x=r[g],b=m(x),_=-s[p],v=m(_),E,d;b<v?(d=x,g+=1,g<o&&(x=r[g],b=m(x))):(d=_,p+=1,p<a&&(_=-s[p],v=m(_))),g<o&&b<v||p>=a?(E=x,g+=1,g<o&&(x=r[g],b=m(x))):(E=_,p+=1,p<a&&(_=-s[p],v=m(_)));for(var c=E+d,S=c-E,u=d-S,R=u,y=c,M,A,T,w,C;g<o&&p<a;)b<v?(E=x,g+=1,g<o&&(x=r[g],b=m(x))):(E=_,p+=1,p<a&&(_=-s[p],v=m(_))),d=R,c=E+d,S=c-E,u=d-S,u&&(h[f++]=u),M=y+c,A=M-y,T=M-A,w=c-A,C=y-T,R=C+w,y=M;for(;g<o;)E=x,d=R,c=E+d,S=c-E,u=d-S,u&&(h[f++]=u),M=y+c,A=M-y,T=M-A,w=c-A,C=y-T,R=C+w,y=M,g+=1,g<o&&(x=r[g]);for(;p<a;)E=_,d=R,c=E+d,S=c-E,u=d-S,u&&(h[f++]=u),M=y+c,A=M-y,T=M-A,w=c-A,C=y-T,R=C+w,y=M,p+=1,p<a&&(_=-s[p]);return R&&(h[f++]=R),y&&(h[f++]=y),f||(h[f++]=0),h.length=f,h}}}),YS=tn({"node_modules/robust-orientation/orientation.js"(i,t){var e=Yl(),n=wd(),r=Cd(),s=Rd(),o=5,a=11102230246251565e-32,l=(3+16*a)*a,h=(7+56*a)*a;function f(c,S,u,R){return function(M,A,T){var w=c(c(S(A[1],T[0]),S(-T[1],A[0])),c(S(M[1],A[0]),S(-A[1],M[0]))),C=c(S(M[1],T[0]),S(-T[1],M[0])),U=R(w,C);return U[U.length-1]}}function g(c,S,u,R){return function(M,A,T,w){var C=c(c(u(c(S(T[1],w[0]),S(-w[1],T[0])),A[2]),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),-T[2]),u(c(S(A[1],T[0]),S(-T[1],A[0])),w[2]))),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),w[2])))),U=c(c(u(c(S(T[1],w[0]),S(-w[1],T[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-T[2]),u(c(S(M[1],T[0]),S(-T[1],M[0])),w[2]))),c(u(c(S(A[1],T[0]),S(-T[1],A[0])),M[2]),c(u(c(S(M[1],T[0]),S(-T[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),T[2])))),F=R(C,U);return F[F.length-1]}}function p(c,S,u,R){return function(M,A,T,w,C){var U=c(c(c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),T[2]),c(u(c(S(T[1],C[0]),S(-C[1],T[0])),-w[2]),u(c(S(T[1],w[0]),S(-w[1],T[0])),C[2]))),A[3]),c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-w[2]),u(c(S(A[1],w[0]),S(-w[1],A[0])),C[2]))),-T[3]),u(c(u(c(S(T[1],C[0]),S(-C[1],T[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-T[2]),u(c(S(A[1],T[0]),S(-T[1],A[0])),C[2]))),w[3]))),c(u(c(u(c(S(T[1],w[0]),S(-w[1],T[0])),A[2]),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),-T[2]),u(c(S(A[1],T[0]),S(-T[1],A[0])),w[2]))),-C[3]),c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-w[2]),u(c(S(A[1],w[0]),S(-w[1],A[0])),C[2]))),M[3]),u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-w[2]),u(c(S(M[1],w[0]),S(-w[1],M[0])),C[2]))),-A[3])))),c(c(u(c(u(c(S(A[1],C[0]),S(-C[1],A[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),C[2]))),w[3]),c(u(c(u(c(S(A[1],w[0]),S(-w[1],A[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),w[2]))),-C[3]),u(c(u(c(S(T[1],w[0]),S(-w[1],T[0])),A[2]),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),-T[2]),u(c(S(A[1],T[0]),S(-T[1],A[0])),w[2]))),M[3]))),c(u(c(u(c(S(T[1],w[0]),S(-w[1],T[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-T[2]),u(c(S(M[1],T[0]),S(-T[1],M[0])),w[2]))),-A[3]),c(u(c(u(c(S(A[1],w[0]),S(-w[1],A[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),w[2]))),T[3]),u(c(u(c(S(A[1],T[0]),S(-T[1],A[0])),M[2]),c(u(c(S(M[1],T[0]),S(-T[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),T[2]))),-w[3]))))),F=c(c(c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),T[2]),c(u(c(S(T[1],C[0]),S(-C[1],T[0])),-w[2]),u(c(S(T[1],w[0]),S(-w[1],T[0])),C[2]))),M[3]),u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-w[2]),u(c(S(M[1],w[0]),S(-w[1],M[0])),C[2]))),-T[3])),c(u(c(u(c(S(T[1],C[0]),S(-C[1],T[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-T[2]),u(c(S(M[1],T[0]),S(-T[1],M[0])),C[2]))),w[3]),u(c(u(c(S(T[1],w[0]),S(-w[1],T[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-T[2]),u(c(S(M[1],T[0]),S(-T[1],M[0])),w[2]))),-C[3]))),c(c(u(c(u(c(S(T[1],C[0]),S(-C[1],T[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-T[2]),u(c(S(A[1],T[0]),S(-T[1],A[0])),C[2]))),M[3]),u(c(u(c(S(T[1],C[0]),S(-C[1],T[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-T[2]),u(c(S(M[1],T[0]),S(-T[1],M[0])),C[2]))),-A[3])),c(u(c(u(c(S(A[1],C[0]),S(-C[1],A[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),C[2]))),T[3]),u(c(u(c(S(A[1],T[0]),S(-T[1],A[0])),M[2]),c(u(c(S(M[1],T[0]),S(-T[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),T[2]))),-C[3])))),B=R(U,F);return B[B.length-1]}}function m(c){var S=c===3?f:c===4?g:p;return S(n,e,r,s)}var x=m(3),b=m(4),_=[function(){return 0},function(){return 0},function(S,u){return u[0]-S[0]},function(S,u,R){var y=(S[1]-R[1])*(u[0]-R[0]),M=(S[0]-R[0])*(u[1]-R[1]),A=y-M,T;if(y>0){if(M<=0)return A;T=y+M}else if(y<0){if(M>=0)return A;T=-(y+M)}else return A;var w=l*T;return A>=w||A<=-w?A:x(S,u,R)},function(S,u,R,y){var M=S[0]-y[0],A=u[0]-y[0],T=R[0]-y[0],w=S[1]-y[1],C=u[1]-y[1],U=R[1]-y[1],F=S[2]-y[2],B=u[2]-y[2],O=R[2]-y[2],k=A*U,G=T*C,at=T*w,et=M*U,it=M*C,ht=A*w,Et=F*(k-G)+B*(at-et)+O*(it-ht),Tt=(Math.abs(k)+Math.abs(G))*Math.abs(F)+(Math.abs(at)+Math.abs(et))*Math.abs(B)+(Math.abs(it)+Math.abs(ht))*Math.abs(O),Y=h*Tt;return Et>Y||-Et>Y?Et:b(S,u,R,y)}];function v(c){var S=_[c.length];return S||(S=_[c.length]=m(c.length)),S.apply(void 0,c)}function E(c,S,u,R,y,M,A){return function(w,C,U,F,B){switch(arguments.length){case 0:case 1:return 0;case 2:return R(w,C);case 3:return y(w,C,U);case 4:return M(w,C,U,F);case 5:return A(w,C,U,F,B)}for(var O=new Array(arguments.length),k=0;k<arguments.length;++k)O[k]=arguments[k];return c(O)}}function d(){for(;_.length<=o;)_.push(m(_.length));t.exports=E.apply(void 0,[v].concat(_));for(var c=0;c<=o;++c)t.exports[c]=_[c]}d()}}),ZS=tn({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=sa(),n=YS()[3],r=0,s=1,o=2;t.exports=b;function a(_,v,E,d,c){this.a=_,this.b=v,this.idx=E,this.lowerIds=d,this.upperIds=c}function l(_,v,E,d){this.a=_,this.b=v,this.type=E,this.idx=d}function h(_,v){var E=_.a[0]-v.a[0]||_.a[1]-v.a[1]||_.type-v.type;return E||_.type!==r&&(E=n(_.a,_.b,v.b),E)?E:_.idx-v.idx}function f(_,v){return n(_.a,_.b,v)}function g(_,v,E,d,c){for(var S=e.lt(v,d,f),u=e.gt(v,d,f),R=S;R<u;++R){for(var y=v[R],M=y.lowerIds,T=M.length;T>1&&n(E[M[T-2]],E[M[T-1]],d)>0;)_.push([M[T-1],M[T-2],c]),T-=1;M.length=T,M.push(c);for(var A=y.upperIds,T=A.length;T>1&&n(E[A[T-2]],E[A[T-1]],d)<0;)_.push([A[T-2],A[T-1],c]),T-=1;A.length=T,A.push(c)}}function p(_,v){var E;return _.a[0]<v.a[0]?E=n(_.a,_.b,v.a):E=n(v.b,v.a,_.a),E||(v.b[0]<_.b[0]?E=n(_.a,_.b,v.b):E=n(v.b,v.a,_.b),E||_.idx-v.idx)}function m(_,v,E){var d=e.le(_,E,p),c=_[d],S=c.upperIds,u=S[S.length-1];c.upperIds=[u],_.splice(d+1,0,new a(E.a,E.b,E.idx,[u],S))}function x(_,v,E){var d=E.a;E.a=E.b,E.b=d;var c=e.eq(_,E,p),S=_[c],u=_[c-1];u.upperIds=S.upperIds,_.splice(c,1)}function b(_,v){for(var E=_.length,d=v.length,c=[],S=0;S<E;++S)c.push(new l(_[S],null,r,S));for(var S=0;S<d;++S){var u=v[S],R=_[u[0]],y=_[u[1]];R[0]<y[0]?c.push(new l(R,y,o,S),new l(y,R,s,S)):R[0]>y[0]&&c.push(new l(y,R,o,S),new l(R,y,s,S))}c.sort(h);for(var M=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),A=[new a([M,1],[M,0],-1,[],[])],T=[],S=0,w=c.length;S<w;++S){var C=c[S],U=C.type;U===r?g(T,A,_,C.a,C.idx):U===o?m(A,_,C):x(A,_,C)}return T}}}),JS=tn({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=sa();t.exports=o;function n(a,l){this.stars=a,this.edges=l}var r=n.prototype;function s(a,l,h){for(var f=1,g=a.length;f<g;f+=2)if(a[f-1]===l&&a[f]===h){a[f-1]=a[g-2],a[f]=a[g-1],a.length=g-2;return}}r.isConstraint=(function(){var a=[0,0];function l(h,f){return h[0]-f[0]||h[1]-f[1]}return function(h,f){return a[0]=Math.min(h,f),a[1]=Math.max(h,f),e.eq(this.edges,a,l)>=0}})(),r.removeTriangle=function(a,l,h){var f=this.stars;s(f[a],l,h),s(f[l],h,a),s(f[h],a,l)},r.addTriangle=function(a,l,h){var f=this.stars;f[a].push(l,h),f[l].push(h,a),f[h].push(a,l)},r.opposite=function(a,l){for(var h=this.stars[l],f=1,g=h.length;f<g;f+=2)if(h[f]===a)return h[f-1];return-1},r.flip=function(a,l){var h=this.opposite(a,l),f=this.opposite(l,a);this.removeTriangle(a,l,h),this.removeTriangle(l,a,f),this.addTriangle(a,f,h),this.addTriangle(l,h,f)},r.edges=function(){for(var a=this.stars,l=[],h=0,f=a.length;h<f;++h)for(var g=a[h],p=0,m=g.length;p<m;p+=2)l.push([g[p],g[p+1]]);return l},r.cells=function(){for(var a=this.stars,l=[],h=0,f=a.length;h<f;++h)for(var g=a[h],p=0,m=g.length;p<m;p+=2){var x=g[p],b=g[p+1];h<Math.min(x,b)&&l.push([h,x,b])}return l};function o(a,l){for(var h=new Array(a),f=0;f<a;++f)h[f]=[];return new n(h,l)}}}),KS=tn({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=Yl(),n=wd(),r=Rd(),s=Cd(),o=6;function a(d){var c=d===3?g:d===4?p:d===5?m:x;return c(n,r,e,s)}function l(){return 0}function h(){return 0}function f(){return 0}function g(d,c,S,u){function R(y,M,A){var T=S(y[0],y[0]),w=u(T,M[0]),C=u(T,A[0]),U=S(M[0],M[0]),F=u(U,y[0]),B=u(U,A[0]),O=S(A[0],A[0]),k=u(O,y[0]),G=u(O,M[0]),at=d(c(G,B),c(F,w)),et=c(k,C),it=c(at,et);return it[it.length-1]}return R}function p(d,c,S,u){function R(y,M,A,T){var w=d(S(y[0],y[0]),S(y[1],y[1])),C=u(w,M[0]),U=u(w,A[0]),F=u(w,T[0]),B=d(S(M[0],M[0]),S(M[1],M[1])),O=u(B,y[0]),k=u(B,A[0]),G=u(B,T[0]),at=d(S(A[0],A[0]),S(A[1],A[1])),et=u(at,y[0]),it=u(at,M[0]),ht=u(at,T[0]),Et=d(S(T[0],T[0]),S(T[1],T[1])),Tt=u(Et,y[0]),Y=u(Et,M[0]),nt=u(Et,A[0]),rt=d(d(u(c(nt,ht),M[1]),d(u(c(Y,G),-A[1]),u(c(it,k),T[1]))),d(u(c(Y,G),y[1]),d(u(c(Tt,F),-M[1]),u(c(O,C),T[1])))),ut=d(d(u(c(nt,ht),y[1]),d(u(c(Tt,F),-A[1]),u(c(et,U),T[1]))),d(u(c(it,k),y[1]),d(u(c(et,U),-M[1]),u(c(O,C),A[1])))),ft=c(rt,ut);return ft[ft.length-1]}return R}function m(d,c,S,u){function R(y,M,A,T,w){var C=d(S(y[0],y[0]),d(S(y[1],y[1]),S(y[2],y[2]))),U=u(C,M[0]),F=u(C,A[0]),B=u(C,T[0]),O=u(C,w[0]),k=d(S(M[0],M[0]),d(S(M[1],M[1]),S(M[2],M[2]))),G=u(k,y[0]),at=u(k,A[0]),et=u(k,T[0]),it=u(k,w[0]),ht=d(S(A[0],A[0]),d(S(A[1],A[1]),S(A[2],A[2]))),Et=u(ht,y[0]),Tt=u(ht,M[0]),Y=u(ht,T[0]),nt=u(ht,w[0]),rt=d(S(T[0],T[0]),d(S(T[1],T[1]),S(T[2],T[2]))),ut=u(rt,y[0]),ft=u(rt,M[0]),vt=u(rt,A[0]),Gt=u(rt,w[0]),At=d(S(w[0],w[0]),d(S(w[1],w[1]),S(w[2],w[2]))),J=u(At,y[0]),tt=u(At,M[0]),K=u(At,A[0]),ot=u(At,T[0]),N=d(d(d(u(d(u(c(ot,Gt),A[1]),d(u(c(K,nt),-T[1]),u(c(vt,Y),w[1]))),M[2]),d(u(d(u(c(ot,Gt),M[1]),d(u(c(tt,it),-T[1]),u(c(ft,et),w[1]))),-A[2]),u(d(u(c(K,nt),M[1]),d(u(c(tt,it),-A[1]),u(c(Tt,at),w[1]))),T[2]))),d(u(d(u(c(vt,Y),M[1]),d(u(c(ft,et),-A[1]),u(c(Tt,at),T[1]))),-w[2]),d(u(d(u(c(ot,Gt),M[1]),d(u(c(tt,it),-T[1]),u(c(ft,et),w[1]))),y[2]),u(d(u(c(ot,Gt),y[1]),d(u(c(J,O),-T[1]),u(c(ut,B),w[1]))),-M[2])))),d(d(u(d(u(c(tt,it),y[1]),d(u(c(J,O),-M[1]),u(c(G,U),w[1]))),T[2]),d(u(d(u(c(ft,et),y[1]),d(u(c(ut,B),-M[1]),u(c(G,U),T[1]))),-w[2]),u(d(u(c(vt,Y),M[1]),d(u(c(ft,et),-A[1]),u(c(Tt,at),T[1]))),y[2]))),d(u(d(u(c(vt,Y),y[1]),d(u(c(ut,B),-A[1]),u(c(Et,F),T[1]))),-M[2]),d(u(d(u(c(ft,et),y[1]),d(u(c(ut,B),-M[1]),u(c(G,U),T[1]))),A[2]),u(d(u(c(Tt,at),y[1]),d(u(c(Et,F),-M[1]),u(c(G,U),A[1]))),-T[2]))))),St=d(d(d(u(d(u(c(ot,Gt),A[1]),d(u(c(K,nt),-T[1]),u(c(vt,Y),w[1]))),y[2]),u(d(u(c(ot,Gt),y[1]),d(u(c(J,O),-T[1]),u(c(ut,B),w[1]))),-A[2])),d(u(d(u(c(K,nt),y[1]),d(u(c(J,O),-A[1]),u(c(Et,F),w[1]))),T[2]),u(d(u(c(vt,Y),y[1]),d(u(c(ut,B),-A[1]),u(c(Et,F),T[1]))),-w[2]))),d(d(u(d(u(c(K,nt),M[1]),d(u(c(tt,it),-A[1]),u(c(Tt,at),w[1]))),y[2]),u(d(u(c(K,nt),y[1]),d(u(c(J,O),-A[1]),u(c(Et,F),w[1]))),-M[2])),d(u(d(u(c(tt,it),y[1]),d(u(c(J,O),-M[1]),u(c(G,U),w[1]))),A[2]),u(d(u(c(Tt,at),y[1]),d(u(c(Et,F),-M[1]),u(c(G,U),A[1]))),-w[2])))),ct=c(N,St);return ct[ct.length-1]}return R}function x(d,c,S,u){function R(y,M,A,T,w,C){var U=d(d(S(y[0],y[0]),S(y[1],y[1])),d(S(y[2],y[2]),S(y[3],y[3]))),F=u(U,M[0]),B=u(U,A[0]),O=u(U,T[0]),k=u(U,w[0]),G=u(U,C[0]),at=d(d(S(M[0],M[0]),S(M[1],M[1])),d(S(M[2],M[2]),S(M[3],M[3]))),et=u(at,y[0]),it=u(at,A[0]),ht=u(at,T[0]),Et=u(at,w[0]),Tt=u(at,C[0]),Y=d(d(S(A[0],A[0]),S(A[1],A[1])),d(S(A[2],A[2]),S(A[3],A[3]))),nt=u(Y,y[0]),rt=u(Y,M[0]),ut=u(Y,T[0]),ft=u(Y,w[0]),vt=u(Y,C[0]),Gt=d(d(S(T[0],T[0]),S(T[1],T[1])),d(S(T[2],T[2]),S(T[3],T[3]))),At=u(Gt,y[0]),J=u(Gt,M[0]),tt=u(Gt,A[0]),K=u(Gt,w[0]),ot=u(Gt,C[0]),N=d(d(S(w[0],w[0]),S(w[1],w[1])),d(S(w[2],w[2]),S(w[3],w[3]))),St=u(N,y[0]),ct=u(N,M[0]),Mt=u(N,A[0]),st=u(N,T[0]),D=u(N,C[0]),P=d(d(S(C[0],C[0]),S(C[1],C[1])),d(S(C[2],C[2]),S(C[3],C[3]))),z=u(P,y[0]),W=u(P,M[0]),j=u(P,A[0]),$=u(P,T[0]),pt=u(P,w[0]),mt=d(d(d(u(d(d(u(d(u(c(pt,D),T[1]),d(u(c($,ot),-w[1]),u(c(st,K),C[1]))),A[2]),u(d(u(c(pt,D),A[1]),d(u(c(j,vt),-w[1]),u(c(Mt,ft),C[1]))),-T[2])),d(u(d(u(c($,ot),A[1]),d(u(c(j,vt),-T[1]),u(c(tt,ut),C[1]))),w[2]),u(d(u(c(st,K),A[1]),d(u(c(Mt,ft),-T[1]),u(c(tt,ut),w[1]))),-C[2]))),M[3]),d(u(d(d(u(d(u(c(pt,D),T[1]),d(u(c($,ot),-w[1]),u(c(st,K),C[1]))),M[2]),u(d(u(c(pt,D),M[1]),d(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-T[2])),d(u(d(u(c($,ot),M[1]),d(u(c(W,Tt),-T[1]),u(c(J,ht),C[1]))),w[2]),u(d(u(c(st,K),M[1]),d(u(c(ct,Et),-T[1]),u(c(J,ht),w[1]))),-C[2]))),-A[3]),u(d(d(u(d(u(c(pt,D),A[1]),d(u(c(j,vt),-w[1]),u(c(Mt,ft),C[1]))),M[2]),u(d(u(c(pt,D),M[1]),d(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-A[2])),d(u(d(u(c(j,vt),M[1]),d(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),w[2]),u(d(u(c(Mt,ft),M[1]),d(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),-C[2]))),T[3]))),d(d(u(d(d(u(d(u(c($,ot),A[1]),d(u(c(j,vt),-T[1]),u(c(tt,ut),C[1]))),M[2]),u(d(u(c($,ot),M[1]),d(u(c(W,Tt),-T[1]),u(c(J,ht),C[1]))),-A[2])),d(u(d(u(c(j,vt),M[1]),d(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),T[2]),u(d(u(c(tt,ut),M[1]),d(u(c(J,ht),-A[1]),u(c(rt,it),T[1]))),-C[2]))),-w[3]),u(d(d(u(d(u(c(st,K),A[1]),d(u(c(Mt,ft),-T[1]),u(c(tt,ut),w[1]))),M[2]),u(d(u(c(st,K),M[1]),d(u(c(ct,Et),-T[1]),u(c(J,ht),w[1]))),-A[2])),d(u(d(u(c(Mt,ft),M[1]),d(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),T[2]),u(d(u(c(tt,ut),M[1]),d(u(c(J,ht),-A[1]),u(c(rt,it),T[1]))),-w[2]))),C[3])),d(u(d(d(u(d(u(c(pt,D),T[1]),d(u(c($,ot),-w[1]),u(c(st,K),C[1]))),M[2]),u(d(u(c(pt,D),M[1]),d(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-T[2])),d(u(d(u(c($,ot),M[1]),d(u(c(W,Tt),-T[1]),u(c(J,ht),C[1]))),w[2]),u(d(u(c(st,K),M[1]),d(u(c(ct,Et),-T[1]),u(c(J,ht),w[1]))),-C[2]))),y[3]),u(d(d(u(d(u(c(pt,D),T[1]),d(u(c($,ot),-w[1]),u(c(st,K),C[1]))),y[2]),u(d(u(c(pt,D),y[1]),d(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-T[2])),d(u(d(u(c($,ot),y[1]),d(u(c(z,G),-T[1]),u(c(At,O),C[1]))),w[2]),u(d(u(c(st,K),y[1]),d(u(c(St,k),-T[1]),u(c(At,O),w[1]))),-C[2]))),-M[3])))),d(d(d(u(d(d(u(d(u(c(pt,D),M[1]),d(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),y[2]),u(d(u(c(pt,D),y[1]),d(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-M[2])),d(u(d(u(c(W,Tt),y[1]),d(u(c(z,G),-M[1]),u(c(et,F),C[1]))),w[2]),u(d(u(c(ct,Et),y[1]),d(u(c(St,k),-M[1]),u(c(et,F),w[1]))),-C[2]))),T[3]),u(d(d(u(d(u(c($,ot),M[1]),d(u(c(W,Tt),-T[1]),u(c(J,ht),C[1]))),y[2]),u(d(u(c($,ot),y[1]),d(u(c(z,G),-T[1]),u(c(At,O),C[1]))),-M[2])),d(u(d(u(c(W,Tt),y[1]),d(u(c(z,G),-M[1]),u(c(et,F),C[1]))),T[2]),u(d(u(c(J,ht),y[1]),d(u(c(At,O),-M[1]),u(c(et,F),T[1]))),-C[2]))),-w[3])),d(u(d(d(u(d(u(c(st,K),M[1]),d(u(c(ct,Et),-T[1]),u(c(J,ht),w[1]))),y[2]),u(d(u(c(st,K),y[1]),d(u(c(St,k),-T[1]),u(c(At,O),w[1]))),-M[2])),d(u(d(u(c(ct,Et),y[1]),d(u(c(St,k),-M[1]),u(c(et,F),w[1]))),T[2]),u(d(u(c(J,ht),y[1]),d(u(c(At,O),-M[1]),u(c(et,F),T[1]))),-w[2]))),C[3]),u(d(d(u(d(u(c($,ot),A[1]),d(u(c(j,vt),-T[1]),u(c(tt,ut),C[1]))),M[2]),u(d(u(c($,ot),M[1]),d(u(c(W,Tt),-T[1]),u(c(J,ht),C[1]))),-A[2])),d(u(d(u(c(j,vt),M[1]),d(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),T[2]),u(d(u(c(tt,ut),M[1]),d(u(c(J,ht),-A[1]),u(c(rt,it),T[1]))),-C[2]))),y[3]))),d(d(u(d(d(u(d(u(c($,ot),A[1]),d(u(c(j,vt),-T[1]),u(c(tt,ut),C[1]))),y[2]),u(d(u(c($,ot),y[1]),d(u(c(z,G),-T[1]),u(c(At,O),C[1]))),-A[2])),d(u(d(u(c(j,vt),y[1]),d(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),T[2]),u(d(u(c(tt,ut),y[1]),d(u(c(At,O),-A[1]),u(c(nt,B),T[1]))),-C[2]))),-M[3]),u(d(d(u(d(u(c($,ot),M[1]),d(u(c(W,Tt),-T[1]),u(c(J,ht),C[1]))),y[2]),u(d(u(c($,ot),y[1]),d(u(c(z,G),-T[1]),u(c(At,O),C[1]))),-M[2])),d(u(d(u(c(W,Tt),y[1]),d(u(c(z,G),-M[1]),u(c(et,F),C[1]))),T[2]),u(d(u(c(J,ht),y[1]),d(u(c(At,O),-M[1]),u(c(et,F),T[1]))),-C[2]))),A[3])),d(u(d(d(u(d(u(c(j,vt),M[1]),d(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),y[2]),u(d(u(c(j,vt),y[1]),d(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),-M[2])),d(u(d(u(c(W,Tt),y[1]),d(u(c(z,G),-M[1]),u(c(et,F),C[1]))),A[2]),u(d(u(c(rt,it),y[1]),d(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-C[2]))),-T[3]),u(d(d(u(d(u(c(tt,ut),M[1]),d(u(c(J,ht),-A[1]),u(c(rt,it),T[1]))),y[2]),u(d(u(c(tt,ut),y[1]),d(u(c(At,O),-A[1]),u(c(nt,B),T[1]))),-M[2])),d(u(d(u(c(J,ht),y[1]),d(u(c(At,O),-M[1]),u(c(et,F),T[1]))),A[2]),u(d(u(c(rt,it),y[1]),d(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-T[2]))),C[3]))))),Ot=d(d(d(u(d(d(u(d(u(c(pt,D),T[1]),d(u(c($,ot),-w[1]),u(c(st,K),C[1]))),A[2]),u(d(u(c(pt,D),A[1]),d(u(c(j,vt),-w[1]),u(c(Mt,ft),C[1]))),-T[2])),d(u(d(u(c($,ot),A[1]),d(u(c(j,vt),-T[1]),u(c(tt,ut),C[1]))),w[2]),u(d(u(c(st,K),A[1]),d(u(c(Mt,ft),-T[1]),u(c(tt,ut),w[1]))),-C[2]))),y[3]),d(u(d(d(u(d(u(c(pt,D),T[1]),d(u(c($,ot),-w[1]),u(c(st,K),C[1]))),y[2]),u(d(u(c(pt,D),y[1]),d(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-T[2])),d(u(d(u(c($,ot),y[1]),d(u(c(z,G),-T[1]),u(c(At,O),C[1]))),w[2]),u(d(u(c(st,K),y[1]),d(u(c(St,k),-T[1]),u(c(At,O),w[1]))),-C[2]))),-A[3]),u(d(d(u(d(u(c(pt,D),A[1]),d(u(c(j,vt),-w[1]),u(c(Mt,ft),C[1]))),y[2]),u(d(u(c(pt,D),y[1]),d(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-A[2])),d(u(d(u(c(j,vt),y[1]),d(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),w[2]),u(d(u(c(Mt,ft),y[1]),d(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-C[2]))),T[3]))),d(d(u(d(d(u(d(u(c($,ot),A[1]),d(u(c(j,vt),-T[1]),u(c(tt,ut),C[1]))),y[2]),u(d(u(c($,ot),y[1]),d(u(c(z,G),-T[1]),u(c(At,O),C[1]))),-A[2])),d(u(d(u(c(j,vt),y[1]),d(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),T[2]),u(d(u(c(tt,ut),y[1]),d(u(c(At,O),-A[1]),u(c(nt,B),T[1]))),-C[2]))),-w[3]),u(d(d(u(d(u(c(st,K),A[1]),d(u(c(Mt,ft),-T[1]),u(c(tt,ut),w[1]))),y[2]),u(d(u(c(st,K),y[1]),d(u(c(St,k),-T[1]),u(c(At,O),w[1]))),-A[2])),d(u(d(u(c(Mt,ft),y[1]),d(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),T[2]),u(d(u(c(tt,ut),y[1]),d(u(c(At,O),-A[1]),u(c(nt,B),T[1]))),-w[2]))),C[3])),d(u(d(d(u(d(u(c(pt,D),A[1]),d(u(c(j,vt),-w[1]),u(c(Mt,ft),C[1]))),M[2]),u(d(u(c(pt,D),M[1]),d(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-A[2])),d(u(d(u(c(j,vt),M[1]),d(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),w[2]),u(d(u(c(Mt,ft),M[1]),d(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),-C[2]))),y[3]),u(d(d(u(d(u(c(pt,D),A[1]),d(u(c(j,vt),-w[1]),u(c(Mt,ft),C[1]))),y[2]),u(d(u(c(pt,D),y[1]),d(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-A[2])),d(u(d(u(c(j,vt),y[1]),d(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),w[2]),u(d(u(c(Mt,ft),y[1]),d(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-C[2]))),-M[3])))),d(d(d(u(d(d(u(d(u(c(pt,D),M[1]),d(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),y[2]),u(d(u(c(pt,D),y[1]),d(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-M[2])),d(u(d(u(c(W,Tt),y[1]),d(u(c(z,G),-M[1]),u(c(et,F),C[1]))),w[2]),u(d(u(c(ct,Et),y[1]),d(u(c(St,k),-M[1]),u(c(et,F),w[1]))),-C[2]))),A[3]),u(d(d(u(d(u(c(j,vt),M[1]),d(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),y[2]),u(d(u(c(j,vt),y[1]),d(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),-M[2])),d(u(d(u(c(W,Tt),y[1]),d(u(c(z,G),-M[1]),u(c(et,F),C[1]))),A[2]),u(d(u(c(rt,it),y[1]),d(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-C[2]))),-w[3])),d(u(d(d(u(d(u(c(Mt,ft),M[1]),d(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),y[2]),u(d(u(c(Mt,ft),y[1]),d(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-M[2])),d(u(d(u(c(ct,Et),y[1]),d(u(c(St,k),-M[1]),u(c(et,F),w[1]))),A[2]),u(d(u(c(rt,it),y[1]),d(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-w[2]))),C[3]),u(d(d(u(d(u(c(st,K),A[1]),d(u(c(Mt,ft),-T[1]),u(c(tt,ut),w[1]))),M[2]),u(d(u(c(st,K),M[1]),d(u(c(ct,Et),-T[1]),u(c(J,ht),w[1]))),-A[2])),d(u(d(u(c(Mt,ft),M[1]),d(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),T[2]),u(d(u(c(tt,ut),M[1]),d(u(c(J,ht),-A[1]),u(c(rt,it),T[1]))),-w[2]))),y[3]))),d(d(u(d(d(u(d(u(c(st,K),A[1]),d(u(c(Mt,ft),-T[1]),u(c(tt,ut),w[1]))),y[2]),u(d(u(c(st,K),y[1]),d(u(c(St,k),-T[1]),u(c(At,O),w[1]))),-A[2])),d(u(d(u(c(Mt,ft),y[1]),d(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),T[2]),u(d(u(c(tt,ut),y[1]),d(u(c(At,O),-A[1]),u(c(nt,B),T[1]))),-w[2]))),-M[3]),u(d(d(u(d(u(c(st,K),M[1]),d(u(c(ct,Et),-T[1]),u(c(J,ht),w[1]))),y[2]),u(d(u(c(st,K),y[1]),d(u(c(St,k),-T[1]),u(c(At,O),w[1]))),-M[2])),d(u(d(u(c(ct,Et),y[1]),d(u(c(St,k),-M[1]),u(c(et,F),w[1]))),T[2]),u(d(u(c(J,ht),y[1]),d(u(c(At,O),-M[1]),u(c(et,F),T[1]))),-w[2]))),A[3])),d(u(d(d(u(d(u(c(Mt,ft),M[1]),d(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),y[2]),u(d(u(c(Mt,ft),y[1]),d(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-M[2])),d(u(d(u(c(ct,Et),y[1]),d(u(c(St,k),-M[1]),u(c(et,F),w[1]))),A[2]),u(d(u(c(rt,it),y[1]),d(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-w[2]))),-T[3]),u(d(d(u(d(u(c(tt,ut),M[1]),d(u(c(J,ht),-A[1]),u(c(rt,it),T[1]))),y[2]),u(d(u(c(tt,ut),y[1]),d(u(c(At,O),-A[1]),u(c(nt,B),T[1]))),-M[2])),d(u(d(u(c(J,ht),y[1]),d(u(c(At,O),-M[1]),u(c(et,F),T[1]))),A[2]),u(d(u(c(rt,it),y[1]),d(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-T[2]))),w[3]))))),Vt=c(mt,Ot);return Vt[Vt.length-1]}return R}var b=[l,h,f];function _(d){var c=b[d.length];return c||(c=b[d.length]=a(d.length)),c.apply(void 0,d)}function v(d,c,S,u,R,y,M,A){function T(w,C,U,F,B,O){switch(arguments.length){case 0:case 1:return 0;case 2:return u(w,C);case 3:return R(w,C,U);case 4:return y(w,C,U,F);case 5:return M(w,C,U,F,B);case 6:return A(w,C,U,F,B,O)}for(var k=new Array(arguments.length),G=0;G<arguments.length;++G)k[G]=arguments[G];return d(k)}return T}function E(){for(;b.length<=o;)b.push(a(b.length));t.exports=v.apply(void 0,[_].concat(b));for(var d=0;d<=o;++d)t.exports[d]=b[d]}E()}}),jS=tn({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=KS()[4];sa(),t.exports=r;function n(s,o,a,l,h,f){var g=o.opposite(l,h);if(!(g<0)){if(h<l){var p=l;l=h,h=p,p=f,f=g,g=p}o.isConstraint(l,h)||e(s[l],s[h],s[f],s[g])<0&&a.push(l,h)}}function r(s,o){for(var a=[],l=s.length,h=o.stars,f=0;f<l;++f)for(var g=h[f],p=1;p<g.length;p+=2){var m=g[p];if(!(m<f)&&!o.isConstraint(f,m)){for(var x=g[p-1],b=-1,_=1;_<g.length;_+=2)if(g[_-1]===m){b=g[_];break}b<0||e(s[f],s[m],s[x],s[b])<0&&a.push(f,m)}}for(;a.length>0;){for(var m=a.pop(),f=a.pop(),x=-1,b=-1,g=h[f],v=1;v<g.length;v+=2){var E=g[v-1],d=g[v];E===m?b=d:d===m&&(x=E)}x<0||b<0||e(s[f],s[m],s[x],s[b])>=0||(o.flip(f,m),n(s,o,a,x,f,b),n(s,o,a,f,b,x),n(s,o,a,b,m,x),n(s,o,a,m,x,b))}}}}),QS=tn({"node_modules/cdt2d/lib/filter.js"(i,t){var e=sa();t.exports=l;function n(h,f,g,p,m,x,b){this.cells=h,this.neighbor=f,this.flags=p,this.constraint=g,this.active=m,this.next=x,this.boundary=b}var r=n.prototype;function s(h,f){return h[0]-f[0]||h[1]-f[1]||h[2]-f[2]}r.locate=(function(){var h=[0,0,0];return function(f,g,p){var m=f,x=g,b=p;return g<p?g<f&&(m=g,x=p,b=f):p<f&&(m=p,x=f,b=g),m<0?-1:(h[0]=m,h[1]=x,h[2]=b,e.eq(this.cells,h,s))}})();function o(h,f){for(var g=h.cells(),p=g.length,m=0;m<p;++m){var x=g[m],b=x[0],_=x[1],v=x[2];_<v?_<b&&(x[0]=_,x[1]=v,x[2]=b):v<b&&(x[0]=v,x[1]=b,x[2]=_)}g.sort(s);for(var E=new Array(p),m=0;m<E.length;++m)E[m]=0;var d=[],c=[],S=new Array(3*p),u=new Array(3*p),R=null;f&&(R=[]);for(var y=new n(g,S,u,E,d,c,R),m=0;m<p;++m)for(var x=g[m],M=0;M<3;++M){var b=x[M],_=x[(M+1)%3],A=S[3*m+M]=y.locate(_,b,h.opposite(_,b)),T=u[3*m+M]=h.isConstraint(b,_);A<0&&(T?c.push(m):(d.push(m),E[m]=1),f&&R.push([_,b,-1]))}return y}function a(h,f,g){for(var p=0,m=0;m<h.length;++m)f[m]===g&&(h[p++]=h[m]);return h.length=p,h}function l(h,f,g){var p=o(h,g);if(f===0)return g?p.cells.concat(p.boundary):p.cells;for(var m=1,x=p.active,b=p.next,_=p.flags,v=p.cells,E=p.constraint,d=p.neighbor;x.length>0||b.length>0;){for(;x.length>0;){var c=x.pop();if(_[c]!==-m){_[c]=m,v[c];for(var S=0;S<3;++S){var u=d[3*c+S];u>=0&&_[u]===0&&(E[3*c+S]?b.push(u):(x.push(u),_[u]=m))}}}var R=b;b=x,x=R,b.length=0,m=-m}var y=a(v,_,f);return g?y.concat(p.boundary):y}}}),tM=tn({"node_modules/cdt2d/cdt2d.js"(i,t){var e=ZS(),n=JS(),r=jS(),s=QS();t.exports=f;function o(g){return[Math.min(g[0],g[1]),Math.max(g[0],g[1])]}function a(g,p){return g[0]-p[0]||g[1]-p[1]}function l(g){return g.map(o).sort(a)}function h(g,p,m){return p in g?g[p]:m}function f(g,p,m){Array.isArray(p)?(m=m||{},p=p||[]):(m=p||{},p=[]);var x=!!h(m,"delaunay",!0),b=!!h(m,"interior",!0),_=!!h(m,"exterior",!0),v=!!h(m,"infinity",!1);if(!b&&!_||g.length===0)return[];var E=e(g,p);if(x||b!==_||v){for(var d=n(g.length,l(p)),c=0;c<E.length;++c){var S=E[c];d.addTriangle(S[0],S[1],S[2])}return x&&r(g,d),_?b?v?s(d,0,v):d.cells():s(d,1,v):s(d,-1)}else return E}}});const eM=tM();class Gi{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Jh=1e-16,nM=1e-16,Oi=new L,Kh=new L,jh=new Gi(()=>({param:0,index:0})),iM=new Gi(()=>new L);function rM(i,t,e,n){jh.clear(),t.length=0,e.length=0;for(let h=0,f=i.length;h<f;h++){const g=i[h];l(g.start),l(g.end)}for(let h=0,f=i.length;h<f;h++){const g=i[h];for(let p=h+1;p<f;p++){const m=i[p];g.distanceSqToLine3(m,Oi,Kh)<Jh*n&&l(Kh)}}const r=[];for(let h=0,f=i.length;h<f;h++){r.length=0;const g=i[h];for(let p=0,m=t.length;p<m;p++){const x=t[p],b=g.closestPointToPointParameter(x,!0);if(g.at(b,Oi),x.distanceToSquared(Oi)<Jh*n){const _=jh.getInstance();_.param=b,_.index=p,r.push(_)}}r.sort(a);for(let p=0,m=r.length-1;p<m;p++){const x=r[p].index,b=r[p+1].index;x!==b&&e.push([x,b])}}const s=new Set;let o=0;for(let h=0,f=e.length;h<f;h++){const g=e[h],p=Math.min(g[0],g[1]),m=Math.max(g[0],g[1]),x=p+","+m;s.has(x)||(s.add(x),e[o++]=g)}e.length=o;function a(h,f){return h.param-f.param}function l(h){for(let f=0;f<t.length;f++){const g=t[f];if(h===g||h.distanceToSquared(g)<nM*n)return f}return t.push(iM.getInstance().copy(h)),t.length-1}}class Qh{constructor(){this.trianglePool=new Gi(()=>new qe),this.linePool=new Gi(()=>new Ae),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new L,this.projOrigin=new L,this.projU=new L,this.projV=new L,this.baseTri=new qe,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:l,projOrigin:h,constrainedEdges:f,linePool:g,baseIndices:p}=this;t.getNormal(s),o.copy(t),o.update(),p[0]=e,p[1]=n,p[2]=r,f.length=0;const m=g.getInstance();m.start.copy(o.a),m.end.copy(o.b);const x=g.getInstance();x.start.copy(o.b),x.end.copy(o.c);const b=g.getInstance();b.start.copy(o.c),b.end.copy(o.a),f.push(m,x,b),h.copy(o.a),a.subVectors(o.b,o.a).normalize(),l.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Oi.subVectors(t,n),e.set(Oi.dot(r),Oi.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:l}=this;t.length=0,e.clear();const h=[];for(let v=0,E=a.length;v<E;v++){const d=a[v],c=s.getInstance();this._to2D(d.start,c.start),this._to2D(d.end,c.end),h.push(c)}let f=0;for(let v=0;v<3;v++){const E=this._to2D(o.points[v],Oi);f=Math.max(f,Math.abs(E.x),Math.abs(E.y))}const g=[],p=[];rM(h,g,p,f);const m=[];for(let v=0,E=g.length;v<E;v++){const d=g[v];m.push([d.x,d.y])}const x=eM(m,p,{exterior:!1}),b=new Map;for(let v=0,E=p.length;v<E;v++){const d=p[v];b.set(`${d[0]}_${d[1]}`,-1),b.set(`${d[1]}_${d[0]}`,-1)}const _=`${l[0]}_${l[1]}_${l[2]}_`;for(let v=0,E=x.length;v<E;v++){const d=x[v],[c,S,u]=d,R=e.getInstance();this._from2D(m[c][0],m[c][1],R.a),this._from2D(m[S][0],m[S][1],R.b),this._from2D(m[u][0],m[u][1],R.c),t.push(R);const y=[];n.push(y);const M=[];r.push(M);for(let A=0;A<3;A++){const T=d[A];M.push(T<3?l[T]:_+T);const w=d[(A+1)%3],C=`${T}_${w}`;if(b.has(C)){const U=b.get(C);U!==-1&&(y.push(U),n[U].push(v))}else{const U=`${w}_${T}`;b.set(U,v)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const sM=1e-14,sc=new L,tf=new L,ef=new L;function fi(i,t=sM){sc.subVectors(i.b,i.a),tf.subVectors(i.c,i.a),ef.subVectors(i.b,i.c);const e=sc.angleTo(tf),n=sc.angleTo(ef),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const oc=1e-10,ts=1e-10,Vn=new Ae,pe=new Ae,Hn=new L,nf=new L,rf=new L,Mo=new pn,ac=new qe;class sf{constructor(){this.trianglePool=new Gi(()=>new ce),this.triangles=[],this.normal=new L}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Hn).dot(r))>oc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=n.getInstance();l.copy(a),e.push(l)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],l=r[o];t.getNormal(nf).normalize(),Hn.subVectors(l,a).normalize(),rf.crossVectors(nf,Hn),Mo.setFromNormalAndCoplanarPoint(rf,a),this.splitByPlane(Mo,t)}}else t.getPlane(Mo),this.splitByPlane(Mo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;ac.copy(e),ac.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!ac.intersectsTriangle(a,Vn,!0))continue;const{a:l,b:h,c:f}=a;let g=0,p=-1,m=!1,x=[],b=[];const _=[l,h,f];for(let v=0;v<3;v++){const E=(v+1)%3;Vn.start.copy(_[v]),Vn.end.copy(_[E]);const d=t.distanceToPoint(Vn.start),c=t.distanceToPoint(Vn.end);if(Math.abs(d)<ts&&Math.abs(c)<ts){m=!0;break}if(d>0?x.push(v):b.push(v),Math.abs(d)<ts)continue;let S=!!t.intersectLine(Vn,Hn);!S&&Math.abs(c)<ts&&(Hn.copy(Vn.end),S=!0),S&&!(Hn.distanceTo(Vn.start)<oc)&&(Hn.distanceTo(Vn.end)<oc&&(p=v),g===0?pe.start.copy(Hn):pe.end.copy(Hn),g++)}if(!m&&g===2&&pe.distance()>ts)if(p!==-1){p=(p+1)%3;let v=0;v===p&&(v=(v+1)%3);let E=v+1;E===p&&(E=(E+1)%3);const d=r.getInstance();d.a.copy(_[E]),d.b.copy(pe.end),d.c.copy(pe.start),fi(d)||n.push(d),a.a.copy(_[v]),a.b.copy(pe.start),a.c.copy(pe.end),fi(a)&&(n.splice(s,1),s--,o--)}else{const v=x.length>=2?b[0]:x[0];if(v===0){let u=pe.start;pe.start=pe.end,pe.end=u}const E=(v+1)%3,d=(v+2)%3,c=r.getInstance(),S=r.getInstance();_[E].distanceToSquared(pe.start)<_[d].distanceToSquared(pe.end)?(c.a.copy(_[E]),c.b.copy(pe.start),c.c.copy(pe.end),S.a.copy(_[E]),S.b.copy(_[d]),S.c.copy(pe.start)):(c.a.copy(_[d]),c.b.copy(pe.start),c.c.copy(pe.end),S.a.copy(_[E]),S.b.copy(_[d]),S.c.copy(pe.end)),a.a.copy(_[v]),a.b.copy(pe.end),a.c.copy(pe.start),fi(c)||n.push(c),fi(S)||n.push(S),fi(a)&&(n.splice(s,1),s--,o--)}else g===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class of{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const Pd=0,Id=1,oM=2,aM=3,cM=4,Dd=5,Ld=6,cc=1e-10,lM=1e-15,uM=1e-10,hM=1e-10,af=new Ae,_r=new Ae,cf=new L,lf=new L,uf=new L,lc=new pn,Tr=new L,Jo=new L;function fM(i,t){i.getNormal(Tr),t.getNormal(Jo);const e=Tr.dot(Jo);if(Math.abs(1-Math.abs(e))>=uM)return!1;const n=Tr.dot(i.a),r=Tr.dot(t.a);return Math.abs(n-r)<hM}function hf(i,t,e,n){let r=0,s=1;i.delta(cf);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const l=o[a],h=o[(a+1)%3];lf.subVectors(h,l),uf.crossVectors(e,lf),lc.setFromNormalAndCoplanarPoint(uf,l);const f=lc.distanceToPoint(i.start),g=lc.normal.dot(cf);if(Math.abs(g)<lM){if(f<-cc)return null;continue}const p=-f/g;if(g>0?r=Math.max(r,p):s=Math.min(s,p),r>s+cc)return null}return s-r<cc?null:(i.at(r,n.start),i.at(s,n.end),n)}function ff(i,t,e){let n=0;i.getNormal(Tr),t.getNormal(Jo);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){_r.start.copy(r[o]),_r.end.copy(r[(o+1)%3]);const a=hf(_r,i,Tr,af);a!==null&&(n>=e.length&&e.push(new Ae),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){_r.start.copy(s[o]),_r.end.copy(s[(o+1)%3]);const a=hf(_r,t,Jo,af);a!==null&&(n>=e.length&&e.push(new Ae),e[n].copy(a),n++)}return n}const xr=new ws,df=new Jt,Eo=new Ae,uc=[],bo=new Gi(()=>new Ae),Sr=-1,Mr=1,Bo=-2,zo=2,hs=0,Ci=1,Zl=2;let Vo=null;function pf(i){Vo=i}function Ud(i,t,e=null){i.getMidpoint(xr.origin),i.getNormal(xr.direction),e&&(xr.origin.applyMatrix4(e),xr.direction.transformDirection(e));const n=t.raycastFirst(xr,mn);return!!(n&&xr.direction.dot(n.face.normal)>0)?Sr:Mr}function dM(i,t){const e=new of,n=new of;return bo.clear(),df.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,df,{intersectsTriangles(r,s,o,a){if(!fi(r)&&!fi(s)){const h=(fM(r,s)?ff(r,s,uc):0)>2;if(h||r.intersectsTriangle(s,Eo,!0)){const g=i.geometry.boundsTree.resolveTriangleIndex(o),p=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(g,p,h),n.add(p,g,h),h){const m=ff(r,s,uc);for(let x=0;x<m;x++){const b=bo.getInstance().copy(uc[x]);e.addIntersectionEdge(g,b),n.addIntersectionEdge(p,b)}}else{const m=bo.getInstance().copy(Eo),x=bo.getInstance().copy(Eo);e.addIntersectionEdge(g,m),n.addIntersectionEdge(p,x)}Vo&&(Vo.addEdge(Eo),Vo.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Nd(i,t,e=!1){switch(i){case Pd:if(t===Mr||t===zo&&!e)return Ci;break;case Id:if(e){if(t===Sr)return hs}else if(t===Mr||t===Bo)return Ci;break;case oM:if(e){if(t===Mr||t===Bo)return Ci}else if(t===Sr)return hs;break;case cM:if(t===Sr)return hs;if(t===Mr)return Ci;break;case aM:if(t===Sr||t===zo&&!e)return Ci;break;case Dd:if(!e&&(t===Mr||t===Bo))return Ci;break;case Ld:if(!e&&(t===Sr||t===zo))return Ci;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Zl}class pM{constructor(t){this.triangle=new ce().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ce().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class gf{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new pM(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const l=n[a].intersects;for(const h in l)r.has(h)||(r.add(h),s.push(l[h]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class gM{constructor(){this.enabled=!1,this.triangleIntersectsA=new gf,this.triangleIntersectsB=new gf,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),pf(this))}complete(){this.enabled&&pf(null)}}const Ke=new Jt,Ri=new Jt,Xe=new Jt,li=new $t,hn=new ce,Pi=new ce,fn=new ce,ai=new ce,Bi=[],En=[],To=new Set,mf=new L,_f=new L,xf=new Gi(()=>new ce),vf=new L,Ao=[];function mM(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=dM(i,t),h=[];let f=null,g;return g=o?0:-1,Sf(i,t,a,e,!1,r,g),yf(i,t,a,e,!1,n,r,g),e.findIndex(m=>m!==Ld&&m!==Dd)!==-1&&(r.forEach(m=>m.clearIndexMap()),g=o?i.geometry.groups.length||1:-1,Sf(t,i,l,e,!0,r,g),yf(t,i,l,e,!0,n,r,g)),r.forEach(m=>m.clearIndexMap()),Bi.length=0,{groups:h,materials:f}}function yf(i,t,e,n,r,s,o,a=0){Ke.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Ri.copy(Ke).invert(),r?Xe.copy(Ke):Xe.identity();const l=Xe.determinant()<0;li.getNormalMatrix(Xe).multiplyScalar(l?-1:1);const h=i.geometry.groupIndices,f=i.geometry.index,g=i.geometry.attributes.position,p=t.geometry.boundsTree,m=t.geometry.index,x=t.geometry.attributes.position,b=e.ids;for(let _=0,v=b.length;_<v;_++){const E=b[_],d=a===-1?0:h[E]+a,c=3*E;let S=c+0,u=c+1,R=c+2;f&&(S=f.getX(S),u=f.getX(u),R=f.getX(R)),hn.a.fromBufferAttribute(g,S),hn.b.fromBufferAttribute(g,u),hn.c.fromBufferAttribute(g,R),r&&(hn.a.applyMatrix4(Ke),hn.b.applyMatrix4(Ke),hn.c.applyMatrix4(Ke)),s.reset(),s.initialize(hn,S,u,R),Ao.length=0,xf.clear(),hn.getNormal(_f);const y=e.coplanarSet.get(E);if(y)for(const w of y){const C=3*w;let U=C+0,F=C+1,B=C+2;m&&(U=m.getX(U),F=m.getX(F),B=m.getX(B));const O=xf.getInstance();O.a.fromBufferAttribute(x,U),O.b.fromBufferAttribute(x,F),O.c.fromBufferAttribute(x,B),r||(O.a.applyMatrix4(Ri),O.b.applyMatrix4(Ri),O.c.applyMatrix4(Ri)),Ao.push(O)}if(s.addConstraintEdge){const w=e.getIntersectionEdges(E);if(w)for(const C of w)s.addConstraintEdge(C);s.triangulate()}else{const C=e.intersectionSet.get(E);for(let U=0,F=C.length;U<F;U++){const B=C[U],O=y&&y.has(B),k=3*B;let G=k+0,at=k+1,et=k+2;m&&(G=m.getX(G),at=m.getX(at),et=m.getX(et)),Pi.a.fromBufferAttribute(x,G),Pi.b.fromBufferAttribute(x,at),Pi.c.fromBufferAttribute(x,et),r||(Pi.a.applyMatrix4(Ri),Pi.b.applyMatrix4(Ri),Pi.c.applyMatrix4(Ri)),s.splitByTriangle(Pi,O)}}const{triangles:M,triangleIndices:A=[],triangleConnectivity:T=[]}=s;for(let w=0,C=o.length;w<C;w++)o[w].initInterpolatedAttributeData(i.geometry,Xe,li,S,u,R);To.clear();for(let w=0,C=M.length;w<C;w++){if(To.has(w))continue;const U=M[w],F=r?null:Ke;let B=null;U.getMidpoint(mf);for(let O=0,k=Ao.length;O<k;O++){const G=Ao[O];if(G.containsPoint(mf)){G.getNormal(vf),B=_f.dot(vf)>0?zo:Bo;break}}B===null&&(B=Ud(U,p,F)),Bi.length=0,En.length=0;for(let O=0,k=n.length;O<k;O++){const G=Nd(n[O],B,r);G!==Zl&&(Bi.push(G),En.push(o[O]))}if(En.length!==0){const O=[w];for(;O.length>0;){const k=O.pop();if(To.has(k))continue;To.add(k);const G=A[k];let at=null,et=null,it=null;G&&(at=G[0],et=G[1],it=G[2]);const ht=M[k];hn.getBarycoord(ht.a,ai.a),hn.getBarycoord(ht.b,ai.b),hn.getBarycoord(ht.c,ai.c);for(let Et=0,Tt=En.length;Et<Tt;Et++){const Y=En[Et],rt=Bi[Et]===hs,ut=l!==rt;Y.appendInterpolatedAttributeData(d,ai.a,at,ut),ut?(Y.appendInterpolatedAttributeData(d,ai.c,it,ut),Y.appendInterpolatedAttributeData(d,ai.b,et,ut)):(Y.appendInterpolatedAttributeData(d,ai.b,et,ut),Y.appendInterpolatedAttributeData(d,ai.c,it,ut))}}}}}return b.length}function Sf(i,t,e,n,r,s,o=0){Ke.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?Xe.copy(Ke):Xe.identity();const a=Xe.determinant()<0;li.getNormalMatrix(Xe).multiplyScalar(a?-1:1);const l=t.geometry.boundsTree,h=i.geometry.groupIndices,f=i.geometry.index,p=i.geometry.attributes.position,m=[],x=i.geometry.halfEdges,b=new Set(e.ids),_=ql(i.geometry);for(let v=0;v<_&&b.size!==_;v++){if(b.has(v))continue;b.add(v),m.push(v);const E=3*v;let d=E+0,c=E+1,S=E+2;f&&(d=f.getX(d),c=f.getX(c),S=f.getX(S)),fn.a.fromBufferAttribute(p,d),fn.b.fromBufferAttribute(p,c),fn.c.fromBufferAttribute(p,S),r&&(fn.a.applyMatrix4(Ke),fn.b.applyMatrix4(Ke),fn.c.applyMatrix4(Ke));const u=Ud(fn,l,r?null:Ke);Bi.length=0,En.length=0;for(let R=0,y=n.length;R<y;R++){const M=Nd(n[R],u,r);M!==Zl&&(Bi.push(M),En.push(s[R]))}for(;m.length>0;){const R=m.pop();for(let y=0;y<3;y++){const M=x.getSiblingTriangleIndex(R,y);M!==-1&&!b.has(M)&&(m.push(M),b.add(M))}if(En.length!==0){const y=3*R;let M=y+0,A=y+1,T=y+2;f&&(M=f.getX(M),A=f.getX(A),T=f.getX(T));const w=o===-1?0:h[R]+o;if(fn.a.fromBufferAttribute(p,M),fn.b.fromBufferAttribute(p,A),fn.c.fromBufferAttribute(p,T),!fi(fn))for(let C=0,U=En.length;C<U;C++){const F=En[C],k=Bi[C]===hs!==a;F.appendIndexFromGeometry(i.geometry,Xe,li,w,M,k),k?(F.appendIndexFromGeometry(i.geometry,Xe,li,w,T,k),F.appendIndexFromGeometry(i.geometry,Xe,li,w,A,k)):(F.appendIndexFromGeometry(i.geometry,Xe,li,w,A,k),F.appendIndexFromGeometry(i.geometry,Xe,li,w,T,k))}}}}}function _M(i){return i=~~i,i+4-i%4}class xM{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Ad()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(_M(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const We=new L,hc=new L,fc=new L,dc=new L,wo=new oe,vM=new oe,yM=new oe,SM=new oe;function MM(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Mf(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class pc extends xM{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class EM{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=r[a],h=l.array.constructor;n[a]||(n[a]=new pc(h)),n[a].setType(h),n[a].itemSize=l.itemSize,n[a].normalized=l.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:l}=this,{attributes:h}=t;for(const f in a){const g=h[f];if(!g)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let p,m,x;if(f==="position"?(p=hc.fromBufferAttribute(g,r).applyMatrix4(e),m=fc.fromBufferAttribute(g,s).applyMatrix4(e),x=dc.fromBufferAttribute(g,o).applyMatrix4(e)):f==="normal"?(p=hc.fromBufferAttribute(g,r).applyNormalMatrix(n),m=fc.fromBufferAttribute(g,s).applyNormalMatrix(n),x=dc.fromBufferAttribute(g,o).applyNormalMatrix(n)):f==="tangent"?(p=hc.fromBufferAttribute(g,r).transformDirection(e),m=fc.fromBufferAttribute(g,s).transformDirection(e),x=dc.fromBufferAttribute(g,o).transformDirection(e)):(p=vM.fromBufferAttribute(g,r),m=yM.fromBufferAttribute(g,s),x=SM.fromBufferAttribute(g,o)),!l[f])l[f]=[p.clone(),m.clone(),x.clone()];else{const b=l[f];b[0].copy(p),b[1].copy(m),b[2].copy(x)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:l,invertedIndexMap:h}=this;for(;s.length<=t;)s.push(new pc(Uint32Array));const f=r?h:l,g=s[t];if(n!==null&&f.has(n))g.push(f.get(n));else{f.set(n,o.position.count),g.push(o.position.count);for(const p in a){const m=o[p],x=p==="normal"||p==="tangent",b=r&&x,_=m.itemSize,[v,E,d]=a[p];MM(v,E,d,e,wo,x,b),Mf(wo,_,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:l,forwardIndexMap:h,invertedIndexMap:f}=this;for(;a.length<=r;)a.push(new pc(Uint32Array));const g=o?f:h,p=a[r];if(s!==null&&g.has(s))p.push(g.get(s));else{g.set(s,l.position.count),p.push(l.position.count);const{attributes:m}=t;for(const x in l){const b=l[x],_=m[x];if(!_)throw new Error(`CSG Operations: Attribute ${x} not available on geometry.`);const v=_.itemSize;x==="position"?(We.fromBufferAttribute(_,s).applyMatrix4(e),b.push(We.x,We.y,We.z)):x==="normal"?(We.fromBufferAttribute(_,s).applyNormalMatrix(n),o&&We.multiplyScalar(-1),b.push(We.x,We.y,We.z)):x==="tangent"?(We.fromBufferAttribute(_,s).transformDirection(e),o&&We.multiplyScalar(-1),b.push(We.x,We.y,We.z)):(wo.fromBufferAttribute(_,s),Mf(wo,v,b))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const f in s){const g=s[f],{type:p,itemSize:m,normalized:x,length:b,count:_}=g,v=g.array.buffer;let E=o[f];(!E||E.count<_||E.array.type!==p)&&(E=new He(new p(b),m,x),t.setAttribute(f,E),n=!0),E.array.set(new p(v,0,b),0),E.needsUpdate=!0}const l=r.reduce((f,g)=>g.count+f,0);(!t.index||a.count<l||a.array.type!==Uint32Array)&&(t.setIndex(new He(new Uint32Array(l),1)),n=!0),t.clearGroups();let h=0;for(let f=0,g=Math.min(e.length,r.length);f<g;f++){const{index:p,materialIndex:m}=e[f],{count:x}=r[p],b=r[p].array.buffer;x!==0&&(t.index.array.set(new Uint32Array(b,0,x),h),t.addGroup(h,x,m),h+=x)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function bM(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function TM(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function AM(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function wM(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function Ef(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class CM{get useCDTClipping(){return this.triangleSplitter instanceof Qh}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Qh:new sf)}constructor(){this.triangleSplitter=new sf,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new gM}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new Zo){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:l,useGroups:h,consolidateGroups:f,removeUnusedMaterials:g,debug:p}=this;for(;a.length<r.length;)a.push(new EM);r.forEach((d,c)=>{a[c].initFromGeometry(t.geometry,l),bM(d.geometry,l)}),p.init(),mM(t,e,n,o,a,{useGroups:h}),p.complete();const m=this.getGroupRanges(t.geometry),x=Ef(m,t.material),b=this.getGroupRanges(e.geometry),_=Ef(b,e.material);b.forEach(d=>d.materialIndex+=x.length);const v=[...x,..._];let E=[...m,...b].map((d,c)=>({...d,index:c}));return h?h&&f&&(E=TM(E,v),E.sort((d,c)=>d.materialIndex-c.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((d,c)=>{const S=d.geometry;a[c].buildGeometry(S,E),t.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.updateMatrix(),d.matrixWorld.copy(t.matrixWorld),h?(d.material=v,f&&wM(S.groups),g&&(d.material=AM(S.groups,v))):d.material=v[0]}),s?r:r[0]}evaluateHierarchy(t,e=new Zo){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let l=0,h=a.length;l<h;l++){const f=a[l];f.isOperationGroup?n(f,o):o(f)}},r=s=>{const o=s.children;let a=!1;for(let h=0,f=o.length;h<f;h++){const g=o[h];a=r(g)||a}const l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let h;return n(s,f=>{h?h=this.evaluate(h,f,f.operation):h=this.evaluate(s,f,f.operation)}),s._cachedGeometry=h.geometry,s._cachedMaterials=h.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}class RM{constructor(t,e,n){this.shapeColor=11022898,this.selectedShapeColor=16562691,this.animationFrameId=-1,this.frameRate=60,this.lastFrameTimestamp=0,this.shapeSpeed=.75,this.shapeYOffset=55,this.holePosMap=new Map,this.shapeMap=new Map,this.selectedShape="",this.selectionXZOffset={x:0,z:0},this.selectedHole="",this.getRaycastIntersections=(l,h)=>(this.raycaster.setFromCamera(new gt(l,h),this.camera),this.raycaster.intersectObjects(this.scene.children,!0).filter(f=>!this.shapeMap.get(f.object.name)?.solved)),this.animate=(l=0)=>{const h=l-this.lastFrameTimestamp;if(h<1e3/this.frameRate){this.animationFrameId=requestAnimationFrame(this.animate);return}this.lastFrameTimestamp=l;const f=Math.min(this.shapeSpeed*h/100,1),g=(p,m)=>p.position.distanceTo(m)<.1?(p.position.copy(m),!0):(p.position.lerp(m,f),!1);for(const[p,{mesh:m,solved:x,targetPos:b,targetRot:_}]of this.shapeMap){if(g(m,b)&&x){m.visible=!1;continue}const E=new $n;E.setFromEuler(m.rotation),m.rotation.setFromQuaternion(E.slerp(_,f));const d=x?0:1,c=m.material;c.opacity=pg.lerp(c.opacity,d,f)}g(this.camera,this.cameraTargetPos),this.isShapeSelected?g(this.basePlane,new L(0,this.shapeYOffset,0)):g(this.basePlane,new L),this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate)},this.onThemeChange=()=>{const l=getComputedStyle(this.canvas).backgroundColor;this.renderer.setClearColor(new Kt(l))},this.onResize=(l,h)=>{this.camera.left=l/-2,this.camera.right=l/2,this.camera.top=h/2,this.camera.bottom=h/-2,this.camera.updateProjectionMatrix(),this.renderer.setSize(l,h,!1)},this.onReset=()=>{this.selectedShape="",this.cameraTargetPos.copy(this.cameraInitPos),this.initShapes()},this.initShapes=()=>{const l=bh(Cy);for(let b=0;b<$r.length;b++){const _=$r[b],v=l[b].x+_.offset.x,E=l[b].y+_.offset.y,d=l[b].z+_.offset.z;let c=this.shapeMap.get(_.type);if(c)c.solved=!1,c.mesh.visible=!0,c.mesh.material.opacity=1,c.initPos.set(v,E,d),c.targetPos.set(v,E,d);else{const S=new js({color:this.shapeColor,transparent:!0}),u=new Qe(_.geometry,S);u.position.set(v,E,d),u.name=_.type,c={mesh:u,solved:!1,initPos:new L(v,E,d),targetPos:new L(v,E,d),initRot:new $n,targetRot:new $n},this.shapeMap.set(u.name,c),this.scene.add(u)}c.mesh.rotation.set(_.rotation.x,_.rotation.y,_.rotation.z),c.initRot.setFromEuler(c.mesh.rotation),c.targetRot.setFromEuler(c.mesh.rotation)}if(this.holeBox)return;const h=bh($r.filter(b=>b.hole.render)),f=new Zo(new Yn(this.canvas.width-25,80,80).translate(0,-15,0),new js({color:15658734})),g=Ii-1.25*No;f.position.set(0,0,g),f.updateMatrixWorld();const p=new CM;let m;const x=1.1;for(let b=0;b<h.length;b++){const _=h[b].hole;if(!_.render)continue;const v=new Zo(h[b].geometry.clone().scale(x,x,x),new js({color:3355443})),E=(this.canvas.width-100)*(b/(h.length-1)-.5),d=new L(E,15,g);v.position.copy(d),this.holePosMap.set(h[b].type,d),v.rotation.set(_.rotation.x,_.rotation.y,_.rotation.z),v.updateMatrixWorld(),m?m=p.evaluate(m,v,Pd):m=v}this.holeBox=p.evaluate(f,m,Id),this.holeBox.name="holeBox",this.scene.add(this.holeBox)},this.setSelectedShape=(l,h,f)=>{const g=this.shapeMap.get(l);g&&(this.selectedShape=l,g.targetPos.setY(this.shapeYOffset),this.selectionXZOffset={x:h,z:f},g.mesh.material.color=new Kt(this.selectedShapeColor),this.cameraTargetPos.setY(this.cameraInitPos.y+this.shapeYOffset))},this.setSelectedShapeXZ=(l,h)=>{const f=this.shapeMap.get(this.selectedShape);if(f)if(!h)f.targetPos.setX(l.x+this.selectionXZOffset.x),f.targetPos.setZ(l.z+this.selectionXZOffset.z),f.targetRot.copy(f.initRot),this.selectedHole="";else{let g;for(const b of this.holePosMap)(!g||g[1].distanceToSquared(l)>b[1].distanceToSquared(l))&&(g=b);const p=$r.find(b=>b.type===this.selectedShape);if(!g||!p)return;const[m,x]=g;this.selectedHole=m,f.targetPos.setX(x.x+p.hole.shapeOffset?.x),f.targetPos.setY(this.shapeYOffset+p.hole.shapeOffset?.y),f.targetPos.setZ(x.z+p.hole.shapeOffset?.z),f.targetRot.setFromEuler(new xn(p.hole.rotation.x,p.hole.rotation.y,p.hole.rotation.z))}},this.clearSelectedShape=()=>{const l=this.shapeMap.get(this.selectedShape);if(!l)return;l.mesh.material.color=new Kt(this.shapeColor),this.cameraTargetPos.copy(this.cameraInitPos);const h=$r.find(f=>f.type===this.selectedShape)?.compatibleHoles;h&&h.includes(this.selectedHole)?(l.targetPos.copy(this.holePosMap.get(this.selectedHole).clone().setY(-35)),l.solved=!0):(l.targetPos.copy(l.initPos),l.targetRot.copy(l.initRot)),this.selectedHole="",this.selectedShape=""},this.dispose=()=>{this.animationFrameId!==-1&&cancelAnimationFrame(this.animationFrameId),this.scene?.traverse(l=>{l instanceof Qe&&(l.geometry.dispose(),l.material.dispose())}),this.renderer?.dispose()},this.canvas=t,this.shapeColor=e,this.selectedShapeColor=n,this.camera=new ta(this.canvas.width/-2,this.canvas.width/2,this.canvas.height/2,this.canvas.height/-2,.1,1e3),this.cameraInitPos=new L(0,400,500),this.cameraTargetPos=new L().copy(this.cameraInitPos),this.camera.position.copy(this.cameraInitPos),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.renderer=new Ay({antialias:!0,canvas:this.canvas}),this.renderer.setSize(this.canvas.width,this.canvas.height);const r=getComputedStyle(this.canvas).backgroundColor;this.renderer.setClearColor(new Kt(r)),this.scene=new Cg,this.raycaster=new Pm;const s=new wm(16777215,.5);this.scene.add(s);const o=new Ju(16777215,5);o.position.set(-50,100,50),this.scene.add(o);const a=new Ju(16777215,3);a.position.set(50,100,-50),this.scene.add(a),this.basePlane=new Qe(new Or(this.canvas.width,1500),new js),this.basePlane.visible=!1,this.basePlane.name="basePlane",this.basePlane.rotation.x=-Math.PI/2,this.scene.add(this.basePlane),this.initShapes(),this.animate()}get isShapeSelected(){return this.selectedShape!=""}get isSolved(){return[...this.shapeMap.values()].reduce((t,e)=>t&&e.solved,!0)}}class PM{constructor(t,e){this.dispose=()=>{this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp)},this.onPointerDown=n=>{const r=this.canvas.getBoundingClientRect(),s=n.clientX-r.left,o=n.clientY-r.top,a=this.sceneManager.getRaycastIntersections(s/r.width*2-1,-(o/r.height)*2+1);this.sceneManager.clearSelectedShape();const l=a.find(h=>h.object.name==="basePlane")?.point;if(l)for(const h of a)h.object.name!=="basePlane"&&(this.sceneManager.setSelectedShape(h.object.name,h.object.position.x-l.x,h.object.position.z-l.z),document.documentElement.style.cursor="move")},this.onPointerMove=n=>{const r=this.canvas.getBoundingClientRect(),s=n.clientX-r.left,o=n.clientY-r.top,a=this.sceneManager.getRaycastIntersections(s/r.width*2-1,-(o/r.height)*2+1);if(!this.sceneManager.isShapeSelected){a.reduce((h,f)=>h||f.object.name!=="basePlane"&&f.object.name!=="holeBox",!1)?document.documentElement.style.cursor="pointer":document.documentElement.style.cursor="auto";return}const l=a.find(h=>h.object.name==="basePlane")?.point;l&&this.sceneManager.setSelectedShapeXZ(l,a.reduce((h,f)=>h||f.object.name==="holeBox",!1))},this.onPointerUp=n=>{this.sceneManager?.clearSelectedShape(),document.documentElement.style.cursor="auto"},this.canvas=t,this.sceneManager=e,this.canvas.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp)}}const IM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84"/></svg>',DM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M22 34h4V22h-4zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4m0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16m-2-22h4v-4h-4z"/></svg>',LM='<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 448q-26 0-45-19t-19-45V256q0-50 26-96 26-45 71-70 44-26 95-26 52 0 96 26 45 26 71 71 25 44 25 95v128q0 26-19 45t-45 19h-64V288h80v-32q0-38-19-72-20-33-53-52-33-20-72-20-40 0-72 19-33 20-52 53-20 33-20 72v32h80v160z"/></svg>';var UM=Object.defineProperty,NM=Object.getOwnPropertyDescriptor,Jl=(i,t,e,n)=>{for(var r=n>1?void 0:n?NM(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(t,e,r):o(r))||r);return n&&r&&UM(t,e,r),r};let Es=class extends ss{constructor(){super(),this.shapeColor=11022898,this.selectedShapeColor=12743938,this.onReset=()=>{this.sceneManager?.onReset(),this.dispatchEvent(new CustomEvent("shapepuzzlecaptchareset",{bubbles:!0,composed:!0}))},this.onVerify=()=>{this.sceneManager?.isSolved&&this.dispatchEvent(new CustomEvent("shapepuzzlecaptchasolved",{bubbles:!0,composed:!0}))}}firstUpdated(){const i=this.shadowRoot?.getElementById("canvas");i.width=i.clientWidth,i.height=i.clientHeight,this.sceneManager=new RM(i,this.shapeColor,this.selectedShapeColor),this.interaction=new PM(i,this.sceneManager)}disconnectedCallback(){super.disconnectedCallback(),this.sceneManager?.dispose(),this.interaction?.dispose()}render(){return ip`
      <header>
        <div>Put all shapes into the</div>
        <div class="subject">correct holes</div>
      </header>

      <canvas id="canvas"> canvas not supported :( </canvas>

      <footer>
        <button
          class="icon-btn"
          id="refresh-btn"
          .innerHTML="${IM}"
          .onclick="${this.onReset}"
        ></button>
        <button
          class="icon-btn"
          id="audio-btn"
          .innerHTML="${LM}"
        ></button>
        <button class="icon-btn" id="info-btn" .innerHTML="${DM}"></button>
        <div class="spacer"></div>
        <button class="text-btn" id="submit-btn" .onclick="${this.onVerify}">
          Verify
        </button>
      </footer>
    `}};Es.styles=Wd`
    :host {
      display: flex;
      flex-direction: column;
      width: 400px;
      color: var(--text-color);
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      font-family: var(--font-family), sans-serif;

      --font-family: "Arial";
      --bg-color: #fff;
      --canvas-bg-color: #f0f0f0;
      --text-color: #000;
      --primary-color: #1a73e9;
      --on-primary-color: #fff;
      --primary-hover-color: #1669c1;
      --border-color: #ccc;
      --image-btn-color: #737373;
    }

    :host(.dark),
    :host([data-dark]) {
      --bg-color: #1f1f1f;
      --canvas-bg-color: #292929;
      --text-color: #fff;
      --primary-color: #611c99;
      --on-primary-color: #fff;
      --primary-hover-color: #6e16c1;
      --border-color: #505050;
      --image-btn-color: #8d8d8d;
    }

    header {
      color: var(--on-primary-color);
      background-color: var(--primary-color);
      padding: 24px;
      margin: 8px;

      .subject {
        font-size: 1.5em;
        font-weight: bold;
        margin: 4px 0px 8px 0px;
      }
    }

    canvas {
      height: 360px;
      margin: 0px 8px 8px 8px;
      background-color: var(--canvas-bg-color);
      touch-action: none;
    }

    footer {
      display: flex;
      gap: 8px;
      align-items: bottom;
      padding: 8px;
      margin: 0px;
      border-top: 1px solid var(--border-color);

      .spacer {
        flex: 1;
      }

      button {
        cursor: pointer;

        &.icon-btn {
          background: none;
          border: none;
          padding: 4px;
          margin: 0px;

          svg {
            fill: var(--image-btn-color);
            transition: fill 0.3s;
            height: 32px;
            aspect-ratio: 1;

            &:hover {
              fill: var(--primary-hover-color);
            }
          }
        }

        &.text-btn {
          background-color: var(--primary-color);
          color: var(--on-primary-color);
          border: none;
          border-radius: 2px;
          padding: 12px 26px;
          font-weight: bold;
          text-transform: uppercase;

          &:hover {
            background-color: var(--primary-hover-color);
          }
        }
      }
    }
  `;Jl([Rf({type:Number,attribute:"shape-color"})],Es.prototype,"shapeColor",2);Jl([Rf({type:Number,attribute:"selected-shape-color"})],Es.prototype,"selectedShapeColor",2);Es=Jl([dp("shape-puzzle-captcha")],Es);
