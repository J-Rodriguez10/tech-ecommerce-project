/*  
  Displays a section introducing team members.  
  Each team member has a name, role, and picture with hover effects that reveal their details and social media links.  
*/

import Image from "next/image"
import SectionHeader from "../section-header"
import Facebook from "../svgs/social-media-svgs/facebook"
import X from "../svgs/social-media-svgs/x"
import Linkedin from "../svgs/social-media-svgs/linkedin"

interface TeamMemberCardProps {
  teamMember: string
  role: string
  picture: string
}

function TeamMemberCard({ teamMember, role, picture }: TeamMemberCardProps) {
  return (
    <div className="group relative h-[350px] w-[400px] flex-1 overflow-hidden s:max-h-[600px] s:min-h-[600px] s:min-w-full m:max-h-[190px] l:h-[255px]">
      {/* Overlay */}
      <div className="absolute inset-0 z-[10] flex flex-col justify-end bg-[#3333339a] p-6 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        {/* Team member's details */}
        <div className="mb-[2.5rem] font-[500] s:!mb-[2.5rem] m:mb-[1rem]">
          <p className="text-[1.25rem] font-[600]">{teamMember}</p>
          <p>{role}</p>
        </div>

        {/* Team member's socials */}
        <ul className="flex gap-[2rem]">
          <li>
            <Facebook className="orange-hover max-h-[15px] max-w-[15px] cursor-pointer" />
          </li>
          <li>
            <X className="orange-hover max-h-[15px] max-w-[15px] cursor-pointer" />
          </li>
          <li>
            <Linkedin className="orange-hover max-h-[20px] max-w-[20px] cursor-pointer" />
          </li>
        </ul>
      </div>

      {/* Image */}
      <Image
        src={picture}
        alt={teamMember}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  )
}

function OurTeamSection() {
  const TEAM_MEMBERS_DUMMY_DATA: TeamMemberCardProps[] = [
    {
      teamMember: "Mia Foster",
      role: "Chief Financial",
      picture:
        "https://quickstep007.myshopify.com/cdn/shop/files/team-img-2_442x442.png?v=1704974621"
    },
    {
      teamMember: "Williams",
      role: "Chief Executive",
      picture:
        "https://quickstep007.myshopify.com/cdn/shop/files/team-img-1_442x442.png?v=1704974620"
    },
    {
      teamMember: "Olivia",
      role: "Chief Technology",
      picture:
        "https://quickstep007.myshopify.com/cdn/shop/files/team-img-3_442x442.png?v=1704974621"
    },
    {
      teamMember: "Monica Hayes ",
      role: "Head of Logistics",
      picture:
        "https://quickstep007.myshopify.com/cdn/shop/files/team-img-4_442x442.png?v=1704974620"
    }
  ]

  return (
    <section className="my-[5rem]">
      <SectionHeader>Our Team</SectionHeader>

      <div className="flex gap-6 s:flex-col s:gap-8">
        {TEAM_MEMBERS_DUMMY_DATA.map((member, i) => (
          <TeamMemberCard {...member} key={i} />
        ))}
      </div>
    </section>
  )
}

export default OurTeamSection
