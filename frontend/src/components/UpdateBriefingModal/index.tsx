import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { Briefing } from '../../pages/View'
import { Content, ExitModal, Form, Overlay } from './style'
import { SignOut } from 'phosphor-react'

interface UpdateBriefing {
  id?: number
  openModal: boolean
  onCloseModal: () => void
}

const updateBriefingValidateSchema = z
  .object({
    name: z.string().optional(),
    description: z.string().optional(),
    state: z.enum(['negociação', 'finalizado', 'aprovado', '']).optional(),
  })
  .required()

type UpdateBriefingFormInputs = z.infer<typeof updateBriefingValidateSchema>

export function UpdateBriefingModal({
  id,
  openModal,
  onCloseModal,
}: UpdateBriefing) {
  const [briefing, setBriefing] = useState<Briefing | null>(null)
  const { register, handleSubmit, reset } = useForm<UpdateBriefingFormInputs>({
    resolver: zodResolver(updateBriefingValidateSchema),
  })

  useEffect(() => {
    async function fetchBriefing() {
      try {
        const response = await api.get(`/getBriefing/${id}`)
        const data = response.data.briefing
        setBriefing(data)
        reset(data)
      } catch (error) {
        console.error('Erro ao buscar briefing:', error)
        alert('Tente novamente mais tarde!')
      }
    }

    if (openModal && id) {
      fetchBriefing()
    }
  }, [id, openModal, reset])

  async function handleUpdate(data: UpdateBriefingFormInputs) {
    try {
      await api.put(`/update/${id}`, data)
      onCloseModal()
    } catch (error) {
      console.error('Erro ao atualizar briefing:', error)
      alert('Problemas no sistema, tente novamente mais tarde')
    }
  }

  function handleCloseModal() {
    onCloseModal()
  }

  return (
    openModal && (
      <>
        <Overlay onClick={handleCloseModal} />
        <Content>
          <ExitModal>
            <button onClick={handleCloseModal}>
              <SignOut size={24} />
            </button>
          </ExitModal>

          <Form onSubmit={handleSubmit(handleUpdate)}>
            {briefing && (
              <>
                <h3>Edite </h3>

                <input type="text" placeholder="Nome" {...register('name')} />
                <input
                  type="text"
                  placeholder="Descrição"
                  {...register('description')}
                />
                <select {...register('state')}>
                  <option value="">Selecione o Estado</option>
                  <option value="negociação">Negociação</option>
                  <option value="finalizado">Finalizado</option>
                  <option value="aprovado">Aprovado</option>
                </select>
              </>
            )}

            <button type="submit">Atualizar</button>
          </Form>
        </Content>
      </>
    )
  )
}
