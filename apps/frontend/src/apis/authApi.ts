'use client';

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '@/apis/firebase';
import Cookies from 'js-cookie';

const provider = new GoogleAuthProvider();

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    Cookies.set('token', token, { expires: 7, secure: true });

    return token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export function logoutUser() {
  Cookies.remove('token');
}

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    Cookies.set('token', token, { expires: 7, secure: true });

    return token;
  } catch (error) {
    console.error('Google Login Error:', error);
    throw error;
  }
}

export async function logoutUserGoogle() {
  await signOut(auth);
  Cookies.remove('token');
}
