import React from 'react';
import { Box, Text } from './app.style'
import './default.animation.css'
interface Props {
  texts: Array<any>
  textColor: string
  backgroundColor: string
  borderColor: String
  dotColor: string
  dotSize: number
}
function App({ texts, backgroundColor, textColor, borderColor, dotColor, dotSize }: Props) {
  const [text, setText] = React.useState(texts[0]);
  const [textLength, setTextLength] = React.useState(0);

  const [fadeState, setFadeState] = React.useState('fade-in');

  React.useEffect(() => {
    const fadeInterval = setInterval(() => {
      if (fadeState === 'fade-in') {
        setFadeState('fade-out');
      } else {
        setFadeState('fade-in');
        if (textLength < texts.length - 1) {
          setTextLength(textLength + 1);
        } else {
          setTextLength(0);
        }
        setText(() => texts[textLength]);
      }
    }, 1000);
    return () => clearInterval(fadeInterval);
  }, [fadeState, textLength, texts]);
  return (
    <Box.Container backgroundColor={`${backgroundColor}`} borderColor={`${borderColor}`} >
      <Box.DotOne dotSize={dotSize} dotColor={`${dotColor}`}></Box.DotOne>
      <Box.DotTwo dotSize={dotSize} dotColor={`${dotColor}`}></Box.DotTwo>
      <Box.DotThree dotSize={dotSize} dotColor={`${dotColor}`}></Box.DotThree>
      <Box.DotFour dotSize={dotSize} dotColor={`${dotColor}`}></Box.DotFour>
      <Text className={fadeState} textColor={`${textColor}`}>
        {text}
      </Text>
    </Box.Container >
  )
}

export default App;
