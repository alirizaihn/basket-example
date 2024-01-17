import { Button, Result } from 'antd'
import React from 'react'

const NotFoundView = () => {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button className="bg-blue-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base" href='/'>Back Home</Button>}
    
  />
  )
}

export default NotFoundView