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
import { NumberSelector } from '../../../../../components/NumberSelector'
import { Coffee } from 'src/constants/coffees'
import { useState } from 'react'
import { useCoffees } from '../../../../../contexts/CoffeesContext'

interface Props {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: Props) {
  const { updateSelectedCoffeeQuantity: handleNewCoffee } = useCoffees()

  const formattedPrice = coffee.price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  const [quantity, setQuantity] = useState(0)

  function handleQuantityChange(type: 'increment' | 'decrement') {
    handleNewCoffee(coffee, type)
    if (type === 'increment') {
      setQuantity((state) => state + 1)
    } else if (type === 'decrement' && quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

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
          <NumberSelector counter={quantity} onChange={handleQuantityChange} />
          <ShopButton to="/carrinho" type="button">
            <ShoppingCart weight="fill" />
          </ShopButton>
        </SelectorWrapper>
      </Footer>
    </CoffeeItemContainer>
  )
}
