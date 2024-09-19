import { fontSans } from './fonts';
import './globals.css';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          (cn('min-h-screen font-sans antialiased'), fontSans.variable)
        }
      >
        {children}
      </body>
    </html>
  );
}
