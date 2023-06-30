"use client";

import { useState, type ReactElement } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import tableConfig from "@/lib/tableConfig";
import RenameCompanyDialog from "./Dialog";

export default function EntitiesTable(): ReactElement {
  // I was actually wrong, dialog actually does take a prop to open and close
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Levi&apos;s
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="inline ml-1" size="15" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p className="text-sm font-normal">
                  This is the&nbsp;
                  <small className="text-sm font-bold leading-none">
                    company
                  </small>
                  -- like a folder to group your things together. You can grant
                  permission to manage a specific entity, or all entities within
                  a company from the members tab.
                  <a className="text-blue-600 visited:text-purple-600" href="#">
                    Read more.
                  </a>
                </p>
              </HoverCardContent>
            </HoverCard>
          </CardTitle>
          <Separator className="my-4" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Entity</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableConfig.map((row) => (
                <TableRow
                  key={row.entityName}
                  // In a real world scenario I will use a react table component library
                  // like TanStack table or MUI grid so that it passes me the data of the
                  // row clicked i.e id so that I can make a put/patch request to API with
                  // theh upodated company name and company id
                  onClick={() => setIsOpen(true)}
                >
                  <TableCell className="font-medium">
                    <small className="text-sm font-medium leading-none">
                      My Entity name
                    </small>
                    <p className="text-sm text-muted-foreground">
                      {row.entityName}
                    </p>
                  </TableCell>
                  <TableCell className="flex">
                    <span className={`fi fi-${row.countryCode} mr-2`} />
                    {row.countryName}
                  </TableCell>
                  <TableCell>
                    {row.roles.map((role, i) => (
                      <Badge
                        className="bg-indigo-200 outline outline-indigo-500 text-indigo-700 ml-2"
                        variant="outline"
                        key={i}
                      >
                        &#x2022; {role}
                      </Badge>
                    ))}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className="bg-green-200 outline outline-green-500 text-green-700"
                      variant="outline"
                    >
                      &#x2022; {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <RenameCompanyDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
}
