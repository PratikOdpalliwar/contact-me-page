import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className="px-10 py-1 h-12 w-full flex flex-row justify-between items-center border-b-2 border-black font-mono shadow-2xl">

    <li className="list-none px-10 font-bold">
        <ul>LOGO</ul>
    </li>

    <li className="list-none px-10 font-bold flex flex-row">
        <ul className="px-5 text-lg cursor-pointer hover:text-sm transition-all duration-200 ease-in-out flex justify-center items-center">HOME</ul>
        <ul className="px-5 text-lg cursor-pointer hover:text-sm transition-all duration-200 ease-in-out flex justify-center items-center">ABOUT</ul>
        <ul className="px-5 text-lg cursor-pointer hover:text-sm transition-all duration-200 ease-in-out flex justify-center items-center">CONTACT</ul>
    </li>

   </nav>
   </>
  )
}

export default Navbar


