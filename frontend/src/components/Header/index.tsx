import { Link } from 'react-router-dom'
import { HeaderContainer, IconViva, SelectMenu } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <IconViva>
        <h2>Briefing</h2>
      </IconViva>

      <SelectMenu>
        <li>
          <Link to={'/'}>Criar Briefing</Link>
        </li>
        <li>
          <Link to={'/view'}>Listar Briefing</Link>
        </li>
      </SelectMenu>
    </HeaderContainer>
  )
}
