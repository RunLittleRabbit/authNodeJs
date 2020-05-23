import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useSnackbar } from 'notistack';
import * as ErrorSelectors from '../store/errors/selectors';

const HandleErrors = ({ message }) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }
  }, [message]);

  return null;
};
HandleErrors.propTypes = {
  message: PropTypes.string.isRequired,
};

export default connect(
  (state) => ({
    message: ErrorSelectors.errorMessage(state),
  }),
  null,
)(HandleErrors);
