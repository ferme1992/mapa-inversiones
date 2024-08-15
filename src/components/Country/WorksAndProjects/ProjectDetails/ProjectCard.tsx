import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProjectCard = ({ image, price, title }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" color="primary">
          ${price.toLocaleString()}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Button>Ver más</Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
