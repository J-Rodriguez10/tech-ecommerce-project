import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate: Date // The future date for which the countdown is set
  className?: string // Optional additional class names for styling
}

function Countdown({ targetDate, className = "" }: CountdownProps) {
  // State to store remaining time in days, hours, minutes, and seconds
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    /**
     * Calculates the time left until the target date
     * and updates the state accordingly.
     */
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      // If countdown is finished, set all values to zero
      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }

      // Convert milliseconds into days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    // Set interval to update countdown every second
    const intervalId = setInterval(calculateTimeLeft, 1000)

    // Initial call to set the state immediately on mount
    calculateTimeLeft()

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [targetDate])

  // Common styles for each countdown unit
  const timestampStyles =
    "flex min-h-[58px] w-[50px] px-[10px] items-center justify-center rounded-[0.5rem] bg-darkOrange text-center text-[1rem] font-[600] leading-tight l:w-[40px] l:min-h-[50px] l:text-[0.8rem]"

  return (
    <div className={`w-full ${className}`}>
      {/* Countdown display */}
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
