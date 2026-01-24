"use client"

import { TrendingUp, Users, Eye, MessageCircle } from "lucide-react"

export default function Analytics() {
  const websiteStats = [
    { name: "Page Views", value: "12,543", change: "+12%", icon: Eye },
    { name: "Unique Visitors", value: "3,421", change: "+8%", icon: Users },
    { name: "Contact Forms", value: "89", change: "+23%", icon: MessageCircle },
    { name: "Conversion Rate", value: "2.6%", change: "+5%", icon: TrendingUp },
  ]

  const popularPages = [
    { page: "Home", views: 4521, percentage: 36 },
    { page: "Services", views: 2890, percentage: 23 },
    { page: "About", views: 1654, percentage: 13 },
    { page: "Contact", views: 1432, percentage: 11 },
    { page: "Blog", views: 1098, percentage: 9 },
    { page: "How It Works", views: 948, percentage: 8 },
  ]

  const trafficSources = [
    { source: "Organic Search", visitors: 1890, percentage: 55 },
    { source: "Direct", visitors: 821, percentage: 24 },
    { source: "Social Media", visitors: 445, percentage: 13 },
    { source: "Referral", visitors: 265, percentage: 8 },
  ]

  const monthlyData = [
    { month: "Jan", visitors: 2100, leads: 45 },
    { month: "Feb", visitors: 2400, leads: 52 },
    { month: "Mar", visitors: 2800, leads: 61 },
    { month: "Apr", visitors: 3200, leads: 68 },
    { month: "May", visitors: 3600, leads: 75 },
    { month: "Jun", visitors: 3421, leads: 89 },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your website performance and user engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {websiteStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Trends Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Trends</h2>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(data.visitors / 4000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{data.visitors.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{data.leads} leads</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Pages</h2>
          <div className="space-y-4">
            {popularPages.map((page) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className="w-20 text-sm font-medium text-gray-900">{page.page}</div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${page.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{page.views.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{page.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className="w-24 text-sm font-medium text-gray-900">{source.source}</div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${source.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{source.visitors.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{source.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New contact form submission</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Blog post published</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">High traffic spike detected</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New service inquiry</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Best Performing Service</h3>
            <p className="text-blue-700">Optimized Product Listing</p>
            <p className="text-sm text-blue-600 mt-1">45% of inquiries</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Top Traffic Day</h3>
            <p className="text-green-700">Tuesday</p>
            <p className="text-sm text-green-600 mt-1">Average 650 visitors</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Peak Hours</h3>
            <p className="text-purple-700">2:00 PM - 4:00 PM</p>
            <p className="text-sm text-purple-600 mt-1">EST timezone</p>
          </div>
        </div>
      </div>
    </div>
  )
}
