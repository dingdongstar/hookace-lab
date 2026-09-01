import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HookAce LAB - 鉤子文案實驗室",
  description: "用 AI 拆解你的鉤子，找出爆款公式",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="antialiased bg-[#fcfcfd] text-zinc-900 selection:bg-violet-200">
        {children}
      </body>
    </html>
  );
}
