/**
 * skylark-io-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./_stream"],function(r,t,a,n){var e=n.inherit({klassName:"StringStream",_construct:function(r){for(var t=r.length,a=new Uint8Array(t),e=0;e<t;++e)a[e]=r.charCodeAt(e);n.prototype._construct.call(this,a)}});return a.StringStream=e});
//# sourceMappingURL=sourcemaps/string-stream.js.map
