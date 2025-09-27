import '../styles/index.css'
import '../styles/App.css'

import { Providers } from './providers'

export const metadata = {
  title: 'Todo App',
  description: 'A simple and intuitive Next.js Todo App',
  robots: 'index, follow',
  icons: {
    icon: 'https://fav.farm/📋',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main
          data-region="main"
          className="min-h-screen flex flex-col items-center gap-10 bg-secondary p-5"
        >
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-primary mt-2">
            Todo App
          </h1>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
