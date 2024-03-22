import { Stack } from "expo-router";
import React from "react";

const rootLayout = ({ children }) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        className="h-full flex justify-center items-center"
        name="name"
      />
    </Stack>
  );
};

export default rootLayout;
