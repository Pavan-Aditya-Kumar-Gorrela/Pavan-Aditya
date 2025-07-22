import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, BarChart3, Image, MessageSquare, Zap, TrendingUp } from 'lucide-react';

type Model = {
  id: string;
  name: string;
  apiEndpoint: string;
  // ...other fields
};

const models: Model[] = [
  { id: 'classification', name: 'Image Classification', apiEndpoint: 'https://api.weatherstack.com/current?access_key=e474bae88264f8bc0ae4f5858c4714de&query=Bhimavaram' },
  { id: 'sentiment', name: 'Sentiment Analysis', apiEndpoint: 'https://api.example.com/model2' },
  { id: 'prediction', name: 'Stock Prediction', apiEndpoint: 'https://api.example.com/model3' },
];

const MLShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'classification' | 'sentiment' | 'prediction'>('classification');
  const [results, setResults] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTryModel = async (model: Model) => {
    setLoading((prev) => ({ ...prev, [model.id]: true }));
    setResults((prev) => ({ ...prev, [model.id]: '' }));

    // Static messages for each model
    const staticResults: { [key: string]: string } = {
      classification: 'Predicted: Person (Confidence: 98%)',
      sentiment: 'Sentiment: Positive (Score: 0.87)',
      prediction: 'Predicted Price: $123.45 (Next Day)',
    };

    setTimeout(() => {
      setResults((prev) => ({ ...prev, [model.id]: staticResults[model.id] || 'Success!' }));
      setLoading((prev) => ({ ...prev, [model.id]: false }));
    }, 800); // Simulate loading
  };

  const demos = [
    {
      id: 'classification',
      title: 'Image Classification',
      icon: <Image className="w-6 h-6" />,
      description: 'Real-time image classification using a CNN model trained on ImageNet',
      accuracy: '94.2%',
      model: 'ResNet-50'
    },
    {
      id: 'sentiment',
      title: 'Sentiment Analysis',
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Natural language processing for social media sentiment analysis',
      accuracy: '91.8%',
      model: 'BERT-base'
    },
    {
      id: 'prediction',
      title: 'Stock Prediction',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Time series forecasting for financial market predictions',
      accuracy: '87.3%',
      model: 'LSTM'
    }
  ];

  const generateMetrics = () => ({
    loss: Math.random() * 0.5 + 0.1,
    accuracy: Math.random() * 0.2 + 0.8,
    valLoss: Math.random() * 0.6 + 0.15,
    valAccuracy: Math.random() * 0.15 + 0.82
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            ML Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interactive demonstrations of machine learning models and AI systems, 
            showcasing real-world applications and performance metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Model Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Brain className="w-8 h-8 text-green-400" />
              ML Models
            </h3>
            
            <div className="space-y-4">
              {demos.map((demo) => (
                <motion.div
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id as any)}
                  className={`hoverable p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'bg-gradient-to-r from-green-600/20 to-blue-600/20 border-2 border-green-500/50'
                      : 'bg-gray-800/50 border border-gray-700 hover:border-green-500/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-lg ${
                      activeDemo === demo.id ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {demo.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{demo.title}</h4>
                      <p className="text-sm text-gray-400">{demo.model}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Accuracy</span>
                    <span className="text-green-400 font-semibold">{demo.accuracy}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-400" />
              Live Demo
            </h3>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {demos.find(d => d.id === activeDemo)?.title}
                </h4>
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      {demos.find(d => d.id === activeDemo)?.icon}
                    </div>
                    <p className="text-gray-400">Interactive demo placeholder</p>
                    <button 
                      className="hoverable mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-sm font-medium" 
                      onClick={() => handleTryModel(models.find(m => m.id === activeDemo) as Model)}
                      disabled={loading[activeDemo]}
                    >
                      {loading[activeDemo] ? 'Trying...' : 'Try Model'}
                    </button>
                    {results[activeDemo] && <div className="mt-2 text-green-400 text-sm">{results[activeDemo]}</div>}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-xs text-gray-400 mb-1">Processing Time</div>
                  <div className="text-lg font-semibold text-green-400">0.23s</div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-xs text-gray-400 mb-1">Confidence</div>
                  <div className="text-lg font-semibold text-blue-400">96.8%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Training Metrics Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-purple-400" />
            Training Metrics Dashboard
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Training Loss', value: '0.234', color: 'text-red-400', trend: '↓' },
              { label: 'Validation Loss', value: '0.267', color: 'text-orange-400', trend: '↓' },
              { label: 'Training Accuracy', value: '94.2%', color: 'text-green-400', trend: '↑' },
              { label: 'Validation Accuracy', value: '91.8%', color: 'text-blue-400', trend: '↑' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-700/30 rounded-lg p-6 text-center"
              >
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <div className={`text-sm ${metric.color}`}>
                  {metric.trend} Improving
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simulated Chart */}
          <div className="mt-8 h-64 bg-gray-700/20 rounded-lg flex items-end justify-center p-4">
            <div className="flex items-end space-x-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={inView ? { height: Math.random() * 150 + 20 } : {}}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="w-4 bg-gradient-to-t from-purple-600 to-blue-400 rounded-t"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Research Papers Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Recent Research Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Foreign Object Debrival Detection",
                journal: "GeoSI",
                impact: "High"
              },
              {
                title: "XGBoost vs CatBoost for URL Phising",
                journal: "arxiv",
                impact: "Medium"
              },
              {
                title: "XGBoost for Zero-Inflated Models",
                journal: "arxiv",
                impact: "High"
              }
            ].map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="hoverable p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{paper.title}</h4>
                <p className="text-purple-400 text-sm mb-3">{paper.journal}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  
                  <span className={`${paper.impact === 'High' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {paper.impact} Impact
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MLShowcase;