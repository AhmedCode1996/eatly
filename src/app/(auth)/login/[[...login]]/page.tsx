import { SignIn } from "@clerk/nextjs";
import styles from "./styles.module.css";
const LoginPage = () => (
  <SignIn
    appearance={{
      elements: {
        formButtonPrimary: styles.buttonPrimary,
      },
    }}
    afterSignInUrl={"/dashboard"}
    signUpUrl="/signup"
  />
);

export default LoginPage;
