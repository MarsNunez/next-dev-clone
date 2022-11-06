import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <div className="">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>Dev Clone{title && ` - ${title}`}</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
