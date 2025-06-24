export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: number;
  category: string;
  technologies: string[];
  viewProjects: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Healthcare Records Management System',
    description: 'A digital solution used by hospitals and clinics to securely store, manage, and access patient medical records. It helps in tracking patient history, treatments, prescriptions, lab results, and billing while ensuring data privacy and compliance with healthcare standards.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.xu4aqmSj90bcjv-ZRziElAHaFI?rs=1&pid=ImgDetMain',
    viewProjects: 'https://healthcare-records-management-system.vercel.app',
    year: 2024,
    category: 'AI/ML',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Gemini API']
  },

  {
    id: 2,
    title: 'Online Event Ticketing Systems',
    description: 'A digital platform where users can book tickets for events online, choose seats, make payments, and receive e-tickets. Organizers can manage events, track ticket sales, and generate reports efficiently.',
    image: 'https://media.qrtiger.com/blog/2023/07/qr-codes-in-ticketjpg_800.jpeg',
    viewProjects: 'https://online-event-ticketing-systems.vercel.app',
    year: 2024,
    category: 'Web',
    technologies: ['JavaScript', 'Tailwind CSS', 'React', 'Node.js']
  },
 {
  id: 3,
  title: "Temperature Converter",
  description: "A temperature converter that converts temperatures between Celsius, Fahrenheit, and Kelvin.",
  image: "data:image/png;base64,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",
  viewProjects: "https://temperature-converter-omega-two.vercel.app/",
  year:2024,
  category: "Web",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"]
 },
  {
    id: 4,
    title: 'Smart Emergency Alert System Using Air Tags',
    description: 'A smart emergency alert system that uses air tags to track and alert users in case of emergencies. The system provides real-time location updates.',
    image: 'https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    viewProjects: 'https://smart-emergency-tag.vercel.app/',
    year: 2024,
    category: 'Mobile',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Air Tags API']
  },
  
  {
    id: 5,
    title: 'Weather',
    description: 'A weather application that provides real-time weather information for any location. Users can search for locations and view detailed weather data.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    viewProjects: 'https://weather-app.vercel.app/',
    year: 2024,
    category: 'Web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Weather API']
  },
  {
    id: 6,
    title: 'FreshMart',
    description: 'An e-commerce platform for fresh groceries and household items. Features include product browsing, shopping cart management, secure checkout, and order tracking. The platform provides a seamless shopping experience with real-time inventory updates and delivery scheduling.',
    image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    viewProjects: 'https://fresh-mart-swart.vercel.app/',
    year: 2024,
    category: 'E-commerce',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Vercel']
  },
  {
    id: 7,
    title: 'Bitcoin Price Prediction',
    description: 'A machine learning application that predicts Bitcoin prices based on historical data. The application uses various algorithms for accurate predictions.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    viewProjects: 'https://coin-price-prediction.streamlit.app/',
    year: 2024,
    category: 'AI/ML',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Python', 'TensorFlow']
  },
 
];