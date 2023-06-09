import { Parallax } from "react-parallax";

import img2 from "../../../assets/sports/classImg/ci2.jpg";
import img3 from "../../../assets/sports/classImg/ci3.jpg";

import img5 from "../../../assets/sports/classImg/ci5.jpg";
import img6 from "../../../assets/sports/classImg/ci6.jpg";
import img8 from "../../../assets/sports/classImg/ci8.jpg";
import img10 from "../../../assets/sports/classImg/ci10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const SliderSection = () => {
  return (
    <section className=" mb-20">
      <Swiper
        className=""
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img2}
            bgImageAlt="the menu"
            strength={-200}
          >
            <div
              className="hero h-[400px] lg:h-[600px] "
              // style={{
              //   backgroundImage: `url("${img}")`,
              // }}
            >
              <div
                className="hero-overlay bg-opacity-60
              "
              ></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[300px] lg:max-w-xl">
                  <p className="lg:font-semibold text-sm lg:text-lg ">
                    At Sportopia, talent finds its home, as aspiring footballers
                    come together to hone their skills, fueled by dedication,
                    teamwork, and the pursuit of greatness
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img10}
            bgImageAlt="the menu"
            strength={-200}
          >
            <div
              className="hero h-[400px] lg:h-[600px] "
              // style={{
              //   backgroundImage: `url("${img}")`,
              // }}
            >
              <div
                className="hero-overlay bg-opacity-70
             "
              ></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[300px] lg:max-w-xl">
                  <p className="lg:font-semibold text-sm lg:text-lg ">
                    Step onto the court, spike your way to success, and embrace
                    the spirit of volleyball at Sportopia, where champions rise
                    and passion soars.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img5}
            bgImageAlt="the menu"
            strength={-200}
          >
            <div
              className="hero h-[400px] lg:h-[600px] "
              // style={{
              //   backgroundImage: `url("${img}")`,
              // }}
            >
              <div
                className="hero-overlay bg-opacity-60
              "
              ></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[300px] lg:max-w-xl">
                  <p className="lg:font-semibold text-sm lg:text-lg ">
                    Dive into the realm of aquatic excellence at Sportopia's
                    swimming academy, where strokes flow, records shatter, and
                    dreams glide towards the podium.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img3}
            bgImageAlt="the menu"
            strength={-200}
          >
            <div
              className="hero h-[400px] lg:h-[600px] "
              // style={{
              //   backgroundImage: `url("${img}")`,
              // }}
            >
              <div
                className="hero-overlay bg-opacity-60
              "
              ></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[300px] lg:max-w-xl">
                  <p className="lg:font-semibold text-sm lg:text-lg ">
                    At Sportopia, step onto the court, sharpen your skills, and
                    join a community of tennis enthusiasts dedicated to the
                    pursuit of excellence and the thrill of victory.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>

        <SwiperSlide>
          <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img6}
            bgImageAlt="the menu"
            strength={-200}
          >
            <div
              className="hero h-[400px] lg:h-[600px] "
              // style={{
              //   backgroundImage: `url("${img}")`,
              // }}
            >
              <div
                className="hero-overlay bg-opacity-60
              "
              ></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[300px] lg:max-w-xl">
                  <p className="lg:font-semibold text-sm lg:text-lg ">
                    Enter the realm of martial arts excellence at Sportopia,
                    where discipline meets passion, and warriors are sculpted
                    into champions.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
        <SwiperSlide>
          <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img8}
            bgImageAlt="the menu"
            strength={-200}
          >
            <div
              className="hero h-[400px] lg:h-[600px] "
              // style={{
              //   backgroundImage: `url("${img}")`,
              // }}
            >
              <div
                className="hero-overlay bg-opacity-60
              "
              ></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[300px] lg:max-w-lg">
                  <p className="lg:font-semibold text:sm lg:text-lg ">
                    Pedal your way to new heights of endurance and thrill at
                    Sportopia's cycling academy, where wheels spin, boundaries
                    fade, and champions emerge.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SliderSection;
