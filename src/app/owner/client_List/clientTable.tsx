// import useSWR from "swr";
// import { fetchClients } from "../services/clientService";
// import { Client } from "../types/Client";

// const ClientTable: React.FC = () => {
//  const { data: clients, error } = useSWR<Client[]>("/api/clients", fetchClients);

//   if (error) return <div className="text-red-500">Failed to load data</div>;
//   if (!clients) return <div>Loading...</div>;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Clients List</h1>
//       <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Client Name</th>
//               <th className="p-2 text-left">Email</th>
//               <th className="p-2 text-left">Mobile Number</th>
//               <th className="p-2 text-left">Reviews</th>
//               <th className="p-2 text-left">Sales</th>
//               <th className="p-2 text-left">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client) => (
//               <tr key={client._id} className="border-t">
//                 <td className="p-2">{client.name}</td>
//                 <td className="p-2">{client.email}</td>
//                 <td className="p-2">{client.mobileNumber || "-"}</td>
//                 <td className="p-2">{client.reviews}</td>
//                 <td className="p-2">{client.sales}</td>
//                 <td className="p-2">{new Date(client.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ClientTable;

import React from 'react'

const clientTable = () => {
  return (
    <div>clientTable</div>
  )
}

export default clientTable