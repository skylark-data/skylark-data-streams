/**
 * skylark-io-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-langx-chars","./streams","./decode-stream"],function(t,e,r,s,n){var a=n.inherit({klassName:"RunLengthStream",_construct:function(t,e){this.str=t,this.dict=t.dict,n.prototype._construct.call(this,e)},readBlock:function(){var t=this.str.getBytes(2);if(!t||t.length<2||128===t[0])this.eof=!0;else{var e,r=this.bufferLength,s=t[0];if(s<128){if((e=this.ensureBuffer(r+s+1))[r++]=t[1],s>0){var n=this.str.getBytes(s);e.set(n,r),r+=s}}else{s=257-s;var a=t[1];e=this.ensureBuffer(r+s+1);for(var i=0;i<s;i++)e[r++]=a}this.bufferLength=r}}});return s.RunLengthStream=a});
//# sourceMappingURL=sourcemaps/run-length-stream.js.map
