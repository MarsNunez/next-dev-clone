const Card = () => {
  return (
    <div className="card md:max-w-2xl cursor-pointer borderw-full bg-white pb-4 md:pb-8 md:rounded-md overflow-hidden mb-2">
      <img
        src="../img/logo.png"
        className="post-image w-full object-cover"
        alt="post logo"
      />
      <div className="flex mt-4 md:mt-7 px-5 gap-2 mb-3">
        <img
          src="../img/logo.png"
          alt="img profile"
          className="h-9 rounded-full"
        />
        <div className="text-sm">
          <p>Tapajyoti Bose</p>
          <p className="font-light text-xs  text-gray-700">
            Oct 30 (1 day ago)
          </p>
        </div>
      </div>

      <div className="px-5 md:px-16">
        <h3 className="text-xl md:text-3xl font-semibold hover:text-indigo-800">
          7 Shorthand Optimization Tricks every JavaScript Developer Should Know
          😎
        </h3>
        <div className="text-sm font-light text-gray-800 flex flex-wrap mt-2 mb-4">
          <div className="w-fit cursor-pointer border border-transparent hover:border-gray-300  hover:bg-gray-100 px-2 py-1 rounded-md duration-100 ease-in-out">
            <span className="text-gray-500">#</span>javascript
          </div>
          <div className="w-fit cursor-pointer border border-transparent hover:border-gray-300  hover:bg-gray-100 px-2 py-1 rounded-md duration-100 ease-in-out">
            <span className="text-gray-500">#</span>webdev
          </div>
          <div className="w-fit cursor-pointer border border-transparent hover:border-gray-300  hover:bg-gray-100 px-2 py-1 rounded-md duration-100 ease-in-out">
            <span className="text-gray-500">#</span>programming
          </div>
          <div className="w-fit cursor-pointer border border-transparent hover:border-gray-300  hover:bg-gray-100 px-2 py-1 rounded-md duration-100 ease-in-out">
            <span className="text-gray-500">#</span>productivity
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-light text-gray-800 flex gap-1">
            <div className="cursor-pointer text-md flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded-md duration-200 ease-in-out">
              <i class="fa-regular fa-heart"></i>
              <p className="text-sm flex gap-1">
                69 <span className="hidden md:block">Reactions</span>
              </p>
            </div>
            <div className="cursor-pointer text-md flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded-md duration-200 ease-in-out">
              <i class="fa-regular fa-comment"></i>
              <p className="text-sm flex gap-1">
                10 <span className="hidden md:block">Comments</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-light">3 min read</p>
            <div className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-indigo-100 group cursor-pointer">
              <i className="fa-regular fa-bookmark text-md text-gray-800 group-hover:text-indigo-700"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
