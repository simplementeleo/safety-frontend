export const state = () => ({
    weeklyAverage: undefined,
    resultadoml: undefined,
})
// ejemplo de como llamar servicio
// let service = `${rootGetters['api/getWebservice']}/${rootGetters['api/getServices'].login}`

export const actions = {
    async getWeeklyAverageData({ state, commit, dispatch, rootGetters }, payload) {
        let service = rootGetters['api/getServices'].resultadoml.weeklyAverage
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            commit("setWeeklyAverage", response.data);
            return state.weeklyAverage
        } else {
            commit("setWeeklyAverage", undefined);
            return undefined;
        }
    },
    async getLastByCamera({ state, commit, dispatch, rootGetters }, payload) {
        let service = `${rootGetters['api/getServices'].resultadoml.lastByCamera}/${payload.idCamara}`
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            response.data.horaDeteccion = new Date();
            console.log(response.data.horaDeteccion);
            commit("setResultadoml", response.data);
            return state.resultadoml
        } else {
            commit("setResultadoml", undefined);
            return undefined;
        }
    },
}

export const getters = {
    getWeeklyAverage(state) {
        return state.weeklyAverage
    },
    getResultadoml(state) {
        return state.resultadoml
    },
}

export const mutations = {
    setWeeklyAverage(state, data) {
        state.weeklyAverage = data;
    },
    setResultadoml(state, data) {
        state.resultadoml = data;
    },
}
