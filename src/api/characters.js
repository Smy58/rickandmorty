import { ENDPOINTS } from "./endpoints";
import Http from "@/use/useFetch";

const getCharacters = async () => {

	return await Http.get(`${ENDPOINTS.get_characters}`)
		.then((res) => {
			return JSON.parse(res.data.value)
		})
		.catch((err) => err);
}

const getCharactersPage = async (page, name, status) => {
	let filter = ''
	if (name.length > 0) {
		filter = '&name=' + name
		if (status != 'All') {
			filter += '&status=' + status
		}
	} else {
		if (status != 'All') {
			filter += '&status=' + status
		}
	}

	return await Http.get(`${ENDPOINTS.get_characters_from_page}${page}${filter}`)
		.then((res) => {
			return JSON.parse(res.data.value)
		})
		.catch((err) => err);
}

const getCharactersFilter = async (name, status) => {
	let filter = ''
	if (name.length > 0) {
		filter = '?name=' + name
		if (status != 'All') {
			filter += '&status=' + status
		}
	} else {
		if (status != 'All') {
			filter += '?status=' + status
		}
	}

	return await Http.get(`${ENDPOINTS.get_characters}/${filter}`)
		.then((res) => {
			return JSON.parse(res.data.value)
		})
		.catch((err) => err);
}

export default {
	getCharacters,
	getCharactersPage
}