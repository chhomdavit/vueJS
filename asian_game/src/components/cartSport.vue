<template>
    <div class="row">
      <div v-for="sport in sports" :key="sport.id" class="col-md-4 col-sm-12">
        <div class="card shadow m-3 bg-white rounded cardHover" style="width: 17rem;">
          <img v-bind:src="sport.img" class="card-img-top" alt="..." style="width: 100%;height: 19rem;">
         <div class="card-body">
          <h5 class="card-title">{{ sport.title }}</h5>
          <router-link :to="'/viewcardsport/' + sport.id">
              <butto type="button" class="btn btn-dark">View More</butto>
            </router-link>
            <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {SportService} from "@/services/SportService";

export default {
  name: 'App',
  data: function () {
    return {
        sports : SportService.getAllSports(),
    }
    
  },
  methods: {
    handleClickSport: function(value){
        alert (value.id) 
    }
}
}
</script>
