<template>

  <div class="row justify-content-center pt-5 ">
    <div class="card border-0 col col-sm-10 col-md-8 col-lg-4 mx-5 ">
      <div class="card-header bg-transparent border-0 ">
      <h2>Login</h2>
        
      </div>
      <div class="row bg-blue">
        <div class="card-body border col bg-transparent rounded shadow ">
          <form @submit.prevent="loginUser">
            <!-- user -->
            <div class="input-group form-group">
              
              <input
                type="text"
                id="email"
                class="form-control"
                placeholder="Email"
                v-model="login.email"
              />
            </div>
            <!-- password -->
            <div class="input-group form-group">
              
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="password"
                v-model="login.password"
              />
            </div>

             <input
                type="submit"
                value="Login"
                class="btn btn-primary d-block btn-block"
              />
         
            
          </form>
        </div>
      </div>
      </div>
      </div>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      login: {
        email: "ejemplo@gmail.com",
        password: "micontraseña",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.login);
        let token = response.data.accessToken;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Exitoso", "login exitoso", "success");
          this.$router.push("/home");
        }
      } catch (err) {
        swal("Error", "datos incorrectos", "error");
        console.log(err.response);
      }
    },
  },
};
</script>

<style>

body {
  background: #2554ff !important;
  
}


</style>