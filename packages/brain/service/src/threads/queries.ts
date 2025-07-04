import type { ThreadSearchSchemaInput } from '@netko/brain-domain'
import { ThreadQueries } from '@netko/brain-repository'
import type { z } from 'zod'

const defaultLimit = 20

export const threadService = {
  searchThreads: async (userId: string, input: z.infer<typeof ThreadSearchSchemaInput>) => {
    return ThreadQueries.searchThreadsByName(userId, input.query, defaultLimit)
  },

  getSidebarThreads: async (userId: string) => {
    return ThreadQueries.getSidebarThreads(userId)
  },
}
