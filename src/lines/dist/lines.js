registerPaint("lines",class{static get inputProperties(){return["--lines-colors","--lines-widths","--lines-gaps","--lines-rotate"]}parseProps(t){return["--lines-colors","--lines-widths","--lines-gaps","--lines-rotate"].map(e=>t.get(e).toString().trim()||void 0)}paint(t,e,s){const{width:l,height:i}=e,[a="#71a7ee, #7940c1",n="6, 2",r="8",o=0]=this.parseProps(s),p=2*Math.floor(Math.sqrt(Math.pow(l,2)+Math.pow(i,2))),h=a.split(",").map(t=>t),c=h.length;let g=0;const m=n.split(",").map(t=>+t),M=Math.min(...m),w=m.length;let P=0;const d=r.split(",").map(t=>+t),f=d.length;let u=0;0!==o&&(t.rotate(o*Math.PI/180),t.translate(-p,-p));let S=0;for(let e=0;e<p/M;e++){const e=+m[P]+d[u];t.fillStyle=h[g],t.fillRect(.5*-p,S,2*p,+m[P]),P>=w-1?P=0:P++,u>=f-1?u=0:u++,g>=c-1?g=0:g++,S+=e}}});
