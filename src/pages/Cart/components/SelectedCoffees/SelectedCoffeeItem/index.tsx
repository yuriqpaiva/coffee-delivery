import { NumberSelector } from '@/components/NumberSelector'
import {
  ControlsWrapper,
  InfoWrapper,
  MainContentWrapper,
  Price,
  RemoveButton,
  SelectedCoffeeItemContainer,
} from './styles'
import traditionalCoffeeImg from '@/assets/coffees/traditional.png'
import { Trash } from '@phosphor-icons/react'

export function SelectedCoffeeItem() {
  return (
    <SelectedCoffeeItemContainer>
      <InfoWrapper>
        <img src={traditionalCoffeeImg} alt="" />
        <MainContentWrapper>
          <span>Expresso Tradicional</span>
          <ControlsWrapper>
            <NumberSelector />
            <RemoveButton>
              <Trash />
              Remover
            </RemoveButton>
          </ControlsWrapper>
        </MainContentWrapper>
      </InfoWrapper>
      <Price>R$ 3,50</Price>
    </SelectedCoffeeItemContainer>
  )
}
