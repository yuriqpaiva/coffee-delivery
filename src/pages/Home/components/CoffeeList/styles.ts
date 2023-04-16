import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  flex: 1;

  & > h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CoffeeListWrapper = styled.ul`
  margin-top: 3.375rem;
  display: grid;

  column-gap: 1.25rem;
  row-gap: 2.5rem;

  grid-template-columns: repeat(4, 1fr);
`
