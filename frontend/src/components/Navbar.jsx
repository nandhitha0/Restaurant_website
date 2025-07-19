import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-[2rem] bg-black text-white">
        <div>
          <h2 className="font-bold text-lg cursor-pointer bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl">THE CHILL GRILL</h2>
        </div>
        <div>
          <ul className="flex justify-between gap-8">
            <li className="font-bold text-lg cursor-pointer bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl">
              HOME
            </li>
            <li className="font-bold text-lg cursor-pointer bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl">
              RESERVATIONS
            </li>
            <li className="font-bold text-lg cursor-pointer bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl">
              MENU
            </li>
            <li className="font-bold text-lg cursor-pointer bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent  brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl">
              CONTACT--
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
