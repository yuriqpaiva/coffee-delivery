import { NumberSelector } from '@/components/NumberSelector'
import {
  ControlsWrapper,
  InfoWrapper,
  MainContentWrapper,
  Price,
  RemoveButton,
  SelectedCoffeeItemContainer,
} from './styles'
import { Trash } from '@phosphor-icons/react'
import traditionalCoffeeImg from '@/assets/coffees/traditional.png'
import {
  SelectedCoffee,
  useCoffees,
} from '../../../../../contexts/CoffeesContext'
import { useCoffeeCounter } from '../../../../../hooks/useCoffeeCounter'

interface Props {
  selectedCoffee: SelectedCoffee
}

export function SelectedCoffeeItem({ selectedCoffee }: Props) {
  const formattedPrice = selectedCoffee.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const { removeCoffeeFromCart } = useCoffees()

  const { counter, handleQuantityChange } = useCoffeeCounter({
    countStartValue: selectedCoffee.quantity,
    selectedCoffee,
  })

  return (
    <SelectedCoffeeItemContainer>
      <InfoWrapper>
        <img src={selectedCoffee?.imageSource || traditionalCoffeeImg} alt="" />
        <MainContentWrapper>
          <span>{selectedCoffee.name}</span>
          <ControlsWrapper>
            <NumberSelector counter={counter} onChange={handleQuantityChange} />
            <RemoveButton
              onClick={() => removeCoffeeFromCart(selectedCoffee.id)}
            >
              <Trash />
              Remover
            </RemoveButton>
          </ControlsWrapper>
        </MainContentWrapper>
      </InfoWrapper>
      <Price>{formattedPrice}</Price>
    </SelectedCoffeeItemContainer>
  )
}
