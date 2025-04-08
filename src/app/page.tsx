"use client";
import { useState } from 'react';
import { fetchCsvDataById, DataRow } from '@/app/lib/csvFetcher';
import SearchForm from '@/app/components/SearchForm';
import ResultDisplay from '@/app/components/ResultDisplay';
import Image from 'next/image';

export default function Home() {
  const [inputId, setInputId] = useState('');
  const [result, setResult] = useState<DataRow | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const record = await fetchCsvDataById(inputId);
      setResult(record);
    } catch (err) {
      console.error(err);
      setError((err as Error).message || 'Algo deu errado, avise os diretores.');
    }
    setLoading(false);
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      {/* Branding Section */}
      <div className="text-center mb-8">
        <Image
          src="/logo.png" // Ensure your image is in the public folder
          alt="Company Logo"
          width={150}
          height={200}
          className="mx-auto mb-10"
        />
        <p className="text-black text-base font-medium">
          Olá, runner! Informe seu número de matrícula para verificar suas horas.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-11/12 md:w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-lg p-8">
        <SearchForm
          inputId={inputId}
          setInputId={setInputId}
          handleSubmit={handleSubmit}
        />
        {loading && <p className="text-center text-black mt-2">Carregando...</p>}
        {error && <p className="text-center text-red-500 mt-2">{error}</p>}
        {result && (
          <div className="mt-4">
            <ResultDisplay result={result} />
          </div>
        )}
      </div>
    </div>
  );
}
