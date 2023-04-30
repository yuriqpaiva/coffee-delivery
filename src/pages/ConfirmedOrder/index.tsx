import { Wrapper } from '@/components/Wrapper'
import {
  ConfirmedOrderContainer,
  ContentWrapper,
  OrderHeader,
  OrderIconWrapper,
  OrderInfoContainer,
  OrderInfoText,
  OrderInfoItem,
  Subtitle,
  Title,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import confirmedOrderImg from '@/assets/confirmed-order.png'
import { useOrder } from '../../contexts/OrderContext'

const paymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function ConfirmedOrder() {
  const { order } = useOrder()

  return (
    <Wrapper>
      <ConfirmedOrderContainer>
        <ContentWrapper>
          <OrderHeader>
            <Title>Uhu! Pedido confirmado</Title>
            <Subtitle>
              Agora é só aguardar que logo o café chegará até você
            </Subtitle>
          </OrderHeader>
          <OrderInfoContainer>
            <OrderInfoItem>
              <OrderIconWrapper wrapperColor="purple">
                <MapPin size={16} weight="fill" />
              </OrderIconWrapper>
              <OrderInfoText>
                Entrega em{' '}
                <strong>
                  {order?.street}, {order?.number}
                </strong>{' '}
                <br />
                {order?.neighborhood} - {order?.city}, {order?.state}
              </OrderInfoText>
            </OrderInfoItem>

            <OrderInfoItem>
              <OrderIconWrapper wrapperColor="yellow">
                <Timer size={16} weight="fill" />
              </OrderIconWrapper>
              <OrderInfoText breakLineOnStrong>
                Previsão de entrega
                <strong>20 min - 30 min</strong>
              </OrderInfoText>
            </OrderInfoItem>

            <OrderInfoItem>
              <OrderIconWrapper wrapperColor="yellow-dark">
                <CurrencyDollar size={16} />
              </OrderIconWrapper>
              <OrderInfoText breakLineOnStrong>
                Pagamento na entrega
                <strong>
                  {paymentMethods[order?.paymentMethod || 'credit']}
                </strong>
              </OrderInfoText>
            </OrderInfoItem>
          </OrderInfoContainer>
        </ContentWrapper>
        <img src={confirmedOrderImg} alt="" />
      </ConfirmedOrderContainer>
    </Wrapper>
  )
}
