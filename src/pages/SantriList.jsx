import { Link } from "react-router";
import santriData from "../data/santriData"; // Gunakan 'data' huruf kecil

export default function SantriList() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Daftar Santri</h2>
      <ul className="space-y-2">
        {santriData.map((santri) => (
          <li key={santri.id} className="border p-2 rounded hover:bg-gray-100">
            <Link to={`/santri/${santri.id}`} className="text-blue-600 block">
              {santri.nama} - Kelas {santri.kelas}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}