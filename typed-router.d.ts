// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/about-page-sections/dataSection': RouteRecordInfo<'/about-page-sections/dataSection', '/about-page-sections/dataSection', Record<never, never>, Record<never, never>>,
    '/about-page-sections/projectSection': RouteRecordInfo<'/about-page-sections/projectSection', '/about-page-sections/projectSection', Record<never, never>, Record<never, never>>,
    '/about-page-sections/teamSection': RouteRecordInfo<'/about-page-sections/teamSection', '/about-page-sections/teamSection', Record<never, never>, Record<never, never>>,
    '/about-page-sections/technicalSection': RouteRecordInfo<'/about-page-sections/technicalSection', '/about-page-sections/technicalSection', Record<never, never>, Record<never, never>>,
    '/aboutPage': RouteRecordInfo<'/aboutPage', '/aboutPage', Record<never, never>, Record<never, never>>,
    '/databaseSearchPage': RouteRecordInfo<'/databaseSearchPage', '/databaseSearchPage', Record<never, never>, Record<never, never>>,
    '/deduplicationPage': RouteRecordInfo<'/deduplicationPage', '/deduplicationPage', Record<never, never>, Record<never, never>>,
    '/entityDetailPage': RouteRecordInfo<'/entityDetailPage', '/entityDetailPage', Record<never, never>, Record<never, never>>,
    '/impressumPage': RouteRecordInfo<'/impressumPage', '/impressumPage', Record<never, never>, Record<never, never>>,
    '/landing-page-sections/contactSection': RouteRecordInfo<'/landing-page-sections/contactSection', '/landing-page-sections/contactSection', Record<never, never>, Record<never, never>>,
    '/landing-page-sections/databaseSection': RouteRecordInfo<'/landing-page-sections/databaseSection', '/landing-page-sections/databaseSection', Record<never, never>, Record<never, never>>,
    '/landing-page-sections/documentationSection': RouteRecordInfo<'/landing-page-sections/documentationSection', '/landing-page-sections/documentationSection', Record<never, never>, Record<never, never>>,
    '/landing-page-sections/welcomeSection': RouteRecordInfo<'/landing-page-sections/welcomeSection', '/landing-page-sections/welcomeSection', Record<never, never>, Record<never, never>>,
    '/landingPage': RouteRecordInfo<'/landingPage', '/landingPage', Record<never, never>, Record<never, never>>,
    '/page-components/section': RouteRecordInfo<'/page-components/section', '/page-components/section', Record<never, never>, Record<never, never>>,
    '/relationDetailPage': RouteRecordInfo<'/relationDetailPage', '/relationDetailPage', Record<never, never>, Record<never, never>>,
    '/sourceDetailPage': RouteRecordInfo<'/sourceDetailPage', '/sourceDetailPage', Record<never, never>, Record<never, never>>,
    '/visualisationStudio': RouteRecordInfo<'/visualisationStudio', '/visualisationStudio', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
