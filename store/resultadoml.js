export const state = () => ({
    weeklyAverage: undefined,
    resultadoml: undefined,
})
// ejemplo de como llamar servicio
// let service = `${rootGetters['api/getWebservice']}/${rootGetters['api/getServices'].login}`

export const actions = {
    async getWeeklyAverage({ state, commit, dispatch, rootGetters }, payload) {
        let service = rootGetters['api/getServices'].resultadoml.weeklyAverage
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            commit("setWeeklyAverage", response.data);
            return state.weeklyAverage
        } else {
            return undefined;
        }
    },
    async lastByCamera({ state, commit, dispatch, rootGetters }, payload) {
        let service = `${rootGetters['api/getServices'].resultadoml.lastByCamera}/${payload.idCamara}`
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            commit("setResultadoml", response.data);
            return state.resultadoml
        } else {
            return undefined;
        }
    },
}

export const getters = {
    getWeeklyAverage(state) {
        return state.resultadoml
    },
    getResultadoml(state) {
        return state.resultadoml
    },
}

export const mutations = {
    setWeeklyAverage(state, data) {
        state.resultadoml = data;
    },
    setResultadoml(state, data) {
        state.resultadoml = data;
    },
}
