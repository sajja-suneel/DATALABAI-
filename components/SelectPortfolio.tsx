"use client";

import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectPortfolio() {

  const router = useRouter();

  const handleChange = (value: string) => {

    if (value === "suneel") {
      router.push("/suneel");
    }

    if (value === "nandhana") {
      router.push("/nandhana");
    }

    if (value === "sathvik") {
      router.push("/sathvik");
    }
  };

  return (

    <div className="flex justify-center">

      <Select onValueChange={handleChange}>

        <SelectTrigger className="w-[350px] h-16 rounded-full bg-zinc-900 border border-cyan-500 text-white text-xl">

          <SelectValue placeholder="Which Portfolio You Want?" />

        </SelectTrigger>

        <SelectContent className="bg-zinc-900 border border-zinc-700 text-white">

          <SelectGroup>

            <SelectLabel className="text-cyan-400">
              Datalab AI Interns
            </SelectLabel>

            <SelectItem value="suneel">
              Suneel Sajja
            </SelectItem>

            <SelectItem value="nandhana">
              Nandhana
            </SelectItem>

            <SelectItem value="sathvik">
              Sathvik Yadav
            </SelectItem>

          </SelectGroup>

        </SelectContent>

      </Select>

    </div>
  );
}