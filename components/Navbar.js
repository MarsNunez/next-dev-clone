import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-sm bg-white">
      <div className="flex justify-between max-w-screen-xl mx-auto ">
        <div className="flex py-2 items-center px-4">
          <i className="fa-solid fa-bars text-2xl md:hidden mr-5 cursor-pointer"></i>
          <Link href="/">
            <img
              className="h-10 w-12 rounded-sm"
              src="../img/logo.png"
              alt="page logo"
            />
          </Link>
          <input
            type="text"
            className="hidden md:block border font-light text-gray-800 ml-5 rounded-md w-96 h-10 px-3 outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-2 pr-2">
          <button className="border h-10  border-indigo-700 rounded-md text-indigo-700 px-4 py-2 hover:bg-indigo-700 hover:text-white hover:underline hidden md:block">
            Create Post
          </button>
          <div className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-indigo-100 md:hidden group cursor-pointer">
            <i className="fa-solid fa-magnifying-glass text-2xl  text-gray-800 group-hover:text-indigo-700"></i>
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-indigo-100 group cursor-pointer">
            <i className="fa-regular fa-bell text-2xl text-gray-800 group-hover:text-indigo-700"></i>
          </div>
          <img
            src="../img/logo.png"
            alt="user image"
            className="h-10 rounded-full border-4 border-transparent hover:border-indigo-100 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
