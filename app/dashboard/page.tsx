"use client";
import Analytics from "@/components/dashboard__components/analytics";
import Dashboard_Home from "@/components/dashboard__components/dashboard__home";
import Milestones from "@/components/dashboard__components/milestones";
import Profile from "@/components/dashboard__components/profile";
import Settings from "@/components/dashboard__components/settings";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Dashboard = (): JSX.Element => {
  const [activeComponent, setActiveComponent] = useState<string>("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Dashboard_Home />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      case "analytics":
        return <Analytics />;
      case "milestones":
        return <Milestones />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-2 text-white flex flex-col">
        <div className="flex">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-1">
          <ul>
            <li
              className="mb-4 bg-gray-400 rounded-sm px-2 py-2 hover:bg-gray-500 cursor-pointer"
              onClick={() => setActiveComponent("home")}
            >
              <div className="flex items-center gap-4 font-light">
                <Image src={"/home.svg"} alt="home" width={20} height={20} />
                <p>Home</p>
              </div>
            </li>
            <li
              className="mb-4 bg-gray-400 rounded-sm px-2 py-2 hover:bg-gray-500 cursor-pointer"
              onClick={() => setActiveComponent("milestones")}
            >
              <div className="flex items-center gap-4 font-light">
                <Image src={"/trophy.svg"} alt="home" width={20} height={20} />
                <p>Milestones</p>
              </div>
            </li>
            <li
              onClick={() => setActiveComponent("settings")}
              className="mb-4 bg-gray-400 rounded-sm px-2 py-2 hover:bg-gray-500 cursor-pointer"
            >
              <div className="flex items-center gap-4 font-light">
                <Image
                  src={"/settings.svg"}
                  alt="home"
                  width={20}
                  height={20}
                />
                <p>Settings</p>
              </div>
            </li>
            <li
              className="mb-4 bg-gray-400 rounded-sm px-2 py-2 hover:bg-gray-500 cursor-pointer"
              onClick={() => setActiveComponent("analytics")}
            >
              <div className="flex items-center gap-4 font-light">
                <Image
                  src={"/analytics.svg"}
                  alt="home"
                  width={20}
                  height={20}
                />
                <p>Analytics</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="border-t-2 pb-2"></div>
        <div className="pb-1">
          <div
            className="cursor-pointer flex items-center bg-neutral-400 gap-2 mb-2 p-2 rounded-sm"
            onClick={() => setActiveComponent("profile")}
          >
            <Image src={"/user.svg"} alt="settings" width={20} height={20} />

            <p>My profile</p>
          </div>
          <Link
            href={"/"}
            className="flex items-center bg-neutral-400 gap-2 mb-2 p-2 rounded-sm"
          >
            <Image src={"/logout.svg"} alt="settings" width={20} height={20} />
            <p className=" text-red-600">Logout</p>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="h-100 p-6 m-0 bg-white">
          <div className="">
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="px-8 pt-4 relative h-screen">
          <Image
            src={"/images/bild5.jpg"}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-opacity-50 bg-gray-800"></div>
          <div className="relative">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
