import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressFieldsWrapper,
  AddressInformationContainer,
  AddressInformationHeader,
  AddressInformationHeaderText,
  OrderFormContainer,
  PaymentInformationContainer,
  Title,
} from './styles'
import { Input } from '../../../../components/Input'

export function OrderForm() {
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
          <Input placeholder="CEP" className="cep" />
          <Input placeholder="Rua" className="street" />
          <Input placeholder="Número" className="number" />
          <Input placeholder="Complemento" className="complement" />
          <Input placeholder="Bairro" className="neighborhood" />
          <Input placeholder="Cidade" className="city" />
          <Input placeholder="UF" className="state" />
        </AddressFieldsWrapper>
      </AddressInformationContainer>
      <PaymentInformationContainer></PaymentInformationContainer>
    </OrderFormContainer>
  )
}
