import { Header } from '../../components/Header'
import { DefaultLayoutContainer } from './styles'
import { Wrapper } from '../../components/Wrapper'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Wrapper>
        <Header />
      </Wrapper>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
