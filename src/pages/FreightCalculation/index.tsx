import { useEffect, useState } from 'react';
import CardDataRecipient from '../../components/CardDataRecipient';
import CardDataSender from '../../components/CardDataSender';
import CardDataShipping from '../../components/CardDataShipping';
import Header from '../../components/Header';
import { CardFrete, Container, DivStates } from './styles';
import { shippingCostCalculation } from '../../services/pstn';
import {
  dadosOrigem,
  dadosOrigemRecipient,
  dadosOrigemShipping,
  tracking,
} from '../../store/store';
import { useAtom } from 'jotai';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FreightCalculation = () => {
  const [dadosOrigemHook] = useAtom(dadosOrigem);
  const [dadosOrigemHookRecipient] = useAtom(dadosOrigemRecipient);
  const [dadosOrigemHookShipping] = useAtom(dadosOrigemShipping);
  const [, setTrackingPackage] = useAtom(tracking);

  const [value, setValue] = useState(0);
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    shippingCostCalculation({
      sender: {
        fullname: dadosOrigemHook?.nomeCompleto as string,
        cpf: dadosOrigemHook?.cpf as string,
        email: dadosOrigemHook?.email as string,
        phone: dadosOrigemHook?.telefone as string,
        address: {
          cep: dadosOrigemHook?.cep as string,
          city: dadosOrigemHook?.cidade as string,
          neighborhood: dadosOrigemHook?.bairro as string,
          number: dadosOrigemHook?.numero as number,
          state: dadosOrigemHook?.estado as string,
          street: dadosOrigemHook?.rua as string,
          uf: dadosOrigemHook?.estado as string,
          complement: dadosOrigemHook?.complemento as string,
        },
      },
      receiver: {
        fullname: dadosOrigemHookRecipient?.nomeCompleto as string,
        cpf: dadosOrigemHookRecipient?.cpf as string,
        email: dadosOrigemHookRecipient?.email as string,
        phone: dadosOrigemHookRecipient?.telefone as string,
        address: {
          cep: dadosOrigemHookRecipient?.cep as string,
          city: dadosOrigemHookRecipient?.cidade as string,
          neighborhood: dadosOrigemHookRecipient?.bairro as string,
          number: dadosOrigemHookRecipient?.numero as number,
          state: dadosOrigemHookRecipient?.estado as string,
          street: dadosOrigemHookRecipient?.rua as string,
          uf: dadosOrigemHookRecipient?.estado as string,
          complement: dadosOrigemHookRecipient?.complemento as string,
        },
      },
      package: {
        height: dadosOrigemHookShipping.altura,
        length: dadosOrigemHookShipping.comprimento,
        weight: dadosOrigemHookShipping.peso,
        width: dadosOrigemHookShipping.largura,
        ar: dadosOrigemHookShipping.avisoRecebimento,
        own_hands: dadosOrigemHookShipping.maosProprias,
        reverse: dadosOrigemHookShipping.logicaReversa,
        information: {
          quantity: dadosOrigemHookShipping.quantidadeItens,
          description: dadosOrigemHookShipping.descriçaoItens,
          amount: dadosOrigemHookShipping.valorMercadoria,
        },
      },
    }).then((response) => {
      let value = Infinity;
      let discount = 0;
      let id = '';
      let carrier = '';

      response.data.shipment.forEach((item: any) => {
        if (item.price < value) {
          value = item.price;
          discount = item.discount;
          id = item._id;
          carrier = item.carrier;
        }
      });

      setValue(value);
      setDiscount(discount);
      setTrackingPackage({
        carrier,
        id,
      });
    });
  }, []);

  return (
    <Container>
      <Header />
      <DivStates>
        <CardDataSender />
        <img src="arrow.svg" />
        <CardDataRecipient />
        <img src="arrow.svg" />
        <CardDataShipping />
      </DivStates>
      <CardFrete>
        <p>
          O melhor frete para seu destino é <img src="correios.svg" /> com o
          valor de <b>R${value}</b> com entrega no prazo de 5 dias úteis
        </p>

        <h2>Sua economia foi de R${discount}</h2>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            navigate('/rastreio');
          }}
        >
          Postar
        </Button>
      </CardFrete>
    </Container>
  );
};

export default FreightCalculation;
