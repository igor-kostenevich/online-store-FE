import { defineStore } from 'pinia'
import type { IProduct } from '@/types/Interfaces/products'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { useApi } from '@/composables/useApi'

const { api } = useApi()
const { setItem, getItem, removeItem } = useLocalStorage()

interface OrderPayload {
  items: { productId: string; quantity: number }[]
  customerEmail: string
  customerName: string
  customerPhone: string
}

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartProducts: [] as IProduct[],
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
    addToCart(product: IProduct) {
      const existing = this.cartProducts.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        const productWithQuantity: IProduct = { ...product, quantity: 1 }
        this.cartProducts.push(productWithQuantity)
      }

      setItem('cart', this.cartProducts)
    },

    loadFromLocalStorage() {
      const stored: IProduct[] = getItem('cart')
      if (stored) {
        this.cartProducts = stored.map(p => ({
          ...p,
          quantity: p.quantity ?? 1,
        }))
      }
    },

    saveToLocalStorage() {
      setItem('cart', this.cartProducts)
    },

    clearCart() {
      this.cartProducts = []
      removeItem('cart')
    },

    removeFromCart(id: string) {
      this.cartProducts = this.cartProducts.filter(p => p.id !== id)
      setItem('cart', this.cartProducts)
    },

    async submitOrder(payload: OrderPayload) {
      await api.post('/order', payload)
    },
  },
})
