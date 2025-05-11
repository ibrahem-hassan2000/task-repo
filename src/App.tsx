import { useEffect } from "react";
import polygonData from "./assets/data.json";
import PolygonMap from "./components/PolygonMap";
import FilterPanel from "./components/FilterPanel";
function App() {
  const handleFilterChange = ({
    status = "blue",
    rangePrice = [0, 3000000],
  }: {
    status: "blue" | "orange" | "green";
    rangePrice: [number, number];
  }) => {
    polygonData.forEach((poly) => {
      const StateToColor =
        status === "blue"
          ? "#3271cc"
          : status === "orange"
          ? "#ff9f1a"
          : "#55cd6d";
      const polygonEl = document.querySelector(
        `polygon[data-code="${poly.code}"]`
      );
      if (!(polygonEl instanceof SVGPolygonElement)) return;
      if (!polygonEl) return;

      const matchColor =
        polygonEl?.getAttribute("fill")?.toLocaleLowerCase() ===
        StateToColor.toLocaleLowerCase();

      const matchPrice =
        poly.price >= rangePrice[0] && poly.price <= rangePrice[1];

      if (matchColor && matchPrice) {
        polygonEl.style.display = "block";
      } else {
        polygonEl.style.display = "none";
      }
    });
  };

  useEffect(() => {
    // Show all polygons initially
    handleFilterChange({ status: "blue", rangePrice: [0, 3000000] });
  }, []);
  return (
    <div className="app">
      <div>
        <PolygonMap />
      </div>
      <div className="">
        <FilterPanel onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
