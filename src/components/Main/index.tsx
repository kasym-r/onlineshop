import { FC } from 'react'

interface MainProps {
    popup?: boolean;
}

const Main: FC<MainProps> = ({ popup }) => {
  return (
    <div className='h-[61.6vh]'></div>
  )
}

export default Main