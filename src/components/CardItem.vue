<template>
	<div class="card">
		<img :src="item.image" alt="" class="card__image">
		<div class="card__content">
			<h4 class="card__name">{{ item.name }}</h4>
			<p class="card__text"><span class="card__status">{{ item.status }} </span> - <span class="card_race">{{ item.species }}</span> </p>

			<p class="card__subtext">Last seen location:</p>
			<p class="card__text card__location">{{ item.location.name }}</p>

			<p class="card__subtext">First seen in:</p>
			<p class="card__text card__seria-name">{{ episodTitle }}</p>
			<div v-if="isCardLoad" class="card-loader"></div>

		</div>
		
	</div>
</template>

<script>
import { useEpisods } from '@/store/episods';
import episodeApi from '@/api/episods'


export default {
	name: 'CardItem',
	data() {
		return {
			episodName: '',
			isCardLoad: false
		}
	},
	props: {
		item: Object
	},
	computed: {
		episodTitle() {
			return this.episodName
		}
	},
	async beforeMount() {

		let episodeId = this.item.episode[0].slice(40)
		episodeId = parseInt(episodeId)
		
		const { episods } = useEpisods()

		if (episods[episodeId]) {
			this.episodName = episods[episodeId].name
		} else {
			this.isCardLoad = true
			const { setItems } = useEpisods()

			await episodeApi.getEpisod(episodeId)
			const res = await await episodeApi.getEpisod(episodeId).then((res) => {
				this.isCardLoad = false
				return res
			})

			setItems( res, episodeId )

			this.episodName = episods[episodeId].name
		}
	}
}
</script>

<style lang="scss">
	.card-loader {
		width: 20px;
		height: 20px;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 8px solid #ffffff;
		animation:
			l20-1 0.8s infinite linear alternate,
			l20-2 1.6s infinite linear;
	}
	.card {
		width: 600px;
		height: 220px;
		display: flex;

		align-items: start;
		flex-direction: row;
		gap: 5px;

		background: rgb(60, 62, 68);

		border-radius: 20px;
		box-sizing: border-box;

		&__image {
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
			width: 220px;
			height: 220px;
		}

		&__content {
			display: flex;
			align-items: start;
			flex-direction: column;
			padding: 15px;

			box-sizing: border-box;

		}

		&__name {
			margin: 0;
			color: white;

			font-size: 20px;
			margin-bottom: 5px;
		}

		&__text {
			color: white;
			margin: 0;
			margin-bottom: 10px;
			font-size: 18px;
		}

		&__subtext {
			color: rgb(158, 158, 158);
			margin: 0;
		}
	}
</style>