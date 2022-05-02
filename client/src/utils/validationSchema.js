import * as Yup from "yup";

const stepTwoValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name field is required!"),
  email: Yup.string()
    .email("This is not a valid email.")
    .required("Email field is required!"),
  website: Yup.string().url("This is not a valid url."),
});

const stepThreeValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password field is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password field is required!"),
});

export { stepTwoValidationSchema, stepThreeValidationSchema };
