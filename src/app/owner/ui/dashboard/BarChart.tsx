"use client"

import React from 'react';  
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';  

const Barchart = () => {  
  const data = [  
    { day: 'Mon', appointments: 3 },  
    { day: 'Tue', appointments: 5 },  
    { day: 'Wed', appointments: 2 },  
    { day: 'Thu', appointments: 4 },  
    { day: 'Fri', appointments: 6 },  
    { day: 'Sat', appointments: 1 },  
    { day: 'Sun', appointments: 3 },  
  ];  

  return (  
    <div className='flex flex-col items-center justify-center '>  
      <h2>Overall appointments</h2>  
      <BarChart width={400} height={200} data={data} barSize={15} >  
        <XAxis dataKey="day" />  
        <YAxis />  
        <Tooltip />  
        <Legend />  
        <Bar dataKey="appointments" fill="#6A0DAD" radius={[20, 20, 0, 0]} />  
      </BarChart>  
    </div>  
  );  
};  

export default Barchart;
