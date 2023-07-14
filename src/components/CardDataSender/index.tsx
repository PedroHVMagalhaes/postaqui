import { useAtom } from 'jotai';
import { dadosOrigem } from '../../store/store';
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
  // Obtém os dados de origem do estado global usando o hook useAtom
  let [dadosOrigemHook] = useAtom(dadosOrigem);
  return (
    <Container>
      <Link to={'/'}>
        <h2>Origem</h2>
        <div>
          {/* Mapeia os pares chave-valor dos dados de origem e renderiza cada valor */}
          {Object.entries(dadosOrigemHook ?? {}).map(([key, value]) => (
            <span key={key.toString()}>{value} -</span>
          ))}
        </div>
      </Link>
    </Container>
  );
};

export default CardDataSender;
