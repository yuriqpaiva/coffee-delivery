import { coffees } from '../../../../constants/coffees'
import { CoffeeItem } from './CoffeeItem'
import { CoffeeListContainer, CoffeeListWrapper } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListWrapper>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListWrapper>
    </CoffeeListContainer>
  )
}
