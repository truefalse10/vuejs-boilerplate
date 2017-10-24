<template>
  <div>
    {{ count }}
    <button @click="increment">+1</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['count']),
  methods: {
    increment() {
      this.$store.commit('increment');
    },
  },
};
</script>

