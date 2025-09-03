"use client";

import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Nový stav, ktorý nám povie, či sa dáta už načítali
  const [isLoaded, setIsLoaded] = useState(false);

  // --- KĽÚČOVÁ ZMENA JE TU ---
  // Tento useEffect sa spustí IBA na strane klienta, po prvom renderovaní
  useEffect(() => {
    try {
      const localData = localStorage.getItem('cart');
      if (localData) {
        setCartItems(JSON.parse(localData));
      }
    } catch (error) {
      console.error("Chyba pri načítavaní košíka z LocalStorage", error);
    }
    // Dáme vedieť, že načítanie je hotové
    setIsLoaded(true);
  }, []); // Prázdne pole `[]` zaručí, že sa to spustí len raz

  // Tento useEffect zostáva rovnaký - ukladá zmeny
  useEffect(() => {
    // Ukladáme dáta, iba ak už bolo prvé načítanie dokončené
    if (isLoaded) {
      try {
        localStorage.setItem('cart', JSON.stringify(cartItems));
      } catch (error) {
        console.error("Chyba pri ukladaní košíka do LocalStorage", error);
      }
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product) => {
    console.log("FUNKCIA 'addToCart' BOLA ZAVOLANÁ S PRODUKTOM:", product);
    setCartItems(prevItems => [...prevItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Posielame ďalej aj `isLoaded`, ale hlavne, `cartCount` sa teraz počíta správne
  const value = {
    cartItems,
    addToCart,
    clearCart,
    // Vraciame 0, kým sa dáta nenačítajú, aby sa server a klient zhodovali
    cartCount: isLoaded ? cartItems.length : 0,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};