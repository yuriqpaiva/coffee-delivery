import { useState } from 'react'
import { SelectedCoffee, useCoffees } from '../contexts/CoffeesContext'
import { Coffee } from '../constants/coffees'

interface CoffeeCounterProps {
  countStartValue: number
  selectedCoffee: SelectedCoffee | Coffee
  options?: {
    allowZero?: boolean
  }
}

export function useCoffeeCounter({
  countStartValue,
  selectedCoffee,
  options = { allowZero: false },
}: CoffeeCounterProps) {
  const { updateSelectedCoffeeQuantity } = useCoffees()
  const [counter, setCounter] = useState(countStartValue)

  function validateCounterDecrement() {
    if (
      (options.allowZero && counter > 0) ||
      (!options.allowZero && counter > 1)
    ) {
      return true
    } else {
      return false
    }
  }

  function handleQuantityChange(type: 'increment' | 'decrement') {
    if (type === 'increment') {
      setCounter((state) => state + 1)
      updateSelectedCoffeeQuantity(selectedCoffee, type)
    } else if (type === 'decrement' && validateCounterDecrement()) {
      setCounter((state) => state - 1)
      updateSelectedCoffeeQuantity(selectedCoffee, type)
    }
  }

  return { counter, handleQuantityChange }
}
