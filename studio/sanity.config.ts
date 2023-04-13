import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'coral-wolf',

  projectId: '143n24zn',
  dataset: 'tikiraidersdata',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
