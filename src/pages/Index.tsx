
import { SearchRecipes } from "@/components/SearchRecipes";
import { RecipeCard } from "@/components/RecipeCard";
import { Leaf } from "lucide-react";
import { useState } from "react";

const featuredRecipes = [
  {
    title: "Quinoa Buddha Bowl",
    description: "A nourishing bowl packed with protein-rich quinoa, roasted vegetables, and tahini dressing.",
    cookingTime: "25 mins",
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Green Smoothie Bowl",
    description: "Start your day with this antioxidant-rich smoothie bowl topped with fresh fruits and seeds.",
    cookingTime: "10 mins",
    category: "Breakfast",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Grilled Salmon Salad",
    description: "Fresh grilled salmon served on a bed of mixed greens with avocado and citrus dressing.",
    cookingTime: "20 mins",
    category: "Seafood",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = featuredRecipes.filter((recipe) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.category.toLowerCase().includes(searchTerm)
    );
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center space-y-6 p-4 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Leaf className="w-6 h-6" />
            <span className="text-lg font-medium">Healthy Bites</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Discover Delicious & Healthy Recipes
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Find the perfect recipe for your healthy lifestyle
          </p>
          <div className="mt-8">
            <SearchRecipes onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="container py-16 animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {searchQuery ? "Search Results" : "Featured Healthy Recipes"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {searchQuery
              ? `Found ${filteredRecipes.length} recipe${filteredRecipes.length !== 1 ? "s" : ""} matching your search`
              : "Explore our collection of nutritious and delicious recipes crafted for a healthier you"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.title} {...recipe} />
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-8">
              No recipes found matching your search. Try different keywords!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
