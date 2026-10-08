import "./globals.css";

export const metadata = {
  title: "SEÑAL 88 — archivo transmedia",
  description: "Boilerplate experimental con Next.js, Firebase y Three.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
