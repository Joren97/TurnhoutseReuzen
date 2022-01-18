import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import kaartreuzen from '~/store/kaartreuzen';
import dorpsreuzen from '~/store/dorpsreuzen';
import kleinPeerke from '~/store/kleinPeerke';
import kleurplaten from '~/store/kleurplaten';
import post from '~/store/post';
import page from '~/store/page';
import fotoboek from '~/store/fotoboek';

let kaartreuzenModule: kaartreuzen;
let dorpsreuzenModule: dorpsreuzen;
let kleinPeerkeModule: dorpsreuzen;
let postModule: post;
let pageModule: page;
let fotoboekModule: fotoboek;
let kleurplatenModule: kleurplaten;

function initialiseStores(store: Store<any>): void {
    kaartreuzenModule = getModule(kaartreuzen, store);
    dorpsreuzenModule = getModule(dorpsreuzen, store);
    postModule = getModule(post, store);
    pageModule = getModule(page, store);
    fotoboekModule = getModule(fotoboek, store);
    kleurplatenModule = getModule(kleurplaten, store);
    kleinPeerkeModule = getModule(kleinPeerke, store);
}

export { initialiseStores, kaartreuzenModule,dorpsreuzenModule, postModule, pageModule, fotoboekModule, kleurplatenModule, kleinPeerkeModule}