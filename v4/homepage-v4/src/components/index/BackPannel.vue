<template>
  <div id="canvas-container">
    <canvas id="canvas"> </canvas>
  </div>
</template>

<script>
let snowflake = {
  x: 0,
  y: 0,
  xSpeed: 0,
  ySpeed: 0,
  size: 1,
  r: 10 * 1,
};
let snowflakes = [];
let maxX = window.innerWidth;
let maxY = window.innerHeight;
let windSpeed = 0; //风速
let canvas;
let context;

let count = 50;

export default {
  data() {
    return {
      snowTimer: {},
      windTimer: {}
    };
  },
  mounted() {
    canvas = document.getElementById("canvas");
    canvas.width = maxX;
    canvas.height = maxY;
    context = canvas.getContext("2d");
    this.snow();
  },
  unmounted() {
    clearInterval(this.snowTimer);
  },
  methods: {
    snow() {
      this.createSnow();
      this.snowTimer = setInterval(this.drawSnow, 10);
    //   this.windTimer = setInterval(this.changeWind, 5000);
    },
    /** 批量创建雪花 */
    createSnow() {
      for (let i = 0; i < count; i++) {
        let newSnowflake = this.createSnowflake(true);
        snowflakes.push(newSnowflake);
      }
    },
    /** 生成单个雪花属性 */
    createSnowflake(isInit) {
      let newSnowflake = { ...snowflake };
      newSnowflake.x = Math.ceil(Math.random() * maxX);
      if (isInit) {
          newSnowflake.y = Math.ceil(Math.random() * maxY);
      } else {
          newSnowflake.y = -50 + Math.ceil(Math.random() * 50);
      }
      newSnowflake.xSpeed = 0;
      newSnowflake.size = 1 + 0.3 * Math.random()*10;
      newSnowflake.r = 2 * newSnowflake.size;
      newSnowflake.ySpeed = 1 * newSnowflake.size;
      return newSnowflake;
    },
    /** 绘制雪花 */
    drawSnow() {
      context.clearRect(0, 0, maxX, maxY);
      context.beginPath();
      context.fillStyle = "white";
      for (let i = 0; i < snowflakes.length; i++) {
        let thisSnowflake = snowflakes[i];
        context.moveTo(thisSnowflake.x, thisSnowflake.y);
        context.arc(
          thisSnowflake.x,
          thisSnowflake.y,
          thisSnowflake.r,
          0,
          2*Math.PI,
          false
        );
      }
      context.fill();
      context.closePath();
      this.moveSnow();
    },
    /** 计算雪花移动 */
    moveSnow() {
      for (let i = 0; i < snowflakes.length; i++) {
        let thisSnowflake = snowflakes[i];
        thisSnowflake.x += windSpeed / thisSnowflake.size;
        thisSnowflake.y += thisSnowflake.ySpeed;

        if (thisSnowflake.y > maxY) {
          snowflakes[i] = this.createSnowflake(false);
        }
      }
    },
    /** 改变风向 */
    changeWind() {
        // windSpeed = -1 + Math.random()*2;
    }
  },
};
</script>

<style>
#canvas-container {
    width: 100%;
    height: 100%;
    background-color: skyblue;
  z-index: -1;
  overflow-x: hidden;
}
</style>