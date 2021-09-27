import React, { useState } from 'react';

import Router from 'next/router';

type IFormProps = {
  xl?: boolean;
  placeholder: string;
};

const Form2 = (props: IFormProps) => {

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
      } else if (result.status === 422) {
        await Router.push('/duplicate');
      } else if (result.status === 500) {
        //add failure page
        console.log("page to add");
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
       <div className='inline-block rounded-md text-center text-lg font-semibold py-2 px-4 text-white bg-primary-500 hover:bg-primary-600'>
        <button type="submit">Registrovať</button>
    </div> 
    </form>
  );
};

export { Form2 };
