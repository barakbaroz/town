import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PinInput } from "@gistmed/gist-ui";
import {
  Error,
  Input,
  Part,
  Submit,
  Wrapper,
} from "../components/authentication";
import styled from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("credentials");
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState("");

  const handleCredentialsSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/credentials", body)
      .then(() => setStage("OTP"))
      .catch((error) => {
        if (error.response.status === 403)
          setErrorMessage("password or username incorrect");
      })
      .finally(() => setLoading(false));
  };

  const handleOTPSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/otp", { ...body, code })
      .then(() => navigate("/panel"))
      .catch((error) => {
        if (error.response.status === 403)
          setErrorMessage("The code you entered is incorrect");
      })
      .finally(() => setLoading(false));
  };

  const handleSubmitStage = {
    credentials: handleCredentialsSubmit,
    OTP: handleOTPSubmit,
  };

  const handleSubmit = handleSubmitStage[stage];

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Part show={stage === "credentials"}>
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
      </Part>
      <Part show={stage === "OTP"}>
        <p>Please enter the security code we sent you via text message:</p>
        <PinInput name="code" length={6} onChange={setCode} fontSize="2rem" />
      </Part>
      <Error>{errorMessage}</Error>
      <ForgotPassword href="/ForgotPassword">Forgot Password?</ForgotPassword>
      <Submit disabled={loading} type="submit">
        Sign In
      </Submit>
    </Wrapper>
  );
}

const ForgotPassword = styled.a`
  color: inherit;
`;
