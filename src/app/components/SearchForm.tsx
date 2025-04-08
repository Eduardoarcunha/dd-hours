import React from "react";

type SearchFormProps = {
    inputId: string;
    setInputId: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

export default function SearchForm({
    inputId,
    setInputId,
    handleSubmit,
}: SearchFormProps) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Relative container for icon + input */}
            <div className="relative">
                {/* Search Icon */}
                <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.873-4.873m0 0A7.499 7.499 0 003.513 3.513a7.499 7.499 0 0012.614 12.614z"
                    />
                </svg>
                {/* Search input */}
                <input
                    type="number"
                    value={inputId}
                    onChange={(e) => setInputId(e.target.value)}
                    placeholder="Número de matrícula..."
                    className="w-full pl-10 pr-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-100 transition-colors"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors"
            >
                Pesquisar
            </button>
        </form>
    );
}
