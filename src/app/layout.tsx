import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.scss'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'НВБ Энергия',
    description: 'НВБ Энергия',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body className={raleway.className}>
                {children}
            </body>
        </html>
    )
}
