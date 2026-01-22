import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog' 
import { media } from './media'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, media],
}