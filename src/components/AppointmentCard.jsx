import React from "react"

const AppointmentCard = ({
  image,
  doctor,
  date_month,
  date_day,
  date_year,
  time_hr,
  time_min,
}) => {
  return (
    <div>
      <img src={image} alt={doctor} />
      <h2>{doctor}</h2>
      <p>
        Meeting on {date_day} {date_month} {date_year} at{" "}
        {time_hr.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {time_min.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </p>
    </div>
  )
}

export default AppointmentCard
