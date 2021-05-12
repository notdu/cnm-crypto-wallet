import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Form, Input } from 'antd';
import componentStyles from "assets/theme/views/admin/icons.js";
// core components
import Header from "components/Headers/Header.js";
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import Transaction from "../../models/Transaction";
import { sign, verifySignature } from "../../crypto";
import { publish } from "../../network";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const useStyles = makeStyles(componentStyles);

const Icons = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [copiedText, setCopiedText] = useState();
  const publicKey = localStorage.getItem("publicKey") || "";
  const privateKey = localStorage.getItem("privateKey") || "";
  const [signature, setsignature] = useState("")
  const [password, setpassword] = useState()
  const onFinish = (values) => {
    console.log('Success:', values);
    const transaction = new Transaction(
      publicKey,
      values.address,
      values.amount,
      1,
      signature
    );
    transaction.signature = sign(transaction.hash, privateKey);
    console.log('%c transaction', 'color: blue;', transaction)
    publish("ADD_PENDING_TRANSACTION", {
      transaction
    });
  };
  uef

  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        {/* Table */}
        <Grid container component={Box} marginBottom="39px">
          <Grid item xs={12}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                className={classes.cardHeader}
                title="Send Transaction"
                titleTypographyProps={{
                  component: Box,
                  marginBottom: "0!important",
                  variant: "h3",
                }}
              ></CardHeader>
              <CardContent>
                <Form
                  {...layout}
                  name="basic"
                  style={{ width: "95%" }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    label="To address"
                    name="address"
                    rules={[{ required: true, message: 'Please input address!' }]}
                  >
                    <TextField
                      id="filled-number"
                      style={{ width: "95%" }}
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[{ required: true, message: 'Please input your amount!' }]}
                  >
                    <TextField
                      id="filled-number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                    />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                   </Button>
                  </Form.Item>
                </Form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Icons;
