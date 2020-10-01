
<template>
  <div>
    <slot v-bind="{ nameuser: 'nameuser()', handleName }" />
  </div>
</template>

<script>
export default {
  name: "userConsumer",
  inject: ["nameuser", "handleName"],
};
</script>
