import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-600">
      <div className="py-3 ms:px-6 px-3 flex justify-between bg-slate-600 items-center">
        <h2 className="font-bold text-white sm:text-xl">AI画像生成ツールPro</h2>

        <nav>
          <ul>
            <li className="flex items-center sm:gap-6 gap-2 border-white">
              <Link
                href={"/login"}
                className="text-white bg-black sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2 border-slate-100 duration-200 hover:bg-white hover:text-black text-sm sm:text-base"
              >
                ログイン
              </Link>
              <Link
                href={"/signin"}
                className="text-black bg-white sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2 border-black hover:bg-black duration-200 hover:text-white text-sm sm:text-base"
              >
                新規登録
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
