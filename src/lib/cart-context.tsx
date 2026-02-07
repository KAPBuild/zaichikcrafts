'use client'

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { Product } from './products'

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; state: CartState }

function calculateTotals(items: CartItem[]): { totalItems: number; totalPrice: number } {
  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.product.id === action.product.id)
      let newItems: CartItem[]
      if (existing) {
        newItems = state.items.map(i =>
          i.product.id === action.product.id
            ? { ...i, quantity: i.quantity + action.quantity }
            : i
        )
      } else {
        newItems = [...state.items, { product: action.product, quantity: action.quantity }]
      }
      return { items: newItems, ...calculateTotals(newItems) }
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(i => i.product.id !== action.productId)
      return { items: newItems, ...calculateTotals(newItems) }
    }
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        const newItems = state.items.filter(i => i.product.id !== action.productId)
        return { items: newItems, ...calculateTotals(newItems) }
      }
      const newItems = state.items.map(i =>
        i.product.id === action.productId ? { ...i, quantity: action.quantity } : i
      )
      return { items: newItems, ...calculateTotals(newItems) }
    }
    case 'CLEAR_CART':
      return { items: [], totalItems: 0, totalPrice: 0 }
    case 'HYDRATE':
      return action.state
    default:
      return state
  }
}

const initialState: CartState = { items: [], totalItems: 0, totalPrice: 0 }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
}>({ state: initialState, dispatch: () => {} })

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('zaichik-cart')
      if (saved) {
        const parsed = JSON.parse(saved)
        dispatch({ type: 'HYDRATE', state: parsed })
      }
    } catch {}
  }, [])

  // Persist to localStorage
  useEffect(() => {
    if (state.totalItems > 0 || state.items.length === 0) {
      localStorage.setItem('zaichik-cart', JSON.stringify(state))
    }
  }, [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
