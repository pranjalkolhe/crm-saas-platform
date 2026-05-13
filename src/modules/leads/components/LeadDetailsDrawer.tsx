import { Building2, Mail, Phone, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

type LeadDetailsDrawerProps = {
  open: boolean;
  onClose: () => void;
  lead: any;
};

const LeadDetailsDrawer = ({ open, onClose, lead }: LeadDetailsDrawerProps) => {
  return (
    <AnimatePresence>
      {open && lead && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[420px] flex-col border-l border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-200 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-600">
                  {lead.initials}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {lead.name}
                  </h2>

                  <p className="text-sm text-slate-500">{lead.company}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl p-2 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 space-y-8 overflow-y-auto p-6">
              {/* Contact */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-slate-400" />

                    <span className="text-sm text-slate-700">{lead.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-slate-400" />

                    <span className="text-sm text-slate-700">
                      +91 98765 43210
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Building2 size={18} className="text-slate-400" />

                    <span className="text-sm text-slate-700">
                      {lead.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Deal Info */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Deal Information
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">Deal Value</p>

                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                      {lead.value}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">Status</p>

                    <h4 className="mt-2 text-lg font-semibold text-blue-600">
                      {lead.status}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Recent Activities
                </h3>

                <div className="space-y-5">
                  {[
                    "Proposal sent to client",
                    "Meeting scheduled",
                    "Follow-up email sent",
                    "Lead created from website",
                  ].map((activity) => (
                    <div key={activity} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />

                      <p className="text-sm text-slate-600">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadDetailsDrawer;
