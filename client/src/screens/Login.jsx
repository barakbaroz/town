import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PinInput } from "@gistmed/gist-ui";
import {
  Error,
  Input,
  Instructions,
  Part,
  Submit,
} from "../components/Authentication/style";
import styled from "styled-components";
import { Wrapper } from "../components/Authentication/Wrapper";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("credentials");
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const handleCredentialsSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/credentials", body)
      .then(() => {
        setStage("OTP");
        setEmail(body.email);
      })
      .catch((error) => {
        if (error.response.status === 403)
          setErrorMessage("password or username incorrect");
      })
      .finally(() => setLoading(false));
  };

  const handleOTPSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    axios
      .post("/api/stuffMembers/otp", { email, code })
      .then(() => navigate("/panel"))
      .catch((error) => {
        if (error.response.status === 403)
          setErrorMessage("The code you entered is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Wrapper>
      <Part show={stage === "credentials"} onSubmit={handleCredentialsSubmit}>
        <Input name="email" type="text" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <Link href="/ForgotPassword">Forgot Password?</Link>
        <Error>{errorMessage}</Error>
        <Submit disabled={loading}>Sign In</Submit>
      </Part>
      <Part show={stage === "OTP"} onSubmit={handleOTPSubmit}>
        <Instructions>
          Please enter the security code we sent you via text message:
        </Instructions>
        <input value={email} hidden />
        <PinInput name="code" length={6} onChange={setCode} fontSize="2rem" />
        <Link>Resend code</Link>
        <Submit disabled={loading}>Continue</Submit>
      </Part>
    </Wrapper>
  );
}

const Link = styled.a`
  color: inherit;
`;
