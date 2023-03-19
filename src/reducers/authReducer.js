import { AuthActions } from "../constants/actions";
import { Roles } from "../constants/roles";
export const initialAuthState = {
  isLoading: false,
  user: null,
  uid: null,
  email: null,
  isVerified: false,
  role: Roles.guest,
  errorMessage: null,
  successMessage: null,
};
export const AuthReducer = (previousState, action) => {
  switch (action.type) {
    case AuthActions.logIn:
      if (action.user.emailVerified) {
        return {
          ...previousState,
          user: action.user.user,
          email: action.user.email,
          isVerified: action.user.emailVerified,
          role: Roles.admin,
          uid: action.user.uid,
          isLoading: false,
        };
      }
      return {
        ...previousState,
        user: action.user.user,
        email: action.user.email,
        isVerified: action.user.emailVerified,
        role: Roles.user,
        uid: action.user.uid,
        isLoading: false,
      };
    case AuthActions.logInFailed:
      switch (action.error) {
        case "auth/wrong-password":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: "Contraseña incorrecta",
          };
        case "auth/user-not-found":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: "Usuario no registrado",
          };
        case "auth/internal-error":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: "Error interno/Sin conexión",
          };
        case "auth/weak-password":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage:
              "Contraseña muy debil. Por favor use más de 6 digitos",
          };
        default:
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: action.error,
          };
      }
    case AuthActions.actionFailed:
      return {
        ...previousState,
        isLoading: false,
        successMessage: null,

        errorMessage: action.error,
      };
    case AuthActions.actionSuccess:
      return {
        ...previousState,
        isLoading: false,
        errorMessage: null,
        successMessage: action.successMessage,
      };
    case AuthActions.logOut:
      return {
        ...previousState,
        user: null,
        uid: null,
        email: null,
        isVerified: false,
        role: Roles.guest,
        isLoading: false,
      };
    case AuthActions.checking:
      return {
        ...previousState,
        isLoading: true,
      };
    default:
      return { ...previousState, isLoading: false };
  }
};
