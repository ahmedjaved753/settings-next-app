// currently we have only one role and status in our design but I'm creating enums
// for these assuming that when our app scales there will be more roles and statuses
// so it make more sense to create enums for these

enum RolesEnum {
  Validated = "Validated",
}

enum StatusEnum {
  Validated = "Validated",
}

const tableConfig = [
  {
    entityName: "mycompany@company.com",
    countryCode: "us",
    roles: [RolesEnum.Validated, RolesEnum.Validated, RolesEnum.Validated],
    status: StatusEnum.Validated, // assuming that status will have only one batch in the table
    countryName: "USA",
  },
];

export default tableConfig;
