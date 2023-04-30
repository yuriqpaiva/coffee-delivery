import { Wrapper } from '../../components/Wrapper'
import { OrderForm } from './components/OrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CartContainer } from './styles'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../contexts/OrderContext'

const orderFormSchema = zod.object({
  zipCode: zod.string().min(8, { message: 'Requer 8 caracteres' }),
  street: zod.string().min(1, { message: 'Campo obrigatório' }),
  number: zod.string().min(1, { message: 'Campo obrigatório' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'Campo obrigatório' }),
  city: zod.string().min(1, { message: 'Campo obrigatório' }),
  state: zod.string().min(2, { message: 'Campo obrigatório' }),
  paymentMethod: zod.union([
    zod.literal('credit'),
    zod.literal('debit'),
    zod.literal('cash'),
  ]),
})

export type OrderFormSchema = zod.infer<typeof orderFormSchema>

export function Cart() {
  const navigate = useNavigate()
  const { updateOrder } = useOrder()

  const methods = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      paymentMethod: 'credit',
    },
  })

  const { handleSubmit } = methods

  function onSubmit(data: OrderFormSchema) {
    navigate('/pedido-confirmado')
    updateOrder(data)
  }

  return (
    <Wrapper>
      <CartContainer onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <OrderForm />
        </FormProvider>
        <SelectedCoffees />
      </CartContainer>
    </Wrapper>
  )
}
