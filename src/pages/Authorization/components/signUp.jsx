import { useState } from 'react';

export const SignUp = () => {
  const [createName, setName] = useState('');
  const [createEmail, setEmail] = useState('');
  const [createPassword, setPassword] = useState('');

  const inputName = ({ target }) => {
    setName(target.value);
  };

  const inputEmail = ({ target }) => {
    setEmail(target.value);
  };

  const inputPassword = ({ target }) => {
    setPassword(target.value);
  };

  const signUpForm = (event) => {
    event.preventDefault();

    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <h2>Welcome</h2>
      <form
        action=""
        onSubmit={signUpForm}
      >
        <input
          type="text"
          value={createName}
          placeholder="Write your full name"
          onChange={inputName}
          required
        />
        <input
          type="email"
          value={createEmail}
          placeholder="Write your email"
          onChange={inputEmail}
          required
        />
        <input
          type="password"
          value={createPassword}
          placeholder="Write your password"
          onChange={inputPassword}
          required
        />
        <button>
          Sign in
        </button>
        <button type="submit">
          Registration
        </button>
      </form>
    </>
  );
};
