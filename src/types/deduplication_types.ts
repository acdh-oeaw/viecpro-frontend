// deduplication types

import type { genderOptions } from "./apis_types";

export type requestMap = {
  [key: string]: deduplicationRequestSettings;
};
export interface memberItem {
  id: string;
  name: string;
}
export interface vorfinItem {
  id: number;
  name: string;
}

export interface singleListItem {
  id: number;
  name: string;
}


export interface memberListItem {
  id: number;
  name: string;
}

export interface groupListItem {
  id: number;
  name: string;
  vorfin: vorfinItem;
}
export type deduplicationItem = groupListItem | singleListItem | memberItem

export type ItemType = "single" | "member" | "group";
export interface deduplicationRequestSettings {
  url: string;
  method: "POST" | "PUT" | "UPDATE" | "DELETE" | "GET";
  callback: Function;
}

export interface Group {
  name: string;
  gender: genderOptions;
  vorfin: vorfinItem;
  members: Array<memberItem>;
}

export type itemIDArray = number[];
export interface Single {}


// api response types
// TODO: add types for json response objects here. 