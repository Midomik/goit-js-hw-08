function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function O(){var e=v();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,o-(e-c)):n}(e))}function T(e){return f=void 0,p&&r?y(e):(r=i=void 0,a)}function h(){var e=v(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},h.flush=function(){return void 0===f?a:T(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),S=y.querySelector("input"),j=y.querySelector("textarea"),O={};(e=>{const t=JSON.parse(e.getItem("feedback-form-state"));t.email.trim()&&(S.value=t.email),t.message.trim()&&(j.value=t.message)})(localStorage),y.addEventListener("input",e(t)((()=>{O.email=S.value,O.message=j.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.5d492cbf.js.map
