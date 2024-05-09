export type JBLProps = {
  image: string;
};

export type LatestNewProps = {
  image: string;
};

export type PlayGameProps = {
  image: string;
};

export type CardProps = {
  imagess: string;
  name: string;
};
export type SpeakerProps = {
  image: string;
  name: string;
};
export type CartNewProps = {
  name: string;
  count: string;
};
export type FirstLastNewProps = {
  first: string;
  last: string;
};

export type productProps = {
  name: string;
  border: string;
};

export type cartItem = {
  title?: string;
  id?: number;
  price?: number;
  image?: string;
  description?: string;
  category?: string;
  amounts?: number;
  rating?: string;
};

export type productState = {
  image: string | undefined;
  isLoading: boolean;
  products: cartItem[];
  isError: null | "";
  categories: string[];
};

export type cartState = {
  cart: cartItem[];
};
export type singleState = {
  data: cartItem | null;
  loading: boolean;
  error: string | null;
};

export interface ProductsState {
  data: productState[];
  loading: boolean;
  error: string | null;
}

export interface ReduxProviderProps {
  children: React.ReactNode;
}
