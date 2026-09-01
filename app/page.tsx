"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Page() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function analyze() {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      setResult(data.text || data.error);
    } finally {
      setLoading(false);
    }
  }

  const chartData = [
    { name: "好奇", value: 85 },
    { name: "共鳴", value: 72 },
    { name: "行動", value: 64 },
  ];

  return (
    <main className="max-w-3xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-black tracking-tight">HookAce LAB</h1>
      <p className="text-zinc-500 mt-2">貼上你的鉤子文案，AI 幫你拆解強度</p>

      <div className="mt-8 rounded-2xl border bg-white p-4 shadow-sm">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例如：我花了3年才懂的賺錢秘密..."
          className="w-full min-h-[120px] resize-none outline-none text-[15px]"
        />
        <button
          onClick={analyze}
          disabled={loading}
          className="mt-3 w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "分析中..." : "開始分析"}
        </button>
      </div>

      {result && (
        <div className="mt-6 grid gap-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm whitespace-pre-wrap text-[14px] leading-relaxed">
            {result}
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" fontSize={12} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="value" fill="#7c3aed" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </main>
  );
}
