"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=nU73SduwHMOExHGiD8Yu`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data.country);
      });
  }, []);

  return <div>{country}</div>;
}
