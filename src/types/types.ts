export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name:
      | "Romaguera-Crona"
      | "Deckow-Crist"
      | "Romaguera-Jacobson"
      | "Robel-Corkery";
    catchPhrase: string;
    bs: string;
  };
};

export type Cart = {
  id: number;
  userId: number;
  date: string;
  products: CartItem[];
  __v: number;
};

export type CartItem = {
  productId: number;
  quantity: number;
};
