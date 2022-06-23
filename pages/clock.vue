<template>
  <div style=" width: 100%; text-align: center">
    <canvas ref="clockCanvas" :width="width" :height="height">
    </canvas>

    <button @click="speak">报时</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    useHead({
      title: 'Clock',
    })
  },
  layout: false,
  name: 'Clock',
  data() {
    return {
      width: 400,
      height: 400,
      ctx: null,
      canvas: null,
    };
  },
  methods: {
    speak() {
      let msg = new SpeechSynthesisUtterance();
      msg.text = "北京时间" + new Date().toLocaleTimeString();

      msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Microsoft Kangkang - Chinese (Simplified, PRC)"; })[0];
      window.speechSynthesis.speak(msg);
    },
    draw() {
      let nowDate = new Date();
      let second = nowDate.getSeconds();
      let minute = nowDate.getMinutes();
      let hour = nowDate.getHours();
      this.ctx.clearRect(0, 0, this.width, this.height);

      this.ctx.beginPath();
      this.ctx.lineCap = "round";
      for (let i = 1; i < 13; i++) {
        let x1 =Math.cos((i * 30) / 180 * Math.PI) * 175 + 200;
        let y1 = -Math.sin((i * 30) / 180 * Math.PI) * 175 + 200;
        let x2 = Math.cos((i * 30) / 180 * Math.PI) * 160 + 200;
        let y2 = -Math.sin((i * 30) / 180 * Math.PI) * 160 + 200;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);

        this.ctx.font = "30px Arial";
        if (i > 9) {
          let x = Math.cos((i * 30 - 90) / 180 * Math.PI) * 140 + 200 - 13;
          let y = Math.sin((i * 30 - 90) / 180 * Math.PI) * 140 + 200 + 13;
          this.ctx.fillText(i, x, y);
          console.log(`x="${x}" y="${y}"`)
        } else {
          let x = Math.cos((i * 30 - 90) / 180 * Math.PI) * 140 + 194;
          let y = Math.sin((i * 30 - 90) / 180 * Math.PI) * 140 + 200 + 10;
          this.ctx.fillText(i, x, y);
          console.log(`x="${x}" y="${y}"`)
        }
      }
      this.ctx.lineWidth = 11;
      this.ctx.strokeStyle = '#000';
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.restore();

      this.ctx.beginPath();
      this.ctx.moveTo(Math.cos((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 110 + 200, Math.sin((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 110 + 200);
      this.ctx.lineTo(200, 200);
      this.ctx.save();
      this.ctx.lineCap = "round";
      this.ctx.closePath();
      this.ctx.shadowOffsetX = -5;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "#000";
      this.ctx.lineWidth = 16;
      this.ctx.strokeStyle = '#222';
      this.ctx.stroke();
      this.ctx.restore();

      this.ctx.beginPath();
      this.ctx.moveTo(Math.cos((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 150 + 200, Math.sin((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 150 + 200);
      this.ctx.lineTo(200, 200);
      this.ctx.save();
      this.ctx.closePath();
      this.ctx.shadowOffsetX = -5;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "#000";
      this.ctx.lineWidth = 13;
      this.ctx.strokeStyle = '#222';
      this.ctx.stroke();
      this.ctx.restore();

      this.ctx.beginPath();
      this.ctx.moveTo(Math.cos((second * 6 - 90) / 180 * Math.PI) * 170 + 200, Math.sin((second * 6 - 90) / 180 * Math.PI) * 170 + 200);
      this.ctx.lineTo(200, 200);
      this.ctx.save();
      this.ctx.closePath();
      this.ctx.shadowOffsetX = -5;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "#000";
      this.ctx.lineWidth = 5;
      this.ctx.strokeStyle = 'rgb(213, 153, 0)';
      this.ctx.stroke();
      this.ctx.restore();
      this.ctx.closePath();

      this.ctx.save();
      this.ctx.arc(200, 200, 20, 0, Math.PI * 2);
      this.ctx.shadowOffsetX = -5;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "#000";
      this.ctx.fillStyle = 'rgb(213, 153, 0)';
      this.ctx.fill();
      this.ctx.restore();
    },
  },
  mounted() {
    this.canvas = this.$refs.clockCanvas;
    this.ctx = this.canvas.getContext("2d");
    this.draw()
    // setInterval(() => this.draw(), 1000);
  },
});
</script>

<style scoped>
</style>
