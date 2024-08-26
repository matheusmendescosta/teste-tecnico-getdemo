import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="pt-8 min-h-screen">{children}</div>;
}
