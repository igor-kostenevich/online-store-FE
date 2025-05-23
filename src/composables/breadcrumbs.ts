import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useBreadcrumbs() {
  const route = useRoute()

  const breadcrumbs = computed(() => {
    const paths = route.path.split('/').filter(Boolean)
    const crumbs = [{ name: 'Home', to: '/' }]

    paths.forEach((segment, index) => {
      const to = '/' + paths.slice(0, index + 1).join('/')
      crumbs.push({
        name: segment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
        to,
      })
    })

    return crumbs
  })
  return { breadcrumbs }
}
