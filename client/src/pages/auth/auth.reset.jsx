import { Field, Input, Button, Text } from "@fluentui/react-components";
import useStyles from "./auth.styles";

const AuthReset = () => {
  let styles = useStyles();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo_sample.png" alt="Logo Sample" />
      <form action="" method="post" className={styles.form}>
        <header>
          <Text size={800}>Reset Password</Text>
          
        </header>

        <Field label="New Password" required>
          <Input type="password" name="password" />
        </Field>

        <Field label="Confirm Password" required>
          <Input type="confirmPassword" name="confirmPassword" />
        </Field>

        <section className={styles.flex}>
          <Button type="submit" appearance="primary">
            Change Password
          </Button>
        </section>
      </form>
    </div>
  );
};

export default AuthReset;
