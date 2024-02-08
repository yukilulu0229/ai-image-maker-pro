import AISNSImageMaker from "./features/ai-sns-image-maker/components/AISNSImageMaker";

export default function Home() {
  return (
    <main style={{ minHeight: "calc(100vh - 68px)" }}>
      {/* ホーム画面はMVPリリースした後に追加 */}
      {/* ./でまずはSNSアイコンメーカーを作成 */}
      <AISNSImageMaker />
    </main>
  );
}
