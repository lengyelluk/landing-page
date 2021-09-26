import React, { useState } from 'react';

import className from 'classnames';
import Router from 'next/router';

type IFormProps = {
  xl?: boolean;
  placeholder: string;
};

const Form2 = (props: IFormProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  const [email, setEmail] = useState('');

  const submitData = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const body = { email };
      const result = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(body),
      });
      if (result.status === 201) {
        await Router.push('/success');
      } else if (result.status === 400) {
        await Router.push('/duplicate');
      }
    } catch (error) {
      await Router.push('/');
    }
  };

  return (
    <form onSubmit={submitData}>
      <input
        name="Email"
        className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
        autoComplete="email"
        placeholder={props.placeholder}
        required
      />
      <div className={btnClass}>
        <button type="submit">Registrovať</button>
      </div>
      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }

          #email {
          }
        `}
      </style>
    </form>
  );
};

export { Form2 };
