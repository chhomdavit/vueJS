<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" style="background-image: linear-gradient(160deg, #CE9FFC 10%, #7367F0 100%); box-shadow: 2px 2px 1px;">
      <router-link class="navbar-brand" to="/"><logoImage style="height: 30px; width: 25px;"/></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item"><router-link class="nav-link" to="/" >Home <i class="fa-solid fa-house"></i></router-link></li>&nbsp;   
      <li class="nav-item"><router-link class="nav-link" to="/news" >News</router-link></li>&nbsp; 
      <li class="nav-item"><router-link class="nav-link" to="/sport" >Sport</router-link></li>&nbsp;
      <li class="nav-item"><router-link class="nav-link" to="/about" >About</router-link></li>&nbsp;
      <li class="nav-item"><router-link class="nav-link" to="/contact" >Contact</router-link></li>
    </ul>
  </div>
  </div>
  </nav>
<router-view />
</template>

<script>
import logoImage from '../components/logoImage.vue';
export default {
  components: {
    logoImage,
  },
}
</script>

<style>
a:hover{
  background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);
}
/* ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 2px 2px 1px;
  background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);

}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 10px 5px;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
}


li a:hover {
  color: white;
  background-image: linear-gradient(160deg, #CE9FFC 10%, #7367F0 100%);
}

  .nav {
  background-image: linear-gradient(160deg, #CE9FFC 10%, #7367F0 100%);
  width: 100%;
  box-shadow: 2px 2px 1px;
  }
  .router-link {
  color: rgb(12, 12, 12);
  text-decoration: none;
  padding: 10px;
  font-size: 17px;
  font-weight: 700;
}
.router-link:hover {
  color: white;
  background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);
}
router-link:active {
  color: white;
  background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);
} */
</style>