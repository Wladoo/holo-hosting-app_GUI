import React from 'react';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
    }
};

const NotRegistered = (type, classes) => {
  console.log("type in not registered box", type);
  return (
    <Card className={classes.card} style={{margin:"2vh"}}>
      <div className="error" style={{textAlign:'center', margin:'0 auto'}}>
        <h2 style={{justifyContent:'center', color:"#0e094b", padding: 2, margin: '0 auto', background:'#fcfeff', border: '4px solid #00838d', fontWeight:'normal'}}>
          {translate(`pos.NotRegistered.${type}`)}
        </h2>
        <br/>
        <h5>Click the button below to register.</h5 >
      </div>
    </Card>
  );
}

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(NotRegistered);
