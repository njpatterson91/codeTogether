import React from "react";
import Card from "../StyledComps/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export default function Post() {
  return (
    <Box
      sx={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "1rem",
      }}
    >
      <Card>
        <Box
          sx={{
            border: "2px solid black",
            borderRadius: "5px",
            marginBottom: "1rem",
            backgroundColor: "black",
          }}
        >
          <Typography>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Typography>
        </Box>

        <Grid container spacing={1}>
          <Grid item>
            <Button startIcon={<ThumbUpOffAltIcon />}></Button>
          </Grid>
          <Grid item>
            <Button startIcon={<ThumbDownOffAltIcon />}></Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
