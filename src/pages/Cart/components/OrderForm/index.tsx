import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  AddressFieldsWrapper,
  AddressInformationContainer,
  AddressInformationHeader,
  AddressInformationHeaderText,
  OrderFormContainer,
  PaymentInformationContainer,
  PaymentInformationHeader,
  PaymentInformationHeaderText,
  Title,
} from './styles'
import { Input } from '../../../../components/Input'
import { PaymentSelector } from './PaymentSelector'
import { useFormContext } from 'react-hook-form'
import { OrderFormSchema } from '../..'

export function OrderForm() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<OrderFormSchema>()

  const selectedPaymentMethod = watch('paymentMethod')

  function handlePaymentMethodSelection(
    paymentMethod: 'credit' | 'debit' | 'cash',
  ) {
    setValue('paymentMethod', paymentMethod)
  }

  return (
    <OrderFormContainer>
      <Title>Complete seu pedido</Title>
      <AddressInformationContainer>
        <AddressInformationHeader>
          <MapPinLine size={22} />
          <AddressInformationHeaderText>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </AddressInformationHeaderText>
        </AddressInformationHeader>
        <AddressFieldsWrapper>
          <Input
            label="CEP"
            className="cep"
            maxLength={8}
            {...register('zipCode')}
            errorMessage={errors.zipCode?.message}
          />
          <Input
            label="Rua"
            className="street"
            {...register('street')}
            errorMessage={errors.street?.message}
          />
          <Input
            label="Número"
            className="number"
            {...register('number')}
            errorMessage={errors.number?.message}
          />
          <Input
            label="Complemento"
            className="complement"
            isOptional
            {...register('complement')}
            errorMessage={errors.complement?.message}
          />
          <Input
            label="Bairro"
            className="neighborhood"
            {...register('neighborhood')}
            errorMessage={errors.neighborhood?.message}
          />
          <Input
            label="Cidade"
            className="city"
            {...register('city')}
            errorMessage={errors.city?.message}
          />
          <Input
            label="UF"
            className="state"
            {...register('state')}
            errorMessage={errors.state?.message}
          />
        </AddressFieldsWrapper>
      </AddressInformationContainer>
      <PaymentInformationContainer>
        <PaymentInformationHeader>
          <CurrencyDollar size={22} />
          <PaymentInformationHeaderText>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </PaymentInformationHeaderText>
        </PaymentInformationHeader>
        <PaymentSelector
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodSelection}
        />
      </PaymentInformationContainer>
    </OrderFormContainer>
  )
}
