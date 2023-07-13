"use client";
import { useFontStore } from "@/store/FontStore";
import { Select, SelectItem } from "@tremor/react";
import { useEffect } from "react";

function FontSelector() {
  const [font, setFont] = useFontStore((state) => [state.font, state.setFont]);

  useEffect(() => {
    if (font === "serif") {
      document.body.classList.add("font-serif");
      document.body.classList.remove("font-mono");
      document.body.classList.remove("font-nunito");
    } else if (font === "mono") {
      document.body.classList.add("font-mono");
      document.body.classList.remove("font-serif");
      document.body.classList.remove("font-nunito");
    } else {
      document.body.classList.add("font-nunito");
      document.body.classList.remove("font-serif");
      document.body.classList.remove("font-mono");
    }
  }, [font]);

  return (
    <div className={`max-w-sm mx-auto space-y-6`}>
      <Select value={font} onValueChange={setFont}>
        <SelectItem value="serif">Serif</SelectItem>
        <SelectItem value="mono">Mono</SelectItem>
        <SelectItem value="nunito">Nunito</SelectItem>
      </Select>
    </div>
  );
}

export default FontSelector;
