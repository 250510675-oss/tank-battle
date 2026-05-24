"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "品牌重塑",
    description: "为新锐科技公司打造的全新品牌视觉系统",
    category: "品牌设计",
    tags: ["品牌", "视觉设计", "VI系统"],
    year: "2024",
    color: "bg-rose-500/10",
  },
  {
    id: 2,
    title: "移动应用界面",
    description: "健康管理App的用户界面设计与交互优化",
    category: "UI/UX设计",
    tags: ["移动端", "React Native", "Figma"],
    year: "2024",
    color: "bg-blue-500/10",
  },
  {
    id: 3,
    title: "电商平台",
    description: "现代化电商网站的设计与前端开发",
    category: "网站设计",
    tags: ["电商", "Next.js", "Tailwind"],
    year: "2023",
    color: "bg-emerald-500/10",
  },
  {
    id: 4,
    title: "设计系统",
    description: "企业级设计系统与组件库构建",
    category: "设计系统",
    tags: ["组件库", "Storybook", "TypeScript"],
    year: "2023",
    color: "bg-amber-500/10",
  },
];

export default function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-muted text-sm mb-4">精选作品</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            最近项目
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group relative p-8 rounded-2xl border border-border bg-card transition-all duration-300 cursor-pointer ${
                hoveredId === project.id ? "border-muted" : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`absolute inset-0 rounded-2xl ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-muted text-xs uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-muted text-xs">{project.year}</span>
                </div>
                <h3 className="text-2xl font-medium mb-3 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-muted bg-background/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-sm text-muted group-hover:text-foreground transition-colors">
                  <span>查看详情</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
