<template>
  <div class="hello">
    <h5>Welc to your Quasar PWA</h5>
    <ul>
      <li><a href="http://quasar-framework.org" target="_blank" rel="noopener">Docs</a></li>
      <li><a href="http://forum.quasar-framework.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://gitter.im/quasarframework/Lobby" target="_blank" rel="noopener">Gitter Chat</a></li>
      <li><a href="https://twitter.com/quasarframework" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
    <q-icon name="alarm" />
    <q-knob   
      v-model="model"
      size="250px"
      color="red"
      line-width="2px"
      track-color="white"      
      :min="min"
      :max="max"
      :placeholder="'$ ' + model"/>
  </div>
</template>

<script>
import { QIcon, QKnob } from 'quasar'
export default {
  components: {
    QIcon,
    QKnob
  },
  data () {
    return {
      model: 30,
      min: 0,
      max: 50
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'

.hello
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
