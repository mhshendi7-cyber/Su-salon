
import { Expert, Gender } from './types';

export const MOCK_EXPERTS: Expert[] = [
  {
    id: 'e1',
    name: 'أحمد السوداني',
    gender: 'male',
    bio: 'خبير في فنون العناية والمظهر بخبرة تزيد عن 10 سنوات في أرقى المحافل الدولية والمحلية.',
    rating: 4.9,
    reviewCount: 128,
    skills: ['عناية شخصية', 'تصميم مظهر', 'استشارات خاصة'],
    avatar: 'https://picsum.photos/id/64/400/400',
    gallery: [
      'https://images.unsplash.com/photo-1503910361347-485f382df97d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800'
    ],
    services: [
      { id: 's1', name: 'جلسة العناية الملكية', price: 15000 },
      { id: 's2', name: 'تصميم مظهر متكامل', price: 25000 },
      { id: 's3', name: 'استشارة مظهر خاصة', price: 20000 }
    ],
    location: { lat: 15.5007, lng: 32.5599, address: 'الخرطوم، حي المطار' }
  },
  {
    id: 'e2',
    name: 'سارة محمد',
    gender: 'female',
    bio: 'خبيرة في التجميل التراثي والمعاصر، متخصصة في إبراز الجمال السوداني بلمسات ملكية.',
    rating: 5.0,
    reviewCount: 245,
    skills: ['تجميل ملكي', 'فن الحناء التراثي', 'تجهيز مناسبات'],
    avatar: 'https://picsum.photos/id/65/400/400',
    gallery: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&q=80&w=800'
    ],
    services: [
      { id: 's4', name: 'خدمة التجميل الكاملة', price: 35000 },
      { id: 's5', name: 'نقش حناء ملكي', price: 18000 },
      { id: 's6', name: 'جلسة استرخاء وتجميل', price: 45000 }
    ],
    location: { lat: 15.5007, lng: 32.5599, address: 'الخرطوم، المنشية' }
  },
  {
    id: 'e3',
    name: 'عمر الفاروق',
    gender: 'male',
    bio: 'متخصص في العناية الشخصية للرجل العصري، دقة في التنفيذ والتزام بأعلى معايير الجودة.',
    rating: 4.7,
    reviewCount: 89,
    skills: ['عناية كلاسيكية', 'تدليك وجه', 'تنسيق مظهر'],
    avatar: 'https://picsum.photos/id/91/400/400',
    gallery: [
      'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800'
    ],
    services: [
      { id: 's7', name: 'باقة التميز للرجال', price: 22000 },
      { id: 's8', name: 'قص وتصفيف كلاسيكي', price: 10000 }
    ],
    location: { lat: 15.5007, lng: 32.5599, address: 'أم درمان، حي المهندسين' }
  },
  {
    id: 'e4',
    name: 'ليلى عثمان',
    gender: 'female',
    bio: 'خبيرة عالمية في العناية بالشعر والبشرة، تستخدم أحدث التقنيات لنتائج مبهرة.',
    rating: 4.8,
    reviewCount: 156,
    skills: ['علاج شعر', 'تجديد بشرة', 'صبغات عالمية'],
    avatar: 'https://picsum.photos/id/103/400/400',
    gallery: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1527799822394-30ca44436577?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554519934-e32b8fb8af71?auto=format&fit=crop&q=80&w=800'
    ],
    services: [
      { id: 's9', name: 'جلسة ترميم الشعر', price: 40000 },
      { id: 's10', name: 'تفتيح بشرة ملكي', price: 25000 }
    ],
    location: { lat: 15.5007, lng: 32.5599, address: 'الخرطوم بحري، كافوري' }
  }
];
