import { useState } from 'react';
import { Input } from './inputComponent';
import { getLocalStorageItem, setLocalStorageItem } from '../../../components/utils/localStorage';

const defaultUser = {
  email: '',
  password: '',
};

export const SignIn = () => {
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
        setError('Email or password is incorrect')
      }

      setUser(defaultUser)
    }
  }

  return (
    <>
      <h2>Welcome</h2>
      <form
        onSubmit={submitForm}
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
        >
          Sign in
        </button>
      </form>
    </>
  );
};
