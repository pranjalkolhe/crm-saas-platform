import { useMemo, useState } from "react";

import { leads } from "../data/leads.data";

const useLeads = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [source, setSource] = useState("All");

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
  }, [search, status, source, sort]);

  return {
    search,
    setSearch,
    status,
    setStatus,
    sort,
    setSort,
    leads: filteredLeads,
    source,
    setSource,
  };
};

export default useLeads;
