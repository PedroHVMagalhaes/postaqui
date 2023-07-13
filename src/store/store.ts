import { atom } from 'jotai';

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

export let dadosOrigem = atom<FormValues | null>(null);
export let dadosOrigemRecipient = atom<FormValuesRecipient | null>(null);
