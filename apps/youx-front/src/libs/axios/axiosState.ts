import axios, { Axios, AxiosInstance } from 'axios'
import { atom } from 'jotai'
import LoadAxiosConfig from './axiosConfigLoader'

const AxiosJotaiStore = atom<{
	instance: AxiosInstance
}>({
	instance: axios.create(),
})

AxiosJotaiStore.onMount = ((set) => {
	const config = LoadAxiosConfig();
	const instance = axios.create(config.axiosConfig);
	instance.interceptors.request.use(config.interceptors.request);
	instance.interceptors.response.use(config.interceptors.response);
	set(() => ({ instance }))
})

const AxiosAtom = atom((get) => {
	return get(AxiosJotaiStore).instance
}, () => { })

export {
	AxiosAtom,
	AxiosJotaiStore as _AxiosAtomStore,
}