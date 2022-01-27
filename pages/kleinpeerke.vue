<template>
  <div class="section is-relative">
    <div class="vertical-banner klein-peerke is-hidden-mobile"></div>
    <div class="container">
      <reuzen-header title="Klein peerke" image="klein-peerke.svg" />
      <reuzen-prent v-for="i in kleinPeerke" :key="i.id" :reus="i" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { kleinPeerkeModule } from "~/store";
@Component({})
export default class Kaartreuzen extends Vue {
  async beforeMount() {
    kleinPeerkeModule.get();
  }

  get kleinPeerke() {
    return kleinPeerkeModule.items;
  }
}
</script>