// src/stores/cart.ts
import { defineStore } from 'pinia'
import { ProductDetails } from '@/types/Interfaces/products'
import { useLocalStorage } from '@/composables/useLocalStorage'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartProducts: [] as ProductDetails[],
    }
  },
  getters: {
    sumOfProducts(state) {
      return state.cartProducts.reduce((sum, product) => {
        return sum + product.price * product.quantity
      }, 0)
    },

    quantityOfProducts(state) {
      return state.cartProducts.reduce((sum, product) => sum + product.quantity, 0)
    },
  },
  actions: {
    addToCart(product: ProductDetails) {
      const existing = this.cartProducts.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        const productWithQuantity = { ...product, quantity: 1 }
        this.cartProducts.push(productWithQuantity)
      }
      const { setItem } = useLocalStorage()
      setItem('cart', this.cartProducts)
    },

    loadFromLocalStorage() {
      const { getItem } = useLocalStorage()
      const stored = getItem<ProductDetails[]>('cart')
      if (stored) {
        this.cartProducts = stored.map(p => ({
          ...p,
          quantity: p.quantity ?? 1,
        }))
      }
    },

    saveToLocalStorage() {
      const { setItem } = useLocalStorage()
      setItem('cart', this.cartProducts)
    },

    clearCart() {
      this.cartProducts = []
      const { removeItem } = useLocalStorage()
      removeItem('cart')
    },

    removeFromCart(id: number) {
      this.cartProducts = this.cartProducts.filter(p => p.id !== id)
      const { setItem } = useLocalStorage()
      setItem('cart', this.cartProducts)
    },
  },
})
