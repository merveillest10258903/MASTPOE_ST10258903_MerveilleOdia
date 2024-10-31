// screens/RootStackParams.ts


export interface MenuItem {
  id: string; // Unique identifier
  name: string;
  description: string;
  course: string; // e.g., "Starter", "Main", "Dessert"
  price: number; // Price in your desired currency
}


export type RootStackParamList = {
  Welcome: undefined;
  Main: { menuItems: MenuItem[]; addMenuItem: (newItem: MenuItem) => void };
  AddMenu: { menuItems: MenuItem[]; addMenuItem: (newItem: MenuItem) => void };
  Search: undefined;
};

