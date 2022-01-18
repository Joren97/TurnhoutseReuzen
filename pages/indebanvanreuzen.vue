<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12" v-if="pageLoading"><text-loader /></div>
          <div class="column is-12" v-if="!pageLoading && page">
            <h1 class="title is-1">In de ban van de reuzen</h1>
            <hr />
            <div v-html="page.content.rendered" class="content"></div>
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
export default class InDeBanVanReuzen extends Vue {
  async beforeMount() {
    pageModule.get("in-de-ban-van-de-reuzen");
  }

  get page() {
    return pageModule.items[0];
  }

  get pageLoading() {
    return pageModule.loading;
  }
}
</script>
