import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  CartAnchor,
  HeaderContainer,
  Location,
  LogoAnchor,
  Navigation,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoAnchor href="">
        <img src="/coffee-delivery.svg" alt="" />
      </LogoAnchor>
      <Navigation>
        <Location>
          <MapPin size={22} weight="fill" />
          Brasília, DF
        </Location>
        <CartAnchor href="#" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </CartAnchor>
      </Navigation>
    </HeaderContainer>
  )
}
