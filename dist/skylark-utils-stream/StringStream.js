/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./Stream"],function(r,a,n,t){var e=t.inherit({klassName:"StringStream",init:function(r){for(var a=r.length,n=new Uint8Array(a),t=0;t<a;++t)n[t]=r.charCodeAt(t);this.overrided(n)}});return stream.StringStream=e});
//# sourceMappingURL=sourcemaps/StringStream.js.map
