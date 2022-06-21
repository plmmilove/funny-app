<template>
  <div style=" width: 100%; text-align: center">
    <canvas ref="clockCanvas" :width="width" :height="height">
    </canvas>


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
canvas {
  background-image: url(assets/images/clock.svg);
}
</style>
