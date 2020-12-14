











<div className="form-container sign-in-container">
<Form>
  <h2 className="first-h1">Welcome Back</h2>
  <p className="p2"> Sign In Via</p>
  <div className="social-media-platforms">
    <Link to="/" className="social-media-1">
      <i className="fab fa-facebook" />
    </Link>
    <Link to="/" className="social-media-1">
      <i className="fab fa-instagram" />
    </Link>
    <Link to="/">
      <i className="fab fa-linkedin" />
    </Link>
  </div>
  <span>OR</span>
  <Field
    type="email"
    name="email"
    id="signin-email"
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.email && touched.email && "error"}
    placeholder="Enter your Email Address"
  />
  {errors.email && touched.email && (
    <div className="input-feedback">
      <i className="fas fa-exclamation-circle"></i>
      {errors.email}
    </div>
  )}
  <Field
    type="password"
    name="password"
    id="signin-password"
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.password && touched.password && "error"}
    placeholder="Enter Password"
  />
  {errors.email && touched.email && (
    <div className="input-feedback">
      <i className="fas fa-exclamation-circle"></i>
      {errors.password}
    </div>
  )}
  <Link to="./forgot">Forgot your password?</Link>
  <button
    type="submit"
    id="login-button"
    className="login-button"
    disabled={isSubmitting}
  >
    Sign In
  </button>
</Form>
</div>

<div className="overlay-container">
<div className="overlay">
  <div className="overlay-panel overlay-left">
    <h2 className="first-h1">Already have an account? </h2>
    <p className="p3">
      Provide your details and continue your journey with us.
    </p>
    <button className="ghost" id="signIn">
      Sign In
    </button>
  </div>
  <div className="overlay-panel overlay-right">
    <h2 className="first-h1">Don't Have an Account Yet?</h2>
    <p className="p4">
      Enter your details and start journey with us
    </p>
    <button className="ghost" id="signUp">
      Sign Up
    </button>
  </div>
</div>
</div>
</div>