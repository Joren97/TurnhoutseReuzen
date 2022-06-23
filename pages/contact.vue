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
          <h5 class="title is-5 mb-1">Maatschappelijke zetel</h5>
          <p class="mb-0">Turnhoutse Reuzenclub vzw</p>
          <p class="mb-6">
            De Merodelei 47, 2300 Turnhout<br />Belgie, 00 32 14 41 43 79
          </p>
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
            <member name="Cis Goris" column="6" role="Secretaris" /><member
              name="Wim Moonnen"
              column="6"
              role="Penningmeester"
            />
          </div>
          <div class="columns">
            <member name="Willem Van Eemeren" column="6" /><member
              name="Paul Slangen"
              column="6"
            />
          </div>
        </div>
        <div class="column is-6">
          <p>
            Heeft u vragen of opmerkingen? Neem dan contact op met ons via onderstaand
            formulier. Wij zullen uw bericht zo snel mogelijk beantwoorden.
          </p>
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
                <b-button class="is-primary" @click="submitContact"> Verzenden </b-button>
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
      <div class="columns">
        <div class="column is-12 content">
          <h1 class="title is-1">Boekingen</h1>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column is-12">
          <p>
            De verschillende groepen van de Turnhoutse Reuzenclub zijn te boeken voor
            diverse activiteiten. Maak uw wensen kenbaar via onderstaand formulier en
            ontvang zo snel mogelijk een aanbieding op maat!
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-12">
          <section class="mt-3">
            <b-field label="Naam + voornaam">
              <b-input id="name" placeholder="Naam" v-model="boekingName"></b-input>
            </b-field>

            <b-field label="E-mail">
              <b-input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                v-model="boekingEmail"
              >
              </b-input>
            </b-field>

            <b-field label="Telefoonnummer">
              <b-input
                id="tel"
                placeholder="Telefoonnummer"
                v-model="tel"
                type="tel"
              ></b-input>
            </b-field>

            <b-field label="Naam vereniging">
              <b-input id="org" placeholder="Vereniging" v-model="org"></b-input>
            </b-field>

            <b-field label="Prijsaanvraag voor">
              <!-- <b-select placeholder="Selecteer een groep" v-model="group" expanded>
            <option value="turnhoutse_kaartreuzen">De Turnhoutse Kaartreuzen</option>
            <option value="dropsgemeenschap">De Dorpsgemeenschap</option>
            <option value="klein_peerke">Klein Peerke, d’ Aachturenmoeijer en hun gevolg</option>
            </b-select> -->
            </b-field>
            <div class="block ml-6">
              <b-checkbox v-model="group" native-value="kaartreuzen"
                >De Turnhoutse Kaartreuzen</b-checkbox
              >
              <br />
              <b-checkbox v-model="group" native-value="dorpsgemeenschap"
                >De Dorpsgemeenschap</b-checkbox
              >
              <br />
              <b-checkbox v-model="group" native-value="kleinpeerke"
                >Klein Peerke, d’ Aachturenmoeijer en hun gevolg</b-checkbox
              >
            </div>

            <b-field label="Datum activiteit">
              <b-datepicker
                v-model="date"
                placeholder="Klik om te selecteren.."
                icon="calendar-today"
                :icon-right="date ? 'close-circle' : ''"
                icon-right-clickable
                @icon-right-click="clearDate"
                trap-focus
                locale="nl-BE"
                :date-parser="(date) => date.substring(2)"
              >
              </b-datepicker>
            </b-field>

            <b-field label="Plaats activiteit">
              <b-input
                id="location"
                placeholder="Plaats activiteit"
                v-model="location"
              ></b-input>
            </b-field>

            <div class="columns is-vcentered">
              <div class="column is-narrow">
                <b-button class="is-primary" @click="submitBoeking"> Verzenden </b-button>
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
  boekingName: string = "";
  boekingEmail: string = "";
  tel: string = "";
  org: string = "";
  date: Date = new Date();
  location: string = "";
  group: Array<string> = [];

  get status() {
    return contactModule.status;
  }

  get feedback() {
    return contactModule.feedback;
  }

  submitContact() {
    console.log("Submitting contact");

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

  submitBoeking() {
    console.log("Submitting boeking");
    try {
      let formData = new FormData();
      formData.append("your-name", this.boekingName);
      formData.append("your-email", this.boekingEmail);
      formData.append("your-tel", this.tel);
      formData.append("your-org", this.org);
      const offset = this.date.getTimezoneOffset();
      const yourDate = new Date(this.date.getTime() - offset * 60 * 1000);
      formData.append("your-date", yourDate.toISOString().split("T")[0]);
      formData.append("your-location", this.location);
      formData.append("your-group", this.group);
      contactModule.submitBoeking(formData).then(() => {
        {
          this.clearBoeking();
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

  clearBoeking() {
    this.boekingName = "";
    this.boekingEmail = "";
    this.tel = "";
    this.org = "";
    this.location = "";
    this.group = "";
    this.date = new Date();
  }

  clearDate() {
    this.date = new Date();
  }
}
</script>
