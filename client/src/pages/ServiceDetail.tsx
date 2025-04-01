
import { useParams } from 'react-router-dom';
import { services } from '@/data/services';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">{service.title}</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600">{service.description}</p>
      </div>
    </div>
  );
}
