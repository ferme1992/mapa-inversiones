import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import Image from "next/image";

function TargetAudience() {
  const audiences = [
    {
      title: "Los ciudadanos",
      description:
        "Permite monitorear en tiempo real dónde y cómo invierten los gobiernos.",
    },
    {
      title: "Los Gobiernos /  Agencias multilaterales",
      description:
        "Cuentan con información de calidad para poder tomar decisiones que mejoren la eficiencia de las inversiones.",
    },
    {
      title: "El sector privado",
      description:
        "Puede mejorar su competitividad al actuar en un entorno de información abierta.",
    },
    {
      title: "Los periodistas",
      description:
        "Pueden crear historias periodísticas usando los datos abiertos.",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={20}
      py={8}
      bgcolor="#EFF4F7"
    >
      <Stack overflow="hidden" spacing={2}>
        <Typography fontWeight={700} fontSize={28}>
          MapaInversiones contribuye a :
        </Typography>
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
          <Image
            src={"/assets/audience_section.png"}
            alt={`Audience section`}
            height={330}
            width={517}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default TargetAudience;
