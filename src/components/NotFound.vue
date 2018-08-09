<template>
  <div class="noPage">
    <p>404</p>
    <p>Not Found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .noPage{
      position: fixed;
      top:40%;
      width:7.5rem;
      font-size:.5rem;
      text-align: center;
  }
  p:first-child{
      color: #c02dee;
      font-size:1.4rem;
  }
  p:last-child{
      color:#666;
  }
</style>
