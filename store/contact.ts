import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';

const RESOURCE = '/contact-form-7/v1/contact-forms/82/feedback';
const MAIL_SENT = 'mail_sent';
const INVALID = 'validation_failed';

@Module({ name: 'contact', stateFactory: true, namespaced: true })
export default class ContactModule extends VuexModule {
    error: string | null = ''
    feedback: string | null = ''
    status: string | null = ''
    loading: boolean = false

    @Mutation
    setFeedback(value: { message: string, status: string }) {
        this.loading = false;
        this.feedback = value.message;
        this.status = value.status;
    }

    @Mutation
    setLoading(value: boolean): void {
        this.loading = value;
    }

    @Action
    async submit(params: any) {
        try {
            this.setLoading(true);
            let {
                data: { status, message, invalid_fields },
            } = await $axios.post(`${RESOURCE}`, params);
            if (status == MAIL_SENT) {
                this.setFeedback({ message, status: 'success' });
            } else if (status == INVALID) {
                this.setFeedback({ message, status: 'danger' });
            }
            setTimeout(() => {
                this.setFeedback({ message: '', status: '' });
            }, 5000);
        } catch (error) {
            this.setLoading(false);
        }
    }
}