<template>
  <div class="section is-relative">
    <div class="vertical-banner kaartreuzen is-hidden-mobile"></div>
    <div class="container">
      <reuzen-header title="Onze kaartreuzen" image="kaartreuzen.svg" />
      <reuzen-prent v-for="i in kaartreuzen" :key="i.id" :reus="i" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { kaartreuzenModule } from "~/store";
// @ts-ignore
import BackToTop from "vue-backtotop";
@Component({
  components: { BackToTop },
})
export default class Kaartreuzen extends Vue {
  async beforeMount() {
    kaartreuzenModule.get();
  }

  get kaartreuzen() {
    return kaartreuzenModule.items;
  }
}
</script>