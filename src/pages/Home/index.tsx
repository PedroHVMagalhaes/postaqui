import Header from '../../components/Header';
import SenderDataForm from '../../components/SenderDataForm';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <SenderDataForm />
    </Container>
  );
};

export default Home;
