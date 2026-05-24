export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl">
        <p className="text-muted text-sm mb-6">你好，我是</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mb-8">
          <span className="font-serif italic text-accent">张明</span>
          <span className="text-foreground">，</span>
          <br className="hidden md:block" />
          <span className="text-foreground">一名创意设计师</span>
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          专注于构建精致的数字产品与用户界面。我相信设计与技术的交融，
          能够创造出不仅美观，而且功能卓越的体验。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-full hover:bg-accent transition-colors"
          >
            查看作品
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium text-sm rounded-full hover:bg-card transition-colors"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  );
}
