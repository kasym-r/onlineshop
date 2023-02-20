import { FC } from 'react'

interface MainProps {
    popup?: boolean;
}

const Main: FC<MainProps> = ({ popup }) => {
  return (
    <div className='h-[3.9vh]'></div>
  )
}

export default Main