<template>
  <div class="section" v-if="showMenu">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="title is-1">Onze reuzen</h1>
          </div>
          <hr />
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-12">
          <h1 class="subtitle is-1 has-text-centered">
            De Turnhoutse Reuzenclub speelt zijn troeven uit:
          </h1>
        </div>
        <div
          class="column mt-5 is-4 has-text-centered is-clickable"
          @click="showReuzen(0)"
        >
          <b-image :src="require('~/assets/img/kaartreuzen.svg')" ratio="1by1"></b-image>

          <h3 class="title is-3">Kaartreuzen</h3>
        </div>
        <div
          class="column mt-5 is-4 has-text-centered is-clickable"
          @click="showReuzen(1)"
        >
          <b-image :src="require('~/assets/img/dorpsreuzen.svg')" ratio="1by1"></b-image>
          <h3 class="title is-3">Dorpsreuzen</h3>
        </div>
        <div
          class="column mt-5 is-4 has-text-centered is-clickable"
          @click="showReuzen(2)"
        >
          <b-image :src="require('~/assets/img/klein-peerke.svg')" ratio="1by1"></b-image>
          <h3 class="title is-3">Klein Peerke</h3>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="section is-relative" v-if="selectedReuzen == 0">
      <div class="vertical-banner kaartreuzen is-hidden-mobile"></div>
      <div class="container">
        <reuzen-header title="De kaartreuzen" image="kaartreuzen.svg" />
        <reuzen-prent v-for="i in kaartreuzen" :key="i.id" :reus="i" />
      </div>
    </div>
    <div class="section is-relative" v-if="selectedReuzen == 2">
      <div class="vertical-banner klein-peerke is-hidden-mobile"></div>
      <div class="container">
        <reuzen-header
          title="Klein Peerken,  d’Aachturenmoeijer, de Hummelpummeltjes en de Vuurman"
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
    <div class="section is-relative" v-if="selectedReuzen == 1">
      <div class="vertical-banner dorpsreuzen is-hidden-mobile"></div>
      <div class="container">
        <reuzen-header
          title="De reuzen van de Dorpsgemeenschap"
          image="dorpsreuzen.svg"
        />
        <reuzen-prent v-for="i in dorpsreuzen" :key="i.id" :reus="i" />
      </div>
    </div>
    <div class="showMenuButton">
      <b-button type="is-primary" icon-right="menu" @click="showReuzen(-1)">
        Toon menu
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { kleinPeerkeModule, kaartreuzenModule, dorpsreuzenModule } from "~/store";
@Component({})
export default class Reuzen extends Vue {
  selectedReuzen: number = -1;

  async beforeMount() {
    kleinPeerkeModule.get();
    kaartreuzenModule.get();
    dorpsreuzenModule.get();
  }

  showReuzen(value: number) {
    this.selectedReuzen = value;
  }

  get showMenu() {
    return this.selectedReuzen == -1;
  }

  get reuzen() {
    switch (this.selectedReuzen) {
      case 0:
        return kaartreuzenModule.items;
      case 1:
        return dorpsreuzenModule.items;
      case 2:
        return kleinPeerkeModule.items;
      default:
        return [];
    }
  }

  get kleinPeerke() {
    return kleinPeerkeModule.items;
  }

  get kaartreuzen() {
    return kaartreuzenModule.items;
  }

  get dorpsreuzen() {
    return dorpsreuzenModule.items;
  }

  get amount() {
    return kleinPeerkeModule.items.length;
  }
}
</script>
