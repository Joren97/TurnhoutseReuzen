<template>
  <footer class="footer has-background-grey-dark">
    <div class="container content pb-3">
      <div class="columns content">
        <div class="column is-3 has-text-white">
          <h3 class="has-text-white has-text-weight-light">Menu</h3>
          <p>
            <router-link to="/" class="has-text-weight-light">Home</router-link>
          </p>
          <p><router-link to="/">Home</router-link></p>
          <p><router-link to="/">Home</router-link></p>
        </div>
        <div class="column is-3 has-text-white">
          <h3 class="has-text-white has-text-weight-light">Contact</h3>
          <p><a href="tel:+32477076234">+32 (0) 477 07 62 34</a></p>
          <p>
            <a href="mailto:info@reuzenclubturnhout.be"
              >info@reuzenclubturnhout.be</a
            >
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100063455529651"
              target="_blank"
              rel="noreferrer"
              >Facebook</a
            >
          </p>
        </div>
        <div class="column has-text-white">
          <h3 class="has-text-white has-text-weight-light">
            In samenwerking met
          </h3>
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <figure class="image is-128x128">
                <img
                  src="~/assets/img/reuzen-in-vlaanderen.png"
                  alt="Logo reuzen in vlaanderen"
                />
              </figure>
            </div>
            <div class="column is-narrow">
              <figure class="image">
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
    <div class="content has-text-centered has-text-white py-5">
      <p>Gemaakt door Joren Synaeve</p>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component({})
export default class Footer extends Vue {}
</script>