import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  CartAnchor,
  HeaderContainer,
  Location,
  LogoAnchor,
  Navigation,
  CartCounter,
} from './styles'
import { useCoffees } from '../../contexts/CoffeesContext'

export function Header() {
  const { numberOfSelectedCoffeesType } = useCoffees()

  return (
    <HeaderContainer>
      <LogoAnchor to="/">
        <img src="/coffee-delivery.svg" alt="" />
      </LogoAnchor>
      <Navigation>
        <Location>
          <MapPin size={22} weight="fill" />
          Brasília, DF
        </Location>
        <CartAnchor to="/carrinho" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <CartCounter>{numberOfSelectedCoffeesType}</CartCounter>
        </CartAnchor>
      </Navigation>
    </HeaderContainer>
  )
}
