// yup validation
import * as yup from "yup";


// Login Setup
export const loginSetup = yup.object().shape({
    email: yup.string()
    .email("Email is Invalid")
    .required("Enter a valid Email Address"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password must be at least 8 Characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    });


// SignUp Setup
export const SignUpSetup = yup.object().shape({
    business_name: yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be at least 3 characters")
      .required("This field is Required"),
    email: yup.string()
    .email("Email is Invalid")
    .required("Enter a valid Email Address"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password must be at least 8 Characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    });