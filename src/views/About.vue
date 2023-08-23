<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-divider direction="vertical" />
        <el-main>
            <el-text class="mx-1" size="large">IP地址块转子网掩码</el-text>
            <el-divider />
            <el-row :gutter="0">
                <el-col :span="3">
                    <el-text class="mx-1" size="large">IP地址块：</el-text>
                </el-col>
                <el-col :span="3" v-for="(item, idx) in 4">
                    <el-input-number type="number" controls-position="right" v-model="IP_address[idx]" :min="0"
                        :max="255" />
                </el-col>
                <el-col :span="3">
                    <el-input-number type="number" :min="0" :max="32" v-model="IP_address[4]" />
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" @click="transIPAddressHandle">转换</el-button>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script setup>

import { ref, reactive } from 'vue'
const IP_address = ref([0, 0, 0, 0, 0])

const transIPAddressHandle = () => {
    console.log(IP_address.value)
}

</script>

<style scoped></style>