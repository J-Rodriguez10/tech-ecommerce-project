import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate: Date // Target date for the countdown
  className?: string
}

function Countdown({ targetDate, className = "" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Function to calculate time left
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) // Days remaining
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24) // Hours remaining
      const minutes = Math.floor((difference / (1000 * 60)) % 60) // Minutes remaining
      const seconds = Math.floor((difference / 1000) % 60) // Seconds remaining

      setTimeLeft({ days, hours, minutes, seconds })
    }

    // Update the countdown every second
    const intervalId = setInterval(calculateTimeLeft, 1000)

    // Initial call to set the state right away
    calculateTimeLeft()

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [targetDate])

  const timestampStyles =
    "flex min-h-[58px] w-[50px] px-[10px] items-center justify-center rounded-[0.5rem] bg-darkOrange text-center text-[1rem] font-[600] leading-tight l:w-[40px] l:min-h-[50px] l:text-[0.8rem]"

  return (
    <div className={`w-full ${className}`}>
      <ul className="flex w-full justify-between text-white s:gap-2 l:justify-start l:gap-[10px]">
        <li className={timestampStyles}>{timeLeft.days} Days</li>
        <li className={timestampStyles}>{timeLeft.hours} Hr</li>
        <li className={timestampStyles}>{timeLeft.minutes} Min</li>
        <li className={timestampStyles}>{timeLeft.seconds} Sec</li>
      </ul>
    </div>
  )
}

export default Countdown
