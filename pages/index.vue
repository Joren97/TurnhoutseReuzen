<template>
  <div>
    <section class="hero is-large main-content"><div class="content is-relative homepage-title">
          <div class="columns ">
            <div class="column">
              <p class="title has-text-white is-size-1"><span class="is-uppercase"> De Turnhoutse Reuzenclub </span>vzw</p>
              <p class="subtitle has-text-white is-size-3">In de ban van de reuzen&nbsp;!</p>
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
              <b-carousel
            :indicator-inside="true"
            :autoplay="true"
          >
            <b-carousel-item v-for="(url, i) in homepageFotoboek.images" :key="i">
              <b-image class="image is-clickable" :src="url"></b-image>
            </b-carousel-item>
          </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { fotoboekModule, pageModule } from "~/store";

const getAttrFromString = (str: string, node: string, attr: string) => {
  var regex = new RegExp("<" + node + " .*?" + attr + '="(.*?)"', "gi"),
    result,
    res = [];
  while ((result = regex.exec(str))) {
    res.push(result[1]);
  }
  return res;
};


@Component({})
export default class Index extends Vue {
  async beforeMount() {
    pageModule.get("home");
    fotoboekModule.getHomepageCarousel();
  }

  get homepageFotoboek(){
    if (!fotoboekModule.homepageFotoboek) return {images: []};
    const item = fotoboekModule.homepageFotoboek;
    const content = item.content.rendered;

    return {
      images: getAttrFromString(content, "img", "src")
    }
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
