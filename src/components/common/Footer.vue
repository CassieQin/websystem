<template>
    <div class="footer">
        © 2014-2015 Cassie
    </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 30px;
  line-height: 30px;
  background: #fff;
  color: #666;
  width: 85%;
  text-align: center;
}
</style>