import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
// import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const CARD_OPTIONS = {
  hidePostalCode: true,
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#04AA6D",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#04AA6D"
      }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};

const CardField = ({ onChange }) => (
  <Box p={1} mt={1} style={{ borderRadius: "5px", borderColor: "rgba(0, 0, 0, 0.2)", borderStyle: "solid", borderWidth: '1px' }}>
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </Box>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <Button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    fullWidth
    variant="outlined"
    color="primary"
    disabled={processing || disabled}
    style={{ 
      marginRight: '10px', 
      fontWeight: 'bold', 
      backgroundColor: "#04AA6D",
      borderColor: "white",
      color: 'white'
    }}
  >
    {processing ? "Processing..." : children}
  </Button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

function PaymentPage(props) {

  const packageType = props.match.params.packageType;

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: billingDetails
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
      setTimeout(()=> {
        props.history.push('/');
      }, 5000)
    }
  };

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    root: {
      height: '89vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/user/bioxmech/likes/)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const tiers = [
    {
      title: 'Lite',
      price: '39.99',
      description: ['2 hour per week', 'Help center access', 'Email support'],
      buttonText: 'Subscribe Now',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '59.99',
      description: [
        '5 hours per week',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'ShareFinner',
      price: '88.88',
      description: [
        '8 hours per week',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Subscribe Now',
      buttonVariant: 'outlined',
    },
  ];

  const tier = tiers.filter(tier => tier.title === packageType);

  
  return paymentMethod ? (
    <Container maxWidth="lg">
      <Box mt={10} style={{ align: 'center', textAlign: 'center' }}>
        <img src={'https://source.unsplash.com/fvpgfw3IF1w'} style={{ width: '50%' }} alt='...' />
        <Typography variant="h3">
          Payment is successful!!
        </Typography>
        It will be processed immediately and your access to the terminal will be swift!
        <br />
        <Typography variant="body1">
          Thank you for using ShareFin. 
        </Typography>
        <Typography variant="body1">
          You will be redirected to <Link href="/">Home</Link> in 5 seconds
        </Typography>
      </Box>
    </Container>
  ) : (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <Typography variant="h3">
              Subscription
            </Typography>
            <Box mt={5} style={{width:"80%"}}>
              <Card>
                <CardHeader
                  title={tier[0].title}
                  subheader={tier[0].subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier[0].title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier[0].price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier[0].description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <Typography variant="h2">
              Payment
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
                id="name"
                placeholder="Jane Doe"
                autoComplete="name"
                value={billingDetails.name}
                onChange={(e) => {
                  setBillingDetails({ ...billingDetails, name: e.target.value });
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                label="Email"
                id="email"
                type="email"
                placeholder="janedoe@gmail.com"
                required
                fullWidth
                autoComplete="email"
                value={billingDetails.email}
                onChange={(e) => {
                  setBillingDetails({ ...billingDetails, email: e.target.value });
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                label="Phone"
                id="phone"
                type="tel"
                placeholder="9875-4487"
                required
                fullWidth
                autoComplete="tel"
                value={billingDetails.phone}
                onChange={(e) => {
                  setBillingDetails({ ...billingDetails, phone: e.target.value });
                }}
              />
              <CardField
                onChange={(e) => {
                  setError(e.error);
                  setCardComplete(e.complete);
                }}
              />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
              <Box mt={2}>
                <SubmitButton processing={processing} error={error} disabled={!stripe}>
                  Pay
                </SubmitButton>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage