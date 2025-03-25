import React from "react";
import Body from "@layout/Body";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaCalendarAlt, FaChalkboardTeacher, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const barData = [
    { name: "Assignments", count: 8 },
    { name: "Classes", count: 15 },
    { name: "Reports", count: 5 },
  ];

  const pieData = [
    { name: "Completed", value: 60 },
    { name: "Pending", value: 40 },
  ];

  const COLORS = ["#4caf50", "#f44336"];

  return (
    <Body title="Dashboard" showHeader>
      <Box sx={{ width: "100%", height: "auto", padding: 2, overflow: "auto" }}>
        <Stack spacing={2} height="100%">
          {/* Overview Cards */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between">
            {[
              { title: "Total Assignments", value: 8, icon: <FaClipboardList size={30} color="#3f51b5" /> },
              { title: "Total Classes", value: 15, icon: <FaChalkboardTeacher size={30} color="#4caf50" /> },
              { title: "Total Reports", value: 5, icon: <FaCalendarAlt size={30} color="#f44336" /> },
            ].map((item, index) => (
              <Card
                key={index}
                sx={{ backgroundColor: "#fff", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 2, flex: 1 }}
              >
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    {item.title}
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color="primary">
                    {item.value}
                  </Typography>
                  {item.icon}
                </CardContent>
              </Card>
            ))}
          </Stack>

          {/* Class Activity Bar Chart */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} flexGrow={1}>
            <Card sx={{ backgroundColor: "#fff", flex: 2, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Class Activity
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis stroke="#5550bd" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#3f51b5" barSize={50} radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Progress Report Pie Chart */}
            <Card sx={{ backgroundColor: "#fff", flex: 1, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Progress Report
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Box>
    </Body>
  );
};

export default Dashboard;
