import { Wrapper } from '../../components/Wrapper'
import { OrderForm } from './components/OrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <Wrapper>
      <CartContainer>
        <OrderForm />
        <SelectedCoffees />
      </CartContainer>
    </Wrapper>
  )
}
