"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Images, Send } from "lucide-react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-12 mt-12">
      <div className="flex flex-col justify-center items-center gap-4 text-center break-words">
        <h1 className="text-7xl">404</h1>
        <p>Page not found</p>
      </div>
      <Separator />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <Button asChild variant="link">
          <Link href={`/`}>
            <ArrowLeft className="mr-4 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Separator orientation="vertical" className="hidden sm:block" />
        <Button asChild variant="link">
          <Link href={`/portfolio`}>
            <Images className="mr-4 h-4 w-4" />
            Portfolio
          </Link>
        </Button>
        <Separator orientation="vertical" className="hidden sm:block" />
        <Button asChild variant="link">
          <Link href={`/contact`}>
            <Send className="mr-4 h-4 w-4" />
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;
