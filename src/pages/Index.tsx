import { ProjectCard } from "@/components/ProjectCard";
import { TaskBoard } from "@/components/TaskBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockProjects = [
  {
    title: "City Center Development",
    description: "Mixed-use development project in downtown area",
    progress: 75,
    dueDate: "2024-06-30",
    teamSize: 12,
    status: "In Progress" as const,
  },
  {
    title: "Riverside Apartments",
    description: "Luxury residential complex with 200 units",
    progress: 30,
    dueDate: "2024-09-15",
    teamSize: 8,
    status: "Planning" as const,
  },
  {
    title: "Tech Park Phase 1",
    description: "Modern office space development",
    progress: 90,
    dueDate: "2024-04-20",
    teamSize: 15,
    status: "Completed" as const,
  },
];

const mockTasks = [
  {
    id: "1",
    title: "Foundation inspection",
    assignee: "John Doe",
    priority: "High" as const,
    status: "To Do" as const,
  },
  {
    id: "2",
    title: "Electrical wiring review",
    assignee: "Jane Smith",
    priority: "Medium" as const,
    status: "In Progress" as const,
  },
  {
    id: "3",
    title: "Plumbing installation",
    assignee: "Mike Johnson",
    priority: "High" as const,
    status: "Done" as const,
  },
  {
    id: "4",
    title: "HVAC system setup",
    assignee: "Sarah Wilson",
    priority: "Medium" as const,
    status: "In Progress" as const,
  },
  {
    id: "5",
    title: "Interior finishing",
    assignee: "Tom Brown",
    priority: "Low" as const,
    status: "To Do" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <header className="border-b">
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Construction Projects</h1>
            <Button className="hover-scale">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Active Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Task Board</h2>
          </div>
          <TaskBoard tasks={mockTasks} />
        </section>
      </main>
    </div>
  );
};

export default Index;