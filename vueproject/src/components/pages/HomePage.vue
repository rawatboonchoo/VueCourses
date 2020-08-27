<template>
    <div id="home-page">
        <Profile></Profile>
        <Gridimage></Gridimage>
    </div>
  
</template>

<script>
import Profile from '@/components/Profile'
import Gridimage from '@/components/Gridimage'

export default {
  name: 'HomePage',
  components:{Profile,Gridimage}
}
</script>

<style>

</style>