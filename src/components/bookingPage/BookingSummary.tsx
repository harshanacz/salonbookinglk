import React from "react";

interface Props {
  selectedTime: string;
}

export default function BookingSummary({ selectedTime }: Props) {
  if (!selectedTime) return null;

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md">
      <h3 className="font-bold text-lg">Saloon Dmesh</h3>
      <p className="text-gray-500">Wednesday 13 December</p>

      <div className="mt-2">
        <p>Layer Hair Cut - LKR 7,000</p>
        <p>Scalp Anti-Dandruff Treatment - LKR 1,000</p>
      </div>

      <hr className="my-2" />
      <p className="font-bold">Total: LKR 8,000</p>
    </div>
  );
}