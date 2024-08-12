import { Field, Input, Button, Text } from "@fluentui/react-components";
import useStyles from "./auth.styles";

const LoginPage = () => {
  let styles = useStyles();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo_sample.png" alt="Logo Sample" />
      <form action="" method="post" className={styles.form}>
        <header>
          <Text size={800}>Log in</Text>
          <Text size={200}>to manage church</Text>
        </header>

        <Field label="Email Address" required>
          <Input type="email" name="email" />
        </Field>

        <Field label="Password" required>
          <Input minLength={8} type="password" name="password" />
        </Field>

        <section className={styles.flex}>
            <Button as="a" href="auth/find">Forget Password?</Button>
            <Button type="submit" appearance="primary">
            Log in
            </Button>
        </section>
        
      </form>
    </div>
  );
};

export default LoginPage;
