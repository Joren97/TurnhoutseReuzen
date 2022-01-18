import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';

const RESOURCE = '/wp/v2/dorpsgemeenschapreus';

@Module({ name: 'dorpsreuzen', stateFactory: true, namespaced: true })
export default class GlobalModule extends VuexModule {
    error: string | null = ''
    success: string | null = ''
    loading: boolean = false
    items: Array<any> = []

    @Mutation
    setError(value: string | null = 'An unknown error occured'): void {
        this.loading = false;
        this.error = value;
    }

    @Mutation
    setSuccess(value: string | null) {
        this.success = value;
        this.loading = false;
    }

    @Mutation
    setLoading(value: boolean): void {
        this.loading = value;
    }

    @Mutation
    setItems(value: Array<any>): void {
        this.items = value;
        this.loading  = false;
    }

    @Action
    async get() {
        try {
            this.setLoading(true);
          let {data} = await $axios.get(
            `${RESOURCE}?order_by=date&acf_format=standard`,
          );
          this.setItems(data);
        } catch (error) {
            this.setError();
            this.setLoading(false);
        }
      }
}