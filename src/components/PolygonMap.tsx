import { useEffect, useState } from "react";
import image from "../assets/0-floor.png";
import polygonData from "../assets/data.json";

export default function PolygonMap() {
  const [hoveredUnit, setHoveredUnit] = useState<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const polygons = document.querySelectorAll("polygon");

    // Helper function to calculate area

    polygons.forEach((polygon) => {
      polygon.addEventListener("mouseenter", (e) => {
        const target = e.target as SVGElement;
        const code = target.getAttribute("data-code");

   
        if (!code) return;
        const unit = polygonData.find((u) => +u.code === +code || 0);
        if (unit) {
          setHoveredUnit(unit);
        }
      });

      polygon.addEventListener("mousemove", (e: MouseEvent) => {
        setPosition({ x: e.pageX, y: e.pageY });
      });

      polygon.addEventListener("mouseleave", () => {
        setHoveredUnit(null);
      });
    });
    return () => {
      polygons.forEach((polygon) => {
        polygon.removeEventListener("mouseenter", () => {});
        polygon.removeEventListener("mousemove", () => {});
        polygon.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "800px",
        maxWidth: "100%",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "#272727",
          objectFit: "cover",
        }}
        src={image}
      />

      <svg
        id="uuid-59b76a1b-abe3-40a4-afca-d4837b2fbc74"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3950.8 3950.8"
        style={{
          position: "absolute",
          top: "0",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <polygon
          id="uuid-2123fa08-8286-46c0-9aa4-37e85dc93820"
          data-code="1"
          points="3209.56 921.87 3209.72 1052.28 2997.84 1052.28 2997.84 1005.61 3061.1 1005.36 3061.16 905.77 3061.92 905.77 3061.51 730.38 3209.26 730.39 3209.72 921.85 3209.56 921.87"
          fill="#3271cc"
        />
        <polygon
          id="uuid-afeb81b4-e7b5-4c30-a562-c769a3d20fbe"
          data-code="2"
          points="2918.12 730.13 3050.02 730.13 3050.62 994.08 2918.12 994.31 2918.12 730.13"
          fill="#3271cc"
        />
        <polygon
          id="uuid-4428b236-5f44-464c-867b-8b5817f27f64"
          data-code="3"
          points="2784.97 730 2906.79 730.13 2908.9 965.22 2862.3 964.64 2862.43 994.3 2784.97 994.3 2784.97 730"
          fill="#3271cc"
        />
        <polygon
          id="uuid-449ea7f0-fbd4-4c7a-b957-c961f89276a8"
          data-code="4"
          points="2989.75 1003.63 2724.39 1003.63 2724.39 1170.93 2989.78 1172.13 2989.75 1003.63"
          fill="#3271cc"
        />
        <polygon
          id="uuid-844fa465-b609-4d51-9e5d-b578123e916a"
          data-code="5"
          points="2988.57 1281.21 2723.21 1281.25 2723.21 1407.62 2988.57 1407.62 2988.57 1281.21"
          fill="#3271cc"
        />
        <polygon
          id="uuid-08b06ffa-7245-4f1c-9cde-ce168ef20b45"
          data-code="6"
          points="2988.59 1418.93 2723.21 1419 2723.21 1554.64 2988.57 1554.44 2988.59 1418.93"
          fill="#3271cc"
        />
        <polygon
          id="uuid-11ff7bb4-b2e6-4017-b49b-b02daa48e30a"
          data-code="7"
          points="3210.48 1343.8 2998.87 1343.92 2998.54 1488.25 3075.25 1487.63 3075.15 1554.51 3210.58 1555.62 3210.48 1343.8"
          fill="#3271cc"
        />
        <polygon
          id="uuid-cfecfc8c-79d4-47c8-be06-4640f26f80b5"
          data-code="8"
          points="2987.57 1563.92 2722.21 1563.75 2722.21 1696.02 2987.57 1694.79 2987.57 1563.92"
          fill="#3271cc"
        />
        <polygon
          id="uuid-e9ae0a70-f187-4301-be72-493bb9235715"
          data-code="9"
          points="3209.58 1563.92 2997.83 1563.92 2997.83 1679.94 3042.18 1680 3042.23 1695.95 3170.83 1695.95 3170.83 1673.22 3209.58 1673.18 3209.58 1563.92"
          fill="#3271cc"
        />
        <polygon
          id="uuid-eb8b3201-acca-4603-976c-cee1bedf6898"
          data-code="10"
          points="2988.57 1706.25 2723.21 1706.16 2723.21 1841.72 2988.57 1842.87 2988.57 1706.25"
          fill="#3271cc"
        />
        <polygon
          id="uuid-c207dd5c-46c4-4c04-9328-97942ca2a053"
          data-code="11"
          points="3041.16 1705.2 3168.68 1705.22 3168.82 1727.94 3208.58 1727.87 3208.58 1841.87 2996.79 1841.87 2996.79 1721.1 3041.26 1721.14 3041.16 1705.2"
          fill="#3271cc"
        />
        <polygon
          id="uuid-867e7e52-c96e-4571-bca9-5dd44d7714b4"
          data-code="12"
          points="3044.5 1851.04 2783.82 1851.06 2783.82 1978.56 2995.58 1978.8 2995.6 1956.92 3044.5 1956.9 3044.5 1851.04"
          fill="#3271cc"
        />
        <polygon
          id="uuid-f15f386c-51e4-45ca-862d-ad85066bf478"
          data-code="13"
          points="3209.58 1851.11 3055.9 1851.04 3055.9 1956.93 3086.61 1956.85 3086.71 1978.66 3209.58 1978.66 3209.58 1851.11"
          fill="#3271cc"
        />
        <polygon
          id="uuid-6909c523-62fe-473f-8edc-02297e741ff7"
          data-code="14"
          points="2995.69 1987.95 2783.82 1986.56 2783.82 2118.9 3044.43 2118.9 3044.43 2009.62 2995.69 2009.69 2995.69 1987.95"
          fill="#3271cc"
        />
        <polygon
          id="uuid-2a25e1e1-0c5e-4f74-aad0-f4d97cd91c61"
          data-code="15"
          points="3209.58 1987.95 3086.65 1987.95 3086.65 2009.6 3055.96 2009.54 3055.96 2118.78 3209.58 2119.93 3209.58 1987.95"
          fill="#3271cc"
        />
        <polygon
          id="uuid-4f855587-4749-4cfe-a300-df1a37539bea"
          data-code="16"
          points="3044.43 2129.26 2783.82 2129.4 2783.82 2260.22 2995.76 2261.56 2995.86 2238.44 3044.43 2238.54 3044.43 2129.26"
          fill="#3271cc"
        />
        <polygon
          id="uuid-4d6091b6-dfa1-43b4-82c5-f1531d8ec18a"
          data-code="17"
          points="3055.96 2129.26 3209.58 2129.24 3208.76 2260.81 3086.57 2260.81 3086.67 2238.46 3055.86 2238.56 3055.96 2129.26"
          fill="#3271cc"
        />
        <polygon
          id="uuid-ae5d0852-1856-46a3-b813-7531441a1462"
          data-code="18"
          points="2995.52 2268.88 2783.82 2268.88 2783.82 2399.8 3044.46 2399.8 3044.46 2291.61 2995.89 2291.41 2995.52 2268.88"
          fill="#3271cc"
        />
        <polygon
          id="uuid-3ea10b4b-ae74-4820-af36-4490c4185254"
          data-code="19"
          points="3209.58 2268.88 3086.9 2268.88 3085.9 2291.29 3055.86 2291.51 3055.76 2399.8 3209.58 2399.8 3209.58 2268.88"
          fill="#3271cc"
        />
        <polygon
          id="uuid-5aa79561-6e87-4fd1-9091-ff414faf0fab"
          data-code="20"
          points="3044.73 2408.92 2783.82 2408.92 2783.82 2540.28 2996.19 2540.33 2995.16 2520 3045.08 2518.78 3044.73 2408.92"
          fill="#3271cc"
        />
        <polygon
          id="uuid-fe039848-8406-45c8-b505-af1623d6f1db"
          data-code="21"
          points="3209.59 2409.04 3055.76 2410.27 3054.93 2519.36 3086.72 2519.35 3086.68 2540.44 3209.59 2540.9 3209.59 2409.04"
          fill="#3271cc"
        />
        <polygon
          id="uuid-3c2b5e7a-144d-46fe-9209-8e2835bc6f90"
          data-code="22"
          points="2995.53 2552.45 2783.82 2552.45 2783.82 2745.87 3044.37 2745.87 3044.37 2574.09 2995.53 2574.19 2995.53 2552.45"
          fill="#3271cc"
        />
        <polygon
          id="uuid-c73fe2fb-8002-458e-b650-bd460e5ea689"
          data-code="23"
          points="3208.93 2552.45 3086.71 2552.45 3086.65 2573.82 3055.16 2574.09 3055.16 2745.87 3208.93 2745.87 3208.93 2552.45"
          fill="#3271cc"
        />
        <polygon
          id="uuid-c5d65890-12e4-48dd-b70e-d73fc93ae7bf"
          data-code="24"
          points="3014.85 2755.92 2784.82 2755.53 2784.82 2949.15 3014.85 2949.15 3014.85 2755.92"
          fill="#3271cc"
        />
        <polygon
          id="uuid-1440c879-86e7-4b47-8d30-15abc158251e"
          data-code="25"
          points="3210.57 3117.26 2783.53 3118.33 2783.53 3245.74 3209.64 3245.74 3210.57 3117.26"
          fill="#3271cc"
        />
        <polygon
          id="uuid-68855e8d-59fc-42d0-948c-bee107639795"
          data-code="26"
          points="3209.39 3257.34 2784.68 3257.34 2783.53 3383.94 3209.39 3381.4 3209.39 3257.34"
          fill="#3271cc"
        />
        <polygon
          id="uuid-bd05a142-f8a4-4ef5-83da-39da35b940ba"
          data-code="27"
          points="2991.57 3394.83 2783.53 3394.83 2783.53 3669.32 2991.03 3669.37 2991.57 3394.83"
          fill="#3271cc"
        />
        <polygon
          id="uuid-e46a1379-9718-40ba-90f9-b7f1fc96f0d1"
          data-code="28"
          points="3120.84 3395 3002.36 3395 3002.36 3668 3209.39 3668.14 3209.39 3439.23 3120.64 3439.36 3120.84 3395"
          fill="#3271cc"
        />
        <polygon
          id="uuid-5aa873ba-e0e0-41ce-ac79-9911997b1637"
          data-code="29"
          points="2468.65 770.21 2337.61 770.21 2337.61 995.53 2468.33 995.53 2468.65 770.21"
          fill="#3271cc"
        />
        <polygon
          id="uuid-9dab5225-a941-4a47-8519-b4d8d5628ce5"
          data-code="30"
          points="2327.23 770.1 2204.33 770.16 2204.33 995.75 2327.23 995.53 2327.23 770.1"
          fill="#3271cc"
        />
        <polygon
          id="uuid-32cdb8c6-2745-46f6-9e3a-5c98ecf07753"
          data-code="31"
          points="2468.65 1004.7 2337.55 1004.84 2337.62 1034.55 2292.17 1034.65 2292.17 1131.46 2468.65 1131.46 2468.65 1004.7"
          fill="#3271cc"
        />
        <polygon
          id="uuid-d677ea89-f9c9-4467-beab-a6ac94d50b0a"
          data-code="32"
          points="2062.25 916.9 2191.57 917.94 2192.15 1004.79 2281.35 1005.12 2281.35 1131.92 2061.64 1131.9 2062.25 916.9"
          fill="#3271cc"
        />
        <polygon
          id="uuid-4a5034c4-868b-4a7f-a21c-d18ed39d4c9f"
          data-code="33"
          points="2468.48 1139.13 2292.17 1138.62 2292.17 1251.32 2337.68 1251.26 2337.61 1270.81 2468.48 1271.85 2468.48 1139.13"
          fill="#3271cc"
        />
        <polygon
          id="uuid-d3d92bdd-60d5-4334-9699-e9f2b8c3ceb1"
          data-code="34"
          points="2282.29 1138.62 2061.19 1139.75 2061.19 1271.92 2281.84 1271.92 2282.29 1138.62"
          fill="#3271cc"
        />
        <polygon
          id="uuid-132a56bd-158f-4246-b398-17bed98f05cf"
          data-code="35"
          points="2468.63 1281.18 2337.61 1281.24 2337.85 1300.66 2292.17 1300.66 2292.17 1416.8 2468.62 1416.8 2468.63 1281.18"
          fill="#3271cc"
        />
        <polygon
          id="uuid-dd3f0b9f-a489-4bc4-84e5-0072af5993e5"
          data-code="36"
          points="2281.79 1280.12 2281.84 1416.8 2061.19 1416.8 2061.19 1280.01 2281.79 1280.12"
          fill="#3271cc"
        />
        <polygon
          id="uuid-309de6e6-f8bc-4426-92ae-22fcbdb7548a"
          data-code="37"
          points="2468.63 1427.6 2061.19 1428.14 2060.93 1489.53 2131.98 1489.49 2132.87 1554.56 2468.63 1554.56 2468.63 1427.6"
          fill="#3271cc"
        />
        <polygon
          id="uuid-94878bfc-b4b6-40c0-a5c5-10049e664836"
          data-code="38"
          points="2468.49 1562.8 2336.5 1562.84 2336.5 1832.71 2468.6 1832.71 2468.49 1562.8"
          fill="#3271cc"
        />
        <polygon
          id="uuid-c5f62790-8b1b-4e32-a7f6-933903a1c71d"
          data-code="39"
          points="2295.52 1562.92 2132.7 1562.86 2132.7 1702.74 2198.83 1702.95 2198.63 1831.54 2325.14 1831.54 2326.17 1607.25 2295.52 1607.24 2295.52 1562.92"
          fill="#3271cc"
        />
        <polygon
          id="uuid-35f78019-a221-47f0-8cec-54a621fe19f2"
          data-code="40"
          points="1841.53 1428.04 1638.91 1426.94 1638.91 1554.47 1841.53 1554.47 1841.53 1544.23 1811.98 1544.22 1811.83 1489.49 1841.53 1489.64 1841.53 1428.04"
          fill="#3271cc"
        />
        <polygon
          id="uuid-0435f7f1-ce2f-42e2-9c3a-0efc443c738d"
          data-code="41"
          points="1841.53 1562.98 1638.91 1562.81 1638.91 1693.68 1841.54 1693.68 1841.53 1562.98"
          fill="#3271cc"
        />
        <polygon
          id="uuid-2406d864-b557-458c-bc40-e00f8b29c3f3"
          data-code="42"
          points="1962.12 1705.16 1637.91 1705.21 1637.81 1831.47 1863.33 1832.78 1863.28 1816.74 1919.1 1816.7 1919.13 1832.58 1962.43 1832.78 1962.12 1705.16"
          fill="#3271cc"
        />
        <polygon
          id="uuid-ddd77ec4-1652-4637-92bf-5eea3ed3bd48"
          data-code="43"
          points="1862.38 1841.94 1770.07 1841.94 1770.07 1977.37 1862.33 1978.51 1862.33 1962.63 1918.1 1962.58 1918.1 1977.5 2044.18 1977.3 2044.44 1841.94 1918.05 1841.94 1918.15 1856.74 1862.28 1856.76 1862.38 1841.94"
          fill="#3271cc"
        />
        <polygon
          id="uuid-cea1f83a-acc8-4219-b091-fd894cc21fd6"
          data-code="44"
          points="1761.84 1841.94 1638.81 1841.94 1638.81 2119.73 1761.81 2119.73 1761.84 1841.94"
          fill="#3271cc"
        />
        <polygon
          id="uuid-45fbe57c-bf4e-4279-9bdc-2530e82e6629"
          data-code="45"
          points="1917.17 1987.88 1917.22 2002.92 1861.96 2004.09 1862.06 1988.32 1770.07 1986.2 1770.07 2119.73 2044.44 2119.73 2044.44 1988.88 1917.17 1987.88"
          fill="#3271cc"
        />
        <polygon
          id="uuid-0a762a10-3c8f-48fb-a29f-66f9ae79ab82"
          data-code="46"
          points="1918 2127.09 2045.44 2128.31 2045.47 2398.14 1918 2396.93 1918 2127.09"
          fill="#3271cc"
        />
        <polygon
          id="uuid-87d7a00d-6377-46b4-895f-7bf34af35ed3"
          data-code="47"
          points="1907.51 2214.74 1877.85 2214.84 1878.12 2270.39 1907.51 2270.26 1907.51 2396.96 1772.07 2396.96 1772.07 2127.2 1907.51 2127.2 1907.51 2214.74"
          fill="#3271cc"
        />
        <polygon
          id="uuid-4ba69d3f-604a-4b14-bfac-c9b3136a94bf"
          data-code="48"
          points="1761.71 2128.24 1639.81 2127.03 1639.89 2396.96 1761.71 2396.96 1761.71 2128.24"
          fill="#3271cc"
        />
        <polygon
          id="uuid-2f67d9e8-fb45-451d-a2aa-bbe2bfaa7e43"
          data-code="49"
          points="1629.62 2269.56 1351.68 2269.03 1351.43 2395.07 1629.62 2395.96 1629.62 2269.56"
          fill="#3271cc"
        />
        <polygon
          id="uuid-1dd56a01-1cf0-4b89-a233-4bb392b3396c"
          data-code="50"
          points="1630.62 1991.3 1499.64 1991.44 1499.64 2261.13 1599.66 2261.39 1599.37 2215.48 1630.62 2215.89 1630.62 1991.3"
          fill="#3271cc"
        />
        <polygon
          id="uuid-e4941b05-3807-4f96-b252-b05fac8d8429"
          data-code="51"
          points="1488.18 1991.3 1352.31 1991.3 1351.04 2261.13 1488.18 2261.23 1488.18 1991.3"
          fill="#3271cc"
        />
        <polygon
          id="uuid-c684f7f5-1506-457c-ac9d-df63103b564a"
          data-code="52"
          points="1344.4 1990.3 1074.55 1990.3 1074.55 2116.71 1344.4 2116.75 1344.4 1990.3"
          fill="#3271cc"
        />
        <polygon
          id="uuid-2a502a11-a88b-43d1-8fdd-ef35195c128e"
          data-code="53"
          points="1344.35 2128.15 1344.35 2192.85 1286.37 2193.01 1286.51 2260.2 1074.55 2260.2 1074.55 2128.15 1344.35 2128.15"
          fill="#3271cc"
        />
        <polygon
          id="uuid-582acf43-e570-4b4b-b363-d0d09cdb9ed6"
          data-code="54"
          points="1343.22 2270.74 1073.46 2269.53 1073.5 2395.8 1343.07 2396.91 1343.22 2270.74"
          fill="#3271cc"
        />
        <polygon
          id="uuid-8a02d828-8916-43e1-8101-6f5c2b607c03"
          data-code="55"
          points="1482.05 2405.39 1235.14 2405.39 1235.02 2444.1 1212.77 2444.14 1212.48 2683.14 1481.7 2682.76 1482.05 2405.39"
          fill="#3271cc"
        />
        <polygon
          id="uuid-b7054da4-ac3c-458c-924a-8aae07c3aebc"
          data-code="56"
          points="1179.34 2405.39 1179.13 2444.07 1202.12 2444.07 1201.08 2683.14 1074.17 2683.16 1074.44 2405.39 1179.34 2405.39"
          fill="#3271cc"
        />
        <polygon
          id="uuid-91b8a201-cc29-4e07-a6cf-65bad595ff00"
          data-code="57"
          points="1480.07 2692.54 1349.14 2692.54 1347.98 2917.96 1480.07 2917.98 1480.07 2692.54"
          fill="#3271cc"
        />
        <polygon
          id="uuid-f26c78fd-5bbc-4de3-9275-052bf3939835"
          data-code="58"
          points="1480.15 2973.54 1479.97 3386.87 1348.06 3385.79 1349.17 2973.54 1480.15 2973.54"
          fill="#3271cc"
        />
        <polygon
          id="uuid-767a56e7-99fc-4f88-9c6a-7a8802b25bf8"
          data-code="59"
          points="1339.79 2973.7 1338.75 3188.91 1309.09 3188.78 1309.02 3244.67 1338.55 3244.67 1338.75 3384.72 1212.14 3384.72 1212.21 2973.69 1339.79 2973.7"
          fill="#3271cc"
        />
        <polygon
          id="uuid-6a232bad-e74c-4675-9c4f-e91dcc745e52"
          data-code="60"
          points="1200.8 2973.66 1200.8 3095.48 1156.25 3095.56 1156.29 3136.41 1200.8 3136.41 1200.8 3384.72 1073.33 3384.72 1074.41 2973.66 1200.8 2973.66"
          fill="#3271cc"
        />
        <polygon
          id="uuid-26f3bc33-f810-4e7a-b8d3-8f3cea25a712"
          data-code="61"
          points="713.75 2693.1 916.34 2693.1 916.34 2983.25 713.75 2983.25 713.75 2835.36 758.26 2835.57 758.16 2779.64 713.75 2779.44 713.75 2693.1"
          fill="#3271cc"
        />
        <polygon
          id="uuid-fc00d2ef-8085-4191-952a-3592ed0c727e"
          data-code="62"
          points="702.26 2508.58 703.98 2778.71 668.79 2778.71 667 2835.38 702.39 2835.33 702.36 2983.32 508.77 2983.32 508.77 2508.5 702.26 2508.58"
          fill="#3271cc"
        />
        <polygon
          id="uuid-61aa7a6a-4ed3-4b4e-9ea5-e264c1a90b7d"
          data-code="63"
          points="916.34 2508.58 758.14 2508.58 758.18 2597.45 713.75 2597.39 713.75 2681.61 916.34 2682.31 916.34 2508.58"
          fill="#3271cc"
        />
        <polygon
          id="uuid-08a28c2b-344a-4bb4-8b3f-82ad3296987c"
          data-code="64"
          points="2041.77 3105.67 2042.82 3246.06 1626.5 3244.58 1626.5 3104.76 2041.77 3105.67"
          fill="#3271cc"
        />
        <polygon
          id="uuid-c778e576-0ae7-4268-ab87-c953e3a4003b"
          data-code="65"
          points="2042.82 3256.38 2042.82 3417.57 1715.76 3417.57 1715.76 3372.87 1626.13 3372.87 1626.13 3256.38 2042.82 3256.38"
          fill="#3271cc"
        />
        <polygon
          id="uuid-ba5714ec-a763-4874-8640-efe2518967e1"
          data-code="66"
          points="2042.55 3427.82 2042.55 3613.82 1626.5 3613.35 1626.13 3428.09 2042.55 3427.82"
          fill="#3271cc"
        />
      </svg>
      {hoveredUnit && (
        <div
          style={{
            top: position.y + 20,
            left: position.x + 20,
            position: "absolute",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px #434343",
            width: "200px",
            height: "auto",
            background: "#434343",
          }}
        >
          <div className="">
            <div className="rowDetails">
              <p>Unit {hoveredUnit.code || 0} :</p>
              <p
                className={`status ${
                  hoveredUnit.status.toLowerCase() === "available"
                    ? "Available"
                    : ""
                }`}
              >
                {hoveredUnit.status}
              </p>
            </div>
          </div>
          <div className="rowDetails">
            <p> Unit Type :</p>
            <p>Clinical</p>
          </div>
          <div className="rowDetails">
            <p>Area :</p>
            <p>{hoveredUnit.area} M²</p>
          </div>
          <div className="rowDetails">
            <p>Price :</p>
            <p>{hoveredUnit.price} EGP</p>
          </div>

          <button className="  btnCallBack">Callback</button>
        </div>
      )}
    </div>
  );
}
