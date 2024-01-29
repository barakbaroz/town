import { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Error,
  Input,
  Instructions,
  Part,
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
      .then(() => setStage("scented"))
      .catch((error) => {
        if (error.response.status === 400)
          setErrorMessage("password or username incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Wrapper>
      <Part show={stage === "email"} onSubmit={handleSubmit}>
        <Instructions>Please enter your E-mail address:</Instructions>
        <Input name="email" type="text" placeholder="E-mail" />
        <Error>{errorMessage}</Error>
        <Submit disabled={loading}>Send</Submit>
      </Part>
      <Part show={stage === "scented"}>
        <Scented>We emailed you a link to reset your password</Scented>
        <Resend>
          Didn’t receive an email? <br />
          Check your spam or{" "}
          <ResendLink href="#" onClick={() => sendMail(formRef.current)}>
            click here
          </ResendLink>{" "}
          to resend
        </Resend>
      </Part>
    </Wrapper>
  );
}

const Scented = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
`;

const Resend = styled.p`
  font-size: 1.125rem;
`;

const ResendLink = styled.a`
  color: inherit;
`;
