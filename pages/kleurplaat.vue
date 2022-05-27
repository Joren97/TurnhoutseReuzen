<template>
  <div>
    <section class="hero is-fullheight-with-navbar kleurplaat main-content">
      <div class="hero-body">
        <div class="container content">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1 has-text-white">Kleurplaten</h1>
              <p class="has-text-white">Wil je onze reuzen een andere uitstraling geven? Dat kan.. <br>
              Druk &eacute;&eacute;n van onze kleurtekeningen af en kleur ze in hoe jij ze het mooiste vindt.<br>
            Uiteraard mag je ook zelf een mooie tekening maken.</p>
            <p class="has-text-white">
            Wil je je resultaat met ons delen?<br>
            Neem een foto of scan en upload je bestandje via de knop op de deze pagina..<br>
            Misschien zetten we je tekening wel op onze facebook-pagina!<br>
            Ook belonen we met regelmaat een kleurtekening met een kleine verrassing!</p>
            <b-button type="is-danger"
                icon-left="upload" @click="modalActive = true">
                Upload hier je tekening
            </b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-justify-content-right mr-5 mb-5">
        <div class="column is-2" v-for="k in kleurplaten" :key="k.id">
          <a :href="k.source_url" target="_blank" link="noreferrer">
          <b-image
            :src="k.media_details.sizes.full.source_url"
            custom-class="playing-card"
            ratio="3by4"
          ></b-image></a>
        </div>
      </div>
    </section>
    <b-modal v-model="modalActive" scroll="keep" @close="modalActive = false">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                    <p>Om een reactie op je creatie te kunnen geven, willen we uiteraard wat gegevens:</p>
              <b-field label="Naam + voornaam">
                <b-input id="name" placeholder="Naam" v-model="name"></b-input>
              </b-field>

              <b-field label="Adres + gemeente">
                <b-input
                  name="address"
                  id="address"
                  placeholder="Adres + gemeente"
                  v-model="address"
                >
                </b-input>
              </b-field>

              <b-field label="Leeftijd">
                <b-input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Leeftijd"
                  v-model="age"
                >
                </b-input>
              </b-field>
                    </div>
                    <b-field>
            <b-upload v-model="file"
                drag-drop>
                <section class="section has-background-white">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Upload hier je bestanden</p>
                    </div>
                </section>
            </b-upload>
        </b-field>
      <span class="tag is-primary mb-3" v-if="file">
        {{file && file.name}}
        <button class="delete is-small" type="button" @click="file = null"></button>
      </span>
        <div class="columns is-vcentered">
                <div class="column is-narrow">
                  <b-button class="is-primary" @click="submitContact">
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
                </div>
            </div>
        </b-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { kleurplatenModule, contactModule } from "~/store";
@Component({})
export default class Blog extends Vue {
  name: string = "";
  address: string = "";
  age: string = "";
  modalActive: boolean = false;
  file: any = null

  async beforeMount() {
    kleurplatenModule.get();
  }

  get kleurplaten() {
    return kleurplatenModule.items;
  }

  submitContact() {
    try {
      console.log(this.file)
      let formData = new FormData();
      formData.append("your-name", this.name);
      formData.append("your-address", this.address);
      formData.append("your-age", this.age);
      formData.append("file", this.file, 'file.jpg');
      contactModule.submitKleurplaat(formData).then(() => {
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
    this.address = "";
    this.age = "";
    this.file = null;
  }
}
</script>
