function t(){const t="https://crossup-scripts-ybwlfr5nuq-uc.a.run.app",e="https://d37wgocqm7tv7v.cloudfront.net.";let a=null,n=null,o=!1;const r=[];let i=!1,s=!1,c=0;const l=[];let d=!1;const u=document.querySelector("body"),p=document.createElement("iframe"),m=document.createElement("div");m.style="\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    overflow: hidden;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n    z-index: 99999999999999999;\n",m.classList.add("display-none"),m.classList.add("cross-up-app-container");const h=document.createElement("div");h.style="\n    position: relative;\n    ";const y=document.createElement("img");y.src="",y.style="\n    position: absolute;\n    top: -2em;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 6em;\n    z-index: 99999999\n    ",y.classList.add("cross-up-app-header-img"),y.classList.add("display-none"),p.style="\n    width: 100%;\n    max-width: 400px;\n    width: 95vw;\n    height: 100vh;\n    max-height: 80vh;\n    border-radius: 10px;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n    background: white;\n    overflow: hidden;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n",p.classList.add("cross-up-app");const f=document.createElement("style");function g(){scrollPosition=window.pageYOffset,document.body.style.overflow="hidden",document.body.style.top=`-${scrollPosition}px`}function S(){document.body.style.overflow="",document.body.style.top="",document.body.style.overflow="",window.scrollTo(0,scrollPosition)}function w(){const t=[];return[...document.getElementsByClassName("js-cart-item")].forEach((e=>{t.push(e.dataset.store?e.dataset.store.split("m-")[1]:e.dataset.itemId,e instanceof HTMLDivElement?e.querySelector("a").href.split("variant=")[1]:null)})),t}function v(t,e){e.forEach((e=>{e.productId.toString()===t.offer.shooter.id.toString()&&(t.offer.shooter.quantity=e.quantity)}))}f.innerHTML="\n    .cross-up-app::-webkit-scrollbar {\n        display: none;\n    }\n    .cross-up-app {\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n    }\n    .display-none {\n        display: none !important;\n    }\n\n    #modal-cart{\n       z-index: 999999999;\n    }\n  \n  ",h.appendChild(p),h.appendChild(y),m.appendChild(h),u.appendChild(m),u.prepend(f),useJquery().then((u=>{const h=document.getElementsByClassName("js-ajax-cart-panel"),f=document.getElementsByClassName("ajax-cart").length>0?document.getElementsByClassName("ajax-cart")[0]:document.getElementsByClassName("js-ajax-cart-panel").length>0?document.getElementsByClassName("js-ajax-cart-panel")[0]:null;if(h.length>0){LS.on(LS.events.productAddedToCart,(async(t,e)=>{if(e||(e=t.detail),t&&t.detail){if(t.detail.quantity_added<=0)return;if(t.detail.cart_item.id){if(l.includes(t.detail.cart_item.id))return;l.push(t.detail.cart_item.id)}}const{cart_item:n,quantity_added:r}=e,i=(n.unit_price,e.cart_item.product.id),{variant_id:s}=e.cart_item,{quantity:c}=e.cart_item;if(o)o=!1;else{const t={productId:parseInt(i,10),variantId:parseInt(s,10),quantity:parseInt(c,10)};try{const e=await E(LS.store.id,[t],void 0,[...new Set(w())]);if(200!==e.status)return;a=e.data,v(a,[t]),b(e.data,"NEW_OFFER")}catch(t){}}}));let t=document.querySelectorAll("#go-to-checkout");0===t.length&&(t=document.querySelectorAll('input[name="go_to_checkout"]'));let e=t[0];t.length>1&&([e]=t),(0===h.length&&"cart"===LS.template||"cubo"===LS.theme.code&&"cart"===LS.template)&&([btnCheckoutOculto,e]=document.querySelectorAll('input[name="go_to_checkout"]')),e.addEventListener("click",(async t=>{if(i)return void C();t.preventDefault();let e=q([...document.getElementsByClassName("js-cart-item")]);e=L(e);try{const t=await E(LS.store.id,e,"checkout",[...new Set(w())]);200!==t.status?C():(a=t.data,v(a,e),b(t.data,"NEW_OFFER"))}catch(t){C()}}))}else{if(LS.product){const t=LS.product.id;let e=LS.variants[0];e&&LS.registerOnChangeVariant((t=>e=t)),function(){const t=LS.product.id,e=document.querySelector(`form[data-store="product-form-${t}"]`);let a=e.getElementsByClassName("js-insta-variant");if(a.length>0)a=[...a],a.forEach((t=>{t.click()}));else try{u(e).find(".js-variation-option").change()}catch(t){}}(),u(".js-addtocart").on("click",(async o=>{o.preventDefault();const r=o.currentTarget.closest("form");n=j(r);const i={productId:parseInt(t,10),variantId:e?.id?parseInt(e?.id,10):void 0};try{const t=await E(LS.store.id,[i],void 0,[...new Set(w())]);200!==t.status?(await I(n),window.location.href="/comprar"):(a=t.data,v(a,[i]),b(a,"NEW_OFFER"))}catch(o){await I(n),window.location.href="/comprar"}}))}else{let t="";LS.registerOnChangeVariant((e=>t=e)),_();let e=window.location.search;addEventListener("scroll",(()=>{const t=window.location.search;t!==e&&(e=t,_())})),u(".js-addtocart").on("click",(async e=>{e.preventDefault();const o=e.currentTarget.closest("form");let r=e.target.dataset.componentValue;r||(r=o.querySelector("input[name='add_to_cart']").value);const i={productId:parseInt(r,10),variantId:t?.id?parseInt(t?.id,10):void 0};n=j(o);try{const t=await E(LS.store.id,[i],void 0,[...new Set(w())]);200!==t.status?(await I(n),window.location.href="/comprar"):(a=t.data,v(a,[i]),b(a,"NEW_OFFER"))}catch(e){await I(n),window.location.href="/comprar"}}))}if(0===h.length&&"cart"===LS.template||"cubo"===LS.theme.code&&"cart"===LS.template){const t=document.querySelector("#go-to-checkout")?document.querySelector("#go-to-checkout"):document.querySelector('input[name="go_to_checkout"]');t.addEventListener("click",(async function e(n){if(n.preventDefault(),i)return t.removeEventListener("click",e),void t.click();let o=q([...document.getElementsByClassName("js-cart-item")]);o=L(o);try{const n=await E(LS.store.id,o,"checkout",[...new Set(w())],2e3);200!==n.status?(t.removeEventListener("click",e),t.click()):(a=n.data,v(a,o),t.removeEventListener("click",e),b(n.data,"NEW_OFFER"))}catch(n){t.removeEventListener("click",e),t.click()}}))}}async function E(e=0,n=[],o="cart",r=[],i=5e3){try{const s=await Promise.race([fetch(`${t}/offers/search_from_store`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:n,storeId:`${e}`,showingPlace:`${o}`,origin:"Tiendanube",cartItems:r.filter((t=>null!=t)).map((t=>t?.toString()))})}),new Promise(((t,e)=>setTimeout((()=>e(new Error("Timeout"))),i)))]);if(!s.ok)return{status:s.status,data:await s.json()};const c=await s.json();return a=c.data,c}catch(t){return{status:"Timeout"===t.message?500:t.status||400,data:{message:t.message}}}}function _(){let t=document.querySelectorAll('a[data-target="#quickshop-modal"]');0===t.length&&(t=document.querySelectorAll('a[data-toggle="#quickshop-modal"]'),0===t.length&&(t=document.querySelectorAll('a[data-component="product-list-item.add-to-cart"]'),0===t.length&&(t=document.querySelectorAll('a[data-component="product-list-item.show-add-to-cart"]'),0===t.length&&(t=document.querySelectorAll("a.js-item-buy-open"))))),t&&t.length>0&&t.forEach((t=>{t.addEventListener("click",(()=>{let e=t.parentElement.parentElement.dataset.quickshopId?.split("quick")[1];e||(e=t.parentElement.parentElement.parentElement.dataset.store?.split("image-")[1],e||(e=t.getAttribute("data-component-value"),e||(e=t.parentElement.parentElement.parentElement.parentElement.dataset.productId,e||(e=t.parentElement.parentElement.parentElement.dataset.store?.split("info-")[1]))));const a=document.querySelector(`input[value="${e}"]`);if(a.parentElement.getElementsByClassName("js-insta-variant").length>0){let t=a.parentElement.getElementsByClassName("js-insta-variant");t=[...t],t.forEach((t=>{t.click()}))}else u(a.parentElement).find(".js-variation-option").change()}))}))}function L(t){const e=[];return t.forEach((t=>{JSON.stringify(e).includes(JSON.stringify(t))||e.push(t)})),e}async function I(t,e,a){try{t.push({name:"add_to_cart_enhanced",value:1});const n=await u.ajax({method:"POST",url:"/comprar/",data:t});if(!1===n.sucess)return null;const o=n.cart.id,r=100*parseFloat(n.cart.subtotal);jQuery.fancybox&&jQuery.fancybox.close(),LS.updateCartEnhanced(n.cart,e,a,n.html_cart_items),LS.refreshTotals(n),LS.freeShippingLabelUpdate(n.free_shipping,!0),jQuery(".js-ajax-cart-shipping .shipping-calculator-response, #ajax-cart-shipping .js-shipping-calculator-response").hide().empty(),u(".js-empty-ajax-cart").hide();return window.matchMedia("(max-width: 700px)").matches&&u(".backdrop").hide(),u(".js-visible-on-cart-filled").show(),LS.trigger(LS.events.productAddedToCart,{cart_item:n.item,quantity_added:n.quantity_added}),LS.updateCartShipping=()=>{u(".js-shipping-calculator-with-zipcode").length&&u("#cart-shipping-container .js-shipping-input").val()?(u("#cart-shipping-container").show(),LS.calculateShippingOnCart()):LS.updateShippingOnAddToCart()},LS.updateShippingOnShippableCart("addProduct"),LS.cart.id=o,LS.cart.subtotal=r,n.item}catch(t){return null}}function q(t){const e=[];return t.forEach((t=>{let a={productId:null,variantId:null,quantity:1,itemId:null};t.dataset&&(t.dataset.itemId&&(a.itemId=t.dataset.itemId),t.dataset.store&&(a.productId=parseFloat(t.dataset.store.split("m-")[1])));let n=t.querySelector(".cart-item-name a")?t.querySelector(".cart-item-name a")?.href:t.querySelector(".cart-item-name")?.href;n||(n=t.querySelector("a")?t.querySelector("a")?.href:t.querySelector(".cart-item-name")?.href),n&&(a.variantId=parseFloat(n.split("=")[1])),t.querySelector(`input[name="quantity[${t.dataset.itemId}]"]`)&&(a.quantity=parseInt(t.querySelector(`input[name="quantity[${t.dataset.itemId}]"]`).value,10)),(a.productId||a.variantId)&&e.push({productId:a.productId?a.productId.toString():"",variantId:a.variantId?a.variantId.toString():"",quantity:a.quantity?a.quantity:1,itemId:a.itemId?a.itemId.toString():""})})),e}function b(t,a,n=!1){let o=!0;if("NEW_OFFER"===a){o=!1,m.addEventListener("click",(async t=>{t.target===m&&await k()})),c++,s=!0,t.hasCartId=!!LS.cart?.id;const{frame:n}=t.offer;if(n.hasFrame&&n.props){const e=n.props,{header:a,borders:o}=e;if(a.hasHeader){y.classList.remove("display-none");const e=t.offer.mainLanguage??LS.lang?.slice(0,2)??"es";switch(y.src=a.src[e],y.style.height=a.height??"6em",y.style.top=a.relativeTop??"-2em",y.style.transform="translateX(-50%)",a.location){case"top-left":y.style.left="10%";break;case"top-center":y.style.left="50%";break;case"top-right":y.style.left="90%"}}if(o.hasBorders){const{mainColor:t}=o;t&&(p.style.border=`10px solid ${t}`)}}else y.classList.add("display-none"),p.style.border="none";p.src&&""!==p.src&&"about:blank"!==p.src?o=!0:(p.src=e,p.onload=()=>{m.classList.remove("display-none"),g();let e=setInterval((()=>{d?clearInterval(e):p.contentWindow.postMessage(JSON.stringify({type:`${a}`,payload:t}),"*")}),1e3)})}else m.removeEventListener("click",(async t=>{t.target===m&&await k()}));o&&p.contentWindow.postMessage(JSON.stringify({type:`${a}`,payload:t}),"*"),n?(m.classList.add("display-none"),s=!1,S()):o&&(m.classList.remove("display-none"),g())}async function k(){a&&(b("CERRANDO...","ON_ADD_TO_CART_TEXT"),await N(a.offer,!1,{}),n&&await I(n),O(),a=null,0===h.length&&"cart"!==LS.template&&(window.location.href="/comprar/"),n=null)}function T(t){const e=[{name:"quantity",value:`${t.quantity}`},{name:"add_to_cart",value:t.variant.product_id?`${t.variant.product_id}`:`${t.variant.productId}`}],a=t.variant.attr??{},n=Object.keys(a),o=Object.values(a);for(let t=0;t<n.length;t++)e.push({name:`variation[${t}]`,value:o[t]});return e}function j(t){const e=[...t.querySelectorAll(".selected")].length>0?[...t.querySelectorAll(".selected")]:[...t.querySelectorAll("option:checked")],a=t.querySelector('input[name="quantity"]'),n=t.querySelector('input[name="add_to_cart"]'),o={quantity:a?.value??1,variant:{product_id:n.value,attr:{}}};for(let t=0;t<e.length;t++){const a=e[t].parentNode,n=a?[...a.classList]:[];(null==a||n.includes("js-shipping-country-select")||n.includes("js-modal-shipping-country"))&&a||(o.variant.attr[t]=e[t].dataset.option??e[t].value)}return T(o)}function O(){if(S(),d=!1,b({},"RESET_ALL",!0),"checkout"===a.offer.showingPlace.trim().toLowerCase()){i=!0;const t=document.querySelector("#go-to-checkout")?document.querySelector("#go-to-checkout"):document.querySelector('input[name="go_to_checkout"]');t?t.click():C()}}async function N(e,a,n){const o=n.variant??e.target.variants[0];let i=void 0!==n.quantity&&null!==n.quantity?n.quantity:1;a||(i=1);const s=o.promotionalPrice??o.price,c=e.shooter.variants[0].promotionalPrice??e.shooter.variants[0].price;let l;s&&c&&(l=e.isUpsell?s*i-c*e.shooter.quantity>0?s*i-c*e.shooter.quantity:s-c>0?s-c:0:s*i),!e.isUpsell&&c&&(l=s*i),a&&(e.shooter.profit=Math.max(l,0));let d=sessionStorage.getItem("cartId")||localStorage.getItem("cartId")||function(t){const e=`; ${document.cookie}`.split(`; ${t}=`);if(2===e.length)return e.pop().split(";").shift()}("cartId");d||(d=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))),LS.cart.id||(localStorage.setItem("cartId",d),document.cookie=`cartId=${d}`,sessionStorage.setItem("cartId",d));const u=LS.cart.id??d,p=LS.store.id,m=LS.cart.subtotal/100,h="number"!=typeof l||isNaN(l)?0:l,y=e.shooter&&"number"==typeof e.shooter.quantity&&!isNaN(e.shooter.quantity)?e.shooter.quantity:1,f={offerId:e._id,target:e.target,shooter:e.shooter,targetVariant:o.id??null,accepted:a,quantity:i,orderId:u.toString(),cartTotal:m,storeId:p,origin:"Tiendanube",profitPrevious:h??0,shooterQuantity:y??1},g=`${t}/interactions`;let S=!1;if(r.forEach((t=>{t.offerId===f.offerId&&t.orderId===f.orderId&&(S=!0)})),S)return;const w=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),v=await w.json();r.push(v.data.interaction)}function C(){let t=f,e=t?.querySelector(".js-ajax-cart-submit");if(!e){if(t=h&&h.length>0?h[0]:null,!t)return;e=t.querySelector(".js-ajax-cart-submit")}const a=t?.querySelector('input[type="submit"]'),n=a?.outerHTML;a?.remove(),e&&(e.innerHTML=n);const o=t.querySelector('input[type="submit"]');o?.click()}window.addEventListener("message",(async function(t){const{data:r}=t;if(!(t=>{try{JSON.parse(t)}catch(t){return!1}return!0})(r))return;if(t.origin!==e)return;const i=JSON.parse(r);switch(i.type){case"ADD_TO_CART":{const{payload:t}=i;await N(a.offer,!0,t),o=!0;const e=T(t);b("AGREGANDO...","ON_ADD_TO_CART_TEXT"),n?a.offer.isUpsell?await I(e):(await I(e),await I(n)):(await I(e),a.offer.isUpsell&&await async function(t,e){const a=[...document.getElementsByClassName("js-cart-item")];if(t.isShooterByProduct){const n=t.shooters.filter((t=>t!==e)),o=q(a);n.forEach((t=>{o.forEach((e=>{const a=e.itemId;e.productId!==t&&e.variantId!==t||setTimeout((()=>{LS.removeItem(a,!0)}),[1e3])}))}))}else{let e=t.shooter.id;LS.product&&(e=LS.product.id),a.forEach((t=>{const a=t.dataset.itemId;t.dataset.store.includes(e)&&setTimeout((()=>{LS.removeItem(a,!0)}),[1e3])}))}}(a.offer,t.variant.id)),O(),0===h.length&&"cart"!==LS.template&&(window.location.href="/comprar/"),a=null,n=null;break}case"IGNORE_OFFER":b("CERRANDO...","ON_ADD_TO_CART_TEXT"),await N(a.offer,!1,{}),n&&await I(n),O(),a=null,0===h.length&&"cart"!==LS.template&&(window.location.href="/comprar/"),n=null;break;case"ERROR":b("CERRANDO...","ON_ADD_TO_CART_TEXT"),n&&await I(n),O(),a=null,0===h.length&&"cart"!==LS.template&&(window.location.href="/comprar/"),n=null;break;case"WATCH_MORE":{const t=a.offer.target?.urls?.canonicalURL??a.offer.targets[0].urls.canonicalURL;b("REDIRIGIENDO...","ON_ADD_TO_CART_TEXT"),await N(a.offer,!1,{}),O(),n&&await I(n),window.location.href=t,a=null,n=null;break}case"RESIZE":{const{payload:t}=i,{msg:e}=t,{height:a}=e;if(!s&&c>0)break;const n=p.style.height;let o;const r="mobile"===function(){const{userAgent:t}=navigator;if(/mobile/i.test(t))return"mobile";return"desktop"}();if(n){o=n.includes("vh")?parseInt(n.split("vh")[0],10)*(window.innerHeight/100):parseInt(n.slice(0,-2),10);if(Math.abs(a-o)/o<.01)break}a>0?window.innerHeight>=1300?p.style.height="45em":a>.8*window.innerHeight?p.style.height="80vh":r&&a<.6*window.innerHeight?p.style.height="75vh":p.style.height=r?`${a}px`:"45em":window.innerHeight>=1300?p.style.height="45em":p.style.height="100vh";break}case"MESSAGE_READ":d=!0}}))}))}t();