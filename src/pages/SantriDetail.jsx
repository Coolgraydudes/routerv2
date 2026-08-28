import { useParams, Link } from "react-router";
import santriData from "../Data/santriData";

export default function SantriDetail() {
  const { id } = useParams();
  const santri = santriData.find((item) => item.id === Number(id));

  if (!santri) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Santri tidak ditemukan.</p>
        <Link to="/santri" className="text-blue-500 underline">
          Kembali ke Daftar Santri
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 border border-gray-300 max-w-xs mx-auto rounded">
      <h2 className="text-lg font-bold mb-3 border-b pb-1">Detail Santri</h2>
      <div className="space-y-1 font-mono mb-4">
        <p>ID : {santri.id}</p>
        <p>Nama : {santri.nama}</p>
        <p>Kelas : {santri.kelas}</p>
      </div>
      <Link
        to="/santri"
        className="inline-block bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600"
      >
        [ Kembali ]
      </Link>
    </div>
  );
}