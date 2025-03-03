// data/articles.ts
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  featuredImage: string;
}

const articles: Article[] = [
  {
    id: 'web-design-career',
    title: 'Starting and Growing a Career in Web Design',
    excerpt: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    image: '/images/web-design-thumb.jpg',
    featuredImage: '/images/web-design-featured.jpg',
    content: `
      # Starting and Growing a Career in Web Design
      
      As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.
      
      ## Getting Started
      
      The path to becoming a web designer often starts with mastering the fundamentals of HTML, CSS, and JavaScript. These languages form the backbone of web development and design.
      
      ## Building Your Portfolio
      
      Once you have the basic skills, start creating projects that showcase your abilities. Your portfolio is your most valuable asset when seeking jobs or clients.
      
      ## Staying Current
      
      The web design field evolves rapidly. Make it a habit to continuously learn new technologies, frameworks, and design patterns to stay competitive in the market.
    `
  },
  {
    id: 'landing-page-performance',
    title: 'Create a Landing Page That Performs Great',
    excerpt: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales.',
    date: 'Mar 15, 2022',
    readTime: '6min read',
    image: '/images/landing-page-thumb.jpg',
    featuredImage: '/images/landing-page-featured.jpg',
    content: `
      # Create a Landing Page That Performs Great
      
      Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.
      
      ## Essential Elements
      
      A high-converting landing page needs a compelling headline, clear value proposition, engaging visuals, social proof, and a strong call-to-action.
      
      ## Optimization Strategies
      
      Continuously test different elements of your landing page to identify what resonates best with your audience. A/B testing is your best friend here.
      
      ## Mobile Responsiveness
      
      Ensure your landing page looks and functions perfectly on all devices, as a significant portion of traffic now comes from mobile users.
    `
  }
];

export default articles;