/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(r,e,t,i){var a=i.inherit({klassName:"Ascii85Stream",init:function(r){this.str=r,this.dict=r.dict,this.input=new Uint8Array(5),this.overrided()},readBlock:function(){for(var r="~".charCodeAt(0),e="z".charCodeAt(0),t=this.str,i=t.getByte();Lexer.isSpace(String.fromCharCode(i));)i=t.getByte();if(!i||i===r)return void(this.eof=!0);var a,f=this.bufferLength;if(i==e){a=this.ensureBuffer(f+4);for(var s=0;s<4;++s)a[f+s]=0;this.bufferLength+=4}else{var n=this.input;n[0]=i;for(var s=1;s<5;++s){for(i=t.getByte();Lexer.isSpace(String.fromCharCode(i));)i=t.getByte();if(n[s]=i,!i||i==r)break}if(a=this.ensureBuffer(f+s-1),this.bufferLength+=s-1,s<5){for(;s<5;++s)n[s]=117;this.eof=!0}for(var o=0,s=0;s<5;++s)o=85*o+(n[s]-33);for(var s=3;s>=0;--s)a[f+s]=255&o,o>>=8}}});return t.Ascii85Stream=a});
//# sourceMappingURL=sourcemaps/Ascii85Stream.js.map
