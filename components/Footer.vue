<template>
  <footer class="footer has-background-grey-dark py-1">
    <div class="container content py-0 my-0">
      <div class="columns content is-vcentered">
        <div class="column is-2 has-text-centered-mobile">
          <figure class="image is-128x128 is-inline-block">
            <img src="~/assets/img/logo.svg" alt="Logo Turnhoutse reuzenclub" />
          </figure>
        </div>
        <div class="column has-text-white has-text-centered-mobile">
          <h3 class="has-text-white has-text-weight-light">
            Turnhoutse Reuzenclub vzw
          </h3>
          <p>Maatschappelijke zetel:<br />De Merodelei 47 ,2300 Turnhout</p>
        </div>
        <div class="column is-narrow has-text-white">
          <div class="columns is-vcentered">
            <div class="column is-narrow has-text-centered-mobile">
              <figure class="image is-128x128 is-inline-block">
                <img
                  src="~/assets/img/reuzen-in-vlaanderen.png"
                  alt="Logo reuzen in vlaanderen"
                />
              </figure>
            </div>
            <div class="column is-narrow has-text-centered-mobile">
              <figure class="image is-inline-block">
                <img
                  src="~/assets/img/reusvriendelijke-gemeente.png"
                  alt="Logo reusvriendelijke gemeente"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-bottom"></div>
    <div class="content has-text-centered has-text-white py-3">
      <p>
        Ontwerp:
        <a href="https://jorensynaeve.be" target="_blank" rel="noreferrer"
          >Joren Synaeve</a
        >
      </p>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component({})
export default class Footer extends Vue {}
</script>