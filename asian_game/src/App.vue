<template>
  <div class="container-fluid">
    
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <announcement/>
      </div>
    </div>

    <div class="row" style="background-image: linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%); margin: auto; padding:10px; text-align: center;">
      <div class="col-md-3 col-sm-12 ">
        <logoImage/>
      </div>

      <div class="col-md-9 col-sm-12">
        <div class="row">
          <div class="col-md-12">
            <titleLetter/>
           </div> 
           <div class="col-md-12"><br><br>
            <div class="row">
              <div class="col-md-12">
                <login /> 
                 &nbsp;&nbsp;
                 <button v-on:click="handleLogout" type="button" class="btn btn-light" style="background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);">LOGOUT</button>
                 &nbsp;&nbsp;
                <Register/>
                &nbsp;&nbsp;
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class=" nav-item rounded-circle" style="width: 40px;"
                 alt="Avatar" />
                &nbsp;&nbsp;
              <span style="font-weight: 600;text-transform: uppercase;">Davit</span>
              </div>
            </div>
           </div> 
        </div>
      </div>
    </div>

    <div class="row">
        <div class="col-md-12">
          <meunNavbar/>
        </div>
      </div>

      <div class="row" style="margin-top: 10px;">
        <div class="col-md-12">
          <footerPage/>
        </div>
      </div>
      
  </div>
</template>

<script>
import announcement from './components/announcement.vue';
import logoImage from './components/logoImage.vue';
import titleLetter from './components/titleLetter.vue';
import meunNavbar from './components/meunNavbar.vue';
import login from './components/login.vue';
import Register from './components/register.vue';
import footerPage from './components/footerPage.vue';

export default {
  name: 'App',
  components: {
    announcement,
    logoImage,
    titleLetter,
    meunNavbar,
    login,
    Register,
    footerPage,
   
  },
  methods:{
    handleLogout:function (){
        alert('Logout')
    }
  }
}
</script>




