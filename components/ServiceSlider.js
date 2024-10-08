//swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//rquired modules$
import { FreeMode, Pagination } from "swiper";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Responsive Website Development",
    description:
      "Crafting visually appealing, responsive websites for seamless cross-device compatibility.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design Implementation",
    description:
      "Implementing user interface (UI) designs with a focus on creating intuitive and user-friendly experiences.",
  },
  {
    icon: <RxDesktop />,
    title: "Front-end Framework Expertise",
    description:
      "Using front-end frameworks such as React and Vue.js to create dynamic, interactive web applications",
  },
  {
    icon: <RxReader />,
    title: "Testing and Debugging",
    description:
      "Conducting thorough testing of front-end components and debugging to ensure a high-quality end product.",
  },
  {
    icon: <RxRocket />,
    title: "Version Control (Git)",
    description:
      "Employing version control systems like Git for efficient code management and collaboration.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="lg:h-[340px] sm-h-[240px] sm-h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
