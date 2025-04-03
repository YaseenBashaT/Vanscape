
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users } from "lucide-react";

interface VanCardProps {
  id: number;
  name: string;
  type: string;
  price: number;
  location: string;
  image: string;
  sleeps: number;
  available: boolean;
}

const VanCard = ({
  id,
  name,
  type,
  price,
  location,
  image,
  sleeps,
  available,
}: VanCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/vans/${id}`}>
        <div className="aspect-[16/9] w-full relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-vanscape-blue text-white">
              {type}
            </Badge>
          </div>
          {!available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg font-semibold px-3 py-1.5">
                Booked
              </Badge>
            </div>
          )}
        </div>
      </Link>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg">${price}</span>
            <p className="text-xs text-muted-foreground">per night</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center text-muted-foreground text-sm">
          <Users className="h-4 w-4 mr-1" />
          <span>Sleeps {sleeps}</span>
        </div>
        <div className="flex items-center text-muted-foreground text-sm">
          <CalendarDays className="h-4 w-4 mr-1" />
          <span>{available ? "Available" : "Unavailable"}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VanCard;
