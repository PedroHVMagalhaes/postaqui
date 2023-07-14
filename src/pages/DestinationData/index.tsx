import CardDataSender from '../../components/CardDataSender';
import Header from '../../components/Header';
import RecipientDataForm from '../../components/RecipientDataForm';
import { Container, Wrapper } from './styles';

const DestinationData = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <CardDataSender />
      </Wrapper>
      <RecipientDataForm />
    </Container>
  );
};

export default DestinationData;
