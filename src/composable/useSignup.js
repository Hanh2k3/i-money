import { ref } from 'vue'
import { auth } from '@/configs/firebase.js'
import { createUserWithEmailAndPassword  } from 'firebase/auth'

const error = ref(null); 
const isPending = ref(false); 

async function signup(email, password, fullName) {
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if(!response) throw new Error("Could not create a new user")
    response.user.displayName = fullName
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignup() {
  return { error, isPending, signup };
}
