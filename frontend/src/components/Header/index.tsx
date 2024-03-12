import { HeaderContainer, IconViva, SelectMenu } from "./style";

export function Header(){
    return(
        <HeaderContainer>
            <IconViva>
                <h2>VIVA</h2>
                <span>Móveis</span>
            </IconViva>

            <SelectMenu>
                <li>Criar Briefing</li>
                <li>Listar Briefing</li>
            </SelectMenu>
        </HeaderContainer>
    )
}