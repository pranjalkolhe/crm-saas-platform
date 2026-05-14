import { MoreVertical } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";
import useLeads from "../hooks/useLeads";
import { statusColors } from "../utils/statusColors";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import LeadDetailsDrawer from "./LeadDetailsDrawer";
import FilterDropdown from "@/components/ui/FilterDropdown";
import AddLeadModal from "./AddLeadModal";

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
    page,
    setPage,
    totalPages,
    totalLeads,
  } = useLeads();
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [editLead, setEditLead] = useState<any>(null);
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div className="flex items-center  gap-4">
            <div className="relative mt-4">
              <Search
                size={18}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400"
              />

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search leads..."
                className="pl-12"
              />
            </div>

            <div className="p-0">
              <label className="mb-1 block text-xs text-center font-semibold uppercase tracking-wider text-slate-400">
                Status
              </label>

              <FilterDropdown
                value={status}
                onChange={setStatus}
                options={["All", "Qualified", "Proposal", "Negotiation", "Won"]}
              />
            </div>
            <div>
              <label className="mb-1 block text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                Source
              </label>

              <FilterDropdown
                value={source}
                onChange={setSource}
                options={["All", "Website", "Referral", "Cold Email", "Event"]}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 text-center block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sort By
            </label>

            <FilterDropdown
              value={sort}
              onChange={setSort}
              options={["Newest", "Oldest"]}
            />
          </div>
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

              <th className="px-5 py-3 text-left text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Actions
              </th>
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
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="cursor-pointer rounded-lg p-2 transition hover:bg-slate-100"
                    >
                      <MoreVertical size={18} className="text-slate-500" />
                    </button>

                    <button
                      onClick={() => setEditLead(lead)}
                      className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-5">
          {/* Left */}
          <p className="text-sm text-slate-500">
            Showing page{" "}
            <span className="font-semibold text-slate-700">{page}</span> of{" "}
            <span className="font-semibold text-slate-700">{totalPages}</span>
          </p>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition ${
                  page === index + 1
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <LeadDetailsDrawer
        open={!!selectedLead}
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
      <AddLeadModal
        open={!!editLead}
        editLead={editLead}
        onClose={() => setEditLead(null)}
      />
    </Card>
  );
};

export default LeadsTable;
