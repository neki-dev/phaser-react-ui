(()=>{"use strict";var e={460:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(969)),i=o.default.Loader.File.createObjectURL;o.default.Loader.File.createObjectURL=function(e,t,r){e.originBlob=t,i.call(this,e,t,r)}},610:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(159),t),o(r(644),t),o(r(418),t)},644:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.RelativePosition=void 0;var a=i(r(497)),c=r(362);t.RelativePosition=function(e){var t=e.children,r=u(e,["children"]),n=(0,c.useRelativePosition)(r);return(0,a.useLayoutEffect)((function(){n.current.style.position="absolute"}),[]),a.default.createElement("div",{ref:n},t)}},159:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.RelativeScale=void 0;var a=i(r(497)),c=r(362);t.RelativeScale=function(e){var t=e.children,r=u(e,["children"]),n=(0,c.useRelativeScale)(r);return(0,a.useLayoutEffect)((function(){n.current.style.position="absolute"}),[]),a.default.createElement("div",{ref:n},t)}},418:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Texture=void 0;var o=n(r(497)),i=r(362);t.Texture=function(e){var t=e.name,r=(0,i.useTexture)(t);return o.default.createElement("img",{src:r,role:"texture",alt:t})}},794:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SceneProvider=t.SceneContext=void 0;var n=r(497);t.SceneContext=(0,n.createContext)(null),t.SceneProvider=t.SceneContext.Provider},362:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(386),t),o(r(664),t),o(r(531),t),o(r(692),t),o(r(465),t),o(r(870),t),o(r(666),t),o(r(457),t),o(r(13),t),o(r(90),t),o(r(253),t),o(r(711),t),o(r(519),t)},253:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useClickOutside=void 0;var n=r(497),o=r(13);t.useClickOutside=function(e,t,r){var i=(0,o.useMobilePlatform)(),u=(0,n.useCallback)((function(r){e.current&&(r.composedPath().includes(e.current)||t())}),r);(0,n.useEffect)((function(){var e=i?"touchend":"mouseup";return document.addEventListener(e,u),function(){document.removeEventListener(e,u)}}),[i,u])}},90:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useClick=void 0;var n=r(497),o=r(13);t.useClick=function(e,t,r,i){var u=(0,o.useMobilePlatform)(),a=(0,n.useCallback)((function(e){r(e),e.stopPropagation(),e.preventDefault()}),i);(0,n.useEffect)((function(){var r,n=e.current;if(n)return r=u?"up"===t?"touchend":"touchstart":"up"===t?"mouseup":"mousedown",n.addEventListener(r,a),function(){n.removeEventListener(r,a)}}),[t,u,a])}},664:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCurrentScene=void 0;var n=r(497),o=r(794);t.useCurrentScene=function(){var e=(0,n.useContext)(o.SceneContext);if(!e)throw Error("Undefined scene context");return e}},711:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.useEvent=void 0;var o=r(497);t.useEvent=function(e,t,r,i){var u;(0,o.useEffect)((function(){return e.on(t,r),function(){e.off(t,r)}}),[t].concat(function(e){if(Array.isArray(e))return n(e)}(u=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}},386:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGame=void 0;var n=r(497),o=r(794);t.useGame=function(){var e=(0,n.useContext)(o.SceneContext);if(!e)throw Error("Undefined scene context");return e.game}},519:(e,t,r)=>{function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.useInteraction=void 0;var i=r(497),u=r(13),a=r(90),c=r(253);t.useInteraction=function(e,t,r){var l,f,s=(0,u.useMobilePlatform)(),d=(l=(0,i.useState)(!1),f=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(l,f)||n(l,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=d[0],y=d[1];(0,c.useClickOutside)(e,(function(){y(!1)}),[]),(0,a.useClick)(e,"down",(function(){v?(null==t||t(),s&&y(!1)):y(!0)}),[v,s].concat(function(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(null!=r?r:[])));var p=function(){y(!0)},b=function(){y(!1)};return(0,i.useEffect)((function(){if(!s){var t=e.current;if(t)return t.addEventListener("mouseenter",p),t.addEventListener("mouseleave",b),function(){t.removeEventListener("mouseenter",p),t.removeEventListener("mouseleave",b)}}}),[s]),v}},457:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.useMatchMedia=void 0;var o=r(497);t.useMatchMedia=function(e){var t,r,i=(t=(0,o.useState)(null),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],a=i[1],c=function(e){a(e.matches)};return(0,o.useEffect)((function(){var t=window.matchMedia(e);return a(t.matches),t.addEventListener("change",c),function(){t.removeEventListener("change",c)}}),[e]),u}},13:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useMobilePlatform=void 0;var n=r(386);t.useMobilePlatform=function(){return!(0,n.useGame)().device.os.desktop}},465:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useRelativePosition=void 0;var n=r(497),o=r(664),i=r(692);t.useRelativePosition=function(e){var t=e.x,r=e.y,u=e.camera,a=(0,o.useCurrentScene)(),c=null!=u?u:a.cameras.main,l=(0,n.useRef)(null);return(0,i.useSceneUpdate)(a,(function(){if(l.current){var e=Math.round((t-c.worldView.x)*c.zoom),n=Math.round((r-c.worldView.y)*c.zoom);l.current.style.transform="translate(".concat(e,"px, ").concat(n,"px)")}}),[t,r,c]),l}},870:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useRelativeScale=void 0;var n=r(497),o=r(386);t.useRelativeScale=function(e){var t=e.target,r=e.min,i=e.max,u=e.round,a=(0,o.useGame)(),c=(0,n.useRef)(null),l=(0,n.useCallback)((function(){if(c.current){var e=a.canvas.parentElement.clientWidth/t;"number"==typeof i&&(e=Math.min(e,i)),"number"==typeof r&&(e=Math.max(e,r)),u&&(e=Math.round(10*e)/10),c.current.style.removeProperty("transform"),c.current.style.removeProperty("transformOrigin"),c.current.style.removeProperty("width"),c.current.style.removeProperty("height");var n=c.current.clientWidth,o=c.current.clientHeight;c.current.style.transform="scale(".concat(e,")"),c.current.style.transformOrigin="0 0",c.current.style.width="".concat(n/e,"px"),c.current.style.height="".concat(o/e,"px")}}),[t,r,i,u]);return(0,n.useEffect)((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[l]),c}},692:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useSceneUpdate=void 0;var n=r(497);t.useSceneUpdate=function(e,t,r){(0,n.useEffect)((function(){return t(),e.events.on("update",t),function(){e.events.off("update",t)}}),r)}},531:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useScene=void 0;var n=r(497),o=r(386);t.useScene=function(e){var t=(0,o.useGame)();return(0,n.useMemo)((function(){return t.scene.getScene(e)}),[e])}},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTexture=void 0;var n=r(497),o=r(386);t.useTexture=function(e){var t=(0,o.useGame)();return(0,n.useMemo)((function(){var r=t.textures.get(e).getSourceImage();return URL.createObjectURL(r.originBlob)}),[e])}},820:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),r(460),o(r(362),t),o(r(130),t),o(r(904),t),o(r(610),t)},130:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return u(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Interface=void 0;var l=c(r(969)),f=a(r(497)),s=r(183),d=r(794),v=function(){function e(t,r,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.interface&&(console.warn("Scene already had an existing interface"),t.interface.destroy()),this.container=document.createElement("div"),r.displayName&&this.container.setAttribute("data-component",r.displayName),this.configureContainer(),this.setInteractive(!1);var i=t.game.canvas.parentElement;i.style.position="relative",i.append(this.container),this.root=(0,s.createRoot)(this.container),this.root.render(f.default.createElement(d.SceneProvider,{value:t},f.default.createElement((function(e){return(0,f.useEffect)((function(){t.events.emit(l.default.Interface.Events.MOUNT)}),[]),f.default.createElement(r,Object.assign({},e))}),Object.assign({},n)))),this.scene=t,this.scene.interface=this,this.scene.events.on("shutdown",(function(){o.destroy()}))}var t,r;return t=e,(r=[{key:"setInteractive",value:function(e){this.container.style.pointerEvents=e?"all":"none",this.container.style.userSelect=e?"all":"none"}},{key:"destroy",value:function(){this.scene.events.emit(l.default.Interface.Events.UNMOUNT),delete this.scene.interface,this.root.unmount(),this.container.remove()}},{key:"configureContainer",value:function(){this.container.className="phaser-scene-interface",this.container.style.position="absolute",this.container.style.left="0",this.container.style.right="0",this.container.style.top="0",this.container.style.bottom="0"}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Interface=v,l.default.Interface={Events:{MOUNT:"interface_mount",UNMOUNT:"interface_unmount"}}},898:(e,t)=>{function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,u=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,n){if(!t)return e;if(!e)return t;if(e.length!==t.length)return t;for(var o=null!=n?n:Object.keys(e[0]),i=0;i<e.length;i++){var u,a=r(o);try{for(a.s();!(u=a.n()).done;){var c=u.value;if(e[i][c]!==t[i][c])return t}}catch(e){a.e(e)}finally{a.f()}}return e}function i(e,t,n){if(!t)return e;if(!e)return t;var o,i=r(null!=n?n:Object.keys(e));try{for(i.s();!(o=i.n()).done;){var u=o.value;if(e[u]!==t[u])return t}}catch(e){i.e(e)}finally{i.f()}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.ifModifiedObject=t.getModifiedObject=t.ifModifiedArray=t.getModifiedArray=void 0,t.getModifiedArray=o,t.ifModifiedArray=function(e,t){return function(r){return o(r,e,t)}},t.getModifiedObject=i,t.ifModifiedObject=function(e,t){return function(r){return i(r,e,t)}}},904:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(898),t)},969:e=>{e.exports=require("phaser")},497:e=>{e.exports=require("react")},183:e=>{e.exports=require("react-dom/client")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(820);module.exports=r})();