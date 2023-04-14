import { ReactNode } from 'react'
import { Header } from '../../components/Header'
import { DefaultLayoutContainer } from './styles'
import { Wrapper } from '../../components/Wrapper'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Wrapper>
        <Header />
      </Wrapper>
      {children}
    </DefaultLayoutContainer>
  )
}
