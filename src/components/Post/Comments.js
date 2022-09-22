import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Comments = ({ comments, isExpanded, setIsExpanded }) => {
  return (
    <Accordion expanded={isExpanded} onChange={() => setIsExpanded(prev => !prev)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{comments.length} Comment/s</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {comments.map(comment => {
          return (
            <Box key={comment.datePosted}>
              <Typography>{comment.text}</Typography>
              <Typography color='green'>{comment.datePosted}</Typography>
              <Divider />
            </Box>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Comments;
