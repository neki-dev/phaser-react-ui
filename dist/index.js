(()=>{"use strict";var e={794:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SceneProvider=t.SceneContext=void 0;var r=n(990);t.SceneContext=(0,r.createContext)(null),t.SceneProvider=t.SceneContext.Provider},362:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(386),t),o(n(664),t),o(n(531),t),o(n(692),t)},664:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCurrentScene=void 0;var r=n(990),o=n(794);t.useCurrentScene=function(){var e=(0,r.useContext)(o.SceneContext);if(!e)throw Error("Undefined scene context");return e}},386:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGame=void 0;var r=n(990),o=n(794);t.useGame=function(){var e=(0,r.useContext)(o.SceneContext);if(!e)throw Error("Undefined scene context");return e.game}},692:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useSceneUpdate=void 0;var r=n(990);t.useSceneUpdate=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=(0,r.useCallback)((function(){try{t()}catch(e){console.error(e)}}),n);(0,r.useEffect)((function(){return o(),e.events.on("update",o),function(){e.events.off("update",o)}}),[o])}},531:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useScene=void 0;var r=n(386);t.useScene=function(e){return(0,r.useGame)().scene.getScene(e)}},820:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(362),t),o(n(130),t),o(n(904),t)},130:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Interface=void 0;var f=u(n(329)),s=c(n(990)),l=n(699),d=n(794),v=function(){function e(t,n,r){var o=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.interface)throw Error("Scene already have interface");this.container=document.createElement("div"),n.displayName&&this.container.setAttribute("data-component",n.displayName),this.configureContainer();var i=t.game.canvas.parentElement;i.style.position="relative",i.append(this.container),this.root=(0,l.createRoot)(this.container),this.root.render(s.default.createElement(d.SceneProvider,{value:t},s.default.createElement((function(e){return(0,s.useEffect)((function(){o.scene.events.emit(f.default.Interface.Events.MOUNT)}),[]),s.default.createElement(n,Object.assign({},e))}),Object.assign({},r)))),this.scene=t,this.scene.interface=this,this.scene.events.on("shutdown",(function(){o.destroy()}))}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.scene.events.emit(f.default.Interface.Events.UNMOUNT),delete this.scene.interface,this.root.unmount(),this.container.remove()}},{key:"configureContainer",value:function(){this.container.className="phaser-scene-interface",this.container.style.pointerEvents="none",this.container.style.userSelect="none",this.container.style.position="absolute",this.container.style.left="0",this.container.style.right="0",this.container.style.top="0",this.container.style.bottom="0"}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Interface=v,f.default.Interface={Events:{MOUNT:"interface_mount",UNMOUNT:"interface_unmount"}}},898:(e,t)=>{function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.getModifiedObject=t.getModifiedArray=void 0,t.getModifiedArray=function(e,t,r){if(!t)return e;if(!e)return t;if(e.length!==t.length)return t;for(var o=0;o<e.length;o++){var i,a=n(r);try{for(a.s();!(i=a.n()).done;){var c=i.value;if(e[o][c]!==t[o][c])return t}}catch(e){a.e(e)}finally{a.f()}}return e},t.getModifiedObject=function(e,t){if(!t)return e;if(!e)return t;for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(e[o]!==t[o])return t}return e}},904:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(898),t)},329:e=>{e.exports=require("/node_modules/phaser")},990:e=>{e.exports=require("/node_modules/react")},699:e=>{e.exports=require("/node_modules/react-dom/client")}},t={},n=function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(820);module.exports=n})();