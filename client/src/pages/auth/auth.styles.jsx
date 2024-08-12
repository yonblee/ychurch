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

var useStyles = makeStyles({
  container: {
    height: "98.98vh",
    display: "grid",
    gap: "16px",
    placeContent: "center",
    placeItems: "center",
  },
  card: {
    borderRadius: tokens.borderRadiusCircular,
  },
  logo: {
    width: "78px",
  },
  form: {
    width: "280px",
    height: "fit-content",
    boxShadow: "var(--bs-xl)",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: tokens.colorBrandForeground1,
  },
});

export default useStyles;
