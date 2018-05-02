<template>
  <div ref="parallaxSection" id="app" >
    <parallax-container>
      <template slot-scope="props">
        <parallaxElement
        class="text-container"
        :mousePX="props.mousePositionX"
        :mousePY="props.mousePositionY"
        :isHover="props.isHover"
        :parallaxStrength="-10">
          <h1>MouseParallax</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis atque. Dolore rerum, doloremque nulla animi neque repellat ad voluptatem cumque cum laudantium aut illo illum placeat nihil inventore ipsa.</p>
        </parallaxElement>

        <parallaxElement
        class="background-image"
        :mousePX="props.mousePositionX"
        :mousePY="props.mousePositionY"
        :isHover="props.isHover"
        :parallaxStrength="-30">
        </parallaxElement>
      </template>
    </parallax-container>
  </div>
</template>

<script>
import parallaxContainer from "./components/parallax-container.vue"
import parallaxElement from "./components/parallax-element.vue"

export default {

  components: {
    parallaxContainer, parallaxElement
  }
}
</script>

<style lang="scss">
  body {
    background-color: #0b1f2b;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    .horizontal-card {
      display: flex;
      width: 70vw;
      max-width: 992px;
      height: 70vh;
      margin: auto;

      h1 {
        margin: 0;
        font-size: 6rem;
        z-index: 5;
        text-shadow: 0 4px 20px rgba(2, 11, 22, 0.5);
      }

      p {
        line-height: 25px;
      }

      div {
        width: 50%;
      }

      .text-container {
        position: relative;
        z-index: 5;
      }

      .background-image {
        background-image: url(https://orig00.deviantart.net/6fde/f/2014/270/4/d/____by_aminerman-d80qw6m.jpg);
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

