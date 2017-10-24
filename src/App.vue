<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat quaerat, ut, incidunt culpa repudiandae accusamus dolorem obcaecati error corrupti vero, eveniet qui explicabo laborum possimus. Maiores minus molestias provident!</p>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <hello/>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      message: 'Hello Vuejs',
    };
  },
};
</script>

<style lang="scss">
$variable: #2c3e50;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $variable;
  margin-top: 60px;
  padding: 0 30px;
}
</style>
