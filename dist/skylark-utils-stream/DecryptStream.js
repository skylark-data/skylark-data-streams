/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(t,e,r,i){var s=512,n=i.inherit({klassName:"DecryptStream",init:function(t,e){this.str=t,this.dict=t.dict,this.decrypt=e,this.overrided()},readBlock:function(){var t=this.str.getBytes(s);if(!t||0==t.length)return void(this.eof=!0);var e=this.decrypt;t=e(t);var r,i=this.bufferLength,n=t.length,a=this.ensureBuffer(i+n);for(r=0;r<n;r++)a[i++]=t[r];this.bufferLength=i}});return r.DecryptStream=n});
//# sourceMappingURL=sourcemaps/DecryptStream.js.map
