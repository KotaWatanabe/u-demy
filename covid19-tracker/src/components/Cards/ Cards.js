import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/CardComponent';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID_19"
        ></CardComponent>
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID_19"
        ></CardComponent>
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths from COVID_19"
        ></CardComponent>
      </Grid>
    </div>

    //     <Grid
    //       item
    //       component={Card}
    //       xs={12}
    //       md={3}
    //       className={cx(styles.card, styles.deaths)}
    //     >
    //       <CardContent>
    //         <Typography color="textSecondary" gutterBottom>
    //           Deaths
    //         </Typography>
    //         <Typography variant="h5">
    //           {' '}
    //           <CountUp
    //             start={0}
    //             end={deaths.value}
    //             duration={2.5}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textSecondary">
    //           {new Date(lastUpdate).toDateString()}
    //         </Typography>
    //         <Typography variant="body2">
    //           Number of Deaths of COVID-19
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default Cards;
