export enum TagId {
  BITCOIN = "bitcoin",
  NOSTR = "nostr",
}

export interface Tag {
  id: TagId;
  name: string;
}

export const tags: Tag[] = [
  {
    id: TagId.NOSTR,
    name: "Nostr",
  },
  {
    id: TagId.BITCOIN,
    name: "Bitcoin",
  },
];
