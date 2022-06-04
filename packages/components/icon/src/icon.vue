
<script lang="ts">
import { iconProps } from "./icon";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "GIcon",
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { "font-size": props.size + "px" } : {}),
        ...(props.color ? { color: props.color } : {}),
      };
    });
    return {
      style,
    };
  },
});
</script>

<template>
  <i :style="style">
    <slot></slot>
  </i>
</template>