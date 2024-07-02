import { create } from "zustand";

interface CartItem extends Products {
  count: number;
}

type Store = {
  modal: boolean;
  openModal: () => void;
  cartModal: boolean;
  toggleCartModal: () => void;
  cart: CartItem[];
  count: () => number;
  add: (product: Products) => void;
  remove: (idProduct: string) => void;
  removeAll: () => void;
};

const useStore = create<Store>((set, get) => ({
  modal: false,
  openModal: () => set((state) => ({ modal: !state.modal })),
  cartModal: false,
  toggleCartModal: () => set((state) => ({ cartModal: !state.cartModal })),
  cart: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (product: Products) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    set({ cart: updatedCart });
  },
  remove: (idProduct: string) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
}));

function updateCart(product: Products, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}

export default useStore;
