import React from "react";
import { Link } from "react-router";
import useCartStore from "../store/useCartStore";

const HomePage = ({ productSeller = [] }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (product) => {
    addItem({
      id: product.ProductId,
      name: product.ProductName,
      price: product.Price,
      thumbnail: product.ProductImages?.length > 0 ? product.ProductImages[0].ImageUrl : "/placeholder.svg",
      description: "Sản phẩm bền vững từ bã cà phê"
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/header-background1.jpg"
          alt="Hero Banner"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-8 max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-2xl tracking-tight">
              Grounds2Dish
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl drop-shadow-lg font-light leading-relaxed">
            Biến bã cà phê thành giá trị mới!
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
          <img
            className="w-full h-full object-contain"
            src="/images/logo1.jpg"
            alt="Decorative"
          />
        </div>
      </section>
      <section className="px-8 py-16 bg-base-100">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <div className="text-2xl text-accent mb-2 animate-pulse">~~~</div>
          <div className="text-sm text-base-content uppercase tracking-[0.3em] mb-4 font-semibold">
            SUSTAINABLE COLLECTION
          </div>
          <h2 className="text-4xl font-extrabold text-base-content">
            DANH MỤC SẢN PHẨM
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card relative group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px] sm:col-span-1 sm:row-span-2 bg-base-100 border-2 border-base-200">
            <figure className="h-full w-full">
              <img
                src="/images/anh3.jpg"
                alt="Bộ bát đĩa xanh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-base-200/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-base-content translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-2 text-accent">BỘ BÁT ĐĨA</h3>
              <p className="text-sm opacity-90 text-base-content">
                Được làm từ bã cà phê & nhựa sinh học – an toàn, bền đẹp và thân
                thiện môi trường.
              </p>
            </div>
          </div>

          <div className="card relative group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px] bg-base-100">
            <figure className="h-full">
              <img
                src="/images/anh2.jpg"
                alt="Thìa xanh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-base-content translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2 text-accent">THÌA SINH HỌC</h3>
              <p className="text-sm opacity-90 text-base-content">
                Giải pháp thay thế nhựa dùng một lần – tiện lợi và bảo vệ hành
                tinh.
              </p>
            </div>
          </div>

          <div className="card relative group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px] bg-base-100">
            <figure className="h-full">
              <img
                src="/images/anh1.jpg"
                alt="Quà tặng xanh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-base-content translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2 text-accent">QUÀ TẶNG XANH</h3>
              <p className="text-sm opacity-90 text-base-content">
                Món quà ý nghĩa từ bã cà phê – lan tỏa lối sống bền vững đến mọi
                người.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="px-8 py-16 bg-base-100">
        <div className="text-center mb-12">
          <div className="text-2xl text-green-500 mb-2 animate-pulse">~~~</div>
          <div className="text-sm text-base-content uppercase tracking-[0.3em] mb-4">
            SUSTAINABLE COLLECTION
          </div>
          <h2 className="text-4xl font-extrabold text-base-content">
            Nguồn gốc của sản phẩm
          </h2>
        </div>

        <div className="flex justify-center">
          <video
            className="w-full max-w-3xl rounded-lg shadow-lg"
            controls
            autoPlay
            loop
            muted
            poster="/images/header-background1.jpg"
          >
            <source
              src="https://www.youtube.com/watch?v=EZc1TE0bml0"
              type="video/mp4"
            />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      </section>

      {/* SẢN PHẨM BÁN CHẠY */}
      <section className="px-8 py-12 bg-base-200">
        <div className="text-center mb-12">
          <div className="text-2xl  text-green-500 mb-2">~~~</div>
          <div className="text-sm text-base-content uppercase tracking-widest mb-4">
            SUSTAINABLE COLLECTION
          </div>
          <h2 className="text-4xl font-bold text-base-content">
            SẢN PHẨM BÁN CHẠY
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {productSeller.map((product) => (
            <div
              key={product.ProductId}
              className="group bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    product.ProductImages?.length > 0
                      ? product.ProductImages[0].ImageUrl
                      : "/img/placeholder.png"
                  }
                  alt={product.ProductName}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  HOT
                </div>
              </div>
              <div className="p-6">
                <Link
                  to={`/ProductDetail/Index/${product.ProductId}`}
                  className="block font-bold text-lg text-base-content hover:text-success transition-colors duration-300 mb-3 line-clamp-2"
                >
                  {product.ProductName}
                </Link>
                <div className="text-success font-bold text-xl">
                  {product.Price.toLocaleString()}₫
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-success w-full mt-4"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/header-background1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8 drop-shadow-2xl">
              Về Grounds2Dish
            </h1>

            <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full shadow-lg"></div>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-light">
                Với sứ mệnh lan tỏa giải pháp xanh trong tiêu dùng, AirX Coffee –
                Veritas Việt Nam đã thành công sản xuất ly tái chế từ bã cà phê,
                mang lại lựa chọn thay thế ly nhựa truyền thống.
              </p>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Sản phẩm được thiết kế không chỉ bền đẹp mà còn thân thiện môi trường,
                tận dụng tối đa nguồn phụ phẩm tự nhiên. Sau quá trình nghiên cứu dài hạn,
                AirX hiện diện tại hơn 50 quốc gia và tự hào đáp ứng đầy đủ các tiêu chuẩn
                chất lượng toàn cầu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 