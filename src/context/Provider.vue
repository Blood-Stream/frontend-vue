<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "UserProvider",
  data() {
    return {
      name: "value",
    };
  },
  computed: {
    Name() {
      return this.name;
    },
  },
  methods: {
    setName(name) {
      this.name = name;
    },
  },
  provide() {
    return {
      handleName: this.setName,
      nameuser: () => this.Name,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
