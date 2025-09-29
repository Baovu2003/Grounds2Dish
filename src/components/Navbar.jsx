import { Link } from "react-router";
import {
  BellIcon,
  LogOutIcon,
  ShipWheelIcon,
  ShoppingCart,
  User,
} from "lucide-react";

import ThemeSelector from "./ThemeSelector";
import useCartStore from "../store/useCartStore";

const Navbar = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full justify-between px-5">
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="h-15 w-12 rounded-lg shadow-md object-cover"
              />
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-900 tracking-wider">
                Grounds2Dish
              </span>
            </Link>
          </div>
          {/* NAV */}
          <nav>
            <ul className="flex gap-6 items-center">
              <li>
                <Link
                  to="/"
                  className="font-bold uppercase tracking-wide transition-colors duration-300 hover:text-green-500"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="font-bold uppercase tracking-wide transition-colors duration-300 hover:text-green-500"
                >
                  SHOP ONLINE
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="font-bold uppercase tracking-wide transition-colors duration-300 hover:text-green-500"
                >
                  Blog
                </Link>
              </li>

              {/* <li className="relative group">
                <button className="flex items-center gap-1 font-bold uppercase tracking-wide transition-colors duration-300 hover:text-green-500">
                  <User className="w-5 h-5" /> Tài khoản
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 p-2">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-3 py-2 transition-colors duration-300 hover:bg-green-100 hover:text-green-600 rounded"
                    >
                      Thông tin cá nhân
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/changepassword"
                      className="block px-3 py-2 transition-colors duration-300 hover:bg-green-100 hover:text-green-600 rounded"
                    >
                      Thay đổi mật khẩu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orderhistory"
                      className="block px-3 py-2 transition-colors duration-300 hover:bg-green-100 hover:text-green-600 rounded"
                    >
                      Lịch sử đơn hàng
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li>
                <Link
                  to="/about"
                  className="font-bold uppercase tracking-wide transition-colors duration-300 hover:text-green-500"
                >
                  ABOUT US
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>

            <ThemeSelector />

            <Link to="/cart" className="relative btn btn-ghost btn-circle">
              <ShoppingCart className="w-6 h-6 text-base-content opacity-70" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
