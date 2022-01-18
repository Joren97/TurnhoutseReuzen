<template>
  <div class="section blog-posts">
    <div class="container">
      <div class="columns">
        <div class="column is-12 post">
          <article class="columns featured is-multiline">
            <div class="column is-7 post-img">
              <b-skeleton v-if="loadingActive" height="100px"></b-skeleton>
              <img v-if="showContent" :src="latestPost.acf.afbeelding" />
            </div>
            <div class="column is-5">
              <div>
                <h3 class="heading post-category">
                  <b-skeleton v-if="loadingActive" width="80px"></b-skeleton>
                  <span v-if="showContent">
                    {{ latestPost.acf.categorie.name }}</span
                  >
                </h3>
                <h1 class="title post-title">
                  <b-skeleton
                    v-if="loadingActive"
                    width="160px"
                    height="30px"
                  ></b-skeleton>
                  <span v-if="showContent">
                    {{ latestPost.title.rendered }}</span
                  >
                </h1>
                <p v-if="loadingActive"><text-loader /></p>
                <p
                  v-if="showContent"
                  class="post-excerpt"
                  v-html="shortContent(latestPost, 400)"
                ></p>
                <br />
                <b-button
                  tag="nuxt-link"
                  :to="`post?id=${latestPost.id}`"
                  v-if="showContent"
                  class="is-primary"
                  >Lees meer</b-button
                >
              </div>
            </div>
          </article>
        </div>
      </div>
      <hr v-if="showContent" />
      <div class="columns is-multiline">
        <div class="column is-4 post" v-for="p in posts" :key="p.id">
          <article class="columns is-multiline">
            <div class="column is-12 post-img">
              <b-skeleton v-if="loadingActive" height="60px"></b-skeleton>
              <img v-else :src="p.acf.afbeelding" alt="Featured Image" />
            </div>
            <div class="column is-12 featured-content">
              <b-skeleton v-if="loadingActive" width="80px"></b-skeleton>
              <h3 v-else class="heading post-category">
                {{ p.acf.categorie.name }}
              </h3>
              <b-skeleton
                v-if="loadingActive"
                width="130px"
                height="20px"
              ></b-skeleton>
              <h1 v-else class="title post-title">{{ p.title.rendered }}</h1>
              <p v-if="loadingActive"><text-loader /></p>
              <p v-else class="post-excerpt" v-html="shortContent(p, 180)"></p>
              <br />
              <b-button
                tag="nuxt-link"
                :to="`post?id=${p.id}`"
                v-if="!loadingActive"
                class="is-primary"
                >Lees meer</b-button
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { postModule } from "~/store";
@Component({})
export default class Blog extends Vue {
  async beforeMount() {
    postModule.get();
  }

  get posts() {
    const items = postModule.items.slice(1);
    return items;
  }

  get latestPost() {
    return postModule.items[0];
  }

  get loadingActive() {
    return postModule.loading;
  }

  get showContent() {
    return !this.loadingActive && this.latestPost;
  }

  shortContent(post: any, length: number) {
    if (!post) return "";
    const content = post.content.rendered;
    return content.substring(content.indexOf(">") + 1, length) + "..";
  }
}
</script>