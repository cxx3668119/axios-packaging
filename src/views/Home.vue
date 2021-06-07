<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    //axios.get 发起get请求
    //参数一表示请求地址
    //参数二表示配置信息
    //具体可见： http://www.axios-js.com/zh-cn/docs/
    //params  表示传递到服务器端的数据，已url参数的形式拼接在请求地址后面
    //{page:1,per:3}
    // 比如:http://jsonplaceholder.typicode.com/
    //最终生成：http://jsonplaceholder.typicode.com/?page=1&per=3
    // 其中?表示可选参数
    //headers  表示请求头
  },
};
</script>
