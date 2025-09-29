import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-4xl font-light mb-6">Grounds2Dish</h3>
                <p className="text-lg text-base-content/80 leading-relaxed max-w-md">
                  Biến bã cà phê thành giá trị mới. Chúng tôi tạo ra những sản
                  phẩm bền vững, thân thiện với môi trường từ nguồn phụ phẩm
                  tự nhiên.
                </p>
              </div>
              <div className="flex space-x-6">
                {[
                  "M5 0 0 24",
                  "Twitter SVG",
                  "Facebook SVG",
                  "Instagram SVG",
                ].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-base-content/60 hover:text-base-content transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">Liên kết nhanh</h4>
              <ul className="space-y-4">
                {["Về chúng tôi", "Sản phẩm", "Tin tức", "Liên hệ", "Chính sách"].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-base-content/80 hover:text-base-content transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">Liên hệ</h4>
              <div className="space-y-4 text-base-content/80">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">
                    123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+84 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>hello@grounds2dish.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-base-content/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base-content/60 text-sm">
              © 2025 Grounds2Dish. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-8 text-sm">
              {["Chính sách bảo mật", "Điều khoản sử dụng", "Cookies"].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-base-content/60 hover:text-base-content transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
