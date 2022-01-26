<template>
  <div class="section is-relative">
    <div class="vertical-banner klein-peerke is-hidden-mobile"></div>
    <div class="container">
      <div class="columns is-mobile is-vcentered">
        <div class="column is-3 is-hidden-mobile"></div>
        <div class="column is-9-mobile content">
          <h1 class="title is-1">Klein peerke</h1>
        </div>
        <div class="column is-narrow is-3">
          <img src="~/assets/img/klein-peerke.svg" alt="" class="badge-image" />
        </div>
      </div>
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