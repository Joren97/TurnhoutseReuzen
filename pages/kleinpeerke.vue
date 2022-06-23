<template>
  <div class="section is-relative">
    <div class="vertical-banner klein-peerke is-hidden-mobile"></div>
    <div class="container">
      <reuzen-header
        title="Klein Peerken, <br>  d’Aachturenmoeijer, de Hummelpummeltjes en de Vuurman"
        image="klein-peerke.svg"
      />
      <reuzen-prent
        v-for="(i, idx) in kleinPeerke"
        :key="i.id"
        :reus="i"
        :class="{ 'mt-6': idx == amount - 1 }"
      />
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

  get amount() {
    return kleinPeerkeModule.items.length;
  }
}
</script>
