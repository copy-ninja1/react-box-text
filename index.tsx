import React from 'react';
import { Box, Text } from './app.style'
import './default.animation.css'
interface Props {
  texts: Array<any>
  textColor: String
  backgroundColor: String
  borderColor: String
  dotColor: String
}
function App({ texts, backgroundColor, textColor, borderColor, dotColor }: Props) {
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
      <Box.DotOne dotColor={`${dotColor}`}></Box.DotOne>
      <Box.DotTwo dotColor={`${dotColor}`}></Box.DotTwo>
      <Box.DotThree dotColor={`${dotColor}`}></Box.DotThree>
      <Box.DotFour dotColor={`${dotColor}`}></Box.DotFour>
      <Text className={fadeState} textColor={`${textColor}`}>
        {text}
      </Text>
    </Box.Container >
  )
}

export default App;
