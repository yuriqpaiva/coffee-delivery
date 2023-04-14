import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <DefaultLayout>
      <HomeContainer>
        <Intro />
      </HomeContainer>
    </DefaultLayout>
  )
}
