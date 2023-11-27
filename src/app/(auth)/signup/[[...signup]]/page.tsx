import { SignUp } from "@clerk/nextjs";
import styles from "./styles.module.css";
const SignupPage = () => (
  <SignUp
    appearance={{
      elements: {
        formButtonPrimary: styles.buttonPrimary,
      },
    }}
    afterSignUpUrl={"/login"}
    signInUrl="/login"
  />
);

export default SignupPage;
