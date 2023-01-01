import { TextTitle } from './Ttitle.styled';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return (
    <>
      <TextTitle>{title}</TextTitle>
    </>
  );
};

Title.propType = {
  title: PropTypes.string.isRequired,
};
