// import React from 'react'
import HeroImage from '../assets/images/hero.svg'
import AboutImage from '../assets/images/about.svg'
import image1 from "../assets/images/proyek-1.webp";
import image2 from "../assets/images/proyek-2.webp";
import image3 from "../assets/images/proyek-3.webp";
import image4 from "../assets/images/proyek-4.webp";
import image5 from "../assets/images/proyek-5.webp";


const HomePage = () => {
  const layanan = [
    {
      id: 1,
      title: "Layanan 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
    },
    {
      id: 2,
      title: "Layanan 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
    },
    {
      id: 3,
      title: "Layanan 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
    },
  ];

  const proyek = [ 
    {
      id: 1,
      title: "Proyek 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
      img: image1,
    },
    {
      id: 2,
      title: "Proyek 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
      img: image2,
    },
    {
      id: 3,
      title: "Proyek 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
      img: image3,
    },
    {
      id: 4,
      title: "Proyek 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
      img: image4,
    },
    {
      id: 5,
      title: "Proyek 5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae.",
      img: image5,
    },
  ]

  return (
    <div className="pb-10 homepage ">
      <div className="container px-4 mx-auto">
        {/* Hero */}
        <div className="grid items-center grid-cols-1 gap-20 pt-32 hero md:grid-cols-2" id="hero">
          <div className="box">
            <h1 className="text-3xl font-medium lg:text-5xl/tight mb-7">
              Belajar membuat website dengan{" "}
              <span className="font-bold underline text-sky-400">
                Tailwind CSS
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a
              href="#"
              className="px-4 py-2 text-white transition-all rounded-full shadow bg-sky-400 hover:bg-sky-600"
            >
              Tetang kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="hero image"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
        </div>

        {/* About */}
        <div className="grid items-center grid-cols-1 gap-10 pt-20 md:gap-20 about md:grid-cols-2" id="about">
          <div className="box">
            <img
              src={AboutImage}
              alt="about image"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box">
            <h1 className="text-3xl font-medium lg:text-5xl/tight mb-7">
              Belajar membuat website dengan{" "}
              <span className="font-bold underline text-sky-400">
                Tailwind CSS
              </span>
            </h1>
            <p className="text-base/loose mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="pt-32 services" id="services">
          <h1 className="mb-4 text-3xl font-medium text-center lg:text-5xl/tight">
            Layanan
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="grid grid-cols-1 gap-6 pt-12 services-box md:grid-cols-3 sm:grid-cols-2">
            {layanan.map((item, index) => (
              <div
                className="p-4 rounded-lg shadow box bg-sky-400"
                key={item.id}
              >
                <i className={`text-3xl text-white ri-number-${item.id}`} />
                <h3 className="mt-6 mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white text-base/loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proyek */}
        <div className="pt-32 proyek" id="proyek">
          <h1 className="mb-4 text-3xl font-medium text-center lg:text-5xl/tight">
            Proyek
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="grid grid-cols-1 gap-6 pt-12 proyek-box md:grid-cols-3 sm:grid-cols-2">
            {proyek.map((item, index) => (
              <div
                className="p-2 bg-white rounded-lg shadow box"
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="proyek image"
                  className="w-full h-[200px] object-cover"
                />
                <h3 className="mt-6 mb-2 text-xl font-bold text-sky-800">
                  {item.title}
                </h3>
                <p className="text-sky-950 text-base/loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage
