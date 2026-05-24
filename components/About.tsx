const skills = [
  { name: "UI/UX 设计", level: 95 },
  { name: "品牌设计", level: 90 },
  { name: "前端开发", level: 85 },
  { name: "动效设计", level: 80 },
];

const experiences = [
  {
    period: "2022 — 至今",
    role: "高级产品设计师",
    company: "字节跳动",
    description: "负责核心产品的用户体验设计与设计系统维护",
  },
  {
    period: "2020 — 2022",
    role: "UI/UX 设计师",
    company: "阿里巴巴",
    description: "参与电商平台的界面设计与交互优化",
  },
  {
    period: "2018 — 2020",
    role: "视觉设计师",
    company: "网易",
    description: "负责品牌视觉设计与营销物料制作",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-muted text-sm mb-4">关于我</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
              热爱创造，追求卓越
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                我是一名拥有6年经验的创意设计师，专注于用户界面设计与数字产品体验。
                我相信好的设计不仅是美观的，更应该是功能性的、可访问的。
              </p>
              <p>
                在过去的几年里，我有幸与多家知名科技公司合作，参与了从品牌设计到产品界面的各类项目。
                我热衷于探索设计与技术的边界，用代码将设计变为现实。
              </p>
              <p>
                工作之余，我喜欢摄影、阅读和探索新的设计趋势。
                我相信持续学习是保持创造力的关键。
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-lg font-medium">专业技能</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-8">工作经历</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-foreground" />
                  <p className="text-muted text-xs mb-2">{exp.period}</p>
                  <h4 className="text-foreground font-medium mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-accent text-sm mb-2">{exp.company}</p>
                  <p className="text-muted text-sm">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-medium mb-4">工具与技术</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Sketch",
                  "Adobe XD",
                  "Photoshop",
                  "Illustrator",
                  "After Effects",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs text-muted bg-background rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
