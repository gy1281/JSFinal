<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
//入口组件
import Todo from './todo/todo.vue'
import Header from './todo/header'
export default {
  name: 'App',
  components:{
    Todo,
    Header
  }
}
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover{
  position: absolute;
  left: 0;
  top : 0;
  right : 0;
  bottom : 0;
  background-color : #999;
  opacity : 0.9;
  z-index : -1;
}
</style>
