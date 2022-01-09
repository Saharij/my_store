import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './SignUpForm.scss';
import Input from '../../../../components/Input/Input';
import { loadUser } from '../../../../redux/store';
import { getLocalStorageItem, setLocalStorageItem } from '../../../../utils/localStorage';

const defaultUser = {
  name: '',
  email: '',
  password: '',
}

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState('')
  const isSubmitDisabled = !user.name || !user.email || !user.password;

  const handleInputChange = ({ target: { value, name }}) => {
    setUser((state) => ({
      ...state,
      [name]: value,
    }))

    setError('');
  }

  const signUpForm = (event) => {
    event.preventDefault();

    if (!isSubmitDisabled) {
      const users = getLocalStorageItem('users') || [];
      const hasUser = users.some(({ email }) => email === user.email);

      if (hasUser) {
        setError('User with this email already exist!');
      } else {
        setLocalStorageItem('users', [...users, user]);
        dispatch(loadUser(user.name));
      }
    }

    setUser(defaultUser);

    return history.push('/products');
  }

  return (
    <>
      <form
        onSubmit={signUpForm}
        className="auth-form"
      >
        <Input
          type="text"
          name="name"
          value={user.name}
          placeholder="Write your full name"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          value={user.email}
          placeholder="Write your email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={user.password}
          placeholder="Write your password"
          onChange={handleInputChange}
        />
        {error && (
          <p>{error}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="auth-form__btn-registration"
        >
          Registration
        </button>
        <span
          className="auth-form__or"
        >
          Or
        </span>
      </form>
      <p
        className="auth-form__have-account"
      >
        Already have an account?
      </p>
      <Link
        to="/sign-in"
        className="auth-form__link"
      >
        Sign in
      </Link>
    </>
  );
};

export default SignUpForm;
