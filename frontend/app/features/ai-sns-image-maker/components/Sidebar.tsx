import React from "react";

const Sidebar = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-center">
        <div className="py-2 px-6 w-36 bg-green-300 text-center cursor-pointer">
          テキストから
        </div>
        <div className="py-2 px-6 w-36 bg-black text-white text-center cursor-pointer">
          画像から
        </div>
      </div>
      <div className="mt-5">
        <textarea
          placeholder="AIに生成してほしい内容を記述してください。(ex. cute cat, cool girl ...)"
          name=""
          id=""
          className="resize-none w-full h-48 rounded-md focus:outline-none px-2 py-2"
        ></textarea>
      </div>
      　
      <div>
        <p></p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <p></p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <button className="bg-green-300 px-3 py-4 rounded-md font-bold hover:bg-green-400 duration-200">
          生成する(あとn回まで無料)
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
