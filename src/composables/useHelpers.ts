export function useHelpers() {
  function debounce<T extends (...args: any[]) => any>(func: T, wait: number = 150): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null

    return function (...args: Parameters<T>) {
      const later = () => {
        timeout = null
        func(...args)
      }

      if (timeout !== null) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(later, wait)
    }
  }

  function formatValue(num: number, decimalPlaces: number = 2, placeholder: string = '-') {
    if (num === undefined || num === null || isNaN(num)) return placeholder
    return num.toFixed(decimalPlaces).replace(/\.?0+$/, '')
  }

  const formatDate = (dateStr: string | Date, showTime: boolean = true): string => {
    const date = new Date(dateStr)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    if(showTime) {
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
    
    return `${year}-${month}-${day}`
  }

  return { debounce, formatValue, formatDate}
}