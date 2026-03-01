(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ro=globalThis,Sl=Ro.ShadowRoot&&(Ro.ShadyCSS===void 0||Ro.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ml=Symbol(),au=new WeakMap;let Tf=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Sl&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=au.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&au.set(e,t))}return t}toString(){return this.cssText}};const kd=i=>new Tf(typeof i=="string"?i:i+"",void 0,Ml),Wd=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new Tf(e,i,Ml)},Xd=(i,t)=>{if(Sl)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),r=Ro.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)}},cu=Sl?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return kd(e)})(i):i;const{is:$d,defineProperty:qd,getOwnPropertyDescriptor:Yd,getOwnPropertyNames:Zd,getOwnPropertySymbols:Jd,getPrototypeOf:Kd}=Object,Ko=globalThis,lu=Ko.trustedTypes,jd=lu?lu.emptyScript:"",Qd=Ko.reactiveElementPolyfillSupport,os=(i,t)=>i,Go={toAttribute(i,t){switch(t){case Boolean:i=i?jd:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},El=(i,t)=>!$d(i,t),uu={attribute:!0,type:String,converter:Go,reflect:!1,useDefault:!1,hasChanged:El};Symbol.metadata??=Symbol("metadata"),Ko.litPropertyMetadata??=new WeakMap;let xr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=uu){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,e);r!==void 0&&qd(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){const{get:r,set:s}=Yd(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const a=r?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??uu}static _$Ei(){if(this.hasOwnProperty(os("elementProperties")))return;const t=Kd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(os("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(os("properties"))){const e=this.properties,n=[...Zd(e),...Jd(e)];for(const r of n)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,r]of e)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const r=this._$Eu(e,n);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const r of n)e.unshift(cu(r))}else t!==void 0&&e.push(cu(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Go).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Go;this._$Em=r;const a=o.fromAttribute(e,s.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,n,r=!1,s){if(t!==void 0){const o=this.constructor;if(r===!1&&(s=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??El)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:r,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,s]of n){const{wrapped:o}=s,a=this[r];o!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,s,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};xr.elementStyles=[],xr.shadowRootOptions={mode:"open"},xr[os("elementProperties")]=new Map,xr[os("finalized")]=new Map,Qd?.({ReactiveElement:xr}),(Ko.reactiveElementVersions??=[]).push("2.1.2");const bl=globalThis,hu=i=>i,ko=bl.trustedTypes,fu=ko?ko.createPolicy("lit-html",{createHTML:i=>i}):void 0,Af="$lit$",li=`lit$${Math.random().toFixed(9).slice(2)}$`,wf="?"+li,tp=`<${wf}>`,zi=document,gs=()=>zi.createComment(""),ms=i=>i===null||typeof i!="object"&&typeof i!="function",Tl=Array.isArray,ep=i=>Tl(i)||typeof i?.[Symbol.iterator]=="function",la=`[ 	
\f\r]`,Vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,du=/-->/g,pu=/>/g,vi=RegExp(`>|${la}(?:([^\\s"'>=/]+)(${la}*=${la}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gu=/'/g,mu=/"/g,Cf=/^(?:script|style|textarea|title)$/i,np=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ip=np(1),Cr=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),_u=new WeakMap,Ui=zi.createTreeWalker(zi,129);function Rf(i,t){if(!Tl(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return fu!==void 0?fu.createHTML(t):t}const rp=(i,t)=>{const e=i.length-1,n=[];let r,s=t===2?"<svg>":t===3?"<math>":"",o=Vr;for(let a=0;a<e;a++){const l=i[a];let f,h,g=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===Vr?h[1]==="!--"?o=du:h[1]!==void 0?o=pu:h[2]!==void 0?(Cf.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=vi):h[3]!==void 0&&(o=vi):o===vi?h[0]===">"?(o=r??Vr,g=-1):h[1]===void 0?g=-2:(g=o.lastIndex-h[2].length,f=h[1],o=h[3]===void 0?vi:h[3]==='"'?mu:gu):o===mu||o===gu?o=vi:o===du||o===pu?o=Vr:(o=vi,r=void 0);const m=o===vi&&i[a+1].startsWith("/>")?" ":"";s+=o===Vr?l+tp:g>=0?(n.push(f),l.slice(0,g)+Af+l.slice(g)+li+m):l+li+(g===-2?a:m)}return[Rf(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class _s{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[f,h]=rp(t,e);if(this.el=_s.createElement(f,n),Ui.currentNode=this.el.content,e===2||e===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(r=Ui.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const g of r.getAttributeNames())if(g.endsWith(Af)){const d=h[o++],m=r.getAttribute(g).split(li),v=/([.?@])?(.*)/.exec(d);l.push({type:1,index:s,name:v[2],strings:m,ctor:v[1]==="."?op:v[1]==="?"?ap:v[1]==="@"?cp:jo}),r.removeAttribute(g)}else g.startsWith(li)&&(l.push({type:6,index:s}),r.removeAttribute(g));if(Cf.test(r.tagName)){const g=r.textContent.split(li),d=g.length-1;if(d>0){r.textContent=ko?ko.emptyScript:"";for(let m=0;m<d;m++)r.append(g[m],gs()),Ui.nextNode(),l.push({type:2,index:++s});r.append(g[d],gs())}}}else if(r.nodeType===8)if(r.data===wf)l.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(li,g+1))!==-1;)l.push({type:7,index:s}),g+=li.length-1}s++}}static createElement(t,e){const n=zi.createElement("template");return n.innerHTML=t,n}}function Rr(i,t,e=i,n){if(t===Cr)return t;let r=n!==void 0?e._$Co?.[n]:e._$Cl;const s=ms(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=r:e._$Cl=r),r!==void 0&&(t=Rr(i,r._$AS(i,t.values),r,n)),t}class sp{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??zi).importNode(e,!0);Ui.currentNode=r;let s=Ui.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let f;l.type===2?f=new As(s,s.nextSibling,this,t):l.type===1?f=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(f=new lp(s,this,t)),this._$AV.push(f),l=n[++a]}o!==l?.index&&(s=Ui.nextNode(),o++)}return Ui.currentNode=zi,r}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class As{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Rr(this,t,e),ms(t)?t===be||t==null||t===""?(this._$AH!==be&&this._$AR(),this._$AH=be):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ep(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==be&&ms(this._$AH)?this._$AA.nextSibling.data=t:this.T(zi.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=_s.createElement(Rf(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{const s=new sp(r,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=_u.get(t.strings);return e===void 0&&_u.set(t.strings,e=new _s(t)),e}k(t){Tl(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const s of t)r===e.length?e.push(n=new As(this.O(gs()),this.O(gs()),this,this.options)):n=e[r],n._$AI(s),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const n=hu(t).nextSibling;hu(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class jo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,s){this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=be}_$AI(t,e=this,n,r){const s=this.strings;let o=!1;if(s===void 0)t=Rr(this,t,e,0),o=!ms(t)||t!==this._$AH&&t!==Cr,o&&(this._$AH=t);else{const a=t;let l,f;for(t=s[0],l=0;l<s.length-1;l++)f=Rr(this,a[n+l],e,l),f===Cr&&(f=this._$AH[l]),o||=!ms(f)||f!==this._$AH[l],f===be?t=be:t!==be&&(t+=(f??"")+s[l+1]),this._$AH[l]=f}o&&!r&&this.j(t)}j(t){t===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class op extends jo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===be?void 0:t}}class ap extends jo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==be)}}class cp extends jo{constructor(t,e,n,r,s){super(t,e,n,r,s),this.type=5}_$AI(t,e=this){if((t=Rr(this,t,e,0)??be)===Cr)return;const n=this._$AH,r=t===be&&n!==be||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==be&&(n===be||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lp{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Rr(this,t)}}const up=bl.litHtmlPolyfillSupport;up?.(_s,As),(bl.litHtmlVersions??=[]).push("3.3.2");const hp=(i,t,e)=>{const n=e?.renderBefore??t;let r=n._$litPart$;if(r===void 0){const s=e?.renderBefore??null;n._$litPart$=r=new As(t.insertBefore(gs(),s),s,void 0,e??{})}return r._$AI(i),r};const Al=globalThis;class as extends xr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hp(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cr}}as._$litElement$=!0,as.finalized=!0,Al.litElementHydrateSupport?.({LitElement:as});const fp=Al.litElementPolyfillSupport;fp?.({LitElement:as});(Al.litElementVersions??=[]).push("4.2.2");const dp=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const pp={attribute:!0,type:String,converter:Go,reflect:!1,hasChanged:El},gp=(i=pp,t,e)=>{const{kind:n,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,i,a),a}}}if(n==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function wl(i){return(t,e)=>typeof e=="object"?gp(i,t,e):((n,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(r,s):void 0})(i,t,e)}const ws="183",mp=0,vu=1,_p=2,Po=1,vp=2,is=3,Rn=0,Ve=1,_n=2,Xn=0,Ar=1,xu=2,yu=3,Su=4,xp=5,Di=100,yp=101,Sp=102,Mp=103,Ep=104,bp=200,Tp=201,Ap=202,wp=203,mc=204,_c=205,Cp=206,Rp=207,Pp=208,Ip=209,Dp=210,Lp=211,Up=212,Np=213,Fp=214,vc=0,xc=1,yc=2,Pr=3,Sc=4,Mc=5,Ec=6,bc=7,Pf=0,Op=1,Bp=2,wn=0,If=1,Df=2,Lf=3,Uf=4,Nf=5,Ff=6,Of=7,Bf=300,Vi=301,Ir=302,ua=303,ha=304,Qo=306,Tc=1e3,Wn=1001,Ac=1002,Re=1003,zp=1004,Ds=1005,Le=1006,fa=1007,Ni=1008,Qe=1009,zf=1010,Vf=1011,vs=1012,Cl=1013,Pn=1014,bn=1015,Yn=1016,Rl=1017,Pl=1018,xs=1020,Hf=35902,Gf=35899,kf=1021,Wf=1022,vn=1023,Zn=1026,Fi=1027,Xf=1028,Il=1029,Dr=1030,Dl=1031,Ll=1033,Io=33776,Do=33777,Lo=33778,Uo=33779,wc=35840,Cc=35841,Rc=35842,Pc=35843,Ic=36196,Dc=37492,Lc=37496,Uc=37488,Nc=37489,Fc=37490,Oc=37491,Bc=37808,zc=37809,Vc=37810,Hc=37811,Gc=37812,kc=37813,Wc=37814,Xc=37815,$c=37816,qc=37817,Yc=37818,Zc=37819,Jc=37820,Kc=37821,jc=36492,Qc=36494,tl=36495,el=36283,nl=36284,il=36285,rl=36286,Vp=3200,$f=0,Hp=1,ui="",sn="srgb",Lr="srgb-linear",Wo="linear",ne="srgb",$i=7680,Mu=519,Gp=512,kp=513,Wp=514,Ul=515,Xp=516,$p=517,Nl=518,qp=519,Eu=35044,bu="300 es",Tn=2e3,ys=2001;function Yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){const i=Xo("canvas");return i.style.display="block",i}const Tu={};function Au(...i){const t="THREE."+i.shift();console.log(t,...i)}function qf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=qf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=qf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $o(...i){const t=i.join(" ");t in Tu||(Tu[t]=!0,Ht(...i))}function Jp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Kp={[vc]:xc,[yc]:Ec,[Sc]:bc,[Pr]:Mc,[xc]:vc,[Ec]:yc,[bc]:Sc,[Mc]:Pr};class Or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const cs=Math.PI/180,Ss=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Fl(i,t){return(i%t+t)%t}function jp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Qp(i,t,e){return i!==t?(e-i)/(t-i):0}function ls(i,t,e){return(1-e)*i+e*t}function tg(i,t,e,n){return ls(i,t,1-Math.exp(-e*n))}function eg(i,t=1){return t-Math.abs(Fl(i,t*2)-t)}function ng(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ig(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sg(i,t){return i+Math.random()*(t-i)}function og(i){return i*(.5-Math.random())}function ag(i){i!==void 0&&(wu=i);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cg(i){return i*cs}function lg(i){return i*Ss}function ug(i){return(i&i-1)===0&&i!==0}function hg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dg(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),f=s((t+n)/2),h=o((t+n)/2),g=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*g,l*d,a*f);break;case"YZY":i.set(l*d,a*h,l*g,a*f);break;case"ZXZ":i.set(l*g,l*d,a*h,a*f);break;case"XZX":i.set(a*h,l*v,l*m,a*f);break;case"YXY":i.set(l*m,a*h,l*v,a*f);break;case"ZYZ":i.set(l*v,l*m,a*h,a*f);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pg={DEG2RAD:cs,RAD2DEG:Ss,generateUUID:ki,clamp:Wt,euclideanModulo:Fl,mapLinear:jp,inverseLerp:Qp,lerp:ls,damp:tg,pingpong:eg,smoothstep:ng,smootherstep:ig,randInt:rg,randFloat:sg,randFloatSpread:og,seededRandom:ag,degToRad:cg,radToDeg:lg,isPowerOfTwo:ug,ceilPowerOfTwo:hg,floorPowerOfTwo:fg,setQuaternionFromProperEuler:dg,normalize:Oe,denormalize:yr};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],f=n[r+1],h=n[r+2],g=n[r+3],d=s[o+0],m=s[o+1],v=s[o+2],T=s[o+3];if(g!==T||l!==d||f!==m||h!==v){let _=l*d+f*m+h*v+g*T;_<0&&(d=-d,m=-m,v=-v,T=-T,_=-_);let x=1-a;if(_<.9995){const E=Math.acos(_),p=Math.sin(E);x=Math.sin(x*E)/p,a=Math.sin(a*E)/p,l=l*x+d*a,f=f*x+m*a,h=h*x+v*a,g=g*x+T*a}else{l=l*x+d*a,f=f*x+m*a,h=h*x+v*a,g=g*x+T*a;const E=1/Math.sqrt(l*l+f*f+h*h+g*g);l*=E,f*=E,h*=E,g*=E}}t[e]=l,t[e+1]=f,t[e+2]=h,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],f=n[r+2],h=n[r+3],g=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+h*g+l*m-f*d,t[e+1]=l*v+h*d+f*g-a*m,t[e+2]=f*v+h*m+a*d-l*g,t[e+3]=h*v-a*g-l*d-f*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,f=a(n/2),h=a(r/2),g=a(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*g+f*m*v,this._y=f*m*g-d*h*v,this._z=f*h*v+d*m*g,this._w=f*h*g-d*m*v;break;case"YXZ":this._x=d*h*g+f*m*v,this._y=f*m*g-d*h*v,this._z=f*h*v-d*m*g,this._w=f*h*g+d*m*v;break;case"ZXY":this._x=d*h*g-f*m*v,this._y=f*m*g+d*h*v,this._z=f*h*v+d*m*g,this._w=f*h*g-d*m*v;break;case"ZYX":this._x=d*h*g-f*m*v,this._y=f*m*g+d*h*v,this._z=f*h*v-d*m*g,this._w=f*h*g+d*m*v;break;case"YZX":this._x=d*h*g+f*m*v,this._y=f*m*g+d*h*v,this._z=f*h*v-d*m*g,this._w=f*h*g-d*m*v;break;case"XZY":this._x=d*h*g-f*m*v,this._y=f*m*g-d*h*v,this._z=f*h*v+d*m*g,this._w=f*h*g+d*m*v;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],f=e[2],h=e[6],g=e[10],d=n+a+g;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-f)*m,this._z=(o-r)*m}else if(n>a&&n>g){const m=2*Math.sqrt(1+n-a-g);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+f)/m}else if(a>g){const m=2*Math.sqrt(1+a-n-g);this._w=(s-f)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+g-n-a);this._w=(o-r)/m,this._x=(s+f)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,f=e._z,h=e._w;return this._x=n*h+o*a+r*f-s*l,this._y=r*h+o*l+s*a-n*f,this._z=s*h+o*f+n*l-r*a,this._w=o*h-n*a-r*l-s*f,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const f=Math.acos(a),h=Math.sin(f);l=Math.sin(l*f)/h,e=Math.sin(e*f)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,f=2*(o*r-a*n),h=2*(a*e-s*r),g=2*(s*n-o*e);return this.x=e+l*f+o*g-a*h,this.y=n+l*h+a*f-s*g,this.z=r+l*g+s*h-o*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new L,Cu=new pi;class $t{constructor(t,e,n,r,s,o,a,l,f){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,f)}set(t,e,n,r,s,o,a,l,f){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],f=n[1],h=n[4],g=n[7],d=n[2],m=n[5],v=n[8],T=r[0],_=r[3],x=r[6],E=r[1],p=r[4],c=r[7],S=r[2],u=r[5],R=r[8];return s[0]=o*T+a*E+l*S,s[3]=o*_+a*p+l*u,s[6]=o*x+a*c+l*R,s[1]=f*T+h*E+g*S,s[4]=f*_+h*p+g*u,s[7]=f*x+h*c+g*R,s[2]=d*T+m*E+v*S,s[5]=d*_+m*p+v*u,s[8]=d*x+m*c+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],f=t[7],h=t[8];return e*o*h-e*a*f-n*s*h+n*a*l+r*s*f-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],f=t[7],h=t[8],g=h*o-a*f,d=a*l-h*s,m=f*s-o*l,v=e*g+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/v;return t[0]=g*T,t[1]=(r*f-h*n)*T,t[2]=(a*n-r*o)*T,t[3]=d*T,t[4]=(h*e-r*l)*T,t[5]=(r*s-a*e)*T,t[6]=m*T,t[7]=(n*l-f*e)*T,t[8]=(o*e-n*s)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),f=Math.sin(s);return this.set(n*l,n*f,-n*(l*o+f*a)+o+t,-r*f,r*l,-r*(-f*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new $t,Ru=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){const i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ne&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?Wo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:Ru,fromXYZ:Pu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ru,fromXYZ:Pu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const Qt=gg();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class mg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=Xo("canvas")),qi.width=t.width,qi.height=t.height;const r=qi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$n(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _g=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ga(r[o].image)):s.push(ga(r[o]))}else s=ga(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let vg=0;const ma=new L;class He extends Or{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Wn,r=Wn,s=Le,o=Ni,a=vn,l=Qe,f=He.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ki(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ma).x}get height(){return this.source.getSize(ma).y}get depth(){return this.source.getSize(ma).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Bf;He.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,f=l[0],h=l[4],g=l[8],d=l[1],m=l[5],v=l[9],T=l[2],_=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(g-T)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(g+T)<.1&&Math.abs(v+_)<.1&&Math.abs(f+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const p=(f+1)/2,c=(m+1)/2,S=(x+1)/2,u=(h+d)/4,R=(g+T)/4,y=(v+_)/4;return p>c&&p>S?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=u/n,s=R/n):c>S?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=u/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=R/s,r=y/s),this.set(n,r,s,e),this}let E=Math.sqrt((_-v)*(_-v)+(g-T)*(g-T)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(_-v)/E,this.y=(g-T)/E,this.z=(d-h)/E,this.w=Math.acos((f+m+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xg extends Or{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new He(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ol(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends xg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yf extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yg extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(t,e,n,r,s,o,a,l,f,h,g,d,m,v,T,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,f,h,g,d,m,v,T,_)}set(t,e,n,r,s,o,a,l,f,h,g,d,m,v,T,_){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=f,x[6]=h,x[10]=g,x[14]=d,x[3]=m,x[7]=v,x[11]=T,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Yi.setFromMatrixColumn(t,0).length(),s=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),f=Math.sin(r),h=Math.cos(s),g=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*g,v=a*h,T=a*g;e[0]=l*h,e[4]=-l*g,e[8]=f,e[1]=m+v*f,e[5]=d-T*f,e[9]=-a*l,e[2]=T-d*f,e[6]=v+m*f,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*g,v=f*h,T=f*g;e[0]=d+T*a,e[4]=v*a-m,e[8]=o*f,e[1]=o*g,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=T+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*g,v=f*h,T=f*g;e[0]=d-T*a,e[4]=-o*g,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=T-d*a,e[2]=-o*f,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*g,v=a*h,T=a*g;e[0]=l*h,e[4]=v*f-m,e[8]=d*f+T,e[1]=l*g,e[5]=T*f+d,e[9]=m*f-v,e[2]=-f,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*f,v=a*l,T=a*f;e[0]=l*h,e[4]=T-d*g,e[8]=v*g+m,e[1]=g,e[5]=o*h,e[9]=-a*h,e[2]=-f*h,e[6]=m*g+v,e[10]=d-T*g}else if(t.order==="XZY"){const d=o*l,m=o*f,v=a*l,T=a*f;e[0]=l*h,e[4]=-g,e[8]=f*h,e[1]=d*g+T,e[5]=o*h,e[9]=m*g-v,e[2]=v*g-m,e[6]=a*h,e[10]=T*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sg,t,Mg)}lookAt(t,e,n){const r=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Qn.crossVectors(n,Je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Qn.crossVectors(n,Je)),Qn.normalize(),Ls.crossVectors(Je,Qn),r[0]=Qn.x,r[4]=Ls.x,r[8]=Je.x,r[1]=Qn.y,r[5]=Ls.y,r[9]=Je.y,r[2]=Qn.z,r[6]=Ls.z,r[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],f=n[12],h=n[1],g=n[5],d=n[9],m=n[13],v=n[2],T=n[6],_=n[10],x=n[14],E=n[3],p=n[7],c=n[11],S=n[15],u=r[0],R=r[4],y=r[8],M=r[12],A=r[1],b=r[5],w=r[9],C=r[13],U=r[2],F=r[6],B=r[10],O=r[14],k=r[3],G=r[7],at=r[11],et=r[15];return s[0]=o*u+a*A+l*U+f*k,s[4]=o*R+a*b+l*F+f*G,s[8]=o*y+a*w+l*B+f*at,s[12]=o*M+a*C+l*O+f*et,s[1]=h*u+g*A+d*U+m*k,s[5]=h*R+g*b+d*F+m*G,s[9]=h*y+g*w+d*B+m*at,s[13]=h*M+g*C+d*O+m*et,s[2]=v*u+T*A+_*U+x*k,s[6]=v*R+T*b+_*F+x*G,s[10]=v*y+T*w+_*B+x*at,s[14]=v*M+T*C+_*O+x*et,s[3]=E*u+p*A+c*U+S*k,s[7]=E*R+p*b+c*F+S*G,s[11]=E*y+p*w+c*B+S*at,s[15]=E*M+p*C+c*O+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],f=t[13],h=t[2],g=t[6],d=t[10],m=t[14],v=t[3],T=t[7],_=t[11],x=t[15],E=l*m-f*d,p=a*m-f*g,c=a*d-l*g,S=o*m-f*h,u=o*d-l*h,R=o*g-a*h;return e*(T*E-_*p+x*c)-n*(v*E-_*S+x*u)+r*(v*p-T*S+x*R)-s*(v*c-T*u+_*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],f=t[7],h=t[8],g=t[9],d=t[10],m=t[11],v=t[12],T=t[13],_=t[14],x=t[15],E=e*a-n*o,p=e*l-r*o,c=e*f-s*o,S=n*l-r*a,u=n*f-s*a,R=r*f-s*l,y=h*T-g*v,M=h*_-d*v,A=h*x-m*v,b=g*_-d*T,w=g*x-m*T,C=d*x-m*_,U=E*C-p*w+c*b+S*A-u*M+R*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return t[0]=(a*C-l*w+f*b)*F,t[1]=(r*w-n*C-s*b)*F,t[2]=(T*R-_*u+x*S)*F,t[3]=(d*u-g*R-m*S)*F,t[4]=(l*A-o*C-f*M)*F,t[5]=(e*C-r*A+s*M)*F,t[6]=(_*c-v*R-x*p)*F,t[7]=(h*R-d*c+m*p)*F,t[8]=(o*w-a*A+f*y)*F,t[9]=(n*A-e*w-s*y)*F,t[10]=(v*u-T*c+x*E)*F,t[11]=(g*c-h*u-m*E)*F,t[12]=(a*M-o*b-l*y)*F,t[13]=(e*b-n*M+r*y)*F,t[14]=(T*p-v*S-_*E)*F,t[15]=(h*S-g*p+d*E)*F,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,f=s*o,h=s*a;return this.set(f*o+n,f*a-r*l,f*l+r*a,0,f*a+r*l,h*a+n,h*l-r*o,0,f*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,f=s+s,h=o+o,g=a+a,d=s*f,m=s*h,v=s*g,T=o*h,_=o*g,x=a*g,E=l*f,p=l*h,c=l*g,S=n.x,u=n.y,R=n.z;return r[0]=(1-(T+x))*S,r[1]=(m+c)*S,r[2]=(v-p)*S,r[3]=0,r[4]=(m-c)*u,r[5]=(1-(d+x))*u,r[6]=(_+E)*u,r[7]=0,r[8]=(v+p)*R,r[9]=(_-E)*R,r[10]=(1-(d+T))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Yi.set(r[0],r[1],r[2]).length();const a=Yi.set(r[4],r[5],r[6]).length(),l=Yi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ln.copy(this);const f=1/o,h=1/a,g=1/l;return ln.elements[0]*=f,ln.elements[1]*=f,ln.elements[2]*=f,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=g,ln.elements[9]*=g,ln.elements[10]*=g,e.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Tn,l=!1){const f=this.elements,h=2*s/(e-t),g=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let v,T;if(l)v=s/(o-s),T=o*s/(o-s);else if(a===Tn)v=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(a===ys)v=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return f[0]=h,f[4]=0,f[8]=d,f[12]=0,f[1]=0,f[5]=g,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=T,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Tn,l=!1){const f=this.elements,h=2/(e-t),g=2/(n-r),d=-(e+t)/(e-t),m=-(n+r)/(n-r);let v,T;if(l)v=1/(o-s),T=o/(o-s);else if(a===Tn)v=-2/(o-s),T=-(o+s)/(o-s);else if(a===ys)v=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return f[0]=h,f[4]=0,f[8]=0,f[12]=d,f[1]=0,f[5]=g,f[9]=0,f[13]=m,f[2]=0,f[6]=0,f[10]=v,f[14]=T,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new L,ln=new Jt,Sg=new L(0,0,0),Mg=new L(1,1,1),Qn=new L,Ls=new L,Je=new L,Iu=new Jt,Du=new pi;class ue{constructor(t=0,e=0,n=0,r=ue.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],f=r[5],h=r[9],g=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ue.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eg=0;const Lu=new L,Zi=new pi,Nn=new Jt,Us=new L,Hr=new L,bg=new L,Tg=new pi,Uu=new L(1,0,0),Nu=new L(0,1,0),Fu=new L(0,0,1),Ou={type:"added"},Ag={type:"removed"},Ji={type:"childadded",child:null},_a={type:"childremoved",child:null};class Fe extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new L,e=new ue,n=new pi,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new $t}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Uu,t)}rotateY(t){return this.rotateOnAxis(Nu,t)}rotateZ(t){return this.rotateOnAxis(Fu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uu,t)}translateY(t){return this.translateOnAxis(Nu,t)}translateZ(t){return this.translateOnAxis(Fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Hr,Us,this.up):Nn.lookAt(Us,Hr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Tg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let f=0,h=l.length;f<h;f++){const g=l[f];s(t.shapes,g)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),f=o(t.textures),h=o(t.images),g=o(t.shapes),d=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const f in a){const h=a[f];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new L(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ns extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){o=!0;for(const T of t.hand.values()){const _=e.getJointPose(T,n),x=this._getHandJoint(f,T);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const h=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],d=h.position.distanceTo(g.position),m=.02,v=.005;f.inputState.pinching&&d>m+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&d<=m-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ns;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Fl(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xa(o,s,t+1/3),this.g=xa(o,s,t),this.b=xa(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=Zf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Qt.workingToColorSpace(De.copy(this),t),Math.round(Wt(De.r*255,0,255))*65536+Math.round(Wt(De.g*255,0,255))*256+Math.round(Wt(De.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(De.copy(this),e);const n=De.r,r=De.g,s=De.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,f;const h=(a+o)/2;if(a===o)l=0,f=0;else{const g=o-a;switch(f=h<=.5?g/(o+a):g/(2-o-a),o){case n:l=(r-s)/g+(r<s?6:0);break;case r:l=(s-n)/g+2;break;case s:l=(n-r)/g+4;break}l/=6}return t.h=l,t.s=f,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=sn){Qt.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,r=De.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Fs);const n=ls(ti.h,Fs.h,e),r=ls(ti.s,Fs.s,e),s=ls(ti.l,Fs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new jt;jt.NAMES=Zf;class Cg extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ue,this.environmentIntensity=1,this.environmentRotation=new ue,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const un=new L,Fn=new L,ya=new L,On=new L,Ki=new L,ji=new L,Bu=new L,Sa=new L,Ma=new L,Ea=new L,ba=new oe,Ta=new oe,Aa=new oe;class ce{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){un.subVectors(r,e),Fn.subVectors(n,e),ya.subVectors(t,e);const o=un.dot(un),a=un.dot(Fn),l=un.dot(ya),f=Fn.dot(Fn),h=Fn.dot(ya),g=o*f-a*a;if(g===0)return s.set(0,0,0),null;const d=1/g,m=(f*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ba.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),ba.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ba,s.x),o.addScaledVector(Ta,s.y),o.addScaledVector(Aa,s.z),o}static isFrontFacing(t,e,n,r){return un.subVectors(n,e),Fn.subVectors(t,e),un.cross(Fn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),un.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ce.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ce.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ki.subVectors(r,n),ji.subVectors(s,n),Sa.subVectors(t,n);const l=Ki.dot(Sa),f=ji.dot(Sa);if(l<=0&&f<=0)return e.copy(n);Ma.subVectors(t,r);const h=Ki.dot(Ma),g=ji.dot(Ma);if(h>=0&&g<=h)return e.copy(r);const d=l*g-h*f;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);Ea.subVectors(t,s);const m=Ki.dot(Ea),v=ji.dot(Ea);if(v>=0&&m<=v)return e.copy(s);const T=m*f-l*v;if(T<=0&&f>=0&&v<=0)return a=f/(f-v),e.copy(n).addScaledVector(ji,a);const _=h*v-m*g;if(_<=0&&g-h>=0&&m-v>=0)return Bu.subVectors(s,r),a=(g-h)/(g-h+(m-v)),e.copy(r).addScaledVector(Bu,a);const x=1/(_+T+d);return o=T*x,a=d*x,e.copy(n).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ke{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Bs.subVectors(this.max,Gr),Qi.subVectors(t.a,Gr),tr.subVectors(t.b,Gr),er.subVectors(t.c,Gr),ei.subVectors(tr,Qi),ni.subVectors(er,tr),xi.subVectors(Qi,er);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!wa(e,Qi,tr,er,Bs)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Qi,tr,er,Bs))?!1:(zs.crossVectors(ei,ni),e=[zs.x,zs.y,zs.z],wa(e,Qi,tr,er,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Os=new ke,Qi=new L,tr=new L,er=new L,ei=new L,ni=new L,xi=new L,Gr=new L,Bs=new L,zs=new L,yi=new L;function wa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yi.fromArray(i,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=t.dot(yi),f=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,f,h),Math.min(l,f,h))>a)return!1}return!0}const me=new L,Vs=new gt;let Rg=0;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eu&&(t.usage=this.usage),t}}class Jf extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kf extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Pg=new ke,kr=new L,Ca=new L;class zl{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(kr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(Ca)),this.expandByPoint(kr.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ig=0;const nn=new Jt,Ra=new Fe,nr=new L,Ke=new ke,Wr=new ke,Ee=new L;class an extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yp(t)?Kf:Jf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ke.min,Wr.min),Ke.expandByPoint(Ee),Ee.addVectors(Ke.max,Wr.max),Ke.expandByPoint(Ee)):(Ke.expandByPoint(Wr.min),Ke.expandByPoint(Wr.max))}Ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let f=0,h=a.count;f<h;f++)Ee.fromBufferAttribute(a,f),l&&(nr.fromBufferAttribute(t,f),Ee.add(nr)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new L,l[y]=new L;const f=new L,h=new L,g=new L,d=new gt,m=new gt,v=new gt,T=new L,_=new L;function x(y,M,A){f.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),g.fromBufferAttribute(n,A),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,A),h.sub(f),g.sub(f),m.sub(d),v.sub(d);const b=1/(m.x*v.y-v.x*m.y);isFinite(b)&&(T.copy(h).multiplyScalar(v.y).addScaledVector(g,-m.y).multiplyScalar(b),_.copy(g).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(b),a[y].add(T),a[M].add(T),a[A].add(T),l[y].add(_),l[M].add(_),l[A].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let y=0,M=E.length;y<M;++y){const A=E[y],b=A.start,w=A.count;for(let C=b,U=b+w;C<U;C+=3)x(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const p=new L,c=new L,S=new L,u=new L;function R(y){S.fromBufferAttribute(r,y),u.copy(S);const M=a[y];p.copy(M),p.sub(S.multiplyScalar(S.dot(M))).normalize(),c.crossVectors(u,M);const b=c.dot(l[y])<0?-1:1;o.setXYZW(y,p.x,p.y,p.z,b)}for(let y=0,M=E.length;y<M;++y){const A=E[y],b=A.start,w=A.count;for(let C=b,U=b+w;C<U;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,f=new L,h=new L,g=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),T=t.getX(d+1),_=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,T),o.fromBufferAttribute(e,_),h.subVectors(o,s),g.subVectors(r,s),h.cross(g),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),a.add(h),l.add(h),f.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),g.subVectors(r,s),h.cross(g),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const f=a.array,h=a.itemSize,g=a.normalized,d=new f.constructor(l.length*h);let m=0,v=0;for(let T=0,_=l.length;T<_;T++){a.isInterleavedBufferAttribute?m=l[T]*a.data.stride+a.offset:m=l[T]*h;for(let x=0;x<h;x++)d[v++]=f[m++]}return new Ge(d,h,g)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],f=t(l,n);e.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const l=[],f=s[a];for(let h=0,g=f.length;h<g;h++){const d=f[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const f=o[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(t[f]=l[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const f=n[l];t.data.attributes[l]=f.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],h=[];for(let g=0,d=f.length;g<d;g++){const m=f[g];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(e))}const s=t.morphAttributes;for(const f in s){const h=[],g=s[f];for(let d=0,m=g.length;d<m;d++)h.push(g[d].clone(e));this.morphAttributes[f]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let f=0,h=o.length;f<h;f++){const g=o[f];this.addGroup(g.start,g.count,g.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Dg=0;class Cs extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ar,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=_c,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const zn=new L,Pa=new L,Hs=new L,ii=new L,Ia=new L,Gs=new L,Da=new L;class Rs{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Pa.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Pa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Hs),a=ii.dot(this.direction),l=-ii.dot(Hs),f=ii.lengthSq(),h=Math.abs(1-o*o);let g,d,m,v;if(h>0)if(g=o*l-a,d=o*a-l,v=s*h,g>=0)if(d>=-v)if(d<=v){const T=1/h;g*=T,d*=T,m=g*(g+o*d+2*a)+d*(o*g+d+2*l)+f}else d=s,g=Math.max(0,-(o*d+a)),m=-g*g+d*(d+2*l)+f;else d=-s,g=Math.max(0,-(o*d+a)),m=-g*g+d*(d+2*l)+f;else d<=-v?(g=Math.max(0,-(-o*s+a)),d=g>0?-s:Math.min(Math.max(-s,-l),s),m=-g*g+d*(d+2*l)+f):d<=v?(g=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+f):(g=Math.max(0,-(o*s+a)),d=g>0?s:Math.min(Math.max(-s,-l),s),m=-g*g+d*(d+2*l)+f);else d=o>0?-s:s,g=Math.max(0,-(o*d+a)),m=-g*g+d*(d+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Pa).addScaledVector(Hs,d),m}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const f=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,d=this.origin;return f>=0?(n=(t.min.x-d.x)*f,r=(t.max.x-d.x)*f):(n=(t.max.x-d.x)*f,r=(t.min.x-d.x)*f),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),g>=0?(a=(t.min.z-d.z)*g,l=(t.max.z-d.z)*g):(a=(t.max.z-d.z)*g,l=(t.min.z-d.z)*g),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,r,s){Ia.subVectors(e,t),Gs.subVectors(n,t),Da.crossVectors(Ia,Gs);let o=this.direction.dot(Da),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(Gs.crossVectors(ii,Gs));if(l<0)return null;const f=a*this.direction.dot(Ia.cross(ii));if(f<0||l+f>o)return null;const h=-a*ii.dot(Da);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jf extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ue,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zu=new Jt,Si=new Rs,ks=new zl,Vu=new L,Ws=new L,Xs=new L,$s=new L,La=new L,qs=new L,Hu=new L,Ys=new L;class tn extends Fe{constructor(t=new an,e=new jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){qs.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const h=a[l],g=s[l];h!==0&&(La.fromBufferAttribute(g,t),o?qs.addScaledVector(La,h):qs.addScaledVector(La.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(ks.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ks,Vu)===null||Si.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(zu.copy(s).invert(),Si.copy(t.ray).applyMatrix4(zu),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,g=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,T=d.length;v<T;v++){const _=d[v],x=o[_.materialIndex],E=Math.max(_.start,m.start),p=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let c=E,S=p;c<S;c+=3){const u=a.getX(c),R=a.getX(c+1),y=a.getX(c+2);r=Zs(this,x,t,n,f,h,g,u,R,y),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),T=Math.min(a.count,m.start+m.count);for(let _=v,x=T;_<x;_+=3){const E=a.getX(_),p=a.getX(_+1),c=a.getX(_+2);r=Zs(this,o,t,n,f,h,g,E,p,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,T=d.length;v<T;v++){const _=d[v],x=o[_.materialIndex],E=Math.max(_.start,m.start),p=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let c=E,S=p;c<S;c+=3){const u=c,R=c+1,y=c+2;r=Zs(this,x,t,n,f,h,g,u,R,y),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let _=v,x=T;_<x;_+=3){const E=_,p=_+1,c=_+2;r=Zs(this,o,t,n,f,h,g,E,p,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function Lg(i,t,e,n,r,s,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Rn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Ys);return f<e.near||f>e.far?null:{distance:f,point:Ys.clone(),object:i}}function Zs(i,t,e,n,r,s,o,a,l,f){i.getVertexPosition(a,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(f,$s);const h=Lg(i,t,e,n,Ws,Xs,$s,Hu);if(h){const g=new L;ce.getBarycoord(Hu,Ws,Xs,$s,g),r&&(h.uv=ce.getInterpolatedAttribute(r,a,l,f,g,new gt)),s&&(h.uv1=ce.getInterpolatedAttribute(s,a,l,f,g,new gt)),o&&(h.normal=ce.getInterpolatedAttribute(o,a,l,f,g,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:f,normal:new L,materialIndex:0};ce.getNormal(Ws,Xs,$s,d.normal),h.face=d,h.barycoord=g}return h}class Ug extends He{constructor(t=null,e=1,n=1,r,s,o,a,l,f=Re,h=Re,g,d){super(null,o,a,l,f,h,r,s,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ua=new L,Ng=new L,Fg=new $t;class gn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ua.subVectors(n,e).cross(Ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fg.getNormalMatrix(t),r=this.coplanarPoint(Ua).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new zl,Og=new gt(.5,.5),Js=new L;class Vl{constructor(t=new gn,e=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],f=s[3],h=s[4],g=s[5],d=s[6],m=s[7],v=s[8],T=s[9],_=s[10],x=s[11],E=s[12],p=s[13],c=s[14],S=s[15];if(r[0].setComponents(f-o,m-h,x-v,S-E).normalize(),r[1].setComponents(f+o,m+h,x+v,S+E).normalize(),r[2].setComponents(f+a,m+g,x+T,S+p).normalize(),r[3].setComponents(f-a,m-g,x-T,S-p).normalize(),n)r[4].setComponents(l,d,_,c).normalize(),r[5].setComponents(f-l,m-d,x-_,S-c).normalize();else if(r[4].setComponents(f-l,m-d,x-_,S-c).normalize(),e===Tn)r[5].setComponents(f+l,m+d,x+_,S+c).normalize();else if(e===ys)r[5].setComponents(l,d,_,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=Og.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Js.x=r.normal.x>0?t.max.x:t.min.x,Js.y=r.normal.y>0?t.max.y:t.min.y,Js.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qf extends He{constructor(t=[],e=Vi,n,r,s,o,a,l,f,h){super(t,e,n,r,s,o,a,l,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ms extends He{constructor(t,e,n=Pn,r,s,o,a=Re,l=Re,f,h=Zn,g=1){if(h!==Zn&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:g};super(d,r,s,o,a,l,h,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ol(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bg extends Ms{constructor(t,e=Pn,n=Vi,r,s,o=Re,a=Re,l,f=Zn){const h={width:t,height:t,depth:1},g=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class td extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qn extends an{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],f=[],h=[],g=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(g,2));function v(T,_,x,E,p,c,S,u,R,y,M){const A=c/R,b=S/y,w=c/2,C=S/2,U=u/2,F=R+1,B=y+1;let O=0,k=0;const G=new L;for(let at=0;at<B;at++){const et=at*b-C;for(let it=0;it<F;it++){const ht=it*A-w;G[T]=ht*E,G[_]=et*p,G[x]=U,f.push(G.x,G.y,G.z),G[T]=0,G[_]=0,G[x]=u>0?1:-1,h.push(G.x,G.y,G.z),g.push(it/R),g.push(1-at/y),O+=1}}for(let at=0;at<y;at++)for(let et=0;et<R;et++){const it=d+et+F*at,ht=d+et+F*(at+1),Et=d+(et+1)+F*(at+1),Tt=d+(et+1)+F*at;l.push(it,ht,Tt),l.push(ht,Et,Tt),k+=6}a.addGroup(m,k,M),m+=k,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qo extends an{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const f=this;r=Math.floor(r),s=Math.floor(s);const h=[],g=[],d=[],m=[];let v=0;const T=[],_=n/2;let x=0;E(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(h),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(m,2));function E(){const c=new L,S=new L;let u=0;const R=(e-t)/n;for(let y=0;y<=s;y++){const M=[],A=y/s,b=A*(e-t)+t;for(let w=0;w<=r;w++){const C=w/r,U=C*l+a,F=Math.sin(U),B=Math.cos(U);S.x=b*F,S.y=-A*n+_,S.z=b*B,g.push(S.x,S.y,S.z),c.set(F,R,B).normalize(),d.push(c.x,c.y,c.z),m.push(C,1-A),M.push(v++)}T.push(M)}for(let y=0;y<r;y++)for(let M=0;M<s;M++){const A=T[M][y],b=T[M+1][y],w=T[M+1][y+1],C=T[M][y+1];(t>0||M!==0)&&(h.push(A,b,C),u+=3),(e>0||M!==s-1)&&(h.push(b,w,C),u+=3)}f.addGroup(x,u,0),x+=u}function p(c){const S=v,u=new gt,R=new L;let y=0;const M=c===!0?t:e,A=c===!0?1:-1;for(let w=1;w<=r;w++)g.push(0,_*A,0),d.push(0,A,0),m.push(.5,.5),v++;const b=v;for(let w=0;w<=r;w++){const U=w/r*l+a,F=Math.cos(U),B=Math.sin(U);R.x=M*B,R.y=_*A,R.z=M*F,g.push(R.x,R.y,R.z),d.push(0,A,0),u.x=F*.5+.5,u.y=B*.5*A+.5,m.push(u.x,u.y),v++}for(let w=0;w<r;w++){const C=S+w,U=b+w;c===!0?h.push(U,U+1,C):h.push(U+1,U,C),y+=3}f.addGroup(x,y,c===!0?1:2),x+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,f;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),f=n[r]-o,f<0)a=r+1;else if(f>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new gt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,r=[],s=[],o=[],a=new L,l=new Jt;for(let m=0;m<=t;m++){const v=m/t;r[m]=this.getTangentAt(v,new L)}s[0]=new L,o[0]=new L;let f=Number.MAX_VALUE;const h=Math.abs(r[0].x),g=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=f&&(f=h,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),d<=f&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Wt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,v))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Wt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let v=1;v<=t;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hl extends Dn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),f=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),g=Math.sin(this.aRotation),d=l-this.aX,m=f-this.aY;l=d*h-m*g+this.aX,f=d*g+m*h+this.aY}return n.set(l,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zg extends Hl{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,f){r(o,a,f*(a-s),f*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,f,h,g){let d=(o-s)/f-(a-s)/(f+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+g)+(l-a)/g;d*=h,m*=h,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Ks=new L,Na=new Gl,Fa=new Gl,Oa=new Gl;class Vg extends Dn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let f,h;this.closed||a>0?f=r[(a-1)%s]:(Ks.subVectors(r[0],r[1]).add(r[0]),f=Ks);const g=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ks.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(f.distanceToSquared(g),m),T=Math.pow(g.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(h),m);T<1e-4&&(T=1),v<1e-4&&(v=T),_<1e-4&&(_=T),Na.initNonuniformCatmullRom(f.x,g.x,d.x,h.x,v,T,_),Fa.initNonuniformCatmullRom(f.y,g.y,d.y,h.y,v,T,_),Oa.initNonuniformCatmullRom(f.z,g.z,d.z,h.z,v,T,_)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(f.x,g.x,d.x,h.x,this.tension),Fa.initCatmullRom(f.y,g.y,d.y,h.y,this.tension),Oa.initCatmullRom(f.z,g.z,d.z,h.z,this.tension));return n.set(Na.calc(l),Fa.calc(l),Oa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gu(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Hg(i,t){const e=1-i;return e*e*t}function Gg(i,t){return 2*(1-i)*i*t}function kg(i,t){return i*i*t}function us(i,t,e,n){return Hg(i,t)+Gg(i,e)+kg(i,n)}function Wg(i,t){const e=1-i;return e*e*e*t}function Xg(i,t){const e=1-i;return 3*e*e*i*t}function $g(i,t){return 3*(1-i)*i*i*t}function qg(i,t){return i*i*i*t}function hs(i,t,e,n,r){return Wg(i,t)+Xg(i,e)+$g(i,n)+qg(i,r)}class ed extends Dn{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,r.x,s.x,o.x,a.x),hs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yg extends Dn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,r.x,s.x,o.x,a.x),hs(t,r.y,s.y,o.y,a.y),hs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nd extends Dn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zg extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends Dn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(us(t,r.x,s.x,o.x),us(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jg extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(us(t,r.x,s.x,o.x),us(t,r.y,s.y,o.y),us(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],f=r[o],h=r[o>r.length-2?r.length-1:o+1],g=r[o>r.length-3?r.length-1:o+2];return n.set(Gu(a,l.x,f.x,h.x,g.x),Gu(a,l.y,f.y,h.y,g.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var sl=Object.freeze({__proto__:null,ArcCurve:zg,CatmullRomCurve3:Vg,CubicBezierCurve:ed,CubicBezierCurve3:Yg,EllipseCurve:Hl,LineCurve:nd,LineCurve3:Zg,QuadraticBezierCurve:id,QuadraticBezierCurve3:Jg,SplineCurve:rd});class Kg extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),f=l===0?0:1-o/l;return a.getPointAt(f,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let f=0;f<l.length;f++){const h=l[f];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new sl[r.type]().fromJSON(r))}return this}}class ku extends Kg{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nd(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new id(this.currentPoint.clone(),new gt(t,e),new gt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new ed(this.currentPoint.clone(),new gt(t,e),new gt(n,r),new gt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+f,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const f=new Hl(t,e,n,r,s,o,a,l);if(this.curves.length>0){const g=f.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(f);const h=f.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sd extends ku{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new ku().fromJSON(r))}return this}}function jg(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=od(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,f;if(n&&(s=im(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,g=l;for(let d=e;d<r;d+=e){const m=i[d],v=i[d+1];m<a&&(a=m),v<l&&(l=v),m>h&&(h=m),v>g&&(g=v)}f=Math.max(h-a,g-l),f=f!==0?32767/f:0}return Es(s,o,e,a,l,f,0),o}function od(i,t,e,n,r){let s;if(r===pm(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Wu(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Wu(o/n|0,i[o],i[o+1],s);return s&&Ur(s,s.next)&&(Ts(s),s=s.next),s}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||he(e.prev,e,e.next)===0)){if(Ts(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,r,s,o){if(!i)return;!o&&s&&cm(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,f=i.next;if(s?tm(i,n,r,s):Qg(i)){t.push(l.i,i.i,f.i),Ts(i),i=f.next,a=f.next;continue}if(i=f,i===a){o?o===1?(i=em(Hi(i),t),Es(i,t,e,n,r,s,2)):o===2&&nm(i,t,e,n,r,s):Es(Hi(i),t,e,n,r,s,1);break}}}function Qg(i){const t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,f=n.y,h=Math.min(r,s,o),g=Math.min(a,l,f),d=Math.max(r,s,o),m=Math.max(a,l,f);let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=d&&v.y>=g&&v.y<=m&&rs(r,a,s,l,o,f,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function tm(i,t,e,n){const r=i.prev,s=i,o=i.next;if(he(r,s,o)>=0)return!1;const a=r.x,l=s.x,f=o.x,h=r.y,g=s.y,d=o.y,m=Math.min(a,l,f),v=Math.min(h,g,d),T=Math.max(a,l,f),_=Math.max(h,g,d),x=ol(m,v,t,e,n),E=ol(T,_,t,e,n);let p=i.prevZ,c=i.nextZ;for(;p&&p.z>=x&&c&&c.z<=E;){if(p.x>=m&&p.x<=T&&p.y>=v&&p.y<=_&&p!==r&&p!==o&&rs(a,h,l,g,f,d,p.x,p.y)&&he(p.prev,p,p.next)>=0||(p=p.prevZ,c.x>=m&&c.x<=T&&c.y>=v&&c.y<=_&&c!==r&&c!==o&&rs(a,h,l,g,f,d,c.x,c.y)&&he(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;p&&p.z>=x;){if(p.x>=m&&p.x<=T&&p.y>=v&&p.y<=_&&p!==r&&p!==o&&rs(a,h,l,g,f,d,p.x,p.y)&&he(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;c&&c.z<=E;){if(c.x>=m&&c.x<=T&&c.y>=v&&c.y<=_&&c!==r&&c!==o&&rs(a,h,l,g,f,d,c.x,c.y)&&he(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function em(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Ur(n,r)&&cd(n,e,e.next,r)&&bs(n,r)&&bs(r,n)&&(t.push(n.i,e.i,r.i),Ts(e),Ts(e.next),e=i=r),e=e.next}while(e!==i);return Hi(e)}function nm(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let l=ld(o,a);o=Hi(o,o.next),l=Hi(l,l.next),Es(o,t,e,n,r,s,0),Es(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function im(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,f=od(i,a,l,n,!1);f===f.next&&(f.steiner=!0),r.push(um(f))}r.sort(rm);for(let s=0;s<r.length;s++)e=sm(r[s],e);return e}function rm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function sm(i,t){const e=om(i,t);if(!e)return t;const n=ld(e,i);return Hi(n,n.next),Hi(e,e.next)}function om(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const g=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=n&&g>s&&(s=g,o=e.x<e.next.x?e:e.next,g===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,f=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ad(r<f?n:s,r,l,f,r<f?s:n,r,e.x,e.y)){const g=Math.abs(r-e.y)/(n-e.x);bs(e,i)&&(g<h||g===h&&(e.x>o.x||e.x===o.x&&am(o,e)))&&(o=e,h=g)}e=e.next}while(e!==a);return o}function am(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function cm(i,t,e,n){let r=i;do r.z===0&&(r.z=ol(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,lm(r)}function lm(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let f=0;f<e&&(a++,o=o.nextZ,!!o);f++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ol(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function um(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ad(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function rs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&ad(i,t,e,n,r,s,o,a)}function hm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fm(i,t)&&(bs(i,t)&&bs(t,i)&&dm(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||Ur(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function cd(i,t,e,n){const r=Qs(he(i,t,e)),s=Qs(he(i,t,n)),o=Qs(he(e,n,i)),a=Qs(he(e,n,t));return!!(r!==s&&o!==a||r===0&&js(i,e,t)||s===0&&js(i,n,t)||o===0&&js(e,i,n)||a===0&&js(e,t,n))}function js(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qs(i){return i>0?1:i<0?-1:0}function fm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function bs(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function dm(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ld(i,t){const e=al(i.i,i.x,i.y),n=al(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Wu(i,t,e,n){const r=al(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pm(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class gm{static triangulate(t,e,n=2){return jg(t,e,n)}}class Er{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Er.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Xu(t),$u(n,t);let o=t.length;e.forEach(Xu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,$u(n,e[l]);const a=gm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Xu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $u(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class kl extends an{constructor(t=new sd([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const f=t[a];o(f)}this.setAttribute("position",new qe(r,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals();function o(a){const l=[],f=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:m-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:mm;let p,c=!1,S,u,R,y;if(x){p=x.getSpacedPoints(h),c=!0,d=!1;const J=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(h,J),u=new L,R=new L,y=new L}d||(_=0,m=0,v=0,T=0);const M=a.extractPoints(f);let A=M.shape;const b=M.holes;if(!Er.isClockWise(A)){A=A.reverse();for(let J=0,tt=b.length;J<tt;J++){const K=b[J];Er.isClockWise(K)&&(b[J]=K.reverse())}}function C(J){const K=10000000000000001e-36;let ot=J[0];for(let N=1;N<=J.length;N++){const St=N%J.length,ct=J[St],Mt=ct.x-ot.x,st=ct.y-ot.y,D=Mt*Mt+st*st,P=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(ot.x),Math.abs(ot.y)),z=K*P*P;if(D<=z){J.splice(St,1),N--;continue}ot=ct}}C(A),b.forEach(C);const U=b.length,F=A;for(let J=0;J<U;J++){const tt=b[J];A=A.concat(tt)}function B(J,tt,K){return tt||Kt("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(tt,K)}const O=A.length;function k(J,tt,K){let ot,N,St;const ct=J.x-tt.x,Mt=J.y-tt.y,st=K.x-J.x,D=K.y-J.y,P=ct*ct+Mt*Mt,z=ct*D-Mt*st;if(Math.abs(z)>Number.EPSILON){const W=Math.sqrt(P),j=Math.sqrt(st*st+D*D),$=tt.x-Mt/W,pt=tt.y+ct/W,mt=K.x-D/j,Ot=K.y+st/j,Vt=((mt-$)*D-(Ot-pt)*st)/(ct*D-Mt*st);ot=$+ct*Vt-J.x,N=pt+Mt*Vt-J.y;const lt=ot*ot+N*N;if(lt<=2)return new gt(ot,N);St=Math.sqrt(lt/2)}else{let W=!1;ct>Number.EPSILON?st>Number.EPSILON&&(W=!0):ct<-Number.EPSILON?st<-Number.EPSILON&&(W=!0):Math.sign(Mt)===Math.sign(D)&&(W=!0),W?(ot=-Mt,N=ct,St=Math.sqrt(P)):(ot=ct,N=Mt,St=Math.sqrt(P/2))}return new gt(ot/St,N/St)}const G=[];for(let J=0,tt=F.length,K=tt-1,ot=J+1;J<tt;J++,K++,ot++)K===tt&&(K=0),ot===tt&&(ot=0),G[J]=k(F[J],F[K],F[ot]);const at=[];let et,it=G.concat();for(let J=0,tt=U;J<tt;J++){const K=b[J];et=[];for(let ot=0,N=K.length,St=N-1,ct=ot+1;ot<N;ot++,St++,ct++)St===N&&(St=0),ct===N&&(ct=0),et[ot]=k(K[ot],K[St],K[ct]);at.push(et),it=it.concat(et)}let ht;if(_===0)ht=Er.triangulateShape(F,b);else{const J=[],tt=[];for(let K=0;K<_;K++){const ot=K/_,N=m*Math.cos(ot*Math.PI/2),St=v*Math.sin(ot*Math.PI/2)+T;for(let ct=0,Mt=F.length;ct<Mt;ct++){const st=B(F[ct],G[ct],St);ut(st.x,st.y,-N),ot===0&&J.push(st)}for(let ct=0,Mt=U;ct<Mt;ct++){const st=b[ct];et=at[ct];const D=[];for(let P=0,z=st.length;P<z;P++){const W=B(st[P],et[P],St);ut(W.x,W.y,-N),ot===0&&D.push(W)}ot===0&&tt.push(D)}}ht=Er.triangulateShape(J,tt)}const Et=ht.length,Tt=v+T;for(let J=0;J<O;J++){const tt=d?B(A[J],it[J],Tt):A[J];c?(R.copy(S.normals[0]).multiplyScalar(tt.x),u.copy(S.binormals[0]).multiplyScalar(tt.y),y.copy(p[0]).add(R).add(u),ut(y.x,y.y,y.z)):ut(tt.x,tt.y,0)}for(let J=1;J<=h;J++)for(let tt=0;tt<O;tt++){const K=d?B(A[tt],it[tt],Tt):A[tt];c?(R.copy(S.normals[J]).multiplyScalar(K.x),u.copy(S.binormals[J]).multiplyScalar(K.y),y.copy(p[J]).add(R).add(u),ut(y.x,y.y,y.z)):ut(K.x,K.y,g/h*J)}for(let J=_-1;J>=0;J--){const tt=J/_,K=m*Math.cos(tt*Math.PI/2),ot=v*Math.sin(tt*Math.PI/2)+T;for(let N=0,St=F.length;N<St;N++){const ct=B(F[N],G[N],ot);ut(ct.x,ct.y,g+K)}for(let N=0,St=b.length;N<St;N++){const ct=b[N];et=at[N];for(let Mt=0,st=ct.length;Mt<st;Mt++){const D=B(ct[Mt],et[Mt],ot);c?ut(D.x,D.y+p[h-1].y,p[h-1].x+K):ut(D.x,D.y,g+K)}}}Y(),nt();function Y(){const J=r.length/3;if(d){let tt=0,K=O*tt;for(let ot=0;ot<Et;ot++){const N=ht[ot];ft(N[2]+K,N[1]+K,N[0]+K)}tt=h+_*2,K=O*tt;for(let ot=0;ot<Et;ot++){const N=ht[ot];ft(N[0]+K,N[1]+K,N[2]+K)}}else{for(let tt=0;tt<Et;tt++){const K=ht[tt];ft(K[2],K[1],K[0])}for(let tt=0;tt<Et;tt++){const K=ht[tt];ft(K[0]+O*h,K[1]+O*h,K[2]+O*h)}}n.addGroup(J,r.length/3-J,0)}function nt(){const J=r.length/3;let tt=0;rt(F,tt),tt+=F.length;for(let K=0,ot=b.length;K<ot;K++){const N=b[K];rt(N,tt),tt+=N.length}n.addGroup(J,r.length/3-J,1)}function rt(J,tt){let K=J.length;for(;--K>=0;){const ot=K;let N=K-1;N<0&&(N=J.length-1);for(let St=0,ct=h+_*2;St<ct;St++){const Mt=O*St,st=O*(St+1),D=tt+ot+Mt,P=tt+N+Mt,z=tt+N+st,W=tt+ot+st;xt(D,P,z,W)}}}function ut(J,tt,K){l.push(J),l.push(tt),l.push(K)}function ft(J,tt,K){Gt(J),Gt(tt),Gt(K);const ot=r.length/3,N=E.generateTopUV(n,r,ot-3,ot-2,ot-1);At(N[0]),At(N[1]),At(N[2])}function xt(J,tt,K,ot){Gt(J),Gt(tt),Gt(ot),Gt(tt),Gt(K),Gt(ot);const N=r.length/3,St=E.generateSideWallUV(n,r,N-6,N-3,N-2,N-1);At(St[0]),At(St[1]),At(St[3]),At(St[1]),At(St[2]),At(St[3])}function Gt(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function At(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _m(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new sl[r.type]().fromJSON(r)),new kl(n,t.options)}}const mm={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],f=t[r*3],h=t[r*3+1];return[new gt(s,o),new gt(a,l),new gt(f,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],f=t[n*3],h=t[n*3+1],g=t[n*3+2],d=t[r*3],m=t[r*3+1],v=t[r*3+2],T=t[s*3],_=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-f)?[new gt(o,1-l),new gt(f,1-g),new gt(d,1-v),new gt(T,1-x)]:[new gt(a,1-l),new gt(h,1-g),new gt(m,1-v),new gt(_,1-x)]}};function _m(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Br extends an{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),f=a+1,h=l+1,g=t/a,d=e/l,m=[],v=[],T=[],_=[];for(let x=0;x<h;x++){const E=x*d-o;for(let p=0;p<f;p++){const c=p*g-s;v.push(c,-E,0),T.push(0,0,1),_.push(p/a),_.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<a;E++){const p=E+f*x,c=E+f*(x+1),S=E+1+f*(x+1),u=E+1+f*x;m.push(p,c,u),m.push(c,S,u)}this.setIndex(m),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(T,3)),this.setAttribute("uv",new qe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}function Nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Nr(i[e]);for(const r in n)t[r]=n[r]}return t}function vm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ud(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const xm={clone:Nr,merge:Be};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mm extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xr extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ue,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Em extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hd extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ba=new Jt,qu=new L,Yu=new L;class Tm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ys||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const to=new L,eo=new pi,yn=new L;class fd extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(to,eo,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,eo,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(to,eo,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,eo,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new L,Zu=new gt,Ju=new gt;class mn extends fd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,Ju),e.subVectors(Ju,Zu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/f,r*=o.width/l,n*=o.height/f}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ta extends fd{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Am extends Tm{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ku extends hd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Am}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wm extends hd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ir=-90,rr=1;class Cm extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(ir,rr,t,e);r.layers=this.layers,this.add(r);const s=new mn(ir,rr,t,e);s.layers=this.layers,this.add(s);const o=new mn(ir,rr,t,e);o.layers=this.layers,this.add(o);const a=new mn(ir,rr,t,e);a.layers=this.layers,this.add(a);const l=new mn(ir,rr,t,e);l.layers=this.layers,this.add(l);const f=new mn(ir,rr,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const f of e)this.remove(f);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,f,h]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(g,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Rm extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ju=new Jt;class Pm{constructor(t,e,n=0,r=1/0){this.ray=new Rs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(t,e=!0,n=[]){return cl(t,this,n,e),n.sort(Qu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)cl(t[r],this,n,e);return n.sort(Qu),n}}function Qu(i,t){return i.distance-t.distance}function cl(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)cl(s[o],t,e,!0)}}const th=new L,no=new L,sr=new L,or=new L,za=new L,Im=new L,Dm=new L;class we{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){th.subVectors(t,this.start),no.subVectors(this.end,this.start);const n=no.dot(no);let s=no.dot(th)/n;return e&&(s=Wt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Im,n=Dm){const r=10000000000000001e-32;let s,o;const a=this.start,l=t.start,f=this.end,h=t.end;sr.subVectors(f,a),or.subVectors(h,l),za.subVectors(a,l);const g=sr.dot(sr),d=or.dot(or),m=or.dot(za);if(g<=r&&d<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(g<=r)s=0,o=m/d,o=Wt(o,0,1);else{const v=sr.dot(za);if(d<=r)o=0,s=Wt(-v/g,0,1);else{const T=sr.dot(or),_=g*d-T*T;_!==0?s=Wt((T*m-v*d)/_,0,1):s=0,o=(T*s+m)/d,o<0?(o=0,s=Wt(-v/g,0,1)):o>1&&(o=1,s=Wt((T-v)/g,0,1))}}return e.copy(a).addScaledVector(sr,s),n.copy(l).addScaledVector(or,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function eh(i,t,e,n){const r=Lm(n);switch(e){case kf:return i*t;case Xf:return i*t/r.components*r.byteLength;case Il:return i*t/r.components*r.byteLength;case Dr:return i*t*2/r.components*r.byteLength;case Dl:return i*t*2/r.components*r.byteLength;case Wf:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case Ll:return i*t*4/r.components*r.byteLength;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:case Pc:return Math.max(i,16)*Math.max(t,8)/4;case wc:case Rc:return Math.max(i,8)*Math.max(t,8)/2;case Ic:case Dc:case Uc:case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Fc:case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jc:case Qc:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case il:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(i){switch(i){case Qe:case zf:return{byteLength:1,components:1};case vs:case Vf:case Yn:return{byteLength:2,components:1};case Rl:case Pl:return{byteLength:2,components:4};case Pn:case Cl:case bn:return{byteLength:4,components:1};case Hf:case Gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ws}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ws);function dd(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Um(i){const t=new WeakMap;function e(a,l){const f=a.array,h=a.usage,g=f.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,f,h),a.onUploadCallback();let m;if(f instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)m=i.HALF_FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=i.SHORT;else if(f instanceof Uint32Array)m=i.UNSIGNED_INT;else if(f instanceof Int32Array)m=i.INT;else if(f instanceof Int8Array)m=i.BYTE;else if(f instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,l,f){const h=l.array,g=l.updateRanges;if(i.bindBuffer(f,a),g.length===0)i.bufferSubData(f,0,h);else{g.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<g.length;m++){const v=g[d],T=g[m];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++d,g[d]=T)}g.length=d+1;for(let m=0,v=g.length;m<v;m++){const T=g[m];i.bufferSubData(f,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=t.get(a);if(f===void 0)t.set(a,e(a,l));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,a,l),f.version=a.version}}return{get:r,remove:s,update:o}}var Nm=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
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
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x_=`float getShadowMask() {
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
}`,tv=`#define NORMAL
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
}`,ev=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,rv=`#define STANDARD
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
}`,sv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,cv=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,fv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Nm,alphahash_pars_fragment:Fm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Vm,aomap_fragment:Hm,aomap_pars_fragment:Gm,batching_pars_vertex:km,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:$m,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:r0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:c0,emissivemap_fragment:l0,emissivemap_pars_fragment:u0,colorspace_fragment:h0,colorspace_pars_fragment:f0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:g0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:w0,envmap_vertex:_0,fog_vertex:v0,fog_pars_vertex:x0,fog_fragment:y0,fog_pars_fragment:S0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:E0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:R0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:L0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:k0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:$0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:j0,normal_fragment_maps:Q0,normal_pars_fragment:t_,normal_pars_vertex:e_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:c_,packing:l_,premultiplied_alpha_fragment:u_,project_vertex:h_,dithering_fragment:f_,dithering_pars_fragment:d_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:__,shadowmap_vertex:v_,shadowmask_pars_fragment:x_,skinbase_vertex:y_,skinning_pars_vertex:S_,skinning_vertex:M_,skinnormal_vertex:E_,specularmap_fragment:b_,specularmap_pars_fragment:T_,tonemapping_fragment:A_,tonemapping_pars_fragment:w_,transmission_fragment:C_,transmission_pars_fragment:R_,uv_pars_fragment:P_,uv_pars_vertex:I_,uv_vertex:D_,worldpos_vertex:L_,background_vert:U_,background_frag:N_,backgroundCube_vert:F_,backgroundCube_frag:O_,cube_vert:B_,cube_frag:z_,depth_vert:V_,depth_frag:H_,distance_vert:G_,distance_frag:k_,equirect_vert:W_,equirect_frag:X_,linedashed_vert:$_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:Z_,meshlambert_vert:J_,meshlambert_frag:K_,meshmatcap_vert:j_,meshmatcap_frag:Q_,meshnormal_vert:tv,meshnormal_frag:ev,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:rv,meshphysical_frag:sv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:cv,points_frag:lv,shadow_vert:uv,shadow_frag:hv,sprite_vert:fv,sprite_frag:dv},bt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Mn={basic:{uniforms:Be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([bt.points,bt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([bt.common,bt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([bt.sprite,bt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Be([bt.common,bt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Be([bt.lights,bt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Mn.physical={uniforms:Be([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const io={r:0,b:0,g:0},Ei=new ue,pv=new Jt;function gv(i,t,e,n,r,s){const o=new jt(0);let a=r===!0?0:1,l,f,h=null,g=0,d=null;function m(E){let p=E.isScene===!0?E.background:null;if(p&&p.isTexture){const c=E.backgroundBlurriness>0;p=t.get(p,c)}return p}function v(E){let p=!1;const c=m(E);c===null?_(o,a):c&&c.isColor&&(_(c,1),p=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||p)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(E,p){const c=m(p);c&&(c.isCubeTexture||c.mapping===Qo)?(f===void 0&&(f=new tn(new qn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Nr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(S,u,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),Ei.copy(p.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,c.isCubeTexture&&c.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),f.material.uniforms.envMap.value=c,f.material.uniforms.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Ei)),f.material.toneMapped=Qt.getTransfer(c.colorSpace)!==ne,(h!==c||g!==c.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,h=c,g=c.version,d=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):c&&c.isTexture&&(l===void 0&&(l=new tn(new Br(2,2),new In({name:"BackgroundMaterial",uniforms:Nr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=c,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(c.colorSpace)!==ne,c.matrixAutoUpdate===!0&&c.updateMatrix(),l.material.uniforms.uvTransform.value.copy(c.matrix),(h!==c||g!==c.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=c,g=c.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function _(E,p){E.getRGB(io,ud(i)),e.buffers.color.setClear(io.r,io.g,io.b,p,s)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,p=1){o.set(E),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,_(o,a)},render:v,addToRenderList:T,dispose:x}}function mv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(b,w,C,U,F){let B=!1;const O=g(b,U,C,w);s!==O&&(s=O,f(s.object)),B=m(b,U,C,F),B&&v(b,U,C,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,c(b,w,C,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function f(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function g(b,w,C,U){const F=U.wireframe===!0;let B=n[w.id];B===void 0&&(B={},n[w.id]=B);const O=b.isInstancedMesh===!0?b.id:0;let k=B[O];k===void 0&&(k={},B[O]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let at=G[F];return at===void 0&&(at=d(l()),G[F]=at),at}function d(b){const w=[],C=[],U=[];for(let F=0;F<e;F++)w[F]=0,C[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:U,object:b,attributes:{},index:null}}function m(b,w,C,U){const F=s.attributes,B=w.attributes;let O=0;const k=C.getAttributes();for(const G in k)if(k[G].location>=0){const et=F[G];let it=B[G];if(it===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),et===void 0||et.attribute!==it||it&&et.data!==it.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function v(b,w,C,U){const F={},B=w.attributes;let O=0;const k=C.getAttributes();for(const G in k)if(k[G].location>=0){let et=B[G];et===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const it={};it.attribute=et,et&&et.data&&(it.data=et.data),F[G]=it,O++}s.attributes=F,s.attributesNum=O,s.index=U}function T(){const b=s.newAttributes;for(let w=0,C=b.length;w<C;w++)b[w]=0}function _(b){x(b,0)}function x(b,w){const C=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;C[b]=1,U[b]===0&&(i.enableVertexAttribArray(b),U[b]=1),F[b]!==w&&(i.vertexAttribDivisor(b,w),F[b]=w)}function E(){const b=s.newAttributes,w=s.enabledAttributes;for(let C=0,U=w.length;C<U;C++)w[C]!==b[C]&&(i.disableVertexAttribArray(C),w[C]=0)}function p(b,w,C,U,F,B,O){O===!0?i.vertexAttribIPointer(b,w,C,F,B):i.vertexAttribPointer(b,w,C,U,F,B)}function c(b,w,C,U){T();const F=U.attributes,B=C.getAttributes(),O=w.defaultAttributeValues;for(const k in B){const G=B[k];if(G.location>=0){let at=F[k];if(at===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){const et=at.normalized,it=at.itemSize,ht=t.get(at);if(ht===void 0)continue;const Et=ht.buffer,Tt=ht.type,Y=ht.bytesPerElement,nt=Tt===i.INT||Tt===i.UNSIGNED_INT||at.gpuType===Cl;if(at.isInterleavedBufferAttribute){const rt=at.data,ut=rt.stride,ft=at.offset;if(rt.isInstancedInterleavedBuffer){for(let xt=0;xt<G.locationSize;xt++)x(G.location+xt,rt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let xt=0;xt<G.locationSize;xt++)_(G.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let xt=0;xt<G.locationSize;xt++)p(G.location+xt,it/G.locationSize,Tt,et,ut*Y,(ft+it/G.locationSize*xt)*Y,nt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)x(G.location+rt,at.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<G.locationSize;rt++)_(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,it/G.locationSize,Tt,et,it*Y,it/G.locationSize*rt*Y,nt)}}else if(O!==void 0){const et=O[k];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(G.location,et);break;case 3:i.vertexAttrib3fv(G.location,et);break;case 4:i.vertexAttrib4fv(G.location,et);break;default:i.vertexAttrib1fv(G.location,et)}}}}E()}function S(){M();for(const b in n){const w=n[b];for(const C in w){const U=w[C];for(const F in U){const B=U[F];for(const O in B)h(B[O].object),delete B[O];delete U[F]}}delete n[b]}}function u(b){if(n[b.id]===void 0)return;const w=n[b.id];for(const C in w){const U=w[C];for(const F in U){const B=U[F];for(const O in B)h(B[O].object),delete B[O];delete U[F]}}delete n[b.id]}function R(b){for(const w in n){const C=n[w];for(const U in C){const F=C[U];if(F[b.id]===void 0)continue;const B=F[b.id];for(const O in B)h(B[O].object),delete B[O];delete F[b.id]}}}function y(b){for(const w in n){const C=n[w],U=b.isInstancedMesh===!0?b.id:0,F=C[U];if(F!==void 0){for(const B in F){const O=F[B];for(const k in O)h(O[k].object),delete O[k];delete F[B]}delete C[U],Object.keys(C).length===0&&delete n[w]}}}function M(){A(),o=!0,s!==r&&(s=r,f(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:u,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:_,disableUnusedAttributes:E}}function _v(i,t,e){let n;function r(f){n=f}function s(f,h){i.drawArrays(n,f,h),e.update(h,n,1)}function o(f,h,g){g!==0&&(i.drawArraysInstanced(n,f,h,g),e.update(h,n,g))}function a(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,h,0,g);let m=0;for(let v=0;v<g;v++)m+=h[v];e.update(m,n,1)}function l(f,h,g,d){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f.length;v++)o(f[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,f,0,h,0,d,0,g);let v=0;for(let T=0;T<g;T++)v+=h[T]*d[T];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!y)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const h=l(f);h!==f&&(Ht("WebGLRenderer:",f,"not supported, using",h,"instead."),f=h);const g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),u=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:E,maxVaryings:p,maxFragmentUniforms:c,maxSamples:S,samples:u}}function xv(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new gn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){const m=g.length!==0||d||n!==0||r;return r=d,n=g.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,d){e=h(g,d,0)},this.setState=function(g,d,m){const v=g.clippingPlanes,T=g.clipIntersection,_=g.clipShadows,x=i.get(g);if(!r||v===null||v.length===0||s&&!_)s?h(null):f();else{const E=s?0:n,p=E*4;let c=x.clippingState||null;l.value=c,c=h(v,d,p,m);for(let S=0;S!==p;++S)c[S]=e[S];x.clippingState=c,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function f(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(g,d,m,v){const T=g!==null?g.length:0;let _=null;if(T!==0){if(_=l.value,v!==!0||_===null){const x=m+T*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<x)&&(_=new Float32Array(x));for(let p=0,c=m;p!==T;++p,c+=4)o.copy(g[p]).applyMatrix4(E,a),o.normal.toArray(_,c),_[c+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,_}}const fi=4,nh=[.125,.215,.35,.446,.526,.582],Li=20,yv=256,$r=new ta,ih=new jt;let Va=null,Ha=0,Ga=0,ka=!1;const Sv=new L;class rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Sv}=s;Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ha,Ga),this._renderer.xr.enabled=ka,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Yn,format:vn,colorSpace:Lr,depthBuffer:!1},r=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mv(s)),this._blurMaterial=bv(s,t,e),this._ggxMaterial=Ev(s,t,e)}return r}_compileMaterial(t){const e=new tn(new an,t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,r,s){const l=new mn(90,1,e,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,m=g.toneMapping;g.getClearColor(ih),g.toneMapping=wn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new qn,new jf({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let x=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,x=!0):(_.color.copy(ih),x=!0);for(let p=0;p<6;p++){const c=p%3;c===0?(l.up.set(0,f[p],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[p],s.y,s.z)):c===1?(l.up.set(0,0,f[p]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[p],s.z)):(l.up.set(0,f[p],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[p]));const S=this._cubeSize;ar(r,c*S,p>2?S:0,S,S),g.setRenderTarget(r),x&&g.render(T,l),g.render(t,l)}g.toneMapping=m,g.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Vi||t.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,f=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),g=Math.sqrt(f*f-h*h),d=0+f*1.25,m=g*d,{_lodMax:v}=this,T=this._sizeLods[n],_=3*T*(n>v-fi?n-v+fi:0),x=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=v-e,ar(s,_,x,3*T,2*T),r.setRenderTarget(s),r.render(a,$r),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,ar(t,_,x,3*T,2*T),r.setRenderTarget(t),r.render(a,$r)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const h=3,g=this._lodMeshes[r];g.material=f;const d=f.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),T=s/v,_=isFinite(s)?1+Math.floor(h*T):Li;_>Li&&Ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Li}`);const x=[];let E=0;for(let R=0;R<Li;++R){const y=R/T,M=Math.exp(-y*y/2);x.push(M),R===0?E+=M:R<_&&(E+=2*M)}for(let R=0;R<x.length;R++)x[R]=x[R]/E;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:p}=this;d.dTheta.value=v,d.mipInt.value=p-n;const c=this._sizeLods[r],S=3*c*(r>p-fi?r-p+fi:0),u=4*(this._cubeSize-c);ar(e,S,u,3*c,2*c),l.setRenderTarget(e),l.render(g,$r)}}function Mv(i){const t=[],e=[],n=[];let r=i;const s=i-fi+1+nh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-fi?l=nh[o-i+fi-1]:o===0&&(l=0),e.push(l);const f=1/(a-2),h=-f,g=1+f,d=[h,h,g,h,g,g,h,h,g,g,h,g],m=6,v=6,T=3,_=2,x=1,E=new Float32Array(T*v*m),p=new Float32Array(_*v*m),c=new Float32Array(x*v*m);for(let u=0;u<m;u++){const R=u%3*2/3-1,y=u>2?0:-1,M=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];E.set(M,T*v*u),p.set(d,_*v*u);const A=[u,u,u,u,u,u];c.set(A,x*v*u)}const S=new an;S.setAttribute("position",new Ge(E,T)),S.setAttribute("uv",new Ge(p,_)),S.setAttribute("faceIndex",new Ge(c,x)),n.push(new tn(S,null)),r>fi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function sh(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ev(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bv(i,t,e){const n=new Float32Array(Li),r=new L(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function oh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ah(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

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
			`},r=new qn(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Xn});s.uniforms.tEquirect.value=e;const o=new tn(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Le),new Cm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}function Tv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===ua||m===ha)if(t.has(d)){const v=t.get(d).texture;return a(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const T=new pd(v.height);return T.fromEquirectangularTexture(i,d),t.set(d,T),d.addEventListener("dispose",f),a(T.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,v=m===ua||m===ha,T=m===Vi||m===Ir;if(v||T){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new rh(i)),_=v?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return v&&E&&E.height>0||T&&E&&l(E)?(n===null&&(n=new rh(i)),_=v?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}function a(d,m){return m===ua?d.mapping=Vi:m===ha&&(d.mapping=Ir),d}function l(d){let m=0;const v=6;for(let T=0;T<v;T++)d[T]!==void 0&&m++;return m===v}function f(d){const m=d.target;m.removeEventListener("dispose",f);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Av(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&$o("WebGLRenderer: "+n+" extension not supported."),r}}}function wv(i,t,e,n){const r={},s=new WeakMap;function o(g){const d=g.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(g,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(g){const d=g.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function f(g){const d=[],m=g.index,v=g.attributes.position;let T=0;if(v===void 0)return;if(m!==null){const E=m.array;T=m.version;for(let p=0,c=E.length;p<c;p+=3){const S=E[p+0],u=E[p+1],R=E[p+2];d.push(S,u,u,R,R,S)}}else{const E=v.array;T=v.version;for(let p=0,c=E.length/3-1;p<c;p+=3){const S=p+0,u=p+1,R=p+2;d.push(S,u,u,R,R,S)}}const _=new(v.count>=65535?Kf:Jf)(d,1);_.version=T;const x=s.get(g);x&&t.remove(x),s.set(g,_)}function h(g){const d=s.get(g);if(d){const m=g.index;m!==null&&d.version<m.version&&f(g)}else f(g);return s.get(g)}return{get:a,update:l,getWireframeAttribute:h}}function Cv(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function f(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*o,v),e.update(m,n,v))}function h(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,v);let _=0;for(let x=0;x<v;x++)_+=m[x];e.update(_,n,1)}function g(d,m,v,T){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d.length;x++)f(d[x]/o,m[x],T[x]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,T,0,v);let x=0;for(let E=0;E<v;E++)x+=m[E]*T[E];e.update(x,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function Rv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Pv(i,t,e){const n=new WeakMap,r=new oe;function s(o,a,l){const f=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==g){let A=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var m=A;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,T=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let c=0;v===!0&&(c=1),T===!0&&(c=2),_===!0&&(c=3);let S=a.attributes.position.count*c,u=1;S>t.maxTextureSize&&(u=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*u*4*g),y=new Yf(R,S,u,g);y.type=bn,y.needsUpdate=!0;const M=c*4;for(let b=0;b<g;b++){const w=x[b],C=E[b],U=p[b],F=S*u*4*b;for(let B=0;B<w.count;B++){const O=B*M;v===!0&&(r.fromBufferAttribute(w,B),R[F+O+0]=r.x,R[F+O+1]=r.y,R[F+O+2]=r.z,R[F+O+3]=0),T===!0&&(r.fromBufferAttribute(C,B),R[F+O+4]=r.x,R[F+O+5]=r.y,R[F+O+6]=r.z,R[F+O+7]=0),_===!0&&(r.fromBufferAttribute(U,B),R[F+O+8]=r.x,R[F+O+9]=r.y,R[F+O+10]=r.z,R[F+O+11]=U.itemSize===4?r.w:1)}}d={count:g,texture:y,size:new gt(S,u)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let _=0;_<f.length;_++)v+=f[_];const T=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",T),l.getUniforms().setValue(i,"morphTargetInfluences",f)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Iv(i,t,e,n,r){let s=new WeakMap;function o(f){const h=r.render.frame,g=f.geometry,d=t.get(f,g);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),s.get(f)!==h&&(e.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,i.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const m=f.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function a(){s=new WeakMap}function l(f){const h=f.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Dv={[If]:"LINEAR_TONE_MAPPING",[Df]:"REINHARD_TONE_MAPPING",[Lf]:"CINEON_TONE_MAPPING",[Uf]:"ACES_FILMIC_TONE_MAPPING",[Ff]:"AGX_TONE_MAPPING",[Of]:"NEUTRAL_TONE_MAPPING",[Nf]:"CUSTOM_TONE_MAPPING"};function Lv(i,t,e,n,r){const s=new Cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Cn(t,e,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),a=new an;a.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new qe([0,2,0,0,2,0],2));const l=new Mm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new tn(a,l),h=new ta(-1,1,1,-1,0,1);let g=null,d=null,m=!1,v,T=null,_=[],x=!1;this.setSize=function(E,p){s.setSize(E,p),o.setSize(E,p);for(let c=0;c<_.length;c++){const S=_[c];S.setSize&&S.setSize(E,p)}},this.setEffects=function(E){_=E,x=_.length>0&&_[0].isRenderPass===!0;const p=s.width,c=s.height;for(let S=0;S<_.length;S++){const u=_[S];u.setSize&&u.setSize(p,c)}},this.begin=function(E,p){if(m||E.toneMapping===wn&&_.length===0)return!1;if(T=p,p!==null){const c=p.width,S=p.height;(s.width!==c||s.height!==S)&&this.setSize(c,S)}return x===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=wn,!0},this.hasRenderPass=function(){return x},this.end=function(E,p){E.toneMapping=v,m=!0;let c=s,S=o;for(let u=0;u<_.length;u++){const R=_[u];if(R.enabled!==!1&&(R.render(E,S,c,p),R.needsSwap!==!1)){const y=c;c=S,S=y}}if(g!==E.outputColorSpace||d!==E.toneMapping){g=E.outputColorSpace,d=E.toneMapping,l.defines={},Qt.getTransfer(g)===ne&&(l.defines.SRGB_TRANSFER="");const u=Dv[d];u&&(l.defines[u]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=c.texture,E.setRenderTarget(T),E.render(f,h),T=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const gd=new He,ll=new Ms(1,1),md=new Yf,_d=new yg,vd=new Qf,ch=[],lh=[],uh=new Float32Array(16),hh=new Float32Array(9),fh=new Float32Array(4);function zr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Uv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Bv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),Se(e,n)}}function zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),Se(e,n)}}function Vv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),Se(e,n)}}function Hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Xv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Zv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ll.compareFunction=e.isReversedDepthBuffer()?Nl:Ul,s=ll):s=gd,e.setTexture2D(t||s,r)}function Jv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||_d,r)}function Kv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||vd,r)}function jv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||md,r)}function Qv(i){switch(i){case 5126:return Uv;case 35664:return Nv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return zv;case 35676:return Vv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return kv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return $v;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return jv}}function tx(i,t){i.uniform1fv(this.addr,t)}function ex(i,t){const e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function nx(i,t){const e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function ix(i,t){const e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function rx(i,t){const e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sx(i,t){const e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ox(i,t){const e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ax(i,t){i.uniform1iv(this.addr,t)}function cx(i,t){i.uniform2iv(this.addr,t)}function lx(i,t){i.uniform3iv(this.addr,t)}function ux(i,t){i.uniform4iv(this.addr,t)}function hx(i,t){i.uniform1uiv(this.addr,t)}function fx(i,t){i.uniform2uiv(this.addr,t)}function dx(i,t){i.uniform3uiv(this.addr,t)}function px(i,t){i.uniform4uiv(this.addr,t)}function gx(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ll:o=gd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function mx(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||_d,s[o])}function _x(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||vd,s[o])}function vx(i,t,e){const n=this.cache,r=t.length,s=na(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||md,s[o])}function xx(i){switch(i){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return rx;case 35675:return sx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return ux;case 5125:return hx;case 36294:return fx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return vx}}class yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qv(e.type)}}class Sx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xx(e.type)}}class Mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function dh(i,t){i.seq.push(t),i.map[t.id]=t}function Ex(i,t,e){const n=i.name,r=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),o=Wa.lastIndex;let a=s[1];const l=s[2]==="]",f=s[3];if(l&&(a=a|0),f===void 0||f==="["&&o+2===r){dh(e,f===void 0?new yx(a,i,t):new Sx(a,i,t));break}else{let g=e.map[a];g===void 0&&(g=new Mx(a),dh(e,g)),e=g}}}class No{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ex(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function ph(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bx=37297;let Tx=0;function Ax(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gh=new $t;function wx(i){Qt._getMatrix(gh,Qt.workingColorSpace,i);const t=`mat3( ${gh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ax(i.getShaderSource(t),a)}else return s}function Cx(i,t){const e=wx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rx={[If]:"Linear",[Df]:"Reinhard",[Lf]:"Cineon",[Uf]:"ACESFilmic",[Ff]:"AgX",[Of]:"Neutral",[Nf]:"Custom"};function Px(i,t){const e=Rx[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new L;function Ix(){Qt.getLuminanceCoefficients(ro);const i=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Lx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ux(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ss(i){return i!==""}function _h(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Nx,Ox)}const Fx=new Map;function Ox(i,t){let e=qt[t];if(e===void 0){const n=Fx.get(t);if(n!==void 0)e=qt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(Bx,zx)}function zx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Vx={[Po]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function Hx(i){return Vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gx={[Vi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function kx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wx={[Ir]:"ENVMAP_MODE_REFRACTION"};function Xx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $x={[Pf]:"ENVMAP_BLENDING_MULTIPLY",[Op]:"ENVMAP_BLENDING_MIX",[Bp]:"ENVMAP_BLENDING_ADD"};function qx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$x[i.combine]||"ENVMAP_BLENDING_NONE"}function Yx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Hx(e),f=kx(e),h=Xx(e),g=qx(e),d=Yx(e),m=Dx(e),v=Lx(s),T=r.createProgram();let _,x,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ss).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ss).join(`
`),x.length>0&&(x+=`
`)):(_=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),x=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?qt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Cx("linearToOutputTexel",e.outputColorSpace),Ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=ul(o),o=_h(o,e),o=vh(o,e),a=ul(a),a=_h(a,e),a=vh(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const p=E+_+o,c=E+x+a,S=ph(r,r.VERTEX_SHADER,p),u=ph(r,r.FRAGMENT_SHADER,c);r.attachShader(T,S),r.attachShader(T,u),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function R(b){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(T)||"",C=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(u)||"",F=w.trim(),B=C.trim(),O=U.trim();let k=!0,G=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,S,u);else{const at=mh(r,S,"vertex"),et=mh(r,u,"fragment");Kt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+at+`
`+et)}else F!==""?Ht("WebGLProgram: Program Info Log:",F):(B===""||O==="")&&(G=!1);G&&(b.diagnostics={runnable:k,programLog:F,vertexShader:{log:B,prefix:_},fragmentShader:{log:O,prefix:x}})}r.deleteShader(S),r.deleteShader(u),y=new No(r,T),M=Ux(r,T)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,bx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=S,this.fragmentShader=u,this}let Jx=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jx(t),e.set(t,n)),n}}class jx{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}}function Qx(i,t,e,n,r,s){const o=new Bl,a=new Kx,l=new Set,f=[],h=new Map,g=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function T(y,M,A,b,w){const C=b.fog,U=w.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?b.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||F,B),k=O&&O.mapping===Qo?O.image.height:null,G=m[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ht("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=at!==void 0?at.length:0;let it=0;U.morphAttributes.position!==void 0&&(it=1),U.morphAttributes.normal!==void 0&&(it=2),U.morphAttributes.color!==void 0&&(it=3);let ht,Et,Tt,Y;if(G){const ee=Mn[G];ht=ee.vertexShader,Et=ee.fragmentShader}else ht=y.vertexShader,Et=y.fragmentShader,a.update(y),Tt=a.getVertexShaderID(y),Y=a.getFragmentShaderID(y);const nt=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ut=w.isInstancedMesh===!0,ft=w.isBatchedMesh===!0,xt=!!y.map,Gt=!!y.matcap,At=!!O,J=!!y.aoMap,tt=!!y.lightMap,K=!!y.bumpMap,ot=!!y.normalMap,N=!!y.displacementMap,St=!!y.emissiveMap,ct=!!y.metalnessMap,Mt=!!y.roughnessMap,st=y.anisotropy>0,D=y.clearcoat>0,P=y.dispersion>0,z=y.iridescence>0,W=y.sheen>0,j=y.transmission>0,$=st&&!!y.anisotropyMap,pt=D&&!!y.clearcoatMap,mt=D&&!!y.clearcoatNormalMap,Ot=D&&!!y.clearcoatRoughnessMap,Vt=z&&!!y.iridescenceMap,lt=z&&!!y.iridescenceThicknessMap,_t=W&&!!y.sheenColorMap,Dt=W&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,Rt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,V=j&&!!y.transmissionMap,yt=j&&!!y.thicknessMap,vt=!!y.gradientMap,It=!!y.alphaMap,dt=y.alphaTest>0,Q=!!y.alphaHash,Lt=!!y.extensions;let kt=wn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=i.toneMapping);const ae={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:ht,fragmentShader:Et,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ft,batchingColor:ft&&w._colorsTexture!==null,instancing:ut,instancingColor:ut&&w.instanceColor!==null,instancingMorph:ut&&w.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Lr,alphaToCoverage:!!y.alphaToCoverage,map:xt,matcap:Gt,envMap:At,envMapMode:At&&O.mapping,envMapCubeUVHeight:k,aoMap:J,lightMap:tt,bumpMap:K,normalMap:ot,displacementMap:N,emissiveMap:St,normalMapObjectSpace:ot&&y.normalMapType===Hp,normalMapTangentSpace:ot&&y.normalMapType===$f,metalnessMap:ct,roughnessMap:Mt,anisotropy:st,anisotropyMap:$,clearcoat:D,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ot,dispersion:P,iridescence:z,iridescenceMap:Vt,iridescenceThicknessMap:lt,sheen:W,sheenColorMap:_t,sheenRoughnessMap:Dt,specularMap:Ut,specularColorMap:Rt,specularIntensityMap:Yt,transmission:j,transmissionMap:V,thicknessMap:yt,gradientMap:vt,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:It,alphaTest:dt,alphaHash:Q,combine:y.combine,mapUv:xt&&v(y.map.channel),aoMapUv:J&&v(y.aoMap.channel),lightMapUv:tt&&v(y.lightMap.channel),bumpMapUv:K&&v(y.bumpMap.channel),normalMapUv:ot&&v(y.normalMap.channel),displacementMapUv:N&&v(y.displacementMap.channel),emissiveMapUv:St&&v(y.emissiveMap.channel),metalnessMapUv:ct&&v(y.metalnessMap.channel),roughnessMapUv:Mt&&v(y.roughnessMap.channel),anisotropyMapUv:$&&v(y.anisotropyMap.channel),clearcoatMapUv:pt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(y.sheenRoughnessMap.channel),specularMapUv:Ut&&v(y.specularMap.channel),specularColorMapUv:Rt&&v(y.specularColorMap.channel),specularIntensityMapUv:Yt&&v(y.specularIntensityMap.channel),transmissionMapUv:V&&v(y.transmissionMap.channel),thicknessMapUv:yt&&v(y.thicknessMap.channel),alphaMapUv:It&&v(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ot||st),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!U.attributes.uv&&(xt||It),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ot===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:rt,skinning:w.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:it,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:St&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(x(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function p(y){const M=m[y.type];let A;if(M){const b=Mn[M];A=xm.clone(b.uniforms)}else A=y.uniforms;return A}function c(y,M){let A=h.get(M);return A!==void 0?++A.usedTimes:(A=new Zx(i,M,y,r),f.push(A),h.set(M,A)),A}function S(y){if(--y.usedTimes===0){const M=f.indexOf(y);f[M]=f[f.length-1],f.pop(),h.delete(y.cacheKey),y.destroy()}}function u(y){a.remove(y)}function R(){a.dispose()}return{getParameters:T,getProgramCacheKey:_,getUniforms:p,acquireProgram:c,releaseProgram:S,releaseShaderCache:u,programs:f,dispose:R}}function ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ey(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,v,T,_,x){let E=i[t];return E===void 0?(E={id:d.id,object:d,geometry:m,material:v,materialVariant:o(d),groupOrder:T,renderOrder:d.renderOrder,z:_,group:x},i[t]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=v,E.materialVariant=o(d),E.groupOrder=T,E.renderOrder=d.renderOrder,E.z=_,E.group=x),t++,E}function l(d,m,v,T,_,x){const E=a(d,m,v,T,_,x);v.transmission>0?n.push(E):v.transparent===!0?r.push(E):e.push(E)}function f(d,m,v,T,_,x){const E=a(d,m,v,T,_,x);v.transmission>0?n.unshift(E):v.transparent===!0?r.unshift(E):e.unshift(E)}function h(d,m){e.length>1&&e.sort(d||ey),n.length>1&&n.sort(m||Sh),r.length>1&&r.sort(m||Sh)}function g(){for(let d=t,m=i.length;d<m;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:f,finish:g,sort:h}}function ny(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Mh,i.set(n,[o])):r>=s.length?(o=new Mh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new jt};break;case"SpotLight":e={position:new L,direction:new L,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function ry(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sy=0;function oy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ay(i){const t=new iy,e=ry(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new L);const r=new L,s=new Jt,o=new Jt;function a(f){let h=0,g=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,T=0,_=0,x=0,E=0,p=0,c=0,S=0,u=0,R=0;f.sort(oy);for(let M=0,A=f.length;M<A;M++){const b=f[M],w=b.color,C=b.intensity,U=b.distance;let F=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Dr?F=b.shadow.map.texture:F=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=w.r*C,g+=w.g*C,d+=w.b*C;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],C);R++}else if(b.isDirectionalLight){const B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const O=b.shadow,k=e.get(b);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=b.shadow.matrix,E++}n.directional[m]=B,m++}else if(b.isSpotLight){const B=t.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(w).multiplyScalar(C),B.distance=U,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[T]=B;const O=b.shadow;if(b.map&&(n.spotLightMap[S]=b.map,S++,O.updateMatrices(b),b.castShadow&&u++),n.spotLightMatrix[T]=O.matrix,b.castShadow){const k=e.get(b);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[T]=k,n.spotShadowMap[T]=F,c++}T++}else if(b.isRectAreaLight){const B=t.get(b);B.color.copy(w).multiplyScalar(C),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[_]=B,_++}else if(b.isPointLight){const B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const O=b.shadow,k=e.get(b);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=F,n.pointShadowMatrix[v]=b.shadow.matrix,p++}n.point[v]=B,v++}else if(b.isHemisphereLight){const B=t.get(b);B.skyColor.copy(b.color).multiplyScalar(C),B.groundColor.copy(b.groundColor).multiplyScalar(C),n.hemi[x]=B,x++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==m||y.pointLength!==v||y.spotLength!==T||y.rectAreaLength!==_||y.hemiLength!==x||y.numDirectionalShadows!==E||y.numPointShadows!==p||y.numSpotShadows!==c||y.numSpotMaps!==S||y.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=T,n.rectArea.length=_,n.point.length=v,n.hemi.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=c+S-u,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=R,y.directionalLength=m,y.pointLength=v,y.spotLength=T,y.rectAreaLength=_,y.hemiLength=x,y.numDirectionalShadows=E,y.numPointShadows=p,y.numSpotShadows=c,y.numSpotMaps=S,y.numLightProbes=R,n.version=sy++)}function l(f,h){let g=0,d=0,m=0,v=0,T=0;const _=h.matrixWorldInverse;for(let x=0,E=f.length;x<E;x++){const p=f[x];if(p.isDirectionalLight){const c=n.directional[g];c.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(_),g++}else if(p.isSpotLight){const c=n.spot[m];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(_),c.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(_),m++}else if(p.isRectAreaLight){const c=n.rectArea[v];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(_),o.identity(),s.copy(p.matrixWorld),s.premultiply(_),o.extractRotation(s),c.halfWidth.set(p.width*.5,0,0),c.halfHeight.set(0,p.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),v++}else if(p.isPointLight){const c=n.point[d];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(_),d++}else if(p.isHemisphereLight){const c=n.hemi[T];c.direction.setFromMatrixPosition(p.matrixWorld),c.direction.transformDirection(_),T++}}}return{setup:a,setupView:l,state:n}}function Eh(i){const t=new ay(i),e=[],n=[];function r(h){f.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cy(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Eh(i),t.set(r,[a])):s>=o.length?(a=new Eh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const ly=`void main() {
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
}`,hy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],fy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],bh=new Jt,qr=new L,Xa=new L;function dy(i,t,e){let n=new Vl;const r=new gt,s=new gt,o=new oe,a=new Em,l=new bm,f={},h=e.maxTextureSize,g={[Rn]:Ve,[Ve]:Rn,[_n]:_n},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ly,fragmentShader:uy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new tn(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let x=this.type;this.render=function(u,R,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||u.length===0)return;this.type===vp&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Po);const M=i.getRenderTarget(),A=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Xn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const C=x!==this.type;C&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=u.length;U<F;U++){const B=u[U],O=B.shadow;if(O===void 0){Ht("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const k=O.getFrameExtents();r.multiply(k),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,O.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===is){if(B.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Cn(r.x,r.y,{format:Dr,type:Yn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new Ms(r.x,r.y,bn),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Zn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Re,O.map.depthTexture.magFilter=Re}else B.isPointLight?(O.map=new pd(r.x),O.map.depthTexture=new Bg(r.x,Pn)):(O.map=new Cn(r.x,r.y),O.map.depthTexture=new Ms(r.x,r.y,Pn)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Zn,this.type===Po?(O.map.depthTexture.compareFunction=G?Nl:Ul,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Re,O.map.depthTexture.magFilter=Re);O.camera.updateProjectionMatrix()}const at=O.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<at;et++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,et),i.clear();else{et===0&&(i.setRenderTarget(O.map),i.clear());const it=O.getViewport(et);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),w.viewport(o)}if(B.isPointLight){const it=O.camera,ht=O.matrix,Et=B.distance||it.far;Et!==it.far&&(it.far=Et,it.updateProjectionMatrix()),qr.setFromMatrixPosition(B.matrixWorld),it.position.copy(qr),Xa.copy(it.position),Xa.add(hy[et]),it.up.copy(fy[et]),it.lookAt(Xa),it.updateMatrixWorld(),ht.makeTranslation(-qr.x,-qr.y,-qr.z),bh.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),O._frustum.setFromProjectionMatrix(bh,it.coordinateSystem,it.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),c(R,y,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===is&&E(O,y),O.needsUpdate=!1}x=this.type,_.needsUpdate=!1,i.setRenderTarget(M,A,b)};function E(u,R){const y=t.update(T);d.defines.VSM_SAMPLES!==u.blurSamples&&(d.defines.VSM_SAMPLES=u.blurSamples,m.defines.VSM_SAMPLES=u.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),u.mapPass===null&&(u.mapPass=new Cn(r.x,r.y,{format:Dr,type:Yn})),d.uniforms.shadow_pass.value=u.map.depthTexture,d.uniforms.resolution.value=u.mapSize,d.uniforms.radius.value=u.radius,i.setRenderTarget(u.mapPass),i.clear(),i.renderBufferDirect(R,null,y,d,T,null),m.uniforms.shadow_pass.value=u.mapPass.texture,m.uniforms.resolution.value=u.mapSize,m.uniforms.radius.value=u.radius,i.setRenderTarget(u.map),i.clear(),i.renderBufferDirect(R,null,y,m,T,null)}function p(u,R,y,M){let A=null;const b=y.isPointLight===!0?u.customDistanceMaterial:u.customDepthMaterial;if(b!==void 0)A=b;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const w=A.uuid,C=R.uuid;let U=f[w];U===void 0&&(U={},f[w]=U);let F=U[C];F===void 0&&(F=A.clone(),U[C]=F,R.addEventListener("dispose",S)),A=F}if(A.visible=R.visible,A.wireframe=R.wireframe,M===is?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:g[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const w=i.properties.get(A);w.light=y}return A}function c(u,R,y,M,A){if(u.visible===!1)return;if(u.layers.test(R.layers)&&(u.isMesh||u.isLine||u.isPoints)&&(u.castShadow||u.receiveShadow&&A===is)&&(!u.frustumCulled||n.intersectsObject(u))){u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld);const C=t.update(u),U=u.material;if(Array.isArray(U)){const F=C.groups;for(let B=0,O=F.length;B<O;B++){const k=F[B],G=U[k.materialIndex];if(G&&G.visible){const at=p(u,G,M,A);u.onBeforeShadow(i,u,R,y,C,at,k),i.renderBufferDirect(y,null,C,at,u,k),u.onAfterShadow(i,u,R,y,C,at,k)}}}else if(U.visible){const F=p(u,U,M,A);u.onBeforeShadow(i,u,R,y,C,F,null),i.renderBufferDirect(y,null,C,F,u,null),u.onAfterShadow(i,u,R,y,C,F,null)}}const w=u.children;for(let C=0,U=w.length;C<U;C++)c(w[C],R,y,M,A)}function S(u){u.target.removeEventListener("dispose",S);for(const y in f){const M=f[y],A=u.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function py(i,t){function e(){let V=!1;const yt=new oe;let vt=null;const It=new oe(0,0,0,0);return{setMask:function(dt){vt!==dt&&!V&&(i.colorMask(dt,dt,dt,dt),vt=dt)},setLocked:function(dt){V=dt},setClear:function(dt,Q,Lt,kt,ae){ae===!0&&(dt*=kt,Q*=kt,Lt*=kt),yt.set(dt,Q,Lt,kt),It.equals(yt)===!1&&(i.clearColor(dt,Q,Lt,kt),It.copy(yt))},reset:function(){V=!1,vt=null,It.set(-1,0,0,0)}}}function n(){let V=!1,yt=!1,vt=null,It=null,dt=null;return{setReversed:function(Q){if(yt!==Q){const Lt=t.get("EXT_clip_control");Q?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),yt=Q;const kt=dt;dt=null,this.setClear(kt)}},getReversed:function(){return yt},setTest:function(Q){Q?nt(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(Q){vt!==Q&&!V&&(i.depthMask(Q),vt=Q)},setFunc:function(Q){if(yt&&(Q=Kp[Q]),It!==Q){switch(Q){case vc:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Sc:i.depthFunc(i.EQUAL);break;case Mc:i.depthFunc(i.GEQUAL);break;case Ec:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=Q}},setLocked:function(Q){V=Q},setClear:function(Q){dt!==Q&&(dt=Q,yt&&(Q=1-Q),i.clearDepth(Q))},reset:function(){V=!1,vt=null,It=null,dt=null,yt=!1}}}function r(){let V=!1,yt=null,vt=null,It=null,dt=null,Q=null,Lt=null,kt=null,ae=null;return{setTest:function(ee){V||(ee?nt(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(ee){yt!==ee&&!V&&(i.stencilMask(ee),yt=ee)},setFunc:function(ee,Ln,Un){(vt!==ee||It!==Ln||dt!==Un)&&(i.stencilFunc(ee,Ln,Un),vt=ee,It=Ln,dt=Un)},setOp:function(ee,Ln,Un){(Q!==ee||Lt!==Ln||kt!==Un)&&(i.stencilOp(ee,Ln,Un),Q=ee,Lt=Ln,kt=Un)},setLocked:function(ee){V=ee},setClear:function(ee){ae!==ee&&(i.clearStencil(ee),ae=ee)},reset:function(){V=!1,yt=null,vt=null,It=null,dt=null,Q=null,Lt=null,kt=null,ae=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,f=new WeakMap;let h={},g={},d=new WeakMap,m=[],v=null,T=!1,_=null,x=null,E=null,p=null,c=null,S=null,u=null,R=new jt(0,0,0),y=0,M=!1,A=null,b=null,w=null,C=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=O>=2);let G=null,at={};const et=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),ht=new oe().fromArray(et),Et=new oe().fromArray(it);function Tt(V,yt,vt,It){const dt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(V,Q),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<vt;Lt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(yt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return Q}const Y={};Y[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Pr),K(!1),ot(vu),nt(i.CULL_FACE),J(Xn);function nt(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function rt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function ut(V,yt){return g[V]!==yt?(i.bindFramebuffer(V,yt),g[V]=yt,V===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=yt),V===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ft(V,yt){let vt=m,It=!1;if(V){vt=d.get(yt),vt===void 0&&(vt=[],d.set(yt,vt));const dt=V.textures;if(vt.length!==dt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Lt=dt.length;Q<Lt;Q++)vt[Q]=i.COLOR_ATTACHMENT0+Q;vt.length=dt.length,It=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,It=!0);It&&i.drawBuffers(vt)}function xt(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Gt={[Di]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};Gt[Mp]=i.MIN,Gt[Ep]=i.MAX;const At={[bp]:i.ZERO,[Tp]:i.ONE,[Ap]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[Dp]:i.SRC_ALPHA_SATURATE,[Pp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[Ip]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Up]:i.ONE_MINUS_CONSTANT_COLOR,[Np]:i.CONSTANT_ALPHA,[Fp]:i.ONE_MINUS_CONSTANT_ALPHA};function J(V,yt,vt,It,dt,Q,Lt,kt,ae,ee){if(V===Xn){T===!0&&(rt(i.BLEND),T=!1);return}if(T===!1&&(nt(i.BLEND),T=!0),V!==xp){if(V!==_||ee!==M){if((x!==Di||c!==Di)&&(i.blendEquation(i.FUNC_ADD),x=Di,c=Di),ee)switch(V){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",V);break}E=null,p=null,S=null,u=null,R.set(0,0,0),y=0,_=V,M=ee}return}dt=dt||yt,Q=Q||vt,Lt=Lt||It,(yt!==x||dt!==c)&&(i.blendEquationSeparate(Gt[yt],Gt[dt]),x=yt,c=dt),(vt!==E||It!==p||Q!==S||Lt!==u)&&(i.blendFuncSeparate(At[vt],At[It],At[Q],At[Lt]),E=vt,p=It,S=Q,u=Lt),(kt.equals(R)===!1||ae!==y)&&(i.blendColor(kt.r,kt.g,kt.b,ae),R.copy(kt),y=ae),_=V,M=!1}function tt(V,yt){V.side===_n?rt(i.CULL_FACE):nt(i.CULL_FACE);let vt=V.side===Ve;yt&&(vt=!vt),K(vt),V.blending===Ar&&V.transparent===!1?J(Xn):J(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const It=V.stencilWrite;a.setTest(It),It&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),St(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(V){A!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),A=V)}function ot(V){V!==mp?(nt(i.CULL_FACE),V!==b&&(V===vu?i.cullFace(i.BACK):V===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),b=V}function N(V){V!==w&&(B&&i.lineWidth(V),w=V)}function St(V,yt,vt){V?(nt(i.POLYGON_OFFSET_FILL),(C!==yt||U!==vt)&&(C=yt,U=vt,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,vt))):rt(i.POLYGON_OFFSET_FILL)}function ct(V){V?nt(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Mt(V){V===void 0&&(V=i.TEXTURE0+F-1),G!==V&&(i.activeTexture(V),G=V)}function st(V,yt,vt){vt===void 0&&(G===null?vt=i.TEXTURE0+F-1:vt=G);let It=at[vt];It===void 0&&(It={type:void 0,texture:void 0},at[vt]=It),(It.type!==V||It.texture!==yt)&&(G!==vt&&(i.activeTexture(vt),G=vt),i.bindTexture(V,yt||Y[V]),It.type=V,It.texture=yt)}function D(){const V=at[G];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function W(){try{i.texSubImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function j(){try{i.texSubImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function mt(){try{i.texStorage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function Ot(){try{i.texStorage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function Vt(){try{i.texImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function lt(){try{i.texImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function _t(V){ht.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function Dt(V){Et.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Et.copy(V))}function Ut(V,yt){let vt=f.get(yt);vt===void 0&&(vt=new WeakMap,f.set(yt,vt));let It=vt.get(V);It===void 0&&(It=i.getUniformBlockIndex(yt,V.name),vt.set(V,It))}function Rt(V,yt){const It=f.get(yt).get(V);l.get(yt)!==It&&(i.uniformBlockBinding(yt,It,V.__bindingPointIndex),l.set(yt,It))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,at={},g={},d=new WeakMap,m=[],v=null,T=!1,_=null,x=null,E=null,p=null,c=null,S=null,u=null,R=new jt(0,0,0),y=0,M=!1,A=null,b=null,w=null,C=null,U=null,ht.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:rt,bindFramebuffer:ut,drawBuffers:ft,useProgram:xt,setBlending:J,setMaterial:tt,setFlipSided:K,setCullFace:ot,setLineWidth:N,setPolygonOffset:St,setScissorTest:ct,activeTexture:Mt,bindTexture:st,unbindTexture:D,compressedTexImage2D:P,compressedTexImage3D:z,texImage2D:Vt,texImage3D:lt,updateUBOMapping:Ut,uniformBlockBinding:Rt,texStorage2D:mt,texStorage3D:Ot,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:pt,scissor:_t,viewport:Dt,reset:Yt}}function gy(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new gt,h=new WeakMap;let g;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,P){return m?new OffscreenCanvas(D,P):Xo("canvas")}function T(D,P,z){let W=1;const j=st(D);if((j.width>z||j.height>z)&&(W=z/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(W*j.width),pt=Math.floor(W*j.height);g===void 0&&(g=v($,pt));const mt=P?v($,pt):g;return mt.width=$,mt.height=pt,mt.getContext("2d").drawImage(D,0,0,$,pt),Ht("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+pt+")."),mt}else return"data"in D&&Ht("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function _(D){return D.generateMipmaps}function x(D){i.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(D,P,z,W,j=!1){if(D!==null){if(i[D]!==void 0)return i[D];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=P;if(P===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),P===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),P===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),P===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),P===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),P===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),P===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),P===i.RGBA){const pt=j?Wo:Qt.getTransfer(W);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=pt===ne?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function c(D,P){let z;return D?P===null||P===Pn||P===xs?z=i.DEPTH24_STENCIL8:P===bn?z=i.DEPTH32F_STENCIL8:P===vs&&(z=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Pn||P===xs?z=i.DEPTH_COMPONENT24:P===bn?z=i.DEPTH_COMPONENT32F:P===vs&&(z=i.DEPTH_COMPONENT16),z}function S(D,P){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Re&&D.minFilter!==Le?Math.log2(Math.max(P.width,P.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?P.mipmaps.length:1}function u(D){const P=D.target;P.removeEventListener("dispose",u),y(P),P.isVideoTexture&&h.delete(P)}function R(D){const P=D.target;P.removeEventListener("dispose",R),A(P)}function y(D){const P=n.get(D);if(P.__webglInit===void 0)return;const z=D.source,W=d.get(z);if(W){const j=W[P.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(D),Object.keys(W).length===0&&d.delete(z)}n.remove(D)}function M(D){const P=n.get(D);i.deleteTexture(P.__webglTexture);const z=D.source,W=d.get(z);delete W[P.__cacheKey],o.memory.textures--}function A(D){const P=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(P.__webglFramebuffer[W]))for(let j=0;j<P.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(P.__webglFramebuffer[W][j]);else i.deleteFramebuffer(P.__webglFramebuffer[W]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[W])}else{if(Array.isArray(P.__webglFramebuffer))for(let W=0;W<P.__webglFramebuffer.length;W++)i.deleteFramebuffer(P.__webglFramebuffer[W]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let W=0;W<P.__webglColorRenderbuffer.length;W++)P.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[W]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const z=D.textures;for(let W=0,j=z.length;W<j;W++){const $=n.get(z[W]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[W])}n.remove(D)}let b=0;function w(){b=0}function C(){const D=b;return D>=r.maxTextures&&Ht("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),b+=1,D}function U(D){const P=[];return P.push(D.wrapS),P.push(D.wrapT),P.push(D.wrapR||0),P.push(D.magFilter),P.push(D.minFilter),P.push(D.anisotropy),P.push(D.internalFormat),P.push(D.format),P.push(D.type),P.push(D.generateMipmaps),P.push(D.premultiplyAlpha),P.push(D.flipY),P.push(D.unpackAlignment),P.push(D.colorSpace),P.join()}function F(D,P){const z=n.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){const W=D.image;if(W===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,D,P);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+P)}function B(D,P){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Y(z,D,P);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+P)}function O(D,P){const z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){Y(z,D,P);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+P)}function k(D,P){const z=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){nt(z,D,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+P)}const G={[Tc]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},at={[Re]:i.NEAREST,[zp]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},et={[Gp]:i.NEVER,[qp]:i.ALWAYS,[kp]:i.LESS,[Ul]:i.LEQUAL,[Wp]:i.EQUAL,[Nl]:i.GEQUAL,[Xp]:i.GREATER,[$p]:i.NOTEQUAL};function it(D,P){if(P.type===bn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Le||P.magFilter===fa||P.magFilter===Ds||P.magFilter===Ni||P.minFilter===Le||P.minFilter===fa||P.minFilter===Ds||P.minFilter===Ni)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,G[P.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,G[P.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,G[P.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,at[P.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,at[P.minFilter]),P.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,et[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Re||P.minFilter!==Ds&&P.minFilter!==Ni||P.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ht(D,P){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,P.addEventListener("dispose",u));const W=P.source;let j=d.get(W);j===void 0&&(j={},d.set(W,j));const $=U(P);if($!==D.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[$].usedTimes++;const pt=j[D.__cacheKey];pt!==void 0&&(j[D.__cacheKey].usedTimes--,pt.usedTimes===0&&M(P)),D.__cacheKey=$,D.__webglTexture=j[$].texture}return z}function Et(D,P,z){return Math.floor(Math.floor(D/z)/P)}function Tt(D,P,z,W){const $=D.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,z,W,P.data);else{$.sort((lt,_t)=>lt.start-_t.start);let pt=0;for(let lt=1;lt<$.length;lt++){const _t=$[pt],Dt=$[lt],Ut=_t.start+_t.count,Rt=Et(Dt.start,P.width,4),Yt=Et(_t.start,P.width,4);Dt.start<=Ut+1&&Rt===Yt&&Et(Dt.start+Dt.count-1,P.width,4)===Rt?_t.count=Math.max(_t.count,Dt.start+Dt.count-_t.start):(++pt,$[pt]=Dt)}$.length=pt+1;const mt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),Vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let lt=0,_t=$.length;lt<_t;lt++){const Dt=$[lt],Ut=Math.floor(Dt.start/4),Rt=Math.ceil(Dt.count/4),Yt=Ut%P.width,V=Math.floor(Ut/P.width),yt=Rt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Yt,V,yt,vt,z,W,P.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,Vt)}}function Y(D,P,z){let W=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(W=i.TEXTURE_3D);const j=ht(D,P),$=P.source;e.bindTexture(W,D.__webglTexture,i.TEXTURE0+z);const pt=n.get($);if($.version!==pt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const mt=Qt.getPrimaries(Qt.workingColorSpace),Ot=P.colorSpace===ui?null:Qt.getPrimaries(P.colorSpace),Vt=P.colorSpace===ui||mt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let lt=T(P.image,!1,r.maxTextureSize);lt=Mt(P,lt);const _t=s.convert(P.format,P.colorSpace),Dt=s.convert(P.type);let Ut=p(P.internalFormat,_t,Dt,P.colorSpace,P.isVideoTexture);it(W,P);let Rt;const Yt=P.mipmaps,V=P.isVideoTexture!==!0,yt=pt.__version===void 0||j===!0,vt=$.dataReady,It=S(P,lt);if(P.isDepthTexture)Ut=c(P.format===Fi,P.type),yt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Ut,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,lt.width,lt.height,0,_t,Dt,null));else if(P.isDataTexture)if(Yt.length>0){V&&yt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,Yt[0].width,Yt[0].height);for(let dt=0,Q=Yt.length;dt<Q;dt++)Rt=Yt[dt],V?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,_t,Dt,Rt.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,_t,Dt,Rt.data);P.generateMipmaps=!1}else V?(yt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,lt.width,lt.height),vt&&Tt(P,lt,_t,Dt)):e.texImage2D(i.TEXTURE_2D,0,Ut,lt.width,lt.height,0,_t,Dt,lt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,Yt[0].width,Yt[0].height,lt.depth);for(let dt=0,Q=Yt.length;dt<Q;dt++)if(Rt=Yt[dt],P.format!==vn)if(_t!==null)if(V){if(vt)if(P.layerUpdates.size>0){const Lt=eh(Rt.width,Rt.height,P.format,P.type);for(const kt of P.layerUpdates){const ae=Rt.data.subarray(kt*Lt/Rt.data.BYTES_PER_ELEMENT,(kt+1)*Lt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,kt,Rt.width,Rt.height,1,_t,ae)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,lt.depth,_t,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Rt.width,Rt.height,lt.depth,0,Rt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,lt.depth,_t,Dt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Rt.width,Rt.height,lt.depth,0,_t,Dt,Rt.data)}else{V&&yt&&e.texStorage2D(i.TEXTURE_2D,It,Ut,Yt[0].width,Yt[0].height);for(let dt=0,Q=Yt.length;dt<Q;dt++)Rt=Yt[dt],P.format!==vn?_t!==null?V?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,_t,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,Rt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,_t,Dt,Rt.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,_t,Dt,Rt.data)}else if(P.isDataArrayTexture)if(V){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ut,lt.width,lt.height,lt.depth),vt)if(P.layerUpdates.size>0){const dt=eh(lt.width,lt.height,P.format,P.type);for(const Q of P.layerUpdates){const Lt=lt.data.subarray(Q*dt/lt.data.BYTES_PER_ELEMENT,(Q+1)*dt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,lt.width,lt.height,1,_t,Dt,Lt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,_t,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,lt.width,lt.height,lt.depth,0,_t,Dt,lt.data);else if(P.isData3DTexture)V?(yt&&e.texStorage3D(i.TEXTURE_3D,It,Ut,lt.width,lt.height,lt.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,_t,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,lt.width,lt.height,lt.depth,0,_t,Dt,lt.data);else if(P.isFramebufferTexture){if(yt)if(V)e.texStorage2D(i.TEXTURE_2D,It,Ut,lt.width,lt.height);else{let dt=lt.width,Q=lt.height;for(let Lt=0;Lt<It;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Ut,dt,Q,0,_t,Dt,null),dt>>=1,Q>>=1}}else if(Yt.length>0){if(V&&yt){const dt=st(Yt[0]);e.texStorage2D(i.TEXTURE_2D,It,Ut,dt.width,dt.height)}for(let dt=0,Q=Yt.length;dt<Q;dt++)Rt=Yt[dt],V?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,_t,Dt,Rt):e.texImage2D(i.TEXTURE_2D,dt,Ut,_t,Dt,Rt);P.generateMipmaps=!1}else if(V){if(yt){const dt=st(lt);e.texStorage2D(i.TEXTURE_2D,It,Ut,dt.width,dt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,_t,Dt,lt);_(P)&&x(W),pt.__version=$.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function nt(D,P,z){if(P.image.length!==6)return;const W=ht(D,P),j=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const $=n.get(j);if(j.version!==$.__version||W===!0){e.activeTexture(i.TEXTURE0+z);const pt=Qt.getPrimaries(Qt.workingColorSpace),mt=P.colorSpace===ui?null:Qt.getPrimaries(P.colorSpace),Ot=P.colorSpace===ui||pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Vt=P.isCompressedTexture||P.image[0].isCompressedTexture,lt=P.image[0]&&P.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!Vt&&!lt?_t[Q]=T(P.image[Q],!0,r.maxCubemapSize):_t[Q]=lt?P.image[Q].image:P.image[Q],_t[Q]=Mt(P,_t[Q]);const Dt=_t[0],Ut=s.convert(P.format,P.colorSpace),Rt=s.convert(P.type),Yt=p(P.internalFormat,Ut,Rt,P.colorSpace),V=P.isVideoTexture!==!0,yt=$.__version===void 0||W===!0,vt=j.dataReady;let It=S(P,Dt);it(i.TEXTURE_CUBE_MAP,P);let dt;if(Vt){V&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Yt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){dt=_t[Q].mipmaps;for(let Lt=0;Lt<dt.length;Lt++){const kt=dt[Lt];P.format!==vn?Ut!==null?V?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,0,0,kt.width,kt.height,Ut,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,Yt,kt.width,kt.height,0,kt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,0,0,kt.width,kt.height,Ut,Rt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,Yt,kt.width,kt.height,0,Ut,Rt,kt.data)}}}else{if(dt=P.mipmaps,V&&yt){dt.length>0&&It++;const Q=st(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(lt){V?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Ut,Rt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,_t[Q].width,_t[Q].height,0,Ut,Rt,_t[Q].data);for(let Lt=0;Lt<dt.length;Lt++){const ae=dt[Lt].image[Q].image;V?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,0,0,ae.width,ae.height,Ut,Rt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,Yt,ae.width,ae.height,0,Ut,Rt,ae.data)}}else{V?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,Rt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Ut,Rt,_t[Q]);for(let Lt=0;Lt<dt.length;Lt++){const kt=dt[Lt];V?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,0,0,Ut,Rt,kt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,Yt,Ut,Rt,kt.image[Q])}}}_(P)&&x(i.TEXTURE_CUBE_MAP),$.__version=j.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function rt(D,P,z,W,j,$){const pt=s.convert(z.format,z.colorSpace),mt=s.convert(z.type),Ot=p(z.internalFormat,pt,mt,z.colorSpace),Vt=n.get(P),lt=n.get(z);if(lt.__renderTarget=P,!Vt.__hasExternalTextures){const _t=Math.max(1,P.width>>$),Dt=Math.max(1,P.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,Ot,_t,Dt,P.depth,0,pt,mt,null):e.texImage2D(j,$,Ot,_t,Dt,0,pt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),St(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,lt.__webglTexture,0,N(P)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,lt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(D,P,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),P.depthBuffer){const W=P.depthTexture,j=W&&W.isDepthTexture?W.type:null,$=c(P.stencilBuffer,j),pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(P),$,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(P),$,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,$,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,D)}else{const W=P.textures;for(let j=0;j<W.length;j++){const $=W[j],pt=s.convert($.format,$.colorSpace),mt=s.convert($.type),Ot=p($.internalFormat,pt,mt,$.colorSpace);St(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(P),Ot,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(P),Ot,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(D,P,z){const W=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(P.depthTexture);if(j.__renderTarget=P,(!j.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,P.depthTexture.addEventListener("dispose",u)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),it(i.TEXTURE_CUBE_MAP,P.depthTexture);const Vt=s.convert(P.depthTexture.format),lt=s.convert(P.depthTexture.type);let _t;P.depthTexture.format===Zn?_t=i.DEPTH_COMPONENT24:P.depthTexture.format===Fi&&(_t=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,_t,P.width,P.height,0,Vt,lt,null)}}else F(P.depthTexture,0);const $=j.__webglTexture,pt=N(P),mt=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ot=P.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===Zn)St(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ot,mt,$,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,Ot,mt,$,0);else if(P.depthTexture.format===Fi)St(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ot,mt,$,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,Ot,mt,$,0);else throw new Error("Unknown depthTexture format")}function xt(D){const P=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==D.depthTexture){const W=D.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),W){const j=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),P.__depthDisposeCallback=j}P.__boundDepthTexture=W}if(D.depthTexture&&!P.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)ft(P.__webglFramebuffer[W],D,W);else{const W=D.texture.mipmaps;W&&W.length>0?ft(P.__webglFramebuffer[0],D,0):ft(P.__webglFramebuffer,D,0)}else if(z){P.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[W]),P.__webglDepthbuffer[W]===void 0)P.__webglDepthbuffer[W]=i.createRenderbuffer(),ut(P.__webglDepthbuffer[W],D,!1);else{const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=P.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else{const W=D.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ut(P.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(D,P,z){const W=n.get(D);P!==void 0&&rt(W.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&xt(D)}function At(D){const P=D.texture,z=n.get(D),W=n.get(P);D.addEventListener("dispose",R);const j=D.textures,$=D.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=P.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let Ot=0;Ot<P.mipmaps.length;Ot++)z.__webglFramebuffer[mt][Ot]=i.createFramebuffer()}else z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<P.mipmaps.length;mt++)z.__webglFramebuffer[mt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let mt=0,Ot=j.length;mt<Ot;mt++){const Vt=n.get(j[mt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&St(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<j.length;mt++){const Ot=j[mt];z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);const Vt=s.convert(Ot.format,Ot.colorSpace),lt=s.convert(Ot.type),_t=p(Ot.internalFormat,Vt,lt,Ot.colorSpace,D.isXRRenderTarget===!0),Dt=N(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),it(i.TEXTURE_CUBE_MAP,P);for(let mt=0;mt<6;mt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ot=0;Ot<P.mipmaps.length;Ot++)rt(z.__webglFramebuffer[mt][Ot],D,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot);else rt(z.__webglFramebuffer[mt],D,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);_(P)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let mt=0,Ot=j.length;mt<Ot;mt++){const Vt=j[mt],lt=n.get(Vt);let _t=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_t=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,lt.__webglTexture),it(_t,Vt),rt(z.__webglFramebuffer,D,Vt,i.COLOR_ATTACHMENT0+mt,_t,0),_(Vt)&&x(_t)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,W.__webglTexture),it(mt,P),P.mipmaps&&P.mipmaps.length>0)for(let Ot=0;Ot<P.mipmaps.length;Ot++)rt(z.__webglFramebuffer[Ot],D,P,i.COLOR_ATTACHMENT0,mt,Ot);else rt(z.__webglFramebuffer,D,P,i.COLOR_ATTACHMENT0,mt,0);_(P)&&x(mt),e.unbindTexture()}D.depthBuffer&&xt(D)}function J(D){const P=D.textures;for(let z=0,W=P.length;z<W;z++){const j=P[z];if(_(j)){const $=E(D),pt=n.get(j).__webglTexture;e.bindTexture($,pt),x($),e.unbindTexture()}}}const tt=[],K=[];function ot(D){if(D.samples>0){if(St(D)===!1){const P=D.textures,z=D.width,W=D.height;let j=i.COLOR_BUFFER_BIT;const $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(D),mt=P.length>1;if(mt)for(let Vt=0;Vt<P.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const Ot=D.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Vt=0;Vt<P.length;Vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Vt]);const lt=n.get(P[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,j,i.NEAREST),l===!0&&(tt.length=0,K.length=0,tt.push(i.COLOR_ATTACHMENT0+Vt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tt.push($),K.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Vt=0;Vt<P.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Vt]);const lt=n.get(P[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const P=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function N(D){return Math.min(r.maxSamples,D.samples)}function St(D){const P=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ct(D){const P=o.render.frame;h.get(D)!==P&&(h.set(D,P),D.update())}function Mt(D,P){const z=D.colorSpace,W=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Lr&&z!==ui&&(Qt.getTransfer(z)===ne?(W!==vn||j!==Qe)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",z)),P}function st(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=C,this.resetTextureUnits=w,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=Gt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function my(i,t){function e(n,r=ui){let s;const o=Qt.getTransfer(r);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zf)return i.BYTE;if(n===Vf)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===kf)return i.ALPHA;if(n===Wf)return i.RGB;if(n===vn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Xf)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Io||n===Do||n===Lo||n===Uo)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Cc||n===Rc||n===Pc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Fc||n===Oc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ic||n===Dc)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return s.COMPRESSED_R11_EAC;if(n===Nc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Fc)return s.COMPRESSED_RG11_EAC;if(n===Oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===Vc||n===Hc||n===Gc||n===kc||n===Wc||n===Xc||n===$c||n===qc||n===Yc||n===Zc||n===Jc||n===Kc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Qc||n===tl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===jc)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===nl||n===il||n===rl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new td(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:_y,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yy extends Or{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,f=null,h=null,g=null,d=null,m=null,v=null;const T=typeof XRWebGLBinding<"u",_=new xy,x={},E=e.getContextAttributes();let p=null,c=null;const S=[],u=[],R=new gt;let y=null;const M=new mn;M.viewport=new oe;const A=new mn;A.viewport=new oe;const b=[M,A],w=new Rm;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=S[Y];return nt===void 0&&(nt=new va,S[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=S[Y];return nt===void 0&&(nt=new va,S[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=S[Y];return nt===void 0&&(nt=new va,S[Y]=nt),nt.getHandSpace()};function F(Y){const nt=u.indexOf(Y.inputSource);if(nt===-1)return;const rt=S[nt];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,f||o),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let Y=0;Y<S.length;Y++){const nt=u[Y];nt!==null&&(u[Y]=null,S[Y].disconnect(nt))}C=null,U=null,_.reset();for(const Y in x)delete x[Y];t.setRenderTarget(p),m=null,d=null,g=null,r=null,c=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(Y){f=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ut=null,ft=null;E.depth&&(ft=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?Fi:Zn,ut=E.stencil?xs:Pn);const xt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};g=this.getBinding(),d=g.createProjectionLayer(xt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),c=new Cn(d.textureWidth,d.textureHeight,{format:vn,type:Qe,depthTexture:new Ms(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Cn(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(l),f=null,o=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(Y){for(let nt=0;nt<Y.removed.length;nt++){const rt=Y.removed[nt],ut=u.indexOf(rt);ut>=0&&(u[ut]=null,S[ut].disconnect(rt))}for(let nt=0;nt<Y.added.length;nt++){const rt=Y.added[nt];let ut=u.indexOf(rt);if(ut===-1){for(let xt=0;xt<S.length;xt++)if(xt>=u.length){u.push(rt),ut=xt;break}else if(u[xt]===null){u[xt]=rt,ut=xt;break}if(ut===-1)break}const ft=S[ut];ft&&ft.connect(rt)}}const k=new L,G=new L;function at(Y,nt,rt){k.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(rt.matrixWorld);const ut=k.distanceTo(G),ft=nt.projectionMatrix.elements,xt=rt.projectionMatrix.elements,Gt=ft[14]/(ft[10]-1),At=ft[14]/(ft[10]+1),J=(ft[9]+1)/ft[5],tt=(ft[9]-1)/ft[5],K=(ft[8]-1)/ft[0],ot=(xt[8]+1)/xt[0],N=Gt*K,St=Gt*ot,ct=ut/(-K+ot),Mt=ct*-K;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ft[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const st=Gt+ct,D=At+ct,P=N-Mt,z=St+(ut-Mt),W=J*At/D*st,j=tt*At/D*st;Y.projectionMatrix.makePerspective(P,z,W,j,st,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let nt=Y.near,rt=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),w.near=A.near=M.near=nt,w.far=A.far=M.far=rt,(C!==w.near||U!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,U=w.far),w.layers.mask=Y.layers.mask|6,M.layers.mask=w.layers.mask&-5,A.layers.mask=w.layers.mask&-3;const ut=Y.parent,ft=w.cameras;et(w,ut);for(let xt=0;xt<ft.length;xt++)et(ft[xt],ut);ft.length===2?at(w,M,A):w.projectionMatrix.copy(M.projectionMatrix),it(Y,w,ut)};function it(Y,nt,rt){rt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)},this.getCameraTexture=function(Y){return x[Y]};let ht=null;function Et(Y,nt){if(h=nt.getViewerPose(f||o),v=nt,h!==null){const rt=h.views;m!==null&&(t.setRenderTargetFramebuffer(c,m.framebuffer),t.setRenderTarget(c));let ut=!1;rt.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let At=0;At<rt.length;At++){const J=rt[At];let tt=null;if(m!==null)tt=m.getViewport(J);else{const ot=g.getViewSubImage(d,J);tt=ot.viewport,At===0&&(t.setRenderTargetTextures(c,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(c))}let K=b[At];K===void 0&&(K=new mn,K.layers.enable(At),K.viewport=new oe,b[At]=K),K.matrix.fromArray(J.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(J.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(tt.x,tt.y,tt.width,tt.height),At===0&&(w.matrix.copy(K.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(K)}const ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=n.getBinding();const At=g.getDepthInformation(rt[0]);At&&At.isValid&&At.texture&&_.init(At,r.renderState)}if(ft&&ft.includes("camera-access")&&T){t.state.unbindTexture(),g=n.getBinding();for(let At=0;At<rt.length;At++){const J=rt[At].camera;if(J){let tt=x[J];tt||(tt=new td,x[J]=tt);const K=g.getCameraImage(J);tt.sourceTexture=K}}}}for(let rt=0;rt<S.length;rt++){const ut=u[rt],ft=S[rt];ut!==null&&ft!==void 0&&ft.update(ut,nt,f||o)}ht&&ht(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),v=null}const Tt=new dd;Tt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const bi=new ue,Sy=new Jt;function My(i,t){function e(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function n(_,x){x.color.getRGB(_.fogColor.value,ud(i)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function r(_,x,E,p,c){x.isMeshBasicMaterial?s(_,x):x.isMeshLambertMaterial?(s(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(_,x),g(_,x)):x.isMeshPhongMaterial?(s(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(_,x),d(_,x),x.isMeshPhysicalMaterial&&m(_,x,c)):x.isMeshMatcapMaterial?(s(_,x),v(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),T(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(o(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?l(_,x,E,p):x.isSpriteMaterial?f(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,e(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,e(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Ve&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,e(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Ve&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,e(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,e(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const E=t.get(x),p=E.envMap,c=E.envMapRotation;p&&(_.envMap.value=p,bi.copy(c),bi.x*=-1,bi.y*=-1,bi.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),_.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(bi)),_.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,_.aoMapTransform))}function o(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,e(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function l(_,x,E,p){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*E,_.scale.value=p*.5,x.map&&(_.map.value=x.map,e(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function f(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,e(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function g(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function d(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function m(_,x,E){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ve&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,x){x.matcap&&(_.matcap.value=x.matcap)}function T(_,x){const E=t.get(x).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ey(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,p){const c=p.program;n.uniformBlockBinding(E,c)}function f(E,p){let c=r[E.id];c===void 0&&(v(E),c=h(E),r[E.id]=c,E.addEventListener("dispose",_));const S=p.program;n.updateUBOMapping(E,S);const u=t.render.frame;s[E.id]!==u&&(d(E),s[E.id]=u)}function h(E){const p=g();E.__bindingPointIndex=p;const c=i.createBuffer(),S=E.__size,u=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,S,u),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,c),c}function g(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const p=r[E.id],c=E.uniforms,S=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let u=0,R=c.length;u<R;u++){const y=Array.isArray(c[u])?c[u]:[c[u]];for(let M=0,A=y.length;M<A;M++){const b=y[M];if(m(b,u,M,S)===!0){const w=b.__offset,C=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let F=0;F<C.length;F++){const B=C[F],O=T(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,w+U,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,p,c,S){const u=E.value,R=p+"_"+c;if(S[R]===void 0)return typeof u=="number"||typeof u=="boolean"?S[R]=u:S[R]=u.clone(),!0;{const y=S[R];if(typeof u=="number"||typeof u=="boolean"){if(y!==u)return S[R]=u,!0}else if(y.equals(u)===!1)return y.copy(u),!0}return!1}function v(E){const p=E.uniforms;let c=0;const S=16;for(let R=0,y=p.length;R<y;R++){const M=Array.isArray(p[R])?p[R]:[p[R]];for(let A=0,b=M.length;A<b;A++){const w=M[A],C=Array.isArray(w.value)?w.value:[w.value];for(let U=0,F=C.length;U<F;U++){const B=C[U],O=T(B),k=c%S,G=k%O.boundary,at=k+G;c+=G,at!==0&&S-at<O.storage&&(c+=S-at),w.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=c,c+=O.storage}}}const u=c%S;return u>0&&(c+=S-u),E.__size=c,E.__cache={},this}function T(E){const p={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(p.boundary=4,p.storage=4):E.isVector2?(p.boundary=8,p.storage=8):E.isVector3||E.isColor?(p.boundary=16,p.storage=12):E.isVector4?(p.boundary=16,p.storage=16):E.isMatrix3?(p.boundary=48,p.storage=48):E.isMatrix4?(p.boundary=64,p.storage=64):E.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",E),p}function _(E){const p=E.target;p.removeEventListener("dispose",_);const c=o.indexOf(p.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function x(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:f,dispose:x}}const by=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function Ty(){return Sn===null&&(Sn=new Ug(by,16,16,Dr,Yn),Sn.name="DFG_LUT",Sn.minFilter=Le,Sn.magFilter=Le,Sn.wrapS=Wn,Sn.wrapT=Wn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class Ay{constructor(t={}){const{canvas:e=Zp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Qe}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const T=m,_=new Set([Ll,Dl,Il]),x=new Set([Qe,Pn,vs,xs,Rl,Pl]),E=new Uint32Array(4),p=new Int32Array(4);let c=null,S=null;const u=[],R=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=sn;let b=0,w=0,C=null,U=-1,F=null;const B=new oe,O=new oe;let k=null;const G=new jt(0);let at=0,et=e.width,it=e.height,ht=1,Et=null,Tt=null;const Y=new oe(0,0,et,it),nt=new oe(0,0,et,it);let rt=!1;const ut=new Vl;let ft=!1,xt=!1;const Gt=new Jt,At=new L,J=new oe,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function ot(){return C===null?ht:1}let N=n;function St(I,H){return e.getContext(I,H)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ws}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",ae,!1),N===null){const H="webgl2";if(N=St(H,I),N===null)throw St(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw Kt("WebGLRenderer: "+I.message),I}let ct,Mt,st,D,P,z,W,j,$,pt,mt,Ot,Vt,lt,_t,Dt,Ut,Rt,Yt,V,yt,vt,It;function dt(){ct=new Av(N),ct.init(),yt=new my(N,ct),Mt=new vv(N,ct,t,yt),st=new py(N,ct),Mt.reversedDepthBuffer&&d&&st.buffers.depth.setReversed(!0),D=new Rv(N),P=new ty,z=new gy(N,ct,st,P,Mt,yt,D),W=new Tv(M),j=new Um(N),vt=new mv(N,j),$=new wv(N,j,D,vt),pt=new Iv(N,$,j,vt,D),Rt=new Pv(N,Mt,z),_t=new xv(P),mt=new Qx(M,W,ct,Mt,vt,_t),Ot=new My(M,P),Vt=new ny,lt=new cy(ct),Ut=new gv(M,W,st,pt,v,l),Dt=new dy(M,pt,Mt),It=new Ey(N,D,Mt,st),Yt=new _v(N,ct,D),V=new Cv(N,ct,D),D.programs=mt.programs,M.capabilities=Mt,M.extensions=ct,M.properties=P,M.renderLists=Vt,M.shadowMap=Dt,M.state=st,M.info=D}dt(),T!==Qe&&(y=new Lv(T,e.width,e.height,r,s));const Q=new yy(M,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=ct.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ct.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(I){I!==void 0&&(ht=I,this.setSize(et,it,!1))},this.getSize=function(I){return I.set(et,it)},this.setSize=function(I,H,Z=!0){if(Q.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}et=I,it=H,e.width=Math.floor(I*ht),e.height=Math.floor(H*ht),Z===!0&&(e.style.width=I+"px",e.style.height=H+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(et*ht,it*ht).floor()},this.setDrawingBufferSize=function(I,H,Z){et=I,it=H,ht=Z,e.width=Math.floor(I*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,I,H)},this.setEffects=function(I){if(T===Qe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let H=0;H<I.length;H++)if(I[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(B)},this.getViewport=function(I){return I.copy(Y)},this.setViewport=function(I,H,Z,q){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,H,Z,q),st.viewport(B.copy(Y).multiplyScalar(ht).round())},this.getScissor=function(I){return I.copy(nt)},this.setScissor=function(I,H,Z,q){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,H,Z,q),st.scissor(O.copy(nt).multiplyScalar(ht).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){st.setScissorTest(rt=I)},this.setOpaqueSort=function(I){Et=I},this.setTransparentSort=function(I){Tt=I},this.getClearColor=function(I){return I.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(I=!0,H=!0,Z=!0){let q=0;if(I){let X=!1;if(C!==null){const wt=C.texture.format;X=_.has(wt)}if(X){const wt=C.texture.type,Pt=x.has(wt),Ct=Ut.getClearColor(),Nt=Ut.getClearAlpha(),Bt=Ct.r,Xt=Ct.g,Zt=Ct.b;Pt?(E[0]=Bt,E[1]=Xt,E[2]=Zt,E[3]=Nt,N.clearBufferuiv(N.COLOR,0,E)):(p[0]=Bt,p[1]=Xt,p[2]=Zt,p[3]=Nt,N.clearBufferiv(N.COLOR,0,p))}else q|=N.COLOR_BUFFER_BIT}H&&(q|=N.DEPTH_BUFFER_BIT),Z&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),Ut.dispose(),Vt.dispose(),lt.dispose(),P.dispose(),W.dispose(),pt.dispose(),vt.dispose(),It.dispose(),mt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ql),Q.removeEventListener("sessionend",tu),mi.stop()};function Lt(I){I.preventDefault(),Au("WebGLRenderer: Context Lost."),A=!0}function kt(){Au("WebGLRenderer: Context Restored."),A=!1;const I=D.autoReset,H=Dt.enabled,Z=Dt.autoUpdate,q=Dt.needsUpdate,X=Dt.type;dt(),D.autoReset=I,Dt.enabled=H,Dt.autoUpdate=Z,Dt.needsUpdate=q,Dt.type=X}function ae(I){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ee(I){const H=I.target;H.removeEventListener("dispose",ee),Ln(H)}function Ln(I){Un(I),P.remove(I)}function Un(I){const H=P.get(I).programs;H!==void 0&&(H.forEach(function(Z){mt.releaseProgram(Z)}),I.isShaderMaterial&&mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,Z,q,X,wt){H===null&&(H=tt);const Pt=X.isMesh&&X.matrixWorld.determinant()<0,Ct=Od(I,H,Z,q,X);st.setMaterial(q,Pt);let Nt=Z.index,Bt=1;if(q.wireframe===!0){if(Nt=$.getWireframeAttribute(Z),Nt===void 0)return;Bt=2}const Xt=Z.drawRange,Zt=Z.attributes.position;let zt=Xt.start*Bt,ie=(Xt.start+Xt.count)*Bt;wt!==null&&(zt=Math.max(zt,wt.start*Bt),ie=Math.min(ie,(wt.start+wt.count)*Bt)),Nt!==null?(zt=Math.max(zt,0),ie=Math.min(ie,Nt.count)):Zt!=null&&(zt=Math.max(zt,0),ie=Math.min(ie,Zt.count));const pe=ie-zt;if(pe<0||pe===1/0)return;vt.setup(X,q,Ct,Z,Nt);let fe,re=Yt;if(Nt!==null&&(fe=j.get(Nt),re=V,re.setIndex(fe)),X.isMesh)q.wireframe===!0?(st.setLineWidth(q.wireframeLinewidth*ot()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(X.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),st.setLineWidth(Pe*ot()),X.isLineSegments?re.setMode(N.LINES):X.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else X.isPoints?re.setMode(N.POINTS):X.isSprite&&re.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))re.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Pe=X._multiDrawStarts,Ft=X._multiDrawCounts,Ze=X._multiDrawCount,te=Nt?j.get(Nt).bytesPerElement:1,cn=P.get(q).currentProgram.getUniforms();for(let xn=0;xn<Ze;xn++)cn.setValue(N,"_gl_DrawID",xn),re.render(Pe[xn]/te,Ft[xn])}else if(X.isInstancedMesh)re.renderInstances(zt,pe,X.count);else if(Z.isInstancedBufferGeometry){const Pe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ft=Math.min(Z.instanceCount,Pe);re.renderInstances(zt,pe,Ft)}else re.render(zt,pe)};function jl(I,H,Z){I.transparent===!0&&I.side===_n&&I.forceSinglePass===!1?(I.side=Ve,I.needsUpdate=!0,Is(I,H,Z),I.side=Rn,I.needsUpdate=!0,Is(I,H,Z),I.side=_n):Is(I,H,Z)}this.compile=function(I,H,Z=null){Z===null&&(Z=I),S=lt.get(Z),S.init(H),R.push(S),Z.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),I!==Z&&I.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights();const q=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const wt=X.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const Ct=wt[Pt];jl(Ct,Z,X),q.add(Ct)}else jl(wt,Z,X),q.add(wt)}),S=R.pop(),q},this.compileAsync=function(I,H,Z=null){const q=this.compile(I,H,Z);return new Promise(X=>{function wt(){if(q.forEach(function(Pt){P.get(Pt).currentProgram.isReady()&&q.delete(Pt)}),q.size===0){X(I);return}setTimeout(wt,10)}ct.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let aa=null;function Fd(I){aa&&aa(I)}function Ql(){mi.stop()}function tu(){mi.start()}const mi=new dd;mi.setAnimationLoop(Fd),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(I){aa=I,Q.setAnimationLoop(I),I===null?mi.stop():mi.start()},Q.addEventListener("sessionstart",Ql),Q.addEventListener("sessionend",tu),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const Z=Q.enabled===!0&&Q.isPresenting===!0,q=y!==null&&(C===null||Z)&&y.begin(M,C);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,H,C),S=lt.get(I,R.length),S.init(H),R.push(S),Gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ut.setFromProjectionMatrix(Gt,Tn,H.reversedDepth),xt=this.localClippingEnabled,ft=_t.init(this.clippingPlanes,xt),c=Vt.get(I,u.length),c.init(),u.push(c),Q.enabled===!0&&Q.isPresenting===!0){const Pt=M.xr.getDepthSensingMesh();Pt!==null&&ca(Pt,H,-1/0,M.sortObjects)}ca(I,H,0,M.sortObjects),c.finish(),M.sortObjects===!0&&c.sort(Et,Tt),K=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,K&&Ut.addToRenderList(c,I),this.info.render.frame++,ft===!0&&_t.beginShadows();const X=S.state.shadowsArray;if(Dt.render(X,I,H),ft===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&y.hasRenderPass())===!1){const Pt=c.opaque,Ct=c.transmissive;if(S.setupLights(),H.isArrayCamera){const Nt=H.cameras;if(Ct.length>0)for(let Bt=0,Xt=Nt.length;Bt<Xt;Bt++){const Zt=Nt[Bt];nu(Pt,Ct,I,Zt)}K&&Ut.render(I);for(let Bt=0,Xt=Nt.length;Bt<Xt;Bt++){const Zt=Nt[Bt];eu(c,I,Zt,Zt.viewport)}}else Ct.length>0&&nu(Pt,Ct,I,H),K&&Ut.render(I),eu(c,I,H)}C!==null&&w===0&&(z.updateMultisampleRenderTarget(C),z.updateRenderTargetMipmap(C)),q&&y.end(M),I.isScene===!0&&I.onAfterRender(M,I,H),vt.resetDefaultState(),U=-1,F=null,R.pop(),R.length>0?(S=R[R.length-1],ft===!0&&_t.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,u.pop(),u.length>0?c=u[u.length-1]:c=null};function ca(I,H,Z,q){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ut.intersectsSprite(I)){q&&J.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Gt);const Pt=pt.update(I),Ct=I.material;Ct.visible&&c.push(I,Pt,Ct,Z,J.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ut.intersectsObject(I))){const Pt=pt.update(I),Ct=I.material;if(q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),J.copy(I.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),J.copy(Pt.boundingSphere.center)),J.applyMatrix4(I.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ct)){const Nt=Pt.groups;for(let Bt=0,Xt=Nt.length;Bt<Xt;Bt++){const Zt=Nt[Bt],zt=Ct[Zt.materialIndex];zt&&zt.visible&&c.push(I,Pt,zt,Z,J.z,Zt)}}else Ct.visible&&c.push(I,Pt,Ct,Z,J.z,null)}}const wt=I.children;for(let Pt=0,Ct=wt.length;Pt<Ct;Pt++)ca(wt[Pt],H,Z,q)}function eu(I,H,Z,q){const{opaque:X,transmissive:wt,transparent:Pt}=I;S.setupLightsView(Z),ft===!0&&_t.setGlobalState(M.clippingPlanes,Z),q&&st.viewport(B.copy(q)),X.length>0&&Ps(X,H,Z),wt.length>0&&Ps(wt,H,Z),Pt.length>0&&Ps(Pt,H,Z),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function nu(I,H,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const zt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Cn(1,1,{generateMipmaps:!0,type:zt?Yn:Qe,minFilter:Ni,samples:Mt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const wt=S.state.transmissionRenderTarget[q.id],Pt=q.viewport||B;wt.setSize(Pt.z*M.transmissionResolutionScale,Pt.w*M.transmissionResolutionScale);const Ct=M.getRenderTarget(),Nt=M.getActiveCubeFace(),Bt=M.getActiveMipmapLevel();M.setRenderTarget(wt),M.getClearColor(G),at=M.getClearAlpha(),at<1&&M.setClearColor(16777215,.5),M.clear(),K&&Ut.render(Z);const Xt=M.toneMapping;M.toneMapping=wn;const Zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ft===!0&&_t.setGlobalState(M.clippingPlanes,q),Ps(I,Z,q),z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ie=0,pe=H.length;ie<pe;ie++){const fe=H[ie],{object:re,geometry:Pe,material:Ft,group:Ze}=fe;if(Ft.side===_n&&re.layers.test(q.layers)){const te=Ft.side;Ft.side=Ve,Ft.needsUpdate=!0,iu(re,Z,q,Pe,Ft,Ze),Ft.side=te,Ft.needsUpdate=!0,zt=!0}}zt===!0&&(z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt))}M.setRenderTarget(Ct,Nt,Bt),M.setClearColor(G,at),Zt!==void 0&&(q.viewport=Zt),M.toneMapping=Xt}function Ps(I,H,Z){const q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,wt=I.length;X<wt;X++){const Pt=I[X],{object:Ct,geometry:Nt,group:Bt}=Pt;let Xt=Pt.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),Ct.layers.test(Z.layers)&&iu(Ct,H,Z,Nt,Xt,Bt)}}function iu(I,H,Z,q,X,wt){I.onBeforeRender(M,H,Z,q,X,wt),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(M,H,Z,q,I,wt),X.transparent===!0&&X.side===_n&&X.forceSinglePass===!1?(X.side=Ve,X.needsUpdate=!0,M.renderBufferDirect(Z,H,q,X,I,wt),X.side=Rn,X.needsUpdate=!0,M.renderBufferDirect(Z,H,q,X,I,wt),X.side=_n):M.renderBufferDirect(Z,H,q,X,I,wt),I.onAfterRender(M,H,Z,q,X,wt)}function Is(I,H,Z){H.isScene!==!0&&(H=tt);const q=P.get(I),X=S.state.lights,wt=S.state.shadowsArray,Pt=X.state.version,Ct=mt.getParameters(I,X.state,wt,H,Z),Nt=mt.getProgramCacheKey(Ct);let Bt=q.programs;q.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const Xt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;q.envMap=W.get(I.envMap||q.environment,Xt),q.envMapRotation=q.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,Bt===void 0&&(I.addEventListener("dispose",ee),Bt=new Map,q.programs=Bt);let Zt=Bt.get(Nt);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===Pt)return su(I,Ct),Zt}else Ct.uniforms=mt.getUniforms(I),I.onBeforeCompile(Ct,M),Zt=mt.acquireProgram(Ct,Nt),Bt.set(Nt,Zt),q.uniforms=Ct.uniforms;const zt=q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(zt.clippingPlanes=_t.uniform),su(I,Ct),q.needsLights=zd(I),q.lightsStateVersion=Pt,q.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function ru(I){if(I.uniformsList===null){const H=I.currentProgram.getUniforms();I.uniformsList=No.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function su(I,H){const Z=P.get(I);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Od(I,H,Z,q,X){H.isScene!==!0&&(H=tt),z.resetTextureUnits();const wt=H.fog,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Ct=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Lr,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Bt=W.get(q.envMap||Pt,Nt),Xt=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Zt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!Z.morphAttributes.position,ie=!!Z.morphAttributes.normal,pe=!!Z.morphAttributes.color;let fe=wn;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=M.toneMapping);const re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pe=re!==void 0?re.length:0,Ft=P.get(q),Ze=S.state.lights;if(ft===!0&&(xt===!0||I!==F)){const Me=I===F&&q.id===U;_t.setState(q,I,Me)}let te=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ze.state.version||Ft.outputColorSpace!==Ct||X.isBatchedMesh&&Ft.batching===!1||!X.isBatchedMesh&&Ft.batching===!0||X.isBatchedMesh&&Ft.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ft.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ft.instancing===!1||!X.isInstancedMesh&&Ft.instancing===!0||X.isSkinnedMesh&&Ft.skinning===!1||!X.isSkinnedMesh&&Ft.skinning===!0||X.isInstancedMesh&&Ft.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ft.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ft.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ft.instancingMorph===!1&&X.morphTexture!==null||Ft.envMap!==Bt||q.fog===!0&&Ft.fog!==wt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==_t.numPlanes||Ft.numIntersection!==_t.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==Zt||Ft.morphTargets!==zt||Ft.morphNormals!==ie||Ft.morphColors!==pe||Ft.toneMapping!==fe||Ft.morphTargetsCount!==Pe)&&(te=!0):(te=!0,Ft.__version=q.version);let cn=Ft.currentProgram;te===!0&&(cn=Is(q,H,X));let xn=!1,_i=!1,Wi=!1;const se=cn.getUniforms(),Ce=Ft.uniforms;if(st.useProgram(cn.program)&&(xn=!0,_i=!0,Wi=!0),q.id!==U&&(U=q.id,_i=!0),xn||F!==I){st.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),se.setValue(N,"projectionMatrix",I.projectionMatrix),se.setValue(N,"viewMatrix",I.matrixWorldInverse);const jn=se.map.cameraPosition;jn!==void 0&&jn.setValue(N,At.setFromMatrixPosition(I.matrixWorld)),Mt.logarithmicDepthBuffer&&se.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&se.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),F!==I&&(F=I,_i=!0,Wi=!0)}if(Ft.needsLights&&(Ze.state.directionalShadowMap.length>0&&se.setValue(N,"directionalShadowMap",Ze.state.directionalShadowMap,z),Ze.state.spotShadowMap.length>0&&se.setValue(N,"spotShadowMap",Ze.state.spotShadowMap,z),Ze.state.pointShadowMap.length>0&&se.setValue(N,"pointShadowMap",Ze.state.pointShadowMap,z)),X.isSkinnedMesh){se.setOptional(N,X,"bindMatrix"),se.setOptional(N,X,"bindMatrixInverse");const Me=X.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),se.setValue(N,"boneTexture",Me.boneTexture,z))}X.isBatchedMesh&&(se.setOptional(N,X,"batchingTexture"),se.setValue(N,"batchingTexture",X._matricesTexture,z),se.setOptional(N,X,"batchingIdTexture"),se.setValue(N,"batchingIdTexture",X._indirectTexture,z),se.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&se.setValue(N,"batchingColorTexture",X._colorsTexture,z));const Kn=Z.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Rt.update(X,Z,cn),(_i||Ft.receiveShadow!==X.receiveShadow)&&(Ft.receiveShadow=X.receiveShadow,se.setValue(N,"receiveShadow",X.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Ce.envMapIntensity.value=H.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=Ty()),_i&&(se.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&Bd(Ce,Wi),wt&&q.fog===!0&&Ot.refreshFogUniforms(Ce,wt),Ot.refreshMaterialUniforms(Ce,q,ht,it,S.state.transmissionRenderTarget[I.id]),No.upload(N,ru(Ft),Ce,z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(No.upload(N,ru(Ft),Ce,z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&se.setValue(N,"center",X.center),se.setValue(N,"modelViewMatrix",X.modelViewMatrix),se.setValue(N,"normalMatrix",X.normalMatrix),se.setValue(N,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Me=q.uniformsGroups;for(let jn=0,Xi=Me.length;jn<Xi;jn++){const ou=Me[jn];It.update(ou,cn),It.bind(ou,cn)}}return cn}function Bd(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function zd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,H,Z){const q=P.get(I);q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),P.get(I.texture).__webglTexture=H,P.get(I.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,H){const Z=P.get(I);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const Vd=N.createFramebuffer();this.setRenderTarget=function(I,H=0,Z=0){C=I,b=H,w=Z;let q=null,X=!1,wt=!1;if(I){const Ct=P.get(I);if(Ct.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(N.FRAMEBUFFER,Ct.__webglFramebuffer),B.copy(I.viewport),O.copy(I.scissor),k=I.scissorTest,st.viewport(B),st.scissor(O),st.setScissorTest(k),U=-1;return}else if(Ct.__webglFramebuffer===void 0)z.setupRenderTarget(I);else if(Ct.__hasExternalTextures)z.rebindTextures(I,P.get(I.texture).__webglTexture,P.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Xt=I.depthTexture;if(Ct.__boundDepthTexture!==Xt){if(Xt!==null&&P.has(Xt)&&(I.width!==Xt.image.width||I.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(I)}}const Nt=I.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(wt=!0);const Bt=P.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?q=Bt[H][Z]:q=Bt[H],X=!0):I.samples>0&&z.useMultisampledRTT(I)===!1?q=P.get(I).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[Z]:q=Bt,B.copy(I.viewport),O.copy(I.scissor),k=I.scissorTest}else B.copy(Y).multiplyScalar(ht).floor(),O.copy(nt).multiplyScalar(ht).floor(),k=rt;if(Z!==0&&(q=Vd),st.bindFramebuffer(N.FRAMEBUFFER,q)&&st.drawBuffers(I,q),st.viewport(B),st.scissor(O),st.setScissorTest(k),X){const Ct=P.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ct.__webglTexture,Z)}else if(wt){const Ct=H;for(let Nt=0;Nt<I.textures.length;Nt++){const Bt=P.get(I.textures[Nt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,Z,Ct)}}else if(I!==null&&Z!==0){const Ct=P.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,Z)}U=-1},this.readRenderTargetPixels=function(I,H,Z,q,X,wt,Pt,Ct=0){if(!(I&&I.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=P.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){st.bindFramebuffer(N.FRAMEBUFFER,Nt);try{const Bt=I.textures[Ct],Xt=Bt.format,Zt=Bt.type;if(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct),!Mt.textureFormatReadable(Xt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Zt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-q&&Z>=0&&Z<=I.height-X&&N.readPixels(H,Z,q,X,yt.convert(Xt),yt.convert(Zt),wt)}finally{const Bt=C!==null?P.get(C).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(I,H,Z,q,X,wt,Pt,Ct=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=P.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt)if(H>=0&&H<=I.width-q&&Z>=0&&Z<=I.height-X){st.bindFramebuffer(N.FRAMEBUFFER,Nt);const Bt=I.textures[Ct],Xt=Bt.format,Zt=Bt.type;if(I.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct),!Mt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.bufferData(N.PIXEL_PACK_BUFFER,wt.byteLength,N.STREAM_READ),N.readPixels(H,Z,q,X,yt.convert(Xt),yt.convert(Zt),0);const ie=C!==null?P.get(C).__webglFramebuffer:null;st.bindFramebuffer(N.FRAMEBUFFER,ie);const pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Jp(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,wt),N.deleteBuffer(zt),N.deleteSync(pe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,H=null,Z=0){const q=Math.pow(2,-Z),X=Math.floor(I.image.width*q),wt=Math.floor(I.image.height*q),Pt=H!==null?H.x:0,Ct=H!==null?H.y:0;z.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Pt,Ct,X,wt),st.unbindTexture()};const Hd=N.createFramebuffer(),Gd=N.createFramebuffer();this.copyTextureToTexture=function(I,H,Z=null,q=null,X=0,wt=0){let Pt,Ct,Nt,Bt,Xt,Zt,zt,ie,pe;const fe=I.isCompressedTexture?I.mipmaps[wt]:I.image;if(Z!==null)Pt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,Xt=Z.min.y,Zt=Z.isBox3?Z.min.z:0;else{const Ce=Math.pow(2,-X);Pt=Math.floor(fe.width*Ce),Ct=Math.floor(fe.height*Ce),I.isDataArrayTexture?Nt=fe.depth:I.isData3DTexture?Nt=Math.floor(fe.depth*Ce):Nt=1,Bt=0,Xt=0,Zt=0}q!==null?(zt=q.x,ie=q.y,pe=q.z):(zt=0,ie=0,pe=0);const re=yt.convert(H.format),Pe=yt.convert(H.type);let Ft;H.isData3DTexture?(z.setTexture3D(H,0),Ft=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(z.setTexture2DArray(H,0),Ft=N.TEXTURE_2D_ARRAY):(z.setTexture2D(H,0),Ft=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Ze=N.getParameter(N.UNPACK_ROW_LENGTH),te=N.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=N.getParameter(N.UNPACK_SKIP_PIXELS),xn=N.getParameter(N.UNPACK_SKIP_ROWS),_i=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt);const Wi=I.isDataArrayTexture||I.isData3DTexture,se=H.isDataArrayTexture||H.isData3DTexture;if(I.isDepthTexture){const Ce=P.get(I),Kn=P.get(H),Me=P.get(Ce.__renderTarget),jn=P.get(Kn.__renderTarget);st.bindFramebuffer(N.READ_FRAMEBUFFER,Me.__webglFramebuffer),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Xi=0;Xi<Nt;Xi++)Wi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(I).__webglTexture,X,Zt+Xi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,P.get(H).__webglTexture,wt,pe+Xi)),N.blitFramebuffer(Bt,Xt,Pt,Ct,zt,ie,Pt,Ct,N.DEPTH_BUFFER_BIT,N.NEAREST);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||I.isRenderTargetTexture||P.has(I)){const Ce=P.get(I),Kn=P.get(H);st.bindFramebuffer(N.READ_FRAMEBUFFER,Hd),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gd);for(let Me=0;Me<Nt;Me++)Wi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,X,Zt+Me):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ce.__webglTexture,X),se?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kn.__webglTexture,wt,pe+Me):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kn.__webglTexture,wt),X!==0?N.blitFramebuffer(Bt,Xt,Pt,Ct,zt,ie,Pt,Ct,N.COLOR_BUFFER_BIT,N.NEAREST):se?N.copyTexSubImage3D(Ft,wt,zt,ie,pe+Me,Bt,Xt,Pt,Ct):N.copyTexSubImage2D(Ft,wt,zt,ie,Bt,Xt,Pt,Ct);st.bindFramebuffer(N.READ_FRAMEBUFFER,null),st.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else se?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Ft,wt,zt,ie,pe,Pt,Ct,Nt,re,Pe,fe.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ft,wt,zt,ie,pe,Pt,Ct,Nt,re,fe.data):N.texSubImage3D(Ft,wt,zt,ie,pe,Pt,Ct,Nt,re,Pe,fe):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,wt,zt,ie,Pt,Ct,re,Pe,fe.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,wt,zt,ie,fe.width,fe.height,re,fe.data):N.texSubImage2D(N.TEXTURE_2D,wt,zt,ie,Pt,Ct,re,Pe,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,te),N.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,xn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_i),wt===0&&H.generateMipmaps&&N.generateMipmap(Ft),st.unbindTexture()},this.initRenderTarget=function(I){P.get(I).__webglFramebuffer===void 0&&z.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?z.setTextureCube(I,0):I.isData3DTexture?z.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?z.setTexture2DArray(I,0):z.setTexture2D(I,0),st.unbindTexture()},this.resetState=function(){b=0,w=0,C=null,st.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function Th(i){for(let t=i.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}function wy(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new an;let f=0;for(let h=0;h<i.length;++h){const g=i[h];let d=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in g.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(g.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in g.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(g.morphAttributes[m])}if(t){let m;if(e)m=g.index.count;else if(g.attributes.position!==void 0)m=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(f,m,h),f+=m}}if(e){let h=0;const g=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let v=0;v<m.count;++v)g.push(m.getX(v)+h);h+=i[d].attributes.position.count}l.setIndex(g)}for(const h in s){const g=Ah(s[h]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,g)}for(const h in o){const g=o[h][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<g;++d){const m=[];for(let T=0;T<o[h].length;++T)m.push(o[h][T][d]);const v=Ah(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Ah(i){let t,e,n,r=-1,s=0;for(let f=0;f<i.length;++f){const h=i[f];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Ge(o,e,n);let l=0;for(let f=0;f<i.length;++f){const h=i[f];if(h.isInterleavedBufferAttribute){const g=l/e;for(let d=0,m=h.count;d<m;d++)for(let v=0;v<e;v++){const T=h.getComponent(d,v);a.setComponent(d+g,v,T)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}const so=120,cr=0,Fo=-150,Ii=-30,Cy=[new L(cr-so,0,Ii+Fo),new L(cr-so,0,Ii),new L(cr+0,0,Ii+Fo),new L(cr+0,0,Ii),new L(cr+so,0,Ii+Fo),new L(cr+so,0,Ii)],Yr=[{type:"cube",geometry:new qn(50,50,50),rotation:new ue(0,Math.PI/6,0),hole:{type:"square"},compatibleHoles:["square"]},{type:"small cuboid",geometry:new qn(30,30,50),rotation:new ue(0,Math.PI/6,0),hole:{type:"rect"},compatibleHoles:["rect","square","circle"],holeAlignment:[{holeType:"any",offset:new L(0,-10,0)},{holeType:["circle"],offset:new L(0,0,0),rotation:new ue(Math.PI/2,0,0)}]},{type:"big cuboid",geometry:new qn(50,50,80),rotation:new ue(0,Math.PI/-3,0),compatibleHoles:["square"],holeAlignment:[{holeType:"any",offset:new L(0,15,0),rotation:new ue(Math.PI/2,0,0)}]},{type:"cylinder",geometry:new qo(25,25,50,32),rotation:new ue(0,Math.PI/-3,Math.PI/2),hole:{type:"circle"},compatibleHoles:["circle","square"]},{type:"half-cylinder",geometry:wy([new qo(25,25,60,32,1,!1,0,Math.PI),new Br(50,60).rotateY(Math.PI/-2)]).translate(-25/2,0,0),rotation:new ue(0,Math.PI/6,Math.PI/2),hole:{type:"semicircle",rotation:new ue(0,Math.PI/2,0)},compatibleHoles:["semicircle","square","circle"],holeAlignment:[{holeType:"any",offset:new L(0,5,0),rotation:new ue(0,Math.PI/2,0)}]},{type:"prism",geometry:new kl(new sd([new gt(0,0),new gt(50,0),new gt(25,50)]),{depth:50,bevelEnabled:!1}).translate(-25,-25,-25),rotation:new ue(0,Math.PI/6,0),hole:{type:"triangle",rotation:new ue(-Math.PI/2,0,0)},compatibleHoles:["triangle","square"],holeAlignment:[{holeType:"any",rotation:new ue(Math.PI/2,0,Math.PI)}]}],xd=0,Ry=1,Py=2,wh=2,$a=1.25,Ch=1,Ue=32,ve=Ue/4,yd=65535,Oo=Math.pow(2,-24),Wl=Symbol("SKIP_GENERATION"),Sd={strategy:xd,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Wl]:!1};function de(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Rh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Ph(i,t){t.set(i)}function Ih(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function oo(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Zr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function xe(i,t){return t[i+15]===yd}function Ne(i,t){return t[i+6]}function ze(i,t){return t[i+14]}function Te(i){return i+ve}function Ae(i,t){const e=t[i+6];return i+e*ve}function Xl(i,t){return t[i+7]}function qa(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,f=-1/0,h=-1/0,g=1/0,d=1/0,m=1/0,v=-1/0,T=-1/0,_=-1/0;const x=i.offset||0;for(let E=(t-x)*6,p=(t+e-x)*6;E<p;E+=6){const c=i[E+0],S=i[E+1],u=c-S,R=c+S;u<s&&(s=u),R>l&&(l=R),c<g&&(g=c),c>v&&(v=c);const y=i[E+2],M=i[E+3],A=y-M,b=y+M;A<o&&(o=A),b>f&&(f=b),y<d&&(d=y),y>T&&(T=y);const w=i[E+4],C=i[E+5],U=w-C,F=w+C;U<a&&(a=U),F>h&&(h=F),w<m&&(m=w),w>_&&(_=w)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=f,n[5]=h,r[0]=g,r[1]=d,r[2]=m,r[3]=v,r[4]=T,r[5]=_}const Gn=32,Iy=(i,t)=>i.candidate-t.candidate,si=new Array(Gn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ao=new Float32Array(6);function Dy(i,t,e,n,r,s){let o=-1,a=0;if(s===xd)o=Rh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Ry)o=Rh(i),o!==-1&&(a=Ly(e,n,r,o));else if(s===Py){const l=Zr(i);let f=$a*r;const h=e.offset||0,g=(n-h)*6,d=(n+r-h)*6;for(let m=0;m<3;m++){const v=t[m],x=(t[m+3]-v)/Gn;if(r<Gn/4){const E=[...si];E.length=r;let p=0;for(let S=g;S<d;S+=6,p++){const u=E[p];u.candidate=e[S+2*m],u.count=0;const{bounds:R,leftCacheBounds:y,rightCacheBounds:M}=u;for(let A=0;A<3;A++)M[A]=1/0,M[A+3]=-1/0,y[A]=1/0,y[A+3]=-1/0,R[A]=1/0,R[A+3]=-1/0;oo(S,e,R)}E.sort(Iy);let c=r;for(let S=0;S<c;S++){const u=E[S];for(;S+1<c&&E[S+1].candidate===u.candidate;)E.splice(S+1,1),c--}for(let S=g;S<d;S+=6){const u=e[S+2*m];for(let R=0;R<c;R++){const y=E[R];u>=y.candidate?oo(S,e,y.rightCacheBounds):(oo(S,e,y.leftCacheBounds),y.count++)}}for(let S=0;S<c;S++){const u=E[S],R=u.count,y=r-u.count,M=u.leftCacheBounds,A=u.rightCacheBounds;let b=0;R!==0&&(b=Zr(M)/l);let w=0;y!==0&&(w=Zr(A)/l);const C=Ch+$a*(b*R+w*y);C<f&&(o=m,f=C,a=u.candidate)}}else{for(let c=0;c<Gn;c++){const S=si[c];S.count=0,S.candidate=v+x+c*x;const u=S.bounds;for(let R=0;R<3;R++)u[R]=1/0,u[R+3]=-1/0}for(let c=g;c<d;c+=6){let R=~~((e[c+2*m]-v)/x);R>=Gn&&(R=Gn-1);const y=si[R];y.count++,oo(c,e,y.bounds)}const E=si[Gn-1];Ph(E.bounds,E.rightCacheBounds);for(let c=Gn-2;c>=0;c--){const S=si[c],u=si[c+1];Ih(S.bounds,u.rightCacheBounds,S.rightCacheBounds)}let p=0;for(let c=0;c<Gn-1;c++){const S=si[c],u=S.count,R=S.bounds,M=si[c+1].rightCacheBounds;u!==0&&(p===0?Ph(R,ao):Ih(R,ao,ao)),p+=u;let A=0,b=0;p!==0&&(A=Zr(ao)/l);const w=r-p;w!==0&&(b=Zr(M)/l);const C=Ch+$a*(A*p+b*w);C<f&&(o=m,f=C,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Ly(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}class Ya{constructor(){this.boundingData=new Float32Array(6)}}function Uy(i,t,e,n,r,s){let o=n,a=n+r-1;const l=s.pos,f=s.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+f]<l;)o++;for(;o<=a&&e[(a-h)*6+f]>=l;)a--;if(o<a){for(let g=0;g<t;g++){let d=i[o*t+g];i[o*t+g]=i[a*t+g],i[a*t+g]=d}for(let g=0;g<6;g++){const d=o-h,m=a-h,v=e[d*6+g];e[d*6+g]=e[m*6+g],e[m*6+g]=v}o++,a--}else return o}}let Md,Bo,hl,Ed;const Ny=Math.pow(2,32);function fl(i){return"count"in i?1:1+fl(i.left)+fl(i.right)}function Fy(i,t,e){return Md=new Float32Array(e),Bo=new Uint32Array(e),hl=new Uint16Array(e),Ed=new Uint8Array(e),dl(i,t)}function dl(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Md[e+o]=s[o];if(r)return t.buffer?(Ed.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Bo[e+6]=t.offset,hl[n+14]=t.count,hl[n+15]=yd,i+Ue);{const{left:o,right:a,splitAxis:l}=t,f=i+Ue;let h=dl(f,o);const g=i/Ue,m=h/Ue-g;if(m>Ny)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Bo[e+6]=m,Bo[e+7]=l,dl(h,a)}}function Oy(i,t,e,n,r,s){const{maxDepth:o,verbose:a,maxLeafSize:l,strategy:f,onProgress:h}=r,g=i.primitiveBuffer,d=i.primitiveBufferStride,m=new Float32Array(6);let v=!1;const T=new Ya;return qa(t,e,n,T.boundingData,m),x(T,e,n,m),T;function _(E){h&&h((E-s.offset)/s.count)}function x(E,p,c,S=null,u=0){if(!v&&u>=o&&(v=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),c<=l||u>=o)return _(p+c),E.offset=p,E.count=c,E;const R=Dy(E.boundingData,S,t,p,c,f);if(R.axis===-1)return _(p+c),E.offset=p,E.count=c,E;const y=Uy(g,d,t,p,c,R);if(y===p||y===p+c)_(p+c),E.offset=p,E.count=c;else{E.splitAxis=R.axis;const M=new Ya,A=p,b=y-p;E.left=M,qa(t,A,b,M.boundingData,m),x(M,A,b,m,u+1);const w=new Ya,C=y,U=c-b;E.right=w,qa(t,C,U,w.boundingData,m),x(w,C,U,m,u+1)}return E}}function By(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{const f=Oy(i,a,l.offset,l.count,t,o),h=fl(f),g=new e(Ue*h);return Fy(0,f,g),g})}class $l{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class zy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const le=new zy;let di,br;const lr=[],co=new $l(()=>new ke);function Vy(i,t,e,n,r,s){di=co.getPrimitive(),br=co.getPrimitive(),lr.push(di,br),le.setBuffer(i._roots[t]);const o=pl(0,i.geometry,e,n,r,s);le.clearBuffer(),co.releasePrimitive(di),co.releasePrimitive(br),lr.pop(),lr.pop();const a=lr.length;return a>0&&(br=lr[a-1],di=lr[a-2]),o}function pl(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:f}=le;let h=i*2;if(xe(h,l)){const v=Ne(i,f),T=ze(h,l);return de(i,a,di),n(v,T,!1,o,s+i/ve,di)}else{let w=function(U){const{uint16Array:F,uint32Array:B}=le;let O=U*2;for(;!xe(O,F);)U=Te(U),O=U*2;return Ne(U,B)},C=function(U){const{uint16Array:F,uint32Array:B}=le;let O=U*2;for(;!xe(O,F);)U=Ae(U,B),O=U*2;return Ne(U,B)+ze(O,F)};var d=w,m=C;const v=Te(i),T=Ae(i,f);let _=v,x=T,E,p,c,S;if(r&&(c=di,S=br,de(_,a,c),de(x,a,S),E=r(c),p=r(S),p<E)){_=T,x=v;const U=E;E=p,p=U,c=S}c||(c=di,de(_,a,c));const u=xe(_*2,l),R=e(c,u,E,o+1,s+_/ve);let y;if(R===wh){const U=w(_),B=C(_)-U;y=n(U,B,!0,o+1,s+_/ve,c)}else y=R&&pl(_,t,e,n,r,s,o+1);if(y)return!0;S=br,de(x,a,S);const M=xe(x*2,l),A=e(S,M,p,o+1,s+x/ve);let b;if(A===wh){const U=w(x),B=C(x)-U;b=n(U,B,!0,o+1,s+x/ve,S)}else b=A&&pl(x,t,e,n,r,s,o+1);return!!b}}const fs=new le.constructor,Yo=new le.constructor,ai=new $l(()=>new ke),ur=new ke,hr=new ke,Za=new ke,Ja=new ke;let Ka=!1;function Hy(i,t,e,n){if(Ka)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ka=!0;const r=i._roots,s=t._roots;let o,a=0,l=0;const f=new Jt().copy(e).invert();for(let h=0,g=r.length;h<g;h++){fs.setBuffer(r[h]),l=0;const d=ai.getPrimitive();de(0,fs.float32Array,d),d.applyMatrix4(f);for(let m=0,v=s.length;m<v&&(Yo.setBuffer(s[m]),o=pn(0,0,e,f,n,a,l,0,0,d),Yo.clearBuffer(),l+=s[m].byteLength/Ue,!o);m++);if(ai.releasePrimitive(d),fs.clearBuffer(),a+=r[h].byteLength/Ue,o)break}return Ka=!1,o}function pn(i,t,e,n,r,s=0,o=0,a=0,l=0,f=null,h=!1){let g,d;h?(g=Yo,d=fs):(g=fs,d=Yo);const m=g.float32Array,v=g.uint32Array,T=g.uint16Array,_=d.float32Array,x=d.uint32Array,E=d.uint16Array,p=i*2,c=t*2,S=xe(p,T),u=xe(c,E);let R=!1;if(u&&S)h?R=r(Ne(t,x),ze(t*2,E),Ne(i,v),ze(i*2,T),l,o+t/ve,a,s+i/ve):R=r(Ne(i,v),ze(i*2,T),Ne(t,x),ze(t*2,E),a,s+i/ve,l,o+t/ve);else if(u){const y=ai.getPrimitive();de(t,_,y),y.applyMatrix4(e);const M=Te(i),A=Ae(i,v);de(M,m,ur),de(A,m,hr);const b=y.intersectsBox(ur),w=y.intersectsBox(hr);R=b&&pn(t,M,n,e,r,o,s,l,a+1,y,!h)||w&&pn(t,A,n,e,r,o,s,l,a+1,y,!h),ai.releasePrimitive(y)}else{const y=Te(t),M=Ae(t,x);de(y,_,Za),de(M,_,Ja);const A=f.intersectsBox(Za),b=f.intersectsBox(Ja);if(A&&b)R=pn(i,y,e,n,r,s,o,a,l+1,f,h)||pn(i,M,e,n,r,s,o,a,l+1,f,h);else if(A)if(S)R=pn(i,y,e,n,r,s,o,a,l+1,f,h);else{const w=ai.getPrimitive();w.copy(Za).applyMatrix4(e);const C=Te(i),U=Ae(i,v);de(C,m,ur),de(U,m,hr);const F=w.intersectsBox(ur),B=w.intersectsBox(hr);R=F&&pn(y,C,n,e,r,o,s,l,a+1,w,!h)||B&&pn(y,U,n,e,r,o,s,l,a+1,w,!h),ai.releasePrimitive(w)}else if(b)if(S)R=pn(i,M,e,n,r,s,o,a,l+1,f,h);else{const w=ai.getPrimitive();w.copy(Ja).applyMatrix4(e);const C=Te(i),U=Ae(i,v);de(C,m,ur),de(U,m,hr);const F=w.intersectsBox(ur),B=w.intersectsBox(hr);R=F&&pn(M,C,n,e,r,o,s,l,a+1,w,!h)||B&&pn(M,U,n,e,r,o,s,l,a+1,w,!h),ai.releasePrimitive(w)}}return R}const Dh=new ke,fr=new Float32Array(6);class Gy{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Sd,...t},By(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,f=-1/0,h=-1/0;for(let g=t,d=t+e;g<d;g++){this.writePrimitiveBounds(g,fr,0);const[m,v,T,_,x,E]=fr;m<s&&(s=m),_>l&&(l=_),v<o&&(o=v),x>f&&(f=x),T<a&&(a=T),E>h&&(h=E)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=f,n[r+5]=h,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,fr,0);const[a,l,f,h,g,d]=fr,m=(a+h)/2,v=(l+g)/2,T=(f+d)/2,_=(h-a)/2,x=(g-l)/2,E=(d-f)/2,p=(s-r)*6;n[p+0]=m,n[p+1]=_+(Math.abs(m)+_)*Oo,n[p+2]=v,n[p+3]=x+(Math.abs(v)+x)*Oo,n[p+4]=T,n[p+5]=E+(Math.abs(T)+E)*Oo}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/Ue;for(let f=0;f<l;f++){const h=ve*f,g=2*h;xe(g,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const f=a*2,h=xe(f,s);if(h){const g=r[a+6],d=s[f+14];t(l,h,new Float32Array(n,a*4,6),g,d)}else{const g=Te(a),d=Ae(a,r),m=Xl(a,r);t(l,h,new Float32Array(n,a*4,6),m)||(o(g,l+1),o(d,l+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/Ue;for(let f=l-1;f>=0;f--){const h=f*ve,g=h*2;if(xe(g,o)){const m=Ne(h,s),v=ze(g,o);this.writePrimitiveRangeBounds(m,v,fr,0),a.set(fr,h)}else{const m=Te(h),v=Ae(h,s);for(let T=0;T<3;T++){const _=a[m+T],x=a[m+T+3],E=a[v+T],p=a[v+T+3];a[h+T]=_<E?_:E,a[h+T+3]=x>p?x:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{de(0,new Float32Array(n),Dh),t.union(Dh)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const g=r;r=(d,m,v,T,_)=>g(d,m,v,T,_)?!0:a(d,m,this,s,v,T,o)}else r||(s?r=(g,d,m,v)=>a(g,d,this,s,m,v,o):r=(g,d,m)=>m);let l=!1,f=0;const h=this._roots;for(let g=0,d=h.length;g<d;g++){const m=h[g];if(l=Vy(this,g,n,r,e,f),l)break;f+=m.byteLength/Ue}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Hy(this,t,e,r)}}function ky(){return typeof SharedArrayBuffer<"u"}function ql(i){return i.index?i.index.count:i.attributes.position.count}function ia(i){return ql(i)/3}function Wy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Xy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Wy(e,n);i.setIndex(new Ge(r,1));for(let s=0;s<e;s++)r[s]=s}}function $y(i,t,e){const n=ql(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function qy(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Lh(i,t,e){const n=$y(i,t,e),r=qy(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,l=ql(i)/e,f=[];for(const d of r){const{offset:m,count:v}=d,T=m,_=isFinite(v)?v:l-m,x=m+_;T<a&&x>o&&(f.push({pos:Math.max(o,T),isStart:!0}),f.push({pos:Math.min(a,x),isStart:!1}))}f.sort((d,m)=>d.pos!==m.pos?d.pos-m.pos:d.type==="end"?-1:1);let h=0,g=null;for(const d of f){const m=d.pos;h!==0&&m!==g&&s.push({offset:g,count:m-g}),h+=d.isStart?1:-1,g=m}return s}function Yy(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((f,h)=>f+h.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let l=0;for(let f=0;f<i.length;f++){const{offset:h,count:g}=i[f];for(let d=0;d<g;d++)a[l+d]=h+d;l+=g}return a}class Zy extends Gy{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!ky())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Sd,...e},e[Wl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=Lh(e,t.range,n),s=Yy(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Xy(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ke))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Lh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Jn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Jn.prototype.setFromBox=(function(){const i=new L;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let h=0;h<=1;h++){i.x=r.x*l+s.x*(1-l),i.y=r.y*f+s.y*(1-f),i.z=r.z*h+s.z*(1-h);const g=e.dot(i);o=Math.min(g,o),a=Math.max(g,a)}this.min=o,this.max=a}})();const Jy=(function(){const i=new L,t=new L,e=new L;return function(r,s,o){const a=r.start,l=i,f=s.start,h=t;e.subVectors(a,f),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const g=e.dot(h),d=h.dot(l),m=h.dot(h),v=e.dot(l),_=l.dot(l)*m-d*d;let x,E;_!==0?x=(g*d-v*m)/_:x=0,E=(g+x*d)/m,o.x=x,o.y=E}})(),Yl=(function(){const i=new gt,t=new L,e=new L;return function(r,s,o,a){Jy(r,s,i);let l=i.x,f=i.y;if(l>=0&&l<=1&&f>=0&&f<=1){r.at(l,o),s.at(f,a);return}else if(l>=0&&l<=1){f<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(f>=0&&f<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=r.start:h=r.end;let g;f<0?g=s.start:g=s.end;const d=t,m=e;if(r.closestPointToPoint(g,!0,t),s.closestPointToPoint(h,!0,e),d.distanceToSquared(g)<=m.distanceToSquared(h)){o.copy(d),a.copy(g);return}else{o.copy(h),a.copy(m);return}}}})(),Ky=(function(){const i=new L,t=new L,e=new gn,n=new we;return function(s,o){const{radius:a,center:l}=s,{a:f,b:h,c:g}=o;if(n.start=f,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=f,n.end=g,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=h,n.end=g,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const T=o.getPlane(e);if(Math.abs(T.distanceToPoint(l))<=a){const x=T.projectPoint(l,t);if(o.containsPoint(x))return!0}return!1}})(),jy=["x","y","z"],kn=1e-15,Uh=kn*kn;function rn(i){return Math.abs(i)<kn}class Ye extends ce{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Jn),this.points=[this.a,this.b,this.c],this.plane=new gn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new we,this.needsUpdate=!0}intersectsSphere(t){return Ky(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const f=s[1],h=o[1];f.subVectors(t,e),h.setFromPoints(f,r);const g=s[2],d=o[2];g.subVectors(e,n),d.setFromPoints(g,r);const m=s[3],v=o[3];m.subVectors(n,t),v.setFromPoints(m,r);const T=f.length(),_=g.length(),x=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,T<kn?_<kn||x<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):_<kn?x<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):x<kn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Ye.prototype.closestPointToSegment=(function(){const i=new L,t=new L,e=new we;return function(r,s=null,o=null){const{start:a,end:l}=r,f=this.points;let h,g=1/0;for(let d=0;d<3;d++){const m=(d+1)%3;e.start.copy(f[d]),e.end.copy(f[m]),Yl(e,r,i,t),h=i.distanceToSquared(t),h<g&&(g=h,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<g&&(g=h,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<g&&(g=h,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(g)}})();Ye.prototype.intersectsTriangle=(function(){const i=new Ye,t=new Jn,e=new Jn,n=new L,r=new L,s=new L,o=new L,a=new we,l=new we,f=new L,h=new gt,g=new gt;function d(p,c,S,u){const R=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?R.copy(p.plane.normal):R.copy(c.plane.normal);const y=p.satBounds,M=p.satAxes;for(let w=1;w<4;w++){const C=y[w],U=M[w];if(t.setFromPoints(U,c.points),C.isSeparated(t)||(o.copy(R).cross(U),t.setFromPoints(o,p.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}const A=c.satBounds,b=c.satAxes;for(let w=1;w<4;w++){const C=A[w],U=b[w];if(t.setFromPoints(U,p.points),C.isSeparated(t)||(o.crossVectors(R,U),t.setFromPoints(o,p.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return S&&(u||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function m(p,c,S,u,R,y,M,A,b,w,C){let U=M/(M-A);w.x=u+(R-u)*U,C.start.subVectors(c,p).multiplyScalar(U).add(p),U=M/(M-b),w.y=u+(y-u)*U,C.end.subVectors(S,p).multiplyScalar(U).add(p)}function v(p,c,S,u,R,y,M,A,b,w,C){if(R>0)m(p.c,p.a,p.b,u,c,S,b,M,A,w,C);else if(y>0)m(p.b,p.a,p.c,S,c,u,A,M,b,w,C);else if(A*b>0||M!=0)m(p.a,p.b,p.c,c,S,u,M,A,b,w,C);else if(A!=0)m(p.b,p.a,p.c,S,c,u,A,M,b,w,C);else if(b!=0)m(p.c,p.a,p.b,u,c,S,b,M,A,w,C);else return!0;return!1}function T(p,c,S,u){const R=c.degenerateSegment,y=p.plane.distanceToPoint(R.start),M=p.plane.distanceToPoint(R.end);return rn(y)?rn(M)?d(p,c,S,u):(S&&(S.start.copy(R.start),S.end.copy(R.start)),p.containsPoint(R.start)):rn(M)?(S&&(S.start.copy(R.end),S.end.copy(R.end)),p.containsPoint(R.end)):p.plane.intersectLine(R,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),p.containsPoint(n)):!1}function _(p,c,S){const u=c.a;return rn(p.plane.distanceToPoint(u))&&p.containsPoint(u)?(S&&(S.start.copy(u),S.end.copy(u)),!0):!1}function x(p,c,S){const u=p.degenerateSegment,R=c.a;return u.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<Uh?(S&&(S.start.copy(R),S.end.copy(R)),!0):!1}function E(p,c,S,u){if(p.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){const R=p.degenerateSegment,y=c.degenerateSegment,M=r,A=s;R.delta(M),y.delta(A);const b=n.subVectors(y.start,R.start),w=M.x*A.y-M.y*A.x;if(rn(w))return!1;const C=(b.x*A.y-b.y*A.x)/w,U=-(M.x*b.y-M.y*b.x)/w;if(C<0||C>1||U<0||U>1)return!1;const F=R.start.z+M.z*C,B=y.start.z+A.z*U;return rn(F-B)?(S&&(S.start.copy(R.start).addScaledVector(M,C),S.end.copy(R.start).addScaledVector(M,C)),!0):!1}else return c.isDegenerateIntoPoint?x(p,c,S):T(c,p,S,u);else{if(p.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(p.a)<Uh?(S&&(S.start.copy(p.a),S.end.copy(p.a)),!0):!1:c.isDegenerateIntoSegment?x(c,p,S):_(c,p,S);if(c.isDegenerateIntoPoint)return _(p,c,S);if(c.isDegenerateIntoSegment)return T(p,c,S,u)}}return function(c,S=null,u=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);const R=E(this,c,S,u);if(R!==void 0)return R;const y=this.plane,M=c.plane;let A=M.distanceToPoint(this.a),b=M.distanceToPoint(this.b),w=M.distanceToPoint(this.c);rn(A)&&(A=0),rn(b)&&(b=0),rn(w)&&(w=0);const C=A*b,U=A*w;if(C>0&&U>0)return!1;let F=y.distanceToPoint(c.a),B=y.distanceToPoint(c.b),O=y.distanceToPoint(c.c);rn(F)&&(F=0),rn(B)&&(B=0),rn(O)&&(O=0);const k=F*B,G=F*O;if(k>0&&G>0)return!1;r.copy(y.normal),s.copy(M.normal);const at=r.cross(s);let et=0,it=Math.abs(at.x);const ht=Math.abs(at.y);ht>it&&(it=ht,et=1),Math.abs(at.z)>it&&(et=2);const Tt=jy[et],Y=this.a[Tt],nt=this.b[Tt],rt=this.c[Tt],ut=c.a[Tt],ft=c.b[Tt],xt=c.c[Tt];if(v(this,Y,nt,rt,C,U,A,b,w,h,a))return d(this,c,S,u);if(v(c,ut,ft,xt,k,G,F,B,O,g,l))return d(this,c,S,u);if(h.y<h.x){const Gt=h.y;h.y=h.x,h.x=Gt,f.copy(a.start),a.start.copy(a.end),a.end.copy(f)}if(g.y<g.x){const Gt=g.y;g.y=g.x,g.x=Gt,f.copy(l.start),l.start.copy(l.end),l.end.copy(f)}return h.y<g.x||g.y<h.x?!1:(S&&(g.x>h.x?S.start.copy(l.start):S.start.copy(a.start),g.y<h.y?S.end.copy(l.end):S.end.copy(a.end)),!0)}})();Ye.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ye.prototype.distanceToTriangle=(function(){const i=new L,t=new L,e=["a","b","c"],n=new we,r=new we;return function(o,a=null,l=null){const f=a||l?n:null;if(this.intersectsTriangle(o,f))return(a||l)&&(a&&f.getCenter(a),l&&f.getCenter(l)),0;let h=1/0;for(let g=0;g<3;g++){let d;const m=e[g],v=o[m];this.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<h&&(h=d,a&&a.copy(i),l&&l.copy(v));const T=this[m];o.closestPointToPoint(T,i),d=T.distanceToSquared(i),d<h&&(h=d,a&&a.copy(T),l&&l.copy(i))}for(let g=0;g<3;g++){const d=e[g],m=e[(g+1)%3];n.set(this[d],this[m]);for(let v=0;v<3;v++){const T=e[v],_=e[(v+1)%3];r.set(o[T],o[_]),Yl(n,r,i,t);const x=i.distanceToSquared(t);x<h&&(h=x,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(h)}})();class We{constructor(t,e,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Jt,this.invMatrix=new Jt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Jn),this.alignedSatBounds=new Array(3).fill().map(()=>new Jn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}We.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let f=0;f<=1;f++)for(let h=0;h<=1;h++)for(let g=0;g<=1;g++){const d=1*f|2*h|4*g,m=r[d];m.x=f?n.x:e.x,m.y=h?n.y:e.y,m.z=g?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let f=0;f<3;f++){const h=o[f],g=s[f],d=1<<f,m=r[d];h.subVectors(a,m),g.setFromPoints(h,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();We.prototype.intersectsBox=(function(){const i=new Jn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const f=o[l],h=s[l];if(i.setFromBox(f,e),h.isSeparated(i))return!1}return!0}})();We.prototype.intersectsTriangle=(function(){const i=new Ye,t=new Array(3),e=new Jn,n=new Jn,r=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){const m=a[d],v=l[d];if(e.setFromPoints(v,t),m.isSeparated(e))return!1}const f=o.satBounds,h=o.satAxes,g=this.points;for(let d=0;d<3;d++){const m=f[d],v=h[d];if(e.setFromPoints(v,g),m.isSeparated(e))return!1}for(let d=0;d<3;d++){const m=l[d];for(let v=0;v<4;v++){const T=h[v];if(r.crossVectors(m,T),e.setFromPoints(r,t),n.setFromPoints(r,g),e.isSeparated(n))return!1}}return!0}})();We.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();We.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();We.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new we),e=new Array(12).fill().map(()=>new we),n=new L,r=new L;return function(o,a=0,l=null,f=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||f)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),f&&f.copy(r)),0;const h=a*a,g=o.min,d=o.max,m=this.points;let v=1/0;for(let _=0;_<8;_++){const x=m[_];r.copy(x).clamp(g,d);const E=x.distanceToSquared(r);if(E<v&&(v=E,l&&l.copy(x),f&&f.copy(r),E<h))return Math.sqrt(E)}let T=0;for(let _=0;_<3;_++)for(let x=0;x<=1;x++)for(let E=0;E<=1;E++){const p=(_+1)%3,c=(_+2)%3,S=x<<p|E<<c,u=1<<_|x<<p|E<<c,R=m[S],y=m[u];t[T].set(R,y);const A=i[_],b=i[p],w=i[c],C=e[T],U=C.start,F=C.end;U[A]=g[A],U[b]=x?g[b]:d[b],U[w]=E?g[w]:d[b],F[A]=d[A],F[b]=x?g[b]:d[b],F[w]=E?g[w]:d[b],T++}for(let _=0;_<=1;_++)for(let x=0;x<=1;x++)for(let E=0;E<=1;E++){r.x=_?d.x:g.x,r.y=x?d.y:g.y,r.z=E?d.z:g.z,this.closestPointToPoint(r,n);const p=r.distanceToSquared(n);if(p<v&&(v=p,l&&l.copy(n),f&&f.copy(r),p<h))return Math.sqrt(p)}for(let _=0;_<12;_++){const x=t[_];for(let E=0;E<12;E++){const p=e[E];Yl(x,p,n,r);const c=n.distanceToSquared(r);if(c<v&&(v=c,l&&l.copy(n),f&&f.copy(r),c<h))return Math.sqrt(c)}}return Math.sqrt(v)}})();class Qy extends $l{constructor(){super(()=>new Ye)}}const on=new Qy,Jr=new L,ja=new L;function tS(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(Jr.copy(t).clamp(h.min,h.max),Jr.distanceToSquared(t)),intersectsBounds:(h,g,d)=>d<a&&d<o,intersectsTriangle:(h,g)=>{h.closestPointToPoint(t,Jr);const d=t.distanceToSquared(Jr);return d<a&&(ja.copy(Jr),a=d,l=g),d<s}}),a===1/0)return null;const f=Math.sqrt(a);return e.point?e.point.copy(ja):e.point=ja.clone(),e.distance=f,e.faceIndex=l,e}const lo=parseInt(ws)>=169,eS=parseInt(ws)<=161,Ti=new L,Ai=new L,wi=new L,uo=new gt,ho=new gt,fo=new gt,Nh=new L,Fh=new L,Oh=new L,Kr=new L;function nS(i,t,e,n,r,s,o,a){let l;if(s===Ve?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==_n,r),l===null)return null;const f=i.origin.distanceTo(r);return f<o||f>a?null:{distance:f,point:r.clone()}}function Bh(i,t,e,n,r,s,o,a,l,f,h){Ti.fromBufferAttribute(t,s),Ai.fromBufferAttribute(t,o),wi.fromBufferAttribute(t,a);const g=nS(i,Ti,Ai,wi,Kr,l,f,h);if(g){if(n){uo.fromBufferAttribute(n,s),ho.fromBufferAttribute(n,o),fo.fromBufferAttribute(n,a),g.uv=new gt;const m=ce.getInterpolation(Kr,Ti,Ai,wi,uo,ho,fo,g.uv);lo||(g.uv=m)}if(r){uo.fromBufferAttribute(r,s),ho.fromBufferAttribute(r,o),fo.fromBufferAttribute(r,a),g.uv1=new gt;const m=ce.getInterpolation(Kr,Ti,Ai,wi,uo,ho,fo,g.uv1);lo||(g.uv1=m),eS&&(g.uv2=g.uv1)}if(e){Nh.fromBufferAttribute(e,s),Fh.fromBufferAttribute(e,o),Oh.fromBufferAttribute(e,a),g.normal=new L;const m=ce.getInterpolation(Kr,Ti,Ai,wi,Nh,Fh,Oh,g.normal);g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1),lo||(g.normal=m)}const d={a:s,b:o,c:a,normal:new L,materialIndex:0};if(ce.getNormal(Ti,Ai,wi,d.normal),g.face=d,g.faceIndex=s,lo){const m=new L;ce.getBarycoord(Kr,Ti,Ai,wi,m),g.barycoord=m}}return g}function zh(i){return i&&i.isMaterial?i.side:i}function ra(i,t,e,n,r,s,o){const a=n*3;let l=a+0,f=a+1,h=a+2;const{index:g,groups:d}=i;i.index&&(l=g.getX(l),f=g.getX(f),h=g.getX(h));const{position:m,normal:v,uv:T,uv1:_}=i.attributes;if(Array.isArray(t)){const x=n*3;for(let E=0,p=d.length;E<p;E++){const{start:c,count:S,materialIndex:u}=d[E];if(x>=c&&x<c+S){const R=zh(t[u]),y=Bh(e,m,v,T,_,l,f,h,R,s,o);if(y)if(y.faceIndex=n,y.face.materialIndex=u,r)r.push(y);else return y}}}else{const x=zh(t),E=Bh(e,m,v,T,_,l,f,h,x,s,o);if(E)if(E.faceIndex=n,E.face.materialIndex=0,r)r.push(E);else return E}return null}function _e(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,l=t+1,f=t+2;e&&(a=e.getX(a),l=e.getX(l),f=e.getX(f)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(f),o.y=n.getY(f),o.z=n.getZ(f)}function iS(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:f}=i;for(let h=n,g=n+r;h<g;h++)ra(l,t,e,h,s,o,a)}function rS(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let f=1/0,h=null;for(let g=n,d=n+r;g<d;g++){let m;m=ra(a,t,e,g,null,s,o),m&&m.distance<f&&(h=m,f=m.distance)}return h}function sS(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,f=a.attributes.position;for(let h=i,g=t+i;h<g;h++){let d;if(d=h,_e(o,d*3,l,f),o.needsUpdate=!0,n(o,d,r,s))return!0}return!1}function oS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,f=0;const h=i._roots;for(let d=0,m=h.length;d<m;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),g(0,f),f+=s.byteLength;function g(d,m,v=!1){const T=d*2;if(xe(T,a)){const _=Ne(d,o),x=ze(T,a);let E=1/0,p=1/0,c=1/0,S=-1/0,u=-1/0,R=-1/0;for(let y=3*_,M=3*(_+x);y<M;y++){let A=n[y];const b=r.getX(A),w=r.getY(A),C=r.getZ(A);b<E&&(E=b),b>S&&(S=b),w<p&&(p=w),w>u&&(u=w),C<c&&(c=C),C>R&&(R=C)}return l[d+0]!==E||l[d+1]!==p||l[d+2]!==c||l[d+3]!==S||l[d+4]!==u||l[d+5]!==R?(l[d+0]=E,l[d+1]=p,l[d+2]=c,l[d+3]=S,l[d+4]=u,l[d+5]=R,!0):!1}else{const _=Te(d),x=Ae(d,o);let E=v,p=!1,c=!1;if(t){if(!E){const A=_/ve+m/Ue,b=x/ve+m/Ue;p=t.has(A),c=t.has(b),E=!p&&!c}}else p=!0,c=!0;const S=E||p,u=E||c;let R=!1;S&&(R=g(_,m,E));let y=!1;u&&(y=g(x,m,E));const M=R||y;if(M)for(let A=0;A<3;A++){const b=_+A,w=x+A,C=l[b],U=l[b+3],F=l[w],B=l[w+3];l[d+A]=C<F?C:F,l[d+A+3]=U>B?U:B}return M}}}function gi(i,t,e,n,r){let s,o,a,l,f,h;const g=1/e.direction.x,d=1/e.direction.y,m=1/e.direction.z,v=e.origin.x,T=e.origin.y,_=e.origin.z;let x=t[i],E=t[i+3],p=t[i+1],c=t[i+3+1],S=t[i+2],u=t[i+3+2];return g>=0?(s=(x-v)*g,o=(E-v)*g):(s=(E-v)*g,o=(x-v)*g),d>=0?(a=(p-T)*d,l=(c-T)*d):(a=(c-T)*d,l=(p-T)*d),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),m>=0?(f=(S-_)*m,h=(u-_)*m):(f=(u-_)*m,h=(S-_)*m),s>h||f>o)?!1:((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),s<=r&&o>=n)}function aS(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:f}=i;for(let h=n,g=n+r;h<g;h++){let d=f?f[h]:h;ra(l,t,e,d,s,o,a)}}function cS(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let f=1/0,h=null;for(let g=n,d=n+r;g<d;g++){let m;m=ra(a,t,e,l?l[g]:g,null,s,o),m&&m.distance<f&&(h=m,f=m.distance)}return h}function lS(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,f=a.attributes.position;for(let h=i,g=t+i;h<g;h++){let d;if(d=e.resolveTriangleIndex(h),_e(o,d*3,l,f),o.needsUpdate=!0,n(o,d,r,s))return!0}return!1}function uS(i,t,e,n,r,s,o){le.setBuffer(i._roots[t]),gl(0,i,e,n,r,s,o),le.clearBuffer()}function gl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:f}=le,h=i*2;if(xe(h,l)){const d=Ne(i,f),m=ze(h,l);iS(t,e,n,d,m,r,s,o)}else{const d=Te(i);gi(d,a,n,s,o)&&gl(d,t,e,n,r,s,o);const m=Ae(i,f);gi(m,a,n,s,o)&&gl(m,t,e,n,r,s,o)}}const hS=["x","y","z"];function fS(i,t,e,n,r,s){le.setBuffer(i._roots[t]);const o=ml(0,i,e,n,r,s);return le.clearBuffer(),o}function ml(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=le;let f=i*2;if(xe(f,a)){const g=Ne(i,l),d=ze(f,a);return rS(t,e,n,g,d,r,s)}else{const g=Xl(i,l),d=hS[g],v=n.direction[d]>=0;let T,_;v?(T=Te(i),_=Ae(i,l)):(T=Ae(i,l),_=Te(i));const E=gi(T,o,n,r,s)?ml(T,t,e,n,r,s):null;if(E){const S=E.point[d];if(v?S<=o[_+g]:S>=o[_+g+3])return E}const c=gi(_,o,n,r,s)?ml(_,t,e,n,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const po=new ke,dr=new Ye,pr=new Ye,jr=new Jt,Vh=new We,go=new We;function dS(i,t,e,n){le.setBuffer(i._roots[t]);const r=_l(0,i,e,n);return le.clearBuffer(),r}function _l(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=le;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Vh.set(e.boundingBox.min,e.boundingBox.max,n),r=Vh),xe(l,o)){const h=t.geometry,g=h.index,d=h.attributes.position,m=e.index,v=e.attributes.position,T=Ne(i,a),_=ze(l,o);if(jr.copy(n).invert(),e.boundsTree)return de(i,s,go),go.matrix.copy(jr),go.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>go.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let p=T*3,c=(_+T)*3;p<c;p+=3)if(_e(pr,p,g,d),pr.needsUpdate=!0,E.intersectsTriangle(pr))return!0;return!1}});{const x=ia(e);for(let E=T*3,p=(_+T)*3;E<p;E+=3){_e(dr,E,g,d),dr.a.applyMatrix4(jr),dr.b.applyMatrix4(jr),dr.c.applyMatrix4(jr),dr.needsUpdate=!0;for(let c=0,S=x*3;c<S;c+=3)if(_e(pr,c,m,v),pr.needsUpdate=!0,dr.intersectsTriangle(pr))return!0}}}else{const h=Te(i),g=Ae(i,a);return de(h,s,po),!!(r.intersectsBox(po)&&_l(h,t,e,n,r)||(de(g,s,po),r.intersectsBox(po)&&_l(g,t,e,n,r)))}}const mo=new Jt,Qa=new We,Qr=new We,pS=new L,gS=new L,mS=new L,_S=new L;function vS(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Qa.set(t.boundingBox.min,t.boundingBox.max,e),Qa.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,f=a.index,h=t.attributes.position,g=t.index,d=on.getPrimitive(),m=on.getPrimitive();let v=pS,T=gS,_=null,x=null;r&&(_=mS,x=_S);let E=1/0,p=null,c=null;return mo.copy(e).invert(),Qr.matrix.copy(mo),i.shapecast({boundsTraverseOrder:S=>Qa.distanceToBox(S),intersectsBounds:(S,u,R)=>R<E&&R<o?(u&&(Qr.min.copy(S.min),Qr.max.copy(S.max),Qr.needsUpdate=!0),!0):!1,intersectsRange:(S,u)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:y=>Qr.distanceToBox(y),intersectsBounds:(y,M,A)=>A<E&&A<o,intersectsRange:(y,M)=>{for(let A=y,b=y+M;A<b;A++){_e(m,3*A,g,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=S,C=S+u;w<C;w++){_e(d,3*w,f,l),d.needsUpdate=!0;const U=d.distanceToTriangle(m,v,_);if(U<E&&(T.copy(v),x&&x.copy(_),E=U,p=w,c=A),U<s)return!0}}}});{const R=ia(t);for(let y=0,M=R;y<M;y++){_e(m,3*y,g,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=S,b=S+u;A<b;A++){_e(d,3*A,f,l),d.needsUpdate=!0;const w=d.distanceToTriangle(m,v,_);if(w<E&&(T.copy(v),x&&x.copy(_),E=w,p=A,c=y),w<s)return!0}}}}}),on.releasePrimitive(d),on.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=E,n.faceIndex=p,r&&(r.point?r.point.copy(x):r.point=x.clone(),r.point.applyMatrix4(mo),T.applyMatrix4(mo),r.distance=T.sub(r.point).length(),r.faceIndex=c),n)}function xS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,f=0;const h=i._roots;for(let d=0,m=h.length;d<m;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),g(0,f),f+=s.byteLength;function g(d,m,v=!1){const T=d*2;if(xe(T,a)){const _=Ne(d,o),x=ze(T,a);let E=1/0,p=1/0,c=1/0,S=-1/0,u=-1/0,R=-1/0;for(let y=_,M=_+x;y<M;y++){const A=3*i.resolveTriangleIndex(y);for(let b=0;b<3;b++){let w=A+b;w=n?n[w]:w;const C=r.getX(w),U=r.getY(w),F=r.getZ(w);C<E&&(E=C),C>S&&(S=C),U<p&&(p=U),U>u&&(u=U),F<c&&(c=F),F>R&&(R=F)}}return l[d+0]!==E||l[d+1]!==p||l[d+2]!==c||l[d+3]!==S||l[d+4]!==u||l[d+5]!==R?(l[d+0]=E,l[d+1]=p,l[d+2]=c,l[d+3]=S,l[d+4]=u,l[d+5]=R,!0):!1}else{const _=Te(d),x=Ae(d,o);let E=v,p=!1,c=!1;if(t){if(!E){const A=_/ve+m/Ue,b=x/ve+m/Ue;p=t.has(A),c=t.has(b),E=!p&&!c}}else p=!0,c=!0;const S=E||p,u=E||c;let R=!1;S&&(R=g(_,m,E));let y=!1;u&&(y=g(x,m,E));const M=R||y;if(M)for(let A=0;A<3;A++){const b=_+A,w=x+A,C=l[b],U=l[b+3],F=l[w],B=l[w+3];l[d+A]=C<F?C:F,l[d+A+3]=U>B?U:B}return M}}}function yS(i,t,e,n,r,s,o){le.setBuffer(i._roots[t]),vl(0,i,e,n,r,s,o),le.clearBuffer()}function vl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:f}=le,h=i*2;if(xe(h,l)){const d=Ne(i,f),m=ze(h,l);aS(t,e,n,d,m,r,s,o)}else{const d=Te(i);gi(d,a,n,s,o)&&vl(d,t,e,n,r,s,o);const m=Ae(i,f);gi(m,a,n,s,o)&&vl(m,t,e,n,r,s,o)}}const SS=["x","y","z"];function MS(i,t,e,n,r,s){le.setBuffer(i._roots[t]);const o=xl(0,i,e,n,r,s);return le.clearBuffer(),o}function xl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=le;let f=i*2;if(xe(f,a)){const g=Ne(i,l),d=ze(f,a);return cS(t,e,n,g,d,r,s)}else{const g=Xl(i,l),d=SS[g],v=n.direction[d]>=0;let T,_;v?(T=Te(i),_=Ae(i,l)):(T=Ae(i,l),_=Te(i));const E=gi(T,o,n,r,s)?xl(T,t,e,n,r,s):null;if(E){const S=E.point[d];if(v?S<=o[_+g]:S>=o[_+g+3])return E}const c=gi(_,o,n,r,s)?xl(_,t,e,n,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const _o=new ke,gr=new Ye,mr=new Ye,ts=new Jt,Hh=new We,vo=new We;function ES(i,t,e,n){le.setBuffer(i._roots[t]);const r=yl(0,i,e,n);return le.clearBuffer(),r}function yl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=le;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Hh.set(e.boundingBox.min,e.boundingBox.max,n),r=Hh),xe(l,o)){const h=t.geometry,g=h.index,d=h.attributes.position,m=e.index,v=e.attributes.position,T=Ne(i,a),_=ze(l,o);if(ts.copy(n).invert(),e.boundsTree)return de(i,s,vo),vo.matrix.copy(ts),vo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>vo.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let p=T,c=_+T;p<c;p++)if(_e(mr,3*t.resolveTriangleIndex(p),g,d),mr.needsUpdate=!0,E.intersectsTriangle(mr))return!0;return!1}});{const x=ia(e);for(let E=T,p=_+T;E<p;E++){const c=t.resolveTriangleIndex(E);_e(gr,3*c,g,d),gr.a.applyMatrix4(ts),gr.b.applyMatrix4(ts),gr.c.applyMatrix4(ts),gr.needsUpdate=!0;for(let S=0,u=x*3;S<u;S+=3)if(_e(mr,S,m,v),mr.needsUpdate=!0,gr.intersectsTriangle(mr))return!0}}}else{const h=Te(i),g=Ae(i,a);return de(h,s,_o),!!(r.intersectsBox(_o)&&yl(h,t,e,n,r)||(de(g,s,_o),r.intersectsBox(_o)&&yl(g,t,e,n,r)))}}const xo=new Jt,tc=new We,es=new We,bS=new L,TS=new L,AS=new L,wS=new L;function CS(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),tc.set(t.boundingBox.min,t.boundingBox.max,e),tc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,f=a.index,h=t.attributes.position,g=t.index,d=on.getPrimitive(),m=on.getPrimitive();let v=bS,T=TS,_=null,x=null;r&&(_=AS,x=wS);let E=1/0,p=null,c=null;return xo.copy(e).invert(),es.matrix.copy(xo),i.shapecast({boundsTraverseOrder:S=>tc.distanceToBox(S),intersectsBounds:(S,u,R)=>R<E&&R<o?(u&&(es.min.copy(S.min),es.max.copy(S.max),es.needsUpdate=!0),!0):!1,intersectsRange:(S,u)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:y=>es.distanceToBox(y),intersectsBounds:(y,M,A)=>A<E&&A<o,intersectsRange:(y,M)=>{for(let A=y,b=y+M;A<b;A++){const w=R.resolveTriangleIndex(A);_e(m,3*w,g,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let C=S,U=S+u;C<U;C++){const F=i.resolveTriangleIndex(C);_e(d,3*F,f,l),d.needsUpdate=!0;const B=d.distanceToTriangle(m,v,_);if(B<E&&(T.copy(v),x&&x.copy(_),E=B,p=C,c=A),B<s)return!0}}}})}else{const R=ia(t);for(let y=0,M=R;y<M;y++){_e(m,3*y,g,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=S,b=S+u;A<b;A++){const w=i.resolveTriangleIndex(A);_e(d,3*w,f,l),d.needsUpdate=!0;const C=d.distanceToTriangle(m,v,_);if(C<E&&(T.copy(v),x&&x.copy(_),E=C,p=A,c=y),C<s)return!0}}}}}),on.releasePrimitive(d),on.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=E,n.faceIndex=p,r&&(r.point?r.point.copy(x):r.point=x.clone(),r.point.applyMatrix4(xo),T.applyMatrix4(xo),r.distance=T.sub(r.point).length(),r.faceIndex=c),n)}function Gh(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const yo=new We,So=new Rs,kh=new L,Wh=new Jt,Xh=new L,ec=["getX","getY","getZ"];class Zo extends Zy{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));const a=new Zo(e,{...n,[Wl]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const f=e.getIndex();if(f===null){const h=new Ge(t.index,1,!1);e.setIndex(h)}else f.array!==r&&(f.array.set(r),f.needsUpdate=!0)}return a;function l(f){for(let h=0;h<f.length;h++){const g=f[h],d=new Uint32Array(g),m=new Uint16Array(g);for(let v=0,T=g.byteLength/Ue;v<T;v++){const _=ve*v,x=2*_;xe(x,m)||(d[_+6]=d[_+6]/ve-v)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,f=(s?s[t]:t)*3;let h=f+0,g=f+1,d=f+2;a&&(h=a[h],g=a[g],d=a[d]);for(let m=0;m<3;m++){const v=o[ec[m]](h),T=o[ec[m]](g),_=o[ec[m]](d);let x=v;T<x&&(x=T),_<x&&(x=_);let E=v;T>E&&(E=T),_>E&&(E=_),e[n+m]=x,e[n+m+3]=E}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const f=o.array,h=o.offset||0;let g=3;o.isInterleavedBufferAttribute&&(g=o.data.stride);const d=["getX","getY","getZ"],m=n.offset;for(let v=t,T=t+e;v<T;v++){const x=(s?s[v]:v)*3,E=(v-m)*6;let p=x+0,c=x+1,S=x+2;a&&(p=a[p],c=a[c],S=a[S]),l||(p=p*g+h,c=c*g+h,S=S*g+h);for(let u=0;u<3;u++){let R,y,M;l?(R=o[d[u]](p),y=o[d[u]](c),M=o[d[u]](S)):(R=f[p+u],y=f[c+u],M=f[S+u]);let A=R;y<A&&(A=y),M<A&&(A=M);let b=R;y>b&&(b=y),M>b&&(b=M);const w=(b-A)/2,C=u*2;n[E+C+0]=A+w,n[E+C+1]=w+(Math.abs(A)+w)*Oo}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;Wh.copy(t.matrixWorld).invert(),So.copy(e.ray).applyMatrix4(Wh),Xh.setFromMatrixScale(t.matrixWorld),kh.copy(So.direction).multiply(Xh);const s=kh.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(So,r,o,a);l=Gh(l,t,e),l&&n.push(l)}else{const l=this.raycast(So,r,o,a);for(let f=0,h=l.length;f<h;f++){const g=Gh(l[f],t,e);g&&n.push(g)}}return n}refit(t=null){return(this.indirect?xS:oS)(this,t)}raycast(t,e=Rn,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?yS:uS;for(let l=0,f=s.length;l<f;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=Rn,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?MS:fS;for(let l=0,f=s.length;l<f;l++){const h=a(this,l,e,t,n,r);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?ES:dS;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=on.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?lS:sS});return on.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=on.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,f=this.indirect?v=>{const T=this.resolveTriangleIndex(v);_e(o,T*3,a,l)}:v=>{_e(o,v*3,a,l)},h=on.getPrimitive(),g=t.geometry.index,d=t.geometry.attributes.position,m=t.indirect?v=>{const T=t.resolveTriangleIndex(v);_e(h,T*3,g,d)}:v=>{_e(h,v*3,g,d)};if(s){if(!(t instanceof Zo))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const v=(T,_,x,E,p,c,S,u)=>{for(let R=x,y=x+E;R<y;R++){m(R),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let M=T,A=T+_;M<A;M++)if(f(M),o.needsUpdate=!0,s(o,h,M,R,p,c,S,u))return!0}return!1};if(r){const T=r;r=function(_,x,E,p,c,S,u,R){return T(_,x,E,p,c,S,u,R)?!0:v(_,x,E,p,c,S,u,R)}}else r=v}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return yo.set(t.min,t.max,e),yo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>yo.intersectsBox(n),intersectsTriangle:n=>yo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?CS:vS)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return tS(this,t,e,n,r)}}const bd=1e-6,RS=bd*.5,Td=Math.pow(10,-Math.log10(bd)),PS=RS*Td;function An(i){return~~(i*Td+PS)}function IS(i){return`${An(i.x)},${An(i.y)}`}function $h(i){return`${An(i.x)},${An(i.y)},${An(i.z)}`}function DS(i){return`${An(i.x)},${An(i.y)},${An(i.z)},${An(i.w)}`}function LS(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Ad(){return typeof SharedArrayBuffer<"u"}function US(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function NS(i){return i.index?i.index.count:i.attributes.position.count}function Zl(i){return NS(i)/3}const FS=1e-8,OS=new L;function BS(i){return~~(i/3)}function zS(i){return i%3}function qh(i,t){return i.start-t.start}function Yh(i,t){return OS.subVectors(t,i.origin).dot(i.direction)}function VS(i,t,e,n=FS){i.sort(qh),t.sort(qh);for(let a=0;a<i.length;a++){const l=i[a];for(let f=0;f<t.length;f++){const h=t[f];if(!(h.start>l.end)){if(l.end<h.start||h.end<l.start)continue;if(l.start<=h.start&&l.end>=h.end)s(h.end,l.end)||i.splice(a+1,0,{start:h.end,end:l.end,index:l.index}),l.end=h.start,h.start=0,h.end=0;else if(l.start>=h.start&&l.end<=h.end)s(l.end,h.end)||t.splice(f+1,0,{start:l.end,end:h.end,index:h.index}),h.end=l.start,l.start=0,l.end=0;else if(l.start<=h.start&&l.end<=h.end){const g=l.end;l.end=h.start,h.start=g}else if(l.start>=h.start&&l.end>=h.end){const g=h.end;h.end=l.start,l.start=g}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(h.index)||e.set(h.index,[]),e.get(l.index).push(h.index),e.get(h.index).push(l.index),o(h)&&(t.splice(f,1),f--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const Zh=1e-5,Jh=1e-4;class HS{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,f=e.length;l<f;l++){const h=e[l];if(o(h,t)&&o(h,n))continue;const g=a(h,t),d=a(h,n),m=Math.min(g,d);m<r&&(r=m,s=h)}return s;function o(l,f){const h=l.origin.distanceTo(f.origin)>Zh;return l.direction.angleTo(f.direction)>Jh||h}function a(l,f){const h=l.origin.distanceTo(f.origin),g=l.direction.angleTo(f.direction);return h/Zh+g/Jh}}}const nc=new L,ic=new L,Mo=new Rs;function GS(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),f=new HS;for(let h=0,g=l.length;h<g;h++){const d=l[h],m=BS(d),v=zS(d);let T=3*m+v,_=3*m+(v+1)%3;r&&(T=r.getX(T),_=r.getX(_)),nc.fromBufferAttribute(s,T),ic.fromBufferAttribute(s,_),LS(nc,ic,Mo);let x,E=f.findClosestRay(Mo);E===null&&(E=Mo.clone(),f.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),x=a.get(E);let p=Yh(E,nc),c=Yh(E,ic);p>c&&([p,c]=[c,p]),Mo.direction.dot(E.direction)<0?x.reverse.push({start:p,end:c,index:d}):x.forward.push({start:p,end:c,index:d})}return a.forEach(({forward:h,reverse:g},d)=>{VS(h,g,o,e),h.length===0&&g.length===0&&a.delete(d)}),{disjointConnectivityMap:o,fragmentMap:a}}const kS=new gt,rc=new L,WS=new oe,sc=["","",""];class XS{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?p:E,a=new Map,{attributes:l}=t,f=e?Object.keys(l):null,h=t.index,g=l.position;let d=Zl(t);const m=d;let v=0;n&&(v=t.drawRange.start,t.drawRange.count!==1/0&&(d=~~(t.drawRange.count/3)));let T=this.data;(!T||T.length<3*m)&&(T=new Int32Array(3*m)),T.fill(-1);let _=0,x=new Set;for(let c=v,S=d*3+v;c<S;c+=3){const u=c;for(let R=0;R<3;R++){let y=u+R;h&&(y=h.getX(y)),sc[R]=o(y)}for(let R=0;R<3;R++){const y=(R+1)%3,M=sc[R],A=sc[y],b=`${A}_${M}`;if(a.has(b)){const w=u+R,C=a.get(b);T[w]=C,T[C]=w,a.delete(b),_+=2,x.delete(C)}else{const w=`${M}_${A}`,C=u+R;a.set(w,C),x.add(C)}}}if(r){const{fragmentMap:c,disjointConnectivityMap:S}=GS(t,x,s);x.clear(),c.forEach(({forward:u,reverse:R})=>{u.forEach(({index:y})=>x.add(y)),R.forEach(({index:y})=>x.add(y))}),this.unmatchedDisjointEdges=c,this.disjointConnections=S,_=d*3-x.size}this.matchedEdges=_,this.unmatchedEdges=x.size,this.data=T;function E(c){return rc.fromBufferAttribute(g,c),$h(rc)}function p(c){let S="";for(let u=0,R=f.length;u<R;u++){const y=l[f[u]];let M;switch(y.itemSize){case 1:M=An(y.getX(c));break;case 2:M=IS(kS.fromBufferAttribute(y,c));break;case 3:M=$h(rc.fromBufferAttribute(y,c));break;case 4:M=DS(WS.fromBufferAttribute(y,c));break}S!==""&&(S+="|"),S+=M}return S}}}class ds extends tn{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Jt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Ad(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,l=`${t.uuid}_${o}_${a}`;if(this._hash===l)return;if(this._hash=l,n)for(const d in e){const m=e[d];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=US(m.array)}t.boundsTree=new Zo(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new XS),t.halfEdges.updateFrom(t);const f=Zl(t);(!t.groupIndices||t.groupIndices.length!==f)&&(t.groupIndices=new Uint16Array(f));const h=t.groupIndices,g=t.groups;for(let d=0,m=g.length;d<m;d++){const{start:v,count:T}=g[d];for(let _=v/3,x=(v+T)/3;_<x;_++)h[_]=d}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var $S=Object.getOwnPropertyNames,en=(i,t)=>function(){return t||(0,i[$S(i)[0]])((t={exports:{}}).exports,t),t.exports},sa=en({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(l,f,h,g,d){for(var m=d+1;g<=d;){var v=g+d>>>1,T=l[v],_=h!==void 0?h(T,f):T-f;_>=0?(m=v,d=v-1):g=v+1}return m}function n(l,f,h,g,d){for(var m=d+1;g<=d;){var v=g+d>>>1,T=l[v],_=h!==void 0?h(T,f):T-f;_>0?(m=v,d=v-1):g=v+1}return m}function r(l,f,h,g,d){for(var m=g-1;g<=d;){var v=g+d>>>1,T=l[v],_=h!==void 0?h(T,f):T-f;_<0?(m=v,g=v+1):d=v-1}return m}function s(l,f,h,g,d){for(var m=g-1;g<=d;){var v=g+d>>>1,T=l[v],_=h!==void 0?h(T,f):T-f;_<=0?(m=v,g=v+1):d=v-1}return m}function o(l,f,h,g,d){for(;g<=d;){var m=g+d>>>1,v=l[m],T=h!==void 0?h(v,f):v-f;if(T===0)return m;T<=0?g=m+1:d=m-1}return-1}function a(l,f,h,g,d,m){return typeof h=="function"?m(l,f,h,g===void 0?0:g|0,d===void 0?l.length-1:d|0):m(l,f,void 0,h===void 0?0:h|0,g===void 0?l.length-1:g|0)}t.exports={ge:function(l,f,h,g,d){return a(l,f,h,g,d,e)},gt:function(l,f,h,g,d){return a(l,f,h,g,d,n)},lt:function(l,f,h,g,d){return a(l,f,h,g,d,r)},le:function(l,f,h,g,d){return a(l,f,h,g,d,s)},eq:function(l,f,h,g,d){return a(l,f,h,g,d,o)}}}}),Jl=en({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,l=e*r,f=l-r,h=l-f,g=r-h,d=e*s,m=d-s,v=d-m,T=s-v,_=a-h*v,x=_-g*v,E=x-h*T,p=g*T-E;return o?(o[0]=p,o[1]=a,o):[p,a]}}}),wd=en({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,f=s-a,h=r-l,g=h+f;return g?[g,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var l=o+a,f=new Array(l),h=0,g=0,d=0,m=Math.abs,v=r[g],T=m(v),_=s[d],x=m(_),E,p;T<x?(p=v,g+=1,g<o&&(v=r[g],T=m(v))):(p=_,d+=1,d<a&&(_=s[d],x=m(_))),g<o&&T<x||d>=a?(E=v,g+=1,g<o&&(v=r[g],T=m(v))):(E=_,d+=1,d<a&&(_=s[d],x=m(_)));for(var c=E+p,S=c-E,u=p-S,R=u,y=c,M,A,b,w,C;g<o&&d<a;)T<x?(E=v,g+=1,g<o&&(v=r[g],T=m(v))):(E=_,d+=1,d<a&&(_=s[d],x=m(_))),p=R,c=E+p,S=c-E,u=p-S,u&&(f[h++]=u),M=y+c,A=M-y,b=M-A,w=c-A,C=y-b,R=C+w,y=M;for(;g<o;)E=v,p=R,c=E+p,S=c-E,u=p-S,u&&(f[h++]=u),M=y+c,A=M-y,b=M-A,w=c-A,C=y-b,R=C+w,y=M,g+=1,g<o&&(v=r[g]);for(;d<a;)E=_,p=R,c=E+p,S=c-E,u=p-S,u&&(f[h++]=u),M=y+c,A=M-y,b=M-A,w=c-A,C=y-b,R=C+w,y=M,d+=1,d<a&&(_=s[d]);return R&&(f[h++]=R),y&&(f[h++]=y),h||(f[h++]=0),f.length=h,f}}}),qS=en({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,l=o-a,f=r-a,h=n-l;return s?(s[0]=h+f,s[1]=o,s):[h+f,o]}}}),Cd=en({"node_modules/robust-scale/robust-scale.js"(i,t){var e=Jl(),n=qS();t.exports=r;function r(s,o){var a=s.length;if(a===1){var l=e(s[0],o);return l[0]?l:[l[1]]}var f=new Array(2*a),h=[.1,.1],g=[.1,.1],d=0;e(s[0],o,h),h[0]&&(f[d++]=h[0]);for(var m=1;m<a;++m){e(s[m],o,g);var v=h[1];n(v,g[0],h),h[0]&&(f[d++]=h[0]);var T=g[1],_=h[1],x=T+_,E=x-T,p=_-E;h[1]=x,p&&(f[d++]=p)}return h[1]&&(f[d++]=h[1]),d===0&&(f[d++]=0),f.length=d,f}}}),Rd=en({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,f=s-a,h=r-l,g=h+f;return g?[g,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var l=o+a,f=new Array(l),h=0,g=0,d=0,m=Math.abs,v=r[g],T=m(v),_=-s[d],x=m(_),E,p;T<x?(p=v,g+=1,g<o&&(v=r[g],T=m(v))):(p=_,d+=1,d<a&&(_=-s[d],x=m(_))),g<o&&T<x||d>=a?(E=v,g+=1,g<o&&(v=r[g],T=m(v))):(E=_,d+=1,d<a&&(_=-s[d],x=m(_)));for(var c=E+p,S=c-E,u=p-S,R=u,y=c,M,A,b,w,C;g<o&&d<a;)T<x?(E=v,g+=1,g<o&&(v=r[g],T=m(v))):(E=_,d+=1,d<a&&(_=-s[d],x=m(_))),p=R,c=E+p,S=c-E,u=p-S,u&&(f[h++]=u),M=y+c,A=M-y,b=M-A,w=c-A,C=y-b,R=C+w,y=M;for(;g<o;)E=v,p=R,c=E+p,S=c-E,u=p-S,u&&(f[h++]=u),M=y+c,A=M-y,b=M-A,w=c-A,C=y-b,R=C+w,y=M,g+=1,g<o&&(v=r[g]);for(;d<a;)E=_,p=R,c=E+p,S=c-E,u=p-S,u&&(f[h++]=u),M=y+c,A=M-y,b=M-A,w=c-A,C=y-b,R=C+w,y=M,d+=1,d<a&&(_=-s[d]);return R&&(f[h++]=R),y&&(f[h++]=y),h||(f[h++]=0),f.length=h,f}}}),YS=en({"node_modules/robust-orientation/orientation.js"(i,t){var e=Jl(),n=wd(),r=Cd(),s=Rd(),o=5,a=11102230246251565e-32,l=(3+16*a)*a,f=(7+56*a)*a;function h(c,S,u,R){return function(M,A,b){var w=c(c(S(A[1],b[0]),S(-b[1],A[0])),c(S(M[1],A[0]),S(-A[1],M[0]))),C=c(S(M[1],b[0]),S(-b[1],M[0])),U=R(w,C);return U[U.length-1]}}function g(c,S,u,R){return function(M,A,b,w){var C=c(c(u(c(S(b[1],w[0]),S(-w[1],b[0])),A[2]),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),-b[2]),u(c(S(A[1],b[0]),S(-b[1],A[0])),w[2]))),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),w[2])))),U=c(c(u(c(S(b[1],w[0]),S(-w[1],b[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-b[2]),u(c(S(M[1],b[0]),S(-b[1],M[0])),w[2]))),c(u(c(S(A[1],b[0]),S(-b[1],A[0])),M[2]),c(u(c(S(M[1],b[0]),S(-b[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),b[2])))),F=R(C,U);return F[F.length-1]}}function d(c,S,u,R){return function(M,A,b,w,C){var U=c(c(c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),b[2]),c(u(c(S(b[1],C[0]),S(-C[1],b[0])),-w[2]),u(c(S(b[1],w[0]),S(-w[1],b[0])),C[2]))),A[3]),c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-w[2]),u(c(S(A[1],w[0]),S(-w[1],A[0])),C[2]))),-b[3]),u(c(u(c(S(b[1],C[0]),S(-C[1],b[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-b[2]),u(c(S(A[1],b[0]),S(-b[1],A[0])),C[2]))),w[3]))),c(u(c(u(c(S(b[1],w[0]),S(-w[1],b[0])),A[2]),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),-b[2]),u(c(S(A[1],b[0]),S(-b[1],A[0])),w[2]))),-C[3]),c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-w[2]),u(c(S(A[1],w[0]),S(-w[1],A[0])),C[2]))),M[3]),u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-w[2]),u(c(S(M[1],w[0]),S(-w[1],M[0])),C[2]))),-A[3])))),c(c(u(c(u(c(S(A[1],C[0]),S(-C[1],A[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),C[2]))),w[3]),c(u(c(u(c(S(A[1],w[0]),S(-w[1],A[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),w[2]))),-C[3]),u(c(u(c(S(b[1],w[0]),S(-w[1],b[0])),A[2]),c(u(c(S(A[1],w[0]),S(-w[1],A[0])),-b[2]),u(c(S(A[1],b[0]),S(-b[1],A[0])),w[2]))),M[3]))),c(u(c(u(c(S(b[1],w[0]),S(-w[1],b[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-b[2]),u(c(S(M[1],b[0]),S(-b[1],M[0])),w[2]))),-A[3]),c(u(c(u(c(S(A[1],w[0]),S(-w[1],A[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),w[2]))),b[3]),u(c(u(c(S(A[1],b[0]),S(-b[1],A[0])),M[2]),c(u(c(S(M[1],b[0]),S(-b[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),b[2]))),-w[3]))))),F=c(c(c(u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),b[2]),c(u(c(S(b[1],C[0]),S(-C[1],b[0])),-w[2]),u(c(S(b[1],w[0]),S(-w[1],b[0])),C[2]))),M[3]),u(c(u(c(S(w[1],C[0]),S(-C[1],w[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-w[2]),u(c(S(M[1],w[0]),S(-w[1],M[0])),C[2]))),-b[3])),c(u(c(u(c(S(b[1],C[0]),S(-C[1],b[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-b[2]),u(c(S(M[1],b[0]),S(-b[1],M[0])),C[2]))),w[3]),u(c(u(c(S(b[1],w[0]),S(-w[1],b[0])),M[2]),c(u(c(S(M[1],w[0]),S(-w[1],M[0])),-b[2]),u(c(S(M[1],b[0]),S(-b[1],M[0])),w[2]))),-C[3]))),c(c(u(c(u(c(S(b[1],C[0]),S(-C[1],b[0])),A[2]),c(u(c(S(A[1],C[0]),S(-C[1],A[0])),-b[2]),u(c(S(A[1],b[0]),S(-b[1],A[0])),C[2]))),M[3]),u(c(u(c(S(b[1],C[0]),S(-C[1],b[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-b[2]),u(c(S(M[1],b[0]),S(-b[1],M[0])),C[2]))),-A[3])),c(u(c(u(c(S(A[1],C[0]),S(-C[1],A[0])),M[2]),c(u(c(S(M[1],C[0]),S(-C[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),C[2]))),b[3]),u(c(u(c(S(A[1],b[0]),S(-b[1],A[0])),M[2]),c(u(c(S(M[1],b[0]),S(-b[1],M[0])),-A[2]),u(c(S(M[1],A[0]),S(-A[1],M[0])),b[2]))),-C[3])))),B=R(U,F);return B[B.length-1]}}function m(c){var S=c===3?h:c===4?g:d;return S(n,e,r,s)}var v=m(3),T=m(4),_=[function(){return 0},function(){return 0},function(S,u){return u[0]-S[0]},function(S,u,R){var y=(S[1]-R[1])*(u[0]-R[0]),M=(S[0]-R[0])*(u[1]-R[1]),A=y-M,b;if(y>0){if(M<=0)return A;b=y+M}else if(y<0){if(M>=0)return A;b=-(y+M)}else return A;var w=l*b;return A>=w||A<=-w?A:v(S,u,R)},function(S,u,R,y){var M=S[0]-y[0],A=u[0]-y[0],b=R[0]-y[0],w=S[1]-y[1],C=u[1]-y[1],U=R[1]-y[1],F=S[2]-y[2],B=u[2]-y[2],O=R[2]-y[2],k=A*U,G=b*C,at=b*w,et=M*U,it=M*C,ht=A*w,Et=F*(k-G)+B*(at-et)+O*(it-ht),Tt=(Math.abs(k)+Math.abs(G))*Math.abs(F)+(Math.abs(at)+Math.abs(et))*Math.abs(B)+(Math.abs(it)+Math.abs(ht))*Math.abs(O),Y=f*Tt;return Et>Y||-Et>Y?Et:T(S,u,R,y)}];function x(c){var S=_[c.length];return S||(S=_[c.length]=m(c.length)),S.apply(void 0,c)}function E(c,S,u,R,y,M,A){return function(w,C,U,F,B){switch(arguments.length){case 0:case 1:return 0;case 2:return R(w,C);case 3:return y(w,C,U);case 4:return M(w,C,U,F);case 5:return A(w,C,U,F,B)}for(var O=new Array(arguments.length),k=0;k<arguments.length;++k)O[k]=arguments[k];return c(O)}}function p(){for(;_.length<=o;)_.push(m(_.length));t.exports=E.apply(void 0,[x].concat(_));for(var c=0;c<=o;++c)t.exports[c]=_[c]}p()}}),ZS=en({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=sa(),n=YS()[3],r=0,s=1,o=2;t.exports=T;function a(_,x,E,p,c){this.a=_,this.b=x,this.idx=E,this.lowerIds=p,this.upperIds=c}function l(_,x,E,p){this.a=_,this.b=x,this.type=E,this.idx=p}function f(_,x){var E=_.a[0]-x.a[0]||_.a[1]-x.a[1]||_.type-x.type;return E||_.type!==r&&(E=n(_.a,_.b,x.b),E)?E:_.idx-x.idx}function h(_,x){return n(_.a,_.b,x)}function g(_,x,E,p,c){for(var S=e.lt(x,p,h),u=e.gt(x,p,h),R=S;R<u;++R){for(var y=x[R],M=y.lowerIds,b=M.length;b>1&&n(E[M[b-2]],E[M[b-1]],p)>0;)_.push([M[b-1],M[b-2],c]),b-=1;M.length=b,M.push(c);for(var A=y.upperIds,b=A.length;b>1&&n(E[A[b-2]],E[A[b-1]],p)<0;)_.push([A[b-2],A[b-1],c]),b-=1;A.length=b,A.push(c)}}function d(_,x){var E;return _.a[0]<x.a[0]?E=n(_.a,_.b,x.a):E=n(x.b,x.a,_.a),E||(x.b[0]<_.b[0]?E=n(_.a,_.b,x.b):E=n(x.b,x.a,_.b),E||_.idx-x.idx)}function m(_,x,E){var p=e.le(_,E,d),c=_[p],S=c.upperIds,u=S[S.length-1];c.upperIds=[u],_.splice(p+1,0,new a(E.a,E.b,E.idx,[u],S))}function v(_,x,E){var p=E.a;E.a=E.b,E.b=p;var c=e.eq(_,E,d),S=_[c],u=_[c-1];u.upperIds=S.upperIds,_.splice(c,1)}function T(_,x){for(var E=_.length,p=x.length,c=[],S=0;S<E;++S)c.push(new l(_[S],null,r,S));for(var S=0;S<p;++S){var u=x[S],R=_[u[0]],y=_[u[1]];R[0]<y[0]?c.push(new l(R,y,o,S),new l(y,R,s,S)):R[0]>y[0]&&c.push(new l(y,R,o,S),new l(R,y,s,S))}c.sort(f);for(var M=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),A=[new a([M,1],[M,0],-1,[],[])],b=[],S=0,w=c.length;S<w;++S){var C=c[S],U=C.type;U===r?g(b,A,_,C.a,C.idx):U===o?m(A,_,C):v(A,_,C)}return b}}}),JS=en({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=sa();t.exports=o;function n(a,l){this.stars=a,this.edges=l}var r=n.prototype;function s(a,l,f){for(var h=1,g=a.length;h<g;h+=2)if(a[h-1]===l&&a[h]===f){a[h-1]=a[g-2],a[h]=a[g-1],a.length=g-2;return}}r.isConstraint=(function(){var a=[0,0];function l(f,h){return f[0]-h[0]||f[1]-h[1]}return function(f,h){return a[0]=Math.min(f,h),a[1]=Math.max(f,h),e.eq(this.edges,a,l)>=0}})(),r.removeTriangle=function(a,l,f){var h=this.stars;s(h[a],l,f),s(h[l],f,a),s(h[f],a,l)},r.addTriangle=function(a,l,f){var h=this.stars;h[a].push(l,f),h[l].push(f,a),h[f].push(a,l)},r.opposite=function(a,l){for(var f=this.stars[l],h=1,g=f.length;h<g;h+=2)if(f[h]===a)return f[h-1];return-1},r.flip=function(a,l){var f=this.opposite(a,l),h=this.opposite(l,a);this.removeTriangle(a,l,f),this.removeTriangle(l,a,h),this.addTriangle(a,h,f),this.addTriangle(l,f,h)},r.edges=function(){for(var a=this.stars,l=[],f=0,h=a.length;f<h;++f)for(var g=a[f],d=0,m=g.length;d<m;d+=2)l.push([g[d],g[d+1]]);return l},r.cells=function(){for(var a=this.stars,l=[],f=0,h=a.length;f<h;++f)for(var g=a[f],d=0,m=g.length;d<m;d+=2){var v=g[d],T=g[d+1];f<Math.min(v,T)&&l.push([f,v,T])}return l};function o(a,l){for(var f=new Array(a),h=0;h<a;++h)f[h]=[];return new n(f,l)}}}),KS=en({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=Jl(),n=wd(),r=Rd(),s=Cd(),o=6;function a(p){var c=p===3?g:p===4?d:p===5?m:v;return c(n,r,e,s)}function l(){return 0}function f(){return 0}function h(){return 0}function g(p,c,S,u){function R(y,M,A){var b=S(y[0],y[0]),w=u(b,M[0]),C=u(b,A[0]),U=S(M[0],M[0]),F=u(U,y[0]),B=u(U,A[0]),O=S(A[0],A[0]),k=u(O,y[0]),G=u(O,M[0]),at=p(c(G,B),c(F,w)),et=c(k,C),it=c(at,et);return it[it.length-1]}return R}function d(p,c,S,u){function R(y,M,A,b){var w=p(S(y[0],y[0]),S(y[1],y[1])),C=u(w,M[0]),U=u(w,A[0]),F=u(w,b[0]),B=p(S(M[0],M[0]),S(M[1],M[1])),O=u(B,y[0]),k=u(B,A[0]),G=u(B,b[0]),at=p(S(A[0],A[0]),S(A[1],A[1])),et=u(at,y[0]),it=u(at,M[0]),ht=u(at,b[0]),Et=p(S(b[0],b[0]),S(b[1],b[1])),Tt=u(Et,y[0]),Y=u(Et,M[0]),nt=u(Et,A[0]),rt=p(p(u(c(nt,ht),M[1]),p(u(c(Y,G),-A[1]),u(c(it,k),b[1]))),p(u(c(Y,G),y[1]),p(u(c(Tt,F),-M[1]),u(c(O,C),b[1])))),ut=p(p(u(c(nt,ht),y[1]),p(u(c(Tt,F),-A[1]),u(c(et,U),b[1]))),p(u(c(it,k),y[1]),p(u(c(et,U),-M[1]),u(c(O,C),A[1])))),ft=c(rt,ut);return ft[ft.length-1]}return R}function m(p,c,S,u){function R(y,M,A,b,w){var C=p(S(y[0],y[0]),p(S(y[1],y[1]),S(y[2],y[2]))),U=u(C,M[0]),F=u(C,A[0]),B=u(C,b[0]),O=u(C,w[0]),k=p(S(M[0],M[0]),p(S(M[1],M[1]),S(M[2],M[2]))),G=u(k,y[0]),at=u(k,A[0]),et=u(k,b[0]),it=u(k,w[0]),ht=p(S(A[0],A[0]),p(S(A[1],A[1]),S(A[2],A[2]))),Et=u(ht,y[0]),Tt=u(ht,M[0]),Y=u(ht,b[0]),nt=u(ht,w[0]),rt=p(S(b[0],b[0]),p(S(b[1],b[1]),S(b[2],b[2]))),ut=u(rt,y[0]),ft=u(rt,M[0]),xt=u(rt,A[0]),Gt=u(rt,w[0]),At=p(S(w[0],w[0]),p(S(w[1],w[1]),S(w[2],w[2]))),J=u(At,y[0]),tt=u(At,M[0]),K=u(At,A[0]),ot=u(At,b[0]),N=p(p(p(u(p(u(c(ot,Gt),A[1]),p(u(c(K,nt),-b[1]),u(c(xt,Y),w[1]))),M[2]),p(u(p(u(c(ot,Gt),M[1]),p(u(c(tt,it),-b[1]),u(c(ft,et),w[1]))),-A[2]),u(p(u(c(K,nt),M[1]),p(u(c(tt,it),-A[1]),u(c(Tt,at),w[1]))),b[2]))),p(u(p(u(c(xt,Y),M[1]),p(u(c(ft,et),-A[1]),u(c(Tt,at),b[1]))),-w[2]),p(u(p(u(c(ot,Gt),M[1]),p(u(c(tt,it),-b[1]),u(c(ft,et),w[1]))),y[2]),u(p(u(c(ot,Gt),y[1]),p(u(c(J,O),-b[1]),u(c(ut,B),w[1]))),-M[2])))),p(p(u(p(u(c(tt,it),y[1]),p(u(c(J,O),-M[1]),u(c(G,U),w[1]))),b[2]),p(u(p(u(c(ft,et),y[1]),p(u(c(ut,B),-M[1]),u(c(G,U),b[1]))),-w[2]),u(p(u(c(xt,Y),M[1]),p(u(c(ft,et),-A[1]),u(c(Tt,at),b[1]))),y[2]))),p(u(p(u(c(xt,Y),y[1]),p(u(c(ut,B),-A[1]),u(c(Et,F),b[1]))),-M[2]),p(u(p(u(c(ft,et),y[1]),p(u(c(ut,B),-M[1]),u(c(G,U),b[1]))),A[2]),u(p(u(c(Tt,at),y[1]),p(u(c(Et,F),-M[1]),u(c(G,U),A[1]))),-b[2]))))),St=p(p(p(u(p(u(c(ot,Gt),A[1]),p(u(c(K,nt),-b[1]),u(c(xt,Y),w[1]))),y[2]),u(p(u(c(ot,Gt),y[1]),p(u(c(J,O),-b[1]),u(c(ut,B),w[1]))),-A[2])),p(u(p(u(c(K,nt),y[1]),p(u(c(J,O),-A[1]),u(c(Et,F),w[1]))),b[2]),u(p(u(c(xt,Y),y[1]),p(u(c(ut,B),-A[1]),u(c(Et,F),b[1]))),-w[2]))),p(p(u(p(u(c(K,nt),M[1]),p(u(c(tt,it),-A[1]),u(c(Tt,at),w[1]))),y[2]),u(p(u(c(K,nt),y[1]),p(u(c(J,O),-A[1]),u(c(Et,F),w[1]))),-M[2])),p(u(p(u(c(tt,it),y[1]),p(u(c(J,O),-M[1]),u(c(G,U),w[1]))),A[2]),u(p(u(c(Tt,at),y[1]),p(u(c(Et,F),-M[1]),u(c(G,U),A[1]))),-w[2])))),ct=c(N,St);return ct[ct.length-1]}return R}function v(p,c,S,u){function R(y,M,A,b,w,C){var U=p(p(S(y[0],y[0]),S(y[1],y[1])),p(S(y[2],y[2]),S(y[3],y[3]))),F=u(U,M[0]),B=u(U,A[0]),O=u(U,b[0]),k=u(U,w[0]),G=u(U,C[0]),at=p(p(S(M[0],M[0]),S(M[1],M[1])),p(S(M[2],M[2]),S(M[3],M[3]))),et=u(at,y[0]),it=u(at,A[0]),ht=u(at,b[0]),Et=u(at,w[0]),Tt=u(at,C[0]),Y=p(p(S(A[0],A[0]),S(A[1],A[1])),p(S(A[2],A[2]),S(A[3],A[3]))),nt=u(Y,y[0]),rt=u(Y,M[0]),ut=u(Y,b[0]),ft=u(Y,w[0]),xt=u(Y,C[0]),Gt=p(p(S(b[0],b[0]),S(b[1],b[1])),p(S(b[2],b[2]),S(b[3],b[3]))),At=u(Gt,y[0]),J=u(Gt,M[0]),tt=u(Gt,A[0]),K=u(Gt,w[0]),ot=u(Gt,C[0]),N=p(p(S(w[0],w[0]),S(w[1],w[1])),p(S(w[2],w[2]),S(w[3],w[3]))),St=u(N,y[0]),ct=u(N,M[0]),Mt=u(N,A[0]),st=u(N,b[0]),D=u(N,C[0]),P=p(p(S(C[0],C[0]),S(C[1],C[1])),p(S(C[2],C[2]),S(C[3],C[3]))),z=u(P,y[0]),W=u(P,M[0]),j=u(P,A[0]),$=u(P,b[0]),pt=u(P,w[0]),mt=p(p(p(u(p(p(u(p(u(c(pt,D),b[1]),p(u(c($,ot),-w[1]),u(c(st,K),C[1]))),A[2]),u(p(u(c(pt,D),A[1]),p(u(c(j,xt),-w[1]),u(c(Mt,ft),C[1]))),-b[2])),p(u(p(u(c($,ot),A[1]),p(u(c(j,xt),-b[1]),u(c(tt,ut),C[1]))),w[2]),u(p(u(c(st,K),A[1]),p(u(c(Mt,ft),-b[1]),u(c(tt,ut),w[1]))),-C[2]))),M[3]),p(u(p(p(u(p(u(c(pt,D),b[1]),p(u(c($,ot),-w[1]),u(c(st,K),C[1]))),M[2]),u(p(u(c(pt,D),M[1]),p(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-b[2])),p(u(p(u(c($,ot),M[1]),p(u(c(W,Tt),-b[1]),u(c(J,ht),C[1]))),w[2]),u(p(u(c(st,K),M[1]),p(u(c(ct,Et),-b[1]),u(c(J,ht),w[1]))),-C[2]))),-A[3]),u(p(p(u(p(u(c(pt,D),A[1]),p(u(c(j,xt),-w[1]),u(c(Mt,ft),C[1]))),M[2]),u(p(u(c(pt,D),M[1]),p(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-A[2])),p(u(p(u(c(j,xt),M[1]),p(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),w[2]),u(p(u(c(Mt,ft),M[1]),p(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),-C[2]))),b[3]))),p(p(u(p(p(u(p(u(c($,ot),A[1]),p(u(c(j,xt),-b[1]),u(c(tt,ut),C[1]))),M[2]),u(p(u(c($,ot),M[1]),p(u(c(W,Tt),-b[1]),u(c(J,ht),C[1]))),-A[2])),p(u(p(u(c(j,xt),M[1]),p(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),b[2]),u(p(u(c(tt,ut),M[1]),p(u(c(J,ht),-A[1]),u(c(rt,it),b[1]))),-C[2]))),-w[3]),u(p(p(u(p(u(c(st,K),A[1]),p(u(c(Mt,ft),-b[1]),u(c(tt,ut),w[1]))),M[2]),u(p(u(c(st,K),M[1]),p(u(c(ct,Et),-b[1]),u(c(J,ht),w[1]))),-A[2])),p(u(p(u(c(Mt,ft),M[1]),p(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),b[2]),u(p(u(c(tt,ut),M[1]),p(u(c(J,ht),-A[1]),u(c(rt,it),b[1]))),-w[2]))),C[3])),p(u(p(p(u(p(u(c(pt,D),b[1]),p(u(c($,ot),-w[1]),u(c(st,K),C[1]))),M[2]),u(p(u(c(pt,D),M[1]),p(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-b[2])),p(u(p(u(c($,ot),M[1]),p(u(c(W,Tt),-b[1]),u(c(J,ht),C[1]))),w[2]),u(p(u(c(st,K),M[1]),p(u(c(ct,Et),-b[1]),u(c(J,ht),w[1]))),-C[2]))),y[3]),u(p(p(u(p(u(c(pt,D),b[1]),p(u(c($,ot),-w[1]),u(c(st,K),C[1]))),y[2]),u(p(u(c(pt,D),y[1]),p(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-b[2])),p(u(p(u(c($,ot),y[1]),p(u(c(z,G),-b[1]),u(c(At,O),C[1]))),w[2]),u(p(u(c(st,K),y[1]),p(u(c(St,k),-b[1]),u(c(At,O),w[1]))),-C[2]))),-M[3])))),p(p(p(u(p(p(u(p(u(c(pt,D),M[1]),p(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),y[2]),u(p(u(c(pt,D),y[1]),p(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-M[2])),p(u(p(u(c(W,Tt),y[1]),p(u(c(z,G),-M[1]),u(c(et,F),C[1]))),w[2]),u(p(u(c(ct,Et),y[1]),p(u(c(St,k),-M[1]),u(c(et,F),w[1]))),-C[2]))),b[3]),u(p(p(u(p(u(c($,ot),M[1]),p(u(c(W,Tt),-b[1]),u(c(J,ht),C[1]))),y[2]),u(p(u(c($,ot),y[1]),p(u(c(z,G),-b[1]),u(c(At,O),C[1]))),-M[2])),p(u(p(u(c(W,Tt),y[1]),p(u(c(z,G),-M[1]),u(c(et,F),C[1]))),b[2]),u(p(u(c(J,ht),y[1]),p(u(c(At,O),-M[1]),u(c(et,F),b[1]))),-C[2]))),-w[3])),p(u(p(p(u(p(u(c(st,K),M[1]),p(u(c(ct,Et),-b[1]),u(c(J,ht),w[1]))),y[2]),u(p(u(c(st,K),y[1]),p(u(c(St,k),-b[1]),u(c(At,O),w[1]))),-M[2])),p(u(p(u(c(ct,Et),y[1]),p(u(c(St,k),-M[1]),u(c(et,F),w[1]))),b[2]),u(p(u(c(J,ht),y[1]),p(u(c(At,O),-M[1]),u(c(et,F),b[1]))),-w[2]))),C[3]),u(p(p(u(p(u(c($,ot),A[1]),p(u(c(j,xt),-b[1]),u(c(tt,ut),C[1]))),M[2]),u(p(u(c($,ot),M[1]),p(u(c(W,Tt),-b[1]),u(c(J,ht),C[1]))),-A[2])),p(u(p(u(c(j,xt),M[1]),p(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),b[2]),u(p(u(c(tt,ut),M[1]),p(u(c(J,ht),-A[1]),u(c(rt,it),b[1]))),-C[2]))),y[3]))),p(p(u(p(p(u(p(u(c($,ot),A[1]),p(u(c(j,xt),-b[1]),u(c(tt,ut),C[1]))),y[2]),u(p(u(c($,ot),y[1]),p(u(c(z,G),-b[1]),u(c(At,O),C[1]))),-A[2])),p(u(p(u(c(j,xt),y[1]),p(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),b[2]),u(p(u(c(tt,ut),y[1]),p(u(c(At,O),-A[1]),u(c(nt,B),b[1]))),-C[2]))),-M[3]),u(p(p(u(p(u(c($,ot),M[1]),p(u(c(W,Tt),-b[1]),u(c(J,ht),C[1]))),y[2]),u(p(u(c($,ot),y[1]),p(u(c(z,G),-b[1]),u(c(At,O),C[1]))),-M[2])),p(u(p(u(c(W,Tt),y[1]),p(u(c(z,G),-M[1]),u(c(et,F),C[1]))),b[2]),u(p(u(c(J,ht),y[1]),p(u(c(At,O),-M[1]),u(c(et,F),b[1]))),-C[2]))),A[3])),p(u(p(p(u(p(u(c(j,xt),M[1]),p(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),y[2]),u(p(u(c(j,xt),y[1]),p(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),-M[2])),p(u(p(u(c(W,Tt),y[1]),p(u(c(z,G),-M[1]),u(c(et,F),C[1]))),A[2]),u(p(u(c(rt,it),y[1]),p(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-C[2]))),-b[3]),u(p(p(u(p(u(c(tt,ut),M[1]),p(u(c(J,ht),-A[1]),u(c(rt,it),b[1]))),y[2]),u(p(u(c(tt,ut),y[1]),p(u(c(At,O),-A[1]),u(c(nt,B),b[1]))),-M[2])),p(u(p(u(c(J,ht),y[1]),p(u(c(At,O),-M[1]),u(c(et,F),b[1]))),A[2]),u(p(u(c(rt,it),y[1]),p(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-b[2]))),C[3]))))),Ot=p(p(p(u(p(p(u(p(u(c(pt,D),b[1]),p(u(c($,ot),-w[1]),u(c(st,K),C[1]))),A[2]),u(p(u(c(pt,D),A[1]),p(u(c(j,xt),-w[1]),u(c(Mt,ft),C[1]))),-b[2])),p(u(p(u(c($,ot),A[1]),p(u(c(j,xt),-b[1]),u(c(tt,ut),C[1]))),w[2]),u(p(u(c(st,K),A[1]),p(u(c(Mt,ft),-b[1]),u(c(tt,ut),w[1]))),-C[2]))),y[3]),p(u(p(p(u(p(u(c(pt,D),b[1]),p(u(c($,ot),-w[1]),u(c(st,K),C[1]))),y[2]),u(p(u(c(pt,D),y[1]),p(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-b[2])),p(u(p(u(c($,ot),y[1]),p(u(c(z,G),-b[1]),u(c(At,O),C[1]))),w[2]),u(p(u(c(st,K),y[1]),p(u(c(St,k),-b[1]),u(c(At,O),w[1]))),-C[2]))),-A[3]),u(p(p(u(p(u(c(pt,D),A[1]),p(u(c(j,xt),-w[1]),u(c(Mt,ft),C[1]))),y[2]),u(p(u(c(pt,D),y[1]),p(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-A[2])),p(u(p(u(c(j,xt),y[1]),p(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),w[2]),u(p(u(c(Mt,ft),y[1]),p(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-C[2]))),b[3]))),p(p(u(p(p(u(p(u(c($,ot),A[1]),p(u(c(j,xt),-b[1]),u(c(tt,ut),C[1]))),y[2]),u(p(u(c($,ot),y[1]),p(u(c(z,G),-b[1]),u(c(At,O),C[1]))),-A[2])),p(u(p(u(c(j,xt),y[1]),p(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),b[2]),u(p(u(c(tt,ut),y[1]),p(u(c(At,O),-A[1]),u(c(nt,B),b[1]))),-C[2]))),-w[3]),u(p(p(u(p(u(c(st,K),A[1]),p(u(c(Mt,ft),-b[1]),u(c(tt,ut),w[1]))),y[2]),u(p(u(c(st,K),y[1]),p(u(c(St,k),-b[1]),u(c(At,O),w[1]))),-A[2])),p(u(p(u(c(Mt,ft),y[1]),p(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),b[2]),u(p(u(c(tt,ut),y[1]),p(u(c(At,O),-A[1]),u(c(nt,B),b[1]))),-w[2]))),C[3])),p(u(p(p(u(p(u(c(pt,D),A[1]),p(u(c(j,xt),-w[1]),u(c(Mt,ft),C[1]))),M[2]),u(p(u(c(pt,D),M[1]),p(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),-A[2])),p(u(p(u(c(j,xt),M[1]),p(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),w[2]),u(p(u(c(Mt,ft),M[1]),p(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),-C[2]))),y[3]),u(p(p(u(p(u(c(pt,D),A[1]),p(u(c(j,xt),-w[1]),u(c(Mt,ft),C[1]))),y[2]),u(p(u(c(pt,D),y[1]),p(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-A[2])),p(u(p(u(c(j,xt),y[1]),p(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),w[2]),u(p(u(c(Mt,ft),y[1]),p(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-C[2]))),-M[3])))),p(p(p(u(p(p(u(p(u(c(pt,D),M[1]),p(u(c(W,Tt),-w[1]),u(c(ct,Et),C[1]))),y[2]),u(p(u(c(pt,D),y[1]),p(u(c(z,G),-w[1]),u(c(St,k),C[1]))),-M[2])),p(u(p(u(c(W,Tt),y[1]),p(u(c(z,G),-M[1]),u(c(et,F),C[1]))),w[2]),u(p(u(c(ct,Et),y[1]),p(u(c(St,k),-M[1]),u(c(et,F),w[1]))),-C[2]))),A[3]),u(p(p(u(p(u(c(j,xt),M[1]),p(u(c(W,Tt),-A[1]),u(c(rt,it),C[1]))),y[2]),u(p(u(c(j,xt),y[1]),p(u(c(z,G),-A[1]),u(c(nt,B),C[1]))),-M[2])),p(u(p(u(c(W,Tt),y[1]),p(u(c(z,G),-M[1]),u(c(et,F),C[1]))),A[2]),u(p(u(c(rt,it),y[1]),p(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-C[2]))),-w[3])),p(u(p(p(u(p(u(c(Mt,ft),M[1]),p(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),y[2]),u(p(u(c(Mt,ft),y[1]),p(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-M[2])),p(u(p(u(c(ct,Et),y[1]),p(u(c(St,k),-M[1]),u(c(et,F),w[1]))),A[2]),u(p(u(c(rt,it),y[1]),p(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-w[2]))),C[3]),u(p(p(u(p(u(c(st,K),A[1]),p(u(c(Mt,ft),-b[1]),u(c(tt,ut),w[1]))),M[2]),u(p(u(c(st,K),M[1]),p(u(c(ct,Et),-b[1]),u(c(J,ht),w[1]))),-A[2])),p(u(p(u(c(Mt,ft),M[1]),p(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),b[2]),u(p(u(c(tt,ut),M[1]),p(u(c(J,ht),-A[1]),u(c(rt,it),b[1]))),-w[2]))),y[3]))),p(p(u(p(p(u(p(u(c(st,K),A[1]),p(u(c(Mt,ft),-b[1]),u(c(tt,ut),w[1]))),y[2]),u(p(u(c(st,K),y[1]),p(u(c(St,k),-b[1]),u(c(At,O),w[1]))),-A[2])),p(u(p(u(c(Mt,ft),y[1]),p(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),b[2]),u(p(u(c(tt,ut),y[1]),p(u(c(At,O),-A[1]),u(c(nt,B),b[1]))),-w[2]))),-M[3]),u(p(p(u(p(u(c(st,K),M[1]),p(u(c(ct,Et),-b[1]),u(c(J,ht),w[1]))),y[2]),u(p(u(c(st,K),y[1]),p(u(c(St,k),-b[1]),u(c(At,O),w[1]))),-M[2])),p(u(p(u(c(ct,Et),y[1]),p(u(c(St,k),-M[1]),u(c(et,F),w[1]))),b[2]),u(p(u(c(J,ht),y[1]),p(u(c(At,O),-M[1]),u(c(et,F),b[1]))),-w[2]))),A[3])),p(u(p(p(u(p(u(c(Mt,ft),M[1]),p(u(c(ct,Et),-A[1]),u(c(rt,it),w[1]))),y[2]),u(p(u(c(Mt,ft),y[1]),p(u(c(St,k),-A[1]),u(c(nt,B),w[1]))),-M[2])),p(u(p(u(c(ct,Et),y[1]),p(u(c(St,k),-M[1]),u(c(et,F),w[1]))),A[2]),u(p(u(c(rt,it),y[1]),p(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-w[2]))),-b[3]),u(p(p(u(p(u(c(tt,ut),M[1]),p(u(c(J,ht),-A[1]),u(c(rt,it),b[1]))),y[2]),u(p(u(c(tt,ut),y[1]),p(u(c(At,O),-A[1]),u(c(nt,B),b[1]))),-M[2])),p(u(p(u(c(J,ht),y[1]),p(u(c(At,O),-M[1]),u(c(et,F),b[1]))),A[2]),u(p(u(c(rt,it),y[1]),p(u(c(nt,B),-M[1]),u(c(et,F),A[1]))),-b[2]))),w[3]))))),Vt=c(mt,Ot);return Vt[Vt.length-1]}return R}var T=[l,f,h];function _(p){var c=T[p.length];return c||(c=T[p.length]=a(p.length)),c.apply(void 0,p)}function x(p,c,S,u,R,y,M,A){function b(w,C,U,F,B,O){switch(arguments.length){case 0:case 1:return 0;case 2:return u(w,C);case 3:return R(w,C,U);case 4:return y(w,C,U,F);case 5:return M(w,C,U,F,B);case 6:return A(w,C,U,F,B,O)}for(var k=new Array(arguments.length),G=0;G<arguments.length;++G)k[G]=arguments[G];return p(k)}return b}function E(){for(;T.length<=o;)T.push(a(T.length));t.exports=x.apply(void 0,[_].concat(T));for(var p=0;p<=o;++p)t.exports[p]=T[p]}E()}}),jS=en({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=KS()[4];sa(),t.exports=r;function n(s,o,a,l,f,h){var g=o.opposite(l,f);if(!(g<0)){if(f<l){var d=l;l=f,f=d,d=h,h=g,g=d}o.isConstraint(l,f)||e(s[l],s[f],s[h],s[g])<0&&a.push(l,f)}}function r(s,o){for(var a=[],l=s.length,f=o.stars,h=0;h<l;++h)for(var g=f[h],d=1;d<g.length;d+=2){var m=g[d];if(!(m<h)&&!o.isConstraint(h,m)){for(var v=g[d-1],T=-1,_=1;_<g.length;_+=2)if(g[_-1]===m){T=g[_];break}T<0||e(s[h],s[m],s[v],s[T])<0&&a.push(h,m)}}for(;a.length>0;){for(var m=a.pop(),h=a.pop(),v=-1,T=-1,g=f[h],x=1;x<g.length;x+=2){var E=g[x-1],p=g[x];E===m?T=p:p===m&&(v=E)}v<0||T<0||e(s[h],s[m],s[v],s[T])>=0||(o.flip(h,m),n(s,o,a,v,h,T),n(s,o,a,h,T,v),n(s,o,a,T,m,v),n(s,o,a,m,v,T))}}}}),QS=en({"node_modules/cdt2d/lib/filter.js"(i,t){var e=sa();t.exports=l;function n(f,h,g,d,m,v,T){this.cells=f,this.neighbor=h,this.flags=d,this.constraint=g,this.active=m,this.next=v,this.boundary=T}var r=n.prototype;function s(f,h){return f[0]-h[0]||f[1]-h[1]||f[2]-h[2]}r.locate=(function(){var f=[0,0,0];return function(h,g,d){var m=h,v=g,T=d;return g<d?g<h&&(m=g,v=d,T=h):d<h&&(m=d,v=h,T=g),m<0?-1:(f[0]=m,f[1]=v,f[2]=T,e.eq(this.cells,f,s))}})();function o(f,h){for(var g=f.cells(),d=g.length,m=0;m<d;++m){var v=g[m],T=v[0],_=v[1],x=v[2];_<x?_<T&&(v[0]=_,v[1]=x,v[2]=T):x<T&&(v[0]=x,v[1]=T,v[2]=_)}g.sort(s);for(var E=new Array(d),m=0;m<E.length;++m)E[m]=0;var p=[],c=[],S=new Array(3*d),u=new Array(3*d),R=null;h&&(R=[]);for(var y=new n(g,S,u,E,p,c,R),m=0;m<d;++m)for(var v=g[m],M=0;M<3;++M){var T=v[M],_=v[(M+1)%3],A=S[3*m+M]=y.locate(_,T,f.opposite(_,T)),b=u[3*m+M]=f.isConstraint(T,_);A<0&&(b?c.push(m):(p.push(m),E[m]=1),h&&R.push([_,T,-1]))}return y}function a(f,h,g){for(var d=0,m=0;m<f.length;++m)h[m]===g&&(f[d++]=f[m]);return f.length=d,f}function l(f,h,g){var d=o(f,g);if(h===0)return g?d.cells.concat(d.boundary):d.cells;for(var m=1,v=d.active,T=d.next,_=d.flags,x=d.cells,E=d.constraint,p=d.neighbor;v.length>0||T.length>0;){for(;v.length>0;){var c=v.pop();if(_[c]!==-m){_[c]=m,x[c];for(var S=0;S<3;++S){var u=p[3*c+S];u>=0&&_[u]===0&&(E[3*c+S]?T.push(u):(v.push(u),_[u]=m))}}}var R=T;T=v,v=R,T.length=0,m=-m}var y=a(x,_,h);return g?y.concat(d.boundary):y}}}),tM=en({"node_modules/cdt2d/cdt2d.js"(i,t){var e=ZS(),n=JS(),r=jS(),s=QS();t.exports=h;function o(g){return[Math.min(g[0],g[1]),Math.max(g[0],g[1])]}function a(g,d){return g[0]-d[0]||g[1]-d[1]}function l(g){return g.map(o).sort(a)}function f(g,d,m){return d in g?g[d]:m}function h(g,d,m){Array.isArray(d)?(m=m||{},d=d||[]):(m=d||{},d=[]);var v=!!f(m,"delaunay",!0),T=!!f(m,"interior",!0),_=!!f(m,"exterior",!0),x=!!f(m,"infinity",!1);if(!T&&!_||g.length===0)return[];var E=e(g,d);if(v||T!==_||x){for(var p=n(g.length,l(d)),c=0;c<E.length;++c){var S=E[c];p.addTriangle(S[0],S[1],S[2])}return v&&r(g,p),_?T?x?s(p,0,x):p.cells():s(p,1,x):s(p,-1)}else return E}}});const eM=tM();class Gi{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Kh=1e-16,nM=1e-16,Oi=new L,jh=new L,Qh=new Gi(()=>({param:0,index:0})),iM=new Gi(()=>new L);function rM(i,t,e,n){Qh.clear(),t.length=0,e.length=0;for(let f=0,h=i.length;f<h;f++){const g=i[f];l(g.start),l(g.end)}for(let f=0,h=i.length;f<h;f++){const g=i[f];for(let d=f+1;d<h;d++){const m=i[d];g.distanceSqToLine3(m,Oi,jh)<Kh*n&&l(jh)}}const r=[];for(let f=0,h=i.length;f<h;f++){r.length=0;const g=i[f];for(let d=0,m=t.length;d<m;d++){const v=t[d],T=g.closestPointToPointParameter(v,!0);if(g.at(T,Oi),v.distanceToSquared(Oi)<Kh*n){const _=Qh.getInstance();_.param=T,_.index=d,r.push(_)}}r.sort(a);for(let d=0,m=r.length-1;d<m;d++){const v=r[d].index,T=r[d+1].index;v!==T&&e.push([v,T])}}const s=new Set;let o=0;for(let f=0,h=e.length;f<h;f++){const g=e[f],d=Math.min(g[0],g[1]),m=Math.max(g[0],g[1]),v=d+","+m;s.has(v)||(s.add(v),e[o++]=g)}e.length=o;function a(f,h){return f.param-h.param}function l(f){for(let h=0;h<t.length;h++){const g=t[h];if(f===g||f.distanceToSquared(g)<nM*n)return h}return t.push(iM.getInstance().copy(f)),t.length-1}}class tf{constructor(){this.trianglePool=new Gi(()=>new Ye),this.linePool=new Gi(()=>new we),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new L,this.projOrigin=new L,this.projU=new L,this.projV=new L,this.baseTri=new Ye,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:l,projOrigin:f,constrainedEdges:h,linePool:g,baseIndices:d}=this;t.getNormal(s),o.copy(t),o.update(),d[0]=e,d[1]=n,d[2]=r,h.length=0;const m=g.getInstance();m.start.copy(o.a),m.end.copy(o.b);const v=g.getInstance();v.start.copy(o.b),v.end.copy(o.c);const T=g.getInstance();T.start.copy(o.c),T.end.copy(o.a),h.push(m,v,T),f.copy(o.a),a.subVectors(o.b,o.a).normalize(),l.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Oi.subVectors(t,n),e.set(Oi.dot(r),Oi.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:l}=this;t.length=0,e.clear();const f=[];for(let x=0,E=a.length;x<E;x++){const p=a[x],c=s.getInstance();this._to2D(p.start,c.start),this._to2D(p.end,c.end),f.push(c)}let h=0;for(let x=0;x<3;x++){const E=this._to2D(o.points[x],Oi);h=Math.max(h,Math.abs(E.x),Math.abs(E.y))}const g=[],d=[];rM(f,g,d,h);const m=[];for(let x=0,E=g.length;x<E;x++){const p=g[x];m.push([p.x,p.y])}const v=eM(m,d,{exterior:!1}),T=new Map;for(let x=0,E=d.length;x<E;x++){const p=d[x];T.set(`${p[0]}_${p[1]}`,-1),T.set(`${p[1]}_${p[0]}`,-1)}const _=`${l[0]}_${l[1]}_${l[2]}_`;for(let x=0,E=v.length;x<E;x++){const p=v[x],[c,S,u]=p,R=e.getInstance();this._from2D(m[c][0],m[c][1],R.a),this._from2D(m[S][0],m[S][1],R.b),this._from2D(m[u][0],m[u][1],R.c),t.push(R);const y=[];n.push(y);const M=[];r.push(M);for(let A=0;A<3;A++){const b=p[A];M.push(b<3?l[b]:_+b);const w=p[(A+1)%3],C=`${b}_${w}`;if(T.has(C)){const U=T.get(C);U!==-1&&(y.push(U),n[U].push(x))}else{const U=`${w}_${b}`;T.set(U,x)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const sM=1e-14,oc=new L,ef=new L,nf=new L;function hi(i,t=sM){oc.subVectors(i.b,i.a),ef.subVectors(i.c,i.a),nf.subVectors(i.b,i.c);const e=oc.angleTo(ef),n=oc.angleTo(nf),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const ac=1e-10,ns=1e-10,Vn=new we,ge=new we,Hn=new L,rf=new L,sf=new L,Eo=new gn,cc=new Ye;class of{constructor(){this.trianglePool=new Gi(()=>new ce),this.triangles=[],this.normal=new L}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Hn).dot(r))>ac)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=n.getInstance();l.copy(a),e.push(l)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],l=r[o];t.getNormal(rf).normalize(),Hn.subVectors(l,a).normalize(),sf.crossVectors(rf,Hn),Eo.setFromNormalAndCoplanarPoint(sf,a),this.splitByPlane(Eo,t)}}else t.getPlane(Eo),this.splitByPlane(Eo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;cc.copy(e),cc.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!cc.intersectsTriangle(a,Vn,!0))continue;const{a:l,b:f,c:h}=a;let g=0,d=-1,m=!1,v=[],T=[];const _=[l,f,h];for(let x=0;x<3;x++){const E=(x+1)%3;Vn.start.copy(_[x]),Vn.end.copy(_[E]);const p=t.distanceToPoint(Vn.start),c=t.distanceToPoint(Vn.end);if(Math.abs(p)<ns&&Math.abs(c)<ns){m=!0;break}if(p>0?v.push(x):T.push(x),Math.abs(p)<ns)continue;let S=!!t.intersectLine(Vn,Hn);!S&&Math.abs(c)<ns&&(Hn.copy(Vn.end),S=!0),S&&!(Hn.distanceTo(Vn.start)<ac)&&(Hn.distanceTo(Vn.end)<ac&&(d=x),g===0?ge.start.copy(Hn):ge.end.copy(Hn),g++)}if(!m&&g===2&&ge.distance()>ns)if(d!==-1){d=(d+1)%3;let x=0;x===d&&(x=(x+1)%3);let E=x+1;E===d&&(E=(E+1)%3);const p=r.getInstance();p.a.copy(_[E]),p.b.copy(ge.end),p.c.copy(ge.start),hi(p)||n.push(p),a.a.copy(_[x]),a.b.copy(ge.start),a.c.copy(ge.end),hi(a)&&(n.splice(s,1),s--,o--)}else{const x=v.length>=2?T[0]:v[0];if(x===0){let u=ge.start;ge.start=ge.end,ge.end=u}const E=(x+1)%3,p=(x+2)%3,c=r.getInstance(),S=r.getInstance();_[E].distanceToSquared(ge.start)<_[p].distanceToSquared(ge.end)?(c.a.copy(_[E]),c.b.copy(ge.start),c.c.copy(ge.end),S.a.copy(_[E]),S.b.copy(_[p]),S.c.copy(ge.start)):(c.a.copy(_[p]),c.b.copy(ge.start),c.c.copy(ge.end),S.a.copy(_[E]),S.b.copy(_[p]),S.c.copy(ge.end)),a.a.copy(_[x]),a.b.copy(ge.end),a.c.copy(ge.start),hi(c)||n.push(c),hi(S)||n.push(S),hi(a)&&(n.splice(s,1),s--,o--)}else g===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class af{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const Pd=0,Id=1,oM=2,aM=3,cM=4,Dd=5,Ld=6,lc=1e-10,lM=1e-15,uM=1e-10,hM=1e-10,cf=new we,_r=new we,lf=new L,uf=new L,hf=new L,uc=new gn,Tr=new L,Jo=new L;function fM(i,t){i.getNormal(Tr),t.getNormal(Jo);const e=Tr.dot(Jo);if(Math.abs(1-Math.abs(e))>=uM)return!1;const n=Tr.dot(i.a),r=Tr.dot(t.a);return Math.abs(n-r)<hM}function ff(i,t,e,n){let r=0,s=1;i.delta(lf);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const l=o[a],f=o[(a+1)%3];uf.subVectors(f,l),hf.crossVectors(e,uf),uc.setFromNormalAndCoplanarPoint(hf,l);const h=uc.distanceToPoint(i.start),g=uc.normal.dot(lf);if(Math.abs(g)<lM){if(h<-lc)return null;continue}const d=-h/g;if(g>0?r=Math.max(r,d):s=Math.min(s,d),r>s+lc)return null}return s-r<lc?null:(i.at(r,n.start),i.at(s,n.end),n)}function df(i,t,e){let n=0;i.getNormal(Tr),t.getNormal(Jo);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){_r.start.copy(r[o]),_r.end.copy(r[(o+1)%3]);const a=ff(_r,i,Tr,cf);a!==null&&(n>=e.length&&e.push(new we),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){_r.start.copy(s[o]),_r.end.copy(s[(o+1)%3]);const a=ff(_r,t,Jo,cf);a!==null&&(n>=e.length&&e.push(new we),e[n].copy(a),n++)}return n}const vr=new Rs,pf=new Jt,bo=new we,hc=[],To=new Gi(()=>new we),Sr=-1,Mr=1,zo=-2,Vo=2,ps=0,Ci=1,Kl=2;let Ho=null;function gf(i){Ho=i}function Ud(i,t,e=null){i.getMidpoint(vr.origin),i.getNormal(vr.direction),e&&(vr.origin.applyMatrix4(e),vr.direction.transformDirection(e));const n=t.raycastFirst(vr,_n);return!!(n&&vr.direction.dot(n.face.normal)>0)?Sr:Mr}function dM(i,t){const e=new af,n=new af;return To.clear(),pf.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,pf,{intersectsTriangles(r,s,o,a){if(!hi(r)&&!hi(s)){const f=(fM(r,s)?df(r,s,hc):0)>2;if(f||r.intersectsTriangle(s,bo,!0)){const g=i.geometry.boundsTree.resolveTriangleIndex(o),d=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(g,d,f),n.add(d,g,f),f){const m=df(r,s,hc);for(let v=0;v<m;v++){const T=To.getInstance().copy(hc[v]);e.addIntersectionEdge(g,T),n.addIntersectionEdge(d,T)}}else{const m=To.getInstance().copy(bo),v=To.getInstance().copy(bo);e.addIntersectionEdge(g,m),n.addIntersectionEdge(d,v)}Ho&&(Ho.addEdge(bo),Ho.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Nd(i,t,e=!1){switch(i){case Pd:if(t===Mr||t===Vo&&!e)return Ci;break;case Id:if(e){if(t===Sr)return ps}else if(t===Mr||t===zo)return Ci;break;case oM:if(e){if(t===Mr||t===zo)return Ci}else if(t===Sr)return ps;break;case cM:if(t===Sr)return ps;if(t===Mr)return Ci;break;case aM:if(t===Sr||t===Vo&&!e)return Ci;break;case Dd:if(!e&&(t===Mr||t===zo))return Ci;break;case Ld:if(!e&&(t===Sr||t===Vo))return Ci;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Kl}class pM{constructor(t){this.triangle=new ce().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ce().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class mf{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new pM(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const l=n[a].intersects;for(const f in l)r.has(f)||(r.add(f),s.push(l[f]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class gM{constructor(){this.enabled=!1,this.triangleIntersectsA=new mf,this.triangleIntersectsB=new mf,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),gf(this))}complete(){this.enabled&&gf(null)}}const je=new Jt,Ri=new Jt,$e=new Jt,ci=new $t,fn=new ce,Pi=new ce,dn=new ce,oi=new ce,Bi=[],En=[],Ao=new Set,_f=new L,vf=new L,xf=new Gi(()=>new ce),yf=new L,wo=[];function mM(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=dM(i,t),f=[];let h=null,g;return g=o?0:-1,Mf(i,t,a,e,!1,r,g),Sf(i,t,a,e,!1,n,r,g),e.findIndex(m=>m!==Ld&&m!==Dd)!==-1&&(r.forEach(m=>m.clearIndexMap()),g=o?i.geometry.groups.length||1:-1,Mf(t,i,l,e,!0,r,g),Sf(t,i,l,e,!0,n,r,g)),r.forEach(m=>m.clearIndexMap()),Bi.length=0,{groups:f,materials:h}}function Sf(i,t,e,n,r,s,o,a=0){je.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Ri.copy(je).invert(),r?$e.copy(je):$e.identity();const l=$e.determinant()<0;ci.getNormalMatrix($e).multiplyScalar(l?-1:1);const f=i.geometry.groupIndices,h=i.geometry.index,g=i.geometry.attributes.position,d=t.geometry.boundsTree,m=t.geometry.index,v=t.geometry.attributes.position,T=e.ids;for(let _=0,x=T.length;_<x;_++){const E=T[_],p=a===-1?0:f[E]+a,c=3*E;let S=c+0,u=c+1,R=c+2;h&&(S=h.getX(S),u=h.getX(u),R=h.getX(R)),fn.a.fromBufferAttribute(g,S),fn.b.fromBufferAttribute(g,u),fn.c.fromBufferAttribute(g,R),r&&(fn.a.applyMatrix4(je),fn.b.applyMatrix4(je),fn.c.applyMatrix4(je)),s.reset(),s.initialize(fn,S,u,R),wo.length=0,xf.clear(),fn.getNormal(vf);const y=e.coplanarSet.get(E);if(y)for(const w of y){const C=3*w;let U=C+0,F=C+1,B=C+2;m&&(U=m.getX(U),F=m.getX(F),B=m.getX(B));const O=xf.getInstance();O.a.fromBufferAttribute(v,U),O.b.fromBufferAttribute(v,F),O.c.fromBufferAttribute(v,B),r||(O.a.applyMatrix4(Ri),O.b.applyMatrix4(Ri),O.c.applyMatrix4(Ri)),wo.push(O)}if(s.addConstraintEdge){const w=e.getIntersectionEdges(E);if(w)for(const C of w)s.addConstraintEdge(C);s.triangulate()}else{const C=e.intersectionSet.get(E);for(let U=0,F=C.length;U<F;U++){const B=C[U],O=y&&y.has(B),k=3*B;let G=k+0,at=k+1,et=k+2;m&&(G=m.getX(G),at=m.getX(at),et=m.getX(et)),Pi.a.fromBufferAttribute(v,G),Pi.b.fromBufferAttribute(v,at),Pi.c.fromBufferAttribute(v,et),r||(Pi.a.applyMatrix4(Ri),Pi.b.applyMatrix4(Ri),Pi.c.applyMatrix4(Ri)),s.splitByTriangle(Pi,O)}}const{triangles:M,triangleIndices:A=[],triangleConnectivity:b=[]}=s;for(let w=0,C=o.length;w<C;w++)o[w].initInterpolatedAttributeData(i.geometry,$e,ci,S,u,R);Ao.clear();for(let w=0,C=M.length;w<C;w++){if(Ao.has(w))continue;const U=M[w],F=r?null:je;let B=null;U.getMidpoint(_f);for(let O=0,k=wo.length;O<k;O++){const G=wo[O];if(G.containsPoint(_f)){G.getNormal(yf),B=vf.dot(yf)>0?Vo:zo;break}}B===null&&(B=Ud(U,d,F)),Bi.length=0,En.length=0;for(let O=0,k=n.length;O<k;O++){const G=Nd(n[O],B,r);G!==Kl&&(Bi.push(G),En.push(o[O]))}if(En.length!==0){const O=[w];for(;O.length>0;){const k=O.pop();if(Ao.has(k))continue;Ao.add(k);const G=A[k];let at=null,et=null,it=null;G&&(at=G[0],et=G[1],it=G[2]);const ht=M[k];fn.getBarycoord(ht.a,oi.a),fn.getBarycoord(ht.b,oi.b),fn.getBarycoord(ht.c,oi.c);for(let Et=0,Tt=En.length;Et<Tt;Et++){const Y=En[Et],rt=Bi[Et]===ps,ut=l!==rt;Y.appendInterpolatedAttributeData(p,oi.a,at,ut),ut?(Y.appendInterpolatedAttributeData(p,oi.c,it,ut),Y.appendInterpolatedAttributeData(p,oi.b,et,ut)):(Y.appendInterpolatedAttributeData(p,oi.b,et,ut),Y.appendInterpolatedAttributeData(p,oi.c,it,ut))}}}}}return T.length}function Mf(i,t,e,n,r,s,o=0){je.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?$e.copy(je):$e.identity();const a=$e.determinant()<0;ci.getNormalMatrix($e).multiplyScalar(a?-1:1);const l=t.geometry.boundsTree,f=i.geometry.groupIndices,h=i.geometry.index,d=i.geometry.attributes.position,m=[],v=i.geometry.halfEdges,T=new Set(e.ids),_=Zl(i.geometry);for(let x=0;x<_&&T.size!==_;x++){if(T.has(x))continue;T.add(x),m.push(x);const E=3*x;let p=E+0,c=E+1,S=E+2;h&&(p=h.getX(p),c=h.getX(c),S=h.getX(S)),dn.a.fromBufferAttribute(d,p),dn.b.fromBufferAttribute(d,c),dn.c.fromBufferAttribute(d,S),r&&(dn.a.applyMatrix4(je),dn.b.applyMatrix4(je),dn.c.applyMatrix4(je));const u=Ud(dn,l,r?null:je);Bi.length=0,En.length=0;for(let R=0,y=n.length;R<y;R++){const M=Nd(n[R],u,r);M!==Kl&&(Bi.push(M),En.push(s[R]))}for(;m.length>0;){const R=m.pop();for(let y=0;y<3;y++){const M=v.getSiblingTriangleIndex(R,y);M!==-1&&!T.has(M)&&(m.push(M),T.add(M))}if(En.length!==0){const y=3*R;let M=y+0,A=y+1,b=y+2;h&&(M=h.getX(M),A=h.getX(A),b=h.getX(b));const w=o===-1?0:f[R]+o;if(dn.a.fromBufferAttribute(d,M),dn.b.fromBufferAttribute(d,A),dn.c.fromBufferAttribute(d,b),!hi(dn))for(let C=0,U=En.length;C<U;C++){const F=En[C],k=Bi[C]===ps!==a;F.appendIndexFromGeometry(i.geometry,$e,ci,w,M,k),k?(F.appendIndexFromGeometry(i.geometry,$e,ci,w,b,k),F.appendIndexFromGeometry(i.geometry,$e,ci,w,A,k)):(F.appendIndexFromGeometry(i.geometry,$e,ci,w,A,k),F.appendIndexFromGeometry(i.geometry,$e,ci,w,b,k))}}}}}function _M(i){return i=~~i,i+4-i%4}class vM{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Ad()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(_M(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const Xe=new L,fc=new L,dc=new L,pc=new L,Co=new oe,xM=new oe,yM=new oe,SM=new oe;function MM(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Ef(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class gc extends vM{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class EM{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=r[a],f=l.array.constructor;n[a]||(n[a]=new gc(f)),n[a].setType(f),n[a].itemSize=l.itemSize,n[a].normalized=l.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:l}=this,{attributes:f}=t;for(const h in a){const g=f[h];if(!g)throw new Error(`CSG Operations: Attribute ${h} not available on geometry.`);let d,m,v;if(h==="position"?(d=fc.fromBufferAttribute(g,r).applyMatrix4(e),m=dc.fromBufferAttribute(g,s).applyMatrix4(e),v=pc.fromBufferAttribute(g,o).applyMatrix4(e)):h==="normal"?(d=fc.fromBufferAttribute(g,r).applyNormalMatrix(n),m=dc.fromBufferAttribute(g,s).applyNormalMatrix(n),v=pc.fromBufferAttribute(g,o).applyNormalMatrix(n)):h==="tangent"?(d=fc.fromBufferAttribute(g,r).transformDirection(e),m=dc.fromBufferAttribute(g,s).transformDirection(e),v=pc.fromBufferAttribute(g,o).transformDirection(e)):(d=xM.fromBufferAttribute(g,r),m=yM.fromBufferAttribute(g,s),v=SM.fromBufferAttribute(g,o)),!l[h])l[h]=[d.clone(),m.clone(),v.clone()];else{const T=l[h];T[0].copy(d),T[1].copy(m),T[2].copy(v)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:l,invertedIndexMap:f}=this;for(;s.length<=t;)s.push(new gc(Uint32Array));const h=r?f:l,g=s[t];if(n!==null&&h.has(n))g.push(h.get(n));else{h.set(n,o.position.count),g.push(o.position.count);for(const d in a){const m=o[d],v=d==="normal"||d==="tangent",T=r&&v,_=m.itemSize,[x,E,p]=a[d];MM(x,E,p,e,Co,v,T),Ef(Co,_,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:l,forwardIndexMap:f,invertedIndexMap:h}=this;for(;a.length<=r;)a.push(new gc(Uint32Array));const g=o?h:f,d=a[r];if(s!==null&&g.has(s))d.push(g.get(s));else{g.set(s,l.position.count),d.push(l.position.count);const{attributes:m}=t;for(const v in l){const T=l[v],_=m[v];if(!_)throw new Error(`CSG Operations: Attribute ${v} not available on geometry.`);const x=_.itemSize;v==="position"?(Xe.fromBufferAttribute(_,s).applyMatrix4(e),T.push(Xe.x,Xe.y,Xe.z)):v==="normal"?(Xe.fromBufferAttribute(_,s).applyNormalMatrix(n),o&&Xe.multiplyScalar(-1),T.push(Xe.x,Xe.y,Xe.z)):v==="tangent"?(Xe.fromBufferAttribute(_,s).transformDirection(e),o&&Xe.multiplyScalar(-1),T.push(Xe.x,Xe.y,Xe.z)):(Co.fromBufferAttribute(_,s),Ef(Co,x,T))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const h in s){const g=s[h],{type:d,itemSize:m,normalized:v,length:T,count:_}=g,x=g.array.buffer;let E=o[h];(!E||E.count<_||E.array.type!==d)&&(E=new Ge(new d(T),m,v),t.setAttribute(h,E),n=!0),E.array.set(new d(x,0,T),0),E.needsUpdate=!0}const l=r.reduce((h,g)=>g.count+h,0);(!t.index||a.count<l||a.array.type!==Uint32Array)&&(t.setIndex(new Ge(new Uint32Array(l),1)),n=!0),t.clearGroups();let f=0;for(let h=0,g=Math.min(e.length,r.length);h<g;h++){const{index:d,materialIndex:m}=e[h],{count:v}=r[d],T=r[d].array.buffer;v!==0&&(t.index.array.set(new Uint32Array(T,0,v),f),t.addGroup(f,v,m),f+=v)}t.setDrawRange(0,f),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function bM(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function TM(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function AM(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function wM(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function bf(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class CM{get useCDTClipping(){return this.triangleSplitter instanceof tf}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new tf:new of)}constructor(){this.triangleSplitter=new of,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new gM}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new ds){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:l,useGroups:f,consolidateGroups:h,removeUnusedMaterials:g,debug:d}=this;for(;a.length<r.length;)a.push(new EM);r.forEach((p,c)=>{a[c].initFromGeometry(t.geometry,l),bM(p.geometry,l)}),d.init(),mM(t,e,n,o,a,{useGroups:f}),d.complete();const m=this.getGroupRanges(t.geometry),v=bf(m,t.material),T=this.getGroupRanges(e.geometry),_=bf(T,e.material);T.forEach(p=>p.materialIndex+=v.length);const x=[...v,..._];let E=[...m,...T].map((p,c)=>({...p,index:c}));return f?f&&h&&(E=TM(E,x),E.sort((p,c)=>p.materialIndex-c.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((p,c)=>{const S=p.geometry;a[c].buildGeometry(S,E),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),f?(p.material=x,h&&wM(S.groups),g&&(p.material=AM(S.groups,x))):p.material=x[0]}),s?r:r[0]}evaluateHierarchy(t,e=new ds){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let l=0,f=a.length;l<f;l++){const h=a[l];h.isOperationGroup?n(h,o):o(h)}},r=s=>{const o=s.children;let a=!1;for(let f=0,h=o.length;f<h;f++){const g=o[f];a=r(g)||a}const l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let f;return n(s,h=>{f?f=this.evaluate(f,h,h.operation):f=this.evaluate(s,h,h.operation)}),s._cachedGeometry=f.geometry,s._cachedMaterials=f.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}class RM{constructor(){this.animations=new Map,this.speed=.75}animate(t,e){const{color:n,opacity:r,position:s,rotation:o}=e,a=this.animations.get(t.uuid);this.animations.set(t.uuid,{active:!0,object:t,color:n??a?.color,opacity:r??a?.opacity,position:s??a?.position,rotation:o??a?.rotation})}update(t){const e=Math.min(this.speed*t/100,1);this.animations.forEach(n=>{const{active:r,object:s,color:o,opacity:a,position:l,rotation:f}=n;if(!r)return;let h=!1;const g=s.material;if(o&&g){const d=g.color.clone().lerp(new jt(o),e);g.color.equals(d)||(h=!0,g.color.copy(d))}if(a!==void 0&&g){const d=pg.lerp(g.opacity,a,e);Math.abs(g.opacity-d)>.01?(h=!0,g.opacity=d):g.opacity=a}if(l&&(s.position.distanceTo(l)>.01?(h=!0,s.position.lerp(l,e)):s.position.distanceTo(l)<=.01&&s.position.copy(l)),f){const d=new pi().setFromEuler(s.rotation),m=new pi().setFromEuler(f);d.angleTo(m)>.01&&(h=!0,s.rotation.setFromQuaternion(d.slerp(m,e)))}n.active=h})}isAnimationActive(t){const e=this.animations.get(t.uuid);return e?e.active:!1}clearAnimations(){this.animations.clear()}}class PM{constructor(t,e,n){this.shapeColor=11022898,this.selectedShapeColor=16562691,this.animationFrameId=-1,this.frameRate=60,this.lastFrameTimestamp=0,this.shapeYOffset=55,this.animator=new RM,this.holePosMap=new Map,this.shapeMap=new Map,this.selectionXZOffset={x:0,z:0},this.getRaycastIntersections=(h,g)=>(this.raycaster.setFromCamera(new gt(h,g),this.camera),this.raycaster.intersectObjects(this.scene.children,!0).filter(d=>!this.shapeMap.get(d.object.name)?.solved)),this.animate=(h=0)=>{const g=h-this.lastFrameTimestamp;if(g<1e3/this.frameRate){this.animationFrameId=requestAnimationFrame(this.animate);return}this.lastFrameTimestamp=h,this.animator.update(g);for(const d of this.shapeMap.values())d.solved&&!this.animator.isAnimationActive(d.mesh)&&(d.mesh.visible=!1);this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate)},this.onThemeChange=()=>{const h=getComputedStyle(this.canvas).backgroundColor;this.renderer.setClearColor(new jt(h))},this.onResize=()=>{const h=this.canvas.clientWidth,g=this.canvas.clientHeight;this.camera.left=h/-2,this.camera.right=h/2,this.camera.top=g/2,this.camera.bottom=g/-2,this.camera.updateProjectionMatrix(),this.renderer.setSize(h,g,!1)},this.onReset=()=>{this.selectedShape=void 0,this.selectedHole=void 0,this.animator.animate(this.camera,{position:this.cameraInitPos}),this.initShapes()},this.initShapes=()=>{const h=Th(Cy);for(let c=0;c<Yr.length;c++){const S=Yr[c],u=this.shapeMap.get(S.type);if(u)u.solved=!1,u.mesh.visible=!0,u.initPos.copy(h[c]),this.animator.animate(u.mesh,{opacity:1,color:this.shapeColor,position:u.initPos,rotation:u.initRot});else{const R=new Xr({color:this.shapeColor,transparent:!0}),y=new tn(S.geometry,R);y.position.copy(h[c]),y.name=S.type,y.rotation.copy(S.rotation),this.shapeMap.set(S.type,{mesh:y,solved:!1,initPos:y.position.clone(),initRot:y.rotation.clone()}),this.scene.add(y)}}if(this.holeBox)return;const g=Th(Yr.filter(c=>!!c.hole)),d=this.canvas.clientWidth-25,m=new ds(new qn(d,80,80).translate(0,-15,0),new Xr({color:15658734})),v=Ii-1.25*Fo;m.position.set(0,0,v),m.updateMatrixWorld();const T=new CM,_=.7;let x=new ds(m.geometry.clone().scale(_,_,_),new Xr({color:3355443}));x.position.copy(m.position),x.updateMatrixWorld();const E=1.1,p=15;for(let c=0;c<g.length;c++){const S=g[c];if(!S.hole)continue;const u=g[c].geometry,R=new ds(u.clone().scale(E,E,E),new Xr({color:3355443})),y=(d-100)*(c/(g.length-1)-.5);R.position.set(y,p,v),this.holePosMap.set(S.hole.type,R.position),S.hole.rotation&&R.rotation.copy(S.hole.rotation),R.updateMatrixWorld(),x=T.evaluate(x,R,Pd)}this.holeBox=T.evaluate(m,x,Id),this.holeBox.name="holeBox",this.scene.add(this.holeBox)},this.setSelectedShape=(h,g,d)=>{const m=this.shapeMap.get(h);m&&(this.selectedShape=h,this.animator.animate(m.mesh,{position:m.initPos.clone().setY(this.shapeYOffset),color:this.selectedShapeColor}),this.selectionXZOffset={x:g,z:d},this.animator.animate(this.camera,{position:this.camera.position.clone().setY(this.cameraInitPos.y+this.shapeYOffset)}),this.animator.animate(this.basePlane,{position:new L(0,this.shapeYOffset,0)}))},this.setSelectedShapeXZ=(h,g)=>{if(!this.selectedShape)return;const d=this.shapeMap.get(this.selectedShape);if(d)if(!g)this.selectedHole=void 0,this.animator.animate(d.mesh,{position:new L(h.x+this.selectionXZOffset.x,this.shapeYOffset,h.z+this.selectionXZOffset.z),rotation:d.initRot});else{const m=Yr.find(E=>E.type===this.selectedShape);let v;for(const E of this.holePosMap){const p=E[1].distanceToSquared(h);(!v||p<v[1].distanceToSquared(h))&&(v=E)}if(!v||!m)return;const[T,_]=v;this.selectedHole=T;const x=m.holeAlignment?.find(E=>E.holeType!=="any"&&E.holeType.includes(T))??m.holeAlignment?.find(E=>E.holeType==="any");this.animator.animate(d.mesh,{position:new L(_.x+(x?.offset?.x??0),this.shapeYOffset+(x?.offset?.y??0),_.z+(x?.offset?.z??0)),rotation:x?.rotation??new ue})}},this.clearSelectedShape=()=>{if(this.animator.animate(this.camera,{position:this.cameraInitPos}),this.animator.animate(this.basePlane,{position:new L}),!this.selectedShape)return;const h=this.shapeMap.get(this.selectedShape);if(!h){this.selectedShape=void 0,this.selectedHole=void 0;return}const g=Yr.find(m=>m.type===this.selectedShape),d=this.selectedHole&&g?.compatibleHoles.includes(this.selectedHole)||!1;console.log(`shape ${this.selectedShape} is ${d?"solved":"not solved"} (hole: ${this.selectedHole})`),d?(this.animator.animate(h.mesh,{opacity:0,color:this.shapeColor,position:this.holePosMap.get(this.selectedHole).clone().setY(-35)}),h.solved=!0):this.animator.animate(h.mesh,{color:this.shapeColor,position:h.initPos,rotation:h.initRot}),this.selectedHole=void 0,this.selectedShape=void 0},this.dispose=()=>{this.animationFrameId!==-1&&cancelAnimationFrame(this.animationFrameId),this.scene?.traverse(h=>{h instanceof tn&&(h.geometry.dispose(),h.material.dispose())}),this.renderer?.dispose(),this.animator.clearAnimations()},this.canvas=t,this.shapeColor=e,this.selectedShapeColor=n;const r=this.canvas.clientWidth,s=this.canvas.clientHeight;this.camera=new ta(r/-2,r/2,s/2,s/-2,.1,1e3),this.cameraInitPos=new L(0,400,500),this.camera.position.copy(this.cameraInitPos),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.renderer=new Ay({antialias:!0,canvas:this.canvas}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(r,s,!1);const o=getComputedStyle(this.canvas).backgroundColor;this.renderer.setClearColor(new jt(o)),this.scene=new Cg,this.raycaster=new Pm;const a=new wm(16777215,2);this.scene.add(a);const l=new Ku(16777215,3);l.position.set(-100,100,50),this.scene.add(l);const f=new Ku(16777215,2);f.position.set(0,100,0),this.scene.add(f),this.basePlane=new tn(new Br(r,s*2),new Xr),this.basePlane.visible=!1,this.basePlane.name="basePlane",this.basePlane.rotation.x=-Math.PI/2,this.scene.add(this.basePlane),this.initShapes(),this.animate()}get isShapeSelected(){return!!this.selectedShape}get isSolved(){return[...this.shapeMap.values()].reduce((t,e)=>t&&e.solved,!0)}}class IM{constructor(t,e){this.enabled=!0,this.dispose=()=>{this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp)},this.onPointerDown=n=>{const r=this.canvas.getBoundingClientRect(),s=n.clientX-r.left,o=n.clientY-r.top,a=this.sceneManager.getRaycastIntersections(s/r.width*2-1,-(o/r.height)*2+1);this.sceneManager.clearSelectedShape();const l=a.find(f=>f.object.name==="basePlane")?.point;if(l)for(const f of a)f.object.name!=="basePlane"&&(this.sceneManager.setSelectedShape(f.object.name,f.object.position.x-l.x,f.object.position.z-l.z),document.documentElement.style.cursor="move")},this.onPointerMove=n=>{if(!this.enabled)return;const r=this.canvas.getBoundingClientRect(),s=n.clientX-r.left,o=n.clientY-r.top,a=this.sceneManager.getRaycastIntersections(s/r.width*2-1,-(o/r.height)*2+1);if(!this.sceneManager.isShapeSelected){a.reduce((f,h)=>f||h.object.name!=="basePlane"&&h.object.name!=="holeBox",!1)?document.documentElement.style.cursor="pointer":document.documentElement.style.cursor="auto";return}const l=a.find(f=>f.object.name==="basePlane")?.point;l&&this.sceneManager.setSelectedShapeXZ(l,a.reduce((f,h)=>f||h.object.name==="holeBox",!1))},this.onPointerUp=n=>{this.sceneManager?.clearSelectedShape(),document.documentElement.style.cursor="auto"},this.canvas=t,this.sceneManager=e,this.canvas.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp)}}const DM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84"/></svg>',LM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M22 34h4V22h-4zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4m0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16m-2-22h4v-4h-4z"/></svg>',UM='<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 448q-26 0-45-19t-19-45V256q0-50 26-96 26-45 71-70 44-26 95-26 52 0 96 26 45 26 71 71 25 44 25 95v128q0 26-19 45t-45 19h-64V288h80v-32q0-38-19-72-20-33-53-52-33-20-72-20-40 0-72 19-33 20-52 53-20 33-20 72v32h80v160z"/></svg>';var NM=Object.defineProperty,FM=Object.getOwnPropertyDescriptor,oa=(i,t,e,n)=>{for(var r=n>1?void 0:n?FM(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(t,e,r):o(r))||r);return n&&r&&NM(t,e,r),r};let Fr=class extends as{constructor(){super(),this.autoDark=!1,this.shapeColor=11022898,this.selectedShapeColor=12743938,this.onReset=()=>{this.sceneManager?.onReset(),this.dispatchEvent(new CustomEvent("shapepuzzlecaptchareset",{bubbles:!0,composed:!0}))},this.toggleInfoOverlay=()=>{if(!this.infoOverlay)return;const i=getComputedStyle(this.infoOverlay).opacity==="0";this.infoOverlay.style.opacity=i?"1":"0",this.infoOverlay.style.pointerEvents=i?"auto":"none",this.interaction&&(this.interaction.enabled=!i)},this.onVerify=()=>{this.sceneManager?.isSolved&&this.dispatchEvent(new CustomEvent("shapepuzzlecaptchasolved",{bubbles:!0,composed:!0}))}}firstUpdated(){const i=this.shadowRoot?.getElementById("shape-puzzle-canvas");i.width=i.clientWidth,i.height=i.clientHeight,this.sceneManager=new PM(i,this.shapeColor,this.selectedShapeColor),this.interaction=new IM(i,this.sceneManager),this.infoOverlay=this.shadowRoot?.getElementById("shape-puzzle-info")}disconnectedCallback(){super.disconnectedCallback(),this.sceneManager?.dispose(),this.interaction?.dispose()}render(){return ip`
      <header>
        <div>Put all shapes into the</div>
        <div class="subject">correct holes</div>
      </header>

      <div class="canvas-container">
        <canvas id="shape-puzzle-canvas"> canvas not supported :( </canvas>

        <div id="shape-puzzle-info">
          <div>pick up shapes from here...</div>
          <div>...and drag them into the holes here</div>
        </div>
      </div>

      <footer>
        <button
          class="icon-btn"
          id="refresh-btn"
          .innerHTML="${DM}"
          .onclick="${this.onReset}"
        ></button>
        <button
          class="icon-btn"
          id="audio-btn"
          .innerHTML="${UM}"
        ></button>
        <button
          class="icon-btn"
          id="info-btn"
          .innerHTML="${LM}"
          .onclick="${this.toggleInfoOverlay}"
        ></button>
        <div class="spacer"></div>
        <button class="text-btn" id="submit-btn" .onclick="${this.onVerify}">
          Verify
        </button>
      </footer>
    `}};Fr.styles=Wd`
    :host {
      display: flex;
      flex-direction: column;
      width: 400px;
      color: var(--text-color);
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      font-family: var(--font-family), sans-serif;
      user-select: none;

      --font-family: "Arial";
      --bg-color: #fff;
      --canvas-bg-color: #f5f5f5;
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

    .canvas-container {
      position: relative;
      height: 360px;
      margin: 0px 8px 8px 8px;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--canvas-bg-color);
      touch-action: none;
    }

    #shape-puzzle-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      background-color: rgb(from var(--bg-color) r g b / 0.5);
      backdrop-filter: blur(4px);
      transition: opacity 300ms;
      pointer-events: none;

      > div {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        border: 1px dashed var(--border-color);
      }

      :last-child {
        max-height: 135px;
      }
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
  `;oa([wl({type:Boolean,attribute:"auto-dark",reflect:!0})],Fr.prototype,"autoDark",2);oa([wl({type:Number,attribute:"shape-color"})],Fr.prototype,"shapeColor",2);oa([wl({type:Number,attribute:"selected-shape-color"})],Fr.prototype,"selectedShapeColor",2);Fr=oa([dp("shape-puzzle-captcha")],Fr);
