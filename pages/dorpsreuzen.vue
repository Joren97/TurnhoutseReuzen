<template>
  <div class="section is-relative">
    <div class="vertical-banner dorpsreuzen is-hidden-mobile"></div>
    <div class="container">
      <div class="columns is-mobile is-vcentered">
        <div class="column is-3 is-hidden-mobile"></div>
        <div class="column is-9-mobile content">
          <h1 class="title is-1">Onze dorspreuzen</h1>
        </div>
        <div class="column is-narrow is-3">
          <img src="~/assets/img/dorpsreuzen.svg" alt="" class="badge-image" />
        </div>
      </div>
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