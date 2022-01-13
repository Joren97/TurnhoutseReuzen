<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12 content">
          <h1 class="title">Fotoboek</h1>
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-6" v-for="(f, i) in formattedFotoboeken" :key="i">
          <h2 class="title">{{ f.title }}</h2>
          <b-carousel
            :indicator-inside="false"
            :autoplay="false"
            :overlay="galleryId == f.id"
            @click="switchGallery(true, f.id)"
          >
            <b-carousel-item v-for="(url, i) in f.images" :key="i">
              <b-image class="image is-clickable" :src="url"></b-image>
            </b-carousel-item>
            <span
              v-if="gallery"
              @click="switchGallery(false)"
              class="modal-close is-large"
            />
            <template #indicators="props">
              <b-image
                class="al image"
                :src="f.images[props.i]"
                :title="props.i"
              ></b-image>
            </template>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
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
export default class Blog extends Vue {
  gallery: boolean = false;
  galleryId: number | undefined = undefined;

  switchGallery(value: boolean, id?: number) {
    this.gallery = value;
    this.galleryId = id;
    if (value) {
      return document.documentElement.classList.add("is-clipped");
    } else {
      return document.documentElement.classList.remove("is-clipped");
    }
  }

  async beforeMount() {
    fotoboekModule.get();
  }

  get fotoboeken() {
    return fotoboekModule.items;
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
}
</script>
