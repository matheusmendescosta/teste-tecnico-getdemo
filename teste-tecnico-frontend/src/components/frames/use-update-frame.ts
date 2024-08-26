import { FrameDTO } from "@/dto/FrameDto";
import { useRouter } from "next/navigation";

export const useUpdateFrame = () => {
  const router = useRouter();

  const handleSaveChanges = async (selectedFrame: FrameDTO | null, getEditedHTML: () => string) => {
    if (selectedFrame) {
      const updatedHTML = getEditedHTML();

      const response = await fetch(`http://localhost:3001/frame/${selectedFrame.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html: updatedHTML }),
      });

      if (response.ok) {
        router.push("/dashboard/demos");
      } else {
        console.error("Erro ao atualizar o frame");
      }
    }
  };

  return {
    handleSaveChanges,
  };
};
