<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getHandle">发送get请求</button>
    <button @click="postHandle">发送post请求</button>
  </div>
</template>


<script>
export default {
  name: "About",
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
    getHandle() {
      this.axios
        .get("https://api.cat-shop.penkuoer.com/api/v1/products", {
          params: {
            page: 3,
            per: 2,
          },
          headers: {},
        })
        .then((res) => console.log(res));
    },
    postHandle() {
      //post请求传递三个参数
      //请求地址
      //请求数据，请求配置，
      //axios默认发送的数据是json格式的
      //配置信息
      //headers
      //content-type:'application/json' 默认
      this.axios
        .post(
          "https://api.cat-shop.penkuoer.com/api/v1/auth/login",
          {
            userName: "xiaoming",
            password: "112132",
          },
          {}
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

