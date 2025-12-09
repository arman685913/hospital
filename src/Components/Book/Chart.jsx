import React from "react";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function Chart({ doctor }) {
  const data = doctor;

  const margin = { top: 20, right: 20, bottom: 50, left: 20 };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
     Z`;

  const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta", "yellow"];

  const TriangleBar = ({ x, y, width, height, index }) => {
    if ([x, y, width, height].some(v => v == null)) return null;
    return (
      <path
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke="none"
        fill={colors[index % colors.length]}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={margin}>
        <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" />
        <YAxis />
        <Bar dataKey="consultationFee" shape={props => <TriangleBar {...props} />} />
      </BarChart>
    </ResponsiveContainer>
  );
}
