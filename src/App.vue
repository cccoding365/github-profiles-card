<template>
  <el-container>
    <el-header>
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-text class="mx-1" size="large">Computer Network Guide</el-text>
        <div class="flex-grow" />
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>知识专项</template>
          <router-link to="/about">
            <el-menu-item index="2-1">
              项目一
            </el-menu-item>
          </router-link>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">关于</el-menu-item>
        <el-menu-item index="5">设置</el-menu-item>
      </el-menu>

    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const value1 = ref(true)

</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
