import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import kaartreuzen from '~/store/kaartreuzen';
import post from '~/store/post';
import page from '~/store/page';
import fotoboek from '~/store/fotoboek';

let kaartreuzenModule: kaartreuzen;
let postModule: post;
let pageModule: page;
let fotoboekModule: fotoboek;

function initialiseStores(store: Store<any>): void {
    kaartreuzenModule = getModule(kaartreuzen, store);
    postModule = getModule(post, store);
    pageModule = getModule(page, store);
    fotoboekModule = getModule(fotoboek, store);
}

export { initialiseStores, kaartreuzenModule, postModule, pageModule, fotoboekModule}