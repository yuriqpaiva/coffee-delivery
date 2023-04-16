import { SelectedCoffeeItem } from './SelectedCoffeeItem'
import {
  CoffeesWrapper,
  ContentWrapper,
  PurchaseSummary,
  SelectedCoffeesContainer,
  Title,
  PurchaseSummaryTextWrapper,
  PurchaseText,
  PurchaseTotalText,
  ConfirmButton,
} from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <Title>Cafés selecionados</Title>
      <ContentWrapper>
        <CoffeesWrapper>
          <SelectedCoffeeItem />
          <SelectedCoffeeItem />
          <SelectedCoffeeItem />
        </CoffeesWrapper>
        <PurchaseSummary>
          <PurchaseSummaryTextWrapper>
            <PurchaseText>Total de itens</PurchaseText>
            <PurchaseText>R$29,70</PurchaseText>
          </PurchaseSummaryTextWrapper>
          <PurchaseSummaryTextWrapper>
            <PurchaseText>Entrega</PurchaseText>
            <PurchaseText>R$ 3,50</PurchaseText>
          </PurchaseSummaryTextWrapper>
          <PurchaseSummaryTextWrapper>
            <PurchaseTotalText>Total</PurchaseTotalText>
            <PurchaseTotalText>R$ 33,20</PurchaseTotalText>
          </PurchaseSummaryTextWrapper>
        </PurchaseSummary>
        <ConfirmButton>Confirmar pedido</ConfirmButton>
      </ContentWrapper>
    </SelectedCoffeesContainer>
  )
}
