import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      <Card>
        <CardHeader>
          <CardTitle>Exp 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            accusamus tempore cumque repellat est neque, ratione laboriosam esse
            itaque qui, adipisci saepe repudiandae dicta, at dolores repellendus
            ad soluta quaerat.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="mt-4" variant="default">
            Contact
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Exp 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            accusamus tempore cumque repellat est neque, ratione laboriosam esse
            itaque qui, adipisci saepe repudiandae dicta, at dolores repellendus
            ad soluta quaerat.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="mt-4" variant="default">
            Contact
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Exp 1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            accusamus tempore cumque repellat est neque, ratione laboriosam esse
            itaque qui, adipisci saepe repudiandae dicta, at dolores repellendus
            ad soluta quaerat.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="mt-4" variant="default">
            Contact
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AboutSection;
