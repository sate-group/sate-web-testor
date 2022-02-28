import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { accent, dark } from "react-colorset";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signIn } from "../../features/account";
import SatelliteIcon from "../icons/satellite-icon";

type Form = {
  emailOrUsername: string;
  password: string;
};
const defaultForm = {
  emailOrUsername: "",
  password: "",
};
type Props = {};
function SignInBox(props: Props) {
  const [form, setForm] = useState<Form>(defaultForm);
  const dispatch = useDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn(form));
    setForm(defaultForm);
  };

  return (
    <Wrapper>
      <div className="cover">
        <SatelliteIcon size="70%" />
        <span>Sign in to Sate</span>
      </div>
      <form onSubmit={submitHandler}>
        <TextField
          size="small"
          id="filled-basic"
          label="Email of username"
          variant="outlined"
          type="text"
          name="emailOrUsername"
          value={form.emailOrUsername}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, emailOrUsername: event.currentTarget.value })
          }
        />
        <TextField
          size="small"
          id="filled-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, password: event.currentTarget.value })
          }
        />
        <Button size="small" type="submit" variant="contained">
          CONFIRM
        </Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  max-width: 280px;
  flex-grow: 1;
  padding: 30px 20px;

  border-radius: 5px;

  background-color: ${dark.backgroundDefault};
  color: ${dark.foregroundDefault};

  user-select: none;
  animation: pulse 1s;

  .cover {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${accent.accentPrimaryDefault};
    }
    70% {
      box-shadow: 0 0 0 5px ${dark.backgroundRoot};
    }
    100% {
      box-shadow: 0 0 0 0 ${dark.backgroundRoot};
    }
  }
`;

export default SignInBox;
