import { useAtom } from 'jotai';
import { dadosOrigemShipping } from '../../store/store';
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface dadosOrigemShipping {
  peso: number;
  altura: number;
  largura: number;
  comprimento: number;
  logicaReversa: boolean;
  avisoRecebimento: boolean;
  maosProprias: boolean;
  valorMercadoria: number;
  quantidadeItens: number;
  descriçaoItens: string;
}

const CardDataShipping = () => {
  let [dadosOrigemHookShipping] = useAtom(dadosOrigemShipping);
  let dadosObj = {
    ...dadosOrigemHookShipping,
    logicaReversa:
      dadosOrigemHookShipping.logicaReversa == true ? 'sim' : 'não',
    avisoRecebimento:
      dadosOrigemHookShipping.avisoRecebimento == true ? 'sim' : 'não',
    maosProprias: dadosOrigemHookShipping.maosProprias == true ? 'sim' : 'não',
  };

  return (
    <Container>
      <Link to={'/pacote'}>
        <h2>Destino</h2>
        {Object.entries(dadosObj ?? {}).map(([key, value]) => (
          <span key={key.toString()}>
            <b>{key}:</b> {value} -
          </span>
        ))}
      </Link>
    </Container>
  );
};

export default CardDataShipping;
