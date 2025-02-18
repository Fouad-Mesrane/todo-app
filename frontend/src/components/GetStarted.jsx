import React from 'react'
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <Link
    to={"/auth/login"}
    className="bg-primary text-white px-3 py-1 md:px-4 md:py-2 rounded mb-2 font-medium"
  >
    Get started
  </Link>
  )
}

export default GetStarted