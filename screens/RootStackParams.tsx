// screens/RootStackParams.ts
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
};

export type RootStackParamList = {
  Welcome: undefined;
  Main: { menuItems: MenuItem[]; addMenuItem: (newItem: MenuItem) => void }; // Ensure addMenuItem is included here
  AddMenu: { addMenuItem: (newItem: MenuItem) => void };
  Search: undefined;
};
