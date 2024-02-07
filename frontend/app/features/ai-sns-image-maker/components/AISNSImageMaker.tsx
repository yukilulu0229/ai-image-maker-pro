import React from "react";
import Sidebar from "./Sidebar";
import AIImageOutputArea from "./AIImageOutputArea";

const AISNSImageMaker = () => {
  return (
    <div className="flex w-full" style={{ minHeight: "calc(100vh - 68px)" }}>
      {/* ビューポートの高さに合わせる */}
      <div className="lg:w-1/4 bg-gray-700">
        {/* サイドバーの幅を40%に設定 */}
        {/* 左側のサイドバーの高さを親要素に合わせる */}
        <Sidebar />
      </div>
      <div className="lg:w-3/4 h-full">
        {/* 残りの幅をメインコンテンツに割り当て */}
        {/* 右側のAI画像出力エリアの高さを親要素に合わせる */}
        <AIImageOutputArea />
      </div>
    </div>
  );
};

export default AISNSImageMaker;
