import axios from "axios";

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export const getCepData = (cep: string) => {
  return api.get(`${cep}/json`)
}
