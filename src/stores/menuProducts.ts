import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useMenuProduct = defineStore('menuProducts', () => {
  const menu = reactive([
    {
      id:1,
      label: "Woman's Fashion",
      slug: "womens-fashion",
      children: [
        { label: "Shirts", slug: "shirts" },
        { label: "Shoes", slug: "shoes" }
      ]
    },
    {
      id:2,
      label: "Men's Fashion",
      slug: "mens-fashion",
      children: [
        { label: "Shirts", slug: "shirts" },
        { label: "Shoes", slug: "shoes" }
      ]
    },
    {
      id:3,
      label: "Electronics",
      slug: "Electronics",
      children: [

      ]
    },
    {
      id:4,
      label: "Home & Lifestyle",
      slug: "Home-Lifestyle",
      children: []
    },
    {
      id:5,
      label: "Medicine",
      slug: "Medicine",
      children: []
    },
    {
      id:6,
      label: "Sports & Outdoor",
      slug: "Sports-Outdoor",
      children: []
    },
    {
      id:7,
      label: "Baby’s & Toys",
      slug: "Babys-Toys",
      children: []
    },
    {
      id:8,
      label: "Baby’s & Toys",
      slug: "Babys-Toys",
      children: []
    },
    {
      id:9,
      label: "Groceries & Pets",
      slug: "Groceries-Pets",
      children: []
    },
    {
      id:10,
      label: "Health & Beauty",
      slug: "Health-Beauty",
      children: []
    },
  ])

  const getMenu = computed(() => menu)

  return { menu,getMenu }
})
