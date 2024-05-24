"use client";

import { useState } from 'react';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // create a sibmit handler for the form to be called when Submit button is hit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`First name: ${firstName}, Last name: ${lastName}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-stone-900">
      <form className="flex flex-col border-2 border-white p-12 items-center">
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
