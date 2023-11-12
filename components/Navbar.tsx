import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <main className="flex justify-between items-center mt-0 ml-0">
      <Image
        src={logo}
        alt="Description of the image"
        width={100}
        height={300}
      />
      <div className="flex space-x-10">
        <div className="flex justify-center space-x-10 my-4 mr-[-20px]">
          <h2 className="text-white">Website</h2>
          <h2 className="text-white">Barracks</h2>
          <h2 className="text-white">Expeditions</h2>
          <h2 className="text-white">Leaderboard</h2>
          <h2 className="text-white">Luxurion Loot Crate Royale</h2>
          <h2 className="text-white">Token swap</h2>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Connect Wallet
        </button>
      </div>
          
    </main>
  );
};

export default Navbar;
