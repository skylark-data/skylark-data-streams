/**
 * skylark-io-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./decode-stream"],function(t,i,e,s){var r=s.inherit({klassName:"AsciiHexStream",_construct:function(t,i){this.str=t,this.dict=t.dict,this.firstDigit=-1,i&&(i*=.5),s.prototype._construct.call(this,i)},readBlock:function(){var t=this.str.getBytes(8e3);if(t.length){for(var i=t.length+1>>1,e=this.ensureBuffer(this.bufferLength+i),s=this.bufferLength,r=this.firstDigit,f=0,n=t.length;f<n;f++){var h,a=t[f];if(a>=48&&a<=57)h=15&a;else{if(!(a>=65&&a<=70||a>=97&&a<=102)){if(62===a){this.eof=!0;break}continue}h=9+(15&a)}r<0?r=h:(e[s++]=r<<4|h,r=-1)}r>=0&&this.eof&&(e[s++]=r<<4,r=-1),this.firstDigit=r,this.bufferLength=s}else this.eof=!0}});return e.AsciiHexStream=r});
//# sourceMappingURL=sourcemaps/ascii-hex-stream.js.map
