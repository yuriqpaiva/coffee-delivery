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
  TagsWrapper,
} from './styles'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Coffee } from '../data/coffees'

interface Props {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: Props) {
  const formattedPrice = coffee.price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return (
    <CoffeeItemContainer>
      <img src={coffee.imageSource} alt="" />
      <TagsWrapper>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsWrapper>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <Footer>
        <Price>
          R$<strong>{formattedPrice}</strong>
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
