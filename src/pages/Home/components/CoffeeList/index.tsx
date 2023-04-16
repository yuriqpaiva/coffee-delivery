import { CoffeeItem } from './CoffeeItem'
import { CoffeeListContainer, CoffeeListWrapper } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListWrapper>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </CoffeeListWrapper>
    </CoffeeListContainer>
  )
}
