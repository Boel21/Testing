"use-client";
// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { Box, Typography, useTheme, IconButton } from "@mui/material";

// Components
import ProgressCircle from "./ProgressCircle";

interface Stat_Box {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: any;
  increase: string;
}
const StatBox: React.FC<Stat_Box> = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
