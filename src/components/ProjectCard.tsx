import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  teamSize: number;
  status: "In Progress" | "Completed" | "On Hold" | "Planning";
}

const statusColors = {
  "In Progress": "bg-amber-100 text-amber-800",
  "Completed": "bg-green-100 text-green-800",
  "On Hold": "bg-gray-100 text-gray-800",
  "Planning": "bg-purple-100 text-purple-800",
};

export const ProjectCard = ({
  title,
  description,
  progress,
  dueDate,
  teamSize,
  status,
}: ProjectCardProps) => {
  return (
    <Card className="glass-card hover-scale p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <span className={`status-chip ${statusColors[status]}`}>{status}</span>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="flex justify-between items-center pt-2">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span>{dueDate}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{teamSize} members</span>
          </div>
        </div>
      </div>
    </Card>
  );
};