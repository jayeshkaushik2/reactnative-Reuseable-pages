import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import { ECOM_API_URL } from "@env";

export default function App() {
  console.log(ECOM_API_URL);
  return (
    <>
      {/* <Signup /> */}
      <Login />
    </>
  );
}
