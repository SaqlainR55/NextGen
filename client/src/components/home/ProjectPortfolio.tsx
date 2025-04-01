import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects and see our expertise in action.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card
              key={project.id}
              className="rounded-lg overflow-hidden shadow-md group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-primary text-white py-2 px-4 rounded-lg font-medium">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-10">
            <Button 
              className="bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition"
              onClick={loadMoreProjects}
            >
              Load More Projects
            </Button>
          </div>
        )}

        {/* Project Details Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  {selectedProject.location}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}