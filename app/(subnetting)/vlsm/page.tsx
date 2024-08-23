"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LayoutList } from "lucide-react";
import { useState } from "react";

export default function Vlsm() {
  const [subnets, setSubnets] = useState([{ numberOfHosts: "" }]);
  return (
    <div className="sm:p-10 p-5">
      <div className="w-full border bg-muted">
        <div className="sm:px-8 px-4 py-6 border-b">
          <p className="text-2xl font-medium flex justify-start items-center gap-4">
            <LayoutList className="text-muted-foreground size-9" />
            Variable Length Subnet Mask (VLSM)
          </p>
        </div>
        <div className="sm:p-8 p-4">
          <div className="flex flex-nowrap justify-start items-center gap-4">
            <p className="text-lg font-medium text-nowrap">Original network address : </p>
            <Input className="max-w-56" placeholder="0.0.0.0/0" />
          </div>
          <div className="mt-10 flex justify-between items-center gap-4">
            <Button variant="secondary" size="sm" onClick={() => setSubnets([...subnets, { numberOfHosts: "" }])}>
              Add subnet
            </Button>
            <p className="text-sm">Number of subnets : {subnets.length}</p>
          </div>
          <div>
            {subnets.map((subnet, index) => (
              <div
                key={index}
                className="mt-2 py-2 flex justify-between items-center gap-10 overflow-x-auto overflow-y-hidden"
              >
                <div className="flex justify-start items-center gap-4">
                  <p className="text-lg font-medium text-nowrap">Subnet N°{index + 1} how many hosts ? : </p>
                  <Input
                    className="w-16"
                    placeholder="0"
                    type="number"
                    value={subnet.numberOfHosts}
                    onChange={(e) => {
                      const temp = [...subnets];
                      temp[index] = { numberOfHosts: e.target.value };
                      setSubnets(temp);
                    }}
                  />
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    setSubnets((prevItems) => {
                      const newItems = [...prevItems];
                      newItems.splice(index, 1);
                      return newItems;
                    });
                  }}
                  className="bg-muted border-red-500 text-red-500 hover:text-red-700"
                  variant="outline"
                >
                  Delete
                </Button>
              </div>
            ))}
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
