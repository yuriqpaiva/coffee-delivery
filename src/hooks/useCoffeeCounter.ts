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
    updateSelectedCoffeeQuantity(selectedCoffee, type)
    if (type === 'increment') {
      setCounter((state) => state + 1)
    } else if (type === 'decrement' && validateCounterDecrement()) {
      setCounter((state) => state - 1)
    }
  }

  return { counter, handleQuantityChange }
}
