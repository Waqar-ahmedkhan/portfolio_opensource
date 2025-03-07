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
    id: 'ai-agents',
    title: 'Understanding AI Agents and Their Applications',
    excerpt: 'AI agents are at the core of modern artificial intelligence, enabling automation, decision-making, and intelligent behaviors in various industries.',
    date: 'Mar 7, 2025',
    readTime: '7min read',
    image: '/images/ai-agents-thumb.jpg',
    featuredImage: '/images/ai-agents-featured.jpg',
    content: `
      # Understanding AI Agents and Their Applications

      AI agents are at the core of modern artificial intelligence, enabling automation, decision-making, and intelligent behaviors in various industries.

      ## What Are AI Agents?
      AI agents are autonomous systems capable of perceiving their environment, processing information, and taking actions to achieve predefined goals. Examples include chatbots, recommendation systems, and autonomous robots.

      ## Types of AI Agents
      - **Simple Reflex Agents**: React based on current conditions.
      - **Model-Based Agents**: Maintain an internal model of the world.
      - **Goal-Based Agents**: Plan actions based on objectives.
      - **Learning Agents**: Improve performance using past experiences.

      ## Applications
      AI agents are widely used in customer service, healthcare, finance, and gaming. They help automate workflows, optimize processes, and enhance user experiences.
    `
  },
  {
    id: 'ai-workplace',
    title: 'AI in the Workplace: Transforming Jobs and Productivity',
    excerpt: 'Artificial Intelligence is revolutionizing the workplace by automating tasks, enhancing decision-making, and increasing efficiency.',
    date: 'Mar 7, 2025',
    readTime: '6min read',
    image: '/images/ai-workplace-thumb.jpg',
    featuredImage: '/images/ai-workplace-featured.jpg',
    content: `
      # AI in the Workplace: Transforming Jobs and Productivity

      Artificial Intelligence is revolutionizing the workplace by automating tasks, enhancing decision-making, and increasing efficiency.

      ## How AI Is Changing Work
      AI is assisting with repetitive tasks, allowing employees to focus on more strategic and creative work. Industries such as finance, healthcare, and marketing benefit from AI-powered automation and insights.

      ## Key Benefits
      - **Increased Productivity**: AI handles mundane tasks, reducing workload.
      - **Better Decision-Making**: AI-powered analytics provide valuable insights.
      - **Enhanced Customer Experience**: AI chatbots and virtual assistants improve service quality.

      ## Preparing for an AI-Driven Future
      Employees should focus on developing skills in AI literacy, data analytics, and problem-solving to stay competitive in an evolving job market.
    `
  },
  {
    id: 'ai-ethics',
    title: 'The Ethics of Artificial Intelligence: Challenges and Solutions',
    excerpt: 'As AI becomes more advanced, ethical concerns arise regarding bias, privacy, and accountability in AI-driven decision-making.',
    date: 'Mar 7, 2025',
    readTime: '8min read',
    image: '/images/ai-ethics-thumb.jpg',
    featuredImage: '/images/ai-ethics-featured.jpg',
    content: `
      # The Ethics of Artificial Intelligence: Challenges and Solutions

      As AI becomes more advanced, ethical concerns arise regarding bias, privacy, and accountability in AI-driven decision-making.

      ## Key Ethical Concerns
      - **Bias in AI**: AI models can inherit biases from training data, leading to unfair decisions.
      - **Data Privacy**: AI systems collect and analyze vast amounts of personal data, raising privacy concerns.
      - **Accountability**: When AI makes decisions, who is responsible for errors or harm caused?

      ## Addressing Ethical Challenges
      - Implementing fairness-aware algorithms to reduce bias.
      - Establishing data protection regulations and transparency standards.
      - Ensuring human oversight in critical AI decision-making processes.
    `
  },
  {
    id: 'ai-future',
    title: 'The Future of AI: Trends and Innovations',
    excerpt: 'AI is evolving rapidly, with advancements in deep learning, quantum AI, and human-AI collaboration shaping the future.',
    date: 'Mar 7, 2025',
    readTime: '7min read',
    image: '/images/ai-future-thumb.jpg',
    featuredImage: '/images/ai-future-featured.jpg',
    content: `
      # The Future of AI: Trends and Innovations

      AI is evolving rapidly, with advancements in deep learning, quantum AI, and human-AI collaboration shaping the future.

      ## Emerging AI Trends
      - **Quantum AI**: Combining quantum computing with AI to solve complex problems.
      - **AI-Augmented Creativity**: AI assisting in music, art, and content generation.
      - **Explainable AI (XAI)**: Making AI decisions more transparent and interpretable.

      ## The Road Ahead
      As AI continues to advance, researchers and policymakers must collaborate to ensure ethical and beneficial AI development that serves humanity.
    `
  }
];

export default articles;