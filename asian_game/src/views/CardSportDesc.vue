<template>
    <div class="container">
        <div class="row">
            <h1 style="text-align: center;">SPORT INFORMATION  <i class="fa-solid fa-newspaper"></i></h1>
            <hr class="solid">
            <div class="col-md-12">
                <img v-bind:src="sport.img" class="card-img-top" alt="..." style="width: 100%; height: 500px;"><br><br>
                <h4>{{ sport.title }}</h4> 
            </div>
        </div>
    </div>
</template>

<script>
import {SportService} from "@/services/SportService";

export default {
    data: function () {
    return {
        id: this.$route.params.id,
        sports : SportService.getAllSports(),
    }
  },
  computed: {
    sport() {
        return this.sports.find((sport)=>sport.id === Number(this.id))
    }
  },
}
</script>



<!-- <template>
    <div class="container">
        <div class="row" >
            <div class="col-md-9">
                <h1>NEWS SPORT  <i class="fa-solid fa-newspaper"></i></h1>
                <hr class="solid">
                <div class="card mb-3">
                    <img v-bind:src="cartnew.img" class="card-img-top" alt="..." style="width: 100%; height: 500px;"><br><br>
                    <div class="card-body">
                        <h2 class="card-title">{{ cartnew.title }}</h2><br>

                        <p class="card-text">{{ cartnew.desc }}</p><br>
                        <img v-bind:src="cartnew.img1" class="card-img-top" alt="..." style="width: 100%; height: 500px;"><br><br>
                        <p class="card-text">{{ cartnew.desc1 }}</p><br>
                        <img v-bind:src="cartnew.img2" class="card-img-top" alt="..." style="width: 100%; height: 500px;"><br><br>
                        <p class="card-text">{{ cartnew.desc1 }}</p><br>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <h1>Ads  <i class="fa-solid fa-newspaper"></i></h1>
                <hr class="solid">
            </div>
        </div>
    </div>
</template>
<script>
import {NewService} from "@/services/NewService";

export default {
    data: function () {
    return {
        id: this.$route.params.id,
        cartnews : NewService.getAllCartnews(),
    }
  },
  computed: {
    cartnew() {
        return this.cartnews.find((cartnew)=>cartnew.id === Number(this.id))
    }
  },
}
</script>
<style>
    
</style>

 -->
