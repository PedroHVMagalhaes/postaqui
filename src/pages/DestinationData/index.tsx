import CardDataSender from '../../components/CardDataSender';
import Header from '../../components/Header';
import RecipientDataForm from '../../components/RecipientDataForm';
import { Container } from './styles';

const DestinationData = () => {
  return (
    <Container>
      <Header />
      <CardDataSender />
      <RecipientDataForm />
    </Container>
  );
};

export default DestinationData;
