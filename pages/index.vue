<template>
  <div>
    <section class="hero is-large main-content">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <p class="title has-text-white">De Turnhoutse reuzenclub</p>
              <p class="subtitle has-text-white">In de ban van de reuzen!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8" v-if="page">
            <h1 class="title is-1">Welkom</h1>
            <hr />
            <div v-html="page.content.rendered" class="content"></div>
          </div>
          <div class="column is-4">
            <h2 class="title is-1">Laatste nieuws</h2>
            <hr />
            <p
              class="post-excerpt content"
              v-if="latestPost"
              v-html="shortContent(latestPost, 150)"
            ></p>
            <p><router-link to="/">Lees meer</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { pageModule, postModule } from "~/store";
@Component({})
export default class Blog extends Vue {
  async beforeMount() {
    pageModule.get("home");
    postModule.get();
  }

  get page() {
    return pageModule.items[0];
  }

  get latestPost() {
    return postModule.items[0];
  }

  shortContent(post: any, length: number) {
    if (!post) return "";
    const content = post.content.rendered;
    return content.substring(content.indexOf(">") + 1, length) + "..";
  }
}
</script>
