"use client";
import React from "react";
import ReuseButton from "../ReuseComponent/ReuseButton";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Arrow from "../Allcomponents/Arrow";

const HeroSection = () => {
  const home1Slider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <Arrow
        extraClass={"prev"}
        icon={<FaArrowLeft className="w-[20px] h-[20px]" />}
      />
    ),
    nextArrow: (
      <Arrow
        extraClass={"next"}
        icon={<FaArrowRight className="w-[20px] h-[20px]" />}
      />
    ),
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" py-16 pt-24 bg-[#1D231F]">
      <div className=" max-w-8xl mx-auto">
        <Slider {...home1Slider}>
          {/* silderone */}
          <div>
            <div className="flex items-center">
              <div className="w-5/12 pl-5 ">
                <h1 className="text-[70px] font-bold text-gray-100 uppercase">
                  Travel &amp; Adventure Camping
                </h1>
                <div className="flex justify-between mt-8 items-center">
                  <div className="w-1/2">
                    <p className="text-gray-100">
                      {" "}
                      Nunc et dui nullam aliquam eget velit. Consectetur nulla
                      convallis viverra quisque eleifend
                    </p>
                  </div>
                  <div className=" ">
                    <ReuseButton name="Explore More" />
                  </div>
                </div>
              </div>
              <div className="w-7/12  flex justify-end pr-2 items-center">
                <div>
                  <Image
                    src="/assets/images/hero-one_img-1.jpg"
                    alt="Hero Image"
                    width={640}
                    height={650}
                    className="rounded-xl"
                    priority
                    style={{ width: '100%', height: 'auto' }} // Preserve aspect ratio
                  />
                </div>
              </div>
            </div>
          </div>
          {/* sidlerTwo */}
          <div>
            <div className=" xl:flex items-center">
              <div className="xl:w-5/12 xl:pl-5 sm:px-5 px-5">
                <div className="flex justify-center items-center xl:block ">
                  <h1 className="text-[45px] travelSmall  sm:text-[70px] font-bold text-gray-100 uppercase  sm:max-w-[80%] lg:w-full text-center xl:text-left">
                    Travel &amp; Adventure Tour
                  </h1>
                </div>
                <div className="flex justify-between mt-8 items-center border border-red-500 mb-6">
                  <div className="w-1/2">
                    <p className="text-gray-100">
                      {" "}
                      Nunc et dui nullam aliquam eget velit. Consectetur nulla
                      convallis viverra quisque eleifend
                    </p>
                  </div>
                  <div className=" ">
                    <ReuseButton name="Explore More" />
                  </div>
                </div>
              </div>

              <div className=" xl:w-7/12  flex justify-end pr-2 items-center">
                <div>
                  <Image
                    src="/assets/images/hero-one_img-2.jpg"
                    alt="Hero Image"
                    width={640}
                    height={650}
                    className="rounded-xl"
                    priority
                    style={{ width: '100%', height: 'auto' }} // Preserve aspect ratio
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
