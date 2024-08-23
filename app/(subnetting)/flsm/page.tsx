import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LayoutList } from "lucide-react";

export default function Flsm() {
  return (
    <div className="sm:p-10 p-5">
      <div className="w-full border bg-muted">
        <div className="sm:px-8 px-4 py-6 border-b">
          <p className="text-2xl font-medium flex justify-start items-center gap-4">
            <LayoutList className="text-muted-foreground size-9" />
            Fixed length subnet mask (FLSM)
          </p>
        </div>
        <div className="sm:p-8 p-4">
          <div className="flex flex-nowrap justify-start items-center gap-4">
            <p className="text-lg font-medium text-nowrap">Original network address : </p>
            <Input className="max-w-56" placeholder="0.0.0.0/0" />
          </div>
          <div className="mt-10 flex flex-wrap justify-start items-center gap-4">
            <p className="text-lg font-medium text-nowrap">How many subnets ? : </p>
            <Input className="max-w-16" placeholder="0" />
            <p className="px-4">Or</p>
            <p className="text-lg font-medium text-nowrap">How many hosts in subnet ? : </p>
            <Input className="max-w-16" placeholder="0" />
          </div>
          <div className="mt-10 flex justify-between items-center p-4 border border-b-0 rounded-t-md">
            <Button size="sm" className="h-8">
              Run
            </Button>
            <Button size="sm" variant="secondary" className="h-8">
              Copy
            </Button>
          </div>
          <Table className="border rounded-md">
            <TableHeader>
              <TableRow>
                <TableHead className="text-nowrap">Subnets</TableHead>
                <TableHead className="text-nowrap">Network address</TableHead>
                <TableHead className="text-nowrap">First host</TableHead>
                <TableHead className="text-nowrap">Last host</TableHead>
                <TableHead className="text-nowrap">Brodcast</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
