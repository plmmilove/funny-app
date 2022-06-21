import{_ as i,d as c,u as a,o,c as x,a as l}from"./entry-5473606c.mjs";const n=c({setup(){a({title:"Clock"})},layout:!1,name:"Clock",data(){return{width:800,height:800,ctx:null,canvas:null}},methods:{draw(){let t=new Date,s=t.getSeconds(),h=t.getMinutes(),e=t.getHours();this.ctx.clearRect(0,0,this.width,this.height),this.ctx.beginPath(),this.ctx.moveTo(Math.cos((e*30+h/2-90)/180*Math.PI)*220+400,Math.sin((e*30+h/2-90)/180*Math.PI)*220+400),this.ctx.lineTo(400,400),this.ctx.save(),this.ctx.lineCap="round",this.ctx.closePath(),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.lineWidth=24,this.ctx.strokeStyle="#222",this.ctx.stroke(),this.ctx.restore(),this.ctx.beginPath(),this.ctx.moveTo(Math.cos((h*6+s*.1-90)/180*Math.PI)*300+400,Math.sin((h*6+s*.1-90)/180*Math.PI)*300+400),this.ctx.lineTo(400,400),this.ctx.save(),this.ctx.closePath(),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.lineWidth=13,this.ctx.strokeStyle="#222",this.ctx.stroke(),this.ctx.restore(),this.ctx.beginPath(),this.ctx.moveTo(Math.cos((s*6-90)/180*Math.PI)*345+400,Math.sin((s*6-90)/180*Math.PI)*345+400),this.ctx.lineTo(400,400),this.ctx.save(),this.ctx.closePath(),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.lineWidth=5,this.ctx.strokeStyle="rgb(213, 153, 0)",this.ctx.stroke(),this.ctx.restore(),this.ctx.closePath(),this.ctx.save(),this.ctx.arc(400,400,20,0,Math.PI*2),this.ctx.shadowOffsetX=-5,this.ctx.shadowBlur=10,this.ctx.shadowColor="#000",this.ctx.fillStyle="rgb(213, 153, 0)",this.ctx.fill(),this.ctx.restore()}},mounted(){this.canvas=this.$refs.clockCanvas,this.ctx=this.canvas.getContext("2d"),this.draw(),setInterval(()=>this.draw(),1e3)}}),r={style:{width:"100%","text-align":"center"}},d=["width","height"];function w(t,s,h,e,u,f){return o(),x("div",r,[l("canvas",{ref:"clockCanvas",width:t.width,height:t.height},null,8,d)])}var g=i(n,[["render",w],["__scopeId","data-v-1b259fc6"]]);export{g as default};
