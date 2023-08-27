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
    <div className="card flex gap-x-5 mb-5">
      <div>
        <img src={image} alt={doctor} className="rounded-full" />
      </div>
      <div>
        <h2 className="text-3xl mt-4">{doctor}</h2>
        <p>
          Meeting on{" "}
          <span className="font-bold">
            {" "}
            {date_day} {date_month} {date_year} at{" "}
            {time_hr.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {time_min.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
        </p>
      </div>
    </div>
  )
}

export default AppointmentCard
