import { Header } from "../../components/Header";
import { ContainerRegister, Description, Form } from "./style";

export function Register(){
    return(
        <ContainerRegister>
            <Header/>

            <Description>
                <h1>Que tal um guia para execução do seu projeto?</h1>

                <span>Basta criar seu briefing</span>
            </Description>

            <Form>
                <input type="text" placeholder="Nome do Cliente"/>
                <input type="text" placeholder="Descrição da necessidade" />
                <select name="" id="">
                    <option value="neogicacao">Negocioação</option>
                    <option value="finalizado">Finalizado</option>
                    <option value="aprovado">Aprovado</option>
                </select>

                <button>Criar</button>
            </Form>
        </ContainerRegister>
    )
}