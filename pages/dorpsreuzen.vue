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
          <img src="~/assets/img/kaartreuzen.svg" alt="" class="badge-image" />
        </div>
      </div>
      <div class="columns is-vcentered" v-for="i in dorpsreuzen" :key="i.id">
        <div class="column is-3">
          <b-image
            :src="i.acf.afbeelding"
            custom-class="playing-card"
            ratio="2by3"
          ></b-image>
        </div>
        <div class="column content">
          <h2 class="title is-1">{{ i.title.rendered }}</h2>
          <p class="subtitle is-3">{{ i.acf.ondertitel }}</p>
          <p class="divider dorpsreuzen"></p>
          <p>
            {{ i.acf.beschrijving }}
          </p>
        </div>
      </div>
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