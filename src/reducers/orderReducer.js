import { ProductActions } from "../constants/actions";
export const initialOrderState = {
  isLoading: null,
  errorMessage: null,
  successMessage: null,
  clientId: null,
  orderId: null,
  status: null,
  products: [],
  product: {},
  total: 0,
};
export const OrderReducer = (previousState, action) => {
  switch (action.type) {
    case ProductActions.createOrder:
      return {
        ...previousState,
        orderId: action.orderId,
        status: action.status,
        clientId: action.clientId,
      };
    case ProductActions.addProduct:
      return {
        ...previousState,
        products: [
          ...previousState.products,
          {
            name: action.name,
            descripcion: action.descripcion,
            price: action.price,
            quantity: action.quantity,
            photoUrl: action.photoUrl
          },
        ],
      };
    case ProductActions.clearState:
      return {
        ...previousState,
        clientId: null,
        orderId: null,
        status: null,
        products: [],
        product: {},
      };

    default:
      return {
        ...previousState,
        isLoading: false,
        successMessage: null,
        errorMessage: action.error,
      };
  }
};
