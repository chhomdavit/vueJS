<template>
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
                <div class="row">
                    <div class="col-md-12">
                        <div class="card text-bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2016/10/30/00/52/coca-cola-1782095__480.jpg" class="card-img" alt="...">
                            <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                        </div><br><br>

                        <div class="card text-bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2016/10/11/09/26/sports-shoes-1730937__480.jpg" class="card-img" alt="...">
                            <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                        </div><br><br>

                        <div class="card text-bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2016/07/22/16/39/olympia-1535217__480.jpg" class="card-img" alt="...">
                            <div class="card-img-overlay">
                            <h5 class="card-title text-dark">Card title</h5>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                        </div><br><br>

                    </div>
                </div>
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


