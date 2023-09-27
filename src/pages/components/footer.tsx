import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#3b89e7] via-[#3a8ae6] to-[#00cf99] px-[140px] pt-[200px]">
      <div className="absolute left-0 top-0 w-full rotate-180 overflow-hidden leading-[0px]">
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
      <div className="flex flex-row">
        <div className="flex max-w-sm flex-col gap-y-8 text-white">
          <img
            src="https://www.xendit.co/wp-content/uploads/2019/11/xendit-logo-white.svg"
            className="h-[47px] w-[165px]"
          />
          <div className="font-bold font-montserrat text-xl">
            Membuat pembayaran menjadi mudah
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="font-montserrat text-sm font-bold">
              Dapatkan informasi terbaru dan tips dari Xendit
            </div>
            <div className="flex flex-row items-center justify-start">
              <input
                type="email"
                className="rounded-l-lg p-4 w-56"
                placeholder="Alamat email"
              />
              <button className="rounded-r-lg bg-[#4373fc] p-[18px] font-roboto text-sm font-bold text-white shadow-2xl hover:scale-95 hover:shadow-xl hover:transition-all hover:duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-16 text-white">
          <div className="pb-4 font-montserrat text-lg font-bold">Produk</div>
          <div className="flex w-44 flex-col gap-y-2">
            <div className="font-montserrat text-sm font-normal">
              Pembayaran Online
            </div>
            <div className="font-montserrat text-sm font-normal">
              Checkout
            </div>
            <div className="font-montserrat text-sm font-normal">
              Express Checkout
            </div>
            <div className="font-montserrat text-sm font-normal">
              Integrasi
            </div>
            <div className="font-montserrat text-sm font-normal">
              Transfer uang otomatis
            </div>
            <div className="font-montserrat text-sm font-normal">
              Transfer uang sesuai permintaan
            </div>
            <div className="font-montserrat text-sm font-normal">
              Payload links
            </div>
            <div className="font-montserrat text-sm font-normal">
              Sistem Pembayaran untuk Platform
            </div>
            <div className="font-montserrat text-sm font-normal">
              Pendanaan
            </div>
            <div className="font-montserrat text-sm font-normal">
              Aplikasi Xendit Bisnis
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-2 text-white">
          <div className="pb-4 font-montserrat text-lg font-bold">Solusi</div>
          <div className="flex w-44 flex-col gap-y-2">
            <div className="font-montserrat text-sm font-normal">
              Asuransi
            </div>
            <div className="font-montserrat text-sm font-normal">
              Layanan Investasi
            </div>
            <div className="font-montserrat text-sm font-normal">
              Outsourcing
            </div>
            <div className="font-montserrat text-sm font-normal">
              Hospitality
            </div>
            <div className="font-montserrat text-sm font-normal">
              Marketplace
            </div>
          </div>
          <div className="pb-4 pt-8 font-montserrat text-lg font-bold">
            Mulai Sekarang
          </div>
          <div className="flex w-44 flex-col gap-y-2">
            <div className="font-montserrat text-sm font-normal">
              Kalkulator Harga
            </div>
            <div className="font-montserrat text-sm font-normal">Biaya</div>
          </div>
        </div>
        <div className="flex flex-col text-white w-40">
          <div className="pb-4 font-montserrat text-lg font-bold">
            Perusahaan
          </div>
          <div className="flex w-44 flex-col gap-y-2">
            <div className="font-montserrat text-sm font-normal">
              Tenatang Kami
            </div>
            <div className="font-montserrat text-sm font-normal">
              Pelanggan Kami
            </div>
            <div className="font-montserrat text-sm font-normal">
              Studi Kasus
            </div>
            <div className="font-montserrat text-sm font-normal">Karir</div>
            <div className="font-montserrat text-sm font-normal">Events</div>
            <div className="font-montserrat text-sm font-normal">
              Lisensi Kami
            </div>
            <div className="font-montserrat text-sm font-normal">
              Komunitas
            </div>
            <div className="font-montserrat text-sm font-normal">
              Newsroom
            </div>
            <div className="font-montserrat text-sm font-normal">Blog</div>
            <div className="font-montserrat text-sm font-normal">
              Lisensi Kami
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <div className="pb-4 font-montserrat text-lg font-bold">
            Pusat Bantuan
          </div>
          <div className="flex w-44 flex-col gap-y-2">
            <div className="font-montserrat text-sm font-normal">
              Pusat Bantuan
            </div>
            <div className="font-montserrat text-sm font-normal">
              Dokumentasi
            </div>
            <div className="font-montserrat text-sm font-normal">
              Referensi API
            </div>
            <div className="font-montserrat text-sm font-normal">
              Kontak Kami
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-12 mt-8 w-full" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="mt-4 flex flex-row gap-x-4">
            <img
              src="https://www.xendit.co/wp-content/uploads/2019/12/google-play-hires-min-2-300x89.webp"
              className="h-[54px] w-[182px]"
            />
            <img
              src="https://www.xendit.co/wp-content/uploads/2019/12/app-store-hires-min-2-300x101.webp"
              className="h-[54px] w-[161px]"
              alt=""
            />
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="rounded-full bg-white p-4">
              <Linkedin className="text-[#0077b7]" />
            </div>
            <div className="rounded-full bg-white p-4">
              <Twitter className="text-[#1da1f2]"/>
            </div>
            <div className="rounded-full bg-white p-4">
              <Facebook className="text-[#3b59a5]" />
            </div>
            <div className="rounded-full bg-white p-4">
              <Instagram className="text-[#e74262]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-row">
            <img src="https://www.xendit.co/wp-content/uploads/2019/12/ServiceProviderBadge-1-150x150-1.webp" className="w-[84px] h-[84px]" alt="" />
            <img src="https://www.xendit.co/wp-content/uploads/2019/12/TR-Testmark_0000065832_EN_CMYK_without-QR-Code_hi-res-01-1.webp" className="w-[165px] h-[83px]" alt="" />
            <img src="https://www.xendit.co/wp-content/uploads/2019/12/Xendit-Certificate-Bank-Indonesia-hires-min.webp" className="w-[219px] h-[84px] rounded-lg ml-2" alt="" />
          </div>
          <div className="text-right font-montserrat font-light text-sm text-white">© 2023 Xendit (PT Sinar Digital Terdepan). All rights reserved.<br /><a href="#">Kebijakan Privasi | Syarat & Ketentuan</a></div>
        </div>
      </div>
      <div className="py-12 flex flex-row gap-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 41 46" fill="none"><path d="M13.2218 4.57125C10.4836 5.32589 7.764 6.14646 5.06539 7.03225C4.81897 7.11207 4.59993 7.2595 4.4332 7.45773C4.26648 7.65597 4.15879 7.89705 4.12239 8.1535C2.52964 20.1049 6.20964 28.8248 10.5998 34.569C12.4585 37.0254 14.6748 39.1894 17.1749 40.9889C18.1696 41.6904 19.0494 42.1964 19.7423 42.5212C20.0873 42.6851 20.369 42.7944 20.5846 42.8605C20.6789 42.8936 20.7762 42.9176 20.875 42.9324C20.9727 42.9165 21.0689 42.8925 21.1625 42.8605C21.381 42.7944 21.6628 42.6851 22.0078 42.5212C22.6978 42.1964 23.5804 41.6875 24.5751 40.9889C27.0752 39.1893 29.2915 37.0253 31.1503 34.569C35.5404 28.8276 39.2204 20.1049 37.6276 8.1535C37.5916 7.89693 37.484 7.65569 37.3172 7.4574C37.1505 7.25911 36.9312 7.11177 36.6846 7.03225C34.813 6.41988 31.6534 5.42225 28.5283 4.57412C25.337 3.70875 22.4016 3.06763 20.875 3.06763C19.3513 3.06763 16.413 3.70875 13.2218 4.57412V4.57125ZM12.457 1.61C15.5764 0.761875 18.8913 0 20.875 0C22.8588 0 26.1736 0.761875 29.293 1.61C32.4843 2.4725 35.7014 3.49312 37.5931 4.11125C38.3841 4.37245 39.0853 4.85146 39.6162 5.49327C40.1472 6.13507 40.4863 6.91363 40.5946 7.7395C42.3081 20.6109 38.332 30.1501 33.5078 36.4608C31.462 39.1603 29.0227 41.5376 26.2714 43.5131C25.32 44.1967 24.312 44.7979 23.2584 45.31C22.4534 45.6895 21.588 46 20.875 46C20.162 46 19.2995 45.6895 18.4916 45.31C17.438 44.7979 16.43 44.1968 15.4786 43.5131C12.7273 41.5375 10.2881 39.1603 8.24226 36.4608C3.41801 30.1501 -0.558109 20.6109 1.15539 7.7395C1.26374 6.91363 1.60286 6.13507 2.1338 5.49327C2.66474 4.85146 3.36595 4.37245 4.15689 4.11125C6.90307 3.21083 9.67058 2.37683 12.457 1.61V1.61Z" fill="white"></path><path d="M25.1875 18.6874C25.188 19.5796 24.9117 20.45 24.3968 21.1786C23.8819 21.9072 23.1537 22.4582 22.3125 22.7556L23.4194 28.4768C23.4596 28.6849 23.4534 28.8993 23.4011 29.1047C23.3488 29.3101 23.2517 29.5014 23.1168 29.6649C22.9819 29.8284 22.8125 29.96 22.6208 30.0503C22.429 30.1407 22.2197 30.1875 22.0078 30.1874H19.7423C19.5305 30.1871 19.3215 30.1399 19.1302 30.0494C18.9388 29.9589 18.7698 29.8272 18.6352 29.6638C18.5006 29.5003 18.4038 29.3092 18.3516 29.104C18.2995 28.8988 18.2933 28.6847 18.3335 28.4768L19.4375 22.7556C18.6922 22.4921 18.0336 22.0288 17.5338 21.4163C17.034 20.8038 16.7122 20.0657 16.6035 19.2827C16.4948 18.4997 16.6034 17.7019 16.9174 16.9764C17.2315 16.251 17.7389 15.6258 18.3843 15.1692C19.0296 14.7126 19.788 14.4422 20.5766 14.3875C21.3653 14.3328 22.1538 14.496 22.856 14.8591C23.5581 15.2222 24.147 15.7714 24.5582 16.4465C24.9694 17.1217 25.1871 17.8969 25.1875 18.6874V18.6874Z" fill="white"></path></svg>
        <div className="font-montserrat text-sm font-light text-white"><strong className="font-bold">Waspadalah terhadap Upaya Penipuan</strong> Xendit bukan perusahaan peer to peer lending dan tidak memiliki produk pinjaman pribadi. Jika Anda menemukan usaha penipuan yang mengatasnamakan Xendit, informasikan segera ke help@xendit.co atau via live chat.</div>
      </div>
    </div>
  )
}

export default Footer