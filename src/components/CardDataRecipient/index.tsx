import { useAtom } from 'jotai';
import { dadosOrigemRecipient } from '../../store/store';
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface dadosOrigemRecipient {
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

const CardDataRecipient = () => {
  let [dadosOrigemHookRecipient] = useAtom(dadosOrigemRecipient);
  return (
    <Container>
      <Link to={'/destino'}>
        <h2>Destino</h2>
        <div>
          {Object.entries(dadosOrigemHookRecipient ?? {}).map(
            ([key, value]) => (
              <span key={key.toString()}>{value} -</span>
            ),
          )}
        </div>
      </Link>
    </Container>
  );
};

export default CardDataRecipient;
