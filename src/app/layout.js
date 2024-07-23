import './globals.scss';
import { Providers } from './provider';

export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with NextJS 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {' '}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
