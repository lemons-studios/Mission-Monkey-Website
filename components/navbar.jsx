import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="w-full h-16"></div>
      <div className="w-full h-16 px-12 sm:px-24 fixed top-0 left-0 bg-[#eee1] border-b-[1px] border-[#222] backdrop-blur-md backdrop-brightness-50 z-50 flex justify-center items-center">
        <div className="w-full h-full max-w-5xl flex flex-row gap-4 items-center justify-between">
          <Link href={"/"} className="flex gap-4 items-center">
            <img src="/icon.png" width={48} />
            <p className="text-white font-normal text-2xl select-none hidden md:block">Mission: Monkey</p>
          </Link>

          <div className="flex flex-row gap-8">
            <Link href={"/downloads"}>
              <p className="hidden sm:block">Downloads</p>
              <i className="bi bi-download block sm:hidden text-lg"></i>
            </Link>
            <Link href={"/gallery"}>
              <p className="hidden sm:block">Gallery</p>
              <i className="bi bi-images block sm:hidden text-lg"></i>
            </Link>
            <Link href={"https://github.com/lemons-studios"} target="_blank">
              <p className="hidden sm:block">
                GitHub
                <i className="bi bi-box-arrow-up-right ml-2"></i>
              </p>
              <i className="bi bi-github block sm:hidden text-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
