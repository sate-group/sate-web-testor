import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { Status } from "../../App";
import { SatelliteIcon } from "../icons";
import withBox from "../box/box-hoc";

const useForm = () => {
  type Form = {
    emailOrUsername: string;
    password: string;
  };

  const [form, setForm] = useState<Form>({
    emailOrUsername: "",
    password: "",
  });

  const resetForm = () => {
    setForm({
      emailOrUsername: "",
      password: "",
    });
  };

  return {
    form,
    setForm,
    resetForm,
  };
};
type Props = {
  onSubmit: (emailOrUsername: string, password: string) => void;
  status: Status;
};
function SignInBox({ onSubmit, status }: Props) {
  /**
   * states
   */

  /**
   * hooks
   */
  const { form, setForm, resetForm } = useForm();

  /**
   * handlers
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    onSubmit(form.emailOrUsername, form.password);
    resetForm();
  };
  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    switch (event.currentTarget.name) {
      case "emailOrUsername":
        setForm({ ...form, emailOrUsername: event.currentTarget.value });
        break;
      case "password":
        setForm({ ...form, password: event.currentTarget.value });
        break;
    }
  };

  return (
    <div hidden={status === "success"}>
      <Wrapper>
        <div className="cover">
          <SatelliteIcon title="" size="70%" />
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
            onChange={changeHandler}
            disabled={status === "loading"}
          />
          <TextField
            size="small"
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            disabled={status === "loading"}
          />
          <Button
            size="small"
            type="submit"
            variant="contained"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <ReactLoading
                width="20px"
                height="20px"
                type="spin"
                color="#fff"
              />
            ) : (
              <span>CONFIRM</span>
            )}
          </Button>
        </form>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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

  button {
    height: 40px;
  }
`;

export default withBox(SignInBox);
