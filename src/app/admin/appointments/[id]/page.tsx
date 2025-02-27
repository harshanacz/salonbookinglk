"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit } from "lucide-react";

type Appointment = {
  appointmentId: number;
  userName: string;
  salonName: string;
  email: string;
  orderService: string;
  dateSent: string;
  appointmentDate: string;
  appointmentTime: string;
  status: string;
};

export default function AppointmentDetails() {
  const { id: appointmentId } = useParams();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});
  const [editedAppointment, setEditedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    if (appointmentId) {
      fetch(`/appointments.json`)
        .then((res) => res.json())
        .then((data: Appointment[]) => {
          const selectedAppointment = data.find(
            (app) => app.appointmentId === Number(appointmentId)
          );
          setAppointment(selectedAppointment || null);
          setEditedAppointment(selectedAppointment || null);
        })
        .catch((error) => console.error("Error fetching appointment:", error));
    }
  }, [appointmentId]);

  const handleEditClick = (field: string) => {
    setIsEditing({ [field]: true });
  };

  const handleSaveClick = () => {
    setAppointment(editedAppointment);
    setIsEditing({});
  };

  const handleCancelClick = () => {
    setEditedAppointment(appointment);
    setIsEditing({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editedAppointment) {
      setEditedAppointment({
        ...editedAppointment,
        [e.target.name]: e.target.value,
      });
    }
  };

  if (!appointment) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-1">
      <Card className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-8">Appointment Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 font-semibold">
              <p>Client Name:</p>
              <p>Salon:</p>
              <p>Email:</p>
              <p>Order Service:</p>
              <p>Date Sent:</p>
              <p>Appointment Date:</p>
              <p>Appointment Time:</p>
              <p>Status:</p>
            </div>
            <div className="space-y-4">
              <p>{appointment.userName}</p>
              <p>{appointment.salonName}</p>
              <p>{appointment.email}</p>
              <p>{appointment.orderService}</p>
              <p>{appointment.dateSent}</p>
              <div className="flex items-center">
                {isEditing.appointmentDate ? (
                  <input
                    type="date"
                    name="appointmentDate"
                    value={editedAppointment?.appointmentDate}
                    onChange={handleChange}
                    className="border rounded"
                  />
                ) : (
                  <span>{appointment.appointmentDate}</span>
                )}
                <Edit className="ml-6 cursor-pointer h-4" onClick={() => handleEditClick("appointmentDate")} />
              </div>
              <div className="flex items-center">
                {isEditing.appointmentTime ? (
                  <input
                    type="time"
                    name="appointmentTime"
                    value={editedAppointment?.appointmentTime}
                    onChange={handleChange}
                    className="border rounded"
                  />
                ) : (
                  <span>{appointment.appointmentTime}</span>
                )}
                <Edit className="ml-6 cursor-pointer h-4" onClick={() => handleEditClick("appointmentTime")} />
              </div>
              <div className="flex items-center">
                {isEditing.status ? (
                  <select
                    name="status"
                    value={editedAppointment?.status}
                    onChange={handleChange}
                    className="border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                ) : (
                  <span>{appointment.status}</span>
                )}
                <Edit className="ml-6 cursor-pointer h-4" onClick={() => handleEditClick("status")} />
              </div>
            </div>
          </div>
        </CardContent>
        <div className="flex justify-end mt-4">
          {Object.keys(isEditing).length > 0 && (
            <>
              <Button
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
                onClick={handleSaveClick}
              >
                OK
              </Button>
              <Button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
