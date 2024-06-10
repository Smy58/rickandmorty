const baseUrl = 'https://rickandmortyapi.com/api/'
import { useFetch } from "@vueuse/core";


export default class Http {

	static options() {

		return {
			baseURL: baseUrl,
		};
	}

	static post(path, data) {
		return useFetch(() => path, {
			method: "post",
			...this.options(),
			body: data,
		})
			.then((res) => res)
			.catch((err) => err);
	}

	static del(path, data) {
		return useFetch(() => path, {
			method: "delete",
			...this.options(),
			body: data,
		})
			.then((res) => res)
			.catch((err) => err);
	}

	static get(path) {
		return useFetch(baseUrl + path, {
			method: "get",
			...this.options(),
		})
			.then((res) => {
				return res
			})
			.catch((err) => err);
	}
}