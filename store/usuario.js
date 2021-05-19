export const state = () => ({
    token: undefined || localStorage.getItem("secretToken")
})
// ejemplo de como llamar servicio
// let service = `${rootGetters['api/getWebservice']}/${rootGetters['api/getServices'].login}`

export const actions = {
    async regularLogin({ state, commit, dispatch, rootGetters }, payload) {
        let service = rootGetters['api/getServices'].usuario.login
        let response = await this.dispatch('api/axiosPost', { service: service, data: payload }).then(res => { return res });
        if (response.data != undefined) {
            localStorage.setItem("secretToken", response.data)
            commit("setToken", response.data);
            this.$router.push("/");
        }
    },
}

export const getters = {
    getToken(state) {
        return state.token
    },

}

export const mutations = {
    setToken(state, data) {
        state.token = data;
    },
}
