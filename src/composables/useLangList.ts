import { computed } from 'vue'

export function useLangList() {
  const langList = computed(() => {
    return [
      {
        value: 'en',
        name: 'English',
        icon: 'en',
      },
    ]
  })

  return { langList }
}
