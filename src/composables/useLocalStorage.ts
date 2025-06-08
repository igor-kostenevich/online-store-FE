export function useLocalStorage() {
  function getItem(key: string) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  function setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  function removeItem(key: string) {
    localStorage.removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem,
  }
}
