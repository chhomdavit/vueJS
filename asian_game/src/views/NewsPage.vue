<template>
  <div class="container">
      <h1>NEWS <i class="fa-solid fa-newspaper"></i></h1>
      <hr class="solid">
      <div class="row">
    <div v-for="cartnew in cartnews" :key="cartnew.id" class="col-md-3 col-sm-12">
        <div class="card shadow m-2 bg-white rounded cardHover" style="width: 16rem;height: 18rem; margin-top: 10px;">
            <img v-bind:src="cartnew.img" class="card-img-top" alt="...">
        <div class="card-body ">
            <h5 class="text-truncate">{{ cartnew.title }}</h5>
            <p class="card-text text-truncate">{{ cartnew.desc }}</p>

            <router-link :to="'/viewcardnew/' + cartnew.id">
              <butto type="button" class="btn btn-dark">View More</butto>
            </router-link>
            <router-view />
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
        cartnews : NewService.getAllCartnews(),
    }
  }
}
</script>