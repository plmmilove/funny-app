<template>
  <div style=" width: 100%; text-align: center">
    <canvas ref="clockCanvas" :width="width" :height="height">
    </canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  layout: false,
  name: 'Clock',
  data() {
    return {
      width: 800,
      height: 800,
      ctx: null,
      canvas: null,
    };
  },
  methods: {
    draw() {
      let nowDate = new Date();
      let second = nowDate.getSeconds();
      let minute = nowDate.getMinutes();
      let hour = nowDate.getHours();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.lineCap = "round";
      for (let i = 0; i < 60; i++) {
        if ((i + 5) % 5 === 0) {
          continue;
        }
        this.ctx.moveTo(Math.cos((i * 6) / 180 * Math.PI) * 350 + 400, Math.sin((i * 6) / 180 * Math.PI) * 350 + 400);
        this.ctx.lineTo(Math.cos((i * 6) / 180 * Math.PI) * 335 + 400, Math.sin((i * 6) / 180 * Math.PI) * 335 + 400);
      }
      this.ctx.save();
      this.ctx.closePath();
      this.ctx.lineWidth = 7;
      this.ctx.strokeStyle = '#000';
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.lineCap = "round";
      for (let i = 1; i < 13; i++) {
        this.ctx.moveTo(Math.cos((i * 30) / 180 * Math.PI) * 350 + 400, -Math.sin((i * 30) / 180 * Math.PI) * 350 + 400);
        this.ctx.lineTo(Math.cos((i * 30) / 180 * Math.PI) * 320 + 400, -Math.sin((i * 30) / 180 * Math.PI) * 320 + 400);
        this.ctx.font = "50px Arial";
        if (i > 9) {
          this.ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 + 400 - 25, Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 + 400 + 25);
        } else {
          this.ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 + 388, Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 + 400 + 20);
        }
      }
      this.ctx.lineWidth = 11;
      this.ctx.strokeStyle = '#000';
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.restore();

      // this.ctx.beginPath();
      // this.ctx.font = "24px Arial";
      // this.ctx.fillText('LOVE LELE', 333, 540)
      // this.ctx.font = "18px Arial";
      // this.ctx.fillText('Rourou', 370, 570)
      // this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.moveTo(Math.cos((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220 + 400, Math.sin((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220 + 400);
      this.ctx.lineTo(400, 400);
      this.ctx.save();
      this.ctx.lineCap = "round";
      this.ctx.closePath();
      this.ctx.shadowOffsetX = -5;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "#000";
      this.ctx.lineWidth = 24;
      this.ctx.strokeStyle = '#222';
      this.ctx.stroke();
      this.ctx.restore();

      this.ctx.beginPath();
      this.ctx.moveTo(Math.cos((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300 + 400, Math.sin((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300 + 400);
      this.ctx.lineTo(400, 400);
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
      this.ctx.moveTo(Math.cos((second * 6 - 90) / 180 * Math.PI) * 345 + 400, Math.sin((second * 6 - 90) / 180 * Math.PI) * 345 + 400);
      this.ctx.lineTo(400, 400);
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
      this.ctx.arc(400, 400, 20, 0, Math.PI * 2);
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
    setInterval(() => this.draw(), 1000);
  },
});
</script>

<style scoped>
</style>
