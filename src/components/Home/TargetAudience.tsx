import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";

function TargetAudience() {
  const audiences = [
    {
      title: "Ciudadanía",
      description:
        "Pueden monitorear en tiempo real dónde y cómo invierten los gobiernos.",
    },
    {
      title: "Gobiernos / Agencias multilaterales",
      description:
        "Cuentan con información de calidad para poder tomar decisiones que mejoren la eficiencia de las inversiones.",
    },
    {
      title: "Sector privado",
      description:
        "Pueden mejorar su competitividad al actuar en un entorno de información abierta.",
    },
    {
      title: "Periodistas",
      description:
        "Pueden crear historias periodísticas usando los datos abiertos.",
    },
  ];

  return (
    <Stack overflow="hidden" spacing={2}>
      <Typography variant="h5">MapaInversiones contribuye a :</Typography>
      <Stack direction="row" spacing={4}>
        <List>
          {audiences.map((item, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{ py: 1, borderBottom: "1px" }}
            >
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                }
                secondary={item.description}
              />
            </ListItem>
          ))}
        </List>
        <Box
          height={330}
          width={517}
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          }}
        />
      </Stack>
    </Stack>
  );
}

export default TargetAudience;
