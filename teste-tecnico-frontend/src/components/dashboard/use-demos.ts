"use client";

import { useCallback, useEffect, useState } from "react";
import { DemoDTO } from "@/dto/DemoDto";

export default function useDemos() {
  const [demos, setDemos] = useState<DemoDTO[]>([]);

  const loadDemos = useCallback(() => {
    fetch("http://localhost:3001/demos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        return response.json();
      })
      .then((data) => {
        setDemos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadDemos();
  }, [loadDemos]);

  return { demos, setDemos };
}
