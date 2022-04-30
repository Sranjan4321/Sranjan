import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Grid } from "./product.styled";
const TennerGoods = () => {
  let [states, setState] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let res = await fetch("http://localhost:8080/product");
      let data = await res.json();
      // console.log(data);
      setState(data);
    };
    getdata();
  }, []);
  return (
    <Grid>
      {states.map((elem) => (
        <Item key={elem.id} elem={elem} />
      ))}
    </Grid>
  );
};

export default TennerGoods;
