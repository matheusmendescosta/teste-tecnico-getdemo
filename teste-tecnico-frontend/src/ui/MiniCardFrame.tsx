"use client";

import { FrameDTO } from "@/dto/FrameDto";

type MiniCardFrameProps = {
  frames: FrameDTO[];
  onFrameSelect: (frame: FrameDTO) => void;
};

export const MiniCardFrame = ({ frames, onFrameSelect }: MiniCardFrameProps) => {
  const sortedFrames = [...frames].sort((a, b) => a.order - b.order);

  return (
    <div className="fixed top-0 bottom-0 right-0 h-screen w-64 overflow-y-auto bg-white border-l border-gray-200">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Lista de Frames</h3>
        <ul>
          {sortedFrames.map((frame, index) => {
            return (
              <li key={index} className="mb-2">
                <p className="text-base text-center font-bold">Frame {index + 1}</p>

                <div className="flex-col justify-between mt-2">
                  <button type="button" onClick={() => onFrameSelect(frame)}>
                    <img src="/frame.png" className="w-full h-auto" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
