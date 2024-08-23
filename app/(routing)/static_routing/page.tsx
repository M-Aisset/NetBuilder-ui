"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LayoutList } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function StaticRouting() {
  const [routes, setRoutes] = useState([{ network: "", option: "nextHop", nextHop: "", interface: "" }]);
  return (
    <div className="sm:p-10 p-5">
      <div className="w-full border bg-muted">
        <div className="sm:px-8 px-4 py-6 border-b">
          <p className="text-2xl font-medium flex justify-start items-center gap-4">
            <LayoutList className="text-muted-foreground size-9" />
            Static routing
          </p>
        </div>
        <div className="sm:p-8 p-4">
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                setRoutes([...routes, { network: "", option: "nextHop", nextHop: "", interface: "" }])
              }
            >
              Add route
            </Button>
            <p className="text-sm">Number of route : {routes.length}</p>
          </div>
          <div>
            {routes.map((route, index) => (
              <div className="mt-2 py-2 flex justify-between items-center gap-10 overflow-x-auto overflow-y-hidden">
                <div className="flex justify-start items-center gap-4">
                  <p className="text-lg font-medium text-nowrap">Route N°{index + 1} : </p>
                  <Input
                    className="w-56"
                    placeholder="0.0.0.0/0"
                    value={route.network}
                    onChange={(e) => {
                      const temp = [...routes];
                      temp[index] = {
                        network: e.target.value,
                        option: route.option,
                        nextHop: route.nextHop,
                        interface: route.interface,
                      };
                      setRoutes(temp);
                    }}
                  />
                  <p>{"->"}</p>
                  <Select
                    defaultValue="nextHop"
                    onValueChange={(v) => {
                      const temp = [...routes];
                      temp[index] = {
                        network: route.network,
                        option: v,
                        nextHop: route.nextHop,
                        interface: route.interface,
                      };
                      setRoutes(temp);
                    }}
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nextHop">Next hop</SelectItem>
                      <SelectItem value="exitInterface">Exit interface</SelectItem>
                      <SelectItem value="null">Null</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className={`${route.option === "null" ? "hidden" : ""}`}>:</p>
                  <Input
                    className={`w-56 ${route.option !== "nextHop" ? "hidden" : ""}`}
                    placeholder="0.0.0.0"
                    value={route.nextHop}
                    onChange={(e) => {
                      const temp = [...routes];
                      temp[index] = {
                        network: route.network,
                        option: route.option,
                        nextHop: e.target.value,
                        interface: route.interface,
                      };
                      setRoutes(temp);
                    }}
                  />
                  <Input
                    className={`w-56 ${route.option !== "exitInterface" ? "hidden" : ""}`}
                    placeholder="Interface"
                    value={route.interface}
                    onChange={(e) => {
                      const temp = [...routes];
                      temp[index] = {
                        network: route.network,
                        option: route.option,
                        nextHop: route.nextHop,
                        interface: e.target.value,
                      };
                      setRoutes(temp);
                    }}
                  />
                </div>
                <Button
                  size="sm"
                  className="bg-muted border-red-500 text-red-500 hover:text-red-700"
                  variant="outline"
                  onClick={() => {
                    setRoutes((prevItems) => {
                      const newItems = [...prevItems];
                      newItems.splice(index, 1);
                      return newItems;
                    });
                  }}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-between items-center p-4 border-b bg-background rounded-t-md">
            <Button size="sm" className="h-8">
              Run
            </Button>
            <Button size="sm" variant="secondary" className="h-8">
              Copy
            </Button>
          </div>
          <pre className="relative w-full rounded-b-md bg-background p-4 h-[10rem]">{">"}</pre>
        </div>
      </div>
    </div>
  );
}
