<template>
  <div class="columns is-vcentered">
    <div class="column is-3">
      <b-image
        :src="reus.acf.afbeelding"
        custom-class="playing-card"
        ratio="2by3"
      ></b-image>
    </div>
    <div class="column content ml-5">
      <h2 class="title is-1">{{ reus.title.rendered }}</h2>
      <p class="subtitle is-3">{{ reus.acf.ondertitel }}</p>
      <p class="divider kaartreuzen"></p>
      <p>
        {{ reus.acf.beschrijving }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component({})
export default class ReuzenPrent extends Vue {
  @Prop() readonly reus!: any;
}
</script>