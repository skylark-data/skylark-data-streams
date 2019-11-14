/**
 * skylark-data-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(r,e,t,s){var i=s.inherit({klassName:"PredictorStream",init:function(r,e){var t=this.predictor=e.get("Predictor")||1;if(t<=1)return r;2!==t&&(t<10||t>15)&&error("Unsupported predictor: "+t),this.readBlock=2===t?this.readBlockTiff:this.readBlockPng,this.stream=r,this.dict=r.dict;var s=this.colors=e.get("Colors")||1,i=this.bits=e.get("BitsPerComponent")||8,a=this.columns=e.get("Columns")||1;this.pixBytes=s*i+7>>3,this.rowBytes=a*s*i+7>>3,this.overrided()},readBlockTiff:function(){var r=this.rowBytes,e=this.bufferLength,t=this.ensureBuffer(e+r),s=this.bits,i=this.colors,a=this.stream.getBytes(r),o=0,f=0,n=0,h=0,c=e;if(1===s)for(var l=0;l<r;++l){var u=a[l];o=o<<8|u,t[c++]=255&(u^o>>i),o&=65535}else if(8===s){for(l=0;l<i;++l)t[c++]=a[l];for(;l<r;++l)t[c]=t[c-i]+a[l],c++}else{var d=new Uint8Array(i+1),g=(1<<s)-1,k=0,v=e,B=this.columns;for(l=0;l<B;++l)for(var y=0;y<i;++y)n<s&&(o=o<<8|255&a[k++],n+=8),d[y]=d[y]+(o>>n-s)&g,n-=s,f=f<<s|d[y],(h+=s)>=8&&(t[v++]=f>>h-8&255,h-=8);h>0&&(t[v++]=(f<<8-h)+(o&(1<<8-h)-1))}this.bufferLength+=r},readBlockPng:function(){var r=this.rowBytes,e=this.pixBytes,t=this.stream.getByte(),s=this.stream.getBytes(r),i=this.bufferLength,a=this.ensureBuffer(i+r),o=a.subarray(i-r,i);0==o.length&&(o=new Uint8Array(r));var f=i;switch(t){case 0:for(var n=0;n<r;++n)a[f++]=s[n];break;case 1:for(n=0;n<e;++n)a[f++]=s[n];for(;n<r;++n)a[f]=a[f-e]+s[n]&255,f++;break;case 2:for(n=0;n<r;++n)a[f++]=o[n]+s[n]&255;break;case 3:for(n=0;n<e;++n)a[f++]=(o[n]>>1)+s[n];for(;n<r;++n)a[f]=(o[n]+a[f-e]>>1)+s[n]&255,f++;break;case 4:for(n=0;n<e;++n){var h=o[n],c=s[n];a[f++]=h+c}for(;n<r;++n){h=o[n];var l=o[n-e],u=a[f-e],d=u+h-l,g=d-u;g<0&&(g=-g);var k=d-h;k<0&&(k=-k);var v=d-l;v<0&&(v=-v);c=s[n];a[f++]=g<=k&&g<=v?u+c:k<=v?h+c:l+c}break;default:error("Unsupported predictor: "+t)}this.bufferLength+=r}});return t.PredictorStream=i});
//# sourceMappingURL=sourcemaps/PredictorStream.js.map
