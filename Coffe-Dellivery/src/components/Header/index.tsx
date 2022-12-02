import { HeaderContainer, HeaderContent } from "./styles"
import logoImg from '../../assets/logo.svg'
import locationImg from '../../assets/location.svg'
import cartImg from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Coffe Dellivery" />
        
        <nav>
          <img className="iconLocation" src={locationImg} alt="GPS" />
          <input placeholder="Porto Alegre, RS" />
        </nav>
        
        <consultCartButton>
          {/* <img className="cartImg" src={cartImg} alt="Carrinho" /> */}
        </consultCartButton>
      </HeaderContent>
    </HeaderContainer>
  )
}