import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="  px-10 ">
      <section className="  min-h-screen">
        <nav className=" py-10 mb-12 flex justify-between ">
          <h1 className="text-xl font-bold ">Jerry Fan</h1>
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
            </li>
            <li>
              {" "}
              <Link
                className=" bg-gradient-to-r from-cyan-500  to-teal-500 px-4 py-2 rounded-md ml-8"
                href="https://github.com/J3rryfan"
              >
                {" "}
                Resume
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
