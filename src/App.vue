<script setup>
import Swal from "sweetalert2/dist/sweetalert2.js";

import { fetchProfilesData } from "@/services/user.js";
import { formatDateTime, getDaysGap } from "@/utils";
import { APP_TITLE } from "@/config";
import { ref } from "vue";

let searchUser = ref("");

let userProfiles = ref({});
let isShowCard = ref(false);

const handleFetch = async () => {
	userProfiles.value = await fetchProfilesData(searchUser.value);
	isShowCard.value = true;
	searchUser.value = "";
};

const handleSearch = async () => {
	if (searchUser.value) {
		return handleFetch();
	}
	Swal.fire({
		icon: "question",
		title: "You didn't enter anything. Continue?",
		showCancelButton: true,
		confirmButtonText: "Continue",
		denyButtonText: `Cancel`,
	}).then(async result => {
		if (result.isConfirmed) {
			Swal.fire("Tips", "This is a default result.", "success");
			handleFetch();
		}
	});
};
</script>

<template>
	<img v-if="!isShowCard" class="logo" src="/logo.png" alt="Github card" />
	<h1 class="title">{{ APP_TITLE }}</h1>
	<div v-if="!isShowCard" class="search-container">
		<input
			class="input"
			v-model="searchUser"
			@keyup.enter="handleSearch"
			placeholder="GitHub UserName"
		/>
		<button class="button" type="button" @click="handleSearch">
			Search
		</button>
	</div>

	<div v-if="isShowCard" class="card-container">
		<div class="close" @click="isShowCard = false">×</div>
		<img class="avatar" :src="userProfiles.avatar_url" alt="" />
		<div class="name">{{ userProfiles.name }}</div>
		<div class="bio">{{ userProfiles.bio }}</div>
		<div class="followers-following">
			<span>{{ userProfiles.followers }} </span> Followers&nbsp; Following
			<span>{{ userProfiles.following }}</span>
		</div>
		<div class="gap-days">
			{{ getDaysGap(userProfiles.created_at) }}
		</div>
		<div class="datetime">
			<div class="created_at">
				<div class="label">Created</div>
				{{ formatDateTime(userProfiles.created_at) }}
			</div>

			<div class="updated_at">
				<div class="label">Updated</div>
				{{ formatDateTime(userProfiles.updated_at) }}
			</div>
		</div>
	</div>
	<div v-if="isShowCard" class="description">Design by DoubledConG</div>
	<div v-else class="description">
		Generate your own data card based on your GitHub repository data.
	</div>
</template>

<style lang="less" scoped>
.logo {
	width: 150px;
	height: 150px;
}

.title {
	font-size: 24px;
	margin-bottom: 1rem;
	font-family: "Courier New", Courier, monospace;
}

.search-container {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	margin-bottom: 30px;
	font-size: 14px;
	z-index: 999;

	.input {
		min-width: 70%;
		text-align: center;
		font-size: 1em;
		outline: none;
		color: #666;
		background-color: #ddd;
		padding: 10px 20px;
		border: 3px solid rgba(112, 102, 224, 0.7);
		border-radius: 10px 0 0 10px;
		border-right: none;
	}

	.button {
		width: 30%;
		color: #eee;
		background-color: #7066e0;
		font-size: 1em;
		padding: 10px 20px;
		border: 3px solid rgba(112, 102, 224, 0.7);
		border-left: none;
		border-radius: 0 10px 10px 0;
		cursor: pointer;
		&:hover {
			background-image: linear-gradient(
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.1)
			);
		}
	}
}

.card-container {
	max-width: 100%;
	padding: 50px 20px 10px;
	border-radius: 10px;
	border: 3px solid #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	line-height: 2;
	user-select: none;
	background: linear-gradient(to top left, blue, red);
	box-shadow: 3px 3px 10px 5px #aaa;
	position: relative;

	.close {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 40px;
		height: 40px;
		font-size: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

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
		font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	}

	.bio {
		text-align: center;
		margin-bottom: 10px;
		min-width: 50vw;
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
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

		&::before {
			content: "Code";
			font-size: 20px;
			position: absolute;
			left: 0;
			transform: translateX(-100%) translate(-10px, -50%);
		}

		&::after {
			content: "days";
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
		font-family: "Times New Roman", Times, serif;

		.created_at {
			text-align: left;
		}

		.updated_at {
			text-align: right;
		}
	}
}

.description {
	margin-top: 1rem;
	color: #999;
	font-weight: bold;
	text-align: center;
	font-family: "Courier New", Courier, monospace;
}

@media screen and (min-width: 320px) {
	.title {
		font-size: 28px;
	}
	.search-container {
		font-size: 20px;
	}
}

@media screen and (min-width: 375px) {
	.search-container {
		font-size: 24px;
	}
}

@media screen and (min-width: 425px) {
	.title {
		font-size: 40px;
	}
	.search-container {
		font-size: 30px;
	}
	.description {
		font-size: 22px;
	}
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 1024px) {
}

@media screen and (min-width: 1440px) {
}

@media screen and (min-width: 2560px) {
	.title {
		font-size: 72px;
	}
	.search-container {
		font-size: 72px;
	}
	.description {
		font-size: 36px;
	}
}
</style>
