import { createStore } from 'vuex'

import global from './module/global'

const store = createStore({
    namespace: true,
    modules: {
        global
    }
})

export default store