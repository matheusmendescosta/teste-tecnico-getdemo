"use client";

import { FrameDTO } from "@/dto/FrameDto";
import Container from "@/ui/Container";
import { MiniCardFrame } from "@/ui/MiniCardFrame";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import useFrames from "./use-frames";
import { useUpdateFrame } from "./use-update-frame";

export const FramesSection = ({ demoId }: { demoId: string }) => {
  const { frames } = useFrames({ demoId });
  const { handleSaveChanges } = useUpdateFrame();
  const [selectedFrame, setSelectedFrame] = useState<FrameDTO | null>(null);

  const getEditedHTML = () => {
    const iframe = document.getElementById("frame-preview") as HTMLIFrameElement;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      return doc?.body.innerHTML || "";
    }
    return "";
  };

  const handleFrameSelect = (frame: FrameDTO) => {
    setSelectedFrame(frame);
  };

  useEffect(() => {
    if (selectedFrame) {
      const iframe = document.getElementById("frame-preview") as HTMLIFrameElement;
      if (iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(selectedFrame.html);
          doc.close();

          const script = doc.createElement("script");
          script.textContent = `
            document.body.addEventListener('dblclick', function(event) {
              const element = event.target;
              if (element.nodeType === Node.ELEMENT_NODE) {
                element.contentEditable = true;
                element.focus();
              }
            });

            document.body.addEventListener('blur', function(event) {
              const element = event.target;
              if (element.nodeType === Node.ELEMENT_NODE) {
                element.contentEditable = false;
              }
            }, true);
          `;
          doc.head.appendChild(script);
        }
      }
    }
  }, [selectedFrame]);

  return (
    <Container>
      <div className="mt-12">
        <h1 className="text-4xl font-bold">Frames</h1>
      </div>
      <div className="flex flex-grow h-full mt-8">
        <div className="-w-lvw">
          <MiniCardFrame frames={frames} onFrameSelect={handleFrameSelect} />
        </div>
        <div className="flex-grow ml-2">
          <h3 className="text-2xl font-semibold mb-2">Visualização do Frame</h3>
          <iframe id="frame-preview" className="w-full h-[calc(100vh-250px)] border" />
          {selectedFrame && (
            <Button onClick={() => handleSaveChanges(selectedFrame, getEditedHTML)} className="mt-2">
              Editar Frame
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};
