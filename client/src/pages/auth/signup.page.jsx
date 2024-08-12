import {
  Field,
  Card,
  mergeClasses,
  makeStyles,
  Input,
  tokens,
  Button,
  Text,
} from "@fluentui/react-components";
import useStyles from "./auth.styles";

const SignupPage = () => {
  let styles = useStyles();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo_sample.png" alt="Logo Sample" />
      <form action="" method="post" className={styles.form}>
        <header>
          <Text size={800}>Create New Account</Text>
          <Text size={200}>to join and manage church</Text>
        </header>

        <Field label="Full Name" required>
          <Input minLength={5} type="text" name="fullname" />
        </Field>

        <Field label="Email Address" required>
          <Input type="email" name="email" />
        </Field>

        <Field label="Password" required>
          <Input minLength={8} type="password" name="password" />
        </Field>

        <Field label="Church Identification Number">
          <Input minLength={8} type="text" name="CIN" />
        </Field>

        <Button type="submit" appearance="primary">
          Create Account
        </Button>

        <hr />

        <Text> Already have an account <a href="/login">Log in</a> </Text>
      </form>
    </div>
  );
};

export default SignupPage;
