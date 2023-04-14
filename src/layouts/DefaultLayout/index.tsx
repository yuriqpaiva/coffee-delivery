import { ReactNode } from 'react'
import { Header } from '../../components/Header'
import { DefaultLayoutContainer } from './styles'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Header />
      {children}
    </DefaultLayoutContainer>
  )
}
