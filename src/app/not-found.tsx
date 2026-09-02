import Link from "next/link";

export default function NotFound () {
  return (
    <main id="main" className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-extrabold text-4xl mb-4">404 Not Found</h1>
      <p className="mb-4">ページが見つかりませんでした</p>
      <Link href="/" className="underline">ホームへ戻る</Link>
    </main>
  );
};

