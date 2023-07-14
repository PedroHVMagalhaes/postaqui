export default interface ShippingCalculateDTO {
  sender: ClientData;
  receiver: ClientData;
  package: Package;
}

interface ClientData {
  fullname: string;
  cpf: string;
  phone: string;
  email: string;
  address: Address;
}

interface Address{
  cep: string;
  state: string;
  uf: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  complement?: string;
}

interface Package{
  weight: number;
  height: number;
  width: number;
  length: number;
  reverse: boolean;
  ar: boolean;
  own_hands: boolean;
  information: {
    amount: number;
    quantity: number;
    description: string;
  }
}
