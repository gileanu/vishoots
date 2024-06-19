import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface viShootsEmailTemplateProps {
  name?: string;
  email?: string;
  text?: string;
  phone?: string;
  date?: string;
}

export const viShootsEmailTemplate = ({
  name,
  email,
  text,
  phone,
  date,
}: viShootsEmailTemplateProps) => {
  const ptext = `View ${name}'s submition`;

  return (
    <Html>
      <Head />
      <Preview>{ptext}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading1}>viShoots</Text>
          </Section>
          <Hr style={hr} />
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading2}>
                New submition from:
                <br />
                <span style={subName}>{name}</span>
              </Text>
              <Text style={paragraph}>Email:</Text>
              <Text style={review}>{email}</Text>
              <Text style={paragraph}>Phone number:</Text>
              <Text style={review}>{phone}</Text>
              <Text style={paragraph}>Message:</Text>
              <Text style={review}>{text}</Text>
              <Text style={paragraph}>Time:</Text>
              <Text style={review}>{date}</Text>
            </Row>
          </Section>
          <Hr style={hr} />
          <Section>
            <Button style={button} href="https://vishoots-admin.vercel.app/">
              View dashboard
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default viShootsEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const subName = {
  fontSize: "26px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const container = {
  margin: "0px",
  padding: "20px 0",
};

const heading1 = {
  fontSize: "26px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const heading2 = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "12px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#484848",
  borderRadius: "3px",
  color: "#f2f3f3",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
