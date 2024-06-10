import { ENDPOINTS } from "./endpoints";
import Http from "@/use/useFetch";

const getEpisod = async (id) => {

	return await Http.get(`${ENDPOINTS.get_episod}${id}`)
		.then((res) => {
			return JSON.parse(res.data.value)
		})
		.catch((err) => err);
}

export default {
	getEpisod
}