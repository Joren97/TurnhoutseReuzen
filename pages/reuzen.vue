<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="title is-1">Onze reuzen</h1>
          </div>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 has-text-centered">
          <nuxt-link to="kaartreuzen">
            <b-image
              :src="require('~/assets/img/kaartreuzen.svg')"
              ratio="1by1"
            ></b-image>

            <h3 class="title is-3">Kaartreuzen</h3>
          </nuxt-link>
        </div>
        <div class="column is-4 has-text-centered">
          <nuxt-link to="dorpsreuzen">
            <b-image
              :src="require('~/assets/img/dorpsreuzen.svg')"
              ratio="1by1"
            ></b-image>
            <h3 class="title is-3">Dorpsreuzen</h3>
          </nuxt-link>
        </div>
        <div class="column is-4 has-text-centered">
          <nuxt-link to="kleinpeerke">
            <b-image
              :src="require('~/assets/img/klein-peerke.svg')"
              ratio="1by1"
            ></b-image>
            <h3 class="title is-3">Klein Peerke</h3>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component({})
export default class Reuzen extends Vue {}
</script>
