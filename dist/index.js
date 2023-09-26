(()=>{"use strict";var e={610:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(159),t),o(r(644),t),o(r(418),t)},644:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.RelativePosition=void 0;var u=i(r(990)),c=r(362);t.RelativePosition=function(e){var t=e.children,r=a(e,["children"]),n=(0,c.useRelativePosition)(r);return(0,u.useLayoutEffect)((function(){n.current.style.position="absolute"}),[]),u.default.createElement("div",{ref:n},t)}},159:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.RelativeScale=void 0;var u=i(r(990)),c=r(362);t.RelativeScale=function(e){var t=e.children,r=a(e,["children"]),n=(0,c.useRelativeScale)(r);return(0,u.useLayoutEffect)((function(){n.current.style.position="absolute"}),[]),u.default.createElement("div",{ref:n},t)}},418:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Texture=void 0;var a=i(r(990)),u=r(362);t.Texture=function(e){var t=(0,u.useTexture)(e),r=(0,a.useRef)(null);return(0,a.useLayoutEffect)((function(){r.current.appendChild(t)}),[]),a.default.createElement("div",{ref:r,"data-texture-container":!0})}},794:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SceneProvider=t.SceneContext=void 0;var n=r(990);t.SceneContext=(0,n.createContext)(null),t.SceneProvider=t.SceneContext.Provider},362:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(386),t),o(r(664),t),o(r(531),t),o(r(692),t),o(r(465),t),o(r(870),t),o(r(666),t)},664:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCurrentScene=void 0;var n=r(990),o=r(794);t.useCurrentScene=function(){var e=(0,n.useContext)(o.SceneContext);if(!e)throw Error("Undefined scene context");return e}},386:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGame=void 0;var n=r(990),o=r(794);t.useGame=function(){var e=(0,n.useContext)(o.SceneContext);if(!e)throw Error("Undefined scene context");return e.game}},465:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useRelativePosition=void 0;var n=r(990),o=r(664),i=r(692);t.useRelativePosition=function(e){var t=e.x,r=e.y,a=(0,o.useCurrentScene)(),u=(0,n.useRef)(null);return(0,i.useSceneUpdate)(a,(function(){if(u.current){var e=a.cameras.main,n=Math.round((t-e.worldView.x)*e.zoom),o=Math.round((r-e.worldView.y)*e.zoom);u.current.style.transform="translate(".concat(n,"px, ").concat(o,"px)")}}),[t,r]),u}},870:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useRelativeScale=void 0;var n=r(990),o=r(386);t.useRelativeScale=function(e){var t=e.target,r=e.min,i=e.max,a=e.round,u=(0,o.useGame)(),c=(0,n.useRef)(null),l=(0,n.useCallback)((function(){if(c.current){var e=u.canvas.parentElement.clientWidth/t;"number"==typeof i&&(e=Math.min(e,i)),"number"==typeof r&&(e=Math.max(e,r)),a&&(e=Math.round(10*e)/10),c.current.style.zoom=e}}),[t,r,i,a]);return(0,n.useEffect)((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[l]),c}},692:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useSceneUpdate=void 0;var n=r(990);t.useSceneUpdate=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,n.useEffect)((function(){return t(),e.events.on("update",t),function(){e.events.off("update",t)}}),r)}},531:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useScene=void 0;var n=r(990),o=r(386);t.useScene=function(e){var t=(0,o.useGame)();return(0,n.useMemo)((function(){return t.scene.getScene(e)}),[e])}},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTexture=void 0;var n=r(990),o=r(386);t.useTexture=function(e){var t=e.name,r=e.frame,i=(0,o.useGame)();return(0,n.useMemo)((function(){var e=i.textures.get(t);return void 0===r?e.getSourceImage():e.frames[r].source.image}),[t,r])}},820:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(362),t),o(r(130),t),o(r(904),t),o(r(610),t)},130:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return a(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Interface=void 0;var l=c(r(329)),f=u(r(990)),s=r(699),d=r(794),v=function(){function e(t,r,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.interface&&(console.warn("Scene already had an existing interface"),t.interface.destroy()),this.container=document.createElement("div"),r.displayName&&this.container.setAttribute("data-component",r.displayName),this.configureContainer(),this.setInteractive(!1);var i=t.game.canvas.parentElement;i.style.position="relative",i.append(this.container),this.root=(0,s.createRoot)(this.container),this.root.render(f.default.createElement(d.SceneProvider,{value:t},f.default.createElement((function(e){return(0,f.useEffect)((function(){t.events.emit(l.default.Interface.Events.MOUNT)}),[]),f.default.createElement(r,Object.assign({},e))}),Object.assign({},n)))),this.scene=t,this.scene.interface=this,this.scene.events.on("shutdown",(function(){o.destroy()}))}var t,r;return t=e,(r=[{key:"setInteractive",value:function(e){this.container.style.pointerEvents=e?"all":"none",this.container.style.userSelect=e?"all":"none"}},{key:"destroy",value:function(){this.scene.events.emit(l.default.Interface.Events.UNMOUNT),delete this.scene.interface,this.root.unmount(),this.container.remove()}},{key:"configureContainer",value:function(){this.container.className="phaser-scene-interface",this.container.style.position="absolute",this.container.style.left="0",this.container.style.right="0",this.container.style.top="0",this.container.style.bottom="0"}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Interface=v,l.default.Interface={Events:{MOUNT:"interface_mount",UNMOUNT:"interface_unmount"}}},898:(e,t)=>{function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.getModifiedObject=t.getModifiedArray=void 0,t.getModifiedArray=function(e,t,n){if(!t)return e;if(!e)return t;if(e.length!==t.length)return t;for(var o=0;o<e.length;o++){var i,a=r(n);try{for(a.s();!(i=a.n()).done;){var u=i.value;if(e[o][u]!==t[o][u])return t}}catch(e){a.e(e)}finally{a.f()}}return e},t.getModifiedObject=function(e,t){if(!t)return e;if(!e)return t;for(var r=0,n=Object.keys(e);r<n.length;r++){var o=n[r];if(e[o]!==t[o])return t}return e}},904:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(898),t)},329:e=>{e.exports=require("/node_modules/phaser")},990:e=>{e.exports=require("/node_modules/react")},699:e=>{e.exports=require("/node_modules/react-dom/client")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(820);module.exports=r})();