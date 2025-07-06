import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";

const handleFilterChange = (value: string) => {
    console.log("Filter changed to:", value);
};
const SearchAndFilter = () => {
    const itemComboBox = [
        { value: "1", label: "Tất cả trạng thái" },
        { value: "2", label: "Bị Khoá" },
        { value: "3", label: "Không bị khoá" },
    ];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="md:flex w-3/5 mt-4 xs:flex-col">
            <Input className="md:mr-3 " placeholder="Tìm theo tên hoặc email..." />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between md:flex my-2 md:my-0"
                    >
                        {value
                            ? itemComboBox.find((item) => item.value === value)?.label
                            : "Tất cả trạng thái"}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandGroup>
                            {itemComboBox.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        handleFilterChange(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default SearchAndFilter;