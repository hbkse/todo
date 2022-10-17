import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export interface TodoItemProps {
  content: string
}

function TodoItem(props: TodoItemProps) {
  return (
    <Box>
      <Typography align="left">
        {props.content}
      </Typography>
    </Box>
  );
};

export default TodoItem;