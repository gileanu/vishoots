"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Images, Send } from "lucide-react";
import Link from "next/link";

const GalleryErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-12 mt-12">
      <div className="flex flex-col justify-center items-center gap-4 text-center break-words">
        <h1 className="text-3xl md:text-6xl lg:text-7xl ">
          There&apos;s nothing here &#x1F914;
        </h1>

        <ul>
          <li>Gallery has been removed</li>
          <li className="text-sm">or</li>
          <li>Gallery does not exist</li>
        </ul>
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

export default GalleryErrorPage;
