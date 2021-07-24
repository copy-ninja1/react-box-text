import React from 'react';
import './App.css';
import { Box, Text } from './app.style'

interface Props {
  texts: Array<any>;
}
function App({ texts }: Props) {
  const [text, setText] = React.useState('Buy');
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
    <Box.Container>
      <Box.DotOne></Box.DotOne>
      <Box.DotTwo></Box.DotTwo>
      <Box.DotThree></Box.DotThree>
      <Box.DotFour></Box.DotFour>
      <Text className={fadeState}>
        {text}
      </Text>
    </Box.Container>
  )
}

export default App;
