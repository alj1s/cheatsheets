// @flow
// this is an auto generated file. This will be overwritten

export const onCreateShortcut = `subscription OnCreateShortcut {
  onCreateShortcut {
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
export const onUpdateShortcut = `subscription OnUpdateShortcut {
  onUpdateShortcut {
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
export const onDeleteShortcut = `subscription OnDeleteShortcut {
  onDeleteShortcut {
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
export const onCreateCheatsheet = `subscription OnCreateCheatsheet {
  onCreateCheatsheet {
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
export const onUpdateCheatsheet = `subscription OnUpdateCheatsheet {
  onUpdateCheatsheet {
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
export const onDeleteCheatsheet = `subscription OnDeleteCheatsheet {
  onDeleteCheatsheet {
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
