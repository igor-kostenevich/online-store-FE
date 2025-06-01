import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartProducts: [],
    }
  },
  getters: {
    sumOfProducts(state) {
      return state.cartProducts.reduce((sum, product) => {
        return sum + product.price * product.quantity
      }, 0)
    },
  },
  actions: {
    addToCart(product: any) {
      const existing = this.cartProducts.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        const productWithQuantity = { ...product, quantity: 1 }
        this.cartProducts.push(productWithQuantity)
      }
      this.saveToLocalStorage()
    },

    loadFromLocalStorage() {
      const stored = localStorage.getItem('cart')
      if (stored) {
        this.cartProducts = JSON.parse(stored).map(p => ({
          ...p,
          quantity: p.quantity ?? 1,
        }))
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    },

    clearCart() {
      this.cartProducts = []
      localStorage.removeItem('cart')
    },
  },
})
