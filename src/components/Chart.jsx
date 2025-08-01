import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { 
    name: 'Static Portfolio', 
    'Basic Static': 9000, 
    'With CMS': 15000,
    'E-commerce Ready': 0 
  },
  { 
    name: 'Blog/News Site', 
    'Basic Static': 0, 
    'With CMS': 70000,
    'E-commerce Ready': 105000 
  },
  { 
    name: 'Business Website', 
    'Basic Static': 35000, 
    'With CMS': 75000,
    'E-commerce Ready': 125000 
  },
  { 
    name: 'E-commerce Store', 
    'Basic Static': 0, 
    'With CMS': 0,
    'E-commerce Ready': 180000 
  },
  { 
    name: 'Landing Page', 
    'Basic Static': 8000, 
    'With CMS': 17500,
    'E-commerce Ready': 0 
  },
  { 
    name: 'Corporate Site', 
    'Basic Static': 65000, 
    'With CMS': 150000,
    'E-commerce Ready': 280000 
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-800 mb-2">{`${label}`}</p>
        {payload.map((entry, index) => (
          entry.value > 0 && (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey}: ₹${entry.value.toLocaleString('en-IN')}`}
            </p>
          )
        ))}
      </div>
    );
  }
  return null;
};

export default function WebsitePricingChart() {
  return (
    <div className="w-full h-full p-8">
      <div className=" rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-300 mb-2">
            My Web Development Services & Pricing*
          </h2>
          <p className="text-gray-200 text-xl">
            Professional website development pricing across different project types and complexity levels (₹)
          </p>
        </div>
        
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 14, fill: '#666' }}
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis 
              tick={{ fontSize: 16, fill: '#666' }}
              tickFormatter={(value) => `${(value/1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="rect"
            />
            <Bar 
              dataKey="Basic Static" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
              name="Basic Static Site"
            />
            <Bar 
              dataKey="With CMS" 
              fill="#10B981" 
              radius={[4, 4, 0, 0]}
              name="With CMS (WordPress/Custom)"
            />
            <Bar 
              dataKey="E-commerce Ready" 
              fill="#F59E0B" 
              radius={[4, 4, 0, 0]}
              name="E-commerce Enabled"
            />
          </BarChart>
        </ResponsiveContainer>
       
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span className="font-semibold text-blue-800">Basic Static Sites</span>
            </div>
            <p className="text-blue-700">HTML/CSS/JS only, no backend functionality</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="font-semibold text-green-800">With CMS</span>
            </div>
            <p className="text-green-700">WordPress, Drupal, or custom CMS integration</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">          <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
              <span className="font-semibold text-amber-800">E-commerce Ready</span>
            </div>
            <p className="text-amber-700">Online store with payment gateway integration</p>
          </div>
        </div>
      </div>
       <div className='w-full flex justify-center'>
          <p className=''>
  * Prices are estimated and flexible based on client needs, reach out to discuss your project.
          </p>
        </div>
    </div>
  );
}