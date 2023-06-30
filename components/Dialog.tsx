import { type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type RenameCompanyDialogPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const RenameCompanyDialog = ({
  isOpen,
  onClose,
}: RenameCompanyDialogPropsType): ReactElement => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
          <Button
            onClick={onClose}
            className="bg-transparent text-black"
            variant="outline"
          >
            Cancel
          </Button>
          <Button type="submit" className="bg-indigo-500 hover:bg-indigo-500">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RenameCompanyDialog;
