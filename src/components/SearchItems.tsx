"use client"

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { Input } from "./ui/input";

const SearchItems = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = (searchTerm: string) => {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) {
            params.set("query", searchTerm);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    };

  return (
    <div className="relative flex flex-1 gap-1 py-2 sm:w-1/2 md:w-1/2 shrink-0 lg:min-w-full xl:min-w-full">
        <label htmlFor="earch" className="sr-only">
            Search
        </label>
        <Input 
            className="peer block rounded-md border border-pink-300 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Search"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
                handleSearch(e.target.value);
            }} />
            <Search className="absolute left-3 h-[18px] w-[18px] translate-y-3 text-pink-500 peer-focus:text-pink-900" />
    </div>
  )
}

export default SearchItems
