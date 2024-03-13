import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import {
  ContainerTable,
  ContainerView,
  NoBriefing,
  OrderState,
  Table,
} from './style'
import { api } from '../../lib/axios'
import { Clipboard, PencilSimple, Trash } from 'phosphor-react'
import { formatDate } from '../../utils/form-date'
import { UpdateBriefingModal } from '../../components/UpdateBriefingModal'

export interface Briefing {
  id: number
  name: string
  description: string
  dataCreate: Date
  state: string
}

export function View() {
  const [briefings, setBriefings] = useState<Briefing[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [idBriefing, setIdBriefing] = useState<number>()
  const [selectedState, setSelectedState] = useState<string>('')

  async function fetchApi() {
    try {
      const response = await api.get('/list')
      const dataBriefing = response.data.list
      setBriefings(dataBriefing)
    } catch (err) {
      alert('Problema ao tentar listar os dados. Tente novamente mais tarde')
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  async function handleDelete(id: number) {
    if (confirm('Deseja remover esse briefing?')) {
      try {
        await api.delete(`/delete/${id}`)
        fetchApi()
      } catch (error) {
        alert(
          'Problema ao tentar deletar o briefing. Tente novamente mais tarde',
        )
      }
    }
  }

  async function handleClick(id: number) {
    setIdBriefing(id)
  }

  function handleOpenModal(id: number) {
    setIdBriefing(id)
    setOpenModal(true)
  }

  function handleStateChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedState(event.target.value)
  }

  const filteredBriefings = selectedState
    ? briefings.filter((briefing) => briefing.state === selectedState)
    : briefings

  return (
    <>
      <Header />
      {filteredBriefings === undefined || briefings.length === 0 ? (
        <NoBriefing>
          <span>
            Sua lista de <strong>briefing</strong> está vazia
          </span>
          <p>Crie um briefing e comece registrar os dados do seu projto </p>
          <Clipboard size={42} />
        </NoBriefing>
      ) : (
        <ContainerView>
          <OrderState>
            <select onChange={handleStateChange} value={selectedState}>
              <option value="">Selecione o Estado</option>
              <option value="negociação">Negociação</option>
              <option value="finalizado">Finalizado</option>
              <option value="aprovado">Aprovado</option>
            </select>
          </OrderState>

          <ContainerTable>
            <Table>
              <thead>
                <tr>
                  <th>Nome do Cliente</th>
                  <th>Descrição da necessidade</th>
                  <th>Data da Criação</th>
                  <th>Estado</th>
                  <th>Remover</th>
                  <th>Editar</th>
                </tr>
              </thead>

              <tbody>
                {filteredBriefings.map((item) => {
                  return (
                    <tr key={item.id} onClick={() => handleClick(item.id)}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{formatDate(item.dataCreate)}</td>
                      <td>{item.state}</td>
                      <td>
                        <button onClick={() => handleDelete(item.id)}>
                          <Trash size={24} />
                        </button>
                      </td>
                      <td>
                        <PencilSimple
                          size={24}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleOpenModal(item.id)
                          }}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </ContainerTable>

          <UpdateBriefingModal
            id={idBriefing}
            openModal={openModal}
            onCloseModal={() => {
              setOpenModal(false)
            }}
          />
        </ContainerView>
      )}
    </>
  )
}
