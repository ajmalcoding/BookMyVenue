import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      alert("Login successful!");

      navigate("/");
    } catch (error: any) {
      console.log(error.response?.data);
      alert("Invalid email or password");
    }
  };

  return (
    <section className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-surface overflow-y-auto px-6 py-12">
      <div className="w-full max-w-[440px]">
        {/* Mobile Branding (Hidden on Desktop) */}
        <div className="flex lg:hidden items-center gap-2 mb-12 justify-center">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>meeting_room</span>
          <span className="text-primary font-headline-md text-headline-md font-extrabold tracking-tight">BookMyVenue</span>
        </div>
        
        {/* Form Header */}
        <div className="text-center mb-10">
          <h2 className="text-text-main font-headline-lg text-headline-lg lg:text-headline-lg mb-2">Sign in to your account</h2>
          <p className="text-text-muted font-body-md text-body-md">Welcome back to BookMyVenue.</p>
        </div>
        
        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center gap-3 px-4 py-3 border border-outline-variant rounded-xl font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-all active:scale-95">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.14-4.53z" fill="#EA4335"></path>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-3 px-4 py-3 border border-outline-variant rounded-xl font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-all active:scale-95">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.88-3.12 1.87-2.39 5.92.74 7.21-.6 1.52-1.38 3.01-2.79 3.92zm-3.17-13.41c-.02-2.12 1.74-3.95 3.75-4.04.14 2.37-2.3 4.31-3.75 4.04z"></path>
            </svg>
            Apple
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-outline-variant"></div>
          <span className="flex-shrink mx-4 font-label-sm text-label-sm text-text-muted tracking-widest">OR SIGN IN WITH EMAIL</span>
          <div className="flex-grow border-t border-outline-variant"></div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Address */}
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-text-main" htmlFor="email">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
              </div>
              <input className="block w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-xl font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all outline-none" id="email" name="email" placeholder="name@company.com" type="email" value={formData.email} onChange={handleChange}/>
            </div>
          </div>
          
          {/* Password */}
          <div className="space-y-2">
            <label className="block font-label-md text-label-md text-text-main" htmlFor="password">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-lg">lock</span>
              </div>
              <input className="block w-full pl-11 pr-12 py-3 bg-surface border border-outline-variant rounded-xl font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all outline-none" id="password" name="password" placeholder="••••••••" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange}/>
              <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-main transition-colors" onClick={() => setShowPassword(!showPassword)} type="button">
                <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors hover:underline" href="#">Forgot Password?</a>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary transition-all active:scale-[0.98] mt-4" type="submit">
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-10 text-center">
          <p className="font-body-md text-body-md text-text-muted">
            Don't have an account? 
            <Link className="font-label-md text-label-md text-primary-container hover:text-primary font-semibold transition-colors hover:underline ml-1" to="/register">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Small Footer Info */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 text-text-muted font-label-sm text-label-sm opacity-60">
          <a className="hover:text-text-main transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-text-main transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-text-main transition-colors" href="#">Support</a>
        </div>
      </div>
    </section>
  );
}
