// blog images

import blogImg1 from '../assets/images/blog/blog-img-1.jpg';
import blogImg2 from '../assets/images/blog/blog-img-2.jpg';
import blogImg3 from '../assets/images/blog/blog-img-3.jpg';

// blog two images
import blog2Img1 from '../assets/images/blog/blog-2-img-1.jpg';
import blog2Img2 from '../assets/images/blog/blog-2-img-2.jpg';
import blog2Img3 from '../assets/images/blog/blog-2-img-3.jpg';
import blog2Img4 from '../assets/images/blog/blog-2-img-4.jpg';

// blog single images
import blogSingleImg1 from '../assets/images/blog/blog-single-img-1.jpg';
import blogSingleImg2 from '../assets/images/blog/blog-single-img-2.jpg';
import blogSingleImg3 from '../assets/images/blog/blog-single-img-3.jpg';

// blog sidebar images
import blogSmImg1 from '../assets/images/blog/blog-sm-img-1.jpg';
import blogSmImg2 from '../assets/images/blog/blog-sm-img-2.jpg';
import blogSmImg3 from '../assets/images/blog/blog-sm-img-3.png';
// details inner images
import blogInner1 from '../assets/images/blog/blog-details-inner-img-1.jpg';
import blogInner2 from '../assets/images/blog/blog-details-inner-img-2.jpg';
import blogInner3 from '../assets/images/blog/blog-details-inner-img-3.jpg';
import blogInner4 from '../assets/images/blog/blog-details-inner-img-4.jpg';


// Unified blog posts dataset (single source of truth)
export const posts = [
  {
    id: 1,
    slug: 'drive-success-with-cutting-edge-technology',
    title: 'Drive success with cutting-edge technology',
    author: 'By admin',
    date: '09 Mar',
    category: 'Digital Edge Innovations',
    tags: ['TechCraft', 'NexTech'],
    detailImg: blogSingleImg1,
    cardImg: blogImg1,
    sliderImg: blog2Img1,
    excerpt: 'IT services include technical support and maintenance, ensuring systems run smoothly and efficiently.',
    content: [
      'Technology accelerates growth, improves decision-making, and secures modern infrastructures.',
      'From automation to AI, the right stack unlocks operational excellence and competitive advantage.'
    ],
    innerImagesTop: [blogInner1, blogInner2],
    innerImagesBottom: [blogInner3, blogInner4],
    highlights: [
      'Adopt automation and AI to increase delivery speed and reduce toil',
      'Leverage data to inform strategy and drive continuous improvement',
      'Build secure-by-default foundations to scale with confidence'
    ],
    quote: 'Innovation happens where strategy, people, and technology meet—and iterate.',
    quoteAuthor: 'A. Patel',
    subheading: 'From Vision to Value',
    subcontent: [
      'Translate long-term strategy into 90-day outcomes with lean delivery practices and measurable KPIs.',
      'Create a platform mindset: reusable services, paved roads, and strong developer experience.'
    ],
    conclusion: 'High-performing teams combine disciplined engineering with fast feedback loops to turn ideas into durable value.'
  },
  {
    id: 2,
    slug: 'empowering-progress-through-technology',
    title: 'Empowering Progress Through Technology',
    author: 'By admin',
    date: '09 Mar',
    category: 'Tech Minds Solutions',
    tags: ['TechVista', 'SmartNet'],
    detailImg: blogSingleImg2,
    cardImg: blogImg2,
    sliderImg: blog2Img2,
    excerpt: 'Information Technology is the backbone of modern businesses, enabling efficient, effective operations.',
    content: [
      'Modern platforms streamline processes and drive innovation across every team.',
      'Cloud-native approaches reduce friction and accelerate delivery cycles.'
    ],
    innerImagesTop: [blog2Img1, blog2Img2],
    innerImagesBottom: [blog2Img3, blog2Img4],
    highlights: [
      'Modernize incrementally to avoid risky, big-bang rewrites',
      'Invest in observability to reduce mean time to recovery',
      'Empower teams with self-service platforms and guardrails'
    ],
    quote: 'Progress compounds when small wins are delivered consistently.',
    quoteAuthor: 'M. Rivera',
    subheading: 'Operating Models that Scale',
    subcontent: [
      'Shift from project to product: durable teams owning outcomes over outputs.',
      'Measure what matters: flow metrics, reliability, and customer satisfaction.'
    ],
    conclusion: 'Technology amplifies organizations that align incentives, architecture, and autonomy.'
  },
  {
    id: 3,
    slug: 'connecting-the-dots-of-digital-innovation',
    title: 'Connecting the Dots of Digital Innovation',
    author: 'By admin',
    date: '10 Mar',
    category: 'Cloud Wave Services',
    tags: ['InfoSec', 'Byte'],
    detailImg: blogSingleImg3,
    cardImg: blogImg3,
    sliderImg: blog2Img3,
    excerpt: 'Cybersecurity protects sensitive information from threats while maintaining system reliability.',
    content: [
      'Security by design enables safe scale and customer trust.',
      'Observability and automation reduce mean time to recovery and improve stability.'
    ],
    innerImagesTop: [blogImg1, blogImg2],
    innerImagesBottom: [blogImg3, blogSingleImg1],
    highlights: [
      'Design for least privilege and defense-in-depth from day one',
      'Automate compliance evidence with policy-as-code',
      'Continuously validate resilience with chaos and game days'
    ],
    quote: 'Trust is earned through clarity, resilience, and transparent operations.',
    quoteAuthor: 'S. Nguyen',
    subheading: 'Secure Innovation',
    subcontent: [
      'Security enables speed when controls are built into the developer workflow.',
      'Standardized platforms reduce cognitive load and shrink the attack surface.'
    ],
    conclusion: 'Great digital experiences emerge where reliability and velocity reinforce each other.'
  },
  {
    id: 4,
    slug: 'the-role-of-cloud-computing-in-modern-businesses',
    title: 'The role of cloud computing in modern businesses',
    author: 'By admin',
    date: '11 Mar',
    category: 'Cloud Wave Services',
    tags: ['TechCraft', 'InfoSec'],
    detailImg: blog2Img4,
    cardImg: blog2Img4,
    sliderImg: blog2Img4,
    excerpt: 'Cloud platforms enable scalability and resilience while optimizing costs and speed of delivery.',
    content: [
      'Managed services and serverless architectures accelerate teams and reduce operational burden.',
      'Multi-cloud strategies can improve portability and avoid vendor lock-in when applied pragmatically.'
    ],
    innerImagesTop: [blogSingleImg2, blogSingleImg3],
    innerImagesBottom: [blogSmImg1, blogSmImg2],
    highlights: [
      'Use managed services to focus on differentiating capabilities',
      'Adopt FinOps to align cost with value and usage patterns',
      'Design for portability where it matters, not everywhere'
    ],
    quote: 'Cloud is not the destination; it is the operating model for building value at scale.',
    quoteAuthor: 'J. Carter',
    subheading: 'Cloud Done Right',
    subcontent: [
      'Automate infrastructure and security from commit to production using pipelines and policy.',
      'Right-size architectures—serverless for burst, containers for control, and managed data services for speed.'
    ],
    conclusion: 'Pragmatic cloud strategies balance flexibility with simplicity to maximize business impact.'
  }
];

// Derived tags and categories with counts
const countBy = (arr, keyOf) => {
  const map = new Map();
  arr.forEach((item) => {
    const key = keyOf(item);
    const current = map.get(key) || 0;
    map.set(key, current + 1);
  });
  return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
};

export const categories = countBy(posts, (p) => p.category);
export const blogTags = countBy(posts.flatMap((p) => p.tags || []), (t) => t).map((t, i) => ({ id: i + 1, ...t }));

// Home blog grid items (derived)
export const blogs = posts.slice(0, 3).map((p) => ({
  id: p.id,
  slug: p.slug,
  img: p.cardImg,
  author: p.author,
  date: p.date,
  title: p.title,
  description: p.excerpt
}));

// Blog carousel items (derived)
export const blogsTwo = posts.slice(0, 4).map((p) => ({
  id: p.id,
  slug: p.slug,
  img: p.sliderImg,
  date: p.date,
  author: p.author,
  title: p.title
}));

// Blog listing items (derived)
const computeReadTime = (p) => {
  const text = [p.excerpt, ...(p.content || [])].join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

export const blogSingle = posts.map((p) => ({
  id: p.id,
  slug: p.slug,
  img: p.detailImg,
  date: p.date,
  author: p.author,
  title: p.title,
  description: p.excerpt,
  category: p.category,
  tags: p.tags,
  content: p.content,
  innerImagesTop: p.innerImagesTop,
  innerImagesBottom: p.innerImagesBottom,
  highlights: p.highlights,
  quote: p.quote,
  quoteAuthor: p.quoteAuthor,
  subheading: p.subheading,
  subcontent: p.subcontent,
  conclusion: p.conclusion,
  readTime: computeReadTime(p)
}));

// Sidebar recent posts (derived)
export const blogSidebar = [
  { id: posts[0].id, slug: posts[0].slug, img: posts[0].cardImg, category: posts[0].category, comments: '2', title: posts[0].title },
  { id: posts[1].id, slug: posts[1].slug, img: posts[1].cardImg, category: posts[1].category, comments: '2', title: posts[1].title },
  { id: posts[2].id, slug: posts[2].slug, img: posts[2].cardImg, category: posts[2].category, comments: '2', title: posts[2].title }
];