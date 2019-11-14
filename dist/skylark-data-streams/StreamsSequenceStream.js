/**
 * skylark-data-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(e,t,r,s){var a=s.inherit({klassName:"StreamsSequenceStream",init:function(e){this.dict=stream.dict,this.overrided()},readBlock:function(){var e=this.streams;if(0!=e.length){var t=e.shift().getBytes(),r=this.bufferLength,s=r+t.length;this.ensureBuffer(s).set(t,r),this.bufferLength=s}else this.eof=!0}});return r.StreamsSequenceStream=a});
//# sourceMappingURL=sourcemaps/StreamsSequenceStream.js.map
