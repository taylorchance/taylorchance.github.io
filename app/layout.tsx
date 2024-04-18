import "./globals.css";
import classNames from "classnames";
import { Inter, Anek_Bangla, Work_Sans } from "next/font/google";
import ScrollSmootherInit from "@/components/wrappers/ScrollSmootherInit";
import CustomCursor from "@/components/wrappers/CustomCursor";
import Nav from "@/components/nav/Nav";
import Contact from "@/components/Contact";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  variable: "--font-anek-bangla",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["200", "300"],
});

export const metadata = {
  title: {
    template: "Taylor Chance | %s",
    default: "Taylor Chance | Software Engineer",
  },
  description:
    "A seasoned Software Engineer & Business Builder that loves Strategy, Design and Development.",
  metadataBase: new URL("https://portfolio-latest-loq24.vercel.app"),
  openGraph: {
    title: {
      template: "Taylor Chance | %s",
      default: "Taylor Chance | Software Engineer",
    },
    description:
      "A seasoned Software Engineer & Business Builder that loves Strategy, Design and Development.",
    url: "https://taylorchance.github.io",
    siteName: "Taylor Chance",
    images: [
      {
        url: "https://taylorchance.github.io/images/taylorchance.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        inter.variable,
        anekBangla.variable,
        workSans.variable
      )}
    >
      <body className="group bg-slate-50 text-white">
        <CustomCursor>
          <Nav />
          <ScrollSmootherInit>
            {children}
            <Contact />
          </ScrollSmootherInit>
        </CustomCursor>
      </body>
      <GoogleTagManager gtmId="G-61XTPW35XV" />
      <GoogleTagManager gtmId="GT-5NGRNT42" />
    </html>
  );
}
