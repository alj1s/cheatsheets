type AuthenticationState = "unchecked" | "valid" | "invalid";

type CheatSheet = {
  id: string,
  name: string,
  shortcuts: ?{
    items: Array<Shortcut>
  }
};

type Shortcut = {
  id: string,
  description: string,
  keySequence: Array<string>
};

type CheatSheetName = $PropertyType<CheatSheet, "name">;
