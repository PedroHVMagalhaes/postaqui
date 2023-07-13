import CardDataSender from '../../components/CardDataSender';
import Header from '../../components/Header';
import ShippingPackageForm from '../../components/ShippingPackageForm';
import { Container } from './styles';

const ShippingPackageData = () => {
  return (
    <Container>
      <Header />
      <CardDataSender />
      <ShippingPackageForm />
    </Container>
  );
};

export default ShippingPackageData;
