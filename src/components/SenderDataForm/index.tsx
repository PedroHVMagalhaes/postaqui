import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Wrapper } from './styles';
import { useNavigate } from 'react-router-dom';

// Definindo o schema de validação usando Zod
const schema = z.object({
  nomeCompleto: z.string().nonempty('O nome completo é obrigatório.'), // Validação para o campo
  cpf: z
    .string()
    .nonempty('O CPF é obrigatório.')
    .regex(/^\d{11}$/, 'O CPF deve conter exatamente 11 números.'),
  telefone: z
    .string()
    .nonempty('O telefone é obrigatório.')
    .regex(/^\d{11}$/, 'O telefone deve conter exatamente 11 números.'),
  email: z
    .string()
    .email('Insira um e-mail válido.')
    .nonempty('O e-mail é obrigatório.'),
  cep: z
    .string()
    .nonempty('O CEP é obrigatório.')
    .regex(/^\d+$/, 'O CEP deve conter apenas números.'),
  estado: z.string().nonempty('O estado é obrigatório.'),
  cidade: z.string().nonempty('A cidade é obrigatória.'),
  bairro: z.string().nonempty('O bairro é obrigatório.'),
  rua: z.string().nonempty('A rua é obrigatória.'),
  numero: z.string().regex(/^\d+$/, 'O número deve conter apenas números.'),
  complemento: z.string().optional(), // Validação opcional para o campo "complemento"
});

type FormValues = {
  nomeCompleto: string;
  cpf: string;
  telefone: string;
  email: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  complemento?: string;
};

const SenderDataForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema), // Utilizando o Zod para resolver a validação
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate('/destino');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Dados de Origem</h2>
        <div>
          <TextField
            size="small"
            required
            id="nomeCompleto"
            label="Nome Completo"
            error={!!errors.nomeCompleto} // Verificação de erro no campo
            helperText={errors.nomeCompleto?.message}
            {...register('nomeCompleto')} // Registra o campo "nomeCompleto" no formulário
          />
          <TextField
            size="small"
            required
            id="cpf"
            label="CPF"
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            {...register('cpf')}
          />
          <TextField
            size="small"
            required
            id="telefone"
            label="Telefone"
            error={!!errors.telefone}
            helperText={errors.telefone?.message}
            {...register('telefone')}
          />
          <TextField
            size="small"
            required
            id="email"
            label="E-mail"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
        </div>
        <div>
          <TextField
            size="small"
            required
            id="cep"
            label="CEP"
            error={!!errors.cep}
            helperText={errors.cep?.message}
            {...register('cep')}
          />
          <TextField
            size="small"
            required
            id="estado"
            label="Estado"
            error={!!errors.estado}
            helperText={errors.estado?.message}
            {...register('estado')}
          />
          <TextField
            size="small"
            required
            id="cidade"
            label="Cidade"
            error={!!errors.cidade}
            helperText={errors.cidade?.message}
            {...register('cidade')}
          />
          <TextField
            size="small"
            required
            id="bairro"
            label="Bairro"
            error={!!errors.bairro}
            helperText={errors.bairro?.message}
            {...register('bairro')}
          />
          <TextField
            size="small"
            required
            id="rua"
            label="Rua"
            error={!!errors.rua}
            helperText={errors.rua?.message}
            {...register('rua')}
          />
        </div>
        <div>
          <TextField
            size="small"
            required
            id="numero"
            label="Número"
            error={!!errors.numero}
            helperText={errors.numero?.message}
            {...register('numero')}
          />
          <TextField
            size="small"
            id="complemento"
            label="Complemento"
            {...register('complemento')}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Avançar
        </Button>
      </form>
    </Wrapper>
  );
};

export default SenderDataForm;
