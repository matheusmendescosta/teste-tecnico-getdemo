import { FramesPage } from "@/components/frames/FramesPage";

const Page = ({ params }: { params: { demo_id: string } }) => {
  return <FramesPage demoId={params.demo_id} />;
};

export default Page;
