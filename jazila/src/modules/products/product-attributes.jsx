import { cn } from "@/lib/utils";
import React from "react";

const ProductAttributes = ({
  className = "mb-2 pt-0.5",
  variations,
  attributes,
  color,
  setAttributes,
}) => {
  if (!variations) return null;

  return (
    <>
      {Object.keys(variations).map((variationName, index) => (
        <div className={cn(className, "flex items-center gap-4")} key={index}>
          <h4 className="mb-3 font-normal capitalize text-15px text-primary text-opacity-70">
            {variationName.split("-").join(" ")}:
          </h4>

          <ul className="flex flex-wrap -mr-2 -ml-2">
            {variations[variationName].map((attribute, idx) => (
              <React.Fragment key={idx}>
                {variationName === "color" ? (
                  <button
                    onClick={() =>
                      setAttributes((prev) => ({
                        ...prev,
                        [variationName]: attribute.value,
                      }))
                    }
                    className={cn(
                      "h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent cursor-pointer",
                      {
                        "border-primary text-primary bg-primary text-white hover:text-white":
                          attributes[variationName] === attribute.value,
                      }
                    )}
                  >
                    <span
                      className="w-full h-full rounded-full border border-border-200"
                      style={{ backgroundColor: color }}
                    />
                  </button>
                ) : (
                  <button
                    key={idx}
                    className={cn(
                      "cursor-pointer rounded border dark:border-primary h-9 md:h-10 p-1 mb-2 md:mb-3 ml-2 flex justify-center items-center font-medium text-sm md:text-15px text-primary transition duration-200 ease-in-out hover:text-primary hover:border-primary px-3",
                      {
                        "border-primary text-primary bg-primary text-white hover:text-white":
                          attributes[variationName] === attribute.value,
                      }
                    )}
                    onClick={() =>
                      setAttributes((prev) => ({
                        ...prev,
                        [variationName]: attribute.value,
                      }))
                    }
                  >
                    {attribute.value}
                  </button>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ProductAttributes;