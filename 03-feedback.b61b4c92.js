var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,r=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var a,i,o,r,f,u,l=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,o=i;return a=i=void 0,l=t,r=e.apply(o,n)}function S(e){return l=e,f=setTimeout(j,t),c?y(e):r}function O(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=o}function j(){var e=d();if(O(e))return N(e);f=setTimeout(j,function(e){var n=t-(e-u);return g?m(n,o-(e-l)):n}(e))}function N(e){return f=void 0,b&&a?y(e):(a=i=void 0,r)}function h(){var e=d(),n=O(e);if(a=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),r}return t=p(t)||0,v(n)&&(c=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,a=u=i=f=void 0},h.flush=function(){return void 0===f?r:N(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?r(e.slice(2),f?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:a,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),y=JSON.parse(localStorage.getItem("feedback-form-state"))??{};localStorage.setItem("feedback-form-state",JSON.stringify(y)),b.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email??"",b.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message??"",b.addEventListener("input",t((function(e){"email"===e.target.name&&(y.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y)))}),500)),b.addEventListener("input",t((function(e){"message"===e.target.name&&(y.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y)))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),localStorage.removeItem("feedback-form-state"),b.elements.email.value="",b.elements.message.value=""}));
//# sourceMappingURL=03-feedback.b61b4c92.js.map