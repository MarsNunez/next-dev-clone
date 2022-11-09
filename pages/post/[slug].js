import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Post = () => {
  return (
    <Layout>
      <div className="flex gap-4 w-fit mx-auto sm:px-5">
        <div className="left-box mt-16 hidden sm:flex flex-col gap-4 w-12 text-gray-800">
          <div className="flex flex-col items-center justify-center cursor-pointer group">
            <div className="text-2xl border-transparent h-10 w-10 flex items-center justify-center rounded-full group-hover:bg-red-100 group-hover:text-red-600">
              <i className="fa-regular fa-heart"></i>
            </div>
            <p className="font-light text-sm text-gray-600">4</p>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer group">
            <div className="text-2xl border-transparent h-10 w-10 flex items-center justify-center rounded-full group-hover:bg-orange-100 group-hover:text-orange-600">
              <i className="fa-regular fa-comment"></i>
            </div>
            <p className="font-light text-sm text-gray-600">7</p>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer group">
            <div className="text-2xl border-transparent h-10 w-10 flex items-center justify-center rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-600">
              <i className="fa-regular fa-bookmark"></i>
            </div>
            <p className="font-light text-sm text-gray-600">2</p>
          </div>
          <div className="mx-auto text-gray-600 text-2xl border-transparent h-10 w-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200 hover:text-gray-900 duration-100 ease-in-out">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        <div className="middle-box mt-4">
          <div className="card md:max-w-3xl borderw-full bg-white pb-4 md:pb-8 sm:rounded-md overflow-hidden mb-2">
            <img
              src="../img/logo.png"
              className="w-full h-full max-h-80 object-cover mb-8"
              alt="post logo"
            />
            <div className="flex md:mt-7 px-5 md:px-16 gap-2 mb-7">
              <img
                src="../img/logo.png"
                alt="img profile"
                className="h-10 rounded-full"
              />
              <div className="text-sm flex flex-col justify-center">
                <p className="text-md font-semibold text-gray-800">
                  Tapajyoti Bose
                </p>
                <p className="font-light text-xs  text-gray-700">Oct 30</p>
              </div>
            </div>

            <div className="px-5 md:px-16">
              <h3 className="text-xl md:text-5xl font-bold">
                7 Shorthand Optimization Tricks every JavaScript Developer
                Should Know 😎
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
              <div className="mt-7 leading-5">
                <p className="text-xl paragraph leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  in porta est, in gravida metus. In sollicitudin diam sit amet
                  dictum imperdiet. Donec nec ante eu purus malesuada congue at
                  vitae dui. Etiam iaculis orci sed ligula vehicula, at
                  hendrerit enim ullamcorper. Nam ac purus in diam tristique
                  tincidunt ut eget felis. Mauris ut ante eros. Aenean id justo
                  ultricies, condimentum dui ut, fringilla erat. Integer
                  vulputate, leo a vestibulum maximus, quam neque consectetur
                  metus, non interdum lectus erat vel tellus. Quisque imperdiet
                  mauris congue dui molestie viverra ut quis urna. Maecenas
                  consectetur tortor ut vehicula pulvinar. Aliquam a lacinia
                  eros. Etiam ac eros quis dui pretium pulvinar. Sed a erat
                  elit. Sed vel viverra sem, at pellentesque massa. Morbi eget
                  arcu porta, commodo lacus faucibus, porta tortor. Vestibulum
                  felis elit, scelerisque non aliquam at, rutrum sagittis justo.
                  Morbi vitae tempor ipsum. Mauris gravida, eros non blandit
                  dictum, est sem tincidunt ipsum, vel porta nunc sem ut ante.
                  Morbi felis nisi, fringilla eget nisi aliquet, fermentum
                  sodales nisi. Donec tincidunt eros vel lectus dapibus, eu
                  aliquet enim viverra. Sed feugiat gravida dolor sed vehicula.
                  Fusce orci leo, vestibulum quis porttitor eget, dapibus non
                  risus. Phasellus dictum nec nunc vitae pretium. Aliquam erat
                  volutpat. Ut ac arcu finibus, dignissim ante et, vulputate
                  risus. Nam lobortis accumsan ipsum, consequat feugiat lacus
                  malesuada eget. Vestibulum vitae pharetra ipsum. Etiam vitae
                  fringilla sapien. Aliquam condimentum dolor dolor, sit amet
                  laoreet justo pulvinar sit amet. Cras nec lorem mauris. Nunc
                  nec enim vel elit auctor sollicitudin sed eget ante. Mauris
                  sagittis, justo a scelerisque blandit, mauris erat semper
                  ante, sed sagittis ex velit in magna. Sed egestas nulla eu
                  ligula porta finibus. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Duis
                  aliquam pellentesque auctor. Cras ex ipsum, sagittis ut
                  pharetra et, hendrerit ac urna. Nunc vitae justo neque.
                  Vestibulum eros nunc, pulvinar a malesuada eu, egestas vitae
                  quam. Quisque tempus pretium augue in pharetra. Etiam nec
                  imperdiet nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="md:max-w-3xl borderw-full bg-white pb-4 md:pb-8 md:rounded-md overflow-hidden mb-2">
            <div className="px-16 pt-9">
              <h3 className="font-semibold text-2xl mb-7">Read next</h3>

              <div className="flex items-center gap-4 mb-6 group cursor-pointer">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--xp-9h59P--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/879086/c23e7353-0873-45cc-a4fb-9bce7de113d5.jpg"
                  alt="profile-image"
                  className="rounded-full h-16 border border-black"
                />
                <div className="">
                  <h4 className="font-semibold text-xl text-gray-800 group-hover:text-indigo-700">
                    🕵️‍♂️ Learn git alias and boost your productivity
                  </h4>
                  <p className="font-light text-gray-600 group-hover:text-indigo-700">
                    Leonardo Montini - Oct 22
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 mb-6 cursor-pointer">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--Q53ekfZf--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/175135/86cc2372-6503-414f-bf27-e1dbeb143e99.png"
                  alt="profile-image"
                  className="rounded-full h-16 border border-gray-400"
                />
                <div className="">
                  <h4 className="font-semibold text-xl text-gray-800 group-hover:text-indigo-700">
                    Don't fear the grepper! (4)
                  </h4>
                  <p className="font-light text-gray-600 group-hover:text-indigo-700">
                    Elizabeth Mattijsen - Oct 27
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 mb-6 cursor-pointer">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--5kWkErFS--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/366059/d2322733-1ef8-4f2b-b8e4-facef5397761.jpg"
                  alt="profile-image"
                  className="rounded-full h-16 border border-gray-400"
                />
                <div className="">
                  <h4 className="font-semibold text-xl text-gray-800 group-hover:text-indigo-700">
                    Code Smell 173 - Broken Windows
                  </h4>
                  <p className="font-light text-gray-600 group-hover:text-indigo-700">
                    Maxi Contieri - Oct 27
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 cursor-pointer">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--HDfL_zP5--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/933338/bf98d753-03bc-42bd-92c0-6035f55e2a76.jpeg"
                  alt="profile-image"
                  className="rounded-full h-16 border border-gray-400"
                />
                <div className="">
                  <h4 className="font-semibold text-xl text-gray-800 group-hover:text-indigo-700">
                    Set up TypeScript project From Scratch
                  </h4>
                  <p className="font-light text-gray-600 group-hover:text-indigo-700">
                    Serhii Zadorozhnyi - Oct 16
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-box mt-4 hidden lg:block">
          <div className="rounded-md border overflow-hidden listings pb-4 mb-4">
            <div className="h-8 w-80 bg-indigo-900 px-44"></div>
            <div className="flex abolute px-4 h-10 group cursor-pointer ">
              <img
                src="../img/logo.png"
                alt="logo"
                className="h-12 rounded-full relative -top-5"
              />
              <p className="mt-1 ml-2 text-gray-700 group-hover:text-indigo-700 cursor-pointer font-semibold text-xl">
                Tapajyoti Bose
              </p>
            </div>
            <div className="px-4 mt-2">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 duration-100 ease-in-out">
                Follow
              </button>
            </div>
            <div className="px-4">
              <p className="text-gray-700 font-light text-md mt-5">
                <span className="block uppercase font-semibold text-xs text-gray-800">
                  Location
                </span>{" "}
                Brazil
              </p>
              <p className="text-gray-700 font-light text-md mt-3">
                <span className="block uppercase font-semibold text-xs text-gray-800">
                  Joined
                </span>{" "}
                Mar 18, 2021
              </p>
            </div>
          </div>
          <div className="rounded-md border listings overflow-hidden">
            <h4 className="font-semibold text-xl py-3 px-4">
              More from{" "}
              <span className="cursor-pointer text-indigo-600">
                Tapajyoti Bose
              </span>
            </h4>
            <div className="px-4 font-light hover:bg-white group py-4 border-t cursor-pointer">
              <p className="group-hover:text-indigo-800">
                Best sites to learn programming
              </p>
              <div className="text-sm text-gray-600 flex gap-2 flex-wrap mt-1">
                <p>#javascript</p>
                <p>#webdev</p>
                <p>#programming</p>
              </div>
            </div>
            <div className="px-4 font-light hover:bg-white group py-4 border-t cursor-pointer">
              <p className="group-hover:text-indigo-800">
                Best sites to learn programming
              </p>
              <div className="text-sm text-gray-600 flex gap-2 flex-wrap mt-1">
                <p>#javascript</p>
                <p>#webdev</p>
                <p>#programming</p>
              </div>
            </div>
            <div className="px-4 font-light hover:bg-white group py-4 border-t cursor-pointer">
              <p className="group-hover:text-indigo-800">
                Best sites to learn programming
              </p>
              <div className="text-sm text-gray-600 flex gap-2 flex-wrap mt-1">
                <p>#javascript</p>
                <p>#webdev</p>
                <p>#programming</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-200 text-sm text-gray-700 text-center font-light py-14 sm:mt-2 px-5">
        <p className="mb-2">
          <span className="text-indigo-600 font-medium hover:text-indigo-700 pointer hover:underline cursor-pointer">
            DEV Community 👩‍💻👨‍💻
          </span>{" "}
          — A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <p>
          Built on{" "}
          <span className="text-indigo-600 hover:text-indigo-700 pointer hover:underline cursor-pointer">
            Forem
          </span>{" "}
          — the{" "}
          <span className="text-indigo-600 hover:text-indigo-700 pointer hover:underline cursor-pointer">
            open source
          </span>{" "}
          software that powers{" "}
          <span className="text-indigo-600 hover:text-indigo-700 pointer hover:underline cursor-pointer">
            DEV
          </span>{" "}
          and other inclusive communities.
        </p>
        <p>
          Made with love and{" "}
          <span className="text-indigo-600 hover:text-indigo-700 pointer hover:underline cursor-pointer">
            Ruby on Rails
          </span>
          . DEV Community 👩‍💻👨‍💻 © 2016 - 2022.
        </p>
        <div className="mt-2 h-10 w-10 flex items-center justify-center mx-auto rounded-md hover:bg-indigo-200 group cursor-pointer">
          <i className="fa-solid fa-seedling text-green-600 text-2xl"></i>
        </div>
      </footer>
    </Layout>
  );
};

export default Post;
