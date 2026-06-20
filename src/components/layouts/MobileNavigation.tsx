import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import type { MainNavItem } from "@/types";
import { Icons } from "@/components/icon";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface MainNavigationProps {
    items?: MainNavItem[];
}

export default function MobileNavigation({ items }: MainNavigationProps) {
    const [isDesktop, setIsDesktop] = useState(false);
    const query = "(min-width: 1024px)";

    const firstItem = items?.[0];

    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setIsDesktop(event.matches);
        }
        const result = matchMedia(query);
        result.addEventListener("change", onChange);
        return () => result.removeEventListener("change", onChange);
    }, [query]);

    if (isDesktop) {
        return null;
    }

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger
                    render={
                        <Button variant="ghost" size="icon" className="ml-4 size-5" />
                    }
                >
                    <Icons.menu aria-hidden="true" />
                    <span className="sr-only">Toggle Menu</span>
                </SheetTrigger>
                <SheetContent side="left" className="pt-9 pl-4">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <Icons.logo className="mr-2 size-4" />
                            <span className="font-bold">{siteConfig.name}</span>
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
                        <Accordion className="w-full">

                            <AccordionItem value="item-1">
                                <AccordionTrigger>{firstItem?.title ?? ""}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col space-y-2 pl-2">
                                        {firstItem?.card?.map((item) => (
                                            /* Added asChild to prevent SheetClose from enforcing unwanted button wrappers */
                                            <SheetClose key={item.title}>
                                                <Link to={String(item.href)} className="text-foreground/70">
                                                    {item.title}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="mt-4 flex flex-col space-y-2">
                            {firstItem?.menu?.map((item) => (
                                /* Added asChild to smoothly convert the click target directly to the Link */
                                <SheetClose key={item.title}>
                                    <Link to={String(item.href)} className="">
                                        {item.title}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    );
}