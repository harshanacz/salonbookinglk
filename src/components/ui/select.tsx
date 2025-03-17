import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export function Select({ children, ...props }: SelectPrimitive.SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectTrigger />
      <SelectContent>{children}</SelectContent>
    </SelectPrimitive.Root>
  );
}

export function SelectTrigger() {
  return (
    <SelectPrimitive.Trigger className="border rounded p-2 flex items-center justify-between">
      <SelectPrimitive.Value placeholder="Select an option" />
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.Trigger>
  );
}

export function SelectValue() {
  return<>
  <SelectPrimitive.Value />
  <SelectPrimitive.Value placeholder="Select an option" />
  </> 
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="border rounded p-2 bg-white shadow-md">
        {children}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <SelectPrimitive.Item value={value} className="p-2 cursor-pointer hover:bg-gray-200">
      {children}
    </SelectPrimitive.Item>
  );
}
