import "./styles/font-face.css";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="py-12 md:py-20">
        <h1 className="sr-only">하정원의 이력서</h1>
        {children}
      </body>
    </html>
  );
}
