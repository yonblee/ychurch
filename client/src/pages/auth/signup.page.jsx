import {
  Field,
  Card,
  mergeClasses,
  makeStyles,
  Input,
  tokens,
  Button,
} from "@fluentui/react-components";

var useStyles = makeStyles({
  container: {
    height: "98.98vh",
    display: "grid",
    gap: "16px",
    placeContent: "center",
    placeItems: "center",
  },
  card: {
    width: "280px",
    height: "fit-content",
    boxShadow: "var(--bs-xl)",
    borderRadius: tokens.borderRadiusCircular
  },
  logo: {
    width: "78px",
  },
});
const SignupPage = () => {
  let styles = useStyles();
  return (
    <div className={styles.container}>
      <img
        className={mergeClasses(styles.logo)}
        src="/logo_sample.png"
        alt="Logo Sample"
      />
      <Card className={mergeClasses(styles.card)}>
        <header>Header</header>
        <form action="" method="post">
          <Field label="Required field" required>
            <Input />
          </Field>

          <Button appearance="primary">Register</Button>
        </form>
      </Card>
    </div>
  );
};

export default SignupPage;
