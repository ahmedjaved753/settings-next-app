import Level2Heading from "./Level2Heading";

type PageHeaderPropsType = {
  heading: string;
  text: string;
};

function PageHeader({ heading, text }: PageHeaderPropsType) {
  return (
    <>
      <Level2Heading text={heading} className="mt-10" />
      <p className="text-sm text-muted-foreground mb-10">{text}</p>
    </>
  );
}

export default PageHeader;
