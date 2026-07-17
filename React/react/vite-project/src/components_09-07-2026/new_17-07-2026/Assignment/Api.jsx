export async function getPatients() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  return data.map(patient => ({
    id: patient.id,
    name: patient.name,
    email: patient.email,
    phone: patient.phone,
    doctor: "Not Assigned",
    status: "Waiting"
  }));
}