<template>
  <div class="pt-5">
   
    <nav class="navbar navbar-dark bg-dark  p-0 position-fixed fixed-top d-inline-flex">
    
      <button
      class="navbar-toggler  d-md-none collapsed d-inline"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <spam class="navbar-brand col-3 col-lg-2 mr-0 px-3 "
      >Juan</spam>

    <ul class="navbar-nav px-3">
      <li class="nav-item ">
        <button class="nav-link btn btn-warning m-0 py-1 px-2 text-dark"  @click="logUserOut">Sign out</button>
      </li>
    </ul>
  </nav>
    <div class="container-fluid ">
      
      <div class="row ">
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-3 mt-md-0">
      <sidebar-menu>
      </sidebar-menu>
            
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';

// @ is an alias to /src

/* import VueJwtDecode from "vue-jwt-decode"; */
export default {
  name: "Home",
  components: {
   SidebarMenu 
    
  },
  methods: {
    
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  
};
</script>
<style scoped>

</style>
