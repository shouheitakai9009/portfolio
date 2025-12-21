import clsx from "clsx";
import { wrapper, size as sizeVariant, image } from "./index.css";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  size: "small" | "medium" | "large";
}

export const Avatar = ({ size, ...props }: Props) => {
  return (
    <div className={clsx(wrapper, sizeVariant[size])}>
      <img className={image} {...props} />
    </div>
  );
};
