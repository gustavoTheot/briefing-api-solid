import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ContainerView, NoBriefing, OrderState, Table } from './style'
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
  }, [briefings])

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

  return (
    <>
      <Header />
      {briefings === undefined || briefings.length === 0 ? (
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
            <button>FIltrar por estado</button>
          </OrderState>

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
              {briefings.map((item) => {
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

            <UpdateBriefingModal
              id={idBriefing}
              openModal={openModal}
              onCloseModal={() => {
                setOpenModal(false)
              }}
            />
          </Table>
        </ContainerView>
      )}
    </>
  )
}
