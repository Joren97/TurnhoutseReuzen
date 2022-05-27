<template>
  <div class="is-flex is-flex-direction-column" style="min-height: 100vh">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~/assets/img/logo.svg" alt="Lightweight UI components for Vue.js based on Bulma" />
        </b-navbar-item>
      </template>
      <template #start> </template>

      <template #end>
        <b-navbar-item tag="router-link" to="/"> Welkom </b-navbar-item>
        <b-navbar-item tag="router-link" to="/reuzen">
          Onze reuzen
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/fotoboek">
          Fotoboek
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/indebanvanreuzen">
          In de ban van Reuzen
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/blog">
          Mededelingen
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/kleurplaat">
          Kleurplaten
        </b-navbar-item>
        <!-- <b-navbar-dropdown label="Onze reuzen">
          <b-navbar-item tag="router-link" to="/kaartreuzen">
            Kaartreuzen
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/dorpsreuzen">
            Reuzen dorpsgemeenschap
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/kleinpeerke">
            Klein Peerke &amp; d&apos;Aachturenmoeijer
          </b-navbar-item>
        </b-navbar-dropdown> -->
        <b-navbar-item tag="router-link" to="/contact">Contact</b-navbar-item>
        <b-navbar-item tag="router-link" to="/boekingen">Boekingen</b-navbar-item>
      </template>
    </b-navbar>

    <section style="flex: 1">
      <Nuxt />
    </section>
    <Footer />

    <back-to-top text="Back to top">
      <b-button type="is-primary" icon-right="arrow-up" />
    </back-to-top>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
};
</script>
