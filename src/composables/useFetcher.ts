import {createFetch} from "@vueuse/core";



export const useFetcher = createFetch({
    baseUrl: import.meta.env.BACKEND_URL,
    options: {
    },
    fetchOptions: {
        mode: 'cors',
    },
})
