/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(e,t,r,i){var s={9:-1,32:-1,48:0,49:1,50:2,51:3,52:4,53:5,54:6,55:7,56:8,57:9,65:10,66:11,67:12,68:13,69:14,70:15,97:10,98:11,99:12,100:13,101:14,102:15},n=i.inherit({klassName:"AsciiHexStream",init:function(e){this.str=e,this.dict=e.dict,this.overrided()},readBlock:function(){var e,t,r,i,n,a,h,f=">".charCodeAt(0),c=this.str.getBytes();for(r=c.length+1>>1,i=this.ensureBuffer(this.bufferLength+r),n=this.bufferLength,a=0,h=c.length;a<h;a++){for(e=s[c[a]];e==-1&&a+1<h;)e=s[c[++a]];a+1<h&&c[a+1]!==f?(t=s[c[++a]],i[n++]=16*e+t):c[a]!==f&&(i[n++]=16*e)}this.bufferLength=n,this.eof=!0}});return r.AsciiHexStream=n});
//# sourceMappingURL=sourcemaps/AsciiHexStream.js.map
