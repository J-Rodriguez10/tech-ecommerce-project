interface SectionHeaderProps {
  children: React.ReactNode // Represents the main header or dynamic content for the section
  subHeader: string // Represents the sub header text for the section
  className?: string
}

function SectionHeader({
  children,
  subHeader,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h4 className="text-[2.75rem] font-[400]">{children}</h4>
      <p className="mb-[2.25rem] text-[1.25rem]">{subHeader}</p>
    </div>
  )
}

export default SectionHeader
