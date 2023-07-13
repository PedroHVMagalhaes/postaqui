import { useAtom } from 'jotai';
import { dadosOrigem, dadosOrigemRecipient } from '../../store/store';
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface dadosOrigem {
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
}

const CardDataSender = () => {
  let [dadosOrigemHook, setDadosOrigemHook] = useAtom(dadosOrigem);
  return (
    <Container>
      <Link to={'/'}>
        <h2>Origem</h2>
        <div>
          {Object.entries(dadosOrigemHook ?? {}).map(([key, value]) => (
            <span key={key.toString()}>{value} -</span>
          ))}
        </div>
      </Link>
    </Container>
  );
};

export default CardDataSender;
