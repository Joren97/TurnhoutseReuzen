<template>
  <div>
    <section class="hero is-medium main-content">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1 has-text-white">Reuzenkleurplaten</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column content">
            <h1 class="title is-1">Kleurplaten</h1>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-3" v-for="k in kleurplaten" :key="k.id">
            <a
              :href="k.source_url"
              :download="k.title.rendered"
              target="_blank"
            >
              <b-image :src="k.media_details.sizes.full.source_url"></b-image
            ></a>
          </div>
        </div>
      </div>
    </div>
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
