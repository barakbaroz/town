import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import login from "../assets/Backgrounds/login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/login", body)
      .then(() => navigate("/panel"))
      .catch((error) => {
        if (error.response.status === 403)
          alert("שם המשתמש או הסיסמה שהקלדת שגויים");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Titles>
          <Title>ברוכים הבאים</Title>
          <SubTitle>
            למערכת ליווי והדרכת <br /> מטופלים עם סוכרת
          </SubTitle>
        </Titles>
        <Field>
          <Input name="email" type="text" placeholder="Email" />
        </Field>
        <Field>
          <Input name="password" type="password" placeholder="Password" />
        </Field>
        <Submit disabled={loading} type="submit">
          כניסה
        </Submit>
      </Form>
    </Container>
  );
};
export default Login;

const Container = styled.div`
  background-image: url(${login});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: inherit, sans-serif;
  justify-content: center;
  direction: rtl;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: fit-content;
  align-items: center;
  direction: ltr;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4rem;
  margin: 8rem;
`;

const Field = styled.div`
  border-radius: 2rem;
  padding: 0.7rem 1.2rem;
  background-color: rgba(255, 255, 255, 0.8);
  width: 16rem;
  text-align: start;
`;

const Submit = styled.button`
  border-radius: 3rem;
  border: none;
  background-color: #f02a4c;
  padding: 0.7rem;
  width: 60%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 200ms linear;
  &:hover {
    box-shadow: 3px 3px 6px rgba(122, 122, 122, 0.5);
  }
  &:disabled {
    opacity: 0.3;
    cursor: progress;
  }
`;

const Titles = styled.div`
  text-align: center;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;
