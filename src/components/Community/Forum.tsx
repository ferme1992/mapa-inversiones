import {
  Box,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Forum() {
  const forumTopics = [
    {
      title: "Transparencia en la gestión pública",
      author: "Luciana Parra",
      role: "BID TEAM",
      content:
        "Discute y comparte ideas sobre cómo mejorar la transparencia en la administración pública. Abordaremos políticas actuales, iniciativas futuras efectivas y exploraremos herramientas innovadoras para fomentar una mayor rendición de cuentas.",
      likes: 2,
      comments: 1,
    },
    {
      title: "Innovación en el análisis de datos públicos",
      author: "Luciana Parra",
      role: "BID TEAM",
      content:
        "Explora las últimas tendencias y técnicas en el análisis de datos gubernamentales. Comparte tus experiencias con herramientas de visualización de datos, análisis predictivo y el uso de datos abiertos para mejorar la toma de decisiones públicas.",
      likes: 3,
      comments: 3,
    },
    {
      title: "Participación ciudadana y control social",
      author: "Luciana Parra",
      role: "BID TEAM",
      content:
        "Debate sobre las mejores prácticas para involucrar a la ciudadanía en la fiscalización del gasto público. Compartir estrategias exitosas para aumentar la participación ciudadana y fortalecer el control social en los proyectos de inversión pública.",
      likes: 3,
      comments: 3,
    },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Foro
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Únete a la conversación con expertos y ciudadanos interesados en mejorar
        la gestión pública.
      </Typography>
      <Grid container spacing={3}>
        {forumTopics.map((topic, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {topic.title}
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ width: 24, height: 24, mr: 1 }}>LP</Avatar>
                  <Typography variant="subtitle2">{topic.author}</Typography>
                  <Typography variant="caption" sx={{ ml: 1 }}>
                    {topic.role}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {topic.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="like">
                  <ThumbUpOutlinedIcon />
                </IconButton>
                <Typography variant="caption">{topic.likes}</Typography>
                <IconButton aria-label="comment">
                  <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
                <Typography variant="caption">{topic.comments}</Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Forum;
