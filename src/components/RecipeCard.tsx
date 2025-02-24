
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Leaf } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  cookingTime: string;
  category: string;
  imageUrl: string;
}

export const RecipeCard = ({
  title,
  description,
  cookingTime,
  category,
  imageUrl,
}: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
            {category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {cookingTime}
          </span>
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
