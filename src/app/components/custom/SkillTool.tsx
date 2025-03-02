// app/components/custom/DeveloperTools.tsx
import React from 'react';
import { 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiReact, 
  SiGraphql, 
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiTensorflow,
  SiRedis,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiKubernetes,
  SiGithubactions,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiScikitlearn,
  SiPytorch,
  SiWeb3Dotjs,
  SiVercel,
  SiSolidity,
  SiSupabase,
  SiElasticsearch,
  SiRedux,
  SiVite,
  SiDjango,
  SiStripe
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import {  FaBrain, FaRobot, FaMicrochip } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai' | 'web3' | 'other';
}

const ToolCard = ({ icon, name, description, category }: ToolCardProps) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'frontend': return 'from-blue-500 to-sky-600';
      case 'backend': return 'from-green-500 to-emerald-600';
      case 'database': return 'from-violet-500 to-purple-600';
      case 'devops': return 'from-yellow-500 to-amber-600';
      case 'ai': return 'from-rose-500 to-pink-600';
      case 'web3': return 'from-indigo-500 to-blue-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-4 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor()} flex items-center justify-center text-white`}>
        <div className="text-2xl">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CategoryHeading = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4 mt-8">
    <div className="text-2xl text-orange-500">{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
  </div>
);

const DeveloperTools = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="relative">
        <h2 className="text-5xl font-bold mb-2 text-white">PREMIUM</h2>
        <h2 className="text-5xl font-bold text-zinc-700 mb-12">TOOLS</h2>
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-12 left-24 w-12 h-12 bg-blue-500/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="space-y-8">
        <CategoryHeading title="Frontend Development" icon={<SiReact />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            icon={<SiReact />} 
            name="React" 
            description="Frontend UI Library" 
            category="frontend"
          />
          <ToolCard 
            icon={<SiNextdotjs />} 
            name="Next.js" 
            description="React Framework" 
            category="frontend"
          />
          <ToolCard 
            icon={<SiTailwindcss />} 
            name="Tailwind CSS" 
            description="Utility-first CSS" 
            category="frontend"
          />
          <ToolCard 
            icon={<SiTypescript />} 
            name="TypeScript" 
            description="Typed JavaScript" 
            category="frontend"
          />
          <ToolCard 
            icon={<SiRedux />} 
            name="Redux" 
            description="State Management" 
            category="frontend"
          />
          <ToolCard 
            icon={<SiVite />} 
            name="Vite" 
            description="Frontend Tooling" 
            category="frontend"
          />
        </div>

        <CategoryHeading title="Backend Development" icon={<SiNodedotjs />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            icon={<SiNodedotjs />} 
            name="Node.js" 
            description="JavaScript Runtime" 
            category="backend"
          />
          <ToolCard 
            icon={<SiExpress />} 
            name="Express" 
            description="Node.js Framework" 
            category="backend"
          />
          <ToolCard 
            icon={<SiGraphql />} 
            name="GraphQL" 
            description="API Query Language" 
            category="backend"
          />
          <ToolCard 
            icon={<SiPrisma />} 
            name="Prisma" 
            description="ORM for Node.js" 
            category="backend"
          />
          <ToolCard 
            icon={<SiDjango />} 
            name="Django" 
            description="Python Framework" 
            category="backend"
          />
          <ToolCard 
            icon={<SiFastapi />} 
            name="FastAPI" 
            description="Python API Framework" 
            category="backend"
          />
        </div>

        <CategoryHeading title="Database Technologies" icon={<SiMongodb />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            icon={<SiMongodb />} 
            name="MongoDB" 
            description="NoSQL Database" 
            category="database"
          />
          <ToolCard 
            icon={<SiPostgresql />} 
            name="PostgreSQL" 
            description="SQL Database" 
            category="database"
          />
          <ToolCard 
            icon={<SiRedis />} 
            name="Redis" 
            description="In-memory Store" 
            category="database"
          />
          <ToolCard 
            icon={<SiElasticsearch />} 
            name="Elasticsearch" 
            description="Search & Analytics" 
            category="database"
          />
          <ToolCard 
            icon={<SiSupabase />} 
            name="Supabase" 
            description="Firebase Alternative" 
            category="database"
          />
          <ToolCard 
            icon={<SiFirebase />} 
            name="Firebase" 
            description="App Development Platform" 
            category="database"
          />
        </div>

        <CategoryHeading title="AI & Machine Learning" icon={<FaBrain />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            icon={<SiTensorflow />} 
            name="TensorFlow" 
            description="ML Framework" 
            category="ai"
          />
          <ToolCard 
            icon={<SiPytorch />} 
            name="PyTorch" 
            description="ML Framework" 
            category="ai"
          />
          <ToolCard 
            icon={<SiPandas />} 
            name="Pandas" 
            description="Data Analysis" 
            category="ai"
          />
          <ToolCard 
            icon={<SiNumpy />} 
            name="NumPy" 
            description="Numerical Computing" 
            category="ai"
          />
          <ToolCard 
            icon={<SiScikitlearn />} 
            name="Scikit-learn" 
            description="ML Library" 
            category="ai"
          />
          <ToolCard 
            icon={<TbBrandOpenai />} 
            name="LangChain" 
            description="LLM Framework" 
            category="ai"
          />
          <ToolCard 
            icon={<HiSparkles />} 
            name="Hugging Face" 
            description="ML Models & Datasets" 
            category="ai"
          />
          <ToolCard 
            icon={<FaRobot />} 
            name="NLTK" 
            description="NLP Toolkit" 
            category="ai"
          />
          <ToolCard 
            icon={<FaMicrochip />} 
            name="CUDA" 
            description="GPU Computing" 
            category="ai"
          />
        </div>

        <CategoryHeading title="DevOps & Cloud" icon={<SiDocker />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            icon={<SiDocker />} 
            name="Docker" 
            description="Containerization" 
            category="devops"
          />
          <ToolCard 
            icon={<SiKubernetes />} 
            name="Kubernetes" 
            description="Container Orchestration" 
            category="devops"
          />
          {/* <ToolCard 
            // icon={<SiAmazonaws />} 
            name="AWS" 
            description="Cloud Platform" 
            category="devops"
          /> */}
          <ToolCard 
            icon={<SiVercel />} 
            name="Vercel" 
            description="Deployment Platform" 
            category="devops"
          />
          <ToolCard 
            icon={<SiGithubactions />} 
            name="GitHub Actions" 
            description="CI/CD" 
            category="devops"
          />
          {/* <ToolCard 
            icon={<SiKafka />} 
            name="Kafka" 
            description="Event Streaming" 
            category="devops"
          /> */}
        </div>

        <CategoryHeading title="Web3 & Blockchain" icon={<SiWeb3Dotjs />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            icon={<SiWeb3Dotjs />} 
            name="Web3.js" 
            description="Ethereum JavaScript API" 
            category="web3"
          />
          <ToolCard 
            icon={<SiSolidity />} 
            name="Solidity" 
            description="Smart Contract Language" 
            category="web3"
          />
          <ToolCard 
            icon={<SiStripe />} 
            name="Stripe" 
            description="Payment Processing" 
            category="web3"
          />
        </div>
      </div>
 </div>
  );
};

export default DeveloperTools;