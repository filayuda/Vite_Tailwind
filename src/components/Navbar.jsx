import React, { useEffect, useState } from 'react'
import SignIn from './SignIn'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    let menuActive = isOpen ? "left-0" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 0) {
                setScroll(true)
                setIsOpen(false)
            }else { 
                setScroll(false)
            }
        })
    }, [])

    let scrollActive = scroll ? "py-2 bg-white shadow" : "py-4"
    
  return (
    <>
      <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between navbar-box">
            <div className="logo">
              <h1 className="text-xl font-bold sm:text-2xl">Firman</h1>
            </div>
            <ul
              className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:p-0 md:m-0 md:transition-none md:text-black gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
            >
              <li className="flex items-center gap-3">
                <i className="block text-2xl ri-home-2-line md:hidden"></i>
                <a href="#home" className="font-medium opacity-75">
                  Beranda
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="block text-2xl ri-information-line md:hidden"></i>
                <a href="#about" className="font-medium opacity-75">
                  About Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="block text-2xl ri-settings-3-line md:hidden"></i>
                <a href="#services" className="font-medium opacity-75">
                  Service
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="block text-2xl ri-image-line md:hidden"></i>
                <a href="#proyek" className="font-medium opacity-75">
                  Project
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="block text-2xl ri-login-box-line md:hidden"></i>
                <a className="font-medium opacity-75" onClick={() => setOpenModal(true)}>
                  Login
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 social">
              <a
                href="#footer"
                className="hidden px-5 py-2 font-bold text-white transition-all rounded-full bg-sky-400 hover:bg-sky-700 md:block"
              >
                Social Media
              </a>
              <i
                className="block text-3xl cursor-pointer ri-menu-3-line md:hidden"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>

      <SignIn isOpen={openModal} close={() => setOpenModal(false)} />

    </>
  );
}

export default Navbar
