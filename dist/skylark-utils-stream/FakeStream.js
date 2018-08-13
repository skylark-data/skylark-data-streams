/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(e,t,r,s){var i=s.inherit({klassName:"FakeStream",init:function(e){this.dict=e.dict,this.overrided()},readBlock:function(){var e=this.bufferLength;e+=1024;this.ensureBuffer(e);this.bufferLength=e},getBytes:function(e){var t,r=this.pos;if(e){for(this.ensureBuffer(r+e),t=r+e;!this.eof&&this.bufferLength<t;)this.readBlock();var s=this.bufferLength;t>s&&(t=s)}else this.eof=!0,t=this.bufferLength;return this.pos=t,this.buffer.subarray(r,t)}});return r.FakeStream=i});
//# sourceMappingURL=sourcemaps/FakeStream.js.map
