import { useRoute } from 'vue-router'

export function useCurrentRoute() {
  const currentRoute = useRoute()

  function isCurrentRouteName(routeName: string = '') {
    return currentRoute.fullPath.startsWith('/' + routeName)
  }

  function isCurrentRoutePath(path: string = '') {
    return currentRoute.path.startsWith('/' + path)
  }

  return { isCurrentRouteName, isCurrentRoutePath }
}
