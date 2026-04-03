import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 350) {
          return 0;
        }
        const diff = Math.random() * 20;
        return Math.min(oldProgress + diff, 350);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="indeterminate" value={progress} sx={{ bgcolor: "#d52b1e" }} />
    </Box>
  );
}
