import {
  CoffeeDescription,
  CoffeeItemContainer,
  CoffeeName,
  DecrementButton,
  Footer,
  IncrementButton,
  Price,
  Selector,
  SelectorWrapper,
  ShopButton,
  Tag,
} from './styles'
import coffeeImg from '../../../../../assets/coffee.png'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <img src={coffeeImg} alt="" />
      <Tag>Tradicional</Tag>
      <CoffeeName>Expresso Tradicional</CoffeeName>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>
      <Footer>
        <Price>
          R$ <strong>3,50</strong>
        </Price>
        <SelectorWrapper>
          <Selector>
            <IncrementButton type="button">
              <Minus size={14} />
            </IncrementButton>
            <span>1</span>
            <DecrementButton type="button">
              <Plus size={14} />
            </DecrementButton>
          </Selector>
          <ShopButton type="button">
            <ShoppingCart weight="fill" />
          </ShopButton>
        </SelectorWrapper>
      </Footer>
    </CoffeeItemContainer>
  )
}
