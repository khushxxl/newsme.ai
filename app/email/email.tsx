import { AppContext } from "@/context/AppContext";
import { Markdown, Html } from "@react-email/components";

const EmailTemplate = ({ content = `# it didnt work` }) => {
  return (
    <Html lang="en" dir="ltr">
      <Markdown children={`${content}`} />
    </Html>
  );
};
export default EmailTemplate;
