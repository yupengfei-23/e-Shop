<template>
  <div>
    <div class="sreach-nav">
      <div class="sreach-nav-container">
        <ul>
          <li>全部商品分类</li>
          <li><router-link to="/">商品首页</router-link></li>
          <li><router-link to="/">京东时尚</router-link></li>
          <li><router-link to="/">美妆馆</router-link></li>
          <li><router-link to="/">超市</router-link></li>
          <li><router-link to="/">生鲜</router-link></li>
          <li><router-link to="/">京东国际</router-link></li>
          <li><router-link to="/">闪购</router-link></li>
          <li><router-link to="/">拍卖</router-link></li>
          <li><router-link to="/">金融</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListNav'
};
</script>

<style scoped>
.sreach-nav{
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #B1191A;
}
.sreach-nav-container{
  width: 80%;
  min-width: 1000px;
  height: 64px;
  margin: 0px auto;
}
.sreach-nav-container-90{
  width: 90%;
}
.sreach-nav-container ul{
  margin: 0px;
  padding-left: 0px;
  list-style: none;
}
.sreach-nav-container li{
  cursor: pointer;
  margin-left: 30px;
  line-height: 64px;
  color: #C81623;
  font-size: 18px;
  /*font-weight: bold;*/
  float: left;
}
.sreach-nav-container a{
  color: #373737;
  text-decoration: none;
}
.sreach-nav-container li:first-child{
  padding: 0px 38px;
  background:#B1191A;
  margin: 0px;
  color: #fff;
}
</style>
