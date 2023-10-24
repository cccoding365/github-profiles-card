<script setup>
import { fetchProfilesData } from '@/services/user.js';
import { ref } from 'vue';

const searchUser = ref('cccoding365');
const userProfiles = ref({});
const handleSearch = async () => {
  userProfiles.value = await fetchProfilesData(searchUser.value);
};
</script>

<template>
  <div class="search-container">
    <input class="input" type="search" v-model="searchUser" placeholder="Enter your github account" />
    <button class="button" type="button" @click="handleSearch">Search</button>
  </div>

  <div class="card-container">
    <div class="avatar">
      <img :src="userProfiles.avatar_url" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-container {
  display: flex;
  justify-content: center;
  font-size: 48px;

  .input {
    font-size: 32px;
    outline: none;
    background-color: #ccc;
    padding: 10px 50px;
    border-radius: 999px 0 0 999px;
    border-right: none;
  }

  .button {
    color: #333;
    font-size: 32px;
    padding: 10px 20px;
    border-left: none;
    border-radius: 0 999px 999px 0;
  }
}
</style>
