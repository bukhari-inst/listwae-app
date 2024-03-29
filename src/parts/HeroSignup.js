import React from 'react';
import ImageHero from 'assets/images/hero-loginpage.svg';
import ImageArt from 'assets/images/art-loginpage.svg';
import ImageArt_ from 'assets/images/art2-loginpage.svg';

export default function HeroSignup() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-start my-3 mx-2">
          <img src={ImageArt} alt="ImageArt" style={{ height: 80 }} />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <img
              src={ImageHero}
              alt="ImageHero"
              style={{ width: 333, marginTop: 60 }}
            />
          </div>
          <div className="mt-5">
            <h1 className="text-center text-white font-weight-normal line-height-1">
              {' '}
              Buat List Kebutuhanmu <br /> Sekarang Juga
            </h1>
          </div>
          <div className="mt-3">
            <h5 className="text-center text-gray-300 font-weight-lighter line-height-1">
              Kamu Dapat Dengan Mudah Membuat List <br /> Kebutuhan Dengan
              Efektif Dan Efesien
            </h5>
          </div>
          <div className="d-flex justify-content-end my-4">
            <img
              src={ImageArt_}
              alt="ImageArt"
              style={{ marginTop: 132, height: 80 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
