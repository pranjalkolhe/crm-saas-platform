import LeadsHeader from "../components/LeadsHeader";
import LeadsStats from "../components/LeadsStats";
import LeadsTable from "../components/LeadsTable";

const LeadsPage = () => {
  return (
    <div className="space-y-6">
      <LeadsHeader />

      <LeadsStats />

      <LeadsTable />
    </div>
  );
};

export default LeadsPage;
