import {
  faCalendarDays,
  faFire,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { NumberCard } from "../../designs/NumberCard";
import { wrapper } from "./index.css";
import { Summary } from "./Summary";
import { Description } from "./Description";

export const Content = () => {
  return (
    <div className={wrapper}>
      <NumberCard subtext="チーム人数" value={10} color="red" icon={faFire} />
      <NumberCard
        subtext="開発期間(日)"
        value={90}
        color="green"
        icon={faCalendarDays}
      />
      <NumberCard
        subtext="影響する顧客数(人)"
        value={35000}
        color="blue"
        icon={faPeopleGroup}
      />
      <Summary />
      <Description />
    </div>
  );
};
