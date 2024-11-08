"use client";
import { TextGenerateEffect } from "../../@/components/ui/text-generate-effect";

export function TextGenerate({text, className}) {
  return <TextGenerateEffect words={text} className={className} />;
}
