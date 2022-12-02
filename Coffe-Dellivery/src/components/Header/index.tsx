import { HeaderContainer, HeaderContent, ConsultCartButton, ActionsNaveBar } from "./styles"
import logoImg from '../../assets/logo.svg'
import locationImg from '../../assets/location.svg'
import cartImg from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img className="logoImg" src={logoImg} alt="Coffe Dellivery" />
        
        <ActionsNaveBar>
          <img src={locationImg} alt="" />
          <input placeholder="Porto Alegre, RS" />
        </ActionsNaveBar>
        
        <ConsultCartButton>
          <img className="cartImg" src={cartImg} alt="Carrinho" />
        </ConsultCartButton>
      </HeaderContent>
    </HeaderContainer>
  )
}