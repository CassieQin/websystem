<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url(../static/font-awesome-4.7.0/css/font-awesome.min.css);
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #eee;
}
body,
ul,
li,
ol,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "Microsoft Yahei", "微软雅黑", "Hiragino Sans GB", "SimSun",
    "Arial", "Helvetica Neue", "Helvetica";
}
a,
a:hover {
  text-decoration: none;
}
img {
  border: none;
}
button,
input,
textarea {
  outline: none;
}
.mt20 {
  margin-top: 20px;
}
/*表格样式*/
.cell-edit-color {
  color: #2db7f5;
  font-weight: bold;
}
.v-table-class {
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.v-table-title-class {
  font-weight: normal;
  color: #333;
  text-shadow: 0 0 0 #333;
  background: #eee !important;
}
.v-table-body-class {
  font-weight: normal;
  color: #333333;
  text-shadow: 0 0 0 #333333;
}
.v-table-footer-class {
  font-weight: normal;
  color: #333333;
  text-shadow: 0 0 0 #333333;
}
.title-cell-class-name-test1 {
  background-color: #2db7f5;
  color: #fff;
}
.title-cell-class-name-test2 {
  background-color: #f60;
  color: #fff;
}
</style>
