"use client";

import { useCallback, useEffect, useState } from "react";
import { FrameDTO } from "@/dto/FrameDto";

export default function useFrames({ demoId }: { demoId: string }) {
  const [frames, setFrames] = useState<FrameDTO[]>([]);

  const loadDemos = useCallback(() => {
    fetch(`http://localhost:3001/demos/${demoId}/frames`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        return response.json();
      })
      .then((data) => {
        setFrames(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadDemos();
  }, [loadDemos]);

  return { frames, setFrames };
}
