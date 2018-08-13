/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(e,t,r,s){var i=s.inherit({klassName:"StreamsSequenceStream",init:function(e){this.dict=stream.dict,this.overrided()},readBlock:function(){var e=this.streams;if(0==e.length)return void(this.eof=!0);var t=e.shift(),r=t.getBytes(),s=this.bufferLength,i=s+r.length,n=this.ensureBuffer(i);n.set(r,s),this.bufferLength=i}});return r.StreamsSequenceStream=i});
//# sourceMappingURL=sourcemaps/StreamsSequenceStream.js.map
