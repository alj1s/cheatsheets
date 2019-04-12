// @flow
// this is an auto generated file. This will be overwritten

export const createShortcut = `mutation CreateShortcut($input: CreateShortcutInput!) {
  createShortcut(input: $input) {
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
export const updateShortcut = `mutation UpdateShortcut($input: UpdateShortcutInput!) {
  updateShortcut(input: $input) {
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
export const deleteShortcut = `mutation DeleteShortcut($input: DeleteShortcutInput!) {
  deleteShortcut(input: $input) {
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
export const createCheatsheet = `mutation CreateCheatsheet($input: CreateCheatsheetInput!) {
  createCheatsheet(input: $input) {
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
export const updateCheatsheet = `mutation UpdateCheatsheet($input: UpdateCheatsheetInput!) {
  updateCheatsheet(input: $input) {
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
export const deleteCheatsheet = `mutation DeleteCheatsheet($input: DeleteCheatsheetInput!) {
  deleteCheatsheet(input: $input) {
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
