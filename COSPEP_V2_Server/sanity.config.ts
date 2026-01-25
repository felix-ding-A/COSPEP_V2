import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'COSPEP_V2_Server',

  projectId: 'lxm1elmu',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
