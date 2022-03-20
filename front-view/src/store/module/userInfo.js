import axios from 'axios'

const userInfo = {
    namespaced: true,
    state: {
        userToken: ''
    },
    mutations: {
        setUserToken(state, token) {
            state.userToken = token
        }
    },
    actions: {
        async tokenValidate(context) {
            const token = context.state.userToken
            const form = new FormData()
            form.append("token", token)

            let result = false
            await axios.post('/user/token', form)
                .then((res) => {
                    context.commit("setUserToken", res.data.token)
                    result = true
                })
                .catch(() => {
                    alert("인증되지 않은 사용자입니다.")
                })

            return new Promise(((resolve, reject) => {
                if(result) {
                    resolve()
                } else {
                    reject()
                }
            }))
        }
    }
}

export default userInfo