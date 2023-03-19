import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  signOut,
  sendEmailVerification, 
} from "firebase/auth";

  export async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password) 
  }
  export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  export function logout() {
      return signOut(auth);
  }
  export function updateUserEmail(user, email) {
      return updateEmail(user, email);
  }
  export function updateUserPassword(user, password) {
      return updatePassword(user, password);
  }
  
  export function resetPassword(email) {
      return sendPasswordResetEmail(auth, email);
  }
  export function verifyEmail(email){
    return sendEmailVerification(email)
  }