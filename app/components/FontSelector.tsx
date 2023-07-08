"use client";
import { useFontStore } from "@/store/FontStore";
import { Select, SelectItem } from "@tremor/react";

function FontSelector() {
  const [font, setFont] = useFontStore((state) => [state.font, state.setFont]);
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select value={font} onValueChange={setFont}>
        <SelectItem value="serif">Serif</SelectItem>
        <SelectItem value="mono">Mono</SelectItem>
        <SelectItem value="nunito">Nunito</SelectItem>
      </Select>
    </div>
  );
}

export default FontSelector;
