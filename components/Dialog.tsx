import { forwardRef, type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const RenameCompanyDialog = forwardRef<HTMLButtonElement, {}>(
  (_, ref): ReactElement => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="invisible" ref={ref} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Rename Company</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.Make
              changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <Input id="name" className="w-full outline outline-indigo-500" />
          <DialogFooter>
            <Button className="bg-transparent text-black" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="bg-indigo-500 hover:bg-indigo-500">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
);

RenameCompanyDialog.displayName = "RenameCompanyDialog"; // Add displayName since this is usding farwardRedf

export default RenameCompanyDialog;
