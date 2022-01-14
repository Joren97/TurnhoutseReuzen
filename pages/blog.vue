<template>
  <div class="section blog-posts">
    <div class="container">
      <div class="columns" v-if="latestPost">
        <div class="column is-12 post">
          <article class="columns featured is-multiline">
            <div class="column is-7 post-img">
              <img :src="latestPost.acf.afbeelding" />
            </div>
            <div class="column is-5">
              <div>
                <h3 class="heading post-category">
                  {{ latestPost.acf.categorie.name }}
                </h3>
                <h1 class="title post-title">
                  {{ latestPost.title.rendered }}
                </h1>
                <p
                  class="post-excerpt"
                  v-html="shortContent(latestPost, 400)"
                ></p>
                <br />
                <a href="#" class="button is-primary">Lees meer</a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <hr />
      <div class="columns is-multiline">
        <div class="column is-4 post" v-for="p in posts" :key="p.id">
          <article class="columns is-multiline">
            <div class="column is-12 post-img">
              <img :src="p.acf.afbeelding" alt="Featured Image" />
            </div>
            <div class="column is-12 featured-content">
              <h3 class="heading post-category">{{ p.acf.categorie.name }}</h3>
              <h1 class="title post-title">{{ p.title.rendered }}</h1>
              <p
                class="post-excerpt"
                v-html="shortContent(latestPost, 180)"
              ></p>
              <br />
              <a href="#" class="button is-primary">Lees meer</a>
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

  shortContent(post: any, length: number) {
    if (!post) return "";
    const content = post.content.rendered;
    return content.substring(content.indexOf(">") + 1, length) + "..";
  }
}
</script>