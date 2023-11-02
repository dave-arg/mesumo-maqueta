import { Box, Text, Logo } from "@dave-arg/my-lib";
import React from "react";

export const Footer = () => {
  return (
    <Box
      background={"linear-gradient(-45deg, #279D2EFF, #25B4BDFF)"}
      padding={"24px 0px"}
    >
      {" "}
      <Box
        maxWidth={"1152px"}
        width={["100%"]}
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
      >
        <Logo />
        <Text
          border={"solid white"}
          borderWidth={"2px 0px 0px 0px"}
          mt={"16px"}
          pt={"16px"}
          color={"white"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          elit ut aliquam purus. Dui ut ornare lectus sit amet est. Egestas quis
          ipsum suspendisse ultrices gravida dictum fusce ut. Nulla malesuada
          pellentesque elit eget gravida cum sociis natoque. Sapien nec sagittis
          aliquam malesuada. Quis eleifend quam adipiscing vitae proin sagittis
          nisl. At elementum eu facilisis sed odio morbi quis commodo odio.
          Elementum tempus egestas sed sed risus pretium. Penatibus et magnis
          dis parturient montes nascetur ridiculus mus mauris. Morbi tincidunt
          augue interdum velit euismod in pellentesque massa. Mi eget mauris
          pharetra et ultrices neque ornare aenean. Velit aliquet sagittis id
          consectetur purus ut faucibus pulvinar. Eget egestas purus viverra
          accumsan in. Facilisi cras fermentum odio eu feugiat pretium nibh.
          Commodo elit at imperdiet dui accumsan. Mi in nulla posuere
          sollicitudin aliquam ultrices sagittis orci a. Praesent tristique
          magna sit amet purus gravida quis blandit turpis. Aliquam faucibus
          purus in massa tempor nec feugiat nisl pretium. Tincidunt nunc
          pulvinar sapien et. Euismod quis viverra nibh cras pulvinar mattis
          nunc sed. Aliquet lectus proin nibh nisl condimentum. Erat imperdiet
          sed euismod nisi porta lorem mollis aliquam ut. In nibh mauris cursus
          mattis molestie. Proin sed libero enim sed faucibus turpis in eu mi.
          Eget nunc lobortis mattis aliquam faucibus purus in. Orci dapibus
          ultrices in iaculis. Lectus arcu bibendum at varius vel pharetra vel.
          Semper viverra nam libero justo laoreet sit amet cursus. Sit amet
          porttitor eget dolor morbi non arcu risus quis. Sed enim ut sem
          viverra aliquet eget sit. Sit amet cursus sit amet dictum sit amet
          justo donec. At ultrices mi tempus imperdiet nulla. Venenatis a
          condimentum vitae sapien. Est pellentesque elit ullamcorper dignissim
          cras tincidunt lobortis. Arcu odio ut sem nulla pharetra. Nunc
          lobortis mattis aliquam faucibus purus. Placerat in egestas erat
          imperdiet sed euismod.
        </Text>
      </Box>
    </Box>
  );
};
