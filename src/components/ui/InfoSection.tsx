type InfoSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 text-[var(--primary)]">
        {title}
      </h2>
      {children}
    </div>
  );
}
