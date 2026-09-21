function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Civitas
            </h2>
            <p className="mt-4 max-w-sm text-xl leading-6 text-gray-400">
              A smart platform where citizens can report public issues,
              share suggestions, and help build a better society.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-gray-700 transition hover:border-white
                hover:bg-white hover:text-black"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-gray-700 transition hover:border-white
                hover:bg-white hover:text-black"
              >
                X
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-gray-700 transition hover:border-white
                hover:bg-white hover:text-black"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-gray-700 transition hover:border-white
                hover:bg-white hover:text-black"
              >
                ◎
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">
              Platform
            </h3>
            <ul className="mt-5 space-y-3 text-xl">
              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Report Issue
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Suggestions
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Public Issues
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-5 space-y-3 text-xl">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-xl text-gray-400">
              <p>
                <span className="font-medium text-gray-200">Email</span>
                <br />
                support@civitas.com
              </p>
              <p>
                <span className="font-medium text-gray-200">Phone</span>
                <br />
                +91 98765 43210
              </p>
              <p>
                <span className="font-medium text-gray-200">Location</span>
                <br />
                New Delhi, India
              </p>
            </div>
          </div>
        </div>
        <div className="my-10 h-px bg-gray-800"></div>
        <div className="flex flex-col gap-4 text-xl text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Civitas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;