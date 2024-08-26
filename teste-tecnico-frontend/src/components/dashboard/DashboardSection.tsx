"use client";

import Container from "@/ui/Container";
import React from "react";
import useDemos from "./use-demos";
import { Card } from "@/ui/Card";

export const DashboardSection = () => {
  const { demos } = useDemos();

  return (
    <Container>
      <div className="mt-12">
        <h1 className="text-4xl font-bold">Olá</h1>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">Minhas demos</h3>
        <p className="text-lg">Aqui você acessa todas as suas demos</p>

        {demos.map((demo) => (
          <div key={demo.id}>
            <Card title={demo.name} href={`/dashboard/demos/${demo.id}/frames`} />
          </div>
        ))}
      </div>
    </Container>
  );
};
