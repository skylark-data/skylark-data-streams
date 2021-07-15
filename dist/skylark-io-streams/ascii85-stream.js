/**
 * skylark-io-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-langx-chars","./streams","./decode-stream"],function(e,t,r,i,s){var a=s.inherit({klassName:"Ascii85Stream",_construct:function(e){this.str=e,this.dict=e.dict,this.input=new Uint8Array(5),maybeLength&&(maybeLength*=.8),s.prototype._construct.call(this,maybeLength)},readBlock:function(){for(var e=this.str,t=e.getByte();r.isWhiteSpace(t);)t=e.getByte();if(-1!==t&&126!==t){var i,s,a=this.bufferLength;if(122===t){for(i=this.ensureBuffer(a+4),s=0;s<4;++s)i[a+s]=0;this.bufferLength+=4}else{var f=this.input;for(f[0]=t,s=1;s<5;++s){for(t=e.getByte();r.isWhiteSpace(t);)t=e.getByte();if(f[s]=t,-1===t||126===t)break}if(i=this.ensureBuffer(a+s-1),this.bufferLength+=s-1,s<5){for(;s<5;++s)f[s]=117;this.eof=!0}var n=0;for(s=0;s<5;++s)n=85*n+(f[s]-33);for(s=3;s>=0;--s)i[a+s]=255&n,n>>=8}}else this.eof=!0}});return i.Ascii85Stream=a});
//# sourceMappingURL=sourcemaps/ascii85-stream.js.map
