import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./styles.module.css";

interface FormProps {
  name: string;
  email: string;
  password: string;
}

function App() {
  const { register, handleSubmit } = useForm<FormProps>();

  const submitForm: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(submitForm)}>
      <input placeholder="Name" {...register("name")} />
      <input type="email" placeholder="E-mail" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
