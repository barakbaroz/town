import { useState } from "react";
import axios from "axios";
import { Error, Input, Part, Submit } from "../components/Authentication/style";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PasswordRequirements from "../components/Authentication/PasswordRequirements";
import { Wrapper } from "../components/Authentication/Wrapper";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());
    axios
      .post("/api/stuffMembers/resetPassword", body)
      .then(() => navigate("/login"))
      .catch((error) => {
        if (error.response.status === 401) setErrorMessage("Link expired");
        if (error.response.status === 400) setErrorMessage("Error Message");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Wrapper>
      <Part onSubmit={handleSubmit} show>
        <input
          type="password"
          value={searchParams.get("token")}
          hidden
          name="token"
        />
        <PasswordRequirements password={newPassword}>
          <Input
            name="newPassword"
            type="password"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
        </PasswordRequirements>
        <Input
          name="ConfirmPassword"
          type="password"
          placeholder="Confirm New Password"
        />
        <Error>{errorMessage}</Error>
        <Submit disabled={loading} type="submit">
          Reset
        </Submit>
      </Part>
    </Wrapper>
  );
}
