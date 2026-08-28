import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="p-6 text-center border border-red-300 max-w-xs mx-auto rounded">
      <h1 className="text-3xl font-bold text-red-600 mb-2">404</h1>
      <p className="mb-4">Halaman tidak ditemukan.</p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
      >
        [ Kembali ke Dashboard ]
      </Link>
    </div>
  );
}