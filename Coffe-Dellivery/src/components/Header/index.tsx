import { HeaderContainer, HeaderContent, SelectCity } from "./styles"
import logoImg from '../../assets/logo.svg'
import locationImg from '../../assets/location.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Coffe Dellivery" />
        <SelectCity>
          <img src={locationImg} alt="GPS" />
          <h1>Porto Alegre, RS</h1>
        </SelectCity>
        <button>Carrinho</button>
      </HeaderContent>
    </HeaderContainer>
  )
}