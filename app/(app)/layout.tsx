import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starioum ✦",
  description: "Space, Science & Technologie Researchers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

      <NavigationMenu className="content-center justify-self-center mt-4">
        <NavigationMenuList>          
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-3 p-4 md:w-[200px] lg:w-[250px]">
                <li className="flex space-x-3">
                  <NavigationMenuLink asChild>
                    <Link href="/starnews">starNews</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/graphs">Graphs</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/theories">Theories</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
            <NavigationMenuContent className="items-center text-center">
              <ul className="flex justify-center gap-3 p-4 md:w-[200px] lg:w-[250px]">
                <li className="flex justify-center">
                  <NavigationMenuLink asChild>
                    <Link href="/join">Join Us</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
