import { createPinia, Pinia, getActivePinia, StoreGeneric} from 'pinia'
let pinia: Pinia = createPinia()

export function resetPinia(): void {
  const activePinia = getActivePinia()
  if (!activePinia) return

  const activeStores: string[] = Object.keys(activePinia.state.value)

  const storesMap = (activePinia as any)._s as Map<string, StoreGeneric>

  activeStores.forEach((storeId: string) => {
    const store = storesMap.get(storeId)
    store?.$reset()
  })
}

export default pinia