<template lang="pug">
#admin-products
  v-row
    v-col(cols='12')
      h1.text-center 商品管理
    v-divider
    v-col(cols='12')
      v-btn(color='success') 新增商品
    v-col(cols="12")
      v-table
        thead
          tr
            th 圖片
            th 名稱
            th 管理
        tbody
          tr(v-if='products.length > 0' v-for='product in products' :key='product._id')
            td
              v-img(:src='product.image')
            td {{ product.name }}
            td
          tr(v-else)
            td.text-center(colspan='3') 沒有商品
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const products = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
