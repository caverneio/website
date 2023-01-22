// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  publishedAt: string
  description?: string | undefined
  status: 'draft' | 'published'
  series?: Series | undefined
  tags?: Tag[] | undefined
  /** MDX file body */
  body: MDX
  headings: json
  tweetIds: json
  publishedAtFormatted: string
  slug: string
}

export type Video = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Video'
  tags?: Tag[] | undefined
  /** Override the default Youtube title */
  title?: string | undefined
  description: string
  /** MDX file body */
  body: MDX
  youtube: nested
}  

/** Nested types */
export type Series = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Series'
  title: string
  order: number

}

export type Tag = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Tag'
  title: 'Next.js' | 'MDX' | 'Next Conf' | 'React Conf'
  slug: 'next' | 'mdx' | 'next-conf' | 'react-conf'

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Post | Video
export type DocumentTypeNames = 'Post' | 'Video'

export type NestedTypes = Series | Tag
export type NestedTypeNames = 'Series' | 'Tag'


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Post: Post
  Video: Video
}

export type NestedTypeMap = {
  Series: Series
  Tag: Tag
}

 