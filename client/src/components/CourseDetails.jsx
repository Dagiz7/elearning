import React from "react";
import Pricecard from "../components/Pricecard";

function CourseDetails() {
  const courses = [
    { title: "Ha Geez", image: require("../assets/Cardphoto.png") },
    { title: "Hu Cabe", image: require("../assets/Cardphoto2.png") },
    { title: "Hei Seles", image: require("../assets/Cardphoto3.png") },
    { title: "Ho Rabe", image: require("../assets/Cardphoto4.png") },
  ];
  return (
    <div className="">
      <div className="flex justify-between gap-8 mx-8 flex-wrap lg:flex-nowrap my-16">
        <div className="mx-8">
          <h3 className="font-extrabold text-4xl text-[#0A033C] mb-4">
            Course Details
          </h3>
          <p className="whitespace-normal md:whitespace-pre-line mb-4 max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>

          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
            Certification
          </h3>

          <p className="whitespace-normal md:whitespace-pre-line mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>

          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
            Who this course is for
          </h3>

          <p className="whitespace-normal md:whitespace-pre-line mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
            What you'll learn in this course:
          </h3>
          <ul className="list-none text-2x">
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
        </div>
        <div className=" w-full">
          <Pricecard />
        </div>
      </div>

      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">
        Similar Courses
      </h3>
      <div className="grid md:grid-cols-2 gap-4 mx-8 my-4 sm:grid-cols-1">
        {courses.slice(0, 4).map((item,index) => (
          <div key={index} className="bg-white my-2 rounded-xl shadow-md">
            <a
              href="/"
              className="border-2  border-gray-200 rounded-xl hover:bg-gray-50 block"
            >
              <div className="grid grid-cols-6 p-2 gap-y-2">
                <div className="col-span-1">
                  <img
                    src={item.image}
                    className="max-w-20 max-h-20 rounded-lg"
                    alt="Course"
                  />
                </div>
                <div className="col-span-5 md:col-span-4 ml-4">
                  <p className="text-gray-600 font-bold">{item.title}</p>
                  {/* ... other course details */}
                </div>
                <div className="col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                  <p className="rounded-lg text-red-500 font-bold bg-red-100 py-1 px-3 text-sm">
                    $40.00
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
