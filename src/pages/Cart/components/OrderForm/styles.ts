import styled from 'styled-components'

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  height: 100%;
  width: 100%;
  max-width: 640px;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.3;
`

export const AddressInformationContainer = styled.div`
  max-height: 372px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  width: 100%;

  padding: 2.54rem;

  border-radius: 6px;
`

export const AddressInformationHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  & > svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const AddressInformationHeaderText = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
  }

  & > p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
  }
`

export const AddressFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;

  .cep {
    grid-area: cep;
  }

  .street {
    grid-area: street;
  }

  .number {
    grid-area: number;
  }

  .complement {
    grid-area: complement;
  }

  .neighborhood {
    grid-area: neighborhood;
  }

  .city {
    grid-area: city;
  }

  .state {
    grid-area: state;
  }

  row-gap: 1rem;
  column-gap: 0.75rem;

  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';

  margin-top: 2rem;
`

export const PaymentInformationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  height: 207px;
  width: 100%;

  padding: 2.54rem;

  border-radius: 6px;
`
