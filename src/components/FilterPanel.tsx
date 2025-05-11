import { RangeSlider } from "@mantine/core";
import { useState } from "react";

export default function FilterPanel({
  onFilterChange,
}: {
  onFilterChange: any;
}) {
  const [colorArea, setColorArea] = useState<"blue" | "orange" | "green">(
    "blue"
  );
  const [rangePrice, setRangePrice] = useState<[number, number]>([0, 3000000]);
  const [rangeArea, setRangeArea] = useState<[number, number]>([0, 30000]);

  const handleStatusChange = (newStatus: any) => {
    setColorArea(newStatus);
    onFilterChange({ status: newStatus, rangePrice });
  };

  const handlePriceChange = (e: any) => {
    setRangePrice(e);
    onFilterChange({ colorArea, rangePrice: e });
  };
  return (
    <div className="box-filter">
      <div className="box-status">
        <button
          style={{ backgroundColor: "#55cd6d" }}
          className={colorArea === "green" ? "active" : ""}
          onClick={() => handleStatusChange("green")}
        >
          Commercial
        </button>
        <button
          style={{ backgroundColor: "#ff9f1a" }}
          className={colorArea === "orange" ? "active" : ""}
          onClick={() => handleStatusChange("orange")}
        >
          Administrative
        </button>
        <button
          style={{ backgroundColor: "#3271cc" }}
          className={colorArea === "blue" ? "active" : ""}
          onClick={() => handleStatusChange("blue")}
        >
          Clinical
        </button>
      </div>
      <div className="box-range">
        <div className="headerRange">
          <h3>Area </h3>
          <div className="valueRange">
            <p>{rangeArea[0]}</p>
            <span>-</span>
            <p>{rangeArea[1]}</p>
            <span>sq.m</span>
          </div>
        </div>
        <RangeSlider
          min={0}
          max={300}
          step={5}
          color="white"
          defaultValue={[0, 300]}
          onChange={(e) => setRangeArea(e)}
        />
      </div>
      <div className="box-range">
        <div className="headerRange">
          <h3>Price </h3>
          <div className="valueRange">
            <span>LE</span>
            <p>{rangePrice[0]}</p>
            <span>-</span>
            <p>{rangePrice[1]}</p>
            <span>m</span>
          </div>
        </div>
        <RangeSlider
          min={0}
          max={3000000}
          step={1000}
          color="white"
          onChange={(e) => handlePriceChange(e)}
          value={rangePrice}
        />
      </div>
    </div>
  );
}
