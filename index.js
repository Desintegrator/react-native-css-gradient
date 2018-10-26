import React from "react";
import { View, StyleSheet } from "react-native";
import generateGradient from "./generator";
import LinearGradient from 'react-native-linear-gradient';

export default ({ gradient, children, style }) => {
  const generated = generateGradient(gradient, {
    width: style.width,
    height: style.height
  });
  if (generated.length > 1) {
    return (
      <View style={[style, { position: "relative" }]}>
        {generated.map((obj, i) => (
          <LinearGradient style={[StyleSheet.absoluteFill]} {...obj} key={i} />
        ))}
        {children || null}
      </View>
    );
  }
  return (
    <LinearGradient style={style} {...generated[0]}>
      {children || null}
    </LinearGradient>
  );
};
