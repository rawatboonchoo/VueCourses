<template>
  <div id="app">
    <div class="ui secondary  menu">
      <a class="active item" :href="homelink">
        Home
      </a>
      <a class="item">
        Messages
      </a>
      <a class="item" :href="contactlink">
        ContactPage
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      contactlink:'/ContactPage',
      homelink:'/'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  
  color: #2c3e50;
  margin-top: 0px;

}
</style>
