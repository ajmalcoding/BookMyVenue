import React from 'react';
import AuthImageBanner from '../components/AuthImageBanner';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md min-h-screen flex antialiased">
      <div className="flex w-full min-h-screen">
        <AuthImageBanner />
        <RegisterForm />
      </div>
    </div>
  );
}
