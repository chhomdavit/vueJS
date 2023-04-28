<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Login User</div>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    v-model="input.username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    v-model="input.password"
                  />
                </div>
                <butto @click="login()" type="button" class="btn btn-success" data-toggle="popover">Login</butto>
                <!-- <router-link :to="'/dashboard'" class="view-more"><br><br>
                  <butto type="button" class="btn btn-success" data-toggle="popover">Login</butto>
                </router-link> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  data() {
    return {
      input:{
        username:"",
        password:""
      }
    };
  },
  methods: {
    login() {
      alert('please login')
    },
  },
};
</script>