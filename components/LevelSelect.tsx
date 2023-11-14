import React from "react";
import Image from "next/image";
import scrollskel from "../public/assets/scrollskel.svg";
import scrollbut from "../public/assets/scrollbut.svg";
import pwr from "../public/assets/pwrupbut.svg";
import Marauder from "../public/assets/marauder.svg";
import angelic from "../public/assets/angelic.svg";
import fallen from "../public/assets/fallen.svg";
import mutant from "../public/assets/mutant.svg";

const LevelSelect = () => {
  return (
    <div className="ml-24 z-5 translate-y-120 z-50">
      <h1 className="ml-2 text-2xl font-tt translate-x-6">
        Expedition
        <br />
        level Select
      </h1>
      <br />
      <div className="flex space-x-14">
        <div className="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 w-48 -translate-y-7">
          <div className="flex justify-between">
            <div className="levels">
              <button
                type="button"
                className="text-gray-900 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-white  rounded-md text-lg px-7 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:border-white dark:focus:ring-gray-700"
              >
                Level 4
              </button>
              <br />
              <button
                type="button"
                className="text-gray-900 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-white  rounded-md text-lg px-7 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:border-white dark:focus:ring-gray-700"
              >
                Level 5
              </button>
              <br />
              <button
                type="button"
                className="text-gray-900 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-white  rounded-md text-lg px-7 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:border-white dark:focus:ring-gray-700"
              >
                Level 6
              </button>
              <br />
              <button
                type="button"
                className="text-gray-900 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-white  rounded-md text-lg px-7 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:border-white dark:focus:ring-gray-700"
              >
                Level 7
              </button>
              <br />
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-[#5CE3EB] rounded-lg group bg-gradient-to-br from-[#5CE3EB] to-blue-500 hover:bg-gray-100 hover:text-[#5CE3EB] dark:text-[#5CE3EB] focus:ring-4 focus:outline-none focus:ring-gray-700 dark:focus:ring-cyan-800">
                <span className="relative px-7 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Level 8
                </span>
              </button>
            </div>
            {/* <div>
              <div className="z-15">
                <Image
                  src={scrollskel}
                  alt="Description of the image"
                  width={30}
                  height={75}
                />
              </div>
              <div className="z-20">
                <Image
                  src={scrollbut}
                  alt="Description of the image"
                  width={28}
                  height={75}
                />
              </div>
            </div> */}
            <div className="relative z-15">
              <Image
                src={scrollskel}
                alt="Description of the image"
                width={30}
                height={75}
              />
              <div className="absolute top-10 z-20">
                <Image
                  src={scrollbut}
                  alt="Description of the image"
                  width={28}
                  height={75}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 -translate-y-10">
          {/* This is the same div as the big box and not the title of the box that's why it's not a separate component*/}
          <div>
            {/* This div is to group all the buttons together*/}
            <div>
              <button>
                <Image
                  src={pwr}
                  alt="Description of the image"
                  width={50}
                  height={300}
                />
              </button>
              <br />
              <br />
              <button>
                <Image
                  src={pwr}
                  alt="Description of the image"
                  width={50}
                  height={300}
                />
              </button>
              <br />
              <br />
              <button>
                <Image
                  src={pwr}
                  alt="Description of the image"
                  width={50}
                  height={300}
                />
              </button>
              <br />
              <br />
              <button>
                <Image
                  src={pwr}
                  alt="Description of the image"
                  width={50}
                  height={300}
                />
              </button>
              <br />
            </div>
          </div>
          <div>
            <div className="space-y-13 mt-3 font-tt text-xl">
              <h1> DED Turbo Boost</h1>

              <h1>Scouting Expedition</h1>

              <h1> = = = = = = = = = =</h1>

              <h1>= = = = = = = = = =</h1>
            </div>
          </div>
          <div className="translate-x-60 translate-y-5">
            <div className=" flex items-center space-x-2 mt-[-12px] ">
              <button>
                <Image
                  src={Marauder}
                  alt="Description of the image"
                  width={125}
                  height={125}
                />
              </button>
              <button>
                <Image
                  src={angelic}
                  alt="Description of the image"
                  width={125}
                  height={125}
                />
              </button>
              <button>
                <Image
                  src={mutant}
                  alt="Description of the image"
                  width={125}
                  height={125}
                />
              </button>
              <button>
                <Image
                  src={fallen}
                  alt="Description of the image"
                  width={125}
                  height={125}
                />
              </button>
            </div>

            {/* <div className="border-2 border-gray-500 rounded-lg px-2 py-2 m-4 relative hover:shadow-xl w-80">
              <h1 className="text-3xl">Decimus Dao Select</h1>
              <br />
              <div className="m-2">
                <h6 className="flex flex-wrap text-sm">
                  To attribute all of your wallet’s expeditions to your
                  preferred Dao, press the Dao button of your favorite Dao above
                  before sending your NFTs out on their next Expedition.
                </h6>
              </div>
            </div>
            <div className="flex border-2 border-gray-500 rounded-lg px-2 py-2 m-4 relative hover:shadow-xl w-80"></div> */}

            <div className="flex -translate-x-16">
              <div className=" rounded-lg px-2 py-2 m-4 relative w-80">
                <h1 className="text-3xl">Decimus Dao Select</h1>
                <br />
                <div className="m-2">
                  <h6 className="flex flex-wrap text-sm">
                    To attribute all of your wallet’s expeditions to your
                    preferred Dao, press the Dao button of your favorite Dao
                    above before sending your NFTs out on their next Expedition.
                  </h6>
                </div>
              </div>
              <div className="border-2 border-gray-500  px-2 py-2 m-4 relative hover:shadow-xl w-64">
                <h1 className="text-3xl">5000 $DEDs</h1>
                <br />
                <div className="m-2">
                  <h6 className="flex flex-wrap text-md">
                    Airdropped to Winning Dao Wallets In: <br />
                    <br />
                    20 Days 15 Hours 30 Mins
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;
