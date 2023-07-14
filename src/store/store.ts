import { atom } from 'jotai';

// Definição do tipo Tracking
type Tracking = {
  id: string;
  carrier: string;
}

// Definição do tipo FormValues para os dados de origem
type FormValues = {
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
};

// Definição do tipo FormValuesRecipient para os dados do destinatário
type FormValuesRecipient = {
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
};

// Definição do tipo FormValuesShipping para os dados de envio
type FormValuesShipping = {
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

// Criação do estado global 'tracking' para o objeto Tracking
export let tracking = atom<Tracking | null>(null);

// Criação do estado global 'dadosOrigem' para o objeto FormValues
export let dadosOrigem = atom<FormValues | null>(null);

// Criação do estado global 'dadosOrigemRecipient' para o objeto FormValuesRecipient
export let dadosOrigemRecipient = atom<FormValuesRecipient | null>(null);

// Criação do estado global 'dadosOrigemShipping' para o objeto FormValuesShipping
export let dadosOrigemShipping = atom<FormValuesShipping>({
  peso: 0,
  altura: 0,
  largura: 0,
  comprimento: 0,
  logicaReversa: false,
  avisoRecebimento: false,
  maosProprias: false,
  valorMercadoria: 0,
  quantidadeItens: 0,
  descriçaoItens: ''
});
