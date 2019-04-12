type CheatSheet = {
  name: string
};

type CheatSheetName = $PropertyType<CheatSheet, "name">;
