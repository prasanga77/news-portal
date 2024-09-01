import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Layout, LayoutContent, LayoutHeader, LayoutSidebar } from '../ui/layout';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Home, FileText, List, Share2, BarChart2, Settings } from 'lucide-react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const mockData = [
  { name: 'Article 1', views: 4000, likes: 2400, shares: 2400 },
  { name: 'Article 2', views: 3000, likes: 1398, shares: 2210 },
  { name: 'Article 3', views: 2000, likes: 9800, shares: 2290 },
  { name: 'Article 4', views: 2780, likes: 3908, shares: 2000 },
  { name: 'Article 5', views: 1890, likes: 4800, shares: 2181 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [editorData, setEditorData] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">42</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">13,720</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Likes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">22,306</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Article Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#8884d8" />
                    <Bar dataKey="likes" fill="#82ca9d" />
                    <Bar dataKey="shares" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </>
        );
      case 'create':
        return (
          <div>
            <h2 className="text-2xl font-bold">Create New Article</h2>
            <div className="mt-4">
              <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data);
                }}
              />
              <Button className="mt-4" onClick={() => console.log(editorData)}>
                Save Article
              </Button>
            </div>
          </div>
        );
      case 'manage':
        return <h2 className="text-2xl font-bold">Manage Articles</h2>;
      case 'social':
        return <h2 className="text-2xl font-bold">Social Media Interactions</h2>;
      case 'insights':
        return <h2 className="text-2xl font-bold">Article Insights</h2>;
      case 'settings':
        return <h2 className="text-2xl font-bold">Settings</h2>;
      default:
        return <h2 className="text-2xl font-bold">Select a tab</h2>;
    }
  };

  return (
    <Layout>
      <LayoutHeader className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">News Dashboard</h1>
      </LayoutHeader>
      <LayoutSidebar className="bg-gray-100 p-4">
        <nav>
          <ul className="space-y-2">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'create', icon: FileText, label: 'Create Article' },
              { id: 'manage', icon: List, label: 'Manage Articles' },
              { id: 'social', icon: Share2, label: 'Social Media' },
              { id: 'insights', icon: BarChart2, label: 'Insights' },
              { id: 'settings', icon: Settings, label: 'Settings' },
            ].map((item) => (
              <li key={item.id}>
                <Button
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </LayoutSidebar>
      <LayoutContent className="p-6">{renderContent()}</LayoutContent>
    </Layout>
  );
};

export default Dashboard;
