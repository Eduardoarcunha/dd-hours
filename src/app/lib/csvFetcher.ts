export type DataRow = {
  matricula: string;
  nome: string;
  horas: string;
};

export async function fetchCsvDataById(id: string): Promise<DataRow> {
  const res = await fetch(`/api/csv?id=${encodeURIComponent(id)}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Error fetching CSV data from API.');
  }
  return data.record;
}
