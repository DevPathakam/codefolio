import type { Metadata } from 'next';
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { AppHeader } from '@/components/portfolio/AppHeader';
import { NavigationListener } from '@/components/NavigationListener';
import { VerticalMarquee } from '@/components/client/VerticalMarquee';
import { ScrollbarClasses } from '@/constants/common';
import { Icon } from '@iconify/react';
import { Explorer } from '@/components/portfolio/Explorer';
import { Tabbar } from '@/components/portfolio/Tabbar';
import { AppFooter } from '@/components/portfolio/AppFooter';
import { Skills } from '@/data/skills/skills';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Aman Pathak - Frontend Developer | Software Engineer',
  description: 'Codefolio - A VS Code themed portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <div className="h-dvh w-screen overflow-hidden flex flex-col">
          <NavigationListener />

          <AppHeader />
          <div
            className={`flex flex-col flex-1 h-screen w-screen overflow-hidden bg-brand-primary font-mono ${jetBrainsMono.variable}`}
          >
            <div className="flex flex-1 min-h-0 w-full overflow-hidden">
              <aside className="hidden md:block bg-brand-primary-dark border-r border-r-brand-border">
                <VerticalMarquee className="px-3 flex flex-col gap-6  ">
                  {Skills.map(
                    (skill, idx) =>
                      skill.isFeatured && (
                        <Icon
                          key={`sidebar-skill-${idx}`}
                          icon={skill.icon ?? ''}
                          className="text-3xl"
                        />
                      ),
                  )}
                </VerticalMarquee>
              </aside>

              <Explorer />

              <main className="flex-1 min-h-0 h-full flex flex-col overflow-hidden">
                <Tabbar />

                <div className={`flex-1 overflow-y-auto ${ScrollbarClasses}`}>
                  {children}
                </div>
              </main>
            </div>
          </div>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
