<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="logout" @click="logout">
            <i class="fa fa-power-off"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      
    }
  },
  methods:{
      logout:function(){
          this.$router.push('/Login');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        width: 100%;
        height: 80px;
        line-height: 80px;
        background: #242f42;
        position: relative;
        color: #fff;
        top: 0;
    }
    .logo{float: left;}
    .logout{
        float: right;
        margin-right: 15px;
        font-size: 18px;
        cursor: pointer;
    }
    .header .logo{
        font-size: 24px;
        padding: 0 15px;
    }
</style>