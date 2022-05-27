<template>
  <div class="column has-text-centered" :class="`is-${column}`">
    <figure class="image is-128x128 p-0 m-0 is-inline-block">
      <img
        class="is-rounded"
        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
      />
    </figure>
    <h6 class="title is-6 mb-0">{{ name }}</h6>
    <p>{{ role }}<br />{{ tel }}<br />{{ email }}</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component({})
export default class Member extends Vue {
  @Prop() readonly name!: string;
  @Prop() readonly role!: string;
  @Prop() readonly tel!: string;
  @Prop() readonly email!: string;
  @Prop() readonly column!: string;
}
</script>