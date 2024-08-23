import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDown, Menu, MoreVertical } from "lucide-react";

export default async function Navbar() {
  return (
    <div className="h-16 md:px-12 px-4 border-b flex justify-between items-center bg-muted">
      <div className="flex justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-2">
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </div>
          <Link href="/" className="flex justify-center items-center gap-2">
            <p className="text-[1.6rem] font-semibold">
              <span className="text-primary">Net</span>Builder
            </p>
          </Link>
        </div>
        <div className="md:flex hidden justify-center items-center gap-1 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Routing <ChevronDown className="ml-1 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="p-0">
                <Link href="/static_routing" className="w-full px-2 py-1.5">
                  &#9675; Static routing
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Subnetting <ChevronDown className="ml-1 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="p-0">
                <Link href="/flsm" className="w-full px-2 py-1.5">
                  &#9675; FLSM
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link href="/vlsm" className="w-full px-2 py-1.5">
                  &#9675; VLSM
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Other <ChevronDown className="ml-1 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="p-0">
                <Link href="/vlan" className="w-full px-2 py-1.5">
                  &#9675; VLAN
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-center items-center sm:gap-5 gap-3">
        <Button variant="ghost" size="icon">
          <MoreVertical />
        </Button>
        <Button size="sm">About us</Button>
      </div>
    </div>
  );
}
