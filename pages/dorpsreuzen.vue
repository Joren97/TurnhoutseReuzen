<template>
  <div class="section is-relative">
    <div class="vertical-banner dorpsreuzen is-hidden-mobile"></div>
    <div class="container">
      <reuzen-header
        title="De reuzen van de Dorpsgemeenschap"
        image="dorpsreuzen.svg"
      />
      <reuzen-prent v-for="i in dorpsreuzen" :key="i.id" :reus="i" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { dorpsreuzenModule } from "~/store";
@Component({})
export default class Dorpsreuzen extends Vue {
  async beforeMount() {
    dorpsreuzenModule.get();
  }

  get dorpsreuzen() {
    return dorpsreuzenModule.items;
  }
}
</script>