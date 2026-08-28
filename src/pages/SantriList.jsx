import { Link } from "react-router";
import santriData from "../Data/santriData";

export default function SantriList() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Daftar Santri</h2>
      <div className="space-y-4">
        {santriData.map((santri) => (
          <div key={santri.id} className="border border-gray-300 p-3 rounded">
            <h3 className="font-semibold text-lg">{santri.nama}</h3>
            <p className="text-gray-600">Kelas {santri.kelas}</p>
            <Link
              to={`/santri/${santri.id}`}
              className="inline-block mt-2 bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
            >
              [ Detail ]
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}