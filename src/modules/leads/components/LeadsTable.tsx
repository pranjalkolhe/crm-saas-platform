import { MoreVertical } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";
import useLeads from "../hooks/useLeads";
import { statusColors } from "../utils/statusColors";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import LeadDetailsDrawer from "./LeadDetailsDrawer";
import FilterDropdown from "@/components/ui/FilterDropdown";

const LeadsTable = () => {
  const {
    search,
    setSearch,
    status,
    setStatus,
    sort,
    setSort,
    leads,
    source,
    setSource,
  } = useLeads();
  const [selectedLead, setSelectedLead] = useState<any>(null);
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400"
              />

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads..."
                className="h-14 pl-12"
              />
            </div>

            <FilterDropdown
              value={status}
              onChange={setStatus}
              options={["All", "Qualified", "Proposal", "Negotiation", "Won"]}
            />

            <FilterDropdown
              value={source}
              onChange={setSource}
              options={["All", "Website", "Referral", "Cold Email", "Event"]}
            />
          </div>

          <FilterDropdown
            value={sort}
            onChange={setSort}
            options={["Newest", "Oldest"]}
          />
        </div>

        <table className=" w-full border-collapse">
          <thead className="border-y border-slate-200 bg-slate-50">
            <tr className="border-b border-slate-100 transition-all hover:bg-blue-50/40">
              <th className="w-[23%] px-4 py-3 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Name
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Company
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Status
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide ">
                Source
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Owner
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Deal Value
              </th>

              <th className="w-[80px] px-4 py-4 text-center">Actions</th>
            </tr>
          </thead>
          {leads.length === 0 && (
            <div className="flex h-72 flex-col items-center justify-center">
              <p className="text-lg font-semibold text-slate-700">
                No leads found
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Try changing filters or search query
              </p>
            </div>
          )}
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="cursor-pointer border-b border-slate-100 transition-all hover:bg-blue-50/40"
              >
                <td className="px-4 py-4">
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

                <td className="px-6 py-4 font-medium text-slate-700">
                  {lead.company}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${statusColors[lead.status]}`}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-600">{lead.source}</td>

                <td className="px-6 py-4 text-slate-600">{lead.owner}</td>

                <td className="px-6 py-4 font-semibold text-slate-700">
                  {lead.value}
                </td>

                <td className="min-w-0 px-4 py-4">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="flex w-full items-center gap-3 text-left cursor-pointer"
                  >
                    <MoreVertical size={18} className="text-slate-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LeadDetailsDrawer
        open={!!selectedLead}
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </Card>
  );
};

export default LeadsTable;
