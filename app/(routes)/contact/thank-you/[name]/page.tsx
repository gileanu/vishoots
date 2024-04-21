"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Images } from "lucide-react";
import Link from "next/link";

interface ThankYouPageProps {
  params: { name: string };
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ params }) => {
  return (
    <div className="w-full h-screen flex flex-col gap-12 mt-12">
      <div className="flex flex-col justify-center items-center gap-4 text-center break-words">
        <h1 className="text-7xl">Thank you,</h1>
        <span className="text-5xl font-light">{params.name}</span>
        <p>I will contact you as soon as posible.</p>
      </div>
      <Separator />
      <div className="flex items-center justify-center gap-2">
        <Button asChild variant="link">
          <Link href={`/`}>
            <ArrowLeft className="mr-4 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link">
          <Link href={`/portfolio`}>
            <Images className="mr-4 h-4 w-4" />
            Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;
