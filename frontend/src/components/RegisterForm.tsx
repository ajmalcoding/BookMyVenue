import React from 'react';

function SocialLoginButton({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-[16px] border border-outline-variant hover:bg-surface-container-low transition-colors duration-200">
      {icon}
      <span className="font-label-md text-label-md text-on-surface">{text}</span>
    </button>
  );
}

export default function RegisterForm() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-margin-desktop bg-surface-container-lowest">
      {/* Form Container */}
      <div className="w-full max-w-md">
        {/* Mobile Logo (Visible only on small screens) */}
        <div className="lg:hidden text-primary font-headline-md text-headline-md font-bold tracking-tight mb-8 text-center">
          BookMyVenue
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Create an account</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Start your journey with BookMyVenue today.</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4 mb-8">
          <SocialLoginButton 
            icon={<img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwrWSL1iY7WPsqKW9qp731UXfjsjg_w5EbH50-ogLQxSzwpPA9wX2MOkU2EOlxx-wtypKnYFINS1hFdPtagmCr_NYIST3NSIno-IYV4A1Sr1R0MZhwUl7o1fXBoNoF1O9xT3wK9XfOEolTJ7JWd56qU0C_Y106m95jRAlOxWI23FNVjgipbLW9dPNh6wIS09hE0Zghkvp6fCWyM8poeVdNhY7OTFtPnypq6rzlUYI1aFSXXto8ysGLATsmaXWS6EW_Ve7Yff_J6hVd" />}
            text="Continue with Google"
          />
          <SocialLoginButton 
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.34-.84 3.73-.78 1.44.06 2.53.64 3.25 1.55-2.8 1.76-2.3 5.56.59 6.8-.75 2.1-1.66 3.66-2.65 4.6zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
              </svg>
            }
            text="Continue with Apple"
          />
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-outline-variant"></div>
          <span className="flex-shrink-0 mx-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Or register with email</span>
          <div className="flex-grow border-t border-outline-variant"></div>
        </div>

        {/* Registration Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="fullName">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>
                person
              </span>
              <input className="w-full pl-10 pr-4 py-3 rounded-[12px] border border-outline-variant bg-surface-container-lowest text-on-surface placeholder-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors duration-200 font-body-md text-body-md outline-none" id="fullName" name="fullName" placeholder="Jane Doe" type="text" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>
                mail
              </span>
              <input className="w-full pl-10 pr-4 py-3 rounded-[12px] border border-outline-variant bg-surface-container-lowest text-on-surface placeholder-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors duration-200 font-body-md text-body-md outline-none" id="email" name="email" placeholder="jane@example.com" type="email" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>
                lock
              </span>
              <input className="w-full pl-10 pr-10 py-3 rounded-[12px] border border-outline-variant bg-surface-container-lowest text-on-surface placeholder-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors duration-200 font-body-md text-body-md outline-none" id="password" name="password" placeholder="••••••••" type="password" />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                visibility_off
              </button>
            </div>
            <p className="mt-2 font-label-sm text-label-sm text-on-surface-variant">Must be at least 8 characters long.</p>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <div className="flex items-center h-5">
              <input className="w-4 h-4 rounded border-outline-variant text-primary-container focus:ring-primary-container bg-surface-container-lowest" id="terms" type="checkbox" />
            </div>
            <label className="font-body-md text-body-md text-on-surface-variant" htmlFor="terms">
              I agree to the <a className="text-primary-container hover:underline" href="#">Terms of Service</a> and <a className="text-primary-container hover:underline" href="#">Privacy Policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 px-4 rounded-[12px] hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:-translate-y-0.5 transition-all duration-200 shadow-sm" type="submit">
            Create Account
          </button>
        </form>

        {/* Footer Log in link */}
        <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
          Already have an account? <a className="text-primary-container font-label-md text-label-md hover:underline" href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
}
