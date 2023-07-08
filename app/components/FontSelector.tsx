"use client";
import { Select, SelectItem } from "@tremor/react";
import { useState } from "react";

function FontSelector() {
  const [font, setFont] = useState("serif");
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select value={font} onValueChange={setFont}>
        <SelectItem value="serif">Serif</SelectItem>
        <SelectItem value="mono">Mono</SelectItem>
        <SelectItem value="sans-serif">Sans Serif</SelectItem>
      </Select>
    </div>
  );
}

export default FontSelector;
