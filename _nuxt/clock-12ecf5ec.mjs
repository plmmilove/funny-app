import{_ as x,d as r,u as d,o as u,c as M,a as o}from"./entry-cc6b9596.mjs";const f=r({setup(){d({title:"Clock"})},layout:!1,name:"Clock",data(){return{width:400,height:400,ctx:null,canvas:null}},methods:{speak(){let s=new SpeechSynthesisUtterance;s.text="\u5317\u4EAC\u65F6\u95F4"+new Date().toLocaleTimeString(),s.voice=speechSynthesis.getVoices().filter(function(e){return e.name=="Microsoft Kangkang - Chinese (Simplified, PRC)"})[0],window.speechSynthesis.speak(s)},draw(){let s=new Date,e=s.getSeconds(),h=s.getMinutes(),i=s.getHours();this.ctx.clearRect(0,0,this.width,this.height),this.ctx.beginPath(),this.ctx.lineCap="round";for(let t=1;t<13;t++){let c=Math.cos(t*30/180*Math.PI)*175+200,a=-Math.sin(t*30/180*Math.PI)*175+200,n=Math.cos(t*30/180*Math.PI)*160+200,l=-Math.sin(t*30/180*Math.PI)*160+200;this.ctx.moveTo(c,a),this.ctx.lineTo(n,l),this.ctx.font="30px Arial",t>9?this.ctx.fillText(t,Math.cos((t*30-90)/180*Math.PI)*140+200-13,Math.sin((t*30-90)/180*Math.PI)*140+200+13):this.ctx.fillText(t,Math.cos((t*30-90)/180*Math.PI)*140+194,Math.sin((t*30-90)/180*Math.PI)*140+200+10)}this.ctx.lineWidth=11,this.ctx.strokeStyle="#000",this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore(),this.ctx.beginPath(),this.ctx.moveTo(Math.cos((i*30+h/2-90)/180*Math.PI)*110+200,Math.sin((i*30+h/2-90)/180*Math.PI)*110+200),this.ctx.lineTo(200,200),this.ctx.save(),this.ctx.lineCap="round",this.ctx.closePath(),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.lineWidth=16,this.ctx.strokeStyle="#222",this.ctx.stroke(),this.ctx.restore(),this.ctx.beginPath(),this.ctx.moveTo(Math.cos((h*6+e*.1-90)/180*Math.PI)*150+200,Math.sin((h*6+e*.1-90)/180*Math.PI)*150+200),this.ctx.lineTo(200,200),this.ctx.save(),this.ctx.closePath(),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.lineWidth=13,this.ctx.strokeStyle="#222",this.ctx.stroke(),this.ctx.restore(),this.ctx.beginPath(),this.ctx.moveTo(Math.cos((e*6-90)/180*Math.PI)*170+200,Math.sin((e*6-90)/180*Math.PI)*170+200),this.ctx.lineTo(200,200),this.ctx.save(),this.ctx.closePath(),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.lineWidth=5,this.ctx.strokeStyle="rgb(213, 153, 0)",this.ctx.stroke(),this.ctx.restore(),this.ctx.closePath(),this.ctx.save(),this.ctx.arc(200,200,20,0,Math.PI*2),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.fillStyle="rgb(213, 153, 0)",this.ctx.fill(),this.ctx.restore()}},mounted(){this.canvas=this.$refs.clockCanvas,this.ctx=this.canvas.getContext("2d"),this.draw(),setInterval(()=>this.draw(),1e3)}}),w={style:{width:"100%","text-align":"center"}},P=["width","height"];function g(s,e,h,i,t,c){return u(),M("div",w,[o("canvas",{ref:"clockCanvas",width:s.width,height:s.height},null,8,P),o("button",{onClick:e[0]||(e[0]=(...a)=>s.speak&&s.speak(...a))},"\u62A5\u65F6")])}var p=x(f,[["render",g]]);export{p as default};