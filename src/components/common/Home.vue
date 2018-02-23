<template>
    <div class="home">
        <vhead></vhead>
        <vsidebar></vsidebar>
        <div class="content">
            <div class="main">
                <transition name="move" mode="out-in"><router-view></router-view></transition>
            </div>
        </div>
        <vfooter></vfooter>
    </div>
</template>

<script>
import vhead from "./Header";
import vsidebar from "./Sidebar";
import vfooter from "./Footer";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  components: {
    vhead,
    vsidebar,
    vfooter
  }
};
$(function() {
  $(".navBtn").on("click", function() {
    if ($(".sidebar").width() > 96) {
      $(".content").css("width", "95%");
      $(".footer").css("width", "95%");
      $('.s-nav').hide();
    } else {
      $(".content").css("width", "85%");
      $(".footer").css("width", "85%");
    }
  });
  $('.hassub').on('click',function(){
    $(this).siblings().toggle();
    $(this).parent().siblings().find('.s-nav').hide();
  });
  $('.f-nav').on('click',function(){
    if ($(".sidebar").width() <= 96) {
      $(".content").css("width", "85%");
      $(".footer").css("width", "85%");
    }
  })
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  position: absolute;
  right: 0;
  top: 90px;
  width: 85%;
  height: calc(100% - 130px);
  height: -moz-calc(100% - 130px);
  height: -webkit-calc(100% - 130px);
}
.main {
  margin: 0 10px;
  background: #fff;
  height: 100%;
}
</style>
