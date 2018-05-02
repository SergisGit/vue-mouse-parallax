<template>
    <div id="parallax-container" @mousemove="getMousePositionX" @mousePositionX="mouseX=$event">
        <slot :mousePP="mouseX"></slot>       
    </div>
</template>

<script>
import parallaxElement from "./parallax-element.vue"
import throttle from "../js/throttle"
export default {
    data() {
        return {
            mouseX: 0,
            mouseY: 0
        }
    },
    methods: {
        getMousePositionX: throttle(function(e) {
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
    #parallax-container {
        perspective: 1000px;
    }
</style>
