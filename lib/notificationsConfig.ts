const notificationsConfig = [
  {
    heading: "Warnings",
    text: "Any new warnings accross any of your entities",
    switchText: "Email",
    checked: true,
    id: "warnings",
  },
  {
    heading: "Vendor Acceptance",
    text: "Whenever an entity is accepted for a vendor relationship",
    switchText: "Email",
    checked: false,
    id: "vender-acceptance",
  },
];

export default notificationsConfig;
