import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <SignIn path="/" routing="path" signUpUrl="/" />
      </div>
    </div>
  </div>
);

export default SignInPage;
