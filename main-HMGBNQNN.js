import{a as wt,b as Ct,c as xt,f as kt,i as Tt}from"./chunk-DJ3DQQWZ.js";import{b as bt,k as vt}from"./chunk-VOHC6RTG.js";import{b as pt,c as ft,d as _t}from"./chunk-HYHVXGPW.js";import{a as yt,b as Mt}from"./chunk-EB5QFKAX.js";import{$a as R,$b as ot,Aa as ze,Ba as le,C as oe,Cc as Me,D as y,Da as q,E as Pe,Ea as C,Eb as Ze,Fa as x,Fb as ue,Gb as N,H as T,I as Se,Ic as ut,Jc as dt,K as _e,Ka as X,Kc as ht,L as z,La as c,Lc as de,M as D,Ma as l,Mc as gt,N as be,Na as A,O as s,Oa as ve,P as Ee,Pa as We,Pb as $e,Ra as G,S as M,Sa as Ye,Sb as Je,T as w,Ta as F,Tb as Z,U as Re,Ua as qe,Ub as et,Va as p,Vb as tt,W as I,Wa as Q,Wb as nt,X as re,Xa as S,Xb as it,Ya as ce,Z as ae,Za as Xe,_ as se,_a as E,_b as $,a as V,aa as Ie,ac as rt,b as De,ba as Oe,c as te,ca as Ae,cc as at,d as ne,db as Ge,e as _,fa as O,fb as K,fc as ye,ga as Fe,gb as me,hb as m,hc as st,i as fe,ja as g,ka as Ne,la as Le,m as k,na as Be,pa as je,pb as Qe,pc as lt,q as ie,qa as Ue,qb as Ke,r as b,rc as ct,s as H,sa as P,sc as mt,ta as W,ua as Y,va as Ve,w as v,xa as He}from"./chunk-THYHNSB3.js";var we="Service workers are disabled or not supported by this browser",L=class{serviceWorker;worker;registration;events;constructor(a,e){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=new ne(t=>t.error(new T(5601,!1)));else{let t=null,n=new _;this.worker=new ne(d=>(t!==null&&d.next(t),n.subscribe(f=>d.next(f))));let o=()=>{let{controller:d}=a;d!==null&&(t=d,n.next(t))};a.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(y(()=>a.getRegistration().then(d=>{if(!d)throw new T(5601,!1);return d})));let r=new _;this.events=r.asObservable();let u=d=>{let{data:f}=d;f?.type&&r.next(f)};a.addEventListener("message",u),e?.get(le,null,{optional:!0})?.onDestroy(()=>{a.removeEventListener("controllerchange",o),a.removeEventListener("message",u)})}}postMessage(a,e){return new Promise(t=>{this.worker.pipe(v(1)).subscribe(n=>{n.postMessage(V({action:a},e)),t()})})}postMessageWithOperation(a,e,t){let n=this.waitForOperationCompleted(t),o=this.postMessage(a,e);return Promise.all([o,n]).then(([,r])=>r)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let e;return typeof a=="string"?e=t=>t.type===a:e=t=>a.includes(t.type),this.events.pipe(H(e))}nextEventOfType(a){return this.eventsOfType(a).pipe(v(1))}waitForOperationCompleted(a){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(H(n=>n.nonce===a),v(1),k(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},Ut=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new _;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=b,this.notificationClicks=b,this.notificationCloses=b,this.pushSubscriptionChanges=b,this.subscription=b;return}this.messages=this.sw.eventsOfType("PUSH").pipe(k(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(k(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(k(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(k(n=>n.data)),this.pushManager=this.sw.registration.pipe(k(n=>n.pushManager));let t=this.pushManager.pipe(y(n=>n.getSubscription()));this.subscription=new ne(n=>{let o=t.subscribe(n),r=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),r.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(we));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let r=0;r<n.length;r++)o[r]=n.charCodeAt(r);return t.applicationServerKey=o,new Promise((r,u)=>{this.pushManager.pipe(y(h=>h.subscribe(t)),v(1)).subscribe({next:h=>{this.subscriptionChanges.next(h),r(h)},error:u})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(we));let e=t=>{if(t===null)throw new T(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new T(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(v(1),y(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(be(L))};static \u0275prov=_e({token:i,factory:i.\u0275fac})}return i})(),Vt=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=b,this.unrecoverable=b;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(we));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new T(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(be(L))};static \u0275prov=_e({token:i,factory:i.\u0275fac})}return i})(),Pt=new D("");function Ht(){let i=s(J);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let a=s(Pt),e=s(se),t=s(le);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),t.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:o}=i;if(typeof o=="function")n=new Promise(r=>o().subscribe(()=>r()));else{let[r,...u]=(o||"registerWhenStable:30000").split(":");switch(r){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=Dt(+u[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),Dt(+u[0])]);break;default:throw new T(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(a,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(r=>console.error(Se(5604,!1)))})})}function Dt(i){return new Promise(a=>setTimeout(a,i))}function zt(){let i=s(J),a=s(I),e=!0;return new L(e&&i.enabled!==!1?navigator.serviceWorker:void 0,a)}var J=class{enabled;updateViaCache;type;scope;registrationStrategy};function St(i,a={}){return Ee([Ut,Vt,{provide:Pt,useValue:i},{provide:J,useValue:a},{provide:L,useFactory:zt},ze(Ht)])}var Et=async(i,a)=>{let e=s($),t=s(Z);return await e.ready,e.user()?!0:t.createUrlTree(["/login"],{queryParams:{next:a.url}})},Rt=async(i,a)=>{let e=s($),t=s(Z);return await e.ready,e.user()?e.isOwner()?!0:t.createUrlTree(["/"]):t.createUrlTree(["/login"],{queryParams:{next:a.url}})};var It=[{path:"",title:"Request a proposal \xB7 Pueblo Studio",loadComponent:()=>import("./chunk-UAATDQBC.js").then(i=>i.RequestFormPage)},{path:"login",title:"Sign in \xB7 Pueblo Studio",loadComponent:()=>import("./chunk-VZ6J3OJL.js").then(i=>i.LoginPage)},{path:"reset-password",title:"Reset password \xB7 Pueblo Studio",loadComponent:()=>import("./chunk-QHTIFRXC.js").then(i=>i.ResetPasswordPage)},{path:"my-requests",title:"My requests \xB7 Pueblo Studio",canActivate:[Et],loadComponent:()=>import("./chunk-WAL62JXG.js").then(i=>i.MyRequestsPage)},{path:"owner",canActivate:[Rt],children:[{path:"",title:"Proposal requests \xB7 Pueblo Studio",loadComponent:()=>import("./chunk-GK7CIAK5.js").then(i=>i.OwnerRequestsPage)},{path:"requests/:id",title:"Proposal request \xB7 Pueblo Studio",loadComponent:()=>import("./chunk-H2TCF47K.js").then(i=>i.OwnerRequestDetailPage)}]},{path:"**",redirectTo:""}];var Ot={providers:[Ie(),nt(It,it()),St("ngsw-worker.js",{enabled:!Ze(),registrationStrategy:"registerWhenStable:30000"})]};var Qt=["mat-menu-item",""],Kt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Zt=["mat-icon, [matMenuItemIcon]","*"];function $t(i,a){i&1&&(Re(),c(0,"svg",2),A(1,"polygon",3),l())}var Jt=["*"];function en(i,a){if(i&1){let e=G();ve(0,"div",0),qe("click",function(){M(e);let n=p();return w(n.closed.emit("click"))})("animationstart",function(n){M(e);let o=p();return w(o._onAnimationStart(n.animationName))})("animationend",function(n){M(e);let o=p();return w(o._onAnimationDone(n.animationName))})("animationcancel",function(n){M(e);let o=p();return w(o._onAnimationDone(n.animationName))}),ve(1,"div",1),S(2),We()()}if(i&2){let e=p();me(e._classList),K("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Ye("id",e.panelId),q("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ke=new D("MAT_MENU_PANEL"),ee=(()=>{class i{_elementRef=s(O);_document=s(re);_focusMonitor=s(ye);_parentMenu=s(ke,{optional:!0});_changeDetectorRef=s(ue);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new _;_focused=new _;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(st).load(dt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=P({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&F("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(q("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),K("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N]},exportAs:["matMenuItem"],attrs:Qt,ngContentSelectors:Zt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(Q(Kt),S(0),c(1,"span",0),S(2,1),l(),A(3,"div",1),C(4,$t,2,0,":svg:svg",2)),t&2&&(g(3),X("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),g(),x(n._triggersSubmenu?4:-1))},dependencies:[ut],encapsulation:2,changeDetection:0})}return i})();var tn=new D("MatMenuContent");var nn=new D("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),xe="_mat-menu-enter",pe="_mat-menu-exit",j=(()=>{class i{_elementRef=s(O);_changeDetectorRef=s(ue);_injector=s(I);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Me();_allItems;_directDescendantItems=new Fe;_classList={};_panelAnimationState="void";_animationDone=new _;_isAnimating=Oe(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=V({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ae;close=this.closed;panelId=s(mt).getId("mat-menu-panel-");constructor(){let e=s(nn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ct(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(oe(this._directDescendantItems),y(e=>ie(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(oe(this._directDescendantItems),y(t=>ie(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:lt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ne(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=De(V({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===pe;(t||e===xe)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===xe||e===pe)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(pe),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?xe:pe)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(oe(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=P({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&ce(o,tn,5)(o,ee,5)(o,ee,4),t&2){let r;E(r=R())&&(n.lazyContent=r.first),E(r=R())&&(n._allItems=r),E(r=R())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&Xe(Le,5),t&2){let o;E(o=R())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&q("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",N],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:N(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Qe([{provide:ke,useExisting:i}])],ngContentSelectors:Jt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(Q(),He(0,en,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),on=new D("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(I);return()=>wt(i)}});var B=new WeakMap,rn=(()=>{class i{_canHaveBackdrop;_element=s(O);_viewContainerRef=s(Ue);_menuItemInstance=s(ee,{optional:!0,self:!0});_dir=s(ht,{optional:!0});_focusMonitor=s(ye);_ngZone=s(se);_injector=s(I);_scrollStrategy=s(on);_changeDetectorRef=s(ue);_animationsDisabled=Me();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=te.EMPTY;_menuCloseSubscription=te.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(ke,{optional:!0});this._parentMaterialMenu=t instanceof j?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&B.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=B.get(t);B.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),r=o.getConfig(),u=r.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof j&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Pe(t.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof j&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(v(1)).subscribe(()=>{t.detach(),B.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&B.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=kt(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof j&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ct({positionStrategy:xt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,d]=[r,u],[f,ge]=[n,o],U=0;if(this._triggersSubmenu()){if(ge=n=e.xPosition==="before"?"start":"end",o=f=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Te=this._parentMaterialMenu.items.first;this._parentInnerPadding=Te?Te._getHostElement().offsetTop:0}U=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h=r==="top"?"bottom":"top",d=u==="top"?"bottom":"top");t.withPositions([{originX:n,originY:h,overlayX:f,overlayY:r,offsetY:U},{originX:o,originY:h,overlayX:ge,overlayY:r,offsetY:U},{originX:n,originY:d,overlayX:f,overlayY:u,offsetY:-U},{originX:o,originY:d,overlayX:ge,overlayY:u,offsetY:-U}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:fe(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(H(r=>this._menuOpen&&r!==this._menuItemInstance)):fe();return ie(e,n,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new bt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return B.get(e)===this}_triggerIsAriaDisabled(){return N(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){je()};static \u0275dir=Y({type:i})}return i})(),Nt=(()=>{class i extends rn{_cleanupTouchstart;_hoverSubscription=te.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ae;onMenuOpen=this.menuOpened;menuClosed=new ae;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(Be);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{rt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ot(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=Y({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&F("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&q("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ve]})}return i})();var Lt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[gt,Tt,de,vt]})}return i})();var sn=["*",[["mat-toolbar-row"]]],ln=["*","mat-toolbar-row"],cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=Y({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Bt=(()=>{class i{_elementRef=s(O);_platform=s(at);_document=s(re);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=P({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,o){if(t&1&&ce(o,cn,5),t&2){let r;E(r=R())&&(n._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(me(n.color?"mat-"+n.color:""),K("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ln,decls:2,vars:0,template:function(t,n){t&1&&(Q(sn),S(0),S(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var jt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[de]})}return i})();var un=()=>({exact:!0});function dn(i,a){i&1&&(c(0,"a",14),m(1,"Requests"),l())}function pn(i,a){i&1&&(c(0,"a",15),m(1,"My requests"),l())}function hn(i,a){if(i&1){let e=G();C(0,dn,2,0,"a",14)(1,pn,2,0,"a",15),c(2,"button",16),F("click",function(){M(e);let n=p();return w(n.signOut())}),m(3,"Sign out"),l()}if(i&2){let e=p();x(e.sb.isOwner()?0:1)}}function gn(i,a){i&1&&(c(0,"a",8),m(1,"Sign in"),l())}function fn(i,a){i&1&&(c(0,"a",17),m(1,"Requests"),l())}function _n(i,a){i&1&&(c(0,"a",18),m(1,"My requests"),l())}function bn(i,a){if(i&1){let e=G();C(0,fn,2,0,"a",17)(1,_n,2,0,"a",18),c(2,"button",19),F("click",function(){M(e);let n=p();return w(n.signOut())}),m(3,"Sign out"),l()}if(i&2){let e=p();x(e.sb.isOwner()?0:1)}}function vn(i,a){i&1&&(c(0,"a",11),m(1,"Sign in"),l())}function yn(i,a){i&1&&(c(0,"div",12),m(1," Supabase isn't configured for this build. Fill in "),c(2,"code"),m(3,"src/environments/environment.prod.ts"),l(),m(4,". "),l())}var he=class i{sb=s($);router=s(Z);constructor(){Ae(()=>{this.sb.passwordRecovery()&&this.router.navigateByUrl("/reset-password")})}async signOut(){await this.sb.signOut(),await this.router.navigateByUrl("/")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=P({type:i,selectors:[["app-root"]],decls:24,vars:6,consts:[["menu","matMenu"],[1,"toolbar"],["routerLink","/","aria-label","Pueblo Studio, home",1,"brand"],[1,"brand-name"],[1,"brand-tag"],[1,"spacer"],[1,"links"],["matButton","","routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["matButton","","routerLink","/login","routerLinkActive","active"],["matIconButton","","aria-label","Menu",1,"menu-toggle",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/"],["mat-menu-item","","routerLink","/login"],[1,"banner"],[1,"page"],["matButton","","routerLink","/owner","routerLinkActive","active"],["matButton","","routerLink","/my-requests","routerLinkActive","active"],["matButton","",3,"click"],["mat-menu-item","","routerLink","/owner"],["mat-menu-item","","routerLink","/my-requests"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1&&(c(0,"mat-toolbar",1)(1,"a",2)(2,"span",3),m(3,"PUEBLO STUDIO"),l(),c(4,"span",4),m(5,"Architecture | Interiors | Consulting"),l()(),A(6,"span",5),c(7,"nav",6)(8,"a",7),m(9,"Request a proposal"),l(),C(10,hn,4,1)(11,gn,2,0,"a",8),l(),c(12,"button",9)(13,"mat-icon"),m(14,"menu"),l()(),c(15,"mat-menu",null,0)(17,"a",10),m(18,"Request a proposal"),l(),C(19,bn,4,1)(20,vn,2,0,"a",11),l()(),C(21,yn,5,0,"div",12),c(22,"main",13),A(23,"router-outlet"),l()),e&2){let n=Ge(16);g(8),X("routerLinkActiveOptions",Ke(5,un)),g(2),x(t.sb.user()?10:11),g(2),X("matMenuTriggerFor",n),g(7),x(t.sb.user()?19:20),g(2),x(t.sb.configured?-1:21)}},dependencies:[Je,et,tt,jt,Bt,_t,ft,pt,Mt,yt,Lt,j,ee,Nt],styles:[".toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;--mat-toolbar-container-background-color: #1e1b18;--mat-toolbar-container-text-color: #fff;--mat-icon-button-icon-color: #fff}.brand[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:inherit;text-decoration:none;line-height:1.2}.brand-name[_ngcontent-%COMP%]{font-size:18px;font-weight:500;letter-spacing:.22em}.brand-tag[_ngcontent-%COMP%]{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.75}.spacer[_ngcontent-%COMP%]{flex:1}.links[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:color-mix(in srgb,#fff 16%,transparent)}.menu-toggle[_ngcontent-%COMP%]{display:none}@media(max-width:720px){.links[_ngcontent-%COMP%]{display:none}.menu-toggle[_ngcontent-%COMP%]{display:inline-flex}}.banner[_ngcontent-%COMP%]{padding:8px 16px;background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}"]})};$e(he,Ot).catch(i=>console.error(i));
