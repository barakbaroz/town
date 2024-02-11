import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PinInput } from "@gistmed/gist-ui";
import {
  Error,
  Input,
  Instructions,
  Massage,
  Stage,
  Submit,
} from "../components/Authentication/style";
import styled from "styled-components";
import { Wrapper } from "../components/Authentication/Wrapper";

export default function Login() {
  const navigate = useNavigate();
  const credentialsFormRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("credentials");
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const handleCredentialsSubmit = (event) => {
    setLoading(true);
    setErrorMessage("");
    event.preventDefault();
    sendCredentials(event.target);
  };

  const sendCredentials = (formElement) => {
    const formData = new FormData(formElement);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/credentials", body)
      .then(() => {
        setStage("OTP");
        setEmail(body.email);
      })
      .catch((error) => {
        const data = error.response?.data;
        if (data === "User Blocked") return setStage("blocked");
        return setErrorMessage(data);
      })
      .finally(() => setLoading(false));
  };

  const handleOTPSubmit = (event) => {
    setLoading(true);
    setErrorMessage("");
    event.preventDefault();
    axios
      .post("/api/stuffMembers/otp", { email, code })
      .then(() => navigate("/panel"))
      .catch((error) => {
        const data = error.response?.data;
        if (data === "Otp expired") setStage("expired");
        if (data === "incorrect code")
          setErrorMessage("The code you entered is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Wrapper>
      <Stage
        show={stage === "credentials"}
        onSubmit={handleCredentialsSubmit}
        ref={credentialsFormRef}
      >
        <Input name="email" type="text" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <Link href="/ForgotPassword">Forgot Password?</Link>
        <Error>{errorMessage}</Error>
        <Submit disabled={loading}>Sign In</Submit>
      </Stage>
      <Stage show={stage === "OTP"} onSubmit={handleOTPSubmit}>
        <Instructions>
          Please enter the security code we sent you via text message:
        </Instructions>
        <input value={email} hidden readOnly />
        <PinInput name="code" length={6} onChange={setCode} fontSize="2rem" />
        <Error>{errorMessage}</Error>
        <Link onClick={() => sendCredentials(credentialsFormRef.current)}>
          Resend code
        </Link>
        <Submit disabled={loading}>Continue</Submit>
      </Stage>
      <Stage show={stage === "expired"}>
        <Massage>
          The code is no longer valid. Please re-enter the system, so we can
          send you a new code.
        </Massage>
        <Submit
          type="button"
          disabled={loading}
          onClick={() => window.location.reload()}
        >
          Re-enter
        </Submit>
      </Stage>
      <Stage show={stage === "blocked"}>
        <Massage>
          Your user has been blocked. Please contact our support to provide you
          a new user.
        </Massage>
        <Submit type="button" disabled={loading}>
          Contact Us
        </Submit>
      </Stage>
    </Wrapper>
  );
}

const Link = styled.a`
  color: inherit;
  cursor: pointer;
`;
