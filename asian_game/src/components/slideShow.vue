<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-interval="1000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
    <div class="carousel-inner rounded">
        <div v-for="slider in sliders" :key="slider.id" class="carousel-item active">
          <img v-bind:src="slider.img" class="d-block w-100" alt="..."  style="height: 400px;">
    </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
import {SliderData} from "@/services/SliderData";

export default {
  name: 'SliderData',
  data: function () {
    return {
      sliders : SliderData.getAllSliderData(),
    }
    
  }
}
</script>
