
import { useState } from "react";
import { projectImages } from "@/data/slider-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of prestigious projects we've had the privilege to work on
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

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
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
}
