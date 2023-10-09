import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-[100]">
      <div className="flex h-16 w-full items-center justify-center bg-gradient-to-r from-[#9937FD] to-[#ff9900] py-[20px] md:h-11">
        <div className="px-4 text-center font-montserrat text-sm font-bold text-white md:px-0 md:text-base">
          Buat akun dalam waktu 5 menit dan{" "}
          <span className="text-[#FFE18E]">segera terima pembayaran</span>.
        </div>
      </div>
      <nav className="h-[87px] w-full bg-[#4373FC]">
        <div className="flex h-full flex-row items-center justify-between gap-x-6 px-4 md:justify-center md:px-0">
          <img
            src={
              "https://www.xendit.co/wp-content/uploads/2020/11/xendit-logo-white.svg"
            }
            alt=""
            className="h-[39.875px] w-[138px]"
          />
          <div className="flex h-full flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center font-montserrat text-base text-white">
              <div className="hidden flex-row gap-x-8 md:flex">
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <div>Produk</div>
                  <ChevronDown size={"16px"} strokeWidth={3} />
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <div>Solusi</div>
                  <ChevronDown size={"16px"} strokeWidth={3} />
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <div>Biaya</div>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <div>Perusahaan</div>
                  <ChevronDown size={"16px"} strokeWidth={3} />
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <div>Bantuan</div>
                  <ChevronDown size={"16px"} strokeWidth={3} />
                </div>
                <div className="flex flex-row gap-x-1">
                  <button className="rounded-lg bg-[#4373FC] px-10 py-[8px] text-lg shadow-md duration-300 ease-linear hover:scale-95 hover:bg-[#3c91dd] hover:transition-all">
                    Login
                  </button>
                  <button className="rounded-lg bg-white px-10 py-[8px] text-lg text-[#4373FC] shadow-md duration-300 ease-linear hover:scale-95 hover:transition-all">
                    Daftar
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-2 md:pl-8">
                <div>ID</div>
                <ChevronDown size={"16px"} strokeWidth={3} />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                className="ml-6 flex md:hidden"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(3.55556,3.55556)">
                    <path d="M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
