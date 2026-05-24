"use client";

import { useState } from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Dribbble", url: "https://dribbble.com" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-muted text-sm mb-4">联系方式</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
              {"让我们一起创造"}
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              如果您有项目想要合作，或者只是想打个招呼，
              我很乐意收到您的消息。通常我会在24小时内回复。
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@zhangming.design"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@zhangming.design
              </a>
              <a
                href="tel:+8613800138000"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +86 138 0013 8000
              </a>
              <p className="flex items-center gap-3 text-foreground">
                <svg
                  className="w-5 h-5 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                北京，中国
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors text-sm underline underline-offset-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted mb-2"
                >
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted transition-colors"
                  placeholder="您的姓名"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted mb-2"
                >
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted mb-2"
                >
                  消息
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted transition-colors resize-none"
                  placeholder="请输入您的消息..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent transition-colors"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
