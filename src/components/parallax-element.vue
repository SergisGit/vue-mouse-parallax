<template>
  <div ref="parallaxSection" @mousemove="getMousePositionY" class="parallax-element" :style="transformParallax">
      <slot></slot>
      {{mousePosition}}
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import throttle from "../js/throttle"
export default {
    props: ['parallaxStrength', 'parallaxType', 'mouseX', 'mouseY','mousePosition', 'mousePP'],
    mounted(){
        this.width = this.$refs.parallaxSection.offsetWidth;
        this.height = this.$refs.parallaxSection.offsetHeight;
        this.offsetX = this.$refs.parallaxSection.offsetLeft;
        this.offsetY = this.$refs.parallaxSection.offsetTop;
  },
  data() {
    return {
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0,
        movementX: 0,
        movementY: 0,
        mouseXP: 0,
        mouseYP: 0
    }
  },
  computed: {
    transformParallax(){
        let relX = this.mousePosition - this.offsetX
        let relY = this.mouseYP - this.offsetY
        this.movementX = (relX - this.width/2) / this.width * this.parallaxStrength
        this.movementY = (relY - this.height/2) / this.height * this.parallaxStrength

        if(this.parallaxType === 'translation'){
            return {
                transform: `translateX(${this.movementX}px) translateY(${this.movementY}px)`
            }
        }

        if(this.parallaxType === 'rotation'){
            return {
                transform: `rotateX(${this.movementY}deg) rotateY(${this.movementX}deg)`
            }
        }
      }
  },
    methods: {
        getMousePositionY: throttle(function(e) {
            this.mouseXP = e.pageX
            this.mouseYP = e.pageY
            eventBus.$emit('positionChanged', this.mouseXP)
        }, 100)
  },
  created() {
      eventBus.$on('positionChanged', (data) => {
          this.mousePosition = data
      })
  }
}
</script>

<style lang="scss" scoped>
    .parallax-element {
      transition: all 2s;
      transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
</style>
