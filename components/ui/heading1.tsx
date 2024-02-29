interface HeadingProps {
  title: string;
  description: string;
}

export const Heading1: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
