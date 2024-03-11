import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="">
              <SignIn path="/signin" routing="path" signUpUrl="/signup" />
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
