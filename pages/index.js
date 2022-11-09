import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { sanityClient } from "../sanity";
import {
  primaryLabels,
  labelIcons,
  otherLabels,
  otherIcons,
  socials,
  tagsLabels,
} from "../helpers/data";

export default function Home({ posts }) {
  console.log(posts);
  console.log(posts[0].slug.current);

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
                      className={`${social} text-xl text-gray-800 group-hover:text-indigo-700`}
                    ></i>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between w-60 items-center mb-2">
                <h3 className="pl-3 font-semibold text-lg">My Tags</h3>
                <div className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-indigo-100 group cursor-pointer">
                  <i className="fa-solid fa-gear text-xl text-gray-800 group-hover:text-indigo-700"></i>
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
              {posts.map((post) => (
                <Link href={`/post/${post.slug.current}`}>
                  <Card
                    key={post._id}
                    title={post.title}
                    mainImage={post.mainImage}
                    author={post.author}
                  />
                </Link>
              ))}
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

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {
    _id,
    title,
    slug,
    mainImage,
    author -> {
      name,
      image,
    }
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
