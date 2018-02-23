<template>
    <div class="sidebar" :style="{width:sideWidth + '%'}" :class="{isNav:isNav}">
        <div class="navBtn" @click="changeNav">
            <i class="fa fa-navicon"></i>
        </div>
        <div class="f-nav" v-for="list in nav" :key="list.index" @click="openNav">
            <template v-if="list.children">
                <div class="hassub">
                    <i class="fa" :class="list.icon"></i>
                    <p :style="{display:display}" :class="{isNav:isNav}">{{list.name}}</p>
                </div>
                <div class="s-nav">
                    <div  v-for="list in list.children" :key="list.index">
                        <router-link :to="list.url">{{list.name}}</router-link>
                    </div>
                </div>
            </template>
            <template v-else>
                <router-link :to="list.url">
                    <i class="fa" :class="list.icon"></i>
                    <p :style="{display:display}" :class="{isNav:isNav}">{{list.name}}</p>
                </router-link>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      nav: [
        {
          icon: "fa-home",
          name: "首页",
          url: "/Homepage"
        },{
          icon: "fa-snowflake-o",
          name: "页面",
          children: [
            { name: "页面1", url: "/Pageone" },
            { name: "页面2", url: "/Pagetwo" }
          ]
        },{
          icon: "fa-snowflake-o",
          name: "内容",
          children: [
            { name: "内容1", url: "/Contentone" },
            { name: "内容2", url: "/Contenttwo" }
          ]
        },{
          icon: "fa-table",
          name: "表格",
          url: "/Pagetable"
        }
      ],
      sideWidth: 15,
      display: "",
      isNav: false,
      n: 0,
    };
  },
  methods: {
    changeNav: function() {
      if (this.isNav) {
        this.sideWidth = 15;
        this.display = "inline-block";
        this.isNav = false;
      } else {
        this.sideWidth = 5;
        this.display = "none";
        this.isNav = true;
      }
    },
    openNav: function() {
      if (this.isNav) {
        this.sideWidth = 15;
        this.display = "inline-block";
        this.isNav = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  position: absolute;
  top: 80px;
  background: #324157;
  width: 15%;
  height: calc(100% - 80px);
  height: -moz-calc(100% - 80px);
  height: -webkit-calc(100% - 80px);
}
.navBtn {
  width: 35px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  cursor: pointer;
  background: #1ab394;
  margin: 20px auto;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.f-nav a,
.hassub {
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid #242f42;
  color: #bfcbd9;
}
.f-nav p {
  display: inline-block;
}
.f-nav a:hover {
  color: #fff;
}
.s-nav {
  background: #29374a;
}
.s-nav a {
  height: 40px;
  line-height: 40px;
  border-top: none;
}
.router-link-active {
  color: #1ab394 !important;
}
.s-nav{display: none}
</style>
