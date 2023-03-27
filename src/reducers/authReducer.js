import { AuthActions } from "../constants/actions";
import { Roles } from "../constants/roles";
export const initialAuthState = {
  isLoading: false,
  uid: null,
  displayName: null,
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
        localStorage.setItem("uid", action.user.uid);
        localStorage.setItem("email", action.user.email);
        localStorage.setItem("role", Roles.admin);
        localStorage.setItem("isVerified", action.user.emailVerified);
        localStorage.setItem("displayName", action.user.displayName);
        return {
          ...previousState,
          email: action.user.email,
          displayName: action.user.displayName,
          isVerified: action.user.emailVerified,
          role: Roles.admin,
          uid: action.user.uid,
          isLoading: false,
          successMessage: null,
          errorMessage: null,
        };
      }
      localStorage.setItem("uid", action.user.uid);
      localStorage.setItem("email", action.user.email);
      localStorage.setItem("role", Roles.user);
      localStorage.setItem("isVerified", action.user.emailVerified);
      localStorage.setItem("displayName", action.user.displayName);

      return {
        ...previousState,
        displayName: action.user.displayName,
        email: action.user.email,
        isVerified: action.user.emailVerified,
        role: Roles.user,
        uid: action.user.uid,
        isLoading: false,
        successMessage: null,
        errorMessage: null,
      };
    case AuthActions.actionFailed:
      switch (action.error) {
        case "auth/wrong-password":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: "Contraseña incorrecta",
          };
        case "ERR_NETWORK":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: "Error de Conexión",
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
        case "ER_DUP_ENTRY":
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: "número de cédula ya existe",
          };

        default:
          return {
            ...previousState,
            isLoading: false,
            successMessage: null,
            errorMessage: action.errorMessage,
          };
      }
    case AuthActions.actionSuccess:
      return {
        ...previousState,
        isLoading: false,
        errorMessage: null,
        successMessage: action.successMessage,
      };
    case AuthActions.logOut:
    localStorage.removeItem('uid')           
    localStorage.removeItem('role')      
    localStorage.removeItem('isVerified')      
    localStorage.removeItem('displayName')      
      return {
        ...previousState,
        uid: null,
        email: null,
        isVerified: false,
        role: Roles.guest,
        isLoading: false,
        errorMessage: null,
        successMessage: null,
      };
    case AuthActions.checking:
    case AuthActions.setDisplayName:
      localStorage.setItem('displayName', action.displayName)
      return {
        ...previousState,
        displayName: action.displayName,
        successMessage: null,
        errorMessage: null,
        isLoading: true,
      };
    
    default:
      return { ...previousState, isLoading: false };
  }
};
