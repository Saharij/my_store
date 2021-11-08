import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalStorageItem, setLocalStorageItem } from '../../../../utils/localStorage';
import { Input } from '../../../../components/Input/Input';

const defaultUser = {
  name: '',
  email: '',
  password: '',
}

export const SignUpForm = () => {
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
      }
    }

    setUser(defaultUser);
  }

  return (
    <>
      <h2>Welcome</h2>
      <form
        action=""
        onSubmit={signUpForm}
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
        >
          Registration
        </button>
      </form>
      <p>
      Already have an account?
       <Link to="/sign-in">Sign in</Link>
      </p>
    </>
  );
};
