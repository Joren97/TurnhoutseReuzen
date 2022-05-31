<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12 content">
          <h1 class="title is-1">Boekingen</h1>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column is-12">
          <p>De verschillende groepen van de Turnhoutse Reuzenclub zijn te boeken voor diverse activiteiten. 
          Maak uw wensen kenbaar via onderstaand formulier en ontvang zo snel mogelijk een aanbieding op maat!</p>
        
      </div>
      
    </div>
    <div class="columns">
    <div class="column is-12">
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

              <b-field label="Telefoonnummer">
                <b-input id="tel" placeholder="Telefoonnummer" v-model="tel"></b-input>
              </b-field>

              <b-field label="Naam vereniging">
                <b-input id="org" placeholder="Vereniging" v-model="org"></b-input>
              </b-field>

              <b-field label="Prijsaanvraag voor">
            <b-select placeholder="Selecteer een groep" v-model="group" expanded>
            <option value="turnhoutse_kaartreuzen">De Turnhoutse Kaartreuzen</option>
            <option value="dropsgemeenschap">De Dorpsgemeenschap</option>
            <option value="klein_peerke">Klein Peerke, d’ Aachturenmoeijer en hun gevolg</option>
            </b-select>
        </b-field>


              <b-field label="Datum activiteit">
            <b-datepicker
                v-model="date"                
                placeholder="Klik om te selecteren.."
                icon="calendar-today"
                :icon-right="date ? 'close-circle' : ''"
                icon-right-clickable
                @icon-right-click="clearDate"
                trap-focus
                locale="fr-FR">
            </b-datepicker>
        </b-field>

        <b-field label="Plaats activiteit">
                <b-input id="location" placeholder="Plaats activiteit" v-model="location"></b-input>
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
        </div></div>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { contactModule } from "~/store";

@Component({})
export default class Boekingen extends Vue {
  name: string = "";
  email: string = "";
  tel: string = "";
  org: string = "";
  date: Date = new Date();
  location: string = "";
  group: string = "";

  get status() {
    return contactModule.status;
  }

  get feedback() {
    return contactModule.feedback;
  }

  clearDate(){
    this.date = new Date();
  }

  submitContact() {
    try {
      let formData = new FormData();
      formData.append("your-name", this.name);
      formData.append("your-email", this.email);
      formData.append("your-tel", this.tel);
      formData.append("your-org", this.org);
      formData.append("your-date", this.date.toUTCString());
      formData.append("your-location", this.location);
      formData.append("your-group", this.group);
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
    this.tel = "";
    this.org = "";
    this.location = "";
    this.group = "";
    this.date = new Date();
  }
}
</script>
