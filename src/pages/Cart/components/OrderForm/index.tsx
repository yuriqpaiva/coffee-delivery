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
import { useState } from 'react'

export function OrderForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    'credit' | 'debit' | 'money' | null
  >(null)

  function handlePaymentMethodSelection(
    paymentMethod: 'credit' | 'debit' | 'money',
  ) {
    setSelectedPaymentMethod(paymentMethod)
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
          <Input label="CEP" className="cep" />
          <Input label="Rua" className="street" />
          <Input label="Número" className="number" />
          <Input label="Complemento" className="complement" isOptional />
          <Input label="Bairro" className="neighborhood" />
          <Input label="Cidade" className="city" />
          <Input label="UF" className="state" />
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
