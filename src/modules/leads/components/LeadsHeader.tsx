import { Upload } from "lucide-react";
import Button from "@/components/ui/Button";
const LeadsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Leads</h1>

        <p className="mt-1 text-slate-500">Manage and track your sales leads</p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          className="rounded-xl border flex border-slate-200 gap-2 bg-white px-4 py-3 font-medium text-slate-700 hover:bg-slate-50"
        >
          <Upload />
          Export
        </Button>

        <Button className="rounded-xl bg-blue-600 px-3 py-3 font-medium text-white hover:bg-blue-700">
          + Add Lead
        </Button>
      </div>
    </div>
  );
};

export default LeadsHeader;
