import { MoreVertical } from "lucide-react";
import { ChevronDown, Filter, Search } from "lucide-react";
import { leads } from "../data/leads.data";
import { statusColors } from "../utils/statusColors";

const LeadsTable = () => {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search leads..."
                className="h-14 rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />
            </div>

            <button className="flex h-14 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 font-medium text-slate-700 transition hover:bg-slate-50">
              <Filter size={16} />
              Status
              <ChevronDown size={16} />
            </button>

            <button className="flex h-14 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 font-medium text-slate-700 transition hover:bg-slate-50">
              <Filter size={16} />
              Source
              <ChevronDown size={16} />
            </button>
          </div>

          <button className="flex h-14 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 font-medium text-slate-700 transition hover:bg-slate-50">
            Sort: Newest
            <ChevronDown size={16} />
          </button>
        </div>

        <table className="min-w-[1200px] w-full border-collapse">
          <thead className="border-y border-slate-200 bg-slate-50">
            <tr className="border-b border-slate-100 transition-all hover:bg-blue-50/40">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Company
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Source
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Owner
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Deal Value
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Created
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-slate-100 transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                      {lead.initials}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        {lead.name}
                      </p>

                      <p className="text-sm text-slate-400 uppercase tracking-wide">
                        {lead.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 font-medium text-slate-700">
                  {lead.company}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${statusColors[lead.status]}`}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-slate-600">{lead.source}</td>

                <td className="px-6 py-5 text-slate-600">{lead.owner}</td>

                <td className="px-6 py-5 font-semibold text-slate-700">
                  {lead.value}
                </td>

                <td className="px-6 py-5 text-slate-400 uppercase tracking-wide">
                  {lead.createdAt}
                </td>

                <td className="px-6 py-5">
                  <button className="rounded-lg p-2 hover:bg-slate-100">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
