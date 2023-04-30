import { ReactNode, createContext, useContext, useState } from 'react'
import { OrderFormSchema } from 'src/pages/Cart'

interface OrderContextData {
  order: OrderFormSchema | null
  updateOrder: (order: OrderFormSchema) => void
}

const OrderContext = createContext({} as OrderContextData)

interface OrderProviderProps {
  children: ReactNode
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<OrderFormSchema | null>(null)

  function updateOrder(order: OrderFormSchema) {
    setOrder(order)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        updateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder(): OrderContextData {
  return useContext(OrderContext)
}
