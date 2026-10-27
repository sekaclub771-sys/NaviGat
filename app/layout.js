export const metadata = {
  title: "Z-Navigator Pro",
  description: "Брутальный демографический навигатор",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Z-Nav",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="h-full overflow-hidden select-none bg-black">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className="h-full text-white antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
