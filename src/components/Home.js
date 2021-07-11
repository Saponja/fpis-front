import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { CustomButton } from "../controls/CustomButton";
import { CustomTextField } from "../controls/CustomTextField";
import { useApi } from "../hooks/useApi";
import { useForm } from "../hooks/useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(1),
  },
  start: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    marginLeft: "4rem",
    marginBottom: "2rem",
    borderBottom: "solid 1px",
    width: "80vw",
  },
}));

const initialValues = {
  id: "",
  naziv: "",
};

export const Home = (params) => {
  const classes = useStyles();

  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [forUpdate, setForUpdate] = useState(false);
  const {getById, Add, Update} = useApi();

  const onClickPronadji = e => {
    e.preventDefault();
    getById("sredstvo/", values.id).then(response => {
      setValues({
        ...values,
        naziv : response.nazivSredstva,
      })
    }, error => {
      alert(error.response.data.error);
    })
    setForUpdate(true)
  }

  const onClickPotvrdi = e => {
    e.preventDefault();

    if(!forUpdate){
      Add("sredstvo/", {nazivSredstva: values.naziv}).then(
        response => {
          alert("Uspesno ste ubacili sredsvo")
        },
        error => {
          alert(error.response.data.error);
        }
      );
     resetForm()

    }else{
      Update("sredstvo/", values.id, {nazivSredstva : values.naziv}).then(response => {
        alert("Uspesno ste update-ovali prevozno sredstvo")
        setValues({
          ...values,
          naziv : response.nazivSredstva
        })
      }, error => {
        alert(error.response.data.error);

      })
      setForUpdate(false)
    }
    
  }

  const onClickPonisti = (e) => {
    e.preventDefault();
    resetForm()
    
  }

  const resetForm = () => {
    setValues({
      id : "",
      naziv : ""
    })
    setForUpdate(false)

  }






  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h5">Unos/Izmena prevoznog sredstva</Typography>
      </div>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <CustomTextField name="id" value={values.id} label="Sifra prevoznog sredstva" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={4}>
          <div className={classes.buttons}>
            <div>
              <CustomButton
                name="pronadji"
                text="Pronadji"
                className={classes.button}
                onClick={onClickPronadji}
              />
            </div>
            <div>
              <CustomButton
                name="obrisi"
                text="Obrisi"
                className={classes.button}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <CustomTextField name="naziv" value={values.naziv} label="Naziv prevoznog sredstva" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container alignContent="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} className={classes.start}>
          <CustomButton
            name="ponisti"
            text="Ponisti unos"
            className={classes.button}
            onClick={onClickPonisti}
            
          />
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3} className={classes.start}>
          <CustomButton
            name="potvrdi"
            text="Potvrdi unos"
            className={classes.button}
            onClick={onClickPotvrdi}

          />
        </Grid>
      </Grid>
    </div>
  );
};
