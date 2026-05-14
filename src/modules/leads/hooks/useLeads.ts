import { useEffect, useMemo, useState } from "react";
import useLeadStore from "@/store/useLeadStore";

const PAGE_SIZE = 5;

const useLeads = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [source, setSource] = useState("All");
  const [page, setPage] = useState(1);
  const { leads } = useLeadStore();

  // Filter + Sort
  const filteredLeads = useMemo(() => {
    let filtered = [...leads];

    // Search
    if (search) {
      filtered = filtered.filter((lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Status Filter
    if (status !== "All") {
      filtered = filtered.filter((lead) => lead.status === status);
    }

    // Source Filter
    if (source !== "All") {
      filtered = filtered.filter((lead) => lead.source === source);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sort === "Newest") {
        return b.id - a.id;
      }

      return a.id - b.id;
    });

    return filtered;
  }, [leads, search, status, source, sort]);

  // Total Pages
  const totalPages = Math.ceil(filteredLeads.length / PAGE_SIZE);

  // Pagination
  const paginatedLeads = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;

    return filteredLeads.slice(start, start + PAGE_SIZE);
  }, [filteredLeads, page]);

  // Reset page on filter change
  useEffect(() => {
    setPage(1);
  }, [search, status, source]);

  return {
    search,
    setSearch,

    status,
    setStatus,

    sort,
    setSort,

    source,
    setSource,

    page,
    setPage,

    totalPages,

    totalLeads: filteredLeads.length,

    leads: paginatedLeads,
  };
};

export default useLeads;
