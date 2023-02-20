import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from '@reduxjs/toolkit'

export interface ProductI {
    image: string;
    title: string;
    price: number;
    desc: string;
    id: string;
}


interface initialStateI {
    product: ProductI | null;
    loading: boolean;
}

const initialState: initialStateI = {
    product: null,
    loading: false,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<ProductI>) => {
            state.product = action.payload
        }
    }
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer