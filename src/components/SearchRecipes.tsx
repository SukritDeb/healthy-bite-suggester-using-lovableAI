
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchRecipesProps {
  onSearch: (query: string) => void;
}

export const SearchRecipes = ({ onSearch }: SearchRecipesProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <Input
        type="search"
        placeholder="Search for healthy recipes..."
        className="pl-10 w-full max-w-2xl bg-white/80 backdrop-blur-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
