import { defineStore } from "pinia"

export const useCards = defineStore("cards", () => {
	const cards = ref([])

	const setItems = (items, page) => {
		cards.value[page] = items

	}

	const clearItems = () => {
		cards.value = []
	}

	return {
		cards,
		setItems,
		clearItems
	}
})