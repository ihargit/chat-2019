import React from "react";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './Me11nuAppBar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Layout = ({ children }) => (
  <>
    <Container maxWidth="md" className={useStyles().root}>
      <CssBaseline />
      <MenuAppBar />
      {children}
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;