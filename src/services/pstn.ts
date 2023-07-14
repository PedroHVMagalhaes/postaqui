import axios from "axios";
import ShippingCalculateDTO from "./dtos/shipping-calculate-dto";

const api = axios.create({
  baseURL: 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/'
})

export const shippingCostCalculation = (data: ShippingCalculateDTO) => {
  return api.post('shipping_calculate', data)
}
