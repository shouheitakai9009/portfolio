import { shallowEqual } from "react-redux";
import { useSelector } from "../../states";
import { wrapper } from "./index.css";
import { InlineTypography } from "../../designs/InlineTypography";

export const Header = () => {
  const career = useSelector(
    (state) =>
      state.app.selctedCareerId != null
        ? state.app.careers.find(
            (career) => career.id === state.app.selctedCareerId
          )
        : undefined,
    shallowEqual
  );

  if (career === undefined) return;

  return (
    <div className={wrapper}>
      <InlineTypography size="xl" color="gray700" bold>
        {career.projectName}
      </InlineTypography>
    </div>
  );
};
