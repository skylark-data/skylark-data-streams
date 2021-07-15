/**
 * skylark-io-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./decode-stream"],function(t,e,i,s){var n=s.inherit({klassName:"DecryptStream",_construct:function(t,e,i){this.str=t,this.dict=t.dict,this.decrypt=i,this.nextChunk=null,this.initialized=!1,s.prototype._construct.call(this,e)},readBlock:function(){var t;if(this.initialized?t=this.nextChunk:(t=this.str.getBytes(512),this.initialized=!0),t&&0!==t.length){this.nextChunk=this.str.getBytes(512);var e=this.nextChunk&&this.nextChunk.length>0;t=(0,this.decrypt)(t,!e);var i,s=this.bufferLength,n=t.length,h=this.ensureBuffer(s+n);for(i=0;i<n;i++)h[s++]=t[i];this.bufferLength=s}else this.eof=!0}});return i.DecryptStream=n});
//# sourceMappingURL=sourcemaps/decrypt-stream.js.map
