"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FormContent } from "./form-content";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LucideFacebook } from "lucide-react";
import IconFacebook from "@/components/icons/facebook";
import IconInstagram from "@/components/icons/instagram";
import IconTiktok from "@/components/icons/tiktok";
import { Heading2 } from "@/components/ui/heading2";

const ContactForm = () => {
  return (
    <div className="w-4/5 sm:w-[450px] z-10 ">
      <Card className="">
        <CardHeader>
          <Heading2
            title="Follow me here"
            description="And see what I'm up to"
          />
          <div className="inline-flex gap-2">
            <IconInstagram />
            <IconFacebook />
            <IconTiktok />
          </div>
          <span>
            <Separator decorative />
          </span>
          <Heading2
            title="Or use the form below"
            description="And I will get back to you"
          />
          <CardContent>
            <FormContent />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ContactForm;
