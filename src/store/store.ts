import { atom } from 'jotai';

type Tracking = {
  id: string;
  carrier: string;
}

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

export let tracking = atom<Tracking | null>(null);
export let dadosOrigem = atom<FormValues | null>(null);
export let dadosOrigemRecipient = atom<FormValuesRecipient | null>(null);
export let dadosOrigemShipping = atom<FormValuesShipping >({
  peso: 0,
  altura: 0,
  largura: 0,
  comprimento: 0,
  logicaReversa: false,
  avisoRecebimento: false,
  maosProprias: false,
  valorMercadoria: 0,
  quantidadeItens: 0,
  descriçaoItens: ''});
