import { vars } from "../theme.css";
import * as styles from "./index.css";

type ColorScale = {
  [key: string]: string;
};

type ColorName = "gray" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink";

const colorNames: ColorName[] = ["gray", "red", "orange", "yellow", "green", "blue", "purple", "pink"];
const scales = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

export const ColorPalette = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>カラーパレット</h1>
      {colorNames.map((colorName) => (
        <div key={colorName} className={styles.colorGroup}>
          <h2 className={styles.colorName}>{colorName}</h2>
          <div className={styles.swatchGrid}>
            {scales.map((scale) => {
              const colorValue = (vars.color[colorName] as ColorScale)[scale];
              return (
                <div key={scale} className={styles.swatchWrapper}>
                  <div
                    className={styles.swatch}
                    style={{ backgroundColor: colorValue }}
                  />
                  <div className={styles.swatchInfo}>
                    <div className={styles.swatchScale}>{scale}</div>
                    <div className={styles.swatchValue}>{colorValue}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
