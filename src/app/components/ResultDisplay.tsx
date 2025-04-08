import React from "react";
import { DataRow } from "@/app/lib/csvFetcher";

type ResultDisplayProps = {
    result: DataRow;
};

export default function ResultDisplay({ result }: ResultDisplayProps) {
    return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <p className="mb-1 text-black">
                <span className="font-semibold text-black">Nome:</span> {result.nome}
            </p>
            <p className="mb-1 text-black">
                <span className="font-semibold text-black">Número de Matrícula:</span> {result.matricula}
            </p>
            <p className="text-black">
                <span className="font-semibold text-black">Horas:</span> {result.horas}
            </p>
        </div>
    );
}
