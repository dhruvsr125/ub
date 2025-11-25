"use client";

import {
  Users,
  ShoppingBag,
  MessageCircle,
  TrendingUp,
  Clock,
  Eye,
  Star,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      name: "Total Clients",
      value: "127",
      change: "+12%",
      icon: Users,
      color: "blue",
    },
    {
      name: "Active Services",
      value: "89",
      change: "+8%",
      icon: ShoppingBag,
      color: "green",
    },
    {
      name: "New Leads",
      value: "23",
      change: "+23%",
      icon: MessageCircle,
      color: "purple",
    },
    {
      name: "Revenue Growth",
      value: "34%",
      change: "+5%",
      icon: TrendingUp,
      color: "orange",
    },
  ];

  const recentContacts = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      company: "TechStart Inc",
      message: "Interested in AI-optimized product listing services",
      time: "2 hours ago",
      status: "new",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@shopify.com",
      company: "E-Commerce Plus",
      message: "Need help with marketplace ad management",
      time: "4 hours ago",
      status: "responded",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@amazon.com",
      company: "Digital Goods Co",
      message: "Looking for complete e-commerce automation",
      time: "1 day ago",
      status: "in-progress",
    },
  ];

  const recentActivity = [
    {
      action: "New contact form submission",
      user: "Sarah Johnson",
      time: "2 hours ago",
      type: "contact",
    },
    {
      action: "Blog post published",
      user: "Admin",
      time: "5 hours ago",
      type: "content",
    },
    {
      action: "Service inquiry received",
      user: "Mike Chen",
      time: "1 day ago",
      type: "inquiry",
    },
    {
      action: "Client onboarding completed",
      user: "Emily Davis",
      time: "2 days ago",
      type: "success",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "responded":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "contact":
        return <MessageCircle className="h-4 w-4 text-blue-600" />;
      case "content":
        return <Eye className="h-4 w-4 text-green-600" />;
      case "inquiry":
        return <Star className="h-4 w-4 text-purple-600" />;
      case "success":
        return <TrendingUp className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600 ml-1">
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  from last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Recent Contact Submissions
            </h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {contact.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          contact.status
                        )}`}
                      >
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {contact.email} • {contact.company}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      {contact.message}
                    </p>
                    <p className="text-xs text-gray-500">{contact.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center">
            <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Add New Client</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center">
            <ShoppingBag className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Create Service</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center">
            <MessageCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Send Newsletter</p>
          </button>
        </div>
      </div>
    </div>
  );
}
