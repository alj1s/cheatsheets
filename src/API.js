/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShortcutInput = {|
  id?: ?string,
  description: string,
  keySequence: Array< string >,
  shortcutCheatsheetId: string,
|};

export type UpdateShortcutInput = {|
  id: string,
  description?: ?string,
  keySequence?: ?Array< string >,
  shortcutCheatsheetId?: ?string,
|};

export type DeleteShortcutInput = {|
  id?: ?string,
|};

export type CreateCheatsheetInput = {|
  id?: ?string,
  name: string,
|};

export type UpdateCheatsheetInput = {|
  id: string,
  name?: ?string,
|};

export type DeleteCheatsheetInput = {|
  id?: ?string,
|};

export type ModelShortcutFilterInput = {|
  id?: ?ModelIDFilterInput,
  description?: ?ModelStringFilterInput,
  keySequence?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelShortcutFilterInput >,
  or?: ?Array< ?ModelShortcutFilterInput >,
  not?: ?ModelShortcutFilterInput,
|};

export type ModelIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelCheatsheetFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelCheatsheetFilterInput >,
  or?: ?Array< ?ModelCheatsheetFilterInput >,
  not?: ?ModelCheatsheetFilterInput,
|};

export type CreateShortcutMutationVariables = {|
  input: CreateShortcutInput,
|};

export type CreateShortcutMutation = {|
  createShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type UpdateShortcutMutationVariables = {|
  input: UpdateShortcutInput,
|};

export type UpdateShortcutMutation = {|
  updateShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type DeleteShortcutMutationVariables = {|
  input: DeleteShortcutInput,
|};

export type DeleteShortcutMutation = {|
  deleteShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type CreateCheatsheetMutationVariables = {|
  input: CreateCheatsheetInput,
|};

export type CreateCheatsheetMutation = {|
  createCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type UpdateCheatsheetMutationVariables = {|
  input: UpdateCheatsheetInput,
|};

export type UpdateCheatsheetMutation = {|
  updateCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type DeleteCheatsheetMutationVariables = {|
  input: DeleteCheatsheetInput,
|};

export type DeleteCheatsheetMutation = {|
  deleteCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type GetShortcutQueryVariables = {|
  id: string,
|};

export type GetShortcutQuery = {|
  getShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type ListShortcutsQueryVariables = {|
  filter?: ?ModelShortcutFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListShortcutsQuery = {|
  listShortcuts: ? {|
    __typename: "ModelShortcutConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      description: string,
      keySequence: Array< string >,
      cheatsheet: {|
        __typename: string,
        id: string,
        name: string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCheatsheetQueryVariables = {|
  id: string,
|};

export type GetCheatsheetQuery = {|
  getCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type ListCheatsheetsQueryVariables = {|
  filter?: ?ModelCheatsheetFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCheatsheetsQuery = {|
  listCheatsheets: ? {|
    __typename: "ModelCheatsheetConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateShortcutSubscription = {|
  onCreateShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type OnUpdateShortcutSubscription = {|
  onUpdateShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type OnDeleteShortcutSubscription = {|
  onDeleteShortcut: ? {|
    __typename: "Shortcut",
    id: string,
    description: string,
    keySequence: Array< string >,
    cheatsheet: {|
      __typename: string,
      id: string,
      name: string,
      shortcuts: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
  |},
|};

export type OnCreateCheatsheetSubscription = {|
  onCreateCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnUpdateCheatsheetSubscription = {|
  onUpdateCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};

export type OnDeleteCheatsheetSubscription = {|
  onDeleteCheatsheet: ? {|
    __typename: "Cheatsheet",
    id: string,
    name: string,
    shortcuts: ? {|
      __typename: string,
      items: ? Array<? {|
        __typename: string,
        id: string,
        description: string,
        keySequence: Array< string >,
      |} >,
      nextToken: ?string,
    |},
  |},
|};