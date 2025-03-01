import { useState } from "react";

interface DateSelectorProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  const currentMonth = today.getMonth(); // 0-11 (January = 0)
  const currentYear = today.getFullYear();

  const todayDate = today.getDate(); // Get today's date (1-31)
  
  // Calculate next 6 days including today
  const upcomingDays = Array.from({ length: 7 }, (_, i) => {
    const nextDay = new Date(today);
    nextDay.setDate(todayDate + i);
    return nextDay;
  });

  // Filter out the available dates (example: every Monday & Friday)
  const availableDates = upcomingDays.filter(date => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 1 || dayOfWeek === 5; // Available on Mondays & Fridays
  });
  const professionals = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  const [selectedProfessional, setSelectedProfessional] = useState<string>("");

  return (
    <div className="flex">
        <div className="w-auto p-4">
        
         
          <div className="bg-gray-100 p-2 rounded-lg  drop-shadow w-3/5 ">
          
          
          <select
            id="professional-select"
            value={selectedProfessional}
            onChange={(e) => setSelectedProfessional(e.target.value)}
            className="text-lg font-semibold mb-4 block w-full text-center  border-gray-300 focus:outline-none sm:text-sm rounded-md "
          >
            <option value="">Any professional</option>
            {professionals.map((professional) => (
              <option key={professional.id} value={professional.id}>
                {professional.name}
              </option>
            ))}
          </select>
        
      </div>
      <h2 className="pt-3 text-lg font-semibold mb-4">
        {today.toLocaleString("default", { month: "long" })} {currentYear}
      </h2>

      {/* Calendar Grid */}
      <div className=" grid grid-cols-7 gap-2  ">
        {upcomingDays.map((date) => {
          const isAvailable = availableDates.some(availableDate => availableDate.getTime() === date.getTime());
          const isToday = date.toDateString() === today.toDateString(); // Check if it's today
          const isPast = date < today; // Disable past dates

          return (
            <button
              key={date.toDateString()}
              onClick={() => isAvailable && !isPast && setSelectedDate(date.getDate().toString())}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-all
                ${isAvailable && !isPast ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}
                ${selectedDate === date.getDate().toString() ? "bg-purple-950 text-white" : "bg-gray-200 text-black"}
                ${isToday ? "border-2 bg-purple-800" : ""}
              `}
              disabled={!isAvailable || isPast} // Prevent clicking past dates
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
    
    </div>
  );
};

export default DateSelector;
