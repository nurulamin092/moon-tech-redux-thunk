import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const toggleBrand = (bandName) => {
   return {
        type: TOGGLE_BRAND,
        payload: bandName,
   }
}

export const toggleStock = () => {
    return {
         type: TOGGLE_STOCK
    }
}