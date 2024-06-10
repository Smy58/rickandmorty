<template>
	<div class="cards-page">
		<SearchBarVue :onFind="handleChangefilter"/>
		<PaginationVue 
			:curPage="curPage"
			:onNext="handleNext"
			:onPrevious="handlePrevious"
			:onPage="handleOpenPage"
			:lastPage ="lastPage"
		/>
		<CardsList :list="curList"/>
		<PaginationVue 
			:curPage="curPage"
			:onNext="handleNext"
			:onPrevious="handlePrevious"
			:onPage="handleOpenPage"
			:lastPage ="lastPage"
		/>
		<LoadBlockVue v-if="isLoading" />
	</div>	
</template>

<script>
import CardsList from '../components/CardsList.vue';
import PaginationVue from '../components/Pagination.vue'
import LoadBlockVue from '@/components/LoadBlock.vue';
import SearchBarVue from '@/components/SearchBar.vue';


import { useCards } from '@/store/cards'
import characters from '@/api/characters'

export default {
	name: 'CardsView',
	components: {
		CardsList,
		PaginationVue,
		LoadBlockVue,
		SearchBarVue
	},
	data() {
		return {
			curPage: 0,
			curList: [],
			isLoading: false,
			lastPage: 0,
			curName: '',
			curStatus: 'All'
		}
	},
	async beforeCreate() {
		const { setItems } = useCards()

		await characters.getCharacters()
		const res = await characters.getCharacters()
		setItems( res, 0 )
		this.updateCards(res)
		this.lastPage = res.info.pages - 1
		
	},
	methods: {
		handleChangefilter(filter) {
			this.curName = filter.name
			this.curStatus = filter.status
			this.curPage = 0

			
			const { clearItems } = useCards()
			
			clearItems()

			this.handleOpenPage(this.curPage)
		},
		updateCards(newCards){
			// this.curList.shift(this.curList.length)

			while (typeof (this.curList.shift()) !== "undefined") {
			}
			newCards.results.forEach((item) => {
				this.curList.push(item)
			})

		},
		async handleNext() {
			if( this.curPage != this.lastPage){
				this.handleOpenPage(this.curPage + 1)
			}
			this.smoothScroll()
		},
		async handlePrevious() {
			if( this.curPage != 0){
				this.handleOpenPage(this.curPage - 1)
			}
			this.smoothScroll()

		},
		async handleOpenPage(num){
			this.curPage = num

			const { cards } = useCards()

			if (cards[this.curPage]) {
				this.updateCards(cards[this.curPage])
			} else {
				this.isLoading = true
				const { setItems } = useCards()

				await characters.getCharactersPage(this.curPage + 1, this.curName, this.curStatus)
				const res = await characters.getCharactersPage(this.curPage + 1, this.curName, this.curStatus).then((res) => {
					this.isLoading = false
					return res
				})
				this.lastPage = res.info.pages - 1
				setItems( res, this.curPage )
				this.updateCards(res)
			}

			this.smoothScroll()

		},
		smoothScroll() {
			window.scrollTo(pageYOffset, 0)
		}
	}
}
</script>

<style lang="scss">
	.cards-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgb(39, 43, 51);
	}
</style>