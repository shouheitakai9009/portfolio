import { InlineTypography } from "../../../designs/InlineTypography";
import { useSelector } from "../../../states";
import { wrapper, description as descriptionStyle } from "./index.css";

export const Description = () => {
  const description = useSelector(
    (state) =>
      state.app.careers.find((c) => c.id === state.app.selctedCareerId)
        ?.description
  );

  if (description === undefined) return;

  return (
    <div className={wrapper}>
      <p>
        <InlineTypography color="gray300" size="sm" bold>
          Career description
        </InlineTypography>
      </p>
      <p className={descriptionStyle}>
        <InlineTypography color="gray700">{description}</InlineTypography>
      </p>
    </div>
  );
};
