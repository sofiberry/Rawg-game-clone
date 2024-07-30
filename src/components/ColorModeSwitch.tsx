import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [mode, setMode] = useState("Light");
  const changeText = () => {
    toggleColorMode();
    setMode(mode === "Dark" ? "Light" : "Dark");
  };
  return (
    <HStack>
      <Switch
        id='mode'
        isChecked={colorMode === "dark"}
        onChange={changeText}
      />
      <Text whiteSpace='nowrap'>
        <label htmlFor='mode'>{mode} Mode</label>
      </Text>
    </HStack>
  );

  // const { toggleColorMode, colorMode } = useColorMode();
  // return (
  //   <HStack>
  //     <Switch
  //       colorScheme='green'
  //       isChecked={colorMode === "dark"}
  //       onChange={toggleColorMode}
  //     />
  //     <Text whiteSpace='nowrap'>Dark Mode</Text>
  //   </HStack>
  // );
};

export default ColorModeSwitch;
