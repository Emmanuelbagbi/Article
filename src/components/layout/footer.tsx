'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    const HIDDEN_PATHS = ['/login', '/register'];
    const shouldHideFooter = pathname?.startsWith('/dashboard') || HIDDEN_PATHS.includes(pathname);

    if (shouldHideFooter) return null;

    return (
        <footer className="w-full border-t bg-transparent mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground">
                <div className="max-w-md">
                    <h2 className="text-lg font-semibold text-black">Luxeyline News</h2>
                    <p className="mt-2">
                        Your trusted source for news, trends, and the latest insights in the world of luxury real estate. Articles curated by an experienced editorial team.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Navigation</h3>
                    <Link href="/">Home</Link>
                    <Link href="/user/articles">Articles</Link>
                    <Link href="/user/about">About</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-black font-medium">Contact Us</h3>
                    <p>Email: info@luxeyline.news</p>
                    <p>Phone: 07014457796</p>
                    <p>Address: Port Harcourt, Nigeria</p>
                </div>
            </div>

            <div className="border-t text-center py-6 text-xs text-gray-500">
                © {new Date().getFullYear()} Luxeyline News. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
