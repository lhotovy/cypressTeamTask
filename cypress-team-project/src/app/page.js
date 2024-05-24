"use client";

import { useState } from 'react';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'c692559ae25b45d24b5df2ba42e8ecaf-a2dd40a3-91b92e07'});

 const data = {
    from: "Mailgun",
    to: "clonman9@gmail.com",
    subject: "Cypress task",
    text: `${firstName} ${lastName} has submitted the form.`,
  }


  // create a sibmit handler for the form to be called when Submit button is hit
  const handleSubmit = (e) => {
    e.preventDefault();
    mg.messages().send(data);  
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-stone-900">
      <form className="flex flex-col border-2 border-white p-12 items-center" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label htmlFor="first_name">Your first name:</label>
          <input type="text" id="first_name" className="block mb-6 p-1 text-slate-900" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="last_name">Your last name:</label>
          <input type="text" id="last_name" className="block mb-4 p-1 text-slate-900" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="submit" id="submitBtn" className="block bg-green-700 rounded-lg w-24 px-6 py-2">Submit</button>
      </form>     
    </main>
  );
}
