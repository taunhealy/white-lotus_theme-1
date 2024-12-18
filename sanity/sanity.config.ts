import {defineConfig, SchemaTypeDefinition} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { unsplashImageAsset, unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'White Lotus - Theme 1',

  projectId: process.env.SANITY_PROJECT_ID || 'kkh3j2ca',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-03-19',

  plugins: [structureTool(), visionTool(), unsplashImageAsset()],

  form: {
    image: {
      assetSources: (previousAssetSources, { schema }) => {
        // Only allow Unsplash for specific schema types
        const allowUnsplashFor = [
          'heroImage',
          'imageFullScreenSection',
          'work',
          'blogCategory',
          'destination'
        ]

        if (allowUnsplashFor.includes(schema.name)) {
          return previousAssetSources
        }

        // Remove Unsplash for all other image fields
        return previousAssetSources.filter(
          (assetSource) => assetSource !== unsplashAssetSource
        )
      },
    },
  },

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
})
