import{a as Ei,b as Oi,d as Di,e as Ri,f as Ai,g as Ie,h as Te,i as Pe}from"./chunk-DJ3DQQWZ.js";import{a as mt,c as pt,e as oi,f as ri,g as si}from"./chunk-EF6LRZ3A.js";import{a as Re,b as hi,c as _i,f as Ae,j as fi,k as gi}from"./chunk-VOHC6RTG.js";import{a as Kt,b as $t,d as Ut,e as Yt,f as Xt,g as Zt,h as Jt,i as ei,j as he,k as ti,l as ii,m as ni,n as ai}from"./chunk-NSZDC73O.js";import{a as yi,b as xi}from"./chunk-WA76PONR.js";import{c as li,d as ci,e as Oe,f as di,g as De,j as mi}from"./chunk-TP4TYOCJ.js";import{a as Wt,b as Ht,c as Gt}from"./chunk-7M7Z77JP.js";import{b as Bt,c as ue,d as Ee}from"./chunk-HYHVXGPW.js";import{a as Mi}from"./chunk-2Z244MUR.js";import{a as Si,b as wi}from"./chunk-EB5QFKAX.js";import{a as Vt,c as Lt,d as jt,e as zt,f as Qt}from"./chunk-JCVDTYP2.js";import{b as ut,d as b,e as ht,f as _t,g as ft,h as gt,i as bt,j as vt,k as yt,l as xt,m as Ct,n as de,o as kt,q as St,r as wt}from"./chunk-7A4RPSS3.js";import{a as bi,b as vi,c as Ci,d as ki}from"./chunk-K5UA66LT.js";import{a as pi,b as ui}from"./chunk-HGNCOPQX.js";import{a as _e}from"./chunk-27ZIWQZU.js";import{$a as M,Ac as Tt,Bb as lt,C as ye,Cc as ie,D as xe,Da as E,E as q,Ea as f,Fa as g,Fb as W,Gb as A,Ha as se,Hb as we,Ia as T,Ic as Pt,Ja as P,Jc as Ft,K as Ge,Ka as u,Kc as qt,L as Y,La as r,Lc as pe,M as O,Ma as o,Mc as Nt,Na as _,Nb as ct,O as m,Ra as F,S as C,Sa as it,T as k,Ta as y,U as Ke,Ub as dt,Va as p,W as N,Wa as le,X as $e,Xa as z,Ya as nt,Z as L,Za as Q,_ as Ue,_a as w,a as B,b as ze,ba as D,bc as Mt,ca as Ye,cc as Et,da as Xe,db as at,e as S,fa as j,fb as V,gb as ce,hb as l,hc as Ot,i as Qe,ia as Ce,ib as v,ic as Dt,ja as c,jb as R,ka as ke,kb as ot,la as Ze,lb as rt,lc as Rt,m as U,n as We,na as Je,oc as me,pb as Se,pc as H,q as oe,qc as At,s as ve,sa as I,sb as J,sc as G,ta as X,tb as ee,tc as It,ua as Z,uc as Me,va as et,w as He,wa as re,xb as te,ya as tt,yb as st}from"./chunk-THYHNSB3.js";var Hi=["text"],Gi=[[["mat-icon"]],"*"],Ki=["mat-icon","*"];function $i(n,a){if(n&1&&_(0,"mat-pseudo-checkbox",1),n&2){let e=p();u("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Ui(n,a){if(n&1&&_(0,"mat-pseudo-checkbox",3),n&2){let e=p();u("disabled",e.disabled)}}function Yi(n,a){if(n&1&&(r(0,"span",4),l(1),o()),n&2){let e=p();c(),R("(",e.group.label,")")}}var Be=new O("MAT_OPTION_PARENT_COMPONENT"),qe=new O("MatOptgroup");var Fe=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},K=(()=>{class n{_element=m(j);_changeDetectorRef=m(W);_parent=m(Be,{optional:!0});group=m(qe,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(G).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=D(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new L;_text;_stateChanges=new S;constructor(){let e=m(Ot);e.load(Ft),e.load(Dt),this._signalDisableRipple=!!this._parent&&tt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!H(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Fe(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&Q(Hi,7),t&2){let s;w(s=M())&&(i._text=s.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&y("click",function(){return i._selectViaInteraction()})("keydown",function(d){return i._handleKeydown(d)}),t&2&&(it("id",i.id),E("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),V("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",A]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ki,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(le(Gi),f(0,$i,1,2,"mat-pseudo-checkbox",1),z(1),r(2,"span",2,0),z(4,1),o(),f(5,Ui,1,1,"mat-pseudo-checkbox",3),f(6,Yi,2,1,"span",4),_(7,"div",5)),t&2&&(g(i.multiple?0:-1),c(5),g(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),c(),g(i.group&&i.group._inert?6:-1),c(),u("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Lt,Pt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Ii(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),s=0;for(let d=0;d<n+1;d++)t[d].group&&t[d].group===i[s]&&s++;return s}return 0}function Ti(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var Ne=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Y({imports:[Nt,Mi,K,pe]})}return n})();var tn=["trigger"],nn=["panel"],an=[[["mat-select-trigger"]],"*"],on=["mat-select-trigger","*"];function rn(n,a){if(n&1&&(r(0,"span",4),l(1),o()),n&2){let e=p();c(),v(e.placeholder)}}function sn(n,a){n&1&&z(0)}function ln(n,a){if(n&1&&(r(0,"span",11),l(1),o()),n&2){let e=p(2);c(),v(e.triggerValue)}}function cn(n,a){if(n&1&&(r(0,"span",5),f(1,sn,1,0)(2,ln,2,1,"span",11),o()),n&2){let e=p();c(),g(e.customTrigger?1:2)}}function dn(n,a){if(n&1){let e=F();r(0,"div",12,1),y("keydown",function(i){C(e);let s=p();return k(s._handleKeydown(i))}),z(2,1),o()}if(n&2){let e=p();ce(e.panelClass),V("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),E("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var mn=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(N);return()=>Ei(n)}}),pn=new O("MAT_SELECT_CONFIG"),un=new O("MatSelectTrigger"),Ve=class{source;value;constructor(a,e){this.source=a,this.value=e}},Bi=(()=>{class n{_viewportRuler=m(fi);_changeDetectorRef=m(W);_elementRef=m(j);_dir=m(qt,{optional:!0});_idGenerator=m(G);_renderer=m(Je);_parentFormField=m(Jt,{optional:!0});ngControl=m(ht,{self:!0,optional:!0});_liveAnnouncer=m(me);_defaultOptions=m(pn,{optional:!0});_animationsDisabled=ie();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,s=Ii(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&s===1?i.scrollTop=0:i.scrollTop=Ti(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ve(this,e)}_scrollStrategyFactory=m(mn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=D(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(b.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=We(()=>{let e=this.options;return e?e.changes.pipe(ye(e),xe(()=>oe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xe(()=>this.optionSelectionChanges))});openedChange=new L;_openedStream=this.openedChange.pipe(ve(e=>e),U(()=>{}));_closedStream=this.openedChange.pipe(ve(e=>!e),U(()=>{}));selectionChange=new L;valueChange=new L;constructor(){let e=m(Kt),t=m(gt,{optional:!0}),i=m(de,{optional:!0}),s=m(new st("tabindex"),{optional:!0}),d=m(Ri,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new $t(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=s==null?0:parseInt(s)||0,this._popoverLocation=d?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Vt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(q(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(q(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ye(null),q(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(He(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Me(this._trackedModal,"aria-owns",t),It(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Me(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",s=>{s.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,s=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&s&&!H(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;d.onKeydown(e);let x=this.selected;x&&h!==x&&this._liveAnnouncer.announce(x.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,s=i===40||i===38,d=t.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!H(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(x=>!x.disabled&&!x.selected);this.options.forEach(x=>{x.disabled||(h?x.select():x.deselect())})}else{let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&s&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!H(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ie?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new At(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=oe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(q(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),oe(...this.options.map(t=>t._stateChanges)).pipe(q(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Mt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,s){if(t&1&&nt(s,un,5)(s,K,5)(s,qe,5),t&2){let d;w(d=M())&&(i.customTrigger=d.first),w(d=M())&&(i.options=d),w(d=M())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&Q(tn,5)(nn,5)(Te,5),t&2){let s;w(s=M())&&(i.trigger=s.first),w(s=M())&&(i.panel=s.first),w(s=M())&&(i._overlayDir=s.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&y("keydown",function(d){return i._handleKeydown(d)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(E("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),V("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",A],disableRipple:[2,"disableRipple","disableRipple",A],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:we(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",A],placeholder:"placeholder",required:[2,"required","required",A],multiple:[2,"multiple","multiple",A],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",A],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",we],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",A]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Se([{provide:Zt,useExisting:n},{provide:Be,useExisting:n}]),Xe],ngContentSelectors:on,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(le(an),r(0,"div",2,0),y("click",function(){return i.open()}),r(3,"div",3),f(4,rn,2,1,"span",4)(5,cn,3,1,"span",5),o(),r(6,"div",6)(7,"div",7),Ke(),r(8,"svg",8),_(9,"path",9),o()()()(),re(10,dn,3,16,"ng-template",10),y("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(d){return i._handleOverlayKeydown(d)})),t&2){let s=at(1);c(3),E("id",i._valueId),c(),g(i.empty?4:5),c(6),u("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||s)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ie,Te],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var qi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Y({imports:[Pe,Ne,pe,gi,he,Ne]})}return n})();function _n(n,a){if(n&1){let e=F();r(0,"div",1)(1,"button",2),y("click",function(){C(e);let i=p();return k(i.action())}),l(2),o()()}if(n&2){let e=p();c(2),R(" ",e.data.action," ")}}var fn=["label"];function gn(n,a){}var bn=Math.pow(2,31)-1,ne=class{_overlayRef;instance;containerInstance;_afterDismissed=new S;_afterOpened=new S;_onAction=new S;_durationTimeoutId;_dismissedByAction=!1;constructor(a,e){this._overlayRef=e,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,bn))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ni=new O("MatSnackBarData"),$=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},vn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Z({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),yn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Z({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Z({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Cn=(()=>{class n{snackBarRef=m(ne);data=m(Ni);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(r(0,"div",0),l(1),o(),f(2,_n,3,1,"div",1)),t&2&&(c(),R(" ",i.data.message,`
`),c(),g(i.hasAction?2:-1))},dependencies:[ue,vn,yn,xn],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Le="_mat-snack-bar-enter",je="_mat-snack-bar-exit",kn=(()=>{class n extends _i{_ngZone=m(Ue);_elementRef=m(j);_changeDetectorRef=m(W);_platform=m(Et);_animationsDisabled=ie();snackBarConfig=m($);_document=m($e);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=m(N);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new S;_onExit=new S;_onEnter=new S;_animationState="void";_live;_label;_role;_liveElementId=m(G).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===je?this._completeExit():e===Le&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ke(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Le)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Le)},200)))}exit(){return this._destroyed?Qe(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ke(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(je)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(je),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(d=>e.classList.add(d)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,s="mdc-snackbar__label";i.classList.toggle(s,!i.querySelector(`.${s}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let s=t[i],d=s.getAttribute("aria-owns");this._trackedModals.add(s),d?d.indexOf(e)===-1&&s.setAttribute("aria-owns",d+" "+e):s.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(s=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&Q(Ae,7)(fn,7),t&2){let s;w(s=M())&&(i._portalOutlet=s.first),w(s=M())&&(i._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&y("animationend",function(d){return i.onAnimationEnd(d.animationName)})("animationcancel",function(d){return i.onAnimationEnd(d.animationName)}),t&2&&V("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[et],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(r(0,"div",1)(1,"div",2,0)(3,"div",3),re(4,gn,0,0,"ng-template",4),o(),_(5,"div"),o()()),t&2&&(c(5),E("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Ae],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Sn=new O("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new $}),Vi=(()=>{class n{_live=m(me);_injector=m(N);_breakpointObserver=m(Rt);_parentSnackBar=m(n,{optional:!0,skipSelf:!0});_defaultConfig=m(Sn);_animationsDisabled=ie();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Cn;snackBarContainerComponent=kn;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let s=B(B({},this._defaultConfig),i);return s.data={message:e,action:t},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,s=N.create({parent:i||this._injector,providers:[{provide:$,useValue:t}]}),d=new Re(this.snackBarContainerComponent,t.viewContainerRef,s),h=e.attach(d);return h.instance.snackBarConfig=t,h.instance}_attach(e,t){let i=B(B(B({},new $),this._defaultConfig),t),s=this._createOverlay(i),d=this._attachSnackBarContainer(s,i),h=new ne(d,s);if(e instanceof Ze){let x=new hi(e,null,{$implicit:i.data,snackBarRef:h});h.instance=d.attachTemplatePortal(x)}else{let x=this._createInjector(i,h),Qi=new Re(e,void 0,x),Wi=d.attachComponentPortal(Qi);h.instance=Wi.instance}return this._breakpointObserver.observe(Tt.HandsetPortrait).pipe(q(s.detachments())).subscribe(x=>{s.overlayElement.classList.toggle(this.handsetCssClass,x.matches)}),i.announcementMessage&&d._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(h,i),this._openedSnackBarRef=h,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Oi;t.direction=e.direction;let i=Di(this._injector),s=e.direction==="rtl",d=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!s||e.horizontalPosition==="end"&&s,h=!d&&e.horizontalPosition!=="center";return d?i.left("0"):h?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,Ai(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return N.create({parent:i||this._injector,providers:[{provide:ne,useValue:t},{provide:Ni,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Li=(n,a)=>a.id,ji=(n,a)=>a.value,wn=(n,a)=>a.key;function Mn(n,a){n&1&&(r(0,"p",1),l(1),o()),n&2&&(c(),v(a))}function En(n,a){n&1&&_(0,"mat-progress-bar",2)}function On(n,a){if(n&1&&(r(0,"mat-option",8),l(1),o()),n&2){let e=a.$implicit,t=p(2);u("value",e),c(),v(t.statusLabel(e))}}function Dn(n,a){if(n&1&&(r(0,"dt"),l(1,"Client / company"),o(),r(2,"dd"),l(3),o()),n&2){let e=p();c(3),v(e.company)}}function Rn(n,a){if(n&1&&(r(0,"dt"),l(1,"Email"),o(),r(2,"dd")(3,"a",23),l(4),o()()),n&2){let e=p();c(3),u("href","mailto:"+e.contact_email,Ce),c(),v(e.contact_email)}}function An(n,a){if(n&1&&(r(0,"dt"),l(1,"Phone"),o(),r(2,"dd")(3,"a",23),l(4),o()()),n&2){let e=p();c(3),u("href","tel:"+e.contact_phone,Ce),c(),v(e.contact_phone)}}function In(n,a){n&1&&(r(0,"span",10),l(1,"(no account: this message is all they get)"),o())}function Tn(n,a){if(n&1&&(r(0,"div",14)(1,"div",13),l(2),J(3,"date"),o(),r(4,"div",11),l(5),o()()),n&2){let e=a.$implicit;c(2),v(ee(3,2,e.created_at,"MMM d, h:mm a")),c(3),v(e.body)}}function Pn(n,a){n&1&&(r(0,"p",10),l(1,"No notes yet."),o())}function Fn(n,a){n&1&&_(0,"app-status-chip",19),n&2&&u("status",a.status)}function Bn(n,a){if(n&1){let e=F();r(0,"p",10),l(1),J(2,"date"),o(),_(3,"app-proposal-summary",24),r(4,"div",17)(5,"button",25),y("click",function(){C(e);let i=p(2);return k(i.revise())}),l(6,"Revise proposal"),o(),r(7,"span",13),l(8,"Hides it from the client until you send it again."),o()()}if(n&2){let e=p(),t=p();c(),ot(" Sent ",ee(2,4,t.quote().sent_at,"medium")," by ",e.notify_via==="sms"?"text":"email",". This is what the client sees: "),c(2),u("proposal",t.quote()),c(2),u("disabled",t.busy())}}function qn(n,a){if(n&1&&(r(0,"mat-radio-button",8),l(1),o()),n&2){let e=a.$implicit;u("value",e.value),c(),v(e.label)}}function Nn(n,a){n&1&&(r(0,"span",13),l(1),o()),n&2&&(c(),R("(client: ",a,")"))}function Vn(n,a){if(n&1&&(r(0,"mat-button-toggle",8),l(1),o()),n&2){let e=a.$implicit,t=p(4);u("value",e),c(),v(t.serviceLabels.proposal[e])}}function Ln(n,a){if(n&1&&(r(0,"div",27)(1,"span",54),l(2),f(3,Nn,2,1,"span",13),o(),r(4,"mat-button-toggle-group",55),T(5,Vn,2,2,"mat-button-toggle",8,se),o()()),n&2){let e,t=a.$implicit,i=p(3);c(),u("id",t.key+"-label"),c(),R(" ",t.label," "),c(),g((e=i.clientService(t.key))?3:-1,e),c(),u("formControlName",t.key),E("aria-labelledby",t.key+"-label"),c(),P(t.choices)}}function jn(n,a){n&1&&(r(0,"mat-form-field")(1,"mat-label"),l(2,"Architectural fee"),o(),_(3,"input",56),r(4,"mat-error"),l(5,"Required"),o()(),r(6,"mat-form-field")(7,"mat-label"),l(8,"Engineering fee"),o(),_(9,"input",57),r(10,"mat-error"),l(11,"Required"),o()())}function zn(n,a){n&1&&(r(0,"mat-form-field")(1,"mat-label"),l(2,"Total professional fee"),o(),_(3,"input",58),r(4,"mat-error"),l(5,"Required"),o()())}function Qn(n,a){if(n&1&&(r(0,"mat-radio-button",8),l(1),o()),n&2){let e=a.$implicit;u("value",e.value),c(),v(e.label)}}function Wn(n,a){if(n&1){let e=F();r(0,"div",50)(1,"mat-form-field",59),_(2,"textarea",60),o(),r(3,"button",61),y("click",function(){let i=C(e).$index,s=p(3);return k(s.removeAssumption(i))}),r(4,"mat-icon"),l(5,"close"),o()()()}if(n&2){let e=a.$index;c(2),u("formControlName",e),E("aria-label","Assumption "+(e+1))}}function Hn(n,a){if(n&1){let e=F();r(0,"form",26),y("ngSubmit",function(){C(e);let i=p(2);return k(i.saveQuote("sent"))}),r(1,"h3"),l(2,"Scope"),o(),r(3,"div",27)(4,"span",28),l(5,"Field measuring"),o(),r(6,"mat-radio-group",29),T(7,qn,2,2,"mat-radio-button",8,ji),o()(),T(9,Ln,7,5,"div",27,wn),r(11,"mat-form-field",30)(12,"mat-label"),l(13,"Other consultants / special services"),o(),_(14,"textarea",31),o(),r(15,"h3"),l(16,"Permit / deliverables"),o(),r(17,"div",27)(18,"span",32),l(19,"Permit-ready drawings"),o(),r(20,"mat-button-toggle-group",33)(21,"mat-button-toggle",8),l(22,"Yes"),o(),r(23,"mat-button-toggle",8),l(24,"No"),o()()(),r(25,"div",27)(26,"span",34),l(27,"Stamped / sealed"),o(),r(28,"mat-button-toggle-group",35)(29,"mat-button-toggle",8),l(30,"Yes"),o(),r(31,"mat-button-toggle",8),l(32,"No"),o()()(),r(33,"mat-form-field",30)(34,"mat-label"),l(35,"Permit / deliverable notes"),o(),_(36,"textarea",36),o(),r(37,"h3"),l(38,"Professional fee + payments"),o(),r(39,"div",27)(40,"span",37),l(41,"Show fee as"),o(),r(42,"mat-radio-group",38)(43,"mat-radio-button",39),l(44,"Combined"),o(),r(45,"mat-radio-button",40),l(46,"Separate arch / engineering"),o()()(),r(47,"div",41),f(48,jn,12,0)(49,zn,6,0,"mat-form-field"),o(),r(50,"p",42),l(51),o(),r(52,"div",27)(53,"span",43),l(54,"Number of payments"),o(),r(55,"mat-radio-group",44),T(56,Qn,2,2,"mat-radio-button",8,ji),o()(),r(58,"mat-form-field",30)(59,"mat-label"),l(60,"Payment notes / split"),o(),_(61,"textarea",45),r(62,"mat-hint"),l(63,'e.g. "40% at signing, 40% at permit submittal, 20% at approval"'),o()(),r(64,"h3"),l(65,"Message and validity"),o(),r(66,"mat-form-field",46)(67,"mat-label"),l(68,"Message to the client (optional)"),o(),_(69,"textarea",47),o(),r(70,"mat-form-field")(71,"mat-label"),l(72,"Valid until (optional)"),o(),_(73,"input",48),o(),r(74,"h3"),l(75,"Standard assumptions"),o(),r(76,"div",49),T(77,Wn,6,2,"div",50,se),o(),r(79,"div",4)(80,"button",51),y("click",function(){C(e);let i=p(2);return k(i.addAssumption())}),r(81,"mat-icon"),l(82,"add"),o(),l(83," Add assumption"),o(),r(84,"button",51),y("click",function(){C(e);let i=p(2);return k(i.resetAssumptions())}),l(85,"Reset to standard list"),o()(),r(86,"div",17)(87,"button",52),y("click",function(){C(e);let i=p(2);return k(i.saveQuote("draft"))}),l(88,"Save draft"),o(),r(89,"button",53),l(90,"Send to client"),o()()()}if(n&2){let e=p(2);u("formGroup",e.proposalForm),c(7),P(e.fieldMeasuring),c(2),P(e.services),c(12),u("value",!0),c(2),u("value",!1),c(6),u("value",!0),c(2),u("value",!1),c(17),g(e.separateFees()?48:49),c(3),R("Total professional fee: ",e.totalLabel()),c(5),P(e.paymentPlans),c(21),P(e.proposalForm.controls.assumptions.controls),c(10),u("disabled",e.busy()),c(2),u("disabled",e.busy())}}function Gn(n,a){if(n&1&&(r(0,"div",13),l(1),o()),n&2){let e=p().$implicit;c(),v(e.detail)}}function Kn(n,a){if(n&1&&(r(0,"div",22)(1,"span",62),l(2),o(),l(3),r(4,"span",13),l(5),J(6,"date"),o(),f(7,Gn,2,1,"div",13),o()),n&2){let e=a.$implicit,t=p(2);c(),ce(e.status),c(),v(e.status),c(),rt(" ",t.eventLabel(e.event)," \u2192 ",e.recipient," (",e.channel,") "),c(2),v(ee(6,8,e.created_at,"MMM d, h:mm a")),c(2),g(e.status!=="sent"&&e.detail?7:-1)}}function $n(n,a){n&1&&(r(0,"p",10),l(1,"Nothing sent yet."),o())}function Un(n,a){if(n&1){let e=F();r(0,"div",3)(1,"div",4)(2,"h1",5),l(3),o(),r(4,"mat-form-field",6)(5,"mat-label"),l(6,"Status"),o(),r(7,"mat-select",7),y("selectionChange",function(i){C(e);let s=p();return k(s.setStatus(i.value))}),T(8,On,2,2,"mat-option",8,se),o()()(),r(10,"mat-card")(11,"mat-card-content")(12,"h2"),l(13,"Client"),o(),r(14,"dl",9)(15,"dt"),l(16,"Contact person"),o(),r(17,"dd"),l(18),o(),f(19,Dn,4,1),f(20,Rn,5,2),f(21,An,5,2),r(22,"dt"),l(23,"Send proposal by"),o(),r(24,"dd"),l(25),f(26,In,2,0,"span",10),o(),r(27,"dt"),l(28,"Submitted"),o(),r(29,"dd"),l(30),J(31,"date"),o()()()(),r(32,"mat-card")(33,"mat-card-content")(34,"h2"),l(35,"Project"),o(),r(36,"p",11),l(37),o(),_(38,"app-request-facts",12),o()(),r(39,"mat-card")(40,"mat-card-content")(41,"h2"),l(42,"Research notes "),r(43,"span",13),l(44,"(private, never shown to the client)"),o()(),T(45,Tn,6,5,"div",14,Li,!1,Pn,2,0,"p",10),r(48,"mat-form-field",15)(49,"mat-label"),l(50,"Add a note"),o(),_(51,"textarea",16),o(),r(52,"div",17)(53,"button",18),y("click",function(){C(e);let i=p();return k(i.addNote())}),l(54,"Add note"),o()()()(),r(55,"mat-card")(56,"mat-card-content")(57,"div",4)(58,"h2",5),l(59,"Proposal"),o(),f(60,Fn,1,1,"app-status-chip",19),o(),f(61,Bn,9,7)(62,Hn,91,9,"form",20),o()(),r(63,"mat-card")(64,"mat-card-content")(65,"div",4)(66,"h2",5),l(67,"Notifications"),o(),r(68,"button",21),y("click",function(){C(e);let i=p();return k(i.refreshLog())}),r(69,"mat-icon"),l(70,"refresh"),o()()(),T(71,Kn,8,11,"div",22,Li,!1,$n,2,0,"p",10),o()()()}if(n&2){let e,t,i=a,s=p();c(3),v(i.project_name),c(4),u("value",i.status)("disabled",s.busy()),c(),P(s.statuses),c(10),v(i.contact_name),c(),g(i.company?19:-1),c(),g(i.contact_email?20:-1),c(),g(i.contact_phone?21:-1),c(4),R(" ",i.notify_via==="sms"?"Text message":"Email"," "),c(),g(i.user_id?-1:26),c(4),v(ee(31,18,i.created_at,"medium")),c(7),v(i.description),c(),u("request",i),c(7),P(s.notes()),c(6),u("formControl",s.noteControl),c(2),u("disabled",s.busy()||!s.noteControl.value.trim()),c(7),g((e=s.quote())?60:-1,e),c(),g(((t=s.quote())==null?null:t.status)==="sent"?61:62),c(10),P(s.log())}}var Yn={"request.created":"New-request alert","quote.sent":"Proposal"},ae=n=>Math.round((Number(n)||0)*100),zi=class n{id=lt.required();quotes=m(ui);fb=m(St);snack=m(Vi);statuses=pi;statusLabel=Ci;fieldMeasuring=li;services=ci;serviceLabels=Oe;paymentPlans=di;request=D(null);notes=D([]);log=D([]);busy=D(!1);error=D(null);quote=te(()=>this.request()?.quotes??null);noteControl=this.fb.control("",[b.required,b.maxLength(1e4)]);proposalForm=this.fb.group({field_measuring:this.fb.control(null),service_architectural:this.fb.control(null),service_mep:this.fb.control(null),service_structural:this.fb.control(null),other_services:["",b.maxLength(2e3)],permit_ready:this.fb.control(null),stamped_sealed:this.fb.control(null),permit_notes:["",b.maxLength(2e3)],fee_display:this.fb.control("combined"),total_fee:this.fb.control(null,[b.required,b.min(0)]),architectural_fee:this.fb.control(null,b.min(0)),engineering_fee:this.fb.control(null,b.min(0)),payment_plan:this.fb.control(null),payment_notes:["",b.maxLength(2e3)],assumptions:this.fb.array([]),message:["",b.maxLength(5e3)],valid_until:[""]});formValue=pt(this.proposalForm.valueChanges.pipe(U(()=>this.proposalForm.getRawValue())),{initialValue:this.proposalForm.getRawValue()});separateFees=te(()=>this.formValue().fee_display==="separate");total=te(()=>{let a=this.formValue();return(a.fee_display==="separate"?(ae(a.architectural_fee)+ae(a.engineering_fee))/100:a.total_fee)??0});totalLabel=te(()=>mi(this.total(),this.quote()?.currency??"USD"));constructor(){Ye(()=>{this.load(this.id())});let a=this.proposalForm.controls;a.fee_display.valueChanges.pipe(mt()).subscribe(e=>{let t=e==="separate";a.total_fee.setValidators(t?b.min(0):[b.required,b.min(0)]),a.architectural_fee.setValidators(t?[b.required,b.min(0)]:b.min(0)),a.engineering_fee.setValidators(t?[b.required,b.min(0)]:b.min(0));for(let i of[a.total_fee,a.architectural_fee,a.engineering_fee])i.updateValueAndValidity()})}async load(a){this.error.set(null);try{let[e,t,i]=await Promise.all([this.quotes.getRequest(a),this.quotes.notes(a),this.quotes.notifications(a)]);this.request.set(e),this.notes.set(t),this.log.set(i),this.fillProposalForm(e),e.status==="new"&&await this.setStatus("in_review")}catch(e){this.error.set(_e(e))}}setStatus(a){return this.withBusy(async()=>{await this.quotes.setRequestStatus(this.id(),a),this.request.update(e=>e&&ze(B({},e),{status:a}))})}clientService(a){let e=this.request()?.[a];return e?Oe.client[e]:""}addNote(){let a=this.noteControl.value.trim();return a?this.withBusy(async()=>{let e=await this.quotes.addNote(this.id(),a);this.notes.update(t=>[...t,e]),this.noteControl.reset()}):Promise.resolve()}addAssumption(){this.proposalForm.controls.assumptions.push(this.fb.control(""))}removeAssumption(a){this.proposalForm.controls.assumptions.removeAt(a)}resetAssumptions(){this.setAssumptions(De)}saveQuote(a){let e=this.request();if(!e)return Promise.resolve();if(this.proposalForm.invalid)return this.proposalForm.markAllAsTouched(),this.error.set("Fill in the fee before saving."),Promise.resolve();if(a==="sent"){let h=e.notify_via==="sms",x=h?e.contact_phone:e.contact_email;if(!confirm(`Send this proposal to ${e.contact_name} by ${h?"text":"email"} (${x})?`))return Promise.resolve()}let t=this.proposalForm.getRawValue(),i=t.fee_display==="separate",s=h=>h.trim()||null,d={field_measuring:t.field_measuring,service_architectural:t.service_architectural,service_mep:t.service_mep,service_structural:t.service_structural,other_services:s(t.other_services),permit_ready:t.permit_ready,stamped_sealed:t.stamped_sealed,permit_notes:s(t.permit_notes),fee_display:t.fee_display,architectural_fee:i?ae(t.architectural_fee)/100:null,engineering_fee:i?ae(t.engineering_fee)/100:null,total_fee:ae(this.total())/100,payment_plan:t.payment_plan,payment_notes:s(t.payment_notes),assumptions:t.assumptions.map(h=>h.trim()).filter(Boolean),message:s(t.message),valid_until:t.valid_until||null};return this.withBusy(async()=>{let h=await this.quotes.saveQuote(e.id,e.quotes,d,a);await this.afterQuoteChange(h,a==="sent"?"Proposal sent":"Draft saved")})}revise(){let a=this.quote();return a?this.withBusy(async()=>{let e=await this.quotes.reviseQuote(a.id);await this.afterQuoteChange(e,"Back to draft. Hidden from the client until you send it again.")}):Promise.resolve()}async afterQuoteChange(a,e){let t=await this.quotes.getRequest(a.request_id);this.request.set(t),this.fillProposalForm(t),this.snack.open(e,void 0,{duration:3e3}),a.status==="sent"&&setTimeout(()=>{this.refreshLog()},4e3)}fillProposalForm(a){let e=a.quotes;this.proposalForm.reset({field_measuring:e?.field_measuring??null,service_architectural:(e?e.service_architectural:a.service_architectural)??null,service_mep:(e?e.service_mep:a.service_mep)??null,service_structural:(e?e.service_structural:a.service_structural)??null,other_services:(e?e.other_services:a.other_services)??"",permit_ready:e?.permit_ready??null,stamped_sealed:e?.stamped_sealed??null,permit_notes:e?.permit_notes??"",fee_display:e?.fee_display??"combined",total_fee:e?.total_fee??null,architectural_fee:e?.architectural_fee??null,engineering_fee:e?.engineering_fee??null,payment_plan:e?.payment_plan??null,payment_notes:e?.payment_notes??"",message:e?.message??"",valid_until:e?e.valid_until??"":Xn(30)}),this.setAssumptions(e?e.assumptions:De)}setAssumptions(a){let e=this.proposalForm.controls.assumptions;e.clear({emitEvent:!1});for(let t of a)e.push(this.fb.control(t),{emitEvent:!1});e.updateValueAndValidity()}async refreshLog(){try{this.log.set(await this.quotes.notifications(this.id()))}catch(a){this.error.set(_e(a))}}eventLabel(a){return Yn[a]??a}async withBusy(a){this.busy.set(!0),this.error.set(null);try{await a()}catch(e){this.error.set(_e(e))}finally{this.busy.set(!1)}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-owner-request-detail"]],inputs:{id:[1,"id"]},decls:7,vars:3,consts:[["matButton","","routerLink","/owner"],[1,"error-text"],["mode","indeterminate"],[1,"stack"],[1,"row"],[1,"grow"],["subscriptSizing","dynamic",1,"status-field"],[3,"selectionChange","value","disabled"],[3,"value"],[1,"facts"],[1,"muted"],[1,"pre-wrap"],[3,"request"],[1,"muted","small"],[1,"note"],["subscriptSizing","dynamic",1,"full-width"],["matInput","","rows","3",3,"formControl"],[1,"row","actions"],["matButton","tonal",3,"click","disabled"],[3,"status"],[3,"formGroup"],["matIconButton","","aria-label","Refresh notifications",3,"click"],[1,"log-entry"],[3,"href"],[3,"proposal"],["matButton","outlined",3,"click","disabled"],[3,"ngSubmit","formGroup"],[1,"service-row"],["id","measure-label"],["formControlName","field_measuring","aria-labelledby","measure-label",1,"row"],[1,"full-width","spaced"],["matInput","","formControlName","other_services","rows","2"],["id","permit-label"],["formControlName","permit_ready","aria-labelledby","permit-label","hideSingleSelectionIndicator",""],["id","stamp-label"],["formControlName","stamped_sealed","aria-labelledby","stamp-label","hideSingleSelectionIndicator",""],["matInput","","formControlName","permit_notes","rows","2"],["id","display-label"],["formControlName","fee_display","aria-labelledby","display-label",1,"row"],["value","combined"],["value","separate"],[1,"fields","spaced"],[1,"total"],["id","payments-label"],["formControlName","payment_plan","aria-labelledby","payments-label",1,"row"],["matInput","","formControlName","payment_notes","rows","2"],[1,"full-width"],["matInput","","formControlName","message","rows","3"],["matInput","","type","date","formControlName","valid_until"],["formArrayName","assumptions"],[1,"assumption-row"],["matButton","","type","button",3,"click"],["matButton","outlined","type","button",3,"click","disabled"],["matButton","filled","type","submit",3,"disabled"],[3,"id"],["hideSingleSelectionIndicator","",3,"formControlName"],["matInput","","type","number","min","0","step","0.01","formControlName","architectural_fee"],["matInput","","type","number","min","0","step","0.01","formControlName","engineering_fee"],["matInput","","type","number","min","0","step","0.01","formControlName","total_fee"],["subscriptSizing","dynamic",1,"grow"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1",3,"formControlName"],["matIconButton","","type","button","aria-label","Remove assumption",3,"click"],[1,"log-status"]],template:function(e,t){if(e&1&&(r(0,"a",0)(1,"mat-icon"),l(2,"arrow_back"),o(),l(3," All requests"),o(),f(4,Mn,2,1,"p",1),f(5,En,1,0,"mat-progress-bar",2),f(6,Un,74,21,"div",3)),e&2){let i,s;c(4),g((i=t.error())?4:-1,i),c(),g(!t.request()&&!t.error()?5:-1),c(),g((s=t.request())?6:-1,s)}},dependencies:[wt,bt,ut,vt,_t,ft,kt,yt,de,Ct,xt,dt,Ee,ue,Bt,Qt,jt,zt,Gt,Wt,Ht,he,ei,Ut,Xt,Yt,wi,Si,ai,ni,ti,vi,bi,si,oi,ri,qi,Bi,K,yi,xi,ki,ii,ct],styles:[".status-field[_ngcontent-%COMP%]{width:160px}h3[_ngcontent-%COMP%]{font:var(--mat-sys-title-small);margin:20px 0 4px}.note[_ngcontent-%COMP%]{padding:8px 0;border-bottom:1px solid var(--mat-sys-outline-variant)}.actions[_ngcontent-%COMP%]{margin-top:16px}.total[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium);margin:0 0 8px}.assumption-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-bottom:4px}.log-entry[_ngcontent-%COMP%]{padding:6px 0}.log-status[_ngcontent-%COMP%]{display:inline-block;min-width:56px;padding:0 6px;margin-right:6px;border-radius:8px;text-align:center;font:var(--mat-sys-label-small);text-transform:uppercase;background:var(--mat-sys-surface-container-high)}.log-status.sent[_ngcontent-%COMP%]{background:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container)}.log-status.failed[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}"]})};function Xn(n){let a=new Date;return a.setDate(a.getDate()+n),`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}export{zi as OwnerRequestDetailPage};
