import React from "react";
import Body from "@layout/Body";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaClipboardList,
  FaStar,
} from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import useGlobalState from "@utils/useGlobalState";
import { Navigate, redirect } from "react-router-dom";

const barData = [
  { name: "Math", count: 8 },
  { name: "Science", count: 15 },
  { name: "English", count: 5 },
  { name: "Geography", count: 9 },
  { name: "Biology", count: 6 },
  { name: "Physics", count: 10 },
  { name: "Chemistry", count: 14 },
  { name: "Art", count: 4 },
  { name: "Music", count: 8 },
  { name: "Economics", count: 11 },
];
const pieData = [
  { name: "Math", value: 400 },
  { name: "Science", value: 300 },
  { name: "English", value: 200 },
  { name: "History", value: 278 },
  { name: "Geography", value: 189 },
];

const COLORS = [
  "#0a213e", // Base color for Math
  "#1d2f5b", // Lighter shade for Science
  "#2a3e7d", // Lighter shade for English
  "#3654a0", // Lighter shade for History
  "#4b6db6", // Lighter shade for Geography
];
const Dashboard = () => {
  const { state } = useGlobalState();

  if (!state.course) {
    return <Navigate to="/classes" replace />;
  }
  
  return (
    <Body title="Dashboard" showHeader>
      <Box sx={{ width: "100%", height: "auto", padding: 2, overflow: "auto" }}>
        <Stack spacing={2} height="100%">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
          >
            {[
              {
                title: "Total Assignments",
                value: 8,
                icon: <FaClipboardList size={20} color="#fff" />,
              },
              {
                title: "Total Classes",
                value: 15,
                icon: <FaChalkboardTeacher size={20} color="#fff" />,
              },
              {
                title: "Total Reports",
                value: 5,
                icon: <FaCalendarAlt size={20} color="#fff" />,
              },
              {
                title: "Total Grades",
                value: 95,
                icon: <FaStar size={20} color="#fff" />,
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "25%",
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#0a213e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    width: 48,
                    height: 48,
                    mr: 1,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    {item.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    {item.value}
                  </Typography>
                </Box>
                <IconButton style={{ marginLeft: "auto" }}>
                  <HiDotsVertical size={28} color="#333" />
                </IconButton>
              </Box>
            ))}
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            flexGrow={1}
          >
            <Card
              sx={{
                backgroundColor: "#fff",
                flex: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" color="#0a213e" gutterBottom>
                  Class Activity
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                  <div>
                    <BarChart
                      data={barData}
                      width={900}
                      height={400}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorMath"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3f51b5"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3f51b5"
                            stopOpacity={0}
                          />
                        </linearGradient>

                        <linearGradient
                          id="colorScience"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#4caf50"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#4caf50"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        stroke="#0a213e"
                        tick={{ fontSize: 14, fontWeight: "bold" }}
                      />
                      <YAxis
                        stroke="#0a213e"
                        tick={{ fontSize: 14, fontWeight: "bold" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0a213e",
                          borderRadius: "8px",
                          border: "none",
                          padding: "10px",
                        }}
                        itemStyle={{ color: "#fff", fontSize: 14 }}
                        labelStyle={{ color: "#fff", fontSize: 14 }}
                      />
                      <Bar
                        dataKey="count"
                        fill={COLORS[0]} // Solid color for Math
                        barSize={50}
                        radius={[5, 5, 0, 0]}
                        onMouseEnter={(e) => (e.target.style.opacity = 1)}
                        onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
                      />

                      <Bar
                        dataKey="count"
                        fill={COLORS[4]} // Solid color for Science
                        barSize={50}
                        radius={[5, 5, 0, 0]}
                        onMouseEnter={(e) => (e.target.style.opacity = 1)}
                        onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
                      />
                    </BarChart>
                  </div>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card
              sx={{
                backgroundColor: "#fff",
                flex: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  color="#0a213e"
                  gutterBottom
                  marginBottom={8}
                >
                  Progress Report
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart height={300} width={400}>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieData.map((entry, index) => {
                        return (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        );
                      })}
                    </Pie>

                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0a213e",
                        borderRadius: "8px",
                        border: "none",
                        padding: "10px",
                      }}
                      itemStyle={{ color: "#fff", fontSize: 14 }}
                    />
                    <Legend
                      wrapperStyle={{
                        color: "#0a213e",
                        fontSize: 14,
                        fontWeight: "bold",
                        paddingBottom: "10px",
                      }}
                      verticalAlign="top"
                      height={36}
                    />
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
