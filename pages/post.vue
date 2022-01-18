<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="title is-1">Mededeling</h1>
          </div>
          <hr />
        </div>
      </div>
      <div class="columns featured is-multiline">
        <div class="column is-7 post-img">
          <b-skeleton v-if="loadingActive" height="100px"></b-skeleton>
          <img v-if="!loadingActive" :src="post.acf.afbeelding" />
        </div>
        <div class="column is-5">
          <div>
            <h3 class="heading post-category">
              <b-skeleton v-if="loadingActive" width="80px"></b-skeleton>
              <span v-if="!loadingActive"> {{ post.acf.categorie.name }}</span>
            </h3>
            <h1 class="title post-title">
              <b-skeleton
                v-if="loadingActive"
                width="160px"
                height="30px"
              ></b-skeleton>
              <span v-if="!loadingActive"> {{ post.title.rendered }}</span>
            </h1>
            <p v-if="loadingActive"><text-loader /></p>
            <p v-if="!loadingActive" v-html="post.content.rendered"></p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-button class="is-primary" @click="$router.go(-1)">Terug</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { postModule } from "~/store";
@Component({})
export default class Post extends Vue {
  beforeMount() {
    postModule.getById(this.$route.query.id);
  }

  get post() {
    return postModule.item;
  }

  get loadingActive() {
    return postModule.loading;
  }
}
</script>