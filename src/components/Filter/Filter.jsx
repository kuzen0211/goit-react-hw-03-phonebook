import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filterContact }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="text" onChange={filterContact}></Input>
      </Label>
    </div>
  );
};

Filter.propType = {
  filterContact: PropTypes.func.isRequired,
};
