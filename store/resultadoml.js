export const state = () => ({
    weeklyAverage: undefined,
    resultadoml: undefined,
    deteccionesConteoDiario: undefined,
    totalPersonasDiario: undefined,
    deteccionesMensual: undefined
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
    async getDeteccionesConteoDiario({ state, commit, dispatch, rootGetters }, payload) {
        let service = `${rootGetters['api/getServices'].resultadoml.deteccionesConteoDiario}`
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            commit("setDeteccionesConteoDiario", response.data);
        }
    },
    async getTotalPersonasDiario({ state, commit, dispatch, rootGetters }, payload) {
        let service = `${rootGetters['api/getServices'].resultadoml.totalPersonasDiario}`
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            commit("setTotalPersonasDiario", response.data);
        }
    },
    async getDeteccionesMensual({ state, commit, dispatch, rootGetters }, payload) {
        let service = `${rootGetters['api/getServices'].resultadoml.deteccionesMensual}`
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            commit("setDeteccionesMensual", response.data);
        }
    },
    async getLastByCamera({ state, commit, dispatch, rootGetters }, payload) {
        let service = `${rootGetters['api/getServices'].resultadoml.lastByCamera}/${payload.idCamara}`
        let response = await this.dispatch('api/axiosGet', { service: service, data: {} }).then(res => { return res });
        if (response.data != undefined) {
            response.data.horaDeteccion = new Date();
            console.log(response.data.horaDeteccion);
            commit("setResultadoml", response.data);
        } else {
            commit("setResultadoml", undefined);
        }
    },
}

export const getters = {
    getWeeklyAverage(state) {
        return state.weeklyAverage
    },
    getDeteccionesMensual(state) {
        return state.deteccionesMensual
    },
    getResultadoml(state) {
        return state.resultadoml
    },
    getDeteccionesConteoDiario(state) {
        return state.deteccionesConteoDiario
    },
    getTotalPersonasDiario(state) {
        return state.totalPersonasDiario
    }
}

export const mutations = {
    setDeteccionesConteoDiario(state, data) {
        state.deteccionesConteoDiario = data;
    },
    setDeteccionesMensual(state, data) {
        state.deteccionesMensual = data;
    },
    setTotalPersonasDiario(state, data) {
        state.totalPersonasDiario = data;
    },
    setWeeklyAverage(state, data) {
        state.weeklyAverage = data;
    },
    setResultadoml(state, data) {
        state.resultadoml = data;
    },
}
