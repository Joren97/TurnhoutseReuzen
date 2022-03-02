<template>
  <div>
    <section class="hero is-fullheight-with-navbar kleurplaat main-content">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1 has-text-white">Kleurplaten</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-justify-content-right mr-5 mb-5">
        <div class="column is-2" v-for="k in kleurplaten" :key="k.id">
          <a :href="k.source_url" target="_blank" link="noreferrer">
          <b-image
            :src="k.media_details.sizes.full.source_url"
            custom-class="playing-card"
            ratio="3by4"
          ></b-image></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { kleurplatenModule } from "~/store";
@Component({})
export default class Blog extends Vue {
  async beforeMount() {
    kleurplatenModule.get();
  }

  get kleurplaten() {
    return kleurplatenModule.items;
  }
}
</script>
