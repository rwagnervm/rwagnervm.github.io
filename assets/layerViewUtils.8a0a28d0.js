function r(n){return n&&typeof n.highlight=="function"}function i(n,t,u){return n==null||n>=u&&(t===0||n<=t)}function e(n,t){if(t&&n){const{minScale:u,maxScale:c}=n;if(l(u,c))return i(t,u,c)}return!0}function l(n,t){return n!=null&&n>0||t!=null&&t>0}function a(n){return!n?.minScale||!n.maxScale||n.minScale>=n.maxScale}export{e as c,a as i,r as n};
