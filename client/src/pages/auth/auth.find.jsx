import { Field, Input, Button, Text } from "@fluentui/react-components";
import useStyles from "@utils/styling/auth.styles";


const AuthFind = () => {
  let styles = useStyles();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo_sample.png" alt="Logo Sample" />
      <form action="" method="post" className={styles.form}>
        <header>
          <Text size={800}>Find Account</Text>
          <Text size={200}>Reset your password</Text>
        </header>

        <Field label="Email Address" required>
          <Input type="email" name="email" />
        </Field>

        <section className={styles.flex}>
          <Button type="submit" appearance="primary">
            Find Account
          </Button>
        </section>
      </form>
    </div>
  );
};

export default AuthFind;
