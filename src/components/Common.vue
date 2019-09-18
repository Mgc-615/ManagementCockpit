<template>
  <el-container>
    <!-- 头部公共部分 -->
    <el-header>
      <div class="logo">
        <img src="../assets/img/logo_1.png" alt>
      </div>
      <div class="leftWrap">
        <!-- <img src="../assets/img/矩形 28 拷贝 2.png" alt> -->
        <p class="titlee">
          <span class="big">
            CPECC
            <span>BJ</span>
          </span> Engineering Project Management System
        </p>
      </div>
      <div class="rightWrap">
        <img src="../assets/img/calendar@2x.png" alt>
        <p style="display:inline-block; font-size:12px;">{{datee}}</p>
      </div>
      <div class="righttwoWrap">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img
              src="../assets/img/logo_1.png"
              alt
              style="border-radius:50%;border:1px solid #ffff00;vertical-align:middle"
            >
            <span>John Smith</span>
            <!-- <i class="el-icon-caret-bottom"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item>退出账户</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <!-- 左侧导航栏部分 -->
    <el-container>
      <div class="navWrap">
        <router-link :to="{name:'home'}" @click.native="truefalse1">
          <template v-if="falsetrue1 === false">
            <img src="../assets/img/com.png" alt>
          </template>
          <template v-else>
            <img src="../assets/img/comact.png" alt>
          </template>
        </router-link>
        <router-link :to="{path:'/share/0'}" :key="new Date()" @click.native="truefalse2">
          <template v-if="falsetrue2 === false">
            <img src="../assets/img/por.png" alt>
          </template>
          <template v-else>
            <img src="../assets/img/poract.png" alt>
          </template>
        </router-link>
        <router-link :to="{path:'/setting/0'}" :key="new Date()" @click.native="truefalse3">
          <template v-if="falsetrue3 === false">
            <img src="../assets/img/pro.png" alt>
          </template>
          <template v-else>
            <img src="../assets/img/proact.png" alt>
          </template>
        </router-link>
        <router-link
          to="/wrench"
          @click.native="truefalse4"
        >
          <template v-if="falsetrue4 === false">
            <img src="../assets/img/liu.png" alt>
          </template>
          <template v-else>
            <img src="../assets/img/liuact.png" alt>
          </template>
        </router-link>
        <router-link to="/hsse" @click.native="truefalse5">
          <template v-if="falsetrue5 === false">
            <img src="../assets/img/hse.png" alt>
          </template>
          <template v-else>
            <img src="../assets/img/hseact.png" alt>
          </template>
        </router-link>
      </div>
      <el-main ref="bodyshow">
        <router-view @listenactNav='active'></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  mounted() {
    this.timee()
    this.active()
  },
  data() {
    return {
      userID:"",
      // 头部右侧时间
      datee: '',
      // 左侧导航部分
      falsetrue1: true,
      falsetrue2: false,
      falsetrue3: false,
      falsetrue4: false,
      falsetrue5: false,
      // arr:[
      //   {falsetrue1: false},
      //   {falsetrue2: false},
      //   {falsetrue3: false},
      //   {falsetrue4: false},
      //   {falsetrue5: false},
      // ]
    }
  },
  methods: {
    // 头部日期格式
    timee() {
      let myDate = new Date()
      let arr = new Array(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      )
      this.datee =
        myDate.getDate() +
        ' / ' +
        arr[myDate.getMonth()] +
        ' / ' +
        myDate.getFullYear()
    },
    active(str){
      let actnav = ''
      if(str){
        actnav=str
      }else{
        if(this.userID===''){
          let url = location.href
          let str = url.split("//")[1].split("/")[1]
          if(str.split("?")[1]){
            actnav = str.split("?")[0]
            let user =str.split("?")[1]
            this.userID=Number(user)
            this.$router.push({path:'/home'})
          }else{
            actnav=str
          }
        } 
      }
      switch(actnav){
        case "home":
         this.truefalse1();
         break;
         case "share":
         this.truefalse2();
         break;
         case "setting":
         this.truefalse3();
         break;
         case "hsse":
         this.truefalse5();
         case "toTree":
         this.$nextTick(()=>{
          this.$refs.bodyshow.$el.scrollTop=1000;
        });
         break;
      }
    },
    // 导航的点击事件执行函数(笨方法，想到之后再改进)
    // truefalse1() {
    //   arr.forEach(element => {

    //   });
    // },
    // truefalse1() {
    //   if(this.falsetrue1 === true) {
    //     this.falsetrue1 = true
    //     this.falsetrue2 = false
    //     this.falsetrue3 = false
    //     this.falsetrue4 = false
    //     this.falsetrue5 = false
    //   }
    //   if(this.falsetrue2 === true) {
    //     this.falsetrue2 = true
    //     this.falsetrue1 = false
    //     this.falsetrue3 = false
    //     this.falsetrue4 = false
    //     this.falsetrue5 = false
    //   }
    // },
    truefalse1() {
      this.falsetrue1 = true
      this.falsetrue2 = false
      this.falsetrue3 = false
      this.falsetrue4 = false
      this.falsetrue5 = false
    },
    truefalse2() {
      this.falsetrue2 = true
      this.falsetrue1 = false
      this.falsetrue3 = false
      this.falsetrue4 = false
      this.falsetrue5 = false
    },
    truefalse3() {
      this.falsetrue3 = true
      this.falsetrue1 = false
      this.falsetrue2 = false
      this.falsetrue4 = false
      this.falsetrue5 = false
    },
    truefalse4() {
      this.falsetrue4 = true
      // window.location.href='http://10.58.3.194:8080/build/generic/web/viewer.html?file=/CPEBJ-Project-Management-Flowchart'
      // window.open('../../index.html')
      this.falsetrue1 = false
      this.falsetrue3 = false
      this.falsetrue2 = false
      this.falsetrue5 = false
    },
    truefalse5() {
      this.falsetrue5 = true
      this.falsetrue1 = false
      this.falsetrue3 = false
      this.falsetrue4 = false
      this.falsetrue2 = false
    }
  }
}
</script>
<style lang="less" scoped>
// 头部部分样式
/deep/ .el-header {
  position: relative;
  width: 100%;
  height: 53px !important;
  padding: 0;
  .logo {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 53px;
    z-index: 10;
    border-top: 3px solid #a11440;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0px 2px 3px 0px rgba(232, 236, 237, 0.78);
    img {
      width: 100%;
      height: 50px;
    }
  }
  .leftWrap {
    position: absolute;
    top: 0;
    width: 100%;
    height: 53px;
    line-height: 45px;
    padding-left: 5%;
    background: #fff;
    border-top: 3px solid #ee4c4c;
    box-sizing: border-box;
    img {
      vertical-align: middle;
    }
    .titlee {
      display: inline-block;
      margin: 0 5px;
      font-size: 16px;
      color: #29b4ed;
      font-weight: 550;
      .big {
        color: #000;
        font-weight: 1000;
        span {
          // color: red;
        }
      }
    }
  }
  .rightWrap {
    position: absolute;
    right: 16%;
    font-size: 10px;
    line-height: 38px;
    color: #8B9CA9;
    img {
      width: 11px;
    }
  }
  .righttwoWrap {
    position: absolute;
    right: 5%;
    top: 35%;
    .el-dropdown-link {
      span {
        font-size: 12px;
        color: #8B9CA9;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
    /deep/ .el-dropdown-menu__item {
      font-size: 10px;
      padding: 0;
      line-height: 40px;
    }
  }
}
// 左侧导航部分样式
.el-main {
  background-color: #eaedf1;
}
.el-container {
  height: 100%;
  .navWrap {
    width: 50px;
    height: 100%;
    background: #fff;
    img {
      display: inline-block;
      width: 25px;
      height: 25px;
    }
    a {
      display: block;
      width: 50px;
      height: 32px;
      line-height: 32px;
      padding-left: 30%;
      margin-top: 20px;
      text-decoration: none;
    }
  }
}
</style>
