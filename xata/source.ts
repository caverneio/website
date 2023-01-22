// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Post",
    columns: [
      {
        name: "createdAt",
        type: "datetime",
        notNull: true,
        defaultValue: "2023-01-21T16:27:12.16Z",
      },
      { name: "slug", type: "string", unique: true },
      { name: "likes", type: "int", notNull: true, defaultValue: "0" },
      { name: "views", type: "int", notNull: true, defaultValue: "0" },
    ],
  },
  {
    name: "Session",
    columns: [
      {
        name: "createdAt",
        type: "datetime",
        notNull: true,
        defaultValue: "2023-01-21T16:28:39.646Z",
      },
      { name: "likes", type: "int", notNull: true, defaultValue: "0" },
      { name: "uid", type: "string", unique: true },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Post = InferredTypes["Post"];
export type PostRecord = Post & XataRecord;

export type Session = InferredTypes["Session"];
export type SessionRecord = Session & XataRecord;

export type DatabaseSchema = {
  Post: PostRecord;
  Session: SessionRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://cuevantn-com-Website-juddqh.us-east-1.xata.sh/db/content",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};