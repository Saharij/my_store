import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './SignInForm.scss';
import Input from '../../../../components/Input/Input';
import { getLocalStorageItem, setLocalStorageItem } from '../../../../utils/localStorage';

const defaultUser = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const history = useHistory();
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState('');

  const isSubmitDisabled = !user.email || !user.password;

  const handleInputChange = ({ target: { value, name } }) => {
    setUser((state) => ({
      ...state,
      [name]: value,
    }))
    setError('');
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (!isSubmitDisabled) {
      const users = getLocalStorageItem('users') || [];

      const isCorrectUser = users.some(({ email, password }) =>
        email === user.email && password === user.password);

      if (isCorrectUser) {
        console.log('loggAddIn');
        setLocalStorageItem('currentUser', user);
      } else {
        setError('Email or password is incorrect');
      }

      setUser(defaultUser);
      return history.push('/products');
    }
  }

  return (
    <>
      <form
        onSubmit={submitForm}
        className="form"
      >
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
          className="form__btn-sign-in"
        >
          Sign in
        </button>
        <span
          className="form__or"
        >
          Or
        </span>
      </form>
      <p
        className="form__no-account"
      >
        No account?
      </p>
      <Link
        to="/sign-up"
        className="form__link"
      >
        Registration
      </Link>
    </>
  );
};

export default SignInForm;
