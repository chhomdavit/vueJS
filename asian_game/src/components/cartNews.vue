<template>
 <div class="row">
    <div v-for="(cartnew, index) in cartnews.slice(-6, limit)" :key="index" class=" col-md-4 col-sm-12">
        <div class="card shadow m-2 bg-white rounded cardHover" style="width: 16rem;height: 18rem; margin-top: 10px;">
            <img v-bind:src="cartnew.img" class="card-img-top" alt="...">
        <div class="card-body ">
            <h5 class="text-truncate">{{ cartnew.title }}</h5>
            <p class="card-text text-truncate">{{ cartnew.desc }}</p>

            <router-link :to="'/viewcardnew/' + cartnew.id">
              <butto type="button" class="btn btn-dark">VIEW</butto>
            </router-link>
            <router-view />
        </div>
        </div>
    </div>

    <router-link :to="'/news'" class="view-more"><br><br>
        <butto type="button" class="btn btn-success" data-toggle="popover">View More</butto>
    </router-link>
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


<style>
  .cardHover:hover{
     transform: scale(1.02);
     box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.view-more:hover{
  background-image: none;
}

</style>
