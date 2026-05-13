import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

type FilterDropdownProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const FilterDropdown = ({ value, options, onChange }: FilterDropdownProps) => {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex h-10 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 font-medium text-slate-700 transition-all hover:bg-slate-50">
        {value}

        <ChevronDown size={16} className="text-slate-400" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-50 mt-3 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_40px_rgba(15,23,42,0.08)] outline-none">
        {options.map((option) => (
          <MenuItem key={option}>
            {({ active }) => (
              <button
                onClick={() => onChange(option)}
                className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                  active ? "bg-slate-100 text-slate-900" : "text-slate-600"
                } ${value === option ? "bg-blue-50 text-blue-600" : ""}`}
              >
                {option}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default FilterDropdown;
