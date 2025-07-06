import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "React Assignment",
  description: "Dynamic Product Lising Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={encodeSans.variable}>
        {children}
      </body>
    </html>
  );
}
