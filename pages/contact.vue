<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12 content">
          <h1 class="title is-1">Contact</h1>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column is-6 content">
          <h3 class="title is-3">Contactgegevens</h3>
          <h5 class="title is-5">Maatschappelijke zetel</h5>
          <p>De Merodelei 47, 2300 Turnhout<br />Belgie, 00 32 14 41 43 79</p>
          <h5 class="title is-5">Bestuursleden</h5>
          <div class="columns">
            <member
              name="Jef Neeskens"
              email="info@reuzenclubturnhout.be"
              tel="0032 14 41 43 79"
              role="Voorzitter"
              column="6"
            />
            <member
              name="Jef Neeskens"
              email="info@reuzenclubturnhout.be"
              tel="0032 14 41 43 79"
              role="Voorzitter"
              column="6"
            />
          </div>
          <div class="columns">
            <member
              name="Jef Neeskens"
              email="info@reuzenclubturnhout.be"
              tel="0032 14 41 43 79"
              role="Voorzitter"
              column="4"
            /><member
              name="Jef Neeskens"
              email="info@reuzenclubturnhout.be"
              tel="0032 14 41 43 79"
              role="Voorzitter"
              column="4"
            /><member
              name="Jef Neeskens"
              email="info@reuzenclubturnhout.be"
              tel="0032 14 41 43 79"
              role="Voorzitter"
              column="4"
            />
          </div>
        </div>
        <div class="column is-6">
          <h3 class="title is-3">Contacteer ons</h3>
          <b-tabs v-model="activeTab">
            <b-tab-item label="Informatie" icon="information">
              <b-field label="Naam">
                <b-input id="name" placeholder="Naam" v-model="name"></b-input>
              </b-field>

              <b-field label="E-mail">
                <b-input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  v-model="email"
                >
                </b-input>
              </b-field>

              <b-field label="Message">
                <b-input
                  v-model="message"
                  name="message"
                  id="message"
                  placeholder="Bericht"
                ></b-input>
              </b-field>
              <div class="columns is-vcentered">
                <div class="column is-narrow">
                  <b-button class="primary" @click="submitContact">
                    Verzenden
                  </b-button>
                </div>
                <div class="column is-narrow">
                  <b-button @click="clear">Leegmaken</b-button>
                </div>
                <div class="column is-narrow">
                  <span :class="`has-text-${$store.state.contact.status}`">
                    {{ $store.state.contact.feedback }}
                  </span>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Prijsaanvraag" icon="currency-eur">
              Lorem ipsum dolor sit amet.
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { contactModule } from "~/store";

@Component({})
export default class Contact extends Vue {
  activeTab: number = 0;
  name: string = "";
  email: string = "";
  message: string = "";

  get status() {
    return contactModule.status;
  }

  get feedback() {
    return contactModule.feedback;
  }

  submitContact() {
    try {
      let formData = new FormData();
      formData.append("your-name", this.name);
      formData.append("your-email", this.email);
      formData.append("your-message", this.message);
      contactModule.submit(formData).then(() => {
        {
          this.clear();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  clear() {
    this.name = "";
    this.email = "";
    this.message = "";
  }
}
</script>
