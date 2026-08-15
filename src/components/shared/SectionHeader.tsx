import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeader({ title, subtitle, className, as: Component = 'h2' }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center sm:mb-16", className)}>
      <Component className="text-balance font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </Component>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
