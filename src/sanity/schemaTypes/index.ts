import { appendFile } from 'fs'
import { type SchemaTypeDefinition } from 'sanity'
import api from '../api'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [api,],
}
