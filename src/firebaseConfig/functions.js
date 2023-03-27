import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}
export function updateDisplayName(user, {displayName, photoUrl}){
  return updateProfile(user, {displayName, photoUrl} )
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

// THIS WILL ONLY BE ACCESSIBLE TO USER MEANT TO BE ADMINS, DEVELOPERS OR MODERATORS
export const singInWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};
