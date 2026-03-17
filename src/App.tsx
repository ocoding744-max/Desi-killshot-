import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Data
const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const products = [
  { id: 1, name: 'Premium Acoustic Panel', category: 'Interior', price: '$129.00', stock: 45, status: 'In Stock' },
  { id: 2, name: 'Solar Efficiency Kit', category: 'Energy', price: '$899.00', stock: 12, status: 'Low Stock' },
  { id: 3, name: 'Decorative Wood Slats', category: 'Design', price: '$59.00', stock: 120, status: 'In Stock' },
  { id: 4, name: 'Smart Control Hub', category: 'Electronics', price: '$199.00', stock: 0, status: 'Out of Stock' },
  { id: 5, name: 'Insulation Foam Board', category: 'Construction', price: '$35.00', stock: 89, status: 'In Stock' },
];

const recentOrders = [
  { id: '#ORD-7721', customer: 'Alex Rivera', date: 'Oct 12, 2023', amount: '$258.00', status: 'Delivered' },
  { id: '#ORD-7722', customer: 'Sarah Chen', date: 'Oct 12, 2023', amount: '$1,120.00', status: 'Processing' },
  { id: '#ORD-7723', customer: 'James Wilson', date: 'Oct 11, 2023', amount: '$45.00', status: 'Shipped' },
];

export default function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <div className="flex h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <LayoutDashboard className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">PanelPro</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <NavItem 
            icon={<Package size={20} />} 
            label="Products" 
            active={activeTab === 'products'} 
            onClick={() => setActiveTab('products')} 
          />
          <NavItem 
            icon={<ShoppingCart size={20} />} 
            label="Orders" 
            active={activeTab === 'orders'} 
            onClick={() => setActiveTab('orders')} 
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="Customers" 
            active={activeTab === 'customers'} 
            onClick={() => setActiveTab('customers')} 
          />
          <NavItem 
            icon={<BarChart3 size={20} />} 
            label="Analytics" 
            active={activeTab === 'analytics'} 
            onClick={() => setActiveTab('analytics')} 
          />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <NavItem icon={<Settings size={20} />} label="Settings" />
          <NavItem icon={<LogOut size={20} />} label="Logout" className="text-red-500 hover:bg-red-50" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-white border-bottom border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">Bir Bahadur</p>
                <p className="text-xs text-gray-500 mt-1">Administrator</p>
              </div>
              <img 
                src="https://picsum.photos/seed/admin/40/40" 
                alt="Avatar" 
                className="w-10 h-10 rounded-full border border-gray-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Dashboard View */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Bir</h1>
              <p className="text-gray-500">Here's what's happening with your sales today.</p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm">
              <Plus size={18} />
              <span>Add Product</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Revenue" 
              value="$128,430" 
              change="+12.5%" 
              trend="up" 
              icon={<BarChart3 className="text-blue-600" />}
              color="bg-blue-50"
            />
            <StatCard 
              title="Total Orders" 
              value="1,429" 
              change="+3.2%" 
              trend="up" 
              icon={<ShoppingCart className="text-purple-600" />}
              color="bg-purple-50"
            />
            <StatCard 
              title="New Customers" 
              value="384" 
              change="-1.5%" 
              trend="down" 
              icon={<Users className="text-orange-600" />}
              color="bg-orange-50"
            />
            <StatCard 
              title="Avg. Order Value" 
              value="$89.30" 
              change="+5.4%" 
              trend="up" 
              icon={<Package className="text-emerald-600" />}
              color="bg-emerald-50"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Revenue Overview</h3>
                <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9CA3AF', fontSize: 12}} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9CA3AF', fontSize: 12}}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#000" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg mb-6">Recent Orders</h3>
              <div className="space-y-6">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.id} • {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">{order.amount}</p>
                      <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider",
                        order.status === 'Delivered' ? "bg-emerald-100 text-emerald-700" :
                        order.status === 'Processing' ? "bg-blue-100 text-blue-700" :
                        "bg-orange-100 text-orange-700"
                      )}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors border-t border-gray-100">
                View All Orders
              </button>
            </div>
          </div>

          {/* Product Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-lg">Inventory Status</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200">
                  <Search size={16} className="text-gray-500" />
                </button>
                <button className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50">
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">Product</th>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Price</th>
                    <th className="px-6 py-4 font-semibold">Stock</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                            <Package size={20} className="text-gray-400" />
                          </div>
                          <span className="text-sm font-semibold">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                      <td className="px-6 py-4 text-sm font-bold">{product.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{product.stock} units</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "text-xs px-2.5 py-1 rounded-full font-medium",
                          product.status === 'In Stock' ? "bg-emerald-50 text-emerald-700" :
                          product.status === 'Low Stock' ? "bg-orange-50 text-orange-700" :
                          "bg-red-50 text-red-700"
                        )}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-gray-400 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick, className }: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean; 
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
        active 
          ? "bg-black text-white shadow-md shadow-black/10" 
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
        className
      )}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <motion.div 
          layoutId="active-pill"
          className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
        />
      )}
    </button>
  );
}

function StatCard({ title, value, change, trend, icon, color }: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", color)}>
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <div className={cn(
          "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
          trend === 'up' ? "text-emerald-600 bg-emerald-50" : "text-red-600 bg-red-50"
        )}>
          {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
}
