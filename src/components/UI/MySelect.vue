<template>
  <select v-model="value" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
import { useModelWrapper } from '@/_config'

export default {
  name: "my-select-vue",
  changeOp: '',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  }, methods: {
    changeOption(event) {
      this.$emit('update:changeOption', event.target.value)
    }
  }, 
  setup(props, { emit }) { 
    return { 
      value: useModelWrapper(props, emit, 'modelValue'), 
    }
  }
};
</script>

<style scoped>

</style>