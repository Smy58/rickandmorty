import { defineStore } from "pinia"

export const useEpisods = defineStore("episods", () => {
	const episods = ref([])

	const setItems = (item, id) => {
		episods.value[id] = item

	}

	return {
		episods,
		setItems
	}

})