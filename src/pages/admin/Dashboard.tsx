
import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import {
  Users,
  MapPin,
  CreditCard,
  Building,
  TrendingUp,
  TrendingDown,
  Calendar,
  Activity
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  userStats, 
  bookingStats, 
  revenueStats, 
  destinationStats,
  monthlyRevenueData,
  topDestinations
} from '@/data/adminMockData';

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('yearly');
  
  // Format currency
  const formatIndianRupees = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format numbers with commas
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-IN').format(num);
  };
  
  // Pie chart colors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // Booking status data for pie chart
  const bookingStatusData = [
    { name: 'Completed', value: bookingStats.completedBookings },
    { name: 'Pending', value: bookingStats.pendingBookings },
    { name: 'Cancelled', value: bookingStats.cancelledBookings }
  ];

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Users stats */}
          <Card className="p-6 shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Users</p>
                <h3 className="text-2xl font-bold">{formatNumber(userStats.totalUsers)}</h3>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+{userStats.growth}%</span>
                  <span className="text-xs text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </Card>
          
          {/* Destinations stats */}
          <Card className="p-6 shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Destinations</p>
                <h3 className="text-2xl font-bold">{destinationStats.totalDestinations}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-gray-500">Top: </span>
                  <span className="text-sm text-zostel-teal ml-1">{destinationStats.topDestination}</span>
                </div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </Card>
          
          {/* Revenue stats */}
          <Card className="p-6 shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Revenue</p>
                <h3 className="text-2xl font-bold">{formatIndianRupees(revenueStats.totalRevenue)}</h3>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+{revenueStats.yearlyGrowth}%</span>
                  <span className="text-xs text-gray-500 ml-1">year over year</span>
                </div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </Card>
          
          {/* Bookings stats */}
          <Card className="p-6 shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Bookings</p>
                <h3 className="text-2xl font-bold">{formatNumber(bookingStats.totalBookings)}</h3>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-zostel-teal mr-1" />
                  <span className="text-sm text-zostel-teal">{formatNumber(bookingStats.pendingBookings)}</span>
                  <span className="text-xs text-gray-500 ml-1">pending</span>
                </div>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                <Building className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </Card>
        </div>
        
        {/* Revenue chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 shadow-md lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setTimeframe('monthly')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeframe === 'monthly'
                      ? 'bg-zostel-teal text-white'
                      : 'bg-gray-100 dark:bg-zostel-navy/30 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setTimeframe('yearly')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeframe === 'yearly'
                      ? 'bg-zostel-teal text-white'
                      : 'bg-gray-100 dark:bg-zostel-navy/30 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `₹${value/1000}k`}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatIndianRupees(value), 'Revenue']} 
                    cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                  />
                  <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          {/* Booking status chart */}
          <Card className="p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-6">Booking Status</h3>
            <div className="h-80 flex flex-col justify-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={bookingStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {bookingStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip formatter={(value) => formatNumber(value as number)} />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total bookings: {formatNumber(bookingStats.totalBookings)}
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Top destinations */}
        <Card className="p-6 shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-6">Top Performing Destinations</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Destination</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Bookings</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topDestinations.map((destination, index) => (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="py-3 px-4 text-sm">{destination.name}</td>
                    <td className="py-3 px-4 text-sm">{formatNumber(destination.bookings)}</td>
                    <td className="py-3 px-4 text-sm">{formatIndianRupees(destination.revenue)}</td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex items-center">
                        {index < 2 ? (
                          <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        ) : index === 2 ? (
                          <Activity className="h-4 w-4 text-blue-500 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-amber-500 mr-1" />
                        )}
                        <span className={
                          index < 2 
                            ? 'text-green-500' 
                            : index === 2 
                              ? 'text-blue-500' 
                              : 'text-amber-500'
                        }>
                          {index < 2 
                            ? '+' + (12 - index * 2) + '%' 
                            : index === 2 
                              ? 'Stable' 
                              : '-' + (index * 2) + '%'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </AdminLayout>
  );
};

export default Dashboard;
