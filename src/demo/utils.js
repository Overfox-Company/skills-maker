import { useEffect, useState } from "react";

export const routes = [
  {
    path: "/demo/ecommerce",
    name: "E-commerce",
    brand: "objeto",
    text: "Encuentra tu próximo favorito.",
    theme: "ecommerce",
    image: "headphones",
    number: "01",
  },
  {
    path: "/demo/delivery",
    name: "Delivery",
    brand: "a punto",
    text: "Algo rico está cerca.",
    theme: "delivery",
    image: "burger",
    number: "02",
  },
  {
    path: "/demo/videos",
    name: "Videos / Streaming",
    brand: "plano",
    text: "Historias que se quedan contigo.",
    theme: "videos",
    image: "mountain",
    number: "03",
  },
];
export const photo = (name) => `/demo/${name}.jpg`;
export const money = (amount) =>
  new Intl.NumberFormat("es", { style: "currency", currency: "USD" }).format(
    amount,
  );
export const match = (query, ...values) =>
  values
    .join(" ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .includes(
      query
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim(),
    );
export function useSaved(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      return stored !== null &&
        typeof stored === typeof initial &&
        Array.isArray(stored) === Array.isArray(initial)
        ? stored
        : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* The demo remains usable when storage is unavailable. */
    }
  }, [key, value]);
  return [value, setValue];
}
export function useBag(type) {
  const [items, setItems] = useSaved(`demo-${type}-bag`, []);
  const add = (item) =>
    setItems((current) => {
      const found = current.find((row) => row.id === item.id);
      return found
        ? current.map((row) =>
            row.id === item.id ? { ...row, quantity: row.quantity + 1 } : row,
          )
        : [
            ...current,
            {
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
              quantity: 1,
            },
          ];
    });
  return {
    items,
    setItems,
    add,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}
