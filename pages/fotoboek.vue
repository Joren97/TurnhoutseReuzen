<template>
  <div class="section fotoboek">
    <div class="container">
      <div class="columns">
        <div class="column is-12 content">
          <h1 class="title is-1 has-text-white">Fotoboek</h1>
          <hr />
        </div>
      </div>
      <div class="columns" v-if="loadingActive">
        <div class="column is-12">
          <text-loader />
        </div>
      </div>
      <div class="columns is-multiline" v-else>
        <div class="column is-12" v-for="(f, i) in formattedFotoboeken" :key="i">
          <h2 class="title is-3 has-text-white">{{ f.title }}</h2>
          <b-carousel
            :indicator-inside="false"
            :autoplay="false"
          >
            <b-carousel-item v-for="(url, i) in f.images" :key="i">
              <b-image class="image is-clickable" :src="url"></b-image>
            </b-carousel-item>
            <!-- <template #indicators="props">
            <figure class="al image" :draggable="false">
                <img :draggable="false" :src="f.images[props.i]" :title="props.i">
            </figure>
        </template> -->
            <!-- <template #indicators="props" v-if="f.images.length > 1">
              <b-image
                class="al image"
                :src="f.images[props.i]"
                :title="props.i"
              ></b-image>
            </template> -->
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "nuxt-property-decorator";
import { fotoboekModule } from "~/store";

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
export default class Fotoboek extends Vue {
  @Provide()
  gallery: boolean = false;
  @Provide()
  galleryId: number | undefined = 0;

  async beforeMount() {
    fotoboekModule.get();
  }

  get fotoboeken() {
    return fotoboekModule.items;
  }

  get loadingActive() {
    return fotoboekModule.loading;
  }

  get formattedFotoboeken() {
    let id = 0;
    return fotoboekModule.items.map((x: any) => {
      id++;
      let images = [];
      const str =
        '<img src="http://site.org/one.jpg />\n <img src="http://site.org/two.jpg />';
      const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

      let content = x.content.rendered;

      return {
        id,
        title: x.title.rendered,
        images: getAttrFromString(content, "img", "src"),
      };
    });
  }

  switchGallery(value: boolean, id?: number) {
    this.gallery = value;
    this.galleryId = id;
    if (value) {
      return document.documentElement.classList.add("is-clipped");
    } else {
      return document.documentElement.classList.remove("is-clipped");
    }
  }
}
</script>
<style scoped>
.is-active .al img {
    border: 1px solid #fff;
    filter: grayscale(0%);
}
.al img {
    border: 1px solid transparent;
    filter: grayscale(100%);
}
</style>