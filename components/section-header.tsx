// Props interface for SectionHeader component
interface SectionHeaderProps {
  children: React.ReactNode // The main content of the header (typically a title)
  subHeader?: string // Optional sub-header text for additional context or description
  className?: string // Optional additional CSS classes to style the component
}

function SectionHeader({
  children,
  subHeader = "",
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      {/* Main header text */}
      <h4 className="text-[2.75rem] font-[400] capitalize">{children}</h4>

      {/* Optional sub-header text */}
      <p className="mb-[2.25rem] text-[1.25rem]">{subHeader}</p>
    </div>
  )
}

export default SectionHeader
