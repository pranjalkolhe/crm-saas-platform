import { create } from "zustand";

import { leads as initialLeads } from "@/modules/leads/data/leads.data";

export type Lead = {
  id: number;
  name: string;
  email: string;
  company: string;
  status: string;
  source: string;
  owner: string;
  value: string;
  initials: string;
};
type LeadStore = {
  leads: Lead[];

  addLead: (lead: Omit<Lead, "id">) => void;
  updateLead: (id: number, updatedLead: Partial<Lead>) => void;
};

const useLeadStore = create<LeadStore>((set) => ({
  leads: initialLeads,

  addLead: (lead) =>
    set((state) => ({
      leads: [
        {
          id: Date.now(),
          ...lead,
        },
        ...state.leads,
      ],
    })),
  updateLead: (id, updatedLead) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              ...updatedLead,
            }
          : lead,
      ),
    })),
}));

export default useLeadStore;
