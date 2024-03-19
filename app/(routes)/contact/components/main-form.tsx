import IconFacebook from "@/components/icons/facebook";
import IconInstagram from "@/components/icons/instagram";
import IconTiktok from "@/components/icons/tiktok";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";

const MainForm = () => {
  return (
    <div className="w-4/5 sm:w-[450px] z-10 ">
      <Card className="">
        <CardHeader>
          <Heading1
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
          <Heading1
            title="Or use the form below"
            description="And I will get back to you"
          />
          <CardContent></CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MainForm;
