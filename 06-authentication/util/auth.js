import axios from "axios";

const API_KEY = "AIzaSyC4tW9vSDvkRvnu7EFzwQGDmsY-cEj_Jbs";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
