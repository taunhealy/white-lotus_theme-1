import {defineConfig, SchemaTypeDefinition} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'White Lotus - Theme 1',

  projectId: process.env.SANITY_PROJECT_ID || 'kkh3j2ca',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-03-19',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
})
