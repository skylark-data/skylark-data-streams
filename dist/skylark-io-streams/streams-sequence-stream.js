/**
 * skylark-io-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-langx-chars","./streams","./decode-stream"],function(e,t,s,r,a){var n=a.inherit({klassName:"StreamsSequenceStream",_construct:function(e){this.streams=e;let t=0;for(let s=0,r=e.length;s<r;s++){const r=e[s];t+=r instanceof a?r._rawMinBufferLength:r.length}a.prototype._construct.call(this,t)},readBlock:function(){var e=this.streams;if(0!==r.length){e.shift();var t=e.getBytes(),s=this.bufferLength,a=s+t.length;this.ensureBuffer(a).set(t,s),this.bufferLength=a}else this.eof=!0},getBaseStreams:function(){for(var e=[],t=0,s=this.streams.length;t<s;t++){var r=this.streams[t];r.getBaseStreams&&e.push(...r.getBaseStreams())}return e}});return r.StreamsSequenceStream=n});
//# sourceMappingURL=sourcemaps/streams-sequence-stream.js.map
