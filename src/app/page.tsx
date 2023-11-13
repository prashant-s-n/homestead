import Link from "next/link";
import { BiWallet } from "react-icons/bi";
import { FiHome, FiGlobe } from "react-icons/fi";
import HeadlinesDashboard from "./common/headlines-dashboard";

export default function Home() {
  return (
    <main className="flex min-w-full min-h-screen flex-col bg-zinc-100 ">
      <div className="flex min-w-screen flex-row items-center p-10 z-20">
        <div
          className="flex min-w-3 bg-transparent p-4 rounded-lg"
          style={{
            textShadow: "1px 0px 10px #CCCCCC",
          }}
        >
          <FiHome
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              margin: "5px",
            }}
          />
          <span className="text-xl text-white">Homestead</span>
        </div>
      </div>
      <div className="flex max-h-screen  flex-col p-10">
        <video
          id="background-video"
          autoPlay
          muted
          loop
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <source src="/mountains.mp4" type="video/mp4" />
        </video>

        <div className="grid grid-cols-12 grid-flow-row-dense gap-3">
          <div className="grid col-start-2 col-span-2 h-1/2 row-span-1 space-y-7 ">
            <div className="flex flex-col  backdrop-blur-md z-20 bg-sky/80 text-zinc-400 rounded-lg shadow-lg p-5">
              <Link
                href={"/"}
                className="flex text-white spacing-x-3 cursor-pointer rounded-lg bg-gradient-to-r from-sky-500 to-sky-300 via-ocean-300"
              >
                <div className="flex flex-col spacing-x-2 p-2">
                  <span className="align-middle">
                    <FiGlobe className="text-2xl m-3" />
                  </span>
                </div>
                <div className="flex flex-col spacing-y-2 p-2">
                  <span className="text-md">Top Headlines</span>
                  <span className="text-xs">Handpicked recent NEWS</span>
                </div>
              </Link>

              <Link
                href={"/finance"}
                className="flex text-white spacing-x-3 cursor-pointer"
              >
                <div className="flex flex-col spacing-x-2 p-2">
                  <span className="align-middle">
                    <BiWallet className="text-2xl m-3" />
                  </span>
                </div>
                <div className="flex flex-col spacing-y-2 p-2">
                  <span className="text-md">Personal Finance</span>
                  <span className="text-xs">
                    Manage and Audit your personal finances
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="grid col-span-4 z-20 max-h-screen backdrop-blur-lg  bg-zinc/10 rounded-xl"
            style={{
              overflow: "scroll",
            }}
          >
            <div className="h-100">
              <HeadlinesDashboard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
