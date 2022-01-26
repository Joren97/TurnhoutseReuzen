<template>
  <div>
    <section class="hero is-fullheight-with-navbar kleurplaat main-content">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1 has-text-white">Reuzenkleurplaten</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-justify-content-center">
        <div class="column is-2" v-for="k in kleurplaten" :key="k.id">
          <div class="card">
            <div class="card-image">
              <a
                :href="k.source_url"
                :download="k.title.rendered"
                target="_blank"
              >
                <figure class="image is-4by3">
                  <img
                    :src="k.media_details.sizes.full.source_url"
                    alt="Placeholder image"
                  />
                </figure>
              </a>
            </div>
          </div>
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
