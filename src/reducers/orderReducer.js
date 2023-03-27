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
  total: 0
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
          },
        ],
      };
      default:
      return {
        ...previousState,
        isLoading: false,
        successMessage: null,
        errorMessage: action.error,
      };
  }
      // case ProductActions.calculateTotal: {
      //   let acumulador = 0;

        
        
      //   previousState.products.map((item) => {
      //     return acumulador = acumulador + (item.price * item.quantity);
      //   });
  
      //   return {
      //     ...previousState,
      //     total: acumulador,
      //   };
      // }
    // case AuthActions.actionFailed:
    //   switch (action.error) {
    //     case "auth/wrong-password":
    //       return {
    //         ...previousState,
    //         isLoading: false,
    //         successMessage: null,
    //         errorMessage: "Contraseña incorrecta",
    //       };
    //     case "ERR_NETWORK":
    //       return {
    //         ...previousState,
    //         isLoading: false,
    //         successMessage: null,
    //         errorMessage: "Error de Conexión",
    //       };
    //     case "auth/user-not-found":
    //       return {
    //         ...previousState,
    //         isLoading: false,
    //         successMessage: null,
    //         errorMessage: "Usuario no registrado",
    //       };
    //     case "auth/internal-error":
    //       return {
    //         ...previousState,
    //         isLoading: false,
    //         successMessage: null,
    //         errorMessage: "Error interno/Sin conexión",
    //       };
    //     case "auth/weak-password":
    //       return {
    //         ...previousState,
    //         isLoading: false,
    //         successMessage: null,
    //         errorMessage:
    //           "Contraseña muy debil. Por favor use más de 6 digitos",
    //       };
    //     case "ER_DUP_ENTRY":
    //       return {
    //         ...previousState,
    //         isLoading: false,
    //         successMessage: null,
    //         errorMessage:
    //           "numero de cedula ya existe",
    //       };
    
  // case AuthActions.actionSuccess:
  //   return {
  //     ...previousState,
  //     isLoading: false,
  //     errorMessage: null,
  //     successMessage: action.successMessage,
  //   };

  //   return {
  //     ...previousState,
  //     uid: null,
  //     email: null,
  //     isVerified: false,
  //     role: Roles.guest,
  //     isLoading: false,
  //     errorMessage: null,
  //     successMessage:  null
  //   };
  // case AuthActions.checking:
  //   return {
  //     ...previousState,
  //     successMessage:  null,
  //     errorMessage: null,
  //     isLoading: true,
  //   };
  // default:
  //   return { ...previousState, isLoading: false };
};
