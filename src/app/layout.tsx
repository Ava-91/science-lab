import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آزمایشگاه علوم | علوم هشتم",
  description: "یادگیری، تمرین و مرور علوم تجربی پایه هشتم؛ فصل‌های مخلوط‌ها و تغییرهای شیمیایی.",
  applicationName: "آزمایشگاه علوم",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}