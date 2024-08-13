import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

function MeetCommunity() {
  const cards = [
    {
      action: "Action",
      header: "Card Header",
      subheader: "Card Subheader",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    },
    {
      action: "Action",
      header: "Card Header",
      subheader: "Card Subheader",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    },
    {
      action: "Action",
      header: "Card Header",
      subheader: "Card Subheader",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    },
  ];

  return (
    <Box py={7} px={20}>
      <Typography variant="h4" align="center" gutterBottom>
        Conoce nuestra comunidad
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <Box
                height={100}
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                }}
              />
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  {card.action}
                </Typography>
                <Typography variant="h5" component="div">
                  {card.header}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {card.subheader}
                </Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MeetCommunity;
