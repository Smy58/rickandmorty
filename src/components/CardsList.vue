<template>
	<div class="cards-list">
		<CardItem v-for="item in list" :key="item.id" :item="item" />
	</div>
</template>

<script>
import CardItem from './CardItem.vue';
export default {
	name: 'CardsList',
	components: {
		CardItem
	},
	props: {
		list: Array
	}
}
</script>

<style lang="scss">
	.cards-list {
		width: 95%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		gap: 20px;
		padding: 20px;
	}
</style>