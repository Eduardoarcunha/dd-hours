import { NextResponse } from 'next/server';
import Papa from 'papaparse';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: 'ID query parameter is required.' },
      { status: 400 }
    );
  }

  const csvUrl = process.env.CSV_URL;
  if (!csvUrl) {
    return NextResponse.json(
      { error: 'CSV URL is not configured.' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(csvUrl);
    if (!res.ok) {
      throw new Error('Error fetching CSV data.');
    }
    const csvText = await res.text();

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    const record = parsed.data.find((row: any) => row.matricula === id);

    if (!record) {
      return NextResponse.json(
        { error: 'Matrícula não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ record });
  } catch (error) {
    console.error("Error fetching CSV:", error);
    return NextResponse.json(
      { error: 'Failed to fetch CSV data.' },
      { status: 500 }
    );
  }
}
