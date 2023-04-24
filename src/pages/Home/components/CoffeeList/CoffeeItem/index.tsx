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
import { useCoffeeCounter } from '../../../../../hooks/useCoffeeCounter'
import { useCoffees } from '../../../../../contexts/CoffeesContext'

interface Props {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: Props) {
  const { selectedCoffees } = useCoffees()

  const selectedCoffee = selectedCoffees.find(
    (selectedCoffee) => selectedCoffee.id === coffee.id,
  )

  const { counter, handleQuantityChange } = useCoffeeCounter({
    countStartValue: selectedCoffee?.quantity || 0,
    selectedCoffee: coffee,
    options: {
      allowZero: true,
    },
  })

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
          <NumberSelector counter={counter} onChange={handleQuantityChange} />
          <ShopButton to="/carrinho" type="button">
            <ShoppingCart weight="fill" />
          </ShopButton>
        </SelectorWrapper>
      </Footer>
    </CoffeeItemContainer>
  )
}
