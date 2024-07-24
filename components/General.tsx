import Image from 'next/image'
import React from 'react';

const General = () => {
  return (
    <section className="border-2 flex-col relative">
      <div className="relative w-full">
        <Image
          src="/bluebg.png"
          alt="bg"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute top-12 left-14">
          <Image src="/logo.png" alt="logo" width={300} height={300} />
          <div className="text-white mt-10 text-center">
            <h2 className="text-4xl font-bold">
              <span>Emtek</span>    
              <span className="font-normal"> Career & Education</span>
            </h2>
            <h2 className="text-4xl mt-4">Festival 2023</h2>
          </div>
        </div>
        <div className="absolute top-80 left-14 flex items-center space-x-4">
  
          <Image
            src="/calendar.png"
            alt="calendar"
            width={24} 
            height={24} 
            className="object-cover"
          />
          <p className="text-white ml-2">30 - 31 August 2023</p>
        </div>
        <div className="absolute top-80 left-80 transform -translate-x-1/8 flex items-center space-x-2">
          <Image
            src="/clock.png"
            alt="clock"
            width={24}
            height={24} 
            className="object-cover"
          />
          <p className="text-white ml-2">09:00 - 17:00 WIB</p>
        </div>
        <div className="absolute bottom-40 left-14 flex items-center space-x-4">
          <Image
            src="/loc.png"
            alt="location"
            width={24} 
            height={24} 
            className="object-cover"
          />
          <p className="text-white ml-2">Emtek City, Studio Indosiar, Jakarta Barat</p>
        </div>
        <div className="absolute bottom-20 left-14">
          <button className="bg-blue-500 text-white py-4 px-12 rounded-lg shadow-md">
            Login untuk Mendaftar
          </button>
        </div>
      </div>
    </section>
  );
};

export default General