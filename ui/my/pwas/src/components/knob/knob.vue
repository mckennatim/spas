<template>
  <div>
  	<h4>hey dog</h4>
  	<q-btn @click="doSomething">Do something</q-btn>
    <q-icon name="alarm" />
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'
export default {
  components: {
    QBtn,
    QIcon
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
