<template>
    <div class="container">
        <div class="row" style="margin-top: 5px;">
            <div class="col-md-9">
                <slideShow/>
            </div>
            <div class="col-md-3">
               <ads/>
            </div>
        </div>

        <div class="row" style="margin-top: 5px;">
          <div class="col-md-9">
            <span style="font-weight: 600; text-transform: uppercase;">News</span>
            <hr class="solid">
              <cartNews/> 
          </div>

          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 ">
                <span style="font-weight: 600; text-transform: uppercase;">Upcoming Event</span>
                <hr class="solid">
                <event/>
              </div>
              <div class="col-md-12" style="margin-top: 10px;">
                <span style="font-weight: 600; text-transform: uppercase;">SEA GAMES Promotion</span>
                <hr class="solid">
                <promotion/>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="margin-top: 10px;">
          <div class="col-md-12"><br><br><br><br>
            <span style="font-weight: 600; text-transform: uppercase;">SPONSORS</span>
            <hr class="solid">  
            <marquee onmouseover="this.stop();" onmouseout="this.start();" loop="">
              <table>
                <tr>
                  <td v-for="marqueesponsor in marqueesponsors" :key="marqueesponsor.id" style="min-width:250px;">
                    <img v-bind:src="marqueesponsor.img"  alt="" style="width:200px;height:90px;" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br>
                    <h6 class="h3-marquee">{{marqueesponsor.title}}</h6>
                  </td>
                </tr>
            </table>
        </marquee>
          </div>
        </div>
    </div>
</template>

<script>
import slideShow from '../components/slideShow.vue';
import ads from '../components/ads.vue';
import cartNews from '../components/cartNews.vue';
import event from '../components/event.vue';
import promotion from '../components/promotion.vue';
import {MarqueeSponsor} from "@/services/MarqueeSponsor";
export default {
  name: 'HomePage',
  data: function () {
    return {
      marqueesponsors : MarqueeSponsor.getAllMarqueeSponsor(),
    }
    
  },
  components: {
    slideShow,
    ads,
    cartNews,
    event,
    promotion,
  }
}
</script>
<style>
.h3-marquee{
  padding-right:20%;
  color: black;
  text-transform: capitalize;
  letter-spacing: normal;
}

</style>