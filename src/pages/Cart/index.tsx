import { Wrapper } from '../../components/Wrapper'
import { OrderForm } from './components/OrderForm'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <Wrapper>
      <CartContainer>
        <OrderForm />
      </CartContainer>
    </Wrapper>
  )
}
