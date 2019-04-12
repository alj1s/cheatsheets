// @flow
// this is an auto generated file. This will be overwritten

export const getShortcut = `query GetShortcut($id: ID!) {
  getShortcut(id: $id) {
    id
    description
    keySequence
    cheatsheet {
      id
      name
      shortcuts {
        nextToken
      }
    }
  }
}
`;
export const listShortcuts = `query ListShortcuts(
  $filter: ModelShortcutFilterInput
  $limit: Int
  $nextToken: String
) {
  listShortcuts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      keySequence
      cheatsheet {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getCheatsheet = `query GetCheatsheet($id: ID!) {
  getCheatsheet(id: $id) {
    id
    name
    shortcuts {
      items {
        id
        description
        keySequence
      }
      nextToken
    }
  }
}
`;
export const listCheatsheets = `query ListCheatsheets(
  $filter: ModelCheatsheetFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheatsheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      shortcuts {
        nextToken
      }
    }
    nextToken
  }
}
`;
