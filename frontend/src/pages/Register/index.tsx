import { Header } from '../../components/Header'
import { ContainerRegister, Description, Form } from './style'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'

const newBriefingValidateSchema = z
  .object({
    name: z.string().min(2, 'Por favor, preenca o campo nome'),
    description: z.string().min(2, 'Por favor, preenca o campo de descrição'),
    state: z.enum(['negociação', 'finalizado', 'aprovado', '']),
  })
  .required()

type NewBriefingFormInputs = z.infer<typeof newBriefingValidateSchema>

export function Register() {
  const { register, handleSubmit, reset } = useForm<NewBriefingFormInputs>({
    resolver: zodResolver(newBriefingValidateSchema),
    defaultValues: {
      name: '',
      description: '',
      state: undefined,
    },
  })

  async function handleCreateBriefing(data: NewBriefingFormInputs) {
    const { name, description, state } = data

    try {
      await api.post('/create', {
        name,
        description,
        state,
      })
    } catch (error) {
      alert(error)
    }
    reset()
  }

  return (
    <ContainerRegister>
      <Header />

      <Description>
        <h1>Que tal um guia para execução do seu projeto?</h1>

        <span>
          Basta criar seu <strong>briefing</strong>
        </span>
      </Description>

      <Form onSubmit={handleSubmit(handleCreateBriefing)}>
        <input
          type="text"
          placeholder="Nome do Cliente"
          {...register('name')}
          required
        />
        <input
          type="text"
          placeholder="Descrição da necessidade"
          {...register('description')}
          required
        />
        <select {...register('state')} required>
          <option value="">Selecione o Estado</option>
          <option value="negociação">Negociação</option>
          <option value="finalizado">Finalizado</option>
          <option value="aprovado">Aprovado</option>
        </select>

        <button type="submit">Criar</button>
      </Form>
    </ContainerRegister>
  )
}
