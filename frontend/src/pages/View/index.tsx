import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ContainerView, OrderState, Table } from "./style";
import { api } from "../../lib/axios";
import { Trash } from "phosphor-react";

interface Briefing{
    id: number,
    name: string,
    description: string,
    dataCreate: string,
    state: string
}

export function View(){
    const [briefings, setBriefings] = useState<Briefing[]>([] || null)

    async function fetchApi(){
        try{
            const response = await api.get('/list')
            const dataBriefing = response.data.list
            setBriefings(dataBriefing)
            console.log(dataBriefing)
        }catch(err){
            alert('Ocorreua algum erro ao lista os briefins')
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return(
        <ContainerView>
            <Header/>

            <OrderState>
                <button>
                    FIltrar por estado
                </button>
            </OrderState>

            <Table>
                <thead>
                    <tr>
                        <th>Nome do Cliente</th>
                        <th>Descrição da necessidade</th>
                        <th>Data da Criação</th>
                        <th>Estado</th>
                        <th>Remover</th>
                    </tr>
                </thead>

                <tbody>
                    {briefings.map((item) => {
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.dataCreate}</td>
                                <td>{item.state}</td>
                                <td>
                                    <button>
                                        <Trash size={32} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </ContainerView>
    )
}