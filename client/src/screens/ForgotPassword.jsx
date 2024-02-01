import { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Error,
  Input,
  Instructions,
  Massage,
  Stage,
  Submit,
} from "../components/Authentication/style";
import { Wrapper } from "../components/Authentication/Wrapper";

export default function ForgotPassword() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("email");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMail(event.target);
  };

  const sendMail = (form) => {
    setLoading(true);
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/ForgotPassword", body)
      .then(() => setStage("sent"))
      .catch((error) => {
        const data = error.response?.data;
        setErrorMessage(data);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Wrapper>
      <Stage show={stage === "email"} onSubmit={handleSubmit} ref={formRef}>
        <Instructions>Please enter your E-mail address:</Instructions>
        <Input name="email" type="text" placeholder="E-mail" />
        <Error>{errorMessage}</Error>
        <Submit disabled={loading}>Send</Submit>
      </Stage>
      <Stage show={stage === "sent"}>
        <Massage>We emailed you a link to reset your password</Massage>
        <Resend>
          Didn’t receive an email? <br />
          Check your spam or{" "}
          <ResendLink href="#" onClick={() => sendMail(formRef.current)}>
            click here
          </ResendLink>{" "}
          to resend
        </Resend>
      </Stage>
    </Wrapper>
  );
}

const Resend = styled.p`
  font-size: 1.125rem;
`;

const ResendLink = styled.a`
  color: inherit;
`;
