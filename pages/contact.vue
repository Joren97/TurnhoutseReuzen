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
          <h5 class="title is-5">Maatschappelijke zetel</h5>
          <p class="mb-6">De Merodelei 47, 2300 Turnhout<br />Belgie, 00 32 14 41 43 79</p>
          <h5 class="title is-5">Bestuursleden</h5>
          <div class="columns">
            <member
              name="Jef Neeskens"
              email="info@reuzenclubturnhout.be"
              tel="00 32 (0)14 41 43 79"
              role="Voorzitter"
              column="6"
            />
            <member
              name="Frank Segers"
              email="frank@reuzenclubturnhout.be"
              tel="00 32 (0)478 36 60 72"
              role="Ondervoorzitter"
              column="6"
            />
          </div>
          <div class="columns">
            <member
              name="Cis Goris"
              column="6"
              role="Secretaris"
            /><member name="Wim Moonnen" column="6" role="Penningmeester" />
          </div>
          <div class="columns">
            <member name="Willem Van Eemeren" column="6" /><member
              name="Paul Slangen"
              column="6"
            />
          </div>
        </div>
        <div class="column is-6">
          <p>Heeft u vragen of opmerkingen? Neem dan contact op met ons via onderstaand formulier. Wij zullen uw bericht zo snel mogelijk beantwoorden.</p>
            <section class="mt-3">
              <b-field label="Naam + voornaam">
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
                  type="textarea"
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
              </section>
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
