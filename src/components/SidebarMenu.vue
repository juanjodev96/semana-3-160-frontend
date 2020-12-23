<template>
    <nav
          id="sidebarMenu"
          class="col-8 d-md-block  p-0 "
        >
  
          <div class="sidebar-sticky  d-block">
            <div class="card m-0 p-0  border-light " >
              <div class="card-header p-1 m-0">{{ user.name }}</div>
              <div class="card-body p-0 m-0">{{ user.email }}</div>
              
            </div>
            
           
              
          </div>
        </nav>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
    data() {
    return {
      user: {},
    };
  },

  methods:{
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      console.log("hola decode", decoded);
      this.user = decoded;
    },
  },
  created() {
    this.getUserDetails();
  },

}
</script>

<style>

</style>