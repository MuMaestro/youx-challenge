import { Axios, AxiosHeaders, CreateAxiosDefaults } from 'axios';
import Cookies from 'js-cookie';

export default function LoadAxiosConfig() {
	return {
		axiosConfig: {} satisfies CreateAxiosDefaults,
		interceptors: {
			request: (req) => {
				const { headers } = req;
				const access_token = Cookies.get('access_token');
				const newHeaders = {
					...headers,
					...(access_token ? { 'Authorization': `Bearer ${access_token}` } : {}),
				}
				return {
					...req,
					headers: new AxiosHeaders(newHeaders),
				};
			},
			response: (resp) => {
				const { data } = resp;
				if (resp.config.url?.includes('/login') && !!data.access_token) {
					Cookies.set('access_token', data.access_token)
				}
				return {
					...resp,
				};
			}
		} satisfies Partial<{
			[K in keyof Axios['interceptors']]: Parameters<Axios['interceptors'][K]['use']>[0]
		} & {
				[K in keyof Axios['interceptors']as `onFail_${K}`]: Parameters<Axios['interceptors'][K]['use']>[1]
			}>,
	};
}