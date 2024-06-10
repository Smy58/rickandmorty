<template>
	<div class="pagination">
		<button v-if="curPage != 0" class="pagination__btn pagination__btn_left"
			@click="onPrevious"
		><img :src="arrow" alt="previous"></button>
		<button v-if="curPage > 0" class="pagination__btn "
			@click="onPage(0)"
		>1</button>
		<button v-if="curPage > 2" class="pagination__btn ">...</button>
		<button v-if="curPage > 1" class="pagination__btn "
			@click="onPage(curPage - 1)"
		>{{ curPage }}</button>
		<button class="pagination__btn pagination__btn_cur">{{ curPage + 1 }}</button>
		<button v-if="curPage < lastPage - 1" class="pagination__btn "
			@click="onPage(curPage + 1)"
		>{{ curPage + 2 }}</button>
		<button v-if="curPage < lastPage - 2" class="pagination__btn ">...</button>
		<button v-if="curPage < lastPage" class="pagination__btn "
			@click="onPage(lastPage)"
		>{{ lastPage + 1 }}</button>
		<button v-if="curPage != lastPage" class="pagination__btn pagination__btn_right"
			@click="onNext"
		><img :src="arrow" alt="next"></button>
	</div>
</template>

<script>
import arrowImg from '@/assets/pagination/arrow4.png'
export default {
	name: "Pagination",
	data() {
		return {
			arrow: arrowImg
		}
	},
	props: {
		curPage: Number,
		onNext: Function,
		onPrevious: Function,
		onPage: Function,
		lastPage: Number
	}
}
</script>

<style lang="scss">
	.pagination {
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: center;

		margin-top: 10px;
		margin-bottom: 30px;
		gap: 5px;


		&__btn {
			width: 50px;
			height: 50px;
			background: #000;
			border: none;
			outline: none;
			padding: 0;

			display: flex;
			align-items: center;
			justify-content: center;

			border-radius: 17px;
			color: white;

			font-size: 20px;

			&_cur {
				background: rgb(60, 62, 68);
			}

			img {
				width: 50px;
				height: 50px;

				
			}

			&_left {
				transform: rotate(90deg);
			}

			&_right {
				transform: rotate(-90deg);
			}
		}
	}
</style>