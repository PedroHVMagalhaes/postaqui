import CardDataRecipient from '../../components/CardDataRecipient';
import CardDataSender from '../../components/CardDataSender';
import Header from '../../components/Header';
import ShippingPackageForm from '../../components/ShippingPackageForm';
import { Container, Wrapper } from './styles';

const ShippingPackageData = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <CardDataSender />
        <img src="arrow.svg" />
        <CardDataRecipient />
      </Wrapper>
      <ShippingPackageForm />
    </Container>
  );
};

export default ShippingPackageData;
