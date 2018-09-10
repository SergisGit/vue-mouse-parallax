<template>
    <div class="parallax-container" 
    @mousemove="getMousePosition" 
    @mouseleave="parallaxStop" 
    @mouseover="parallaxStart">
        <slot></slot>
    </div>
</template>

<script>
import parallaxElement from "./parallax-element.vue";
import throttle from "../js/throttle";

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      hovering: false,
      counter: 0
    };
  },

  methods: {
    getMousePosition: throttle(function(e) {
      this.$children.forEach(child => {
        if (child.$options.propsData.parallaxStrength != 0) { 
          this.mouseX = e.clientX;
          this.mouseY = e.clientY;
        }
      });
      if (this.hovering === false) {
        return;
      }
    }, 0),

    parallaxStart() {
      this.hovering = true;
      this.$children.forEach(child => {
        child.isHovering = true;
      });
    },

    parallaxStop() {
      this.hovering = false;
      this.$children.forEach(child => {
        child.isHovering = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.parallax-container {
  perspective: 1000px;
}
</style>