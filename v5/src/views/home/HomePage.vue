<template>
  <div>
    <div class="container">
      <h1>Helloヾ(^∀^)ﾉ</h1>
      <h2>我是 greatqian,</h2>
      <p>一位渴望了解自身和世界底层源码的程序员。</p>
      <p>崇尚理性和逻辑，信仰真理和秩序。</p>
      <p>相信技术的进步导致生产力的发展和生产生活方式的变革从而推动时代的进步。</p>
      <p>认为人生的使命是不断变强。</p>
      <p>阅读兴趣广泛，热爱科幻。喜欢王小波、金庸武侠。</p>
      <p>最喜欢的电影是 <a class="label" href="#">《星际穿越》</a>。</p>
      <p>
        最喜欢的游戏是<a class="label" href="#">《塞尔达传说·荒野之息》</a>。
      </p>
      <p>你也可以在下面这些地方找到我哩：</p>

      <div class="link-container">
        <router-link to="/projects">
          <a class="link-box" target="_blank">
          <img src="@img/project.png"/>
          <p>项目</p>
        </a>
        </router-link>
        <a class="link-box" target="_blank">
          <img src="@img/blog.png"/>
          <p>博客</p>
        </a>
        <a class="link-box" target="_blank" href="https://github.com/greatqian">
          <img src="@img/github.png"/>
          <p>github</p>
        </a>
        <a class="link-box" target="_blank" href="https://www.zhihu.com/people/du-gu-qiu-bai-42-67">
          <img src="@img/zhihu.png"/>
          <p>知乎</p>
        </a>
        <a class="link-box" target="_blank" href="https://space.bilibili.com/28388122">
          <img src="@img/bilibili.png" style="transform: scale(0.8)"/>
          <p>bilibili</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20%;
  margin-top: 10vh;
  h1 {
    font-size: 4.5em;
    margin-bottom: 0;
    font-weight: 500;
  }
  h2 {
    font-size: 2.2em;
    font-weight: 500;
    margin-bottom: 1.3em;
  }
  p {
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4em;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a.label {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 66%;
      left: 0.3em;
      right: 0.3em;
      bottom: 0;
      z-index: -1;
      background-color: rgba(79, 192, 141, 0.5);
      transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    }
    &:hover::after {
        top: 0%;
    }
  }
  .link-container {
    display: flex;
    padding: 60px 0 160px 0;
    align-content: space-between;
    justify-content: space-evenly;
    .link-box {
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      text-align: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    p {
      margin: 0;
      font-weight: 500;
    }
  }
}
.router-link-active {
  text-decoration: none;
}

</style>
