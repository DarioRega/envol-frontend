import type { App } from "vue";
import PrimeVue from 'primevue/config';
import Lara from './presets/lara'
import './styles/base.css'

export default (app: App) => {
    app.use(PrimeVue, {
        unstyled: true,
        pt: Lara
    });


 /*   for (const [key, value] of Object.entries(components)) {
        app.component(key, value)
    }*/

}