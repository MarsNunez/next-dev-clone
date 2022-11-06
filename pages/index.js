import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import {
  primaryLabels,
  labelIcons,
  otherLabels,
  otherIcons,
  socials,
  tagsLabels,
} from "../helpers/data";

export default function Home() {
  return (
    <Layout>
      <div className="pb-10">
        <div className="mx-auto md:py-2 flex gap-3 w-fit md:px-3">
          <div className="left-box hidden md:block mt-2">
            <div>
              {primaryLabels.map((label, index) => (
                <div className="cursor-pointer flex items-center px-3 py-2 rounded-md w-60 font-light text-md group text-gray-800 hover:text-indigo-700 hover:bg-indigo-100">
                  <span className="text-xl">{labelIcons[index]} </span>
                  <span className="ml-2 group-hover:underline">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h3 className="pl-3 font-semibold text-lg mb-2">Other</h3>
              {otherLabels.map((label, index) => (
                <div className="cursor-pointer flex items-center px-3 py-2 rounded-md w-60 font-light text-md group text-gray-800 hover:text-indigo-700 hover:bg-indigo-100">
                  <span className="text-xl">{otherIcons[index]} </span>
                  <span className="ml-2 group-hover:underline">{label}</span>
                </div>
              ))}
              <div className="w-60 flex gap-2 my-4 ml-1">
                {socials.map((social) => (
                  <div className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-indigo-100 group cursor-pointer">
                    <i
                      class={`${social} text-xl text-gray-800 group-hover:text-indigo-700`}
                    ></i>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between w-60 items-center mb-2">
                <h3 className="pl-3 font-semibold text-lg">My Tags</h3>
                <div className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-indigo-100 group cursor-pointer">
                  <i class="fa-solid fa-gear text-xl text-gray-800 group-hover:text-indigo-700"></i>
                </div>
              </div>
              <div className="w-fit max-h-80 overflow-scroll">
                {tagsLabels.map((label) => (
                  <div className="cursor-pointer px-3 py-2 rounded-md w-60 font-light text-md hover:underline text-gray-800 hover:text-indigo-700 hover:bg-indigo-100">
                    <span className="ml-2 group-">#{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="middle-box md:mt-2">
            <div className="text-xl text-gray-600 flex mt-2">
              <div className="font-semibold text-black px-3 py-2 rounded-md hover:bg-white hover:text-indigo-700 cursor-pointer">
                Relevant
              </div>
              <div className="font-light px-3 py-2 rounded-md hover:bg-white hover:text-indigo-700 cursor-pointer">
                Latest
              </div>
              <div className="font-light px-3 py-2 rounded-md hover:bg-white hover:text-indigo-700 cursor-pointer">
                Top
              </div>
            </div>
            <div className="mt-2">
              <Link href={"/post/hello-world-this-is-a-slug"}>
                <Card />
              </Link>
              <div className="card md:max-w-2xl cursor-pointer borderw-full bg-white pb-4 md:pb-8 md:rounded-md overflow-hidden mb-2">
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
            </div>
          </div>

          <div className="right-box hidden xl:block">
            <div className="border w-80 listings rounded-md">
              <div className="flex justify-between px-4 py-3 items-center border-b">
                <h3 className="text-xl font-medium">Listings</h3>
                <p className="text-indigo-700 text-sm cursor-pointer">
                  See all
                </p>
              </div>
              <div className="font-light px-4 py-4 border-b group hover:bg-white cursor-pointer">
                <p className="text-gray-700 group-hover:text-indigo-600">
                  Telegram bot developer available
                </p>
                <p className="text-sm text-gray-500">forhire</p>
              </div>
              <div className="font-light px-4 py-4 border-b group hover:bg-white cursor-pointer">
                <p className="text-gray-700 group-hover:text-indigo-600">
                  Documentation is broken. We fixed it.
                </p>
                <p className="text-sm text-gray-500">products</p>
              </div>
              <div className="font-light px-4 py-4 border-b group hover:bg-white cursor-pointer">
                <p className="text-gray-700 group-hover:text-indigo-600">
                  Build Instagram Login Page super easy
                </p>
                <p className="text-sm text-gray-500">collabs</p>
              </div>
              <div className="font-light px-4 py-4 border-b group hover:bg-white cursor-pointer">
                <p className="text-gray-700 group-hover:text-indigo-600">
                  Contribute to DNAnalyzer! 🧬🧑‍💻
                </p>
                <p className="text-sm text-gray-500">collabs</p>
              </div>
              <div className="py-3 text-gray-700 text-sm flex justify-center group cursor-pointer">
                <p className="group-hover:text-indigo-700">Create a Listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
