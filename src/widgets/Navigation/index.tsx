import { career, careerList, careerTitle, header, snsIcons, wrapper } from "./index.css";
import avatar from "../../assets/avatar.jpg";
import { Avatar } from "../../designs/Avatar";
import { InlineTypography } from "../../designs/InlineTypography";
import { LinkIcon } from "../../designs/LinkIcon";
import { useActions, useSelector } from "../../states";
import { CareerItem } from "./CareerItem";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Navigation = () => {
  const careers = useSelector((state) => state.app.careers);
  const selectedId = useSelector((state) => state.app.selctedCareerId);
  const { selectCareer } = useActions();

  return (
    <div className={wrapper}>
      <section className={header}>
        <Avatar src={avatar} size="large" />
        <div>
          <p>
            <InlineTypography size="lg" color="gray0" bold>
              @Potents
            </InlineTypography>
          </p>
          <p>
            <InlineTypography size="xs" color="gray300">
              Frontend developer
            </InlineTypography>
          </p>
        </div>
        <div className={snsIcons}>
          <LinkIcon
            icon={faXTwitter}
            href="https://x.com/shouheitakai"
            color="gray"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          />
          <LinkIcon
            icon={faGithub}
            href="https://github.com/shouheitakai9009"
            color="gray"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </section>
      <section className={career}>
        <h2 className={careerTitle}>
          <InlineTypography size="md" color="gray0" bold>
            Career
          </InlineTypography>
        </h2>
        <ul className={careerList}>
          {careers.map((career, i) => (
            <CareerItem
              key={i}
              career={career}
              isSelected={career.id === selectedId}
              onSelect={() => selectCareer(career.id)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
