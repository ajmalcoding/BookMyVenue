import React from 'react';
import LoginHero from '../components/LoginHero';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-hidden">
      <main className="flex h-screen w-full">
        <LoginHero />
        <LoginForm />
      </main>
    </div>
  );
}
