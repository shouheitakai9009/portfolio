import { header, wrapper } from "./index.css";
import avatar from "../../assets/avatar.jpg";
import { Avatar } from "../../designs/Avatar";
import { InlineTypography } from "../../designs/InlineTypography";

export const Navigation = () => {
  return (
    <div className={wrapper}>
      <section className={header}>
        <Avatar src={avatar} size="large" />
        <InlineTypography size="lg" color="gray0" bold>
          Potents
        </InlineTypography>
      </section>
    </div>
  );
};
