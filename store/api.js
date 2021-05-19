export const state = () => ({
    error: {
        message: undefined,
    },
    api: {
        webservice: "api",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic c2luZXJnaWFDbGllbnQ6ODQwMGZiNDktZTg4NC00MjE5LTk4NzYtMjlmMjNlNjZjN2Q2'
        },
    },
    services: {
        resultadoml: {
            lastByCamera: "resultadoml/last-resultadoml-v2",
            weeklyAverage: "resultadoml/weekly-average",
            deteccionesConteoDiario: "resultadoml/detecciones-conteo-diario",
            totalPersonasDiario: "resultadoml/total-personas-diario",
            deteccionesMensual: "resultadoml/detecciones-mensual"
        },
        usuario: {
            login: "usuario/login"
        }
    }

})

export const actions = {
    async axiosPost({ state, getters, commit, dispatch }, payload) {
        commit('setError', {});
        return this.$axios({
            method: "POST", headers: state.api.headers, url: payload.service, data: payload.data
        }).then(res => {
            console.log({ RES: res })
            return res
        }).catch(err => {
            let error = {
                message: err.response.data.message
            }
            commit('setError', error);
            console.log({ ERROR: err })
            return { data: undefined };
        });

    },
    async axiosGet({ state, getters }, payload) {
        return this.$axios({
            method: "GET", headers: state.api.headers, url: payload.service, params: payload.params
        }).then(res => {
            console.log(res)
            return res
        }).catch(err => {
            console.log({ ERROR: err })
            return { data: undefined }
        });

    },
    async axiosPut() {

    },
    async axiosDelete() {

    }
}

export const mutations = {
    setError(state, data) {
        state.error = data;
    },
}

export const getters = {
    getWebservice: state => state.api.webservice,
    getError: state => state.error,
    getServices: state => state.services
}