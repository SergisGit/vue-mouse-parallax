<template>
 <div class="horizontal-card" @mousemove="getMousePosition">
     <slot :mousePositionX="mouseX"></slot>
    </div>
</template>

<script>
import parallaxElement from "./parallax-element.vue"
import _ from 'lodash'

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      hovering: false
    }
  },
  computed: {
    setMouseX() {
      return this.mouseX
    },
    setMouseY() {
      return this.mouseY
    }
  },
  methods: {
     getMousePosition: _.throttle(function(e) {
      this.hovering = true
      this.mouseX = e.pageX
      this.mouseY = e.pageY
    }, 100)
  },
  components: {
    parallaxElement
  }
}
</script>

<style lang="scss" scoped>

</style>
