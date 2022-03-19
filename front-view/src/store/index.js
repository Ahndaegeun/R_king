import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import global from './module/global'
import userInfo from './module/userInfo'

const store = createStore({
    namespace: true,
    modules: {
        global,
        userInfo,
        plugins: [createPersistedState({paths: ["userInfo"]})]
    }
})

export default store