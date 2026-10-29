import{a as ve,b as ye,c as et}from"./chunk-NEDD7GPC.js";import{b as Ce,e as ke,f as pt,i as xe,j as Te}from"./chunk-VOHC6RTG.js";import{c as ce,d as me,e as be,f as pe,i as he,j as ue,m as _e,n as fe}from"./chunk-NSZDC73O.js";import{a as se,b as le,c as de}from"./chunk-7M7Z77JP.js";import{c as re,d as oe}from"./chunk-HYHVXGPW.js";import{b as Wt,d as v,f as jt,g as Gt,i as qt,m as $t,n as Zt,q as Ut,r as Kt}from"./chunk-7A4RPSS3.js";import{a as ge}from"./chunk-27ZIWQZU.js";import{$a as _,B as Dt,Bb as Ot,C as j,Ca as At,Cb as Vt,Cc as tt,D as Mt,Da as w,E as F,Ea as E,Fa as L,Fb as X,Gb as C,Ha as ot,Hb as J,Ia as st,Ic as mt,Ja as lt,Jc as ae,Ka as p,Kc as bt,L as Pt,La as r,Lc as ie,M as B,Ma as s,Na as y,O as l,Ra as A,S as f,T as g,Ta as h,Tb as Qt,Va as b,W as at,Wa as Z,Xa as U,Ya as K,Z as k,Za as O,_ as N,_a as u,_b as zt,ba as M,bb as Ft,c as D,cb as Nt,cc as ct,d as Ct,da as Rt,db as dt,e as z,ea as G,eb as Ht,fa as S,fb as x,g as kt,ga as Et,gb as Y,gc as Yt,hb as c,hc as Xt,i as xt,ib as V,ja as m,ka as q,la as $,mc as Jt,na as it,p as Tt,pb as Q,pc as te,q as W,qa as Lt,rc as ee,s as wt,sa as P,sc as ne,ta as Bt,ua as R,v as It,va as H,wa as rt,xa as St}from"./chunk-THYHNSB3.js";var gt=["*"];function Ne(a,o){a&1&&U(0)}var He=["tabListContainer"],Oe=["tabList"],Ve=["tabListInner"],Qe=["nextPaginator"],ze=["previousPaginator"],We=["content"];function je(a,o){}var Ge=["tabBodyWrapper"],qe=["tabHeader"];function $e(a,o){}function Ze(a,o){if(a&1&&rt(0,$e,0,0,"ng-template",12),a&2){let t=b().$implicit;p("cdkPortalOutlet",t.templateLabel)}}function Ue(a,o){if(a&1&&c(0),a&2){let t=b().$implicit;V(t.textLabel)}}function Ke(a,o){if(a&1){let t=A();r(0,"div",7,2),h("click",function(){let n=f(t),i=n.$implicit,d=n.$index,T=b(),I=dt(1);return g(T._handleClick(i,I,d))})("cdkFocusChange",function(n){let i=f(t).$index,d=b();return g(d._tabFocusChanged(n,i))}),y(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),E(6,Ze,1,1,null,12)(7,Ue,1,1),s()()()}if(a&2){let t=o.$implicit,e=o.$index,n=dt(1),i=b();Y(t.labelClass),x("mdc-tab--active",i.selectedIndex===e),p("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),w("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),m(3),p("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),m(3),L(t.templateLabel?6:7)}}function Ye(a,o){a&1&&U(0)}function Xe(a,o){if(a&1){let t=A();r(0,"mat-tab-body",13),h("_onCentered",function(){f(t);let n=b();return g(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){f(t);let i=b();return g(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){f(t);let i=b();return g(i._bodyCentered(n))}),s()}if(a&2){let t=o.$implicit,e=o.$index,n=b();Y(t.bodyClass),p("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),w("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Je=new B("MatTabContent"),tn=(()=>{class a{template=l($);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=R({type:a,selectors:[["","matTabContent",""]],features:[Q([{provide:Je,useExisting:a}])]})}return a})(),en=new B("MatTabLabel"),Me=new B("MAT_TAB"),nn=(()=>{class a extends ke{_closestTab=l(Me,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=G(a)))(n||a)}})();static \u0275dir=R({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Q([{provide:en,useExisting:a}]),H]})}return a})(),Pe=new B("MAT_TAB_GROUP"),vt=(()=>{class a{_viewContainerRef=l(Lt);_closestTabGroup=l(Pe,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new z;position=null;origin=null;isActive=!1;constructor(){l(Xt).load(ae)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ce(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&K(i,nn,5)(i,tn,7,$),e&2){let d;u(d=_())&&(n.templateLabel=d.first),u(d=_())&&(n._explicitContent=d.first)}},viewQuery:function(e,n){if(e&1&&O($,7),e&2){let i;u(i=_())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&w("id",null)},inputs:{disabled:[2,"disabled","disabled",C],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Q([{provide:Me,useExisting:a}]),Rt],ngContentSelectors:gt,decls:1,vars:0,template:function(e,n){e&1&&(Z(),St(0,Ne,1,0,"ng-template"))},encapsulation:2})}return a})(),ht="mdc-tab-indicator--active",we="mdc-tab-indicator--no-transition",ut=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let t=this._items.find(n=>n.elementRef.nativeElement===o),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},an=(()=>{class a{_elementRef=l(S);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ht);return}let n=e.getBoundingClientRect(),i=t.width/n.width,d=t.left-n.left;e.classList.add(we),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(we),e.classList.add(ht),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ht)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=R({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C]}})}return a})();var Re=(()=>{class a extends an{elementRef=l(S);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=G(a)))(n||a)}})();static \u0275dir=R({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(w("aria-disabled",!!n.disabled),x("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",C]},features:[H]})}return a})(),Ie={passive:!0},rn=650,on=100,sn=(()=>{class a{_elementRef=l(S);_changeDetectorRef=l(X);_viewportRuler=l(Te);_dir=l(bt,{optional:!0});_ngZone=l(N);_platform=l(ct);_sharedResizeObserver=l(ce);_injector=l(at);_renderer=l(it);_animationsDisabled=tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new k;indexFocused=new k;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Ie),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Ie))}ngAfterContentInit(){let t=this._dir?this._dir.change:xt("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(It(32),F(this._destroyed)),n=this._viewportRuler.change(150).pipe(F(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ee(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),q(i,{injector:this._injector}),W(t,n,e,this._items.changes,this._itemsResized()).pipe(F(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?kt:this._items.changes.pipe(j(this._items),Mt(t=>new Ct(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Dt(1),wt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!te(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:d}=e.elementRef.nativeElement,T,I;this._getLayoutDirection()=="ltr"?(T=i,I=T+d):(I=this._tabListInner.nativeElement.offsetWidth-i,T=I-d);let nt=this.scrollDistance,yt=this.scrollDistance+n;T<nt?this.scrollDistance-=nt-T:I>yt&&(this.scrollDistance+=Math.min(I-yt,T-nt))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Tt(rn,on).pipe(F(W(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=R({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",C],selectedIndex:[2,"selectedIndex","selectedIndex",J]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),ln=(()=>{class a extends sn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ut(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=G(a)))(n||a)}})();static \u0275cmp=P({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&K(i,Re,4),e&2){let d;u(d=_())&&(n._items=d)}},viewQuery:function(e,n){if(e&1&&O(He,7)(Oe,7)(Ve,7)(Qe,5)(ze,5),e&2){let i;u(i=_())&&(n._tabListContainer=i.first),u(i=_())&&(n._tabList=i.first),u(i=_())&&(n._tabListInner=i.first),u(i=_())&&(n._nextPaginator=i.first),u(i=_())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&x("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",C]},features:[H],ngContentSelectors:gt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(Z(),r(0,"div",5,0),h("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(d){return n._handlePaginatorPress("before",d)})("touchend",function(){return n._stopInterval()}),y(2,"div",6),s(),r(3,"div",7,1),h("keydown",function(d){return n._handleKeydown(d)}),r(5,"div",8,2),h("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),U(9),s()()(),r(10,"div",10,4),h("mousedown",function(d){return n._handlePaginatorPress("after",d)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),y(12,"div",6),s()),e&2&&(x("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),m(3),x("_mat-animation-noopable",n._animationsDisabled),m(2),w("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),m(5),x("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[mt,Jt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),dn=new B("MAT_TABS_CONFIG"),De=(()=>{class a extends pt{_host=l(_t);_ngZone=l(N);_centeringSub=D.EMPTY;_leavingSub=D.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(j(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=R({type:a,selectors:[["","matTabBodyHost",""]],features:[H]})}return a})(),_t=(()=>{class a{_elementRef=l(S);_dir=l(bt,{optional:!0});_ngZone=l(N);_injector=l(at);_renderer=l(it);_diAnimationsDisabled=tt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=D.EMPTY;_position;_previousPosition;_onCentering=new k;_beforeCentering=new k;_afterLeavingCenter=new k;_onCentered=new k(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=l(X);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),q(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),q(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&O(De,5)(We,5),e&2){let i;u(i=_())&&(n._portalHost=i.first),u(i=_())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&w("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(r(0,"div",1,0),rt(2,je,0,0,"ng-template",2),s()),e&2&&x("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[De,xe],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),Ee=(()=>{class a{_elementRef=l(S);_changeDetectorRef=l(X);_ngZone=l(N);_tabsSubscription=D.EMPTY;_tabLabelSubscription=D.EMPTY;_tabBodySubscription=D.EMPTY;_diAnimationsDisabled=tt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Et;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new k;focusChange=new k;animationDone=new k;selectedTabChange=new k(!0);_groupId;_isServer=!l(ct).isBrowser;constructor(){let t=l(dn,{optional:!0});this._groupId=l(ne).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(j(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ft;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=W(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&K(i,vt,5),e&2){let d;u(d=_())&&(n._allTabs=d)}},viewQuery:function(e,n){if(e&1&&O(Ge,5)(qe,5)(_t,5),e&2){let i;u(i=_())&&(n._tabBodyWrapper=i.first),u(i=_())&&(n._tabHeader=i.first),u(i=_())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(w("mat-align-tabs",n.alignTabs),Y("mat-"+(n.color||"primary")),Ht("--mat-tab-animation-duration",n.animationDuration),x("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",C],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",C],selectedIndex:[2,"selectedIndex","selectedIndex",J],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",J],disablePagination:[2,"disablePagination","disablePagination",C],disableRipple:[2,"disableRipple","disableRipple",C],preserveContent:[2,"preserveContent","preserveContent",C],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Q([{provide:Pe,useExisting:a}])],ngContentSelectors:gt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(Z(),r(0,"mat-tab-header",3,0),h("indexFocused",function(d){return n._focusChanged(d)})("selectFocusedIndex",function(d){return n.selectedIndex=d}),st(2,Ke,8,17,"div",4,ot),s(),E(4,Ye,1,0),r(5,"div",5,1),st(7,Xe,1,10,"mat-tab-body",6,ot),s()),e&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),At("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),m(2),lt(n._tabs),m(2),L(n._isServer?4:-1),m(),x("_mat-animation-noopable",n._animationsDisabled()),m(2),lt(n._tabs))},dependencies:[ln,Re,Yt,mt,pt,_t],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),ft=class{index;tab};var Le=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=Bt({type:a});static \u0275inj=Pt({imports:[ie]})}return a})();function mn(a,o){if(a&1){let t=A();r(0,"h1"),c(1,"Reset your password"),s(),r(2,"form",4),h("ngSubmit",function(){f(t);let n=b();return g(n.sendReset())}),r(3,"mat-form-field",5)(4,"mat-label"),c(5,"Email"),s(),y(6,"input",6),r(7,"mat-error"),c(8,"Enter a valid email"),s()(),r(9,"div",7)(10,"button",8),c(11,"Send reset link"),s(),r(12,"button",9),h("click",function(){f(t);let n=b();return g(n.setMode("signin"))}),c(13,"Back to sign in"),s()()()}if(a&2){let t=b();m(2),p("formGroup",t.forgotForm),m(8),p("disabled",t.busy()||!t.captchaToken())}}function bn(a,o){if(a&1){let t=A();r(0,"mat-tab-group",10),h("selectedIndexChange",function(n){f(t);let i=b();return g(i.setMode(n===1?"signup":"signin"))}),r(1,"mat-tab",11)(2,"form",4),h("ngSubmit",function(){f(t);let n=b();return g(n.signIn())}),r(3,"mat-form-field",5)(4,"mat-label"),c(5,"Email"),s(),y(6,"input",6),r(7,"mat-error"),c(8,"Enter a valid email"),s()(),r(9,"mat-form-field",5)(10,"mat-label"),c(11,"Password"),s(),y(12,"input",12),r(13,"mat-error"),c(14,"Required"),s()(),r(15,"div",7)(16,"button",8),c(17,"Sign in"),s(),r(18,"button",9),h("click",function(){f(t);let n=b();return g(n.setMode("forgot"))}),c(19,"Forgot password?"),s()()()(),r(20,"mat-tab",13)(21,"form",4),h("ngSubmit",function(){f(t);let n=b();return g(n.signUp())}),r(22,"mat-form-field",5)(23,"mat-label"),c(24,"Name"),s(),y(25,"input",14),r(26,"mat-error"),c(27,"Required"),s()(),r(28,"mat-form-field",5)(29,"mat-label"),c(30,"Email"),s(),y(31,"input",6),r(32,"mat-error"),c(33,"Enter a valid email"),s()(),r(34,"mat-form-field",5)(35,"mat-label"),c(36,"Mobile phone (optional)"),s(),y(37,"input",15),r(38,"mat-hint"),c(39,"So we can text you when your proposal is ready."),s(),r(40,"mat-error"),c(41,"Enter a valid phone number"),s()(),r(42,"mat-form-field",5)(43,"mat-label"),c(44,"Password"),s(),y(45,"input",16),r(46,"mat-hint"),c(47,"At least 8 characters, with letters and numbers."),s(),r(48,"mat-error"),c(49,"At least 8 characters, with letters and numbers"),s()(),r(50,"div",7)(51,"button",8),c(52,"Create account"),s()()()()()}if(a&2){let t=b();p("selectedIndex",t.mode()==="signup"?1:0),m(2),p("formGroup",t.signInForm),m(14),p("disabled",t.busy()||!t.captchaToken()),m(5),p("formGroup",t.signUpForm),m(30),p("disabled",t.busy()||!t.captchaToken())}}function pn(a,o){a&1&&(r(0,"p"),c(1),s()),a&2&&(m(),V(o))}function hn(a,o){a&1&&(r(0,"p",3),c(1),s()),a&2&&(m(),V(o))}var Be=class a{fb=l(Ut);sb=l(zt);router=l(Qt);next=Ot();mode=M("signin");busy=M(!1);error=M(null);info=M(null);captcha=Vt.required(et);captchaToken=M(null);signInForm=this.fb.group({email:["",[v.required,v.email]],password:["",v.required]});signUpForm=this.fb.group({full_name:["",[v.required,v.maxLength(200)]],email:["",[v.required,v.email]],phone:["",ye],password:["",[v.required,v.minLength(8),v.pattern(/(?=.*[A-Za-z])(?=.*\d)/)]]});forgotForm=this.fb.group({email:["",[v.required,v.email]]});setMode(o){o!==this.mode()&&(this.mode.set(o),this.error.set(null),this.info.set(null))}signIn(){return this.run(this.signInForm,async({email:o,password:t})=>{await this.sb.signIn(o,t,this.captchaToken());let e=this.next(),n=e?.startsWith("/")&&!e.startsWith("//")?e:this.sb.isOwner()?"/owner":"/my-requests";await this.router.navigateByUrl(n)})}signUp(){return this.run(this.signUpForm,async({full_name:o,email:t,phone:e,password:n})=>{await this.sb.signUp({email:t,password:n,fullName:o.trim(),phone:ve(e)??null,captchaToken:this.captchaToken()})?(this.mode.set("signin"),this.signInForm.patchValue({email:t}),this.info.set(`Check ${t} for a confirmation link, then sign in. Requests you've already sent from this email will be in your account.`)):await this.router.navigateByUrl("/my-requests")})}sendReset(){return this.run(this.forgotForm,async({email:o})=>{await this.sb.sendPasswordReset(o,this.captchaToken()),this.info.set(`If an account exists for ${o}, a reset link is on its way.`)})}async run(o,t){if(o.invalid){o.markAllAsTouched();return}if(!this.captchaToken()){this.error.set("Please complete the spam check.");return}this.busy.set(!0),this.error.set(null),this.info.set(null);try{await t(o.getRawValue())}catch(e){this.error.set(ge(e))}finally{this.busy.set(!1),this.captcha().reset()}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=P({type:a,selectors:[["app-login"]],viewQuery:function(t,e){t&1&&Ft(e.captcha,et,5),t&2&&Nt()},inputs:{next:[1,"next"]},decls:8,vars:3,consts:[[1,"auth"],["mat-stretch-tabs","",3,"selectedIndex"],[3,"token"],[1,"error-text"],[3,"ngSubmit","formGroup"],[1,"full-width"],["matInput","","type","email","formControlName","email","autocomplete","email"],[1,"row"],["matButton","filled","type","submit",3,"disabled"],["matButton","","type","button",3,"click"],["mat-stretch-tabs","",3,"selectedIndexChange","selectedIndex"],["label","Sign in"],["matInput","","type","password","formControlName","password","autocomplete","current-password"],["label","Create account"],["matInput","","formControlName","full_name","autocomplete","name"],["matInput","","type","tel","formControlName","phone","autocomplete","tel"],["matInput","","type","password","formControlName","password","autocomplete","new-password"]],template:function(t,e){if(t&1&&(r(0,"div",0)(1,"mat-card")(2,"mat-card-content"),E(3,mn,14,2)(4,bn,53,5,"mat-tab-group",1),r(5,"app-captcha",2),h("token",function(i){return e.captchaToken.set(i)}),s(),E(6,pn,2,1,"p"),E(7,hn,2,1,"p",3),s()()()),t&2){let n,i;m(3),L(e.mode()==="forgot"?3:4),m(3),L((n=e.info())?6:-1,n),m(),L((i=e.error())?7:-1,i)}},dependencies:[Kt,qt,Wt,jt,Gt,Zt,$t,oe,re,de,se,le,ue,he,me,pe,be,fe,_e,Le,vt,Ee,et],styles:[".auth[_ngcontent-%COMP%]{max-width:440px;margin:24px auto}form[_ngcontent-%COMP%]{padding-top:16px}"]})};export{Be as LoginPage};
