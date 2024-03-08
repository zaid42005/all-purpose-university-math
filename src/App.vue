// frontend/src/App.vue

<script>
export default {
  data() {
    return {
      query: 'x',
      result: ''
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/wolfram?query=${this.query}`);
        const data = await response.text();
        this.result = data;
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<template>
  <div>
    <pre>{{ result }}</pre>
  </div>
</template>
