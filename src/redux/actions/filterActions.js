import { TOGGLE_BRAND } from "../actionTypes/actionTypes"

export const toggleBrand = (bandName) => {
   return {
        type: TOGGLE_BRAND,
        payload: bandName,
   }
}