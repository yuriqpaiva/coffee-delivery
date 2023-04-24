import { ReactNode, createContext, useContext, useState } from 'react'
import { COFFEE_DELIVERY_TAX } from '../constants'
import { Coffee } from 'src/constants/coffees'

export interface SelectedCoffee {
  id: number
  name: string
  description: string
  price: number
  imageSource: string
  tags: string[]
  quantity: number
}

interface CoffeesContextData {
  selectedCoffees: SelectedCoffee[]
  updateSelectedCoffeeQuantity: (
    coffee: Coffee,
    action: 'increment' | 'decrement',
  ) => void
  numberOfSelectedCoffeesType: number
  removeCoffeeFromCart: (coffeeId: number) => void
  totalCostWithoutDeliveryTax: number
  totalCostWithDeliveryTax: number
}

const CoffeesContext = createContext<CoffeesContextData>(
  {} as CoffeesContextData,
)

interface Props {
  children: ReactNode
}

export function CoffeesProvider({ children }: Props) {
  const [selectedCoffees, setSelectedCoffees] = useState<SelectedCoffee[]>([])
  const numberOfSelectedCoffeesType = selectedCoffees.length

  function updateSelectedCoffeeQuantity(
    coffee: Coffee,
    action: 'increment' | 'decrement',
  ) {
    const existingCoffee = selectedCoffees.find(
      (selectedCoffee) => selectedCoffee.id === coffee.id,
    )

    if (existingCoffee) {
      const updatedSelectedCoffees = selectedCoffees.map((selectedCoffee) => {
        if (selectedCoffee.id === coffee.id) {
          return {
            ...selectedCoffee,
            quantity:
              action === 'increment'
                ? selectedCoffee.quantity + 1
                : selectedCoffee.quantity - 1,
          }
        }

        return selectedCoffee
      })

      setSelectedCoffees(updatedSelectedCoffees)
    } else {
      if (action === 'decrement') return
      const newSelectedCoffee: SelectedCoffee = {
        ...coffee,
        quantity: 1,
      }

      setSelectedCoffees([...selectedCoffees, newSelectedCoffee])
    }
  }

  function removeCoffeeFromCart(coffeeId: number) {
    setSelectedCoffees(
      selectedCoffees.filter(
        (selectedCoffee) => selectedCoffee.id !== coffeeId,
      ),
    )
  }

  const totalCostWithoutDeliveryTax = selectedCoffees.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity
  }, 0)

  const totalCostWithDeliveryTax =
    totalCostWithoutDeliveryTax + COFFEE_DELIVERY_TAX

  return (
    <CoffeesContext.Provider
      value={{
        selectedCoffees,
        updateSelectedCoffeeQuantity,
        numberOfSelectedCoffeesType,
        removeCoffeeFromCart,
        totalCostWithoutDeliveryTax,
        totalCostWithDeliveryTax,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

export function useCoffees(): CoffeesContextData {
  return useContext(CoffeesContext)
}
