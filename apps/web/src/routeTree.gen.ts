/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSignUpImport } from './routes/auth/sign-up'
import { Route as AuthSignInImport } from './routes/auth/sign-in'
import { Route as DashboardWorkspaceWorkspaceIdImport } from './routes/dashboard/workspace/$workspaceId'
import { Route as DashboardWorkspaceWorkspaceIdTeamImport } from './routes/dashboard/workspace/$workspaceId/team'
import { Route as DashboardWorkspaceWorkspaceIdSettingsImport } from './routes/dashboard/workspace/$workspaceId/settings'
import { Route as DashboardWorkspaceWorkspaceIdTeamRolesImport } from './routes/dashboard/workspace/$workspaceId/team/roles'
import { Route as DashboardWorkspaceWorkspaceIdTeamMembersImport } from './routes/dashboard/workspace/$workspaceId/team/members'
import { Route as DashboardWorkspaceWorkspaceIdTeamInvitationsImport } from './routes/dashboard/workspace/$workspaceId/team/invitations'
import { Route as DashboardWorkspaceWorkspaceIdSettingsAppearanceImport } from './routes/dashboard/workspace/$workspaceId/settings/appearance'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdBoardImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/board'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignUpRoute = AuthSignUpImport.update({
  id: '/auth/sign-up',
  path: '/auth/sign-up',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  id: '/auth/sign-in',
  path: '/auth/sign-in',
  getParentRoute: () => rootRoute,
} as any)

const DashboardWorkspaceWorkspaceIdRoute =
  DashboardWorkspaceWorkspaceIdImport.update({
    id: '/workspace/$workspaceId',
    path: '/workspace/$workspaceId',
    getParentRoute: () => DashboardRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdTeamRoute =
  DashboardWorkspaceWorkspaceIdTeamImport.update({
    id: '/team',
    path: '/team',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdSettingsRoute =
  DashboardWorkspaceWorkspaceIdSettingsImport.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdTeamRolesRoute =
  DashboardWorkspaceWorkspaceIdTeamRolesImport.update({
    id: '/roles',
    path: '/roles',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdTeamRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdTeamMembersRoute =
  DashboardWorkspaceWorkspaceIdTeamMembersImport.update({
    id: '/members',
    path: '/members',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdTeamRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdTeamInvitationsRoute =
  DashboardWorkspaceWorkspaceIdTeamInvitationsImport.update({
    id: '/invitations',
    path: '/invitations',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdTeamRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute =
  DashboardWorkspaceWorkspaceIdSettingsAppearanceImport.update({
    id: '/appearance',
    path: '/appearance',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdSettingsRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdProjectProjectIdRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdImport.update({
    id: '/project/$projectId',
    path: '/project/$projectId',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdBoardImport.update({
    id: '/board',
    path: '/board',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdProjectProjectIdRoute,
  } as any)

const DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdImport.update({
    id: '/task/$taskId',
    path: '/task/$taskId',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdProjectProjectIdRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-in': {
      id: '/auth/sign-in'
      path: '/auth/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-up': {
      id: '/auth/sign-up'
      path: '/auth/sign-up'
      fullPath: '/auth/sign-up'
      preLoaderRoute: typeof AuthSignUpImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/workspace/$workspaceId': {
      id: '/dashboard/workspace/$workspaceId'
      path: '/workspace/$workspaceId'
      fullPath: '/dashboard/workspace/$workspaceId'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/workspace/$workspaceId/settings': {
      id: '/dashboard/workspace/$workspaceId/settings'
      path: '/settings'
      fullPath: '/dashboard/workspace/$workspaceId/settings'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdSettingsImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdImport
    }
    '/dashboard/workspace/$workspaceId/team': {
      id: '/dashboard/workspace/$workspaceId/team'
      path: '/team'
      fullPath: '/dashboard/workspace/$workspaceId/team'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdTeamImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdImport
    }
    '/dashboard/workspace/$workspaceId/project/$projectId': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId'
      path: '/project/$projectId'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdImport
    }
    '/dashboard/workspace/$workspaceId/settings/appearance': {
      id: '/dashboard/workspace/$workspaceId/settings/appearance'
      path: '/appearance'
      fullPath: '/dashboard/workspace/$workspaceId/settings/appearance'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdSettingsAppearanceImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdSettingsImport
    }
    '/dashboard/workspace/$workspaceId/team/invitations': {
      id: '/dashboard/workspace/$workspaceId/team/invitations'
      path: '/invitations'
      fullPath: '/dashboard/workspace/$workspaceId/team/invitations'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdTeamInvitationsImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdTeamImport
    }
    '/dashboard/workspace/$workspaceId/team/members': {
      id: '/dashboard/workspace/$workspaceId/team/members'
      path: '/members'
      fullPath: '/dashboard/workspace/$workspaceId/team/members'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdTeamMembersImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdTeamImport
    }
    '/dashboard/workspace/$workspaceId/team/roles': {
      id: '/dashboard/workspace/$workspaceId/team/roles'
      path: '/roles'
      fullPath: '/dashboard/workspace/$workspaceId/team/roles'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdTeamRolesImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdTeamImport
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/board': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/board'
      path: '/board'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId/board'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdImport
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
      path: '/task/$taskId'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdImport
    }
  }
}

// Create and export the route tree

interface DashboardWorkspaceWorkspaceIdSettingsRouteChildren {
  DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute: typeof DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute
}

const DashboardWorkspaceWorkspaceIdSettingsRouteChildren: DashboardWorkspaceWorkspaceIdSettingsRouteChildren =
  {
    DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute:
      DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute,
  }

const DashboardWorkspaceWorkspaceIdSettingsRouteWithChildren =
  DashboardWorkspaceWorkspaceIdSettingsRoute._addFileChildren(
    DashboardWorkspaceWorkspaceIdSettingsRouteChildren,
  )

interface DashboardWorkspaceWorkspaceIdTeamRouteChildren {
  DashboardWorkspaceWorkspaceIdTeamInvitationsRoute: typeof DashboardWorkspaceWorkspaceIdTeamInvitationsRoute
  DashboardWorkspaceWorkspaceIdTeamMembersRoute: typeof DashboardWorkspaceWorkspaceIdTeamMembersRoute
  DashboardWorkspaceWorkspaceIdTeamRolesRoute: typeof DashboardWorkspaceWorkspaceIdTeamRolesRoute
}

const DashboardWorkspaceWorkspaceIdTeamRouteChildren: DashboardWorkspaceWorkspaceIdTeamRouteChildren =
  {
    DashboardWorkspaceWorkspaceIdTeamInvitationsRoute:
      DashboardWorkspaceWorkspaceIdTeamInvitationsRoute,
    DashboardWorkspaceWorkspaceIdTeamMembersRoute:
      DashboardWorkspaceWorkspaceIdTeamMembersRoute,
    DashboardWorkspaceWorkspaceIdTeamRolesRoute:
      DashboardWorkspaceWorkspaceIdTeamRolesRoute,
  }

const DashboardWorkspaceWorkspaceIdTeamRouteWithChildren =
  DashboardWorkspaceWorkspaceIdTeamRoute._addFileChildren(
    DashboardWorkspaceWorkspaceIdTeamRouteChildren,
  )

interface DashboardWorkspaceWorkspaceIdProjectProjectIdRouteChildren {
  DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}

const DashboardWorkspaceWorkspaceIdProjectProjectIdRouteChildren: DashboardWorkspaceWorkspaceIdProjectProjectIdRouteChildren =
  {
    DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute,
    DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute,
  }

const DashboardWorkspaceWorkspaceIdProjectProjectIdRouteWithChildren =
  DashboardWorkspaceWorkspaceIdProjectProjectIdRoute._addFileChildren(
    DashboardWorkspaceWorkspaceIdProjectProjectIdRouteChildren,
  )

interface DashboardWorkspaceWorkspaceIdRouteChildren {
  DashboardWorkspaceWorkspaceIdSettingsRoute: typeof DashboardWorkspaceWorkspaceIdSettingsRouteWithChildren
  DashboardWorkspaceWorkspaceIdTeamRoute: typeof DashboardWorkspaceWorkspaceIdTeamRouteWithChildren
  DashboardWorkspaceWorkspaceIdProjectProjectIdRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdRouteWithChildren
}

const DashboardWorkspaceWorkspaceIdRouteChildren: DashboardWorkspaceWorkspaceIdRouteChildren =
  {
    DashboardWorkspaceWorkspaceIdSettingsRoute:
      DashboardWorkspaceWorkspaceIdSettingsRouteWithChildren,
    DashboardWorkspaceWorkspaceIdTeamRoute:
      DashboardWorkspaceWorkspaceIdTeamRouteWithChildren,
    DashboardWorkspaceWorkspaceIdProjectProjectIdRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdRouteWithChildren,
  }

const DashboardWorkspaceWorkspaceIdRouteWithChildren =
  DashboardWorkspaceWorkspaceIdRoute._addFileChildren(
    DashboardWorkspaceWorkspaceIdRouteChildren,
  )

interface DashboardRouteChildren {
  DashboardWorkspaceWorkspaceIdRoute: typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardWorkspaceWorkspaceIdRoute:
    DashboardWorkspaceWorkspaceIdRouteWithChildren,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/dashboard/workspace/$workspaceId': typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
  '/dashboard/workspace/$workspaceId/settings': typeof DashboardWorkspaceWorkspaceIdSettingsRouteWithChildren
  '/dashboard/workspace/$workspaceId/team': typeof DashboardWorkspaceWorkspaceIdTeamRouteWithChildren
  '/dashboard/workspace/$workspaceId/project/$projectId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdRouteWithChildren
  '/dashboard/workspace/$workspaceId/settings/appearance': typeof DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute
  '/dashboard/workspace/$workspaceId/team/invitations': typeof DashboardWorkspaceWorkspaceIdTeamInvitationsRoute
  '/dashboard/workspace/$workspaceId/team/members': typeof DashboardWorkspaceWorkspaceIdTeamMembersRoute
  '/dashboard/workspace/$workspaceId/team/roles': typeof DashboardWorkspaceWorkspaceIdTeamRolesRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/board': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/dashboard/workspace/$workspaceId': typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
  '/dashboard/workspace/$workspaceId/settings': typeof DashboardWorkspaceWorkspaceIdSettingsRouteWithChildren
  '/dashboard/workspace/$workspaceId/team': typeof DashboardWorkspaceWorkspaceIdTeamRouteWithChildren
  '/dashboard/workspace/$workspaceId/project/$projectId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdRouteWithChildren
  '/dashboard/workspace/$workspaceId/settings/appearance': typeof DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute
  '/dashboard/workspace/$workspaceId/team/invitations': typeof DashboardWorkspaceWorkspaceIdTeamInvitationsRoute
  '/dashboard/workspace/$workspaceId/team/members': typeof DashboardWorkspaceWorkspaceIdTeamMembersRoute
  '/dashboard/workspace/$workspaceId/team/roles': typeof DashboardWorkspaceWorkspaceIdTeamRolesRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/board': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/dashboard/workspace/$workspaceId': typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
  '/dashboard/workspace/$workspaceId/settings': typeof DashboardWorkspaceWorkspaceIdSettingsRouteWithChildren
  '/dashboard/workspace/$workspaceId/team': typeof DashboardWorkspaceWorkspaceIdTeamRouteWithChildren
  '/dashboard/workspace/$workspaceId/project/$projectId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdRouteWithChildren
  '/dashboard/workspace/$workspaceId/settings/appearance': typeof DashboardWorkspaceWorkspaceIdSettingsAppearanceRoute
  '/dashboard/workspace/$workspaceId/team/invitations': typeof DashboardWorkspaceWorkspaceIdTeamInvitationsRoute
  '/dashboard/workspace/$workspaceId/team/members': typeof DashboardWorkspaceWorkspaceIdTeamMembersRoute
  '/dashboard/workspace/$workspaceId/team/roles': typeof DashboardWorkspaceWorkspaceIdTeamRolesRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/board': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/dashboard/workspace/$workspaceId'
    | '/dashboard/workspace/$workspaceId/settings'
    | '/dashboard/workspace/$workspaceId/team'
    | '/dashboard/workspace/$workspaceId/project/$projectId'
    | '/dashboard/workspace/$workspaceId/settings/appearance'
    | '/dashboard/workspace/$workspaceId/team/invitations'
    | '/dashboard/workspace/$workspaceId/team/members'
    | '/dashboard/workspace/$workspaceId/team/roles'
    | '/dashboard/workspace/$workspaceId/project/$projectId/board'
    | '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/dashboard/workspace/$workspaceId'
    | '/dashboard/workspace/$workspaceId/settings'
    | '/dashboard/workspace/$workspaceId/team'
    | '/dashboard/workspace/$workspaceId/project/$projectId'
    | '/dashboard/workspace/$workspaceId/settings/appearance'
    | '/dashboard/workspace/$workspaceId/team/invitations'
    | '/dashboard/workspace/$workspaceId/team/members'
    | '/dashboard/workspace/$workspaceId/team/roles'
    | '/dashboard/workspace/$workspaceId/project/$projectId/board'
    | '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/dashboard/workspace/$workspaceId'
    | '/dashboard/workspace/$workspaceId/settings'
    | '/dashboard/workspace/$workspaceId/team'
    | '/dashboard/workspace/$workspaceId/project/$projectId'
    | '/dashboard/workspace/$workspaceId/settings/appearance'
    | '/dashboard/workspace/$workspaceId/team/invitations'
    | '/dashboard/workspace/$workspaceId/team/members'
    | '/dashboard/workspace/$workspaceId/team/roles'
    | '/dashboard/workspace/$workspaceId/project/$projectId/board'
    | '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  AuthSignInRoute: typeof AuthSignInRoute
  AuthSignUpRoute: typeof AuthSignUpRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
  AuthSignInRoute: AuthSignInRoute,
  AuthSignUpRoute: AuthSignUpRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/auth/sign-in",
        "/auth/sign-up"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/workspace/$workspaceId"
      ]
    },
    "/auth/sign-in": {
      "filePath": "auth/sign-in.tsx"
    },
    "/auth/sign-up": {
      "filePath": "auth/sign-up.tsx"
    },
    "/dashboard/workspace/$workspaceId": {
      "filePath": "dashboard/workspace/$workspaceId.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/workspace/$workspaceId/settings",
        "/dashboard/workspace/$workspaceId/team",
        "/dashboard/workspace/$workspaceId/project/$projectId"
      ]
    },
    "/dashboard/workspace/$workspaceId/settings": {
      "filePath": "dashboard/workspace/$workspaceId/settings.tsx",
      "parent": "/dashboard/workspace/$workspaceId",
      "children": [
        "/dashboard/workspace/$workspaceId/settings/appearance"
      ]
    },
    "/dashboard/workspace/$workspaceId/team": {
      "filePath": "dashboard/workspace/$workspaceId/team.tsx",
      "parent": "/dashboard/workspace/$workspaceId",
      "children": [
        "/dashboard/workspace/$workspaceId/team/invitations",
        "/dashboard/workspace/$workspaceId/team/members",
        "/dashboard/workspace/$workspaceId/team/roles"
      ]
    },
    "/dashboard/workspace/$workspaceId/project/$projectId": {
      "filePath": "dashboard/workspace/$workspaceId/project/$projectId.tsx",
      "parent": "/dashboard/workspace/$workspaceId",
      "children": [
        "/dashboard/workspace/$workspaceId/project/$projectId/board",
        "/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId"
      ]
    },
    "/dashboard/workspace/$workspaceId/settings/appearance": {
      "filePath": "dashboard/workspace/$workspaceId/settings/appearance.tsx",
      "parent": "/dashboard/workspace/$workspaceId/settings"
    },
    "/dashboard/workspace/$workspaceId/team/invitations": {
      "filePath": "dashboard/workspace/$workspaceId/team/invitations.tsx",
      "parent": "/dashboard/workspace/$workspaceId/team"
    },
    "/dashboard/workspace/$workspaceId/team/members": {
      "filePath": "dashboard/workspace/$workspaceId/team/members.tsx",
      "parent": "/dashboard/workspace/$workspaceId/team"
    },
    "/dashboard/workspace/$workspaceId/team/roles": {
      "filePath": "dashboard/workspace/$workspaceId/team/roles.tsx",
      "parent": "/dashboard/workspace/$workspaceId/team"
    },
    "/dashboard/workspace/$workspaceId/project/$projectId/board": {
      "filePath": "dashboard/workspace/$workspaceId/project/$projectId/board.tsx",
      "parent": "/dashboard/workspace/$workspaceId/project/$projectId"
    },
    "/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId": {
      "filePath": "dashboard/workspace/$workspaceId/project/$projectId/task/$taskId.tsx",
      "parent": "/dashboard/workspace/$workspaceId/project/$projectId"
    }
  }
}
ROUTE_MANIFEST_END */
