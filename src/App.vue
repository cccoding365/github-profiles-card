<script setup>
import { fetchProfilesData } from '@/services/user.js';
import { formatDateTime, getDaysGap } from '@/utils';
import { ref } from 'vue';

let searchUser = ref('');

let userProfiles = ref({});
let isShowCard = ref(false);

const handleSearch = async () => {
	userProfiles.value = await fetchProfilesData(searchUser.value);
	isShowCard.value = true;
	searchUser.value = '';
};

</script>

<template>
	<h1 class="title">Github profiles card</h1>
	<div class="search-container">
		<input class="input" v-model="searchUser" @keyup.enter="handleSearch" placeholder="Github Username" />
		<button class="button" type="button" @click="handleSearch">Search</button>
	</div>

	<div v-if="isShowCard" class="card-container">
		<img class="avatar" :src="userProfiles.avatar_url" alt="">
		<div class="name">{{ userProfiles.name }}</div>
		<div class="bio">{{ userProfiles.bio }}</div>
		<div class="followers-following">
			<span>{{ userProfiles.followers }} </span> Followers&nbsp;
			Following <span>{{ userProfiles.following }}</span>
		</div>
		<div class="gap-days">
			{{ getDaysGap(userProfiles.created_at) }}
		</div>
		<div class="datetime">
			<div class="created_at">
				<div class="label">
					Created
				</div>
				{{ formatDateTime(userProfiles.created_at) }}
			</div>



			<div class="updated_at">
				<div class="label">
					Updated
				</div>
				{{ formatDateTime(userProfiles.updated_at) }}
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.title {
	margin-bottom: 30px;
}

.search-container {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 48px;
	min-width: 100%;
	margin-bottom: 30px;

	.input {
		text-align: center;
		font-size: 32px;
		outline: none;
		color: #333;
		background-color: #ddd;
		padding: 10px 20px;
		border: 3px solid #fff;
		border-radius: 10px 0 0 10px;
		border-right: none;
	}

	.button {
		color: #666;
		font-size: 32px;
		padding: 10px 20px;
		border: 3px solid #fff;
		border-left: none;
		border-radius: 0 10px 10px 0;
		cursor: pointer;

		&:hover {
			color: #333;
		}
	}
}

.card-container {
	min-width: 400px;
	padding: 50px 20px 10px;
	border-radius: 10px;
	border: 3px solid #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	line-height: 2;
	user-select: none;
	background: linear-gradient(to top left, blue, red);
	box-shadow: 3px 3px 10px 5px #111;

	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		padding: 5px;
		border: 3px solid #fff;
		box-shadow: 3px 3px 10px 5px #333;
	}

	.name {
		font-size: 30px;
		font-weight: bold;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}

	.bio {
		text-align: center;
		margin-bottom: 10px;
		max-width: 50vw;
	}

	.followers-following {
		border: 3px solid #ddd;
		border-radius: 999px;
		padding: 3px 20px;
		background: linear-gradient(60deg, blue 20%, red 80%);
		margin-bottom: 20px;

		span {
			font-weight: bold;
			text-align: center;
		}
	}

	.gap-days {
		font-size: 64px;
		line-height: 1;
		position: relative;
		display: flex;
		align-items: center;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

		&::before {
			content: 'Code';
			font-size: 20px;
			position: absolute;
			left: 0;
			transform: translateX(-100%) translate(-10px, -50%);
		}

		&::after {
			content: 'days';
			font-size: 20px;
			position: absolute;
			left: 100%;
			transform: translate(10px, 50%);
		}
	}

	.datetime {
		margin-top: 30px;
		font-weight: bold;
		line-height: 1.4;
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-family: 'Times New Roman', Times, serif;

		.created_at {
			text-align: left;
		}

		.updated_at {
			text-align: right;
		}
	}
}
</style>
