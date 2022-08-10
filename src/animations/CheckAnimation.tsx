import { Player } from '@lottiefiles/react-lottie-player'


export const CheckAnimation = () => {
  return (
    <Player
      src='https://assets9.lottiefiles.com/packages/lf20_zujeqwno.json'
      loop
      autoplay
      style={{ height: '100px', width: '150px' }}
      speed={1}
    />
  )
}

