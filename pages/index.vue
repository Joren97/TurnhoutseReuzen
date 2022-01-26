<template>
  <div>
    <section class="hero is-large main-content">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <p class="title has-text-white">De Turnhoutse Reuzenclub vzw</p>
              <p class="subtitle has-text-white">In de ban van de reuzen!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8" v-show="pageLoading"><text-loader /></div>
          <div class="column is-8" v-show="!pageLoading && page">
            <h1 class="title is-1">Welkom</h1>
            <hr />
            <div v-html="page.content.rendered" class="content"></div>
          </div>
          <div class="column is-4" v-show="pageLoading"><text-loader /></div>
          <div class="column is-4" v-show="!pageLoading">
            <h2 class="title is-1">Neem contact op</h2>
            <hr />
            <div class="content">
              <h3 class="title is-3">Jef Neeskens</h3>
              <p>
                Voorzitter<br />0032 14 41 43 79<br />info@reuzenclubturnhout.be
              </p>
              <h3 class="title is-3">Frank Segers</h3>
              <p>
                Ondervoorzitter<br />0032 478 36 60 72<br />frank@reuzenclubturnhout.be
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { pageModule } from "~/store";
@Component({})
export default class Index extends Vue {
  async beforeMount() {
    pageModule.get("home");
  }

  get page() {
    if (!pageModule.items[0]) {
      return { content: { rendered: "" } };
    }
    return pageModule.items[0];
  }

  get pageLoading() {
    return pageModule.loading;
  }
}
</script>
