import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
      <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
        
        <span className="ml-3 text-xl">Protect Children Now</span>

      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <a className="mr-5 hover:text-white">Awareness</a>
        <a className="mr-5 hover:text-white">Prevention</a>
        <a className="mr-5 hover:text-white">Support</a>
        <a className="mr-5 hover:text-white">Report</a>
        <a className="mr-5 hover:text-white">Get Involved</a>
      </nav>
      <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Header