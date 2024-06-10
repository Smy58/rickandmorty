<template>
	<div class="search">
		<div class="search__filters">
			<input v-model="searchInput" type="text" class="search__input"
				placeholder="Name of character"
			>
			<div class="search__status">
				<p class="search__text">Status: </p>
				<select :value="statusInput" @input="clicked" class="search__select">
					<option
						v-for="option in statusTypes"
						:key="option.id"
						:value="option.value"
						>
						{{ option.value }}
					</option>
				</select>
			</div>
			
		</div>
		
		<button class="search__btn" @click="onSubmit">Find</button>
	</div>
</template>

<script>
export default {
	name: "SearchBar",
	data() {
		return {
			searchInput: '',
			statusInput: 'All',
			statusTypes: [
				{
					id: 1,
					value: 'All'
				},
				{
					id: 2,
					value: 'Alive'
				},
				{
					id: 3,
					value: 'Dead'
				},
				{
					id: 4,
					value: 'Unknown'
				}
			]
		}
	},
	props: {
		onFind: Function,
	},
	methods: {
		onSubmit() {
			this.onFind({name: this.searchInput, status: this.statusInput})
		},
		clicked($event) {
			this.statusInput = $event.target.value
		},
	}
}
</script>

<style lang="scss">
	.search {
		width: 80%;
		display: flex;
		align-items: start;
		gap: 15px;

		margin-top: 20px;
		margin-bottom: 20px;

		&__filters {
			width: 80%;
			display: flex;
			flex-direction: column;
			gap: 5px;
		
		}

		&__input {
			height: 40px;

			padding: 10px;
			padding-left: 12px;
			box-sizing: border-box;
			outline: none;
			border: none;

			border-radius: 12px;
			font-size: 18px;
		}

		&__status {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		&__text {
			font-size: 16px;
			color: white;
		}

		&__select {
			height: 36px;
			width: 200px;

			padding: 8px;
			padding-left: 10px;
			box-sizing: border-box;
			outline: none;

			border-radius: 12px;
			font-size: 16px;

			appearance: none;
			/* safari */
			-webkit-appearance: none;

			cursor: pointer;
		}

		&__btn {
			height: 40px;
			width: 80px;
			padding: 0;
			box-sizing: border-box;
			border: none;
			font-size: 20px;
			outline: none;
			border-radius: 12px;

			transition: all 0.4s ease;

			&:hover {
				background: transparent;
				border: solid 2px white;
				color: white;

			}
		}

		
	}
</style>