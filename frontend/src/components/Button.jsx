import { Link, NavLink } from "react-router-dom"

export default function Button({
  title,
  linkTo,
  external = false,
  variant = "header",
  // activeClassName = "is-active"
}) {
  const className = `btn btn--${variant}`

  if (external) {
    return (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {title}
      </a>
    )
  }

  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        `${className} ${isActive ? 'is-active' : ""}`
      }
      end={linkTo === "/"}
    >
      {title}
    </NavLink>
  )
}