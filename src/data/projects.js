export const projects = [
  {
    id: 1,
    title: 'One Button Recording Studio',
    description:
      'A mobile web app for controlling professional video recordings in university studios. Built with Vue.js and Tailwind CSS, it connects via a Go backend and Capture Agent to manage camera and studio functions, with automatic upload to the learning platform.',
    image: '/MyWebsite/images/obrs.jpg',
    tags: ['Vue.js', 'Tailwind CSS', 'Go', 'Distributed Architecture'],
    url: 'https://www.uni-muenster.de/IT/services/unterstuetzungsleistung/medientechnik/medientechnik.html',
  },
  {
    id: 2,
    title: 'Foosball AI Commentator',
    description:
      'An AI-powered system for automated real-time commentary of foosball matches. Features a redesigned computer vision module using U-Net for more precise event detection and a Markov model for robustness against missing image data.',
    image: '/MyWebsite/images/kicker.jpg',
    tags: ['Python', 'PyTorch', 'U-Net', 'Computer Vision'],
    url: '#',
  },
  {
    id: 3,
    title: 'AI Data Extraction Tool',
    description:
      'Automated extraction and visualization of key information from scientific papers. Combines NLP with knowledge graphs to efficiently structure and present complex content from academic publications.',
    image: '/MyWebsite/images/transformer.jpg',
    tags: ['Python', 'Transformer', 'NLP', 'Knowledge Graphs'],
    url: '#',
  },
  {
    id: 4,
    title: 'Maritime Eddy Analysis',
    description:
      'A volumetric analysis system for ocean eddies using 3D voxel networks to support oceanographic research. Combines neural networks with cone fitting for precise estimation of eddy volumes from oceanographic data.',
    image: '/MyWebsite/images/eddie.jpg',
    tags: ['Python', 'PyTorch', 'Voxel-Net', '3D Deep Learning'],
    url: '#',
  },
  {
    id: 5,
    title: 'Aerial Damage Detection',
    description:
      'A prototype for automated analysis of aerial imagery for disaster management. Uses a fine-tuned YOLOv8 model to detect and classify building damage, enabling faster situation assessment after extreme events.',
    image: '/MyWebsite/images/bachelorarbeit.jpg',
    tags: ['Python', 'YOLOv8', 'Computer Vision', 'Object Detection'],
    url: '#',
  },
  {
    id: 6,
    title: 'Fashion Trend Detection',
    description:
      'A neural network that recognizes fashion categories in Instagram images and analyzes their evolution for trend forecasting. Makes social media data usable for demand predictions in supply chain management.',
    image: '/MyWebsite/images/insta.jpg',
    tags: ['Python', 'YOLOv5', 'Deep Learning', 'Data Science'],
    url: '#',
  },
  {
    id: 7,
    title: 'Captcha Recognition on Edge',
    description:
      'Development and evaluation of resource-efficient ML models for captcha recognition on embedded devices. Focused on identifying open circles within complex visual captchas using lightweight U-Net architectures.',
    image: '/MyWebsite/images/captcha.jpg',
    tags: ['Python', 'TinyML', 'U-Net', 'Embedded Systems'],
    url: '#',
  },
  {
    id: 8,
    title: 'Opencast Contribution',
    description:
      'Full-stack open-source contribution to the Opencast video platform. Developed a new comment feature including React-based editor UI extensions and Java OSGi backend implementation.',
    image: 'https://picsum.photos/seed/opencast/800/450',
    tags: ['React', 'Java', 'OSGi', 'Open Source'],
    url: 'https://opencast.org/',
  },
]
