import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marco Monteiro</Text>
          <Text color="gray.300" fontSize="small">
            marcomonteiro94@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Marco Monteiro"
        src="https://github.com/MarcoMonteiro94.png"
      />
    </Flex>
  );
}

export default Profile;
