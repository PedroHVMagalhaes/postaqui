import { useAtom } from 'jotai';
import Header from '../../components/Header';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { tracking as trackingStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { tracking } from '../../services/pstn';
import { Button } from '@mui/material';

const TrackingCode = () => {
  // Estado local para armazenar o código de rastreio
  const [trackingCode, setTrackingCode] = useState('');
  // Obtém o estado global trackingPackage do store
  const [trackingPackage] = useAtom(trackingStore);

  // Hook useNavigate para navegar entre as rotas
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se não há informações do pacote de rastreamento, se não houver, redireciona para a página inicial
    if (!trackingPackage?.carrier) {
      return navigate('/');
    }

    // Chama a função de rastreamento para obter o código de rastreio
    tracking(trackingPackage?.carrier).then((response) => {
      setTrackingCode(response.data.code);
    });
  }, []);
  return (
    <Container>
      <Header />
      <img src="caminhao.svg" />
      <h2>Parabéns o seu frete foi postado com sucesso.</h2>
      <p>O seu código de rastreio é {trackingCode}</p>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          window.location.replace('/');
        }}
      >
        Nova Postagem
      </Button>
    </Container>
  );
};

export default TrackingCode;
