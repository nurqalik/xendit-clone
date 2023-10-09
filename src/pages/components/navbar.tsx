import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-[100]">
      <div className="flex h-16 md:h-11 w-full items-center justify-center bg-gradient-to-r from-[#9937FD] to-[#ff9900] py-[20px]">
        <div className="font-montserrat text-sm md:text-base font-bold text-white text-center px-4 md:px-0">
          Buat akun dalam waktu 5 menit dan{" "}
          <span className="text-[#FFE18E]">segera terima pembayaran</span>.
        </div>
      </div>
      <nav className="h-[87px] w-full bg-[#4373FC]">
        <div className="flex h-full flex-row items-center px-4 md:px-0 justify-between md:justify-center gap-x-6">
          <img
            src={
              "https://www.xendit.co/wp-content/uploads/2020/11/xendit-logo-white.svg"
            }
            alt=""
            className="h-[39.875px] w-[138px]"
          />
          <div className="flex h-full flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center font-montserrat text-base text-white">
              <div className="hidden md:flex flex-row gap-x-8">
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
                  <button className="px-10 py-[8px] bg-[#4373FC] shadow-md hover:bg-[#3c91dd] rounded-lg text-lg hover:scale-95 hover:transition-all duration-300 ease-linear">Login</button>
                  <button className="px-10 py-[8px] text-[#4373FC] bg-white shadow-md rounded-lg text-lg hover:scale-95 hover:transition-all duration-300 ease-linear">Daftar</button>
                </div>
                </div>
                <div className="flex flex-row items-center justify-center md:pl-8 gap-x-2">
                  <div>ID</div>
                  <ChevronDown size={"16px"} strokeWidth={3} /> 
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
