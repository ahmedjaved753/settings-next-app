import Notifications from "@/components/Notifications";
import PageHeader from "@/components/PageHeader";

function page() {
  return (
    <>
      <PageHeader
        heading="Notifications"
        text="Remove notifications for relavent information outside the app"
      />
      <Notifications />
    </>
  );
}

export default page;
