export const state = () => ({
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
        },
        usuario:{
            login: "usuario/login"
        }
    }

})

export const actions = {
    async axiosPost({ state, getters }, payload) {
        console.log({ service: payload.service, data: payload.data })
        let res = await this.$axios({
            method: "POST", headers: state.api.headers, url: payload.service, data: payload.data
        }).then(res => {
            console.log({ RES: res });
            return res
        }).catch(err => {
            console.log({ ERROR: err })
            let res = { data: undefined }
            // swal({ title: 'Ha ocurrido un error inesperado', text: msg, icon: 'error' })
            return res;
        });
        return res;
    },
    async axiosGet({ state, getters }, payload) {
        // console.log({ service: payload.service, data: payload.data })
        let res = await this.$axios({
            method: "GET", headers: state.api.headers, url: payload.service, params: payload.params
        }).then(res => {
            console.log(res)
            return res
        }).catch(err => {
            console.log({ ERROR: err })
            let res = { data: undefined }
            // swal({ title: 'Ha ocurrido un error inesperado', text: msg, icon: 'error' })
            return res;
        });
        return res;
    },
    async axiosPut() {

    },
    async axiosDelete() {

    }
}

export const mutations = {

}

export const getters = {
    getWebservice: state => state.api.webservice,
    getServices: state => state.services
}