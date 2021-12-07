import * as React from "react";
import Card from "@mui/material/Card";
import "../../css/card.css"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import food from "../../assets/img/food.jpg";
import { grey } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import {useEffect, useState} from "react";

export default function MediaCard(props) {
  const grey800 = grey[800];
  const history = useHistory();
  const [data, setData] = useState({
    ImageUrl:'',
    EventTitle:'',
    PresenterName:'',
    Date:'',
    EventLink:''
  });

  useEffect(() => {
    setData(props.eventData);
  },[props.eventData]);
  //console.log(props.eventData);

  const viewEventsPage = () => {
    history.push("/view-event/123");
  };

  return (
    <Card
      sx={{ maxWidth: 345, borderRadius: 5 }}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <CardActionArea onClick={viewEventsPage}>
        <CardMedia
          component="img"
          height="140"
          image={data?data.ImageUrl:''}
          alt="green iguana"
        />
        {/*<CardMedia*/}
        {/*    component="img"*/}
        {/*    height="140"*/}
        {/*    image={data?data.ImageUrl:''}*/}
        {/*    style={{objectFit:"contain",margin:10}}*/}
        {/*    alt="green iguana"*/}
        {/*/>*/}
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: 18, pb: 2 }}
            gutterBottom
            component="div"
          >
            {data?data.EventTitle:''}
          </Typography>
          <Typography sx={{ mx: "auto", pb: 1 }} variant="body2">
            {data?data.PresenterName:''}
          </Typography>
          <Typography sx={{ mx: "auto" }} variant="body2">
            {data?data.Date:''}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ pb: 3 }}>
        <Button onClick={() => { }}
          sx={{ borderRadius: 2, mx: "auto", fontWeight: 600 }}
          size="small"
          style={{ backgroundColor: grey800, color: "white" }}
        >
          <a target={'_blank'} href={data?data.EventLink:''} className={"anchor-style"}> View Event </a>
        </Button>
      </CardActions>
    </Card>
  );
}
