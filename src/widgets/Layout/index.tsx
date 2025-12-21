import clsx from "clsx";
import { main, nav, wrapper } from "./index.css";
import { defaultTheme } from "../../designs/theme.css";

interface Props {
  navigation: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
}

export const Layout = ({ navigation, header, content }: Props) => {
  return (
    <article className={clsx(wrapper, defaultTheme)}>
      <nav className={nav}>{navigation}</nav>
      <div className={main}>
        <header>{header}</header>
        <main>{content}</main>
      </div>
    </article>
  );
};
