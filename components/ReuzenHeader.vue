

      <template>
  <div class="columns is-mobile is-vcentered mb-5">
    <div class="column is-3 is-hidden-mobile"></div>
    <div class="column is-9-mobile">
      <h1 class="title is-size-1 is-size-4-mobile">{{ title }}</h1>
    </div>
    <div class="column is-narrow is-3">
      <img :src="require(`~/assets/img/${image}`)" alt="" class="badge-image" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component({})
export default class ReuzenPrent extends Vue {
  @Prop() readonly title!: string;
  @Prop() readonly image!: string;
}
</script>