let a4=`Object`,a2=`string`,a6=4,T=`utf-8`,a9=`cors`,a0=`number`,aa=`error`,S=`undefined`,$=3,Y=`function`,a7=`same-origin`,W=0,_=1,V=null,a8=`default`,ab=2,a1=`boolean`,a3=Array,ac=Date,U=Error,a5=FinalizationRegistry,ad=Object,af=Object.getPrototypeOf,ae=Reflect,X=Uint8Array,Z=undefined;var j=(()=>{if(i===V||i.byteLength===W){i=new X(g.memory.buffer)};return i});var x=((a,b)=>{g._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc5b4503d72580bab(a,b)});var E=((a,b)=>{a=a>>>W;const c=r();const d=[];for(let e=a;e<a+ a6*b;e+=a6){d.push(g.__wbindgen_export_2.get(c.getUint32(e,!0)))};g.__externref_drop_slice(a,b);return d});var o=((a,b,c)=>{if(c===Z){const c=m.encode(a);const d=b(c.length,_)>>>W;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,_)>>>W;const f=j();let g=W;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==W){a=a.slice(g)};e=c(e,d,d=g+ a.length*$,_)>>>W;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,_)>>>W};l=g;return e});var O=((a,b)=>{});var D=(a=>()=>{throw new U(`${a} is not defined`)});var r=(()=>{if(q===V||q.buffer.detached===!0||q.buffer.detached===Z&&q.buffer!==g.memory.buffer){q=new DataView(g.memory.buffer)};return q});var A=((a,b,c)=>{g.closure3575_externref_shim(a,b,c)});var w=((a,b,c,d)=>{const e={a:a,b:b,cnt:_,dtor:c};const f=(...a)=>{e.cnt++;const b=e.a;e.a=W;try{return d(b,e.b,...a)}finally{if(--e.cnt===W){g.__wbindgen_export_3.get(e.dtor)(b,e.b);t.unregister(e)}else{e.a=b}}};f.original=e;t.register(f,e,e);return f});var s=(a=>{const b=typeof a;if(b==a0||b==a1||a==V){return `${a}`};if(b==a2){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==V){return `Symbol`}else{return `Symbol(${b})`}};if(b==Y){const b=a.name;if(typeof b==a2&&b.length>W){return `Function(${b})`}else{return `Function`}};if(a3.isArray(a)){const b=a.length;let c=`[`;if(b>W){c+=s(a[W])};for(let d=_;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>_){d=c[_]}else{return toString.call(a)};if(d==a4){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a4}};if(a instanceof U){return `${a.name}: ${a.message}\n${a.stack}`};return d});var P=((a,b)=>{g=a.exports;R.__wbindgen_wasm_module=b;q=V;i=V;g.__wbindgen_start();return g});var k=((a,b)=>{a=a>>>W;return h.decode(j().subarray(a,a+ b))});var Q=(a=>{if(g!==Z)return g;if(typeof a!==S){if(af(a)===ad.prototype){({module:a}=a)}else{console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`)}};const b=N();O(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const c=new WebAssembly.Instance(a,b);return P(c,a)});var z=((a,b,c)=>{g.closure3553_externref_shim(a,b,c)});var M=(async(a,b)=>{if(typeof Response===Y&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===Y){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var B=(a=>{const b=g.__externref_table_alloc();g.__wbindgen_export_2.set(b,a);return b});function C(a,b){try{return a.apply(this,b)}catch(a){const b=B(a);g.__wbindgen_exn_store(b)}}var R=(async(a)=>{if(g!==Z)return g;if(typeof a!==S){if(af(a)===ad.prototype){({module_or_path:a}=a)}else{console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)}};if(typeof a===S){a=new URL(`zenith-ui_bg.wasm`,import.meta.url)};const b=N();if(typeof a===a2||typeof Request===Y&&a instanceof Request||typeof URL===Y&&a instanceof URL){a=fetch(a)};O(b);const {instance:c,module:d}=await M(await a,b);return P(c,d)});var y=((a,b,c)=>{g.closure3525_externref_shim(a,b,c)});var p=(a=>a===Z||a===V);var v=((a,b,c)=>{g.closure3411_externref_shim(a,b,c)});var N=(()=>{const h={};h.wbg={};h.wbg.__wbg_jschangebg_ce54f6dccc76880e=((b,c)=>{a(k(b,c))});h.wbg.__wbg_jsdropbg_266d13f5cb84aa4b=((a,c)=>{b(k(a,c))});h.wbg.__wbg_gettimezone_5d3198d476141a23=(a=>{const b=c();const d=o(b,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_apiprefix_63224829278869c3=(a=>{const b=d();const c=o(b,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,c,!0)});h.wbg.__wbindgen_is_undefined=(a=>{const b=a===Z;return b});h.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return c});h.wbg.__wbg_scroll_8da658b3703f8fc8=((a,b)=>{e(a,b!==W)});h.wbg.__wbindgen_number_new=(a=>{const b=a;return b});h.wbg.__wbindgen_jsval_eq=((a,b)=>{const c=a===b;return c});h.wbg.__wbindgen_cb_drop=(a=>{const b=a.original;if(b.cnt--==_){b.a=W;return !0};const c=!1;return c});h.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const c=b.__yew_listener_id;r().setInt32(a+ a6*_,p(c)?W:c,!0);r().setInt32(a+ a6*W,!p(c),!0)});h.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{a.__yew_listener_id=b>>>W});h.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const c=b.__yew_subtree_id;r().setInt32(a+ a6*_,p(c)?W:c,!0);r().setInt32(a+ a6*W,!p(c),!0)});h.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{a.__yew_subtree_id=b>>>W});h.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const c=b.__yew_subtree_cache_key;r().setInt32(a+ a6*_,p(c)?W:c,!0);r().setInt32(a+ a6*W,!p(c),!0)});h.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{a.__yew_subtree_cache_key=b>>>W});h.wbg.__wbg_error_f851667af71bcfc6=((a,b)=>{let c;let d;try{c=a;d=b;console.error(k(a,b))}finally{g.__wbindgen_free(c,d,_)}});h.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new U();return a});h.wbg.__wbg_stack_658279fe44541cf6=((a,b)=>{const c=b.stack;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbindgen_string_get=((a,b)=>{const c=b;const d=typeof c===a2?c:Z;var e=p(d)?W:o(d,g.__wbindgen_malloc,g.__wbindgen_realloc);var f=l;r().setInt32(a+ a6*_,f,!0);r().setInt32(a+ a6*W,e,!0)});h.wbg.__wbg_setTimeout_7d81d052875b0f4f=function(){return C(((a,b)=>{const c=setTimeout(a,b);return c}),arguments)};h.wbg.__wbg_clearTimeout_541ac0980ffcef74=typeof clearTimeout==Y?clearTimeout:D(`clearTimeout`);h.wbg.__wbindgen_is_function=(a=>{const b=typeof a===Y;return b});h.wbg.__wbg_queueMicrotask_c5419c06eab41e73=typeof queueMicrotask==Y?queueMicrotask:D(`queueMicrotask`);h.wbg.__wbg_queueMicrotask_848aa4969108a57e=(a=>{const b=a.queueMicrotask;return b});h.wbg.__wbindgen_in=((a,b)=>{const c=a in b;return c});h.wbg.__wbindgen_is_object=(a=>{const b=a;const c=typeof b===`object`&&b!==V;return c});h.wbg.__wbindgen_is_string=(a=>{const b=typeof a===a2;return b});h.wbg.__wbg_crypto_1d1f22824a6a080c=(a=>{const b=a.crypto;return b});h.wbg.__wbg_msCrypto_eb05e62b530a1508=(a=>{const b=a.msCrypto;return b});h.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return C(((a,b)=>{a.getRandomValues(b)}),arguments)};h.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return C(((a,b)=>{a.randomFillSync(b)}),arguments)};h.wbg.__wbg_require_cca90b1a94a0255b=function(){return C((()=>{const a=module.require;return a}),arguments)};h.wbg.__wbg_process_4a72847cc503995b=(a=>{const b=a.process;return b});h.wbg.__wbg_versions_f686565e586dd935=(a=>{const b=a.versions;return b});h.wbg.__wbg_node_104a2ff8d6ea03a2=(a=>{const b=a.node;return b});h.wbg.__wbindgen_error_new=((a,b)=>{const c=new U(k(a,b));return c});h.wbg.__wbindgen_as_number=(a=>{const b=+a;return b});h.wbg.__wbindgen_number_get=((a,b)=>{const c=b;const d=typeof c===a0?c:Z;r().setFloat64(a+ 8*_,p(d)?W:d,!0);r().setInt32(a+ a6*W,!p(d),!0)});h.wbg.__wbindgen_boolean_get=(a=>{const b=a;const c=typeof b===a1?(b?_:W):ab;return c});h.wbg.__wbindgen_jsval_loose_eq=((a,b)=>{const c=a==b;return c});h.wbg.__wbg_getwithrefkey_edc2c8960f0f1191=((a,b)=>{const c=a[b];return c});h.wbg.__wbg_set_f975102236d3c502=((a,b,c)=>{a[b]=c});h.wbg.__wbg_error_a526fb08a0205972=((a,b)=>{var c=E(a,b).slice();g.__wbindgen_free(a,b*a6,a6);console.error(...c)});h.wbg.__wbg_log_7c3433e130418e14=((a,b)=>{var c=E(a,b).slice();g.__wbindgen_free(a,b*a6,a6);console.log(...c)});h.wbg.__wbg_instanceof_Window_6575cd7f1322f82f=(a=>{let b;try{b=a instanceof Window}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_document_d7fa2c739c2b191a=(a=>{const b=a.document;return p(b)?W:B(b)});h.wbg.__wbg_location_72721055fbff81f2=(a=>{const b=a.location;return b});h.wbg.__wbg_history_95935eecf7ecc279=function(){return C((a=>{const b=a.history;return b}),arguments)};h.wbg.__wbg_navigator_3d3836196a5d8e62=(a=>{const b=a.navigator;return b});h.wbg.__wbg_localStorage_6026615061e890bf=function(){return C((a=>{const b=a.localStorage;return p(b)?W:B(b)}),arguments)};h.wbg.__wbg_fetch_bb5ee426272994d9=((a,b)=>{const c=a.fetch(b);return c});h.wbg.__wbg_documentElement_6a55d776a68a7ed5=(a=>{const b=a.documentElement;return p(b)?W:B(b)});h.wbg.__wbg_body_8e909b791b1745d3=(a=>{const b=a.body;return p(b)?W:B(b)});h.wbg.__wbg_createElement_e4523490bd0ae51d=function(){return C(((a,b,c)=>{const d=a.createElement(k(b,c));return d}),arguments)};h.wbg.__wbg_createElementNS_e51a368ab3a64b37=function(){return C(((a,b,c,d,e)=>{const f=a.createElementNS(b===W?Z:k(b,c),k(d,e));return f}),arguments)};h.wbg.__wbg_createTextNode_3b33c97f8ef3e999=((a,b,c)=>{const d=a.createTextNode(k(b,c));return d});h.wbg.__wbg_querySelector_e4353fe90bee0601=function(){return C(((a,b,c)=>{const d=a.querySelector(k(b,c));return p(d)?W:B(d)}),arguments)};h.wbg.__wbg_instanceof_Element_1a81366cc90e70e2=(a=>{let b;try{b=a instanceof Element}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_namespaceURI_dc264d717ce10acb=((a,b)=>{const c=b.namespaceURI;var d=p(c)?W:o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);var e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_clientWidth_600f98ddd2b6cb36=(a=>{const b=a.clientWidth;return b});h.wbg.__wbg_clientHeight_0f17075303285b38=(a=>{const b=a.clientHeight;return b});h.wbg.__wbg_setinnerHTML_559d45055154f1d8=((a,b,c)=>{a.innerHTML=k(b,c)});h.wbg.__wbg_outerHTML_02fdcad893a01b32=((a,b)=>{const c=b.outerHTML;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_removeAttribute_2dc68056b5e6ea3d=function(){return C(((a,b,c)=>{a.removeAttribute(k(b,c))}),arguments)};h.wbg.__wbg_setAttribute_2a8f647a8d92c712=function(){return C(((a,b,c,d,e)=>{a.setAttribute(k(b,c),k(d,e))}),arguments)};h.wbg.__wbg_instanceof_HtmlInputElement_ee25196edbacced9=(a=>{let b;try{b=a instanceof HTMLInputElement}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_setchecked_0b332e38c9022183=((a,b)=>{a.checked=b!==W});h.wbg.__wbg_value_0cffd86fb9a5a18d=((a,b)=>{const c=b.value;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_setvalue_36bcf6f86c998f0a=((a,b,c)=>{a.value=k(b,c)});h.wbg.__wbg_instanceof_WorkerGlobalScope_90a78b9e967b8726=(a=>{let b;try{b=a instanceof WorkerGlobalScope}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_fetch_1fdc4448ed9eec00=((a,b)=>{const c=a.fetch(b);return c});h.wbg.__wbg_new_0969bdfb2ef467fc=function(){return C((()=>{const a=new URLSearchParams();return a}),arguments)};h.wbg.__wbg_setcapture_216080a2de0d127c=((a,b)=>{a.capture=b!==W});h.wbg.__wbg_setonce_9f2ce9d61cf01425=((a,b)=>{a.once=b!==W});h.wbg.__wbg_setpassive_b1f337166a79f6c5=((a,b)=>{a.passive=b!==W});h.wbg.__wbg_target_b0499015ea29563d=(a=>{const b=a.target;return p(b)?W:B(b)});h.wbg.__wbg_bubbles_c48a1056384e852c=(a=>{const b=a.bubbles;return b});h.wbg.__wbg_defaultPrevented_29b1516330ff9603=(a=>{const b=a.defaultPrevented;return b});h.wbg.__wbg_cancelBubble_1fc3632e2ba513ed=(a=>{const b=a.cancelBubble;return b});h.wbg.__wbg_composedPath_d27a772830ab5dd0=(a=>{const b=a.composedPath();return b});h.wbg.__wbg_stopPropagation_8a8fc87824cc6f0b=(a=>{a.stopPropagation()});h.wbg.__wbg_state_ea7aeeadc8019f77=function(){return C((a=>{const b=a.state;return b}),arguments)};h.wbg.__wbg_replaceState_590d6294219f655e=function(){return C(((a,b,c,d,e,f)=>{a.replaceState(b,k(c,d),e===W?Z:k(e,f))}),arguments)};h.wbg.__wbg_value_a8d0480de0da39cf=((a,b)=>{const c=b.value;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_setvalue_b68cd0e5fd3eb17f=((a,b,c)=>{a.value=k(b,c)});h.wbg.__wbg_url_64bd7be331b0ece1=((a,b)=>{const c=b.url;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_newwithstr_5da82c587e5487e5=function(){return C(((a,b)=>{const c=new Request(k(a,b));return c}),arguments)};h.wbg.__wbg_newwithstrandinit_4b92c89af0a8e383=function(){return C(((a,b,c)=>{const d=new Request(k(a,b),c);return d}),arguments)};h.wbg.__wbg_new_a9ae04a5200606a5=function(){return C((()=>{const a=new Headers();return a}),arguments)};h.wbg.__wbg_get_eb7444c0b0eb3db6=function(){return C(((a,b,c,d)=>{const e=b.get(k(c,d));var f=p(e)?W:o(e,g.__wbindgen_malloc,g.__wbindgen_realloc);var h=l;r().setInt32(a+ a6*_,h,!0);r().setInt32(a+ a6*W,f,!0)}),arguments)};h.wbg.__wbg_set_55d5ebe3df237c46=function(){return C(((a,b,c,d,e)=>{a.set(k(b,c),k(d,e))}),arguments)};h.wbg.__wbg_clipboard_e43b3472696043c3=(a=>{const b=a.clipboard;return b});h.wbg.__wbg_href_07ab8fba72e97d85=((a,b)=>{const c=b.href;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_pathname_e2ffbf8ec6773a59=((a,b)=>{const c=b.pathname;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_search_b46ea3b7e7b1866c=((a,b)=>{const c=b.search;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_setsearch_189e8dd0ab28f146=((a,b,c)=>{a.search=k(b,c)});h.wbg.__wbg_hash_cabc4c43a4d7e941=((a,b)=>{const c=b.hash;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_sethash_d89aaa1f20568488=((a,b,c)=>{a.hash=k(b,c)});h.wbg.__wbg_new_1cabf49927794f50=function(){return C(((a,b)=>{const c=new URL(k(a,b));return c}),arguments)};h.wbg.__wbg_newwithbase_ba00450eb5df91c3=function(){return C(((a,b,c,d)=>{const e=new URL(k(a,b),k(c,d));return e}),arguments)};h.wbg.__wbg_writeText_9d976569ea57aa0d=((a,b,c)=>{const d=a.writeText(k(b,c));return d});h.wbg.__wbg_getItem_cc312d333f535f07=function(){return C(((a,b,c,d)=>{const e=b.getItem(k(c,d));var f=p(e)?W:o(e,g.__wbindgen_malloc,g.__wbindgen_realloc);var h=l;r().setInt32(a+ a6*_,h,!0);r().setInt32(a+ a6*W,f,!0)}),arguments)};h.wbg.__wbg_setItem_5afc04d5b6287c76=function(){return C(((a,b,c,d,e)=>{a.setItem(k(b,c),k(d,e))}),arguments)};h.wbg.__wbg_setbody_aa8b691bec428bf4=((a,b)=>{a.body=b});h.wbg.__wbg_setcredentials_a4e661320cdb9738=((a,b)=>{a.credentials=I[b]});h.wbg.__wbg_setheaders_f5205d36e423a544=((a,b)=>{a.headers=b});h.wbg.__wbg_setmethod_ce2da76000b02f6a=((a,b,c)=>{a.method=k(b,c)});h.wbg.__wbg_instanceof_ShadowRoot_6d00cedbc919c9a6=(a=>{let b;try{b=a instanceof ShadowRoot}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_host_4a0b95cc36a45cb6=(a=>{const b=a.host;return b});h.wbg.__wbg_addEventListener_0ac72681badaf1aa=function(){return C(((a,b,c,d,e)=>{a.addEventListener(k(b,c),d,e)}),arguments)};h.wbg.__wbg_removeEventListener_4740f011c11e2737=function(){return C(((a,b,c,d,e)=>{a.removeEventListener(k(b,c),d,e!==W)}),arguments)};h.wbg.__wbg_parentNode_7e7d8adc9b41ce58=(a=>{const b=a.parentNode;return p(b)?W:B(b)});h.wbg.__wbg_parentElement_bf013e6093029477=(a=>{const b=a.parentElement;return p(b)?W:B(b)});h.wbg.__wbg_childNodes_87c5e311593a6192=(a=>{const b=a.childNodes;return b});h.wbg.__wbg_lastChild_d6a3eebc8b3cdd8c=(a=>{const b=a.lastChild;return p(b)?W:B(b)});h.wbg.__wbg_nextSibling_46da01c3a2ce3774=(a=>{const b=a.nextSibling;return p(b)?W:B(b)});h.wbg.__wbg_setnodeValue_ddb802810d61c610=((a,b,c)=>{a.nodeValue=b===W?Z:k(b,c)});h.wbg.__wbg_textContent_389dd460500a44bd=((a,b)=>{const c=b.textContent;var d=p(c)?W:o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);var e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_cloneNode_bd4b7e47afe3ce9f=function(){return C((a=>{const b=a.cloneNode();return b}),arguments)};h.wbg.__wbg_insertBefore_5caa6ab4d3d6b481=function(){return C(((a,b,c)=>{const d=a.insertBefore(b,c);return d}),arguments)};h.wbg.__wbg_removeChild_aa85e67649730769=function(){return C(((a,b)=>{const c=a.removeChild(b);return c}),arguments)};h.wbg.__wbg_href_31116c78f661d5b2=((a,b)=>{const c=b.href;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbg_href_a78089b3b726e0af=function(){return C(((a,b)=>{const c=b.href;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)}),arguments)};h.wbg.__wbg_pathname_f807053b46d955a7=function(){return C(((a,b)=>{const c=b.pathname;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)}),arguments)};h.wbg.__wbg_search_aaeccdb8c45f3efa=function(){return C(((a,b)=>{const c=b.search;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)}),arguments)};h.wbg.__wbg_hash_acef7ae4422b13b0=function(){return C(((a,b)=>{const c=b.hash;const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)}),arguments)};h.wbg.__wbg_instanceof_Response_3c0e210a57ff751d=(a=>{let b;try{b=a instanceof Response}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_status_5f4e900d22140a18=(a=>{const b=a.status;return b});h.wbg.__wbg_headers_1b9bf90c73fae600=(a=>{const b=a.headers;return b});h.wbg.__wbg_arrayBuffer_144729e09879650e=function(){return C((a=>{const b=a.arrayBuffer();return b}),arguments)};h.wbg.__wbg_text_ebeee8b31af4c919=function(){return C((a=>{const b=a.text();return b}),arguments)};h.wbg.__wbg_get_5419cf6b954aa11d=((a,b)=>{const c=a[b>>>W];return c});h.wbg.__wbg_from_91a67a5f04c98a54=(a=>{const b=a3.from(a);return b});h.wbg.__wbg_length_f217bbbf7e8e4df4=(a=>{const b=a.length;return b});h.wbg.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7=(a=>{let b;try{b=a instanceof ArrayBuffer}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_instanceof_Error_a0af335a62107964=(a=>{let b;try{b=a instanceof U}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_message_00eebca8fa4dd7db=(a=>{const b=a.message;return b});h.wbg.__wbg_name_aa32a0ae51232604=(a=>{const b=a.name;return b});h.wbg.__wbg_toString_4b677455b9167e31=(a=>{const b=a.toString();return b});h.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43=((a,b)=>{const c=new Function(k(a,b));return c});h.wbg.__wbg_call_a9ef466721e824f2=function(){return C(((a,b)=>{const c=a.call(b);return c}),arguments)};h.wbg.__wbg_call_3bfa248576352471=function(){return C(((a,b,c)=>{const d=a.call(b,c);return d}),arguments)};h.wbg.__wbg_isSafeInteger_b9dff570f01a9100=(a=>{const b=Number.isSafeInteger(a);return b});h.wbg.__wbg_getTime_41225036a0393d63=(a=>{const b=a.getTime();return b});h.wbg.__wbg_getTimezoneOffset_93f7d384c8ade3be=(a=>{const b=a.getTimezoneOffset();return b});h.wbg.__wbg_new_6fb55f037293191b=(a=>{const b=new ac(a);return b});h.wbg.__wbg_new0_218ada33b570be35=(()=>{const a=new ac();return a});h.wbg.__wbg_entries_c02034de337d3ee2=(a=>{const b=ad.entries(a);return b});h.wbg.__wbg_is_4b64bc96710d6a0f=((a,b)=>{const c=ad.is(a,b);return c});h.wbg.__wbg_new_e69b5f66fda8f13c=(()=>{const a=new ad();return a});h.wbg.__wbg_toString_aea130fe68d19e1a=(a=>{const b=a.toString();return b});h.wbg.__wbg_resolve_0aad7c1484731c99=(a=>{const b=Promise.resolve(a);return b});h.wbg.__wbg_then_748f75edfb032440=((a,b)=>{const c=a.then(b);return c});h.wbg.__wbg_then_4866a7d9f55d8f3e=((a,b,c)=>{const d=a.then(b,c);return d});h.wbg.__wbg_globalThis_05c129bf37fcf1be=function(){return C((()=>{const a=globalThis.globalThis;return a}),arguments)};h.wbg.__wbg_self_bf91bf94d9e04084=function(){return C((()=>{const a=self.self;return a}),arguments)};h.wbg.__wbg_window_52dd9f07d03fd5f8=function(){return C((()=>{const a=window.window;return a}),arguments)};h.wbg.__wbg_global_3eca19bb09e9c484=function(){return C((()=>{const a=global.global;return a}),arguments)};h.wbg.__wbg_instanceof_Uint8Array_df0761410414ef36=(a=>{let b;try{b=a instanceof X}catch(a){b=!1}const c=b;return c});h.wbg.__wbg_new_fec2611eb9180f95=(a=>{const b=new X(a);return b});h.wbg.__wbg_newwithlength_76462a666eca145f=(a=>{const b=new X(a>>>W);return b});h.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730=((a,b,c)=>{const d=new X(a,b>>>W,c>>>W);return d});h.wbg.__wbg_subarray_975a06f9dbd16995=((a,b,c)=>{const d=a.subarray(b>>>W,c>>>W);return d});h.wbg.__wbg_length_9254c4bd3b9f23c4=(a=>{const b=a.length;return b});h.wbg.__wbg_set_ec2fcf81bc573fd9=((a,b,c)=>{a.set(b,c>>>W)});h.wbg.__wbg_get_ef828680c64da212=function(){return C(((a,b)=>{const c=ae.get(a,b);return c}),arguments)};h.wbg.__wbg_set_e864d25d9b399c9f=function(){return C(((a,b,c)=>{const d=ae.set(a,b,c);return d}),arguments)};h.wbg.__wbg_buffer_ccaed51a635d8a2d=(a=>{const b=a.buffer;return b});h.wbg.__wbindgen_debug_string=((a,b)=>{const c=s(b);const d=o(c,g.__wbindgen_malloc,g.__wbindgen_realloc);const e=l;r().setInt32(a+ a6*_,e,!0);r().setInt32(a+ a6*W,d,!0)});h.wbg.__wbindgen_throw=((a,b)=>{throw new U(k(a,b))});h.wbg.__wbindgen_memory=(()=>{const a=g.memory;return a});h.wbg.__wbindgen_closure_wrapper21514=((a,b,c)=>{const d=u(a,b,3412,v);return d});h.wbg.__wbindgen_closure_wrapper23046=((a,b,c)=>{const d=w(a,b,3515,x);return d});h.wbg.__wbindgen_closure_wrapper23191=((a,b,c)=>{const d=w(a,b,3526,y);return d});h.wbg.__wbindgen_closure_wrapper23734=((a,b,c)=>{const d=w(a,b,3554,z);return d});h.wbg.__wbindgen_closure_wrapper24257=((a,b,c)=>{const d=w(a,b,3576,A);return d});h.wbg.__wbindgen_init_externref_table=(()=>{const a=g.__wbindgen_export_2;const b=a.grow(a6);a.set(W,Z);a.set(b+ W,Z);a.set(b+ _,V);a.set(b+ ab,!0);a.set(b+ $,!1)});h[`./snippets/zenith-ui-eb5a35af63045e96/zenith-lib.js`]=f;return h});var u=((a,b,c,d)=>{const e={a:a,b:b,cnt:_,dtor:c};const f=(...a)=>{e.cnt++;try{return d(e.a,e.b,...a)}finally{if(--e.cnt===W){g.__wbindgen_export_3.get(e.dtor)(e.a,e.b);e.a=W;t.unregister(e)}}};f.original=e;t.register(f,e,e);return f});import{js_change_bg as a,js_drop_bg as b,get_timezone as c,api_prefix as d,scroll as e}from"./snippets/zenith-ui-eb5a35af63045e96/zenith-lib.js";import*as f from"./snippets/zenith-ui-eb5a35af63045e96/zenith-lib.js";let g;const h=typeof TextDecoder!==S?new TextDecoder(T,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw U(`TextDecoder not available`)}};if(typeof TextDecoder!==S){h.decode()};let i=V;let l=W;const m=typeof TextEncoder!==S?new TextEncoder(T):{encode:()=>{throw U(`TextEncoder not available`)}};const n=typeof m.encodeInto===Y?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=V;const t=typeof a5===S?{register:()=>{},unregister:()=>{}}:new a5(a=>{g.__wbindgen_export_3.get(a.dtor)(a.a,a.b)});const F=[`blob`,`arraybuffer`];const G=[``,`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`unsafe-url`,a7,`strict-origin`,`strict-origin-when-cross-origin`];const H=[a8,`no-store`,`reload`,`no-cache`,`force-cache`,`only-if-cached`];const I=[`omit`,a7,`include`];const J=[a7,`no-cors`,a9,`navigate`];const K=[`follow`,aa,`manual`];const L=[`basic`,a9,a8,aa,`opaque`,`opaqueredirect`];export default R;export{Q as initSync}