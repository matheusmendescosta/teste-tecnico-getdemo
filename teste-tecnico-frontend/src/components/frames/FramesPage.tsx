import { FramesSection } from "./FramesSection";

type FramesPageProps = {
  demoId: string;
};

export const FramesPage = ({ demoId }: FramesPageProps) => {
  return <FramesSection demoId={demoId} />;
};
