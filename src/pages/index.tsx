import Navbar from "./components/navbar";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Footer from "./components/footer";

export default function Home() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="h-full w-full bg-gradient-to-r from-[#457EF3] to-[#32A9C4] px-[140px] pb-28 pt-[140px]">
        <div className="flex flex-row">
          <div className="w-1/2">
            <div className="flex max-w-lg flex-col gap-y-4 text-white">
              <div className="max-w-md font-montserrat text-5xl font-bold leading-tight">
                Payment gateway terbaik & terlengkap di Indonesia untuk bisnis
                Anda
              </div>
              <div className="font-roboto text-base font-medium">
                Dengan satu integrasi, bisnis Anda bisa menerima dan mengirim
                pembayaran dengan mudah di Indonesia. Terima pembayaran dari
                kartu kredit dan debit, e-wallet, transfer bank, dan banyak
                metode pembayaran lainnya.
              </div>
              <div className="my-8 flex flex-row gap-x-2">
                <button className="rounded-md bg-[#456EF3] px-6 py-[10px] text-lg shadow-md duration-300 ease-linear hover:scale-95 hover:bg-[#457EF3] hover:transition-all">
                  Daftar Sekarang
                </button>
                <button className="rounded-md bg-white px-6 py-[10px] text-lg text-[#456EF3] shadow-md duration-300 ease-linear hover:scale-95 hover:text-[#457EF3] hover:transition-all">
                  Hubungi Sales
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <motion.svg
              width="500"
              height="500"
              viewBox="0 0 600 600"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#B855B1"
                variants={draw}
                custom={1}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#FE9801"
                variants={draw}
                custom={2}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#FE9801"
                variants={draw}
                custom={2.5}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                stroke="#ffffff"
                variants={draw}
                custom={3}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.circle
                cx="100"
                cy="300"
                r="80"
                stroke="#ffffff"
                variants={draw}
                custom={2}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#B855B1"
                custom={3}
                variants={draw}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#B855B1"
                custom={3.5}
                variants={draw}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.rect
                width="140"
                height="140"
                x="410"
                y="230"
                rx="20"
                stroke="#FE9801"
                custom={4}
                variants={draw}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.circle
                cx="100"
                cy="500"
                r="80"
                stroke="#FE9801"
                variants={draw}
                custom={3}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.line
                x1="220"
                y1="430"
                x2="360"
                y2="570"
                stroke="#ffffff"
                variants={draw}
                custom={4}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.line
                x1="220"
                y1="570"
                x2="360"
                y2="430"
                stroke="#ffffff"
                variants={draw}
                custom={4.5}
                className="rounded fill-transparent stroke-[10px]"
              />
              <motion.rect
                width="140"
                height="140"
                x="410"
                y="430"
                rx="20"
                stroke="#B855B1"
                variants={draw}
                custom={5}
                className="rounded fill-transparent stroke-[10px]"
              />
            </motion.svg>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-[100%] overflow-hidden leading-[0px]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[75px] w-full"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="fill-[#FFFFFF]"
            ></path>
          </svg>
        </div>
      </div>
      <div className="h-full w-full bg-white px-[140px] pt-[280px]">
        <div className="grid grid-cols-5 grid-rows-3 items-center justify-center gap-x-12 gap-y-8">
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-allianz.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-bukalapak.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-ciputra.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-fore.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-GA.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-lazada.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-oyo.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-qoala.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-samsung.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-techinasia.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-tiket-dot-com.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/tokocrypto-logo-1.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-traveloka-1.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-unicef.webp"
            />
          </a>
          <a href="#">
            <img
              decoding="async"
              src="https://www.xendit.co/wp-content/uploads/2023/09/logo-wwf.webp"
            />
          </a>
        </div>
      </div>
      <div className="h-full w-full bg-white px-[140px] pt-[280px]">
        <div className="flex flex-col">
          <div className="mb-12 font-montserrat text-4xl font-bold text-[#233659]">
            Penghargaan
          </div>
          <div className="flex flex-row gap-x-8">
            <div className="flex h-[135px] w-[300px] items-center justify-center rounded-xl shadow-2xl">
              <img
                src="https://www.xendit.co/wp-content/uploads/2023/09/logo-seamless-awards-2017-300x135-1.webp"
                className="p-8"
              />
            </div>
            <div className="flex h-[135px] w-[300px] items-center justify-center rounded-xl shadow-2xl">
              <img
                src="https://www.xendit.co/wp-content/uploads/2023/09/logo-the-asian-banker-300x135-1.webp"
                className="p-8"
              />
            </div>
            <div className="flex h-[135px] w-[300px] items-center justify-center rounded-xl shadow-2xl">
              <img
                src="https://www.xendit.co/wp-content/uploads/2023/09/logo-forbers-30-under-30-300x135-1.webp"
                className="p-8"
              />
            </div>
            <div className="flex h-[135px] w-[300px] items-center justify-center rounded-xl shadow-2xl">
              <img
                src="https://www.xendit.co/wp-content/uploads/2023/09/logo-cnbc-upstart100-300x135-1.webp"
                className="p-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-white px-[140px] pt-[280px]">
        <div className="flex flex-col gap-y-8">
          <div className="max-w-5xl font-montserrat text-4xl font-extrabold leading-normal text-[#233659]">
            Payment Gateway yang dibangun khusus untuk Indonesia dan Asia
            Tenggara
          </div>
          <p className="font-roboto text-base font-light tracking-wide text-black">
            Xendit adalah payment gateway yang membantu bisnis untuk menerima
            pembayaran dengan sederhana, aman dan mudah bagi semua orang. Kami
            memproses jutaan transaksi setiap bulannya untuk membantu
            perkembangan bisnis dengan menyediakan API kelas dunia.
          </p>
          <div className="flex flex-row items-center justify-center gap-x-12">
            <div className="h-[580px] w-[347px] max-w-sm rounded-lg shadow-2xl">
              <div className="m-12 flex flex-col items-start justify-start gap-y-6">
                <img
                  decoding="async"
                  width="80px"
                  height="80px"
                  src="/integration.svg"
                  className="attachment-full size-full wp-image-8429"
                  alt=""
                />
                <div className="font-montserrat text-xl font-bold text-[#233659]">
                  Integrasi sederhana
                </div>
                <p className="font-roboto text-sm leading-normal">
                  Integrasi mudah antara bisnis anda dengan payment gateway
                  kami. Xendit menyediakan banyak pilihan integrasi: Payment
                  link, integrasi eCommerce atau integrasi API. Cukup dengan
                  login sederhana, Anda dapat mencoba layanan Xendit dengan
                  sandbox kami.
                </p>
              </div>
            </div>
            <div className="h-[580px] w-[347px] max-w-sm rounded-lg shadow-2xl">
              <div className="m-12 flex flex-col items-start justify-start gap-y-6">
                <img
                  decoding="async"
                  width="80px"
                  height="80px"
                  src="/speed.svg"
                  className="attachment-full size-full wp-image-8429"
                  alt=""
                />
                <div className="font-montserrat text-xl font-bold text-[#233659]">
                  Kecepatan
                </div>
                <p className="font-roboto text-sm leading-normal">
                  Anda dapat segera bertransaksi dengan Xendit melalui proses
                  integrasi yang cepat dan memerlukan waktu kurang dari satu
                  hari. Akses riwayat transaksi pada dashboard terpusat dengan
                  rekonsiliasi harian untuk visibilitas dan pelaporan yang
                  mudah. Yang lebih menarik lagi, Anda hanya perlu membayar
                  sesuai penggunaan, dengan harga yang kompetitif, tanpa biaya
                  lain yang tersembunyi.
                </p>
              </div>
            </div>
            <div className="h-[580px] w-[347px] max-w-sm rounded-lg shadow-2xl">
              <div className="m-12 flex flex-col items-start justify-start gap-y-6">
                <img
                  decoding="async"
                  width="80px"
                  height="80px"
                  src="/service.svg"
                  className="attachment-full size-full wp-image-8429"
                  alt=""
                />
                <div className="font-montserrat text-xl font-bold text-[#233659]">
                  Pelayanan
                </div>
                <p className="font-roboto text-sm leading-normal">
                  Kami memahami kebutuhan Anda untuk layanan yang responsif dan
                  tepat waktu terkait masalah pembayaran. Tim kami siap membantu
                  Anda melalui live chat & email, 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-white px-[140px] pt-[280px]">
        <div className="flex flex-col gap-y-8">
          <div className="font-montserrat text-4xl font-bold leading-normal text-[#233659]">
            Solusi Kami
          </div>
          <p className="font-roboto text-base font-light tracking-widest text-black">
            Kami siap membantu menyediakan layanan payment gateway dan solusi
            terlengkap untuk kebutuhan pembayaran online Anda, sehingga Anda
            dapat fokus pada pertumbuhan bisnis Anda.
          </p>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="flex max-w-xl flex-col rounded-xl shadow-2xl">
              <div className="h-full w-full rounded-t-xl bg-[#00cf99]">
                <div className="m-12 font-montserrat text-2xl font-bold text-white">
                  Terima Pembayaran
                </div>
              </div>
              <div className="flex flex-row bg-white p-12">
                <img
                  src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xenpayments-1.svg"
                  className="mr-6 h-[62.5px] w-[62.5px]"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="group flex flex-row items-center justify-start gap-x-4 text-[#00cf99]">
                    <div className="font-montserrat text-xl font-normal">
                      Pembayaran Online
                    </div>
                    <MoveRight
                      strokeWidth={1}
                      size={20}
                      className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                    />
                  </div>
                  <div className="max-w-[300px] font-roboto text-base font-light">
                    Terima ragam metode pembayaran, lokal dan internasional
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-row bg-white p-12">
                <img
                  src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xeninvoice-1.svg"
                  className="mr-6 h-[62.5px] w-[62.5px]"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="group flex flex-row items-center justify-start gap-x-4 text-[#00cf99]">
                    <div className="font-montserrat text-xl font-normal">
                      Checkout
                    </div>
                    <MoveRight
                      strokeWidth={1}
                      size={20}
                      className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                    />
                  </div>
                  <div className="max-w-[300px] font-roboto text-base font-light">
                  Terima pembayaran dengan membagikan link dan laman checkout
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-row rounded-b-xl bg-white p-12">
                <img
                  src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xenintegrations-1.svg"
                  className="mr-6 h-[62.5px] w-[62.5px]"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="group flex flex-row items-center justify-start gap-x-4 text-[#00adf2]">
                    <div className="font-montserrat text-xl font-normal">
                      Integrasi
                    </div>
                    <MoveRight
                      strokeWidth={1}
                      size={20}
                      className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                    />
                  </div>
                  <div className="max-w-[300px] font-roboto text-base font-light">
                    Terima pembayaran dengan integrasi toko eCommerce dan banyak
                    lagi
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-xl flex-col rounded-xl shadow-2xl">
              <div className="h-full w-full rounded-t-xl bg-[#d4525d]">
                <div className="m-12 font-montserrat text-2xl font-bold text-white">
                  Kirim Uang
                </div>
              </div>
              <div className="flex flex-row bg-white p-12">
                <img
                  src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xendisburse-1.svg"
                  className="mr-6 h-[62.5px] w-[62.5px]"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="group flex flex-row items-center justify-start gap-x-4 text-[#d4525d]">
                    <div className="font-montserrat text-xl font-normal">
                      Transfer Otomatis
                    </div>
                    <MoveRight
                      strokeWidth={1}
                      size={20}
                      className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                    />
                  </div>
                  <div className="max-w-[300px] font-roboto text-base font-light">
                    Kirim uang ke bank dan e-Wallet dengan integrasi API
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-row bg-white p-12">
                <img
                  src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xenbatch-2.svg"
                  className="mr-6 h-[62.5px] w-[62.5px]"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="group flex flex-row items-center justify-start gap-x-4 text-[#d4525d]">
                    <div className="font-montserrat text-xl font-normal">
                      Transfer Massal
                    </div>
                    <MoveRight
                      strokeWidth={1}
                      size={20}
                      className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                    />
                  </div>
                  <div className="max-w-[300px] font-roboto text-base font-light">
                    Kirim uang ke 10,000 tujuan dengan mengunggah file excel
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-row rounded-b-xl bg-white p-12">
                <img
                  src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xenpayout-1.svg"
                  className="mr-6 h-[62.5px] w-[62.5px]"
                />
                <div className="flex flex-col gap-y-4">
                  <div className="group flex flex-row items-center justify-start gap-x-4 text-[#d4525d]">
                    <div className="font-montserrat text-xl font-normal">
                      Kirim Refund
                    </div>
                    <MoveRight
                      strokeWidth={1}
                      size={20}
                      className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                    />
                  </div>
                  <div className="max-w-[300px] font-roboto text-base font-light">
                    Sederhanakan pengiriman refund tanpa perlu mencatat rekening
                    tujuan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row rounded-xl bg-white p-12 shadow-2xl">
            <img
              src="https://www.xendit.co/wp-content/uploads/2019/11/icon-xenplatform-1.svg"
              className="mr-6 h-[62.5px] w-[62.5px]"
            />
            <div className="flex flex-col gap-y-4">
              <div className="group flex flex-row items-center justify-start gap-x-4 text-[#ff8978]">
                <div className="font-montserrat text-xl font-normal">
                  Pembayaran Platform
                </div>
                <MoveRight
                  strokeWidth={1}
                  size={20}
                  className="transition delay-150 ease-in-out group-hover:translate-x-2 group-hover:duration-300"
                />
              </div>
              <div className="w-full font-roboto text-base font-light">
                Daftarkan mitra, terima dan bagikan pembayaran, kirim dana
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-white px-[140px] py-[200px] pt-[280px]">
        <div className="flex flex-col gap-y-8">
          <div className="font-montserrat text-4xl font-bold leading-normal text-[#233659]">
            Diliput oleh
          </div>
          <div className="m-4 grid grid-cols-5">
            <a href="#" className="h-[93.7px] w-[189.5px]">
              <img src="https://www.xendit.co/wp-content/uploads/2023/09/E27-1.webp" />
            </a>
            <a href="#" className="h-[93.7px] w-[189.5px]">
              <img src="https://www.xendit.co/wp-content/uploads/2023/09/Forbes-Indonesia-1.webp" />
            </a>
            <a href="#" className="h-[93.7px] w-[189.5px]">
              <img src="https://www.xendit.co/wp-content/uploads/2023/09/Kompas-logo-Xendit.webp" />
            </a>
            <a href="#" className="h-[93.7px] w-[189.5px]">
              <img src="https://www.xendit.co/wp-content/uploads/2023/09/Media-Indonesia-1.webp" />
            </a>
            <a href="#" className="h-[93.7px] w-[189.5px]">
              <img src="https://www.xendit.co/wp-content/uploads/2023/09/Tribunnews-com-1.webp" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <div className="sticky bottom-4 z-[100] mr-4 flex items-center justify-end">
        <button
          type="button"
          className="absolute bottom-0 h-[45px] w-[100px] rounded-full bg-white shadow-lg"
        >
          <div className="flex flex-row items-center justify-center gap-x-2 px-4">
            <svg
              viewBox="10 6 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="DialogueNew" fill="currentColor">
                <path d="M29.9996 39.3369H29.9996C28.9494 39.3228 27.9027 39.2117 26.873 39.0048C26.3867 38.9217 25.8882 39.0509 25.5034 39.3597C23.5353 40.8057 21.2244 41.714 18.7985 41.9951C18.3992 42.037 18.0415 41.7472 17.9997 41.3478C17.9817 41.1769 18.0249 41.0053 18.1214 40.8632H18.1214C19.059 39.6954 19.7322 38.3381 20.0947 36.885C20.1678 36.4882 20.0128 36.0839 19.6931 35.8378C16.1547 33.2089 14.0485 29.0767 14 24.6684C14 16.5773 21.1633 10 29.9996 10C38.8359 10 45.9992 16.5773 45.9992 24.6684C45.9992 32.7596 38.8361 39.3369 29.9996 39.3369H29.9996Z"></path>
              </g>
            </svg>
            <span className="font-montserrat text-base font-bold">Chat</span>
          </div>
        </button>
      </div>
    </div>
  );
}
