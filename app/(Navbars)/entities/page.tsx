import PageHeader from "@/components/PageHeader";
import EntitiesTable from "@/components/Table";

function Entities() {
  return (
    <>
      <PageHeader
        heading="Entities"
        text="Manage all entities that are held within your company"
      />
      <EntitiesTable />
    </>
  );
}

export default Entities;
