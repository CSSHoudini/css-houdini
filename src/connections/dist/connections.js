registerPaint("connections",class{constructor(){this.CONNECTIONS_PROPS=["--connections-particleColor","--connections-lineColor","--connections-particleAmount","--connections-defaultRadius","--connections-variantRadius","--connections-linkRadius"]}static get inputProperties(){return this["--connections-linkRadius"]}parseProps(t){return this["--connections-linkRadius"].map(n=>t.get(n).toString().trim()||void 0)}checkDistance(t,n,e,o){return Math.sqrt(Math.pow(e-t,2)+Math.pow(o-n,2))}paint(t,n,e){const{width:o,height:i}=n,[r="rgb(74,74,74)",s="rgb(76,76,76)",a=o*i/1e3,c=1.5,l=3,h=80]=this.parseProps(e);let u=[];const[d,p,g]=s.match(/\d+/g),P=(n,e)=>{let o=+c+Math.random()*+l;return t.beginPath(),t.arc(n,e,o,0,2*Math.PI),t.fillStyle=r,t.fill(),{x:n,y:e}},M=n=>{for(let e=0;e<a;e++){let o=1-this.checkDistance(n.x,n.y,u[e].x,u[e].y)/h;o>0&&(t.lineWidth=.5,t.strokeStyle=`rgba(${d}, ${p}, ${g}, ${o})`,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(u[e].x,u[e].y),t.closePath(),t.stroke())}};for(let t=0;t<a;t++){let t=Math.round(Math.random()*o),n=Math.round(Math.random()*i);u.push(P(t,n))}for(let t=0;t<a;t++)M(u[t])}});
