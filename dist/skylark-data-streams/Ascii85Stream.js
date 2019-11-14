/**
 * skylark-data-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(e,r,t,i){var s=i.inherit({klassName:"Ascii85Stream",init:function(e){this.str=e,this.dict=e.dict,this.input=new Uint8Array(5),this.overrided()},readBlock:function(){for(var e="~".charCodeAt(0),r="z".charCodeAt(0),t=this.str,i=t.getByte();Lexer.isSpace(String.fromCharCode(i));)i=t.getByte();if(i&&i!==e){var s,f=this.bufferLength;if(i==r){s=this.ensureBuffer(f+4);for(var a=0;a<4;++a)s[f+a]=0;this.bufferLength+=4}else{var n=this.input;n[0]=i;for(a=1;a<5;++a){for(i=t.getByte();Lexer.isSpace(String.fromCharCode(i));)i=t.getByte();if(n[a]=i,!i||i==e)break}if(s=this.ensureBuffer(f+a-1),this.bufferLength+=a-1,a<5){for(;a<5;++a)n[a]=117;this.eof=!0}var h=0;for(a=0;a<5;++a)h=85*h+(n[a]-33);for(a=3;a>=0;--a)s[f+a]=255&h,h>>=8}}else this.eof=!0}});return t.Ascii85Stream=s});
//# sourceMappingURL=sourcemaps/Ascii85Stream.js.map
