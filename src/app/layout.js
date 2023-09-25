import "./globals.css";

export const metadata = {
  title: "devjobs | Brandon Nielsen",
  description: "devjobs, tech job listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
