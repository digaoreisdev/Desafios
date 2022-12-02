import { HeaderContainer, HeaderContent, ConsultCartButton, ActionsNaveBar, IntroContainer } from "./styles"
import logoImg from '../../assets/logo.svg'
import locationImg from '../../assets/location.svg'
import cartImg from '../../assets/cart.svg'
import glassCoffeImg from '../../assets/glassCoffe.png'

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
      
      <IntroContainer>
        <h1>Encontre o Café Perfeito para qualquer hora do dia</h1>
        <p>Com o Coffe Dellivery você recebe seu café onde estiver, a qualquer hora</p>
        <img src="glassCoffeImg" alt="" />
      </IntroContainer>
    </HeaderContainer>
    
  )
}