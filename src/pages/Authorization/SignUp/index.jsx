import SignUpForm from './components/SignUpForm';
import AuthPageTemplate from '../components/AuthPageTemplate/AuthPageTemplate';

const SignUp = props => {
  return (
    <AuthPageTemplate>
      <SignUpForm />
    </AuthPageTemplate>
  );
};

export default SignUp;
