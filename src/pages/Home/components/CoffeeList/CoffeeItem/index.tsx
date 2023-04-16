import {
  CoffeeDescription,
  CoffeeItemContainer,
  CoffeeName,
  Footer,
  Price,
  SelectorWrapper,
  ShopButton,
  Tag,
  TagsWrapper,
} from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { Coffee } from '../data/coffees'
import { NumberSelector } from '../../../../../components/NumberSelector'

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
          <NumberSelector />
          <ShopButton to="/carrinho" type="button">
            <ShoppingCart weight="fill" />
          </ShopButton>
        </SelectorWrapper>
      </Footer>
    </CoffeeItemContainer>
  )
}
